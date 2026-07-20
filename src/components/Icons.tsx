import React from 'react';

// Custom SVG high-fidelity product icons matching the visual descriptions
export const DifesaSpamIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl animate-pulse" />
      {/* Outer Shield/Badge with cyber frame */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_10px_15px_rgba(239,68,68,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="cyberBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Shield background */}
        <path
          d="M50 8C65 8 82 14 86 32C86 58 68 78 50 92C32 78 14 58 14 32C18 14 35 8 50 8Z"
          fill="url(#shieldGrad)"
          stroke="url(#cyberBorder)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Red Warning/Ban Ring */}
        <circle cx="50" cy="46" r="18" stroke="#EF4444" strokeWidth="4.5" fill="none" />
        <line x1="37" y1="33" x2="63" y2="59" stroke="#EF4444" strokeWidth="4.5" strokeLinecap="round" />

        {/* Retro phone handset inside */}
        <path
          d="M36 48C36 43 45 35 50 35C55 35 64 43 64 48C64 51 61 54 59 52C55 49 53 49 50 51C47 49 45 49 41 52C39 54 36 51 36 48Z"
          fill="url(#phoneGrad)"
          stroke="#475569"
          strokeWidth="1.5"
          transform="rotate(15 50 46)"
        />
      </svg>
    </div>
  );
};

export const DinumaIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Glow Effect */}
      <div className="absolute inset-x-2 bottom-0 top-4 bg-amber-500/20 rounded-full blur-xl" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(245,158,11,0.2)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="pinEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Pin Drop shadow on map mesh */}
        <ellipse cx="50" cy="88" rx="16" ry="6" fill="#000000" fillOpacity="0.4" />

        {/* Outer Glowing Pin Body */}
        <path
          d="M50 12C28.5 12 11 29.5 11 51C11 75 42 92 50 92C58 92 89 75 89 51C89 29.5 71.5 12 50 12Z"
          fill="url(#pinGrad)"
          stroke="url(#pinEdge)"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Inner Dark Core */}
        <circle cx="50" cy="46" r="22" fill="#0F172A" stroke="#2563EB" strokeWidth="2" />

        {/* Elegant Star in Center */}
        <path
          d="M50 29L54.5 41L67 41.5L57 49.5L61 62L50 54L39 62L43 49.5L33 41.5L45.5 41L50 29Z"
          fill="url(#starGrad)"
          stroke="#F8FAFC"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const MotiNoteIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Sun glow animation background */}
      <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-xl animate-pulse" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_10px_20px_rgba(245,158,11,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEE2E2" />
            <stop offset="25%" stopColor="#FDE047" />
            <stop offset="70%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>
          <linearGradient id="rayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>

        {/* Soft radial background overlay */}
        <circle cx="50" cy="50" r="42" fill="#0D1527" stroke="#1E293B" strokeWidth="2" />

        {/* Stylized Sun Rays */}
        <g stroke="url(#rayGrad)" strokeWidth="4.5" strokeLinecap="round">
          {/* Top & Bottom */}
          <line x1="50" y1="14" x2="50" y2="24" />
          <line x1="50" y1="76" x2="50" y2="86" />
          {/* Left & Right */}
          <line x1="14" y1="50" x2="24" y2="50" />
          <line x1="76" y1="50" x2="86" y2="50" />
          {/* Diagonals */}
          <line x1="24.5" y1="24.5" x2="32.5" y2="32.5" />
          <line x1="67.5" y1="67.5" x2="75.5" y2="75.5" />
          <line x1="75.5" y1="24.5" x2="67.5" y2="32.5" />
          <line x1="32.5" y1="67.5" x2="24.5" y2="75.5" />
        </g>

        {/* Sun Core */}
        <circle cx="50" cy="50" r="18" fill="url(#sunGrad)" stroke="#172554" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export const StatoIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Glassmorphic glow in back */}
      <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-xl" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(59,130,246,0.2)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="italyGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#15803D" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
          <linearGradient id="italyRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
          <linearGradient id="metalRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="lensReflect" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Background Sphere representing Globality */}
        <mask id="globeMask">
          <circle cx="45" cy="45" r="28" fill="#FFFFFF" />
        </mask>

        <g mask="url(#globeMask)">
          {/* Dark space */}
          <circle cx="45" cy="45" r="28" fill="#0C1324" />
          {/* Italian Flag stripes inside globe */}
          <rect x="17" y="17" width="18" height="56" fill="url(#italyGreen)" />
          <rect x="35" y="17" width="20" height="56" fill="#F8FAFC" />
          <rect x="55" y="17" width="18" height="56" fill="url(#italyRed)" />
        </g>

        {/* Shiny Globe Outline */}
        <circle cx="45" cy="45" r="28" stroke="#1E293B" strokeWidth="1" />

        {/* Magnifying Glass Overlay */}
        {/* Glass Lens (mag group) */}
        <g transform="translate(10, 10)">
          {/* Glass Lens Reflection */}
          <circle cx="40" cy="40" r="21" fill="url(#lensReflect)" stroke="#E2E8F0" strokeWidth="0.5" />
          {/* Metallic Rim */}
          <circle cx="40" cy="40" r="21" stroke="url(#metalRim)" strokeWidth="3.5" />
          {/* Glass Handle */}
          <path
            d="M55 55L75 75C78 78 82 74 79 71L59 51"
            stroke="url(#metalRim)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Inner details of handle */}
          <path
            d="M57 57L73 73"
            stroke="#1E293B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export const PromoTVIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Light cyber tube glow */}
      <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl blur-xl" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(6,182,212,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tvCase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="screenNeon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Antennas on TV */}
        <path d="M30 14L45 28" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M70 14L55 28" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="30" cy="14" r="2.5" fill="#22D3EE" />
        <circle cx="70" cy="14" r="2.5" fill="#22D3EE" />

        {/* TV Outer Case (Futuristic Rounded Shape) */}
        <rect x="12" y="28" width="76" height="56" rx="14" fill="url(#tvCase)" stroke="url(#screenNeon)" strokeWidth="3" />

        {/* CRT/Screen Border Accent */}
        <rect x="18" y="34" width="64" height="44" rx="8" fill="#0B1329" stroke="#1E293B" strokeWidth="1.5" />

        {/* Glowing Triangle Play Symbol */}
        <path
          d="M42 42V64L62 53L42 42Z"
          fill="url(#playGrad)"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="animate-pulse"
        />

        {/* Neon Indicator Light */}
        <circle cx="74" cy="70" r="2" fill="#22D3EE" />
      </svg>
    </div>
  );
};

export const CodisignalIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer violet core glow */}
      <div className="absolute inset-x-2 top-2 bottom-4 bg-violet-500/10 rounded-full blur-xl animate-pulse" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(139,92,246,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1E38" />
            <stop offset="100%" stopColor="#0B0B1E" />
          </linearGradient>
          <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="bar1Grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="bar2Grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="bar3Grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>
        </defs>

        {/* Hexagonal Shield Body */}
        <path
          d="M50 8L84 26V64L50 92L16 64V26L50 8Z"
          fill="url(#shieldBg)"
          stroke="url(#shieldBorder)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Trading growth vertical candles (glowing digital bars) inside */}
        {/* Bar 1 */}
        <rect x="30" y="44" width="8" height="24" rx="2" fill="url(#bar1Grad)" />
        <line x1="34" y1="36" x2="34" y2="72" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bar 2 (Central and highest) */}
        <rect x="46" y="32" width="8" height="40" rx="2" fill="url(#bar2Grad)" />
        <line x1="50" y1="24" x2="50" y2="78" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bar 3 */}
        <rect x="62" y="40" width="8" height="20" rx="2" fill="url(#bar3Grad)" />
        <line x1="66" y1="30" x2="66" y2="66" stroke="#D946EF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const PinRetIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Warm orange base glow */}
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(217,119,6,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Map grids pattern backdrop */}
        <circle cx="50" cy="50" r="41" fill="#0C1324" stroke="#1E293B" strokeWidth="2.5" />
        <line x1="30" y1="12" x2="30" y2="88" stroke="#1A243A" strokeWidth="1" />
        <line x1="70" y1="12" x2="70" y2="88" stroke="#1A243A" strokeWidth="1" />
        <line x1="12" y1="30" x2="88" y2="30" stroke="#1A243A" strokeWidth="1" />
        <line x1="12" y1="70" x2="88" y2="70" stroke="#1A243A" strokeWidth="1" />

        {/* Double Curved Arrows in circle resembling Lost and Found cycle */}
        {/* Clockwise top-to-bottom arrow half */}
        <path
          d="M74 50C74 36.75 63.25 26 50 26C45 26 40.3 27.5 36.5 30"
          stroke="url(#ringGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <path d="M30 25L38 31L31 38" fill="url(#ringGrad)" stroke="url(#ringGrad)" strokeWidth="2" strokeLinejoin="round" />

        {/* Clockwise bottom-to-top arrow half */}
        <path
          d="M26 50C26 63.25 36.75 74 50 74C55 74 59.7 72.5 63.5 70"
          stroke="url(#ringGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <path d="M70 75L62 69L69 62" fill="url(#ringGrad)" stroke="url(#ringGrad)" strokeWidth="2" strokeLinejoin="round" />

        {/* Centered Golden Target node pin */}
        <circle cx="50" cy="50" r="9" fill="#0C1324" stroke="#F59E0B" strokeWidth="3" />
        <circle cx="50" cy="50" r="3.5" fill="#F8FAFC" />
      </svg>
    </div>
  );
};

export const VoiceRepIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Lime energy glow in background */}
      <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(16,185,129,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="glowRays" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Outer Circular frame of workout stats */}
        <circle cx="50" cy="50" r="41" fill="#0B1324" stroke="#1E293B" strokeWidth="2.5" />

        {/* Speaker Wave Rings on Left radiating */}
        <path d="M18 42C15 47 15 53 18 58" stroke="url(#glowRays)" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 36C19 44 19 56 24 64" stroke="url(#glowRays)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Glowing Head Profile Silhouette */}
        <path
          d="M62 25C48 25 41 33 41 45C41 48 43 51 43 54C42 56 39 58 39 60C39 63 43 63 45 61C48 68 53 71 63 71C73 71 77 63 77 50C77 37 72 25 62 25Z"
          fill="url(#headGrad)"
          stroke="#10B981"
          strokeWidth="1"
        />

        {/* Headphone element set on the head profile */}
        <rect x="63" y="42" width="7" height="15" rx="3.5" fill="#1E293B" stroke="#F8FAFC" strokeWidth="1.5" />
        <path d="M57 32C64 30 70 34 71 40" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" />

        {/* Glowing kettlebell / barbells graphic symbol at top right */}
        <path
          d="M74 25H82M82 25V29M82 25L77 30M74 25V29M74 25L79 30"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
