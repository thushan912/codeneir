<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/1f1861e4-f682-4d35-b244-ee2a540dc34c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Production Deployment (VPS)

The production build is served by an Express server ([`server.js`](server.js)) that also handles image uploads.

### One-command deploy

From the project root on the VPS, run:

```bash
./deploy.sh
```

or

```bash
npm run deploy
```

This installs dependencies, builds the site, prerenders the pages, restarts the PM2 process, and reloads Nginx — nothing else to remember.

### 1. Build

```bash
npm run build:prerender
```

### 2. Configure environment

Create a `.env` file on the server:

```bash
PORT=3000
UPLOAD_PASSWORD="a-strong-random-secret"
```

### 3. Run with PM2

```bash
npm install -g pm2
pm2 start server.js --name codeneir
pm2 save
pm2 startup
```

### 4. Nginx reverse proxy

Point Nginx at the Node server:

```nginx
server {
    listen 80;
    server_name codeneir.com www.codeneir.com;

    client_max_body_size 15m;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Hidden image manager

- Open `https://codeneir.com/admin/images` (not linked anywhere on the site).
- Enter the `UPLOAD_PASSWORD` from `.env`.
- Upload images; each returns a permanent public URL:

```
https://codeneir.com/images/your-file.jpg
```

Uploaded files are stored in the `uploads/` directory (gitignored) and survive site rebuilds.
