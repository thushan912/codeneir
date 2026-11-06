#!/usr/bin/env bash
#
# Codeneir production deploy script.
# Usage: ./deploy.sh
#
# Runs: install deps -> build -> prerender -> restart PM2 -> reload Nginx.
# Safe to run repeatedly; it always cleans up its own preview server.

set -euo pipefail

cd "$(dirname "$0")"

PREVIEW_PORT="${PREVIEW_PORT:-4173}"
PM2_NAME="${PM2_NAME:-codeneir}"

echo "=== [1/5] Installing dependencies ==="
npm install --prefer-offline --loglevel=error

echo "=== [2/5] Building production bundle (Vite) ==="
npm run build

echo "=== [3/5] Prerendering static pages ==="

# Kill whatever is listening on the preview port (idempotent cleanup).
cleanup_preview() {
  local pid
  pid="$(ss -tlnp 2>/dev/null | grep ":$PREVIEW_PORT " | grep -oP 'pid=\K[0-9]+' | head -1 || true)"
  if [ -n "$pid" ]; then
    kill "$pid" 2>/dev/null || true
  fi
}
trap cleanup_preview EXIT

# Ensure the port is free before starting (previous run may have leaked).
cleanup_preview
sleep 1

./node_modules/.bin/vite preview --port "$PREVIEW_PORT" --host 127.0.0.1 > /tmp/codeneir-preview.log 2>&1 &

# Wait for the preview server to come up (up to ~30s).
for _ in $(seq 1 30); do
  if curl -s -o /dev/null "http://127.0.0.1:$PREVIEW_PORT"; then
    break
  fi
  sleep 1
done

PREVIEW_PORT="$PREVIEW_PORT" node scripts/prerender.mjs

echo "=== [4/5] Restarting production server (PM2) ==="
if pm2 describe "$PM2_NAME" > /dev/null 2>&1; then
  pm2 restart "$PM2_NAME" --update-env
else
  pm2 start server.js --name "$PM2_NAME"
fi
pm2 save

echo "=== [5/5] Reloading Nginx ==="
nginx -t
nginx -s reload

echo ""
echo "Deploy complete."
echo "  Site:     https://codeneir.com"
echo "  Uploads:  https://codeneir.com/admin/images"
echo "  Images:   https://codeneir.com/images/<filename>"
