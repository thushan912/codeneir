import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X,
  Mail, 
  Phone, 
  Globe, 
  MapPin
} from 'lucide-react';
import Home from './pages/Home';
import Portfolios from './pages/Portfolios';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import TechStack from './pages/TechStack';
import WhyCodeneir from './pages/WhyCodeneir';
import { ContactForm } from './components/ContactForm';

function getPageFromHash(): string {
  const hash = window.location.hash.replace('#/', '');
  return hash || 'home';
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
      setMobileMenuOpen(false);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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

  const isHome = currentPage === 'home';

  const renderPage = () => {
    switch (currentPage) {
      case 'portfolios': return <Portfolios />;
      case 'solutions': return <Solutions />;
      case 'case-studies': return <CaseStudies />;
      case 'tech-stack': return <TechStack />;
      case 'why-codeneir': return <WhyCodeneir />;
      default: return <Home />;
    }
  };

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
          <a href="#/" className="flex items-center gap-2.5 group relative">
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
            <a href="#/portfolios" className={`hover:text-white transition-colors ${currentPage === 'portfolios' ? 'text-[#22D3EE]' : ''}`}>Portfolios</a>
            <a href="#/solutions" className={`hover:text-white transition-colors ${currentPage === 'solutions' ? 'text-[#22D3EE]' : ''}`}>Solutions</a>
            <a href="#/case-studies" className={`hover:text-white transition-colors ${currentPage === 'case-studies' ? 'text-[#22D3EE]' : ''}`}>Case Studies</a>
            <a href="#/tech-stack" className={`hover:text-white transition-colors ${currentPage === 'tech-stack' ? 'text-[#22D3EE]' : ''}`}>Tech Stack</a>
            <a href="#/why-codeneir" className={`hover:text-white transition-colors ${currentPage === 'why-codeneir' ? 'text-[#22D3EE]' : ''}`}>Why Codeneir</a>
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
              href="#/portfolios"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Our Ecosystem
            </a>
            <a
              href="#/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Services / What We Build
            </a>
            <a
              href="#/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#/tech-stack"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Technology Stack
            </a>
            <a
              href="#/why-codeneir"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white text-lg transition-colors"
            >
              Why Codeneir
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
        {renderPage()}

        {/* Contact section - only shown on home page */}
        {isHome && (
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
        )}
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
                <li><a href="#/portfolios" className="hover:text-white transition-colors">Digital App Ecosystem</a></li>
                <li><a href="#/solutions" className="hover:text-white transition-colors">AI & WhatsApp Automations</a></li>
                <li><a href="#/solutions" className="hover:text-white transition-colors">SaaS Database Platforms</a></li>
                <li><a href="#/solutions" className="hover:text-white transition-colors">Technical ASO & SEO Engines</a></li>
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
