import dotenv from 'dotenv';
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const UPLOAD_PASSWORD = process.env.UPLOAD_PASSWORD || '';

const distDir = path.join(__dirname, 'dist');
const uploadsDir = path.join(__dirname, 'uploads');

// Allowed image types (SVG intentionally excluded: it can carry scripts).
const ALLOWED_MIME = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
]);

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

// Ensure the uploads directory always exists.
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const app = express();
app.use(express.json());

// ---------- Helpers ----------

function sanitizeFilename(originalName) {
  const ext = path.extname(originalName).toLowerCase().slice(0, 10);
  const base = path
    .basename(originalName, path.extname(originalName))
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

  return `${base || 'image'}${ext}`;
}

function uniqueFilename(filename) {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  const full = path.join(uploadsDir, filename);

  if (!fs.existsSync(full)) return filename;

  let counter = 1;
  while (fs.existsSync(path.join(uploadsDir, `${base}-${counter}${ext}`))) {
    counter += 1;
  }
  return `${base}-${counter}${ext}`;
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => cb(null, uniqueFilename(sanitizeFilename(file.originalname))),
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_SIZE, files: 1 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_MIME.has(file.mimetype)) {
      return cb(new Error('Only JPG, PNG, WEBP and GIF images are allowed.'));
    }
    cb(null, true);
  },
});

// ---------- Static assets ----------

// User-uploaded images are served from the uploads directory at /images/...
app.use(
  '/images',
  express.static(uploadsDir, {
    index: false,
    dotfiles: 'deny',
    maxAge: '7d',
    setHeaders: (res) => {
      res.setHeader('X-Content-Type-Options', 'nosniff');
    },
  }),
);

// Prebuilt site (dist/). Serves the prerendered HTML pages and hashed assets.
app.use(express.static(distDir, { maxAge: '1h' }));

// ---------- API ----------

app.post('/api/upload', (req, res) => {
  if (!UPLOAD_PASSWORD) {
    return res
      .status(503)
      .json({ error: 'UPLOAD_PASSWORD is not configured on the server.' });
  }

  if (req.headers['x-upload-key'] !== UPLOAD_PASSWORD) {
    return res.status(401).json({ error: 'Invalid upload key.' });
  }

  upload.single('image')(req, res, (err) => {
    if (err) {
      const message =
        err.code === 'LIMIT_FILE_SIZE'
          ? 'File is too large (max 10 MB).'
          : err.message || 'Upload failed.';
      return res.status(400).json({ error: message });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No image file was provided.' });
    }

    const publicUrl = `/images/${req.file.filename}`;
    res.status(201).json({
      ok: true,
      filename: req.file.filename,
      url: publicUrl,
    });
  });
});

// ---------- SPA fallback ----------

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/') || req.path.startsWith('/images/')) {
    return next();
  }

  const indexFile = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexFile)) {
    return res
      .status(503)
      .send('Build output not found. Run "npm run build" on the server first.');
  }
  res.sendFile(indexFile);
});

// ---------- Error handler ----------

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Codeneir server running on http://localhost:${PORT}`);
  console.log(`Uploads served from ${uploadsDir}`);
  if (!UPLOAD_PASSWORD) {
    console.warn('WARNING: UPLOAD_PASSWORD is not set — uploads are disabled.');
  }
});
