import { Ecosystem } from '../components/Ecosystem';
import { SEO } from '../components/SEO';

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Mobile Apps and Digital Products | Codeneir Portfolio"
        description="Explore mobile applications, AI products and digital platforms designed and developed by Codeneir."
        canonicalPath="/portfolio"
      />
      <section className="py-16 md:py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
        <Ecosystem />
      </section>
    </>
  );
}
