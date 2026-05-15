import Image from 'next/image';
import Link from 'next/link';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const treatments: Record<string, {
  title: string; subtitle: string; duration: string; sessions: string;
  image: string; desc: string; benefits: string[]; process: string[];
}> = {
  'laser-hair-removal': {
    title: 'Laser Hair Removal', subtitle: 'Permanent smoothness with advanced diode laser',
    duration: '30–60 min', sessions: '6–8 sessions',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85',
    desc: 'Our FDA-approved diode laser technology delivers precise, permanent hair reduction for all skin types. Safe, effective, and virtually painless — targeting hair follicles without damaging surrounding skin.',
    benefits: ['Permanent 90%+ hair reduction', 'Safe for all skin types', 'No ingrown hairs', 'Smooth, silky skin', 'Fast sessions', 'Long-lasting results'],
    process: ['Consultation & skin analysis', 'Patch test (first session)', 'Cooling gel application', 'Laser treatment session', 'Soothing post-care', 'Follow-up scheduling'],
  },
  'hydra-facial': {
    title: 'HydraFacial', subtitle: 'Deep cleanse, hydrate & glow — instant results',
    duration: '45–60 min', sessions: 'Monthly recommended',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85',
    desc: 'The HydraFacial is a multi-step facial treatment that simultaneously cleanses, exfoliates, extracts, and hydrates your skin. Suitable for all skin types with zero downtime.',
    benefits: ['Instant visible glow', 'Deep pore cleansing', 'Zero downtime', 'Hydration boost', 'Suitable for all skin types', 'Non-irritating'],
    process: ['Cleansing & vortex exfoliation', 'Acid peel (mild)', 'Painless extractions', 'Antioxidant serum infusion', 'LED light therapy', 'SPF protection'],
  },
  'botox-fillers': {
    title: 'Botox & Fillers', subtitle: 'Precision anti-aging injectables for a youthful look',
    duration: '30–60 min', sessions: 'Every 6–12 months',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=85',
    desc: 'Our expert doctors use FDA-approved Botox and hyaluronic acid fillers to smooth wrinkles, restore volume, and enhance facial contours — naturally and safely.',
    benefits: ['Natural-looking results', 'No surgery required', 'Quick 30-min treatment', 'Long-lasting 6–12 months', 'Reversible fillers', 'Expert precision'],
    process: ['Detailed facial assessment', 'Treatment planning', 'Topical numbing', 'Precise injection technique', 'Immediate results visible', 'Review appointment'],
  },
  'prp-hair': {
    title: 'PRP Hair Treatment', subtitle: 'Stimulate natural hair regrowth with your own plasma',
    duration: '60–90 min', sessions: '4–6 sessions',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&q=85',
    desc: 'Platelet Rich Plasma (PRP) therapy uses your own blood\'s growth factors to naturally stimulate dormant hair follicles and promote new hair growth. Scientifically proven and completely safe.',
    benefits: ['Natural hair regrowth', 'Uses your own blood', '100% safe & natural', 'No chemicals', 'Treats hair loss at root cause', 'Long-lasting results'],
    process: ['Blood draw (small sample)', 'Centrifuge processing', 'PRP extraction', 'Scalp micro-injections', 'Scalp massage', 'Monthly follow-up sessions'],
  },
  'korean-glass-glow': {
    title: 'Korean Glass Glow', subtitle: 'Achieve the K-beauty glass skin effect',
    duration: '60–75 min', sessions: 'Monthly',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=85',
    desc: 'Our signature Korean Glass Glow treatment is a multi-step brightening and hydration protocol designed to give you the coveted lit-from-within, translucent glass skin look.',
    benefits: ['Glass skin effect', 'Deep hydration', 'Brightening & glow', 'Even skin tone', 'Pore minimizing', 'Instant visible results'],
    process: ['Double cleanse', 'Gentle exfoliation', 'Brightening essence infusion', 'Hyaluronic sheet mask', 'Vitamin C serum', 'Glass skin finish'],
  },
  'bridal': {
    title: 'Bridal Skincare Package', subtitle: 'Glow on your most important day',
    duration: 'Multi-session (6–8 weeks)', sessions: 'Pre-wedding package',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85',
    desc: 'Our exclusive bridal skincare package is designed to be started 6–8 weeks before your wedding. A combination of targeted treatments to give you luminous, glowing, flawless skin for your special day.',
    benefits: ['Customized for your skin type', 'Radiant bridal glow', 'Treats acne, pigmentation, dullness', 'Relaxing luxury experience', 'Includes follow-up sessions', 'Complimentary skincare kit'],
    process: ['Bridal skin consultation', 'Week 1–2: Deep cleanse + peel', 'Week 3–4: HydraFacial + brightening', 'Week 5–6: Korean Glass Glow', 'Week 7: Touch-up session', 'Day-before glow treatment'],
  },
};

// Generate static paths
export function generateStaticParams() {
  return Object.keys(treatments).map((slug) => ({ slug }));
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const t = treatments[params.slug];
  if (!t) notFound();

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={t.image} alt={t.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-[rgba(255,251,244,0.7)] to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-12 w-full">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-deep-teal text-sm font-inter mb-4 hover:text-luxury-gold transition-colors">
            ← All Treatments
          </Link>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-charcoal mb-2">{t.title}</h1>
          <p className="text-luxury-gold font-cormorant italic text-xl">{t.subtitle}</p>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-charcoal/80 text-sm font-inter">
              <Clock size={14} className="text-luxury-gold" /> {t.duration}
            </div>
            <div className="text-charcoal/80 text-sm font-inter">Recommended: {t.sessions}</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div className="bg-white shadow-card rounded-2xl p-8 border border-[rgba(212,175,55,0.2)]">
              <h2 className="font-playfair text-2xl font-bold text-charcoal mb-5">Overview</h2>
              <p className="text-brown-gray font-inter text-base leading-relaxed">{t.desc}</p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white shadow-card rounded-xl p-4 border border-[rgba(212,175,55,0.2)]">
                    <CheckCircle2 size={16} className="text-luxury-gold shrink-0" />
                    <span className="text-charcoal/90 font-inter text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">Treatment Process</h2>
              <div className="space-y-4">
                {t.process.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gold-gradient text-charcoal font-bold font-inter text-sm flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div className="bg-white shadow-card rounded-xl p-4 flex-1 border border-[rgba(212,175,55,0.2)]">
                      <p className="text-charcoal font-inter text-sm">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white shadow-card rounded-2xl p-7 border border-[rgba(212,175,55,0.3)] sticky top-24">
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-5">Book This Treatment</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-inter">
                  <span className="text-brown-gray">Duration</span>
                  <span className="text-charcoal font-medium">{t.duration}</span>
                </div>
                <div className="flex justify-between text-sm font-inter">
                  <span className="text-brown-gray">Sessions</span>
                  <span className="text-charcoal font-medium">{t.sessions}</span>
                </div>
              </div>
              <Link
                href={`/book?service=${encodeURIComponent(t.title)}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gold-gradient text-charcoal font-semibold font-inter hover:shadow-gold-glow transition-all duration-300"
              >
                Book Now <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/919418476666?text=I%20want%20to%20book%20${encodeURIComponent(t.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-luxury-gold text-charcoal font-inter font-medium text-sm mt-3 hover:bg-[rgba(212,175,55,0.08)] transition-all duration-200"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
