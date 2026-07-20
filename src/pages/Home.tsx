import { Dashboard } from '../components/Dashboard';

export default function Home() {
  return (
    <section className="pt-8 pb-16 md:py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text & Buttons */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-6 duration-700">
          
          {/* Product Badge Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950/80 border border-slate-900 rounded-full">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 tracking-widest uppercase">
              AI • Automation • Growth Ecosystem
            </span>
          </div>

          {/* Main Display Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-[1.05]">
            AI Apps, Automation & Digital Products Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#2563EB] to-[#8B5CF6] font-extrabold drop-shadow-[0_2px_10px_rgba(34,211,238,0.15)]">Real Growth</span>
          </h1>

          {/* Precise positioning body paragraph */}
          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
            Codeneir Inc builds mobile apps, SaaS platforms, AI assistants, SEO systems, and automation tools that help modern businesses launch faster, work smarter, and grow online.
          </p>

          {/* Buttons Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#22D3EE] via-[#2563EB] to-[#8B5CF6] text-white font-sans font-bold text-sm text-center rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Start a Project
            </a>
            <a
              href="#/portfolios"
              className="px-7 py-4 bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-[#F8FAFC] font-sans font-bold text-sm text-center rounded-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Our Work
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-slate-200 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          {/* Quality checks line */}
          <div className="pt-4 border-t border-slate-900/60 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span> Premium Quality
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-cyan-400 font-bold">⚡</span> Fast Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-violet-400 font-bold">🔒</span> Secure & Reliable
            </span>
          </div>
        </div>

        {/* Right Column Control Center Dashboard */}
        <div className="lg:col-span-6 w-full animate-in fade-in slide-in-from-right-6 duration-700">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
