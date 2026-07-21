import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'node:fs';
import {defineConfig, type Plugin} from 'vite';

// Automatically copies root-level assets/ into dist/assets/ at build time.
// This removes the need to manually move assets/ into public/ on every checkout.
function copyAssetsPlugin(): Plugin {
  return {
    name: 'copy-assets',
    apply: 'build',
    closeBundle() {
      const src = path.resolve(__dirname, 'assets');
      const dest = path.resolve(__dirname, 'dist', 'assets');
      if (fs.existsSync(src)) {
        fs.cpSync(src, dest, {recursive: true, force: true});
        console.log('  ✓ Synced root assets/ → dist/assets/');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), copyAssetsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
