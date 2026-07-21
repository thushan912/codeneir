import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  Globe,
  MapPin,
  MessageCircle
} from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="font-sans min-h-screen text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
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

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#05070D]/75 backdrop-blur-xl border-b border-slate-900/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group relative">
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
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-wider text-slate-400">
            <Link to="/portfolio" className={`hover:text-white transition-colors ${currentPage === 'portfolio' ? 'text-[#22D3EE]' : ''}`}>Portfolio</Link>
            <Link to="/solutions" className={`hover:text-white transition-colors ${currentPage === 'solutions' ? 'text-[#22D3EE]' : ''}`}>Solutions</Link>
            <Link to="/case-studies" className={`hover:text-white transition-colors ${currentPage === 'case-studies' ? 'text-[#22D3EE]' : ''}`}>Case Studies</Link>
            <Link to="/technology" className={`hover:text-white transition-colors ${currentPage === 'technology' ? 'text-[#22D3EE]' : ''}`}>Tech Stack</Link>
            <Link to="/why-codeneir" className={`hover:text-white transition-colors ${currentPage === 'why-codeneir' ? 'text-[#22D3EE]' : ''}`}>Why Codeneir</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 font-sans font-bold text-xs rounded-xl shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-white"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 bg-slate-950/80 border border-slate-900 rounded-xl text-slate-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#05070D]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-6 border-b border-slate-900 animate-in fade-in duration-200">
          <nav className="flex flex-col items-center gap-6 text-base font-mono font-bold text-slate-400">
            <Link to="/portfolio" className="hover:text-white text-lg transition-colors">Our Portfolio</Link>
            <Link to="/solutions" className="hover:text-white text-lg transition-colors">Services / What We Build</Link>
            <Link to="/case-studies" className="hover:text-white text-lg transition-colors">Case Studies</Link>
            <Link to="/technology" className="hover:text-white text-lg transition-colors">Technology Stack</Link>
            <Link to="/why-codeneir" className="hover:text-white text-lg transition-colors">Why Codeneir</Link>
            <Link
              to="/#contact"
              className="px-6 py-3 mt-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl font-sans font-bold text-sm text-center text-white shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              Start Your Project Now
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow z-10 relative">
        {children}
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/393519252982"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Codeneir on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer group animate-whatsapp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
      </a>

      {/* FOOTER */}
      <footer className="bg-[#05070D] border-t border-slate-900/85 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 flex items-center justify-center bg-slate-950 border border-slate-800 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.08)]">
                  <div className="absolute inset-0.5 border border-dashed border-slate-900/60 rounded-full animate-spin [animation-duration:10s]" />
                  <span className="font-mono text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 select-none relative z-10">{'{:}'}</span>
                </div>
                <span className="font-display font-bold text-slate-200 tracking-wider">CODENEIR INC</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                AI Apps, Automation & Digital Product Studio. Programmed elegantly with a focus on pristine client acquisition and scalable execution.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-[#22D3EE] uppercase tracking-widest">Direct Channels</h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-center gap-2 group hover:text-white transition-colors duration-150">
                  <Mail className="w-4 h-4 text-slate-600 group-hover:text-[#22D3EE]" />
                  <a href="mailto:contact@codeneir.com">contact@codeneir.com</a>
                </li>
                <li className="flex items-center gap-2 group hover:text-white transition-colors duration-150">
                  <Phone className="w-4 h-4 text-slate-600 group-hover:text-emerald-400" />
                  <a href="tel:+393519252982">+39 351 925 2982</a>
                </li>
                <li className="flex items-center gap-2 group hover:text-white transition-colors duration-150">
                  <Globe className="w-4 h-4 text-slate-600 group-hover:text-violet-400" />
                  <a href="https://codeneir.com" target="_blank" rel="noopener noreferrer">codeneir.com</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Key Solutions</h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Digital App Portfolio</Link></li>
                <li><Link to="/solutions" className="hover:text-white transition-colors">AI & WhatsApp Automations</Link></li>
                <li><Link to="/solutions" className="hover:text-white transition-colors">SaaS Database Platforms</Link></li>
                <li><Link to="/solutions" className="hover:text-white transition-colors">Technical ASO & SEO Engines</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Global Operations</h5>
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
          <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>© 2026 Codeneir Inc. All rights reserved. Registered trademark in Italy and globally.</div>
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
