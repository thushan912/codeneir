import React, { useState } from 'react';
import { Sparkles, Calendar, Smartphone, Cpu, ShieldAlert, Check, HelpCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [projectModel, setProjectModel] = useState<string>('ai');
  const [timeline, setTimeline] = useState<string>('3-4');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [reviewRequested, setReviewRequested] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Persist in local storage so user entries are remembered
    const submission = {
      projectModel,
      timeline,
      name,
      email,
      description,
      company,
      date: new Date().toISOString()
    };
    
    const existing = JSON.parse(localStorage.getItem('codeneir_inquiries') || '[]');
    existing.push(submission);
    localStorage.setItem('codeneir_inquiries', JSON.stringify(existing));

    setSubmitted(true);
  };

  const handleFreeReview = () => {
    setReviewRequested(true);
    setTimeout(() => {
      // open visual overlay or fill template
      setProjectModel('ecosystem');
      setDescription('Hi Codeneir team, I noticed your free project review option in the portal. I would love for you to analyze our current mobile footprint and propose a smarter AI automation workflow. Let us know!');
    }, 400);
  };

  // Live dynamic estimator metrics
  const getEstimation = () => {
    switch(projectModel) {
      case 'mobile':
        return { cost: '$18k - $35k', complexity: 'Medium-High', deliverables: ['App Store Approval', 'React Native / Flutter builds', 'Push Sockets', '1 Year QA'] };
      case 'ai':
        return { cost: '$12k - $28k', complexity: 'High', deliverables: ['Gemini / GPT Integration', 'Agent Prompt Architecture', 'Vector Databases', 'Privacy Layers'] };
      case 'saas':
        return { cost: '$25k - $60k', complexity: 'Extreme', deliverables: ['Stripe billing portal', 'User Accounts/Auth', 'Fully Scalable Dashboard', 'Server Infrastructure'] };
      case 'seo':
        return { cost: '$8k - $15k', complexity: 'Medium', deliverables: ['Metadata schema mapping', 'Core Web Vitals Opt', 'SSG Pre-rendered Pages', 'GA4 + GSC accounts'] };
      case 'ecosystem':
      default:
        return { cost: '$50k+', complexity: 'Enterprise', deliverables: ['Mother brand index site', 'Multiple synced apps', 'Automatic unified alerts', 'Global CDN setup'] };
    }
  };

  const estimate = getEstimation();

  return (
    <div className="w-full bg-[#090D18]/90 border border-slate-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_4px_35px_rgba(139,92,246,0.05)]">
      {/* Background neon orb glow */}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 mx-auto bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20">
            <Check className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-sans font-extrabold text-2xl text-slate-100">
              Project Brief Registered!
            </h4>
            <p className="text-sm font-mono text-slate-400 mt-2 max-w-sm mx-auto">
              Ready to construct. A Codeneir partner will review your system criteria and reach out to <strong>{email}</strong> within 12 hours.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setSubmitted(false);
                setReviewRequested(false);
                setName('');
                setEmail('');
                setDescription('');
                setCompany('');
              }}
              className="px-5 py-2 text-xs font-mono font-bold text-[#22D3EE] bg-slate-950 border border-slate-800 rounded-xl hover:text-slate-200 transition-colors"
            >
              Configure Another System
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Columns - Inputs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold text-[#22D3EE] uppercase tracking-widest block mb-2">
                PROJECT CONFIGURATION
              </span>
              <h3 className="text-2xl font-bold font-sans text-slate-100 tracking-tight">
                Build With Codeneir
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Tell us about your system requirements. Our studio engineers will map out a full architectural layout.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project Type Grid */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  1. Target Solution
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setProjectModel('ai')}
                    className={`p-3 text-left rounded-xl border font-mono text-xs transition-all duration-200 flex flex-col justify-between ${
                      projectModel === 'ai'
                        ? 'bg-violet-950/20 border-violet-500/60 text-violet-300'
                        : 'bg-slate-950/80 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <Cpu className="w-4 h-4 mb-2" />
                    <span>AI Product</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectModel('mobile')}
                    className={`p-3 text-left rounded-xl border font-mono text-xs transition-all duration-200 flex flex-col justify-between ${
                      projectModel === 'mobile'
                        ? 'bg-cyan-950/20 border-cyan-500/60 text-cyan-300'
                        : 'bg-slate-950/80 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 mb-2" />
                    <span>Mobile App</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectModel('saas')}
                    className={`p-3 text-left rounded-xl border font-mono text-xs transition-all duration-200 flex flex-col justify-between ${
                      projectModel === 'saas'
                        ? 'bg-blue-950/20 border-blue-500/60 text-blue-300'
                        : 'bg-slate-950/80 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <Calendar className="w-4 h-4 mb-2" />
                    <span>SaaS Platform</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectModel('seo')}
                    className={`p-3 text-left rounded-xl border font-mono text-xs transition-all duration-200 flex flex-col justify-between ${
                      projectModel === 'seo'
                        ? 'bg-emerald-950/20 border-emerald-500/60 text-emerald-300'
                        : 'bg-slate-950/80 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 mb-2" />
                    <span>SEO & Growth</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectModel('ecosystem')}
                    className={`p-3 text-left rounded-xl border font-mono text-xs col-span-2 sm:col-span-2 transition-all duration-200 flex flex-row items-center justify-between ${
                      projectModel === 'ecosystem'
                        ? 'bg-[#1E293B] border-slate-500/60 text-slate-200'
                        : 'bg-slate-950/80 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#22D3EE]" />
                      <span>Ecosystem / All Products Combo</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Basic Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                    Your Name *
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Matteo Ross"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                    Email Address *
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="E.g., matteo@studio.it"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                    Company / Brand (Optional)
                  </span>
                  <input
                    type="text"
                    placeholder="E.g., Milan Tech Group"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                    Requested Timeline
                  </span>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    aria-label="Requested project timeline"
                    className="w-full bg-slate-950 border border-slate-900 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    <option value="1-2">⚡ 1 to 2 Months (Rapid Release)</option>
                    <option value="3-4">🚀 3 to 4 Months (Recommended)</option>
                    <option value="4+">🏢 4+ Months (Complex Ecosystem)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  Project Scope / Idea Context
                </span>
                <textarea
                  rows={3}
                  placeholder="Summarize features, target users, active web/app reference channels..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-900 rounded-xl p-4 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              {/* Form Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-xl text-xs font-sans font-bold text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Configure & Start Project
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-white/20 rounded">→</span>
                </button>

                <button
                  type="button"
                  onClick={handleFreeReview}
                  className="w-full sm:w-auto px-5 py-3.5 bg-slate-950 border border-slate-900 text-slate-300 hover:text-white hover:border-slate-800 rounded-xl text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {reviewRequested ? 'Brief Filled!' : 'Request Free Project Review'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Virtual Cost Estimator & Deliverables summary */}
          <div className="lg:col-span-5 bg-slate-950/40 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Live Estimate Index
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 uppercase font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
                  Active Quote
                </span>
              </div>

              {/* Estimate visualization */}
              <div>
                <span className="text-xs font-mono text-slate-400">Target Range</span>
                <div className="text-3xl font-bold font-sans text-slate-100 mt-1 tracking-tight">
                  {estimate.cost}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-900 text-slate-400 border border-slate-800 rounded">
                    Complexity: {estimate.complexity}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-900 text-slate-400 border border-slate-800 rounded">
                    Dev cycle: {timeline} Months
                  </span>
                </div>
              </div>

              {/* Deliverables checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  Included Architecture Deliverables:
                </span>
                <div className="space-y-2">
                  {estimate.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/10">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span className="text-[#94A3B8] font-medium">{del}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-4 h-4 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/10">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span className="text-slate-400 font-mono font-bold">SEO-Optimized Metadata Schema</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality badge footer lock */}
            <div className="pt-4 border-t border-slate-900/80 text-[11px] text-slate-400 font-sans leading-relaxed space-y-2">
              <p className="font-semibold text-[#22D3EE] font-mono text-xs">
                The Codeneir Launch Promise:
              </p>
              <p className="text-slate-500 leading-normal text-[11px]">
                Every app and microservice is custom programmed with clean TypeScript, hosted on lightning-fast global networks, and structured for absolute SEO central authority. No templates, no generic low-level components.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
