import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Cpu, 
  Globe, 
  Sparkles, 
  TrendingUp, 
  Settings2, 
  Rocket, 
  Search, 
  Gauge, 
  Code, 
  Mail, 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  ExternalLink,
  Layers,
  CheckCircle,
  Clock,
  MapPin,
  Flame,
  Star,
  MessageSquareOff
} from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Ecosystem } from './components/Ecosystem';
import { ContactForm } from './components/ContactForm';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'mobile' | 'ai' | 'automation'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  // SEO Organization/Software schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codeneir Inc",
    "alternateName": "Codeneir AI Studio",
    "url": "https://codeneir.com",
    "logo": "https://codeneir.com/logo.png",
    "description": "Codeneir Inc builds premium AI-powered applications, automation systems, SaaS tools, and conversion-focused growth platforms.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-333-926-2314",
      "contactType": "customer service",
      "email": "hello@codeneir.com",
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://github.com/codeneir",
      "https://twitter.com/codeneir"
    ]
  };

  const caseStudies = [
    {
      id: 'difesa-spam',
      title: 'Difesa Spam',
      client: 'B2C Italian Mobile Market',
      challenge: 'Users bombarded by persistent offshore spam callers seeking data extraction without respecting GDPR guidelines.',
      solution: 'Formed a completely offline cryptographic index that matches caller headers in milliseconds, keeping individual privacy absolute at near-zero battery penalty.',
      metric: 'Over 1M+ Spam Calls Blocked',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'promotv',
      title: 'PromoTV Screen Pipeline',
      client: 'Retail & Hospitality Industry',
      challenge: 'Managing digital advertisements across disconnected public-facing TVs was complex and required proprietary box configurations.',
      solution: 'Constructed an incredibly optimized Web signage engine compatible with cheap media sticks, supporting real-time calendar programming via a central SaaS portal.',
      metric: '180% Higher In-Store Engagement',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'codisignal',
      title: 'Codisignal Risk Alerting',
      client: 'Financial Analysis Groups',
      challenge: 'Delivering technical swing trade signals securely without forcing users to sit continuously in front of professional terminal tools.',
      solution: 'Linked an automated multi-stage math model directly to official enterprise WhatsApp pipelines, ensuring immediate high-fidelity push notifications.',
      metric: '0.1s Signal Dispatch Latency',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'dinuma',
      title: 'Dinuma Geo Scaling',
      client: 'Tourism & Events Agency',
      challenge: 'Slow map render frameworks and corrupt review generation made event hubs unusable over cellular networks.',
      solution: 'Programmed customizable vector coordinate meshes allowing 60FPS fluid lookups on mobile web with non-malleable rating calculations.',
      metric: '45k Indexed Community Spots',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="font-sans min-h-screen text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Dynamic structured representation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Cybernetic background base elements */}
      <div className="fixed inset-0 bg-[#05070D] pointer-events-none z-0" />
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.15), transparent 35%),
            radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.18), transparent 35%),
            radial-gradient(circle at 50% 80%, rgba(37, 99, 235, 0.12), transparent 45%)
          `
        }}
      />

      {/* HEADER SECTION */}
      <header className="sticky top-0 z-40 bg-[#05070D]/75 backdrop-blur-xl border-b border-slate-900/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo design */}
          <a href="#" className="flex items-center gap-2.5 group relative">
            <div className="relative w-10 h-10 flex items-center justify-center bg-slate-950 border border-slate-800 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.1)] group-hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute inset-0.5 border border-dashed border-slate-900/60 rounded-full animate-spin [animation-duration:12s]" />
              <span className="font-mono text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 select-none relative z-10">
                {'{:}'}
              </span>
            </div>
            <div className="text-center">
              <span className="font-display font-extrabold text-base tracking-wider text-slate-100 uppercase sm:text-lg">
                Codeneir
              </span>
              <span className="text-[9px] font-mono block text-[#22D3EE] font-bold tracking-widest leading-none mt-0.5">
                PRODUCT STUDIO
              </span>
            </div>
          </a>

          {/* Nav Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-wider text-slate-400">
            <a href="#ecosystem" className="hover:text-white transition-colors">Portfolios</a>
            <a href="#services" className="hover:text-white transition-colors">Solutions</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#stack" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#why-partner" className="hover:text-white transition-colors">Why Codeneir</a>
          </nav>

          {/* Header Action CTA Button (Stripe style glow) */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 font-sans font-bold text-xs rounded-xl shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-white"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Hamburger Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-950/80 border border-slate-900 rounded-xl text-slate-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 animate-spin duration-75" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#05070D]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-6 border-b border-slate-900 animate-in fade-in duration-200">
          <nav className="flex flex-col items-center gap-6 text-base font-mono font-bold text-slate-400">
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Our Ecosystem
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Services / What We Build
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Technology Stack
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 mt-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl font-sans font-bold text-sm text-center text-white shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              Start Your Project Now
            </a>
          </nav>
        </div>
      )}

      {/* CORE CONTENT SEGMENT */}
      <main className="flex-grow z-10 relative">

        {/* 1. HERO SECTION */}
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
                  href="#ecosystem"
                  className="px-7 py-4 bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-[#F8FAFC] font-sans font-bold text-sm text-center rounded-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  View Our Work
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-200 transition-colors" />
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

        {/* 2. PRODUCT ECOSYSTEM GRID SECTION */}
        <section id="ecosystem" className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6 scroll-mt-10">
          <Ecosystem />
        </section>

        {/* 3. SERVICES GRID ("What We Build") */}
        <section id="services" className="py-16 md:py-24 border-t border-slate-900 bg-slate-950/30 scroll-mt-10">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-widest">
                WHAT WE BUILD
              </span>
              <h2 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">
                Services That Drive Growth
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                We custom-engineer digital frameworks configured for high performance, intuitive interface loops, and massive Organic customer acquisition.
              </p>
            </div>

            {/* Grid display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Mobile App Development */}
              <div className="bg-[#090D18]/80 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 text-[#22D3EE] flex items-center justify-center border border-cyan-500/10 mb-5 relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Smartphone className="w-5 h-5 relative z-10" />
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-100 group-hover:text-[#22D3EE] transition-colors">
                  Mobile App Development
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">Android • iOS • Flutter • Swift • Kotlin</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-performance, eye-safe mobile applications loaded directly to official App Store and Play Store storefronts. Meticulously programmed for fluid screen transitions and persistent network reliability.
                </p>
              </div>

              {/* AI Product Development */}
              <div className="bg-[#090D18]/80 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-violet-950/40 text-violet-400 flex items-center justify-center border border-violet-500/10 mb-5 relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Cpu className="w-5 h-5 relative z-10" />
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-100 group-hover:text-violet-400 transition-colors">
                  AI Product Development
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">Assistants • Automation Agents • WhatsApp AI</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Intelligent cognitive agents, automated prompt structures, and smart WhatsApp notifications. We wire generative AI directly into your CRM pipelines to streamline client onboarding loops.
                </p>
              </div>

              {/* SaaS Platforms */}
              <div className="bg-[#090D18]/80 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-950/40 text-blue-400 flex items-center justify-center border border-blue-500/10 mb-5 relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <Layers className="w-5 h-5 relative z-10" />
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-100 group-hover:text-blue-400 transition-colors">
                  SaaS Platforms
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">Corporate Dashboards • Stripe Subscriptions</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Highly secure server dashboards, robust user permission systems, and automated billing engines. Designed with scalable cloud infrastructure to manage thousands of active user connections.
                </p>
              </div>

              {/* SEO & Growth */}
              <div className="bg-[#090D18]/80 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/40 text-emerald-400 flex items-center justify-center border border-emerald-500/10 mb-5 relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <TrendingUp className="w-5 h-5 relative z-10" />
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-100 group-hover:text-emerald-400 transition-colors">
                  SEO & Growth Systems
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">Prinstine Core Web Vitals • Metadata Structuring</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Technical search engine optimizations configured to climb search engines instantly. Code assets are pre-rendered with semantic layouts for lightning-fast speeds and ideal Core Web Vitals ranks.
                </p>
              </div>

              {/* Automation Systems */}
              <div className="bg-[#090D18]/80 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber-950/40 text-amber-400 flex items-center justify-center border border-amber-500/10 mb-5 relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <Settings2 className="w-5 h-5 relative z-10" />
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-100 group-hover:text-amber-400 transition-colors">
                  Automation Systems
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">CRM Syncing • Webhooks • Custom Pipelines</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminate manual overhead by routing system logs directly to automated pipelines. We synchronise data feeds, databases, and notification services to save hundreds of developer hours.
                </p>
              </div>

              {/* Landing Page Design */}
              <div className="bg-[#090D18]/80 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-rose-950/40 text-rose-400 flex items-center justify-center border border-rose-500/10 mb-5 relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                  <Rocket className="w-5 h-5 relative z-10" />
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-100 group-hover:text-rose-400 transition-colors">
                  Landing Pages
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">High Conversion Layouts • Premium Media Sites</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Visually impactful digital products crafted with premium Space Grotesk and Inter pairings. Focused strictly on transforming random web visitors into highly validated contract leads.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. CASE STUDIES IN ACTION PANEL */}
        <section id="case-studies" className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6 scroll-mt-10">
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest block mb-2">
                  CASE STUDIES
                </span>
                <h2 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">
                  Real Products. Measurable Evidence.
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase">
                Optimized for Italian & Global Operations
              </span>
            </div>

            {/* Case list grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => setSelectedCaseStudy(selectedCaseStudy === cs.id ? null : cs.id)}
                  className="bg-[#090D18]/90 border border-slate-900 hover:border-slate-800 p-6 rounded-3xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
                    <div className="space-y-3 min-w-0 flex-1">
                      <span className="text-[10px] uppercase tracking-wider font-mono text-cyan-400 font-extrabold bg-[#22D3EE]/5 px-2.5 py-1 rounded border border-cyan-500/10">
                        {cs.client}
                      </span>
                      <h4 className="font-sans font-bold text-xl text-slate-100 group-hover:text-[#22D3EE] transition-colors leading-tight">
                        {cs.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-2">
                        {cs.challenge}
                      </p>
                    </div>

                    {/* Metric indicator highlight badge */}
                    <div className="bg-slate-950 border border-slate-900 p-3 rounded-2xl w-full sm:w-auto text-center shrink-0">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block leading-none mb-1">Impact</span>
                      <span className="font-display font-extrabold text-sm text-emerald-400">
                        {cs.metric}
                      </span>
                    </div>
                  </div>

                  {/* Expandable technical log */}
                  {selectedCaseStudy === cs.id && (
                    <div className="mt-5 pt-4 border-t border-slate-900 text-xs text-slate-300 leading-relaxed space-y-2 animate-in slide-in-from-top-4 duration-200">
                      <p className="font-semibold text-[#8B5CF6] font-mono">Architectural Solution Summary:</p>
                      <p className="font-sans text-slate-400 text-xs">
                        {cs.solution}
                      </p>
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

        {/* 5. TECHNOLOGY STACK AREA */}
        <section id="stack" className="py-16 bg-slate-950/20 border-t border-slate-900 scroll-mt-10">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
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

        {/* 6. WHY CONDEIR INC */}
        <section id="why-partner" className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6 scroll-mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-widest block">
                WHY PARTNER WITH US
              </span>
              <h2 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">
                Built Like Products, Not Just Websites
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We do not only design static informational pages. We program highly responsive product ecosystems: mobile apps, central SaaS admin portals, automation databases, and search engine authorities.
              </p>
              
              <div className="p-4 bg-slate-950/80 border border-slate-900 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 block uppercase">
                  Google Search Core Principles:
                </span>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  "Google search systems favor helpful, reliable, original content that satisfies core safety metrics." Our engineering frameworks comply tightly with crawlability index regulations, rapid rendering pipelines, clean schema data, and mobile usability standard checkpoints.
                </p>
              </div>
            </div>

            {/* Right proof blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Block 1 */}
              <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3">
                <div className="w-9 h-9 bg-cyan-950/50 text-[#22D3EE] border border-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </div>
                <h5 className="font-sans font-bold text-slate-100 text-base">
                  SEO-First Architecture
                </h5>
                <p className="text-slate-400 text-xs leading-normal">
                  Pre-compiled static layouts with precise sitemap configurations and JSON-LD schema so you index organically from day one.
                </p>
              </div>

              {/* Block 2 */}
              <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3">
                <div className="w-9 h-9 bg-violet-950/50 text-violet-400 border border-violet-500/10 rounded-lg flex items-center justify-center">
                  <Gauge className="w-4 h-4" />
                </div>
                <h5 className="font-sans font-bold text-slate-100 text-base">
                  Lightning Performance
                </h5>
                <p className="text-slate-400 text-xs leading-normal">
                  Pristine optimization checks delivering exceptional Core Web Vitals rankings for overall desktop and mobile usability.
                </p>
              </div>

              {/* Block 3 */}
              <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3">
                <div className="w-9 h-9 bg-emerald-950/50 text-emerald-400 border border-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h5 className="font-sans font-bold text-slate-100 text-base">
                  App Store Excellence
                </h5>
                <p className="text-slate-400 text-xs leading-normal">
                  Our systems have managed and compiled multiple applications exceeding 1M+ downloads with extensive ratings validation.
                </p>
              </div>

              {/* Block 4 */}
              <div className="p-5 bg-[#090D18]/90 border border-slate-900 rounded-2xl space-y-3">
                <div className="w-9 h-9 bg-blue-950/50 text-blue-400 border border-blue-500/10 rounded-lg flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h5 className="font-sans font-bold text-slate-100 text-base">
                  Scalable Systems Only
                </h5>
                <p className="text-slate-400 text-xs leading-normal">
                  Custom decoupled backend tables, standard type structures, and security checks protecting you against server load inflation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 7. CONTACT / CTA AREA - Form Embedded & Cyber Logo */}
        <section id="contact" className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Embed Form Column */}
            <div className="lg:col-span-8 w-full">
              <ContactForm />
            </div>

            {/* Right Column Cyber Brand Portal */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-6 bg-slate-950/45 p-8 border border-slate-900 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-violet-500/5 rounded-3xl" />
              
              {/* Glowing circular cyber logo gate */}
              <div className="relative w-36 h-36 flex items-center justify-center bg-slate-950 border border-slate-800 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.05)] group-hover:border-cyan-500/30 transition-all duration-300">
                <div className="absolute inset-1 border border-dashed border-slate-900/60 rounded-full animate-spin [animation-duration:15s]" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 select-none">
                    {'{:}'}
                  </span>
                </div>
              </div>

              <div className="space-y-2 relative">
                <h4 className="font-display font-extrabold text-lg text-slate-200 uppercase tracking-widest">
                  Codeneir Portal
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">
                  Enter your configuration specifications to connect your requirements to an active studio partner immediately.
                </p>
              </div>

              {/* Secure status tags */}
              <div className="pt-2 flex flex-wrap justify-center gap-2 relative">
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-900/10 px-2.5 py-1 rounded border border-emerald-500/10 font-bold">
                  ● Engineers Available
                </span>
                <span className="text-[9px] font-mono text-slate-500 bg-slate-950 px-2.5 py-1 rounded border border-slate-900 font-bold">
                  GDPR Safe
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-[#05070D] border-t border-slate-900/85 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
          
          {/* Main detailed grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-tr from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center">
                  <span className="font-mono text-xs font-black text-slate-950">
                    {'{:}'}
                  </span>
                </div>
                <span className="font-display font-bold text-slate-200 tracking-wider">
                  CODENEIR INC
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                AI Apps, Automation & Digital Product Studio. Programmed elegantly with a focus on pristine client acquisition and scalable execution.
              </p>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-[#22D3EE] uppercase tracking-widest">
                Direct Channels
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-center gap-2 group hover:text-white transition-colors duration-150">
                  <Mail className="w-4 h-4 text-slate-600 group-hover:text-[#22D3EE]" />
                  <a href="mailto:hello@codeneir.com">hello@codeneir.com</a>
                </li>
                <li className="flex items-center gap-2 group hover:text-white transition-colors duration-150">
                  <Phone className="w-4 h-4 text-slate-600 group-hover:text-emerald-400" />
                  <a href="tel:+393339262314">+39 333 926 2314</a>
                </li>
                <li className="flex items-center gap-2 group hover:text-white transition-colors duration-150">
                  <Globe className="w-4 h-4 text-slate-600 group-hover:text-violet-400" />
                  <a href="https://codeneir.com" target="_blank" rel="noopener noreferrer">codeneir.com</a>
                </li>
              </ul>
            </div>

            {/* Solutions shortcuts */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                Key Solutions
              </h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#ecosystem" className="hover:text-white transition-colors">Digital App Ecosystem</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI & WhatsApp Automations</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SaaS Database Platforms</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Technical ASO & SEO Engines</a></li>
              </ul>
            </div>

            {/* Location Indicators */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                Global Operations
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Italy-Based, Worldwide-Ready</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-950 border border-slate-900 rounded-lg max-w-[140px]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                    Flag: 🇮🇹 Milan
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 Codeneir Inc. All rights reserved. Registered trademark in Italy and globally.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400">Cookie Protocol</a>
              <span>•</span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 font-bold bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10">
                LCP 0.8s (Perfect)
              </span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
