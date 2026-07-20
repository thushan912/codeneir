import { useState } from 'react';
import { SEO } from '../components/SEO';

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const caseStudies = [
    { id: 'difesa-spam', title: 'Difesa Spam', client: 'B2C Italian Mobile Market', challenge: 'Users bombarded by persistent offshore spam callers seeking data extraction without respecting GDPR guidelines.', solution: 'Formed a completely offline cryptographic index that matches caller headers in milliseconds, keeping individual privacy absolute at near-zero battery penalty.', metric: 'Over 1M+ Spam Calls Blocked' },
    { id: 'promotv', title: 'PromoTV Screen Pipeline', client: 'Retail & Hospitality Industry', challenge: 'Managing digital advertisements across disconnected public-facing TVs was complex and required proprietary box configurations.', solution: 'Constructed an incredibly optimized Web signage engine compatible with cheap media sticks, supporting real-time calendar programming via a central SaaS portal.', metric: '180% Higher In-Store Engagement' },
    { id: 'codisignal', title: 'Codisignal Risk Alerting', client: 'Financial Analysis Groups', challenge: 'Delivering technical swing trade signals securely without forcing users to sit continuously in front of professional terminal tools.', solution: 'Linked an automated multi-stage math model directly to official enterprise WhatsApp pipelines, ensuring immediate high-fidelity push notifications.', metric: '0.1s Signal Dispatch Latency' },
    { id: 'dinuma', title: 'Dinuma Geo Scaling', client: 'Tourism & Events Agency', challenge: 'Slow map render frameworks and corrupt review generation made event hubs unusable over cellular networks.', solution: 'Programmed customizable vector coordinate meshes allowing 60FPS fluid lookups on mobile web with non-malleable rating calculations.', metric: '45k Indexed Community Spots' }
  ];

  return (
    <>
      <SEO
        title="Digital Product Case Studies | Codeneir"
        description="See how Codeneir transforms real human problems into practical, scalable digital products."
        canonicalPath="/case-studies"
      />
      <section className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest block mb-2">CASE STUDIES</span>
              <h1 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">Real Products. Measurable Evidence.</h1>
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase">Optimized for Italian & Global Operations</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} onClick={() => setSelectedCaseStudy(selectedCaseStudy === cs.id ? null : cs.id)} className="bg-[#090D18]/90 border border-slate-900 hover:border-slate-800 p-6 rounded-3xl transition-all duration-300 cursor-pointer relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
                  <div className="space-y-3 min-w-0 flex-1">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-cyan-400 font-extrabold bg-[#22D3EE]/5 px-2.5 py-1 rounded border border-cyan-500/10">{cs.client}</span>
                    <h4 className="font-sans font-bold text-xl text-slate-100 group-hover:text-[#22D3EE] transition-colors leading-tight">{cs.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-2">{cs.challenge}</p>
                  </div>
                  <div className="bg-slate-950 border border-slate-900 p-3 rounded-2xl w-full sm:w-auto text-center shrink-0">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block leading-none mb-1">Impact</span>
                    <span className="font-display font-extrabold text-sm text-emerald-400">{cs.metric}</span>
                  </div>
                </div>
                {selectedCaseStudy === cs.id && (
                  <div className="mt-5 pt-4 border-t border-slate-900 text-xs text-slate-300 leading-relaxed space-y-2 animate-in slide-in-from-top-4 duration-200">
                    <p className="font-semibold text-[#8B5CF6] font-mono">Architectural Solution Summary:</p>
                    <p className="font-sans text-slate-400 text-xs">{cs.solution}</p>
                  </div>
                )}
                <div className="mt-5 flex items-center justify-between text-[10px] font-mono text-[#22D3EE] font-bold">
                  <span>{selectedCaseStudy === cs.id ? 'Close Specifications' : 'Inspect Specifications'}</span>
                  <span>{selectedCaseStudy === cs.id ? '▲' : '▼'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
