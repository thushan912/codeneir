import { Search, Gauge, Smartphone, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function WhyCodeneir() {
  return (
    <>
      <SEO
        title="Why Partner with Codeneir | Digital Product Studio"
        description="Learn how Codeneir combines product strategy, engineering and human-first design to build meaningful digital solutions."
        canonicalPath="/why-codeneir"
      />
      <section className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-widest block">WHY PARTNER WITH US</span>
            <h1 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">Built Like Products, Not Just Websites</h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">We do not only design static informational pages. We program highly responsive product ecosystems: mobile apps, central SaaS admin portals, automation databases, and search engine authorities.</p>
            <div className="p-4 bg-slate-950/80 border border-slate-900 rounded-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 block uppercase">Google Search Core Principles:</span>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">"Google search systems favor helpful, reliable, original content that satisfies core safety metrics." Our engineering frameworks comply tightly with crawlability index regulations, rapid rendering pipelines, clean schema data, and mobile usability standard checkpoints.</p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3"><div className="w-9 h-9 bg-cyan-950/50 text-[#22D3EE] border border-cyan-500/10 rounded-lg flex items-center justify-center"><Search className="w-4 h-4" /></div><h5 className="font-sans font-bold text-slate-100 text-base">SEO-First Architecture</h5><p className="text-slate-400 text-xs leading-normal">Pre-compiled static layouts with precise sitemap configurations and JSON-LD schema so you index organically from day one.</p></div>
            <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3"><div className="w-9 h-9 bg-violet-950/50 text-violet-400 border border-violet-500/10 rounded-lg flex items-center justify-center"><Gauge className="w-4 h-4" /></div><h5 className="font-sans font-bold text-slate-100 text-base">Lightning Performance</h5><p className="text-slate-400 text-xs leading-normal">Pristine optimization checks delivering exceptional Core Web Vitals rankings for overall desktop and mobile usability.</p></div>
            <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3"><div className="w-9 h-9 bg-emerald-950/50 text-emerald-400 border border-emerald-500/10 rounded-lg flex items-center justify-center"><Smartphone className="w-4 h-4" /></div><h5 className="font-sans font-bold text-slate-100 text-base">App Store Excellence</h5><p className="text-slate-400 text-xs leading-normal">Our systems have managed and compiled multiple applications exceeding 1M+ downloads with extensive ratings validation.</p></div>
            <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3"><div className="w-9 h-9 bg-blue-950/50 text-blue-400 border border-blue-500/10 rounded-lg flex items-center justify-center"><Layers className="w-4 h-4" /></div><h5 className="font-sans font-bold text-slate-100 text-base">Scalable Systems Only</h5><p className="text-slate-400 text-xs leading-normal">Custom decoupled backend tables, standard type structures, and security checks protecting you against server load inflation.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
