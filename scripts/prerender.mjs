import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const siteUrl = 'https://codeneir.com';
const port = 4173; // Vite preview default port

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/portfolio', file: 'portfolio/index.html' },
  { path: '/solutions', file: 'solutions/index.html' },
  { path: '/case-studies', file: 'case-studies/index.html' },
  { path: '/technology', file: 'technology/index.html' },
  { path: '/why-codeneir', file: 'why-codeneir/index.html' },
];

async function prerender() {
  console.log('Starting prerender...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  for (const route of routes) {
    const url = `http://localhost:${port}${route.path}`;
    console.log(`Prerendering: ${url}`);

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for React to hydrate and Helmet to inject meta tags
    await page.waitForSelector('#root', { timeout: 10000 });
    await new Promise(r => setTimeout(r, 2000)); // Extra wait for async rendering

    const html = await page.content();

    // Write the static HTML
    const outPath = join(distDir, route.file);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, 'utf-8');
    console.log(`  → Saved: ${route.file}`);
  }

  await browser.close();
  console.log('Prerender complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
