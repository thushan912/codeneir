export default function TechStack() {
  return (
    <section id="stack" className="py-16 md:py-24 bg-slate-950/20 border-t border-slate-900 max-w-7xl mx-auto px-6">
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            BUILT WITH MODERN TECHNOLOGY
          </span>
          <h2 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">
            Our Tech Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            We avoid template scripts. Every ecosystem application is programmed directly inside state-of-the-art frameworks to guarantee zero latency.
          </p>
        </div>

        {/* Moving tech badges container */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto">
          {[
            { name: 'Next.js', color: 'border-slate-800 text-slate-200 bg-slate-950/80' },
            { name: 'TypeScript', color: 'border-blue-500/20 text-blue-300 bg-blue-950/10' },
            { name: 'Tailwind CSS', color: 'border-cyan-500/20 text-cyan-300 bg-cyan-950/10' },
            { name: 'Firebase', color: 'border-amber-500/20 text-amber-300 bg-amber-950/10' },
            { name: 'Supabase', color: 'border-emerald-500/20 text-emerald-300 bg-emerald-950/10' },
            { name: 'Flutter', color: 'border-sky-500/20 text-sky-300 bg-sky-950/10' },
            { name: 'Kotlin', color: 'border-indigo-500/20 text-indigo-300 bg-indigo-950/10' },
            { name: 'Swift', color: 'border-orange-500/20 text-orange-300 bg-orange-950/10' },
            { name: 'OpenAI API', color: 'border-green-500/20 text-green-300 bg-green-950/10' },
            { name: 'Stripe Payments', color: 'border-purple-500/20 text-purple-300 bg-purple-950/10' },
            { name: 'Vercel CDN', color: 'border-white/10 text-white bg-slate-900/50' }
          ].map((tech, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 bg-slate-950 border rounded-2xl text-xs font-mono font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] ${tech.color}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
