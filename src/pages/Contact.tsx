import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Codeneir — Start Your Project"
        description="Ready to build? Contact Codeneir Inc for mobile apps, SaaS platforms, AI assistants, SEO systems, and automation tools. Based in Milan, serving worldwide."
        canonicalPath="/contact"
      />
      <section className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl font-extrabold font-sans text-slate-100 tracking-tight sm:text-4xl">
              Start Your Project With Codeneir
            </h1>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Fill out the configuration form below and a studio partner will reach out within 12 hours with a tailored architectural proposal.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
