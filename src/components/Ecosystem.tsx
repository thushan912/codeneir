import React, { useState } from 'react';
import { Product } from '../types';
import { 
  X, 
  Star, 
  Smartphone, 
  Globe, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Dribbble, 
  ChevronRight 
} from 'lucide-react';
import {
  DifesaSpamIcon,
  DinumaIcon,
  MotiNoteIcon,
  StatoIcon,
  PromoTVIcon,
  CodisignalIcon,
  PinRetIcon,
  VoiceRepIcon
} from './Icons';

export const Ecosystem: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<'All' | 'Mobile' | 'SaaS/Web'>('All');

  const products: Product[] = [
    {
      id: 'difesa-spam',
      name: 'Difesa Spam',
      tagline: 'Privacy-First Call Blocker',
      rating: 4.9,
      description: 'Offline database call blocker built for supreme spam prevention and absolute caller privacy in Italy.',
      longDescription: 'Difesa Spam is a market-leading call-blocking application built to prevent spam calls, robocalls, and marketing aggression without ever uploading your contacts. It functions completely offline with an encrypted database optimized to safeguard Italian mobile users.',
      platformBadges: ['Android'],
      iconComponent: DifesaSpamIcon,
      iconSrc: '/assets/images/difesa spam.png',
      features: [
        '100% Offline Database lookup with no contact telemetry tracking',
        'Automatic identification and silent dismissal of known spam callers',
        'Custom blacklist, wildcard filters, and local prefix rules',
        'Lightweight background worker consuming <1% battery life'
      ],
      link: '#'
    },
    {
      id: 'stato',
      name: 'Stato',
      tagline: 'Foreigners Italy Companion',
      rating: 4.6,
      description: 'Immigration guide, Permesso di soggiorno tracker, and automated digital paperwork assistant.',
      longDescription: 'Stato simplifies the complex Italian immigration pipeline for foreigners. It bridges public data APIs to dynamically track the status of residency applications ("Permesso di soggiorno"), calculating waiting timelines and generating standard files.',
      platformBadges: ['Android', 'iOS', 'Web'],
      iconComponent: StatoIcon,
      iconSrc: '/assets/images/stato.png',
      features: [
        'Automated receipt scanner and direct questura file parser',
        'Real-time push notifications upon government file updates',
        'Multilingual document preparation with interactive smart forms',
        'Active map of local offices and certified translation listings'
      ],
      link: '#'
    },
    {
      id: 'voice-rep',
      name: 'Voice Rep Coach',
      tagline: 'Calisthenics Voice Trainer',
      rating: undefined,
      description: 'Workout repetition counter leveraging speech interpretation and custom fitness vocal loops.',
      longDescription: 'Voice Rep Counter Coach is an interactive workout companion engineered to count repetition cycles and deliver target cues hands-free. Combining state-of-the-art audio analytics, it tracks movement rhythms in real-time.',
      platformBadges: ['Android', 'iOS', 'AI'],
      iconComponent: VoiceRepIcon,
      iconSrc: '/assets/images/voice-rep-counter.jpg',
      features: [
        'Hands-free acoustic repetition tracker counting physical counts',
        'Variable speed dynamic vocal coach that matches your actual tempo',
        'Pre-programmed workout sets, audio splits, and recovery voice cues',
        'Seamless integration with popular streaming music channels'
      ],
      link: '#'
    },
    {
      id: 'motinote',
      name: 'MotiNote',
      tagline: 'AI Daily Motivation Hub',
      rating: 4.9,
      description: 'Visually bespoke journal & dynamic motivation engine delivering customized daily inspiration loops.',
      longDescription: 'MotiNote shifts daily inspiration away from generic templates into customized mental health workflows. Integrating user targets with intelligent synthesis, it delivers deeply relevant, aesthetically pristine visual messages and widget layouts.',
      platformBadges: ['iOS', 'Android', 'AI'],
      iconComponent: MotiNoteIcon,
      iconSrc: '/assets/images/motinote.png',
      features: [
        'Custom state-of-mind selector matching your emotional velocity',
        'AI-driven affirmations generated to support individual long-term goals',
        'Stunning home screen widgets with custom display typography rules',
        'Offline session storage syncing with client-side iCloud key-chains'
      ],
      link: '#'
    },
    {
      id: 'dinuma',
      name: 'Dinuma',
      tagline: 'Live Events & Pin Ratings',
      rating: 4.7,
      description: 'Dynamic interactive maps, real-time ratings, and high-fidelity local experiences for Sri Lanka & beyond.',
      longDescription: 'Dinuma connects users to localized venues, maps, authentic ratings, and community-driven event tracking. Designed as a Sri Lanka-first product with a global architecture, it leverages lightweight maps and real-time sockets to render active spots on any mobile browser.',
      platformBadges: ['Web', 'SaaS', 'AI'],
      iconComponent: DinumaIcon,
      iconSrc: '/assets/images/dinuma.png',
      features: [
        'Vector map grids optimized for low-bandwidth cellular connections',
        'Transparent ratings algorithm preventing merchant review tampering',
        'Live events broadcast directly into local geofences',
        'AI personalized interest routing based on user habits'
      ],
      link: '#'
    },
    {
      id: 'promotv',
      name: 'PromoTV',
      tagline: 'Next-Gen Digital Signage',
      rating: undefined,
      description: 'Convert standard TVs into high-performance, real-time advertising monitors for local businesses.',
      longDescription: 'PromoTV is a robust cloud signage platform empowering physical stores to stream visual slides, live menus, social walls, and dynamic pricing onto standard televisions. Fully administrable via a web browser, it utilizes optimized container clients.',
      platformBadges: ['SaaS', 'Web'],
      iconComponent: PromoTVIcon,
      features: [
        'Zero-latency web player compatible with Android TV, FireOS, & Raspberry Pi',
        'Visual layout builder featuring real-time menu synchronization',
        'Offline-safe display loop that continues running if Wi-Fi degrades',
        'Automated programmatic ad schedules and multi-screen layout control'
      ],
      link: '#'
    },
    {
      id: 'codisignal',
      name: 'Codisignal',
      tagline: 'WhatsApp Automated Trend Signals',
      rating: undefined,
      description: 'Risk-managed financial trends analytics, automated signals pipelines, and direct WhatsApp alerts.',
      longDescription: 'Codisignal is a mathematical trading framework scanning continuous market data to dispatch high-certainty trade insights. Alerts are pushed directly to verified users via robust WhatsApp API integrations and real-time private channels.',
      platformBadges: ['SaaS', 'AI'],
      iconComponent: CodisignalIcon,
      features: [
        'Intelligent multi-asset trend scanner (Crypto, FX, & Index markets)',
        'Immediate delivery of key updates directly to your personal WhatsApp',
        'Risk-reward calculators bundled inside the message payload',
        'Integrator portal for advanced retail trading webhook inputs'
      ],
      link: '#'
    },
    {
      id: 'pinret',
      name: 'PinRet',
      tagline: 'Community Lost & Found Map',
      rating: 4.6,
      description: 'Decentralized geolocalized registry and search framework for reclaiming missing belongings.',
      longDescription: 'PinRet is a modern geocentric matching platform empowering local communities to signal lost items, pet alerts, and keys. It utilizes absolute privacy guardrails while ensuring high-accuracy geofences to connect lost belongings to finders.',
      platformBadges: ['Web', 'Android'],
      iconComponent: PinRetIcon,
      iconSrc: '/assets/images/pinret.png',
      features: [
        'Anonymized chat logs with strict user verification checks',
        'Radius alerts triggering search circles for missing domestic pets',
        'Cryptographic owner claims verification via physical QR attachment mapping',
        'High-speed map render clusters handling 50k active geo-pins'
      ],
      link: '#'
    }
  ];

  const filteredProducts = products.filter(p => {
    if (filter === 'Mobile') {
      return p.platformBadges.includes('Android') || p.platformBadges.includes('iOS');
    }
    if (filter === 'SaaS/Web') {
      return p.platformBadges.includes('SaaS') || p.platformBadges.includes('Web');
    }
    return true;
  });

  return (
    <div className="space-y-10">
      {/* Filters heading and selectors */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-widest block mb-2">
            OUR ECOSYSTEM
          </span>
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight font-sans">
            One Studio. Multiple Digital Products.
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 bg-slate-950/85 border border-slate-800/80 p-1.5 rounded-2xl self-start sm:self-center">
          {(['All', 'Mobile', 'SaaS/Web'] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-1.5 text-xs font-mono font-medium rounded-xl transition-all duration-300 ${
                filter === opt
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-[#22D3EE]'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List of 8 Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((prod) => {
          const IconComp = prod.iconComponent;
          return (
            <div
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className="bg-[#090D18]/80 hover:bg-[#0E1528] border border-slate-800/60 hover:border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(34,211,238,0.04)] relative"
            >
              {/* Card top elements */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 transform transition-transform duration-300 group-hover:scale-110">
                    {prod.iconSrc ? (
                      <img src={prod.iconSrc} className="w-full h-full object-contain rounded-xl" alt={prod.name} />
                    ) : (
                      <IconComp className="w-full h-full" />
                    )}
                  </div>
                  {prod.rating && (
                    <span className="flex items-center gap-1 bg-amber-500/10 text-amber-400 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-500/10">
                      {prod.rating}
                      <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-sans font-bold text-lg text-slate-100 flex items-center gap-1.5">
                    {prod.name}
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-[#22D3EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h4>
                  <p className="text-xs font-mono text-[#22D3EE] font-semibold mt-0.5">
                    {prod.tagline}
                  </p>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {prod.description}
                </p>
              </div>

              {/* Badges line */}
              <div className="mt-5 pt-4 border-t border-slate-900/85 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  {prod.platformBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono font-bold text-slate-300 px-1.5 py-0.5 bg-slate-950/70 border border-slate-800 rounded uppercase tracking-wider"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-0.5">
                  Inspect App <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Highlight Sandbox modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-[#090D18] border border-slate-800/80 w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Background cyber glowing grids */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-1.5 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Core layout */}
            <div className="space-y-6 relative">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 shrink-0">
                  {selectedProduct.iconSrc ? (
                    <img src={selectedProduct.iconSrc} className="w-full h-full object-contain rounded-xl" alt={selectedProduct.name} />
                  ) : (
                    React.createElement(selectedProduct.iconComponent, { className: 'w-full h-full' })
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-[#22D3EE] bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {selectedProduct.tagline}
                    </span>
                    {selectedProduct.rating && (
                      <span className="flex items-center gap-1 bg-amber-500/10 text-amber-400 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-500/10">
                        {selectedProduct.rating} ★ Rating
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-slate-100">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              {/* Explainer paragraph */}
              <div className="space-y-2">
                <h5 className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                  Overview & Technical Scope
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedProduct.longDescription}
                </p>
              </div>

              {/* Features check blocks */}
              <div className="space-y-3">
                <h5 className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                  Key Systems & Architecture
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {selectedProduct.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-900"
                    >
                      <span className="mt-0.5 p-0.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs font-medium text-slate-300 leading-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms Supported */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-900">
                <div className="space-x-1.5 flex items-center">
                  <span className="text-xs font-mono font-medium text-slate-500 mr-2">
                    Available Platforms:
                  </span>
                  {selectedProduct.platformBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono font-bold text-slate-200 px-2 py-0.5 bg-slate-900 border border-slate-800 rounded uppercase tracking-wider"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2 text-xs font-sans font-bold text-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all"
                >
                  Configure Stack
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
