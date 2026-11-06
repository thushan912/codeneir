import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Check,
  Copy,
  ImagePlus,
  Loader2,
  LockKeyhole,
  UploadCloud,
  X,
} from 'lucide-react';

interface UploadedImage {
  filename: string;
  url: string;
}

const KEY_FLAG = 'codeneir_upload_unlocked';
const KEY_VALUE = 'codeneir_upload_key';

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

function uploadFile(
  file: File,
  key: string,
  onProgress: (pct: number) => void,
): Promise<UploadedImage> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/upload');
    xhr.setRequestHeader('x-upload-key', key);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
    };

    xhr.onload = () => {
      let data: { filename?: string; url?: string; error?: string } = {};
      try {
        data = JSON.parse(xhr.responseText);
      } catch {
        /* ignore parse errors */
      }

      if (xhr.status === 401) {
        reject(new Error('__unauthorized__'));
      } else if (xhr.status >= 200 && xhr.status < 300 && data.url) {
        resolve({ filename: data.filename || 'image', url: data.url });
      } else {
        reject(new Error(data.error || 'Upload failed.'));
      }
    };

    xhr.onerror = () => reject(new Error('Network error during upload.'));
    const form = new FormData();
    form.append('image', file);
    xhr.send(form);
  });
}

export default function ImageUpload() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(KEY_FLAG) === '1',
  );
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<UploadedImage[]>([]);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSession = () => {
    sessionStorage.removeItem(KEY_FLAG);
    sessionStorage.removeItem(KEY_VALUE);
    setUnlocked(false);
    setPassword('');
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setAuthError('Enter your upload key.');
      return;
    }
    sessionStorage.setItem(KEY_FLAG, '1');
    sessionStorage.setItem(KEY_VALUE, password.trim());
    setAuthError('');
    setUnlocked(true);
  };

  const addFiles = (list: FileList | File[]) => {
    const incoming = Array.from(list).filter(
      (f) => ACCEPTED_TYPES.includes(f.type) || f.type === '',
    );
    if (incoming.length === 0) {
      setError('Only JPG, PNG, WEBP and GIF images are supported.');
      return;
    }
    setError('');
    setFiles((prev) => [...prev, ...incoming]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  };

  const handleUpload = async () => {
    const key = sessionStorage.getItem(KEY_VALUE) || '';
    if (!files.length) {
      setError('Add at least one image first.');
      return;
    }
    setUploading(true);
    setError('');

    const uploaded: UploadedImage[] = [];

    for (const file of files) {
      try {
        const result = await uploadFile(file, key, setProgress);
        uploaded.push(result);
        setResults((prev) => [...prev, result]);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Upload failed.';
        if (message === '__unauthorized__') {
          clearSession();
          setAuthError('Upload key was rejected by the server.');
          break;
        }
        setError(message);
        break;
      }
    }

    setFiles([]);
    setProgress(0);
    setUploading(false);
  };

  const copyUrl = async (url: string, index: number) => {
    const fullUrl = `${window.location.origin}${url}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      setError('Could not copy — select the URL manually.');
    }
  };

  if (!unlocked) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <section className="py-16 md:py-24 border-t border-slate-900 max-w-md mx-auto px-6">
          <form onSubmit={handleUnlock} className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 mx-auto bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center">
                <LockKeyhole className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <h1 className="text-2xl font-extrabold font-sans text-slate-100 tracking-tight">
                Restricted Access
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enter your upload key to open the image manager.
              </p>
            </div>

            <div className="space-y-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Upload key"
                autoFocus
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50"
              />
              {authError && (
                <p className="text-xs text-rose-400">{authError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 font-sans font-bold text-sm rounded-xl text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] transition-all duration-300 cursor-pointer"
            >
              Unlock
            </button>
          </form>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="py-16 md:py-24 border-t border-slate-900 max-w-3xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-widest">
              IMAGE MANAGER
            </span>
            <h1 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">
              Upload Public Images
            </h1>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Images are published to{' '}
              <span className="font-mono text-cyan-400">codeneir.com/images/</span>{' '}
              and get a permanent public URL you can reuse anywhere.
            </p>
          </div>

          {/* Drop zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`relative rounded-2xl border-2 border-dashed p-10 text-center cursor-pointer transition-all duration-200 ${
              dragOver
                ? 'border-cyan-400 bg-cyan-500/10'
                : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files) addFiles(e.target.files);
                e.target.value = '';
              }}
            />
            <UploadCloud className="w-10 h-10 mx-auto text-[#22D3EE] mb-3" />
            <p className="text-sm text-slate-300 font-semibold">
              Drag & drop images here, or click to browse
            </p>
            <p className="text-xs text-slate-500 mt-1">
              JPG · PNG · WEBP · GIF — up to 10 MB each
            </p>
          </div>

          {/* Selected files */}
          {files.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Queued ({files.length})
                </h3>
                <button
                  onClick={() => setFiles([])}
                  className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {files.map((f, i) => (
                  <span
                    key={`${f.name}-${i}`}
                    className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5"
                  >
                    <ImagePlus className="w-3.5 h-3.5 text-cyan-400" />
                    {f.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Progress */}
          {uploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                  Uploading…
                </span>
                <span className="font-mono">{progress}%</span>
              </div>
              <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {error && (
            <p className="text-sm text-rose-400 text-center">{error}</p>
          )}

          <button
            onClick={handleUpload}
            disabled={uploading || files.length === 0}
            className="w-full px-5 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 font-sans font-bold text-sm rounded-xl text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading…' : `Upload ${files.length ? `(${files.length})` : ''}`}
          </button>

          {/* Results */}
          {results.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Published URLs
              </h3>
              <ul className="space-y-2">
                {results.map((r, i) => (
                  <li
                    key={`${r.filename}-${i}`}
                    className="flex items-center gap-3 bg-slate-950/80 border border-slate-800 rounded-xl p-3"
                  >
                    <img
                      src={r.url}
                      alt={r.filename}
                      className="w-12 h-12 object-cover rounded-lg bg-slate-900 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-300 font-mono truncate">
                        {window.location.origin}{r.url}
                      </p>
                    </div>
                    <button
                      onClick={() => copyUrl(r.url, i)}
                      className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-3 py-2 cursor-pointer shrink-0"
                    >
                      {copiedIndex === i ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      {copiedIndex === i ? 'Copied' : 'Copy'}
                    </button>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-300 shrink-0"
                      aria-label="Open image"
                    >
                      <X className="w-4 h-4 rotate-45" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-end border-t border-slate-900 pt-6">
            <button
              onClick={clearSession}
              className="text-xs text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
            >
              Lock & sign out
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
