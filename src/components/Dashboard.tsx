import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Activity, 
  ChevronDown, 
  Star, 
  Smartphone, 
  ShieldCheck, 
  Settings, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'traffic' | 'logs'>('overview');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [ticker, setTicker] = useState<number>(0);

  // Live simulation ticker for background jobs
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulating live product events
  const liveEvents = [
    { time: '13:04:11', product: 'Difesa Spam', event: 'Blocked 42 robocalls across Milan users', status: 'success' },
    { time: '13:03:52', product: 'Codisignal', event: 'Dispatched AI Trend Signal to WhatsApp subscribers', status: 'info' },
    { time: '13:02:40', product: 'Dinuma', event: 'Indexed 12 new interactive spots in Colombo', status: 'success' },
    { time: '13:01:15', product: 'MotiNote', event: 'Daily affirmation delivery completed for iOS', status: 'success' },
    { time: '13:00:02', product: 'Voice Rep Coach', event: 'Repetition counter vocal engine initialized', status: 'system' },
  ];

  return (
    <div className="w-full bg-[#090D18]/90 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.06)] group">
      {/* Glow corner elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-all duration-700 group-hover:bg-cyan-500/15" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-emerald-400 font-bold uppercase">
              All Systems Active
            </span>
          </div>
          <h3 className="font-sans font-bold text-lg text-slate-100 flex items-center gap-2">
            Codeneir Control Center
            <span className="text-xs font-mono font-medium text-slate-500 px-2 py-0.5 bg-slate-900 rounded-md border border-slate-800">
              {currentTime || 'LIVE'}
            </span>
          </h3>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-mono font-bold transition-all duration-200 rounded-lg ${
              activeTab === 'overview'
                ? 'bg-[#1E293B] text-[#22D3EE] shadow-[0_2px_8px_rgba(34,211,238,0.15)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('traffic')}
            className={`px-3 py-1.5 text-xs font-mono font-bold transition-all duration-200 rounded-lg ${
              activeTab === 'traffic'
                ? 'bg-[#1E293B] text-[#22D3EE] shadow-[0_2px_8px_rgba(34,211,238,0.15)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Stats Growth
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1.5 text-xs font-mono font-bold transition-all duration-200 rounded-lg ${
              activeTab === 'logs'
                ? 'bg-[#1E293B] text-[#22D3EE] shadow-[0_2px_8px_rgba(34,211,238,0.15)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Terminal Feed
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Main Triple Core Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {/* Products Card */}
            <div className="bg-slate-950/70 border border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300">
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
                Products
              </span>
              <div className="my-2 flex items-baseline gap-1">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight font-sans">
                  10+
                </span>
              </div>
              <span className="text-[9px] md:text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Live on Stores
              </span>
            </div>

            {/* Downloads Card */}
            <div className="bg-slate-950/70 border border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
                Downloads
              </span>
              <div className="my-2 flex items-baseline gap-1">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight font-sans">
                  1M+
                </span>
              </div>
              <span className="text-[9px] md:text-[11px] font-medium text-blue-400">
                Across Platforms
              </span>
            </div>

            {/* Rating Card */}
            <div className="bg-slate-950/70 border border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between hover:border-violet-500/30 transition-all duration-300">
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
                Avg Rating
              </span>
              <div className="my-2 flex items-baseline gap-1">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight font-sans">
                  4.8
                </span>
                <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mb-1" />
              </div>
              <span className="text-[9px] md:text-[11px] font-medium text-amber-400">
                User Approved
              </span>
            </div>
          </div>

          {/* Top Products Grid */}
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
                Featured Storefront Work
              </h4>
              <span className="text-[10px] text-[#22D3EE] font-mono hover:underline cursor-pointer">
                View All Systems
              </span>
            </div>

            <div className="overflow-hidden relative">
              <div className="flex gap-3 animate-marquee w-max">
                {/* Set 1 */}
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/difesa spam.png" className="w-full h-full object-cover" alt="Difesa Spam" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Difesa Spam</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Call Blocker</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.9 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/dinuma.png" className="w-full h-full object-cover" alt="Dinuma" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Dinuma</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Event Map & Rating</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.7 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/motinote.png" className="w-full h-full object-cover" alt="MotiNote" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">MotiNote</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Daily Inspire AI</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.9 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/stato.png" className="w-full h-full object-cover" alt="Stato App" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Stato App</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Permesso soggiorno</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.6 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/pinret.png" className="w-full h-full object-cover" alt="PinRet" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">PinRet</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Lost & Found</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.6 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/voice-rep-counter.jpg" className="w-full h-full object-cover" alt="Voice Rep Counter" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Voice Rep</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Fitness Trainer</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      NEW <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>

                {/* Set 2 (Duplicate for seamless loop) */}
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/difesa spam.png" className="w-full h-full object-cover" alt="Difesa Spam" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Difesa Spam</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Call Blocker</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.9 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/dinuma.png" className="w-full h-full object-cover" alt="Dinuma" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Dinuma</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Event Map & Rating</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.7 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/motinote.png" className="w-full h-full object-cover" alt="MotiNote" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">MotiNote</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Daily Inspire AI</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.9 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/stato.png" className="w-full h-full object-cover" alt="Stato App" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Stato App</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Permesso soggiorno</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.6 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/pinret.png" className="w-full h-full object-cover" alt="PinRet" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">PinRet</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Lost & Found</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      4.6 <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#1E293B] rounded-xl flex items-center gap-3 transition-all duration-200 shrink-0 w-56">
                  <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden">
                    <img src="/assets/images/voice-rep-counter.jpg" className="w-full h-full object-cover" alt="Voice Rep Counter" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-sans font-bold text-slate-200 truncate leading-snug">Voice Rep</h5>
                    <p className="text-[9px] font-mono text-slate-500 truncate leading-normal">Fitness Trainer</p>
                    <p className="text-[9px] font-mono text-amber-400 font-bold flex items-center gap-0.5 mt-0.5">
                      NEW <Star className="w-2 h-2 fill-amber-400 stroke-amber-400" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'traffic' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#22D3EE]" />
              <span className="text-xs font-mono font-medium">Monthly Active Sessions (MAS)</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/10">
                +58% vs last month
              </span>
            </div>
          </div>

          {/* Glowing neon SVG line chart */}
          <div className="h-44 w-full bg-slate-950/40 rounded-2xl relative p-2 border border-slate-800/50 flex flex-col justify-end">
            <svg viewBox="0 0 500 150" className="w-full h-32 overflow-visible">
              <defs>
                <linearGradient id="chartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="#1E293B" strokeDasharray="3 3" />

              {/* Shaded Area */}
              <path
                d="M 10 130 C 50 110, 100 120, 150 85 C 200 50, 250 100, 300 45 C 350 -10, 420 50, 490 20 L 490 145 L 10 145 Z"
                fill="url(#chartGlow)"
              />

              {/* Glowing Line */}
              <path
                d="M 10 130 C 50 110, 100 120, 150 85 C 200 50, 250 100, 300 45 C 350 -10, 420 50, 490 20"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                className="drop-shadow-[0_4px_10px_rgba(34,211,238,0.4)]"
              />

              {/* Interactive nodes */}
              <circle cx="150" cy="85" r="5" fill="#22D3EE" stroke="#0F172A" strokeWidth="2" />
              <circle cx="300" cy="45" r="5" fill="#C084FC" stroke="#0F172A" strokeWidth="2" />
              <circle cx="490" cy="20" r="5" fill="#22D3EE" stroke="#0F172A" strokeWidth="2" />
            </svg>

            {/* X Axis time indicators */}
            <div className="flex justify-between px-2 pt-2 border-t border-slate-800/40 text-[9px] font-mono text-slate-500">
              <span>May 15</span>
              <span>May 25</span>
              <span>Jun 05</span>
              <span>Jun 15</span>
              <span>Jun 18 (Today)</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-mono font-medium flex items-center gap-1.5 text-slate-400">
              <Activity className="w-4 h-4 text-violet-400" />
              Product Core Event Bus
            </span>
            <span className="text-[10px] font-mono text-[#22D3EE] animate-pulse">● FEED ONLINE</span>
          </div>

          <div className="h-44 w-full bg-slate-950/80 rounded-2xl p-4 font-mono text-[10px] md:text-xs overflow-y-auto leading-relaxed border border-slate-800/80 space-y-2.5">
            {liveEvents.map((ev, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 border-b border-slate-900 pb-2 last:border-0 hover:bg-slate-900/30 px-1 rounded transition-colors duration-150"
              >
                <span className="text-slate-500 font-bold shrink-0">{ev.time}</span>
                <span className="text-[#22D3EE] font-extrabold shrink-0 bg-cyan-950/30 px-1.5 py-0.5 rounded border border-cyan-500/10 scale-95 uppercase tracking-wide">
                  [{ev.product}]
                </span>
                <span className="text-slate-300 font-medium">{ev.event}</span>
                <span className="ml-auto text-emerald-400 font-extrabold shrink-0 bg-emerald-900/10 px-1 py-0.5 rounded scale-90">
                  OK
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trust Line info */}
      <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-slate-400">
          <span className="text-[10px] font-mono flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Verified Storefronts
          </span>
          <span className="text-[10px] font-mono flex items-center gap-1">
            <Settings className="w-3.5 h-3.5 text-cyan-400" />
            Cloud Optimized
          </span>
        </div>
        <div className="text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
          Node SDK v2.4.0
        </div>
      </div>
    </div>
  );
};
