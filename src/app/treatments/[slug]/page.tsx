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
    image: '/images/treatments/laser_hair_removal.png',
    desc: 'Our FDA-approved diode laser technology delivers precise, permanent hair reduction for all skin types. Safe, effective, and virtually painless.',
    benefits: ['Permanent 90%+ hair reduction', 'Safe for all skin types', 'No ingrown hairs', 'Smooth, silky skin'],
    process: ['Consultation & skin analysis', 'Patch test', 'Cooling gel application', 'Laser treatment session', 'Soothing post-care'],
  },
  'hydra-facial': {
    title: 'HydraFacial', subtitle: 'Deep cleanse, hydrate & glow — instant results',
    duration: '45–60 min', sessions: 'Monthly recommended',
    image: '/images/treatments/hydrafacial.png',
    desc: 'The HydraFacial is a multi-step facial treatment that simultaneously cleanses, exfoliates, extracts, and hydrates your skin.',
    benefits: ['Instant visible glow', 'Deep pore cleansing', 'Zero downtime', 'Hydration boost'],
    process: ['Cleansing & vortex exfoliation', 'Acid peel', 'Painless extractions', 'Antioxidant serum infusion', 'LED light therapy'],
  },
  'korean-glass-glow': {
    title: 'Korean Glass Glow', subtitle: 'Achieve the K-beauty glass skin effect',
    duration: '60–75 min', sessions: 'Monthly',
    image: '/images/treatments/korean_glass_glow.png',
    desc: 'Our signature Korean Glass Glow treatment is a multi-step brightening and hydration protocol designed to give you the coveted lit-from-within glow.',
    benefits: ['Glass skin effect', 'Deep hydration', 'Brightening & glow', 'Even skin tone'],
    process: ['Double cleanse', 'Gentle exfoliation', 'Brightening essence', 'Hyaluronic mask', 'Glass skin finish'],
  },
  'chemical-peels': {
    title: 'Chemical Peels', subtitle: 'Exfoliation & skin renewal',
    duration: '30–45 min', sessions: '3–6 sessions',
    image: '/images/treatments/hydrafacial.png',
    desc: 'Advanced chemical peels customized to target acne, pigmentation, and dullness by gently exfoliating the top layer of skin.',
    benefits: ['Improves skin texture', 'Reduces pigmentation', 'Clears active acne', 'Fades acne scars'],
    process: ['Deep cleansing', 'Skin prep', 'Peel application', 'Neutralization', 'Post-peel hydration'],
  },
  'acne-scars': {
    title: 'Acne & Acne Scars', subtitle: 'Targeted protocols for clear skin',
    duration: '45–60 min', sessions: '4–8 sessions',
    image: '/images/treatments/hydrafacial.png',
    desc: 'Comprehensive treatments combining peels, microneedling, and lasers to treat active acne and permanently reduce scarring.',
    benefits: ['Stops active breakouts', 'Reduces red marks', 'Smooths pitted scars', 'Prevents future acne'],
    process: ['Dermatologist assessment', 'Active acne treatment', 'Scar remodeling', 'Soothing mask', 'Homecare plan'],
  },
  'skin-lightening': {
    title: 'Skin Lightening', subtitle: 'Safe brightening for uneven skin tone',
    duration: '60 min', sessions: '4–6 sessions',
    image: '/images/treatments/korean_glass_glow.png',
    desc: 'Medical-grade brightening treatments designed to safely reduce melanin production, clear dark patches, and even out your skin tone.',
    benefits: ['Evens skin tone', 'Reduces dark patches', 'Safe & medically approved', 'Radiant complexion'],
    process: ['Skin analysis', 'Exfoliation', 'Brightening serum infusion', 'Laser toning (if required)', 'Sun protection'],
  },
  'botox-fillers': {
    title: 'Botox & Fillers', subtitle: 'Precision anti-aging injectables',
    duration: '30–60 min', sessions: 'Every 6–12 months',
    image: '/images/treatments/botox_fillers.png',
    desc: 'FDA-approved Botox and hyaluronic acid fillers to smooth wrinkles, restore volume, and enhance facial contours safely.',
    benefits: ['Natural-looking results', 'No surgery required', 'Quick treatment', 'Long-lasting'],
    process: ['Facial assessment', 'Topical numbing', 'Precise injection', 'Immediate results', 'Review appointment'],
  },
  'mnrf': {
    title: 'MNRF', subtitle: 'Micro-needling radiofrequency',
    duration: '60–90 min', sessions: '3–5 sessions',
    image: '/images/treatments/laser_hair_removal.png',
    desc: 'Advanced MNRF technology delivers radiofrequency energy deep into the skin, stimulating collagen production for tightening and scar reduction.',
    benefits: ['Skin tightening', 'Reduces deep scars', 'Minimizes open pores', 'Improves skin laxity'],
    process: ['Numbing cream application', 'MNRF treatment', 'Cooling mask', 'Post-care serum'],
  },
  'iv-glutathione': {
    title: 'IV Infusions / Glutathione', subtitle: 'Intravenous brightening drips',
    duration: '45 min', sessions: 'Weekly for 5 weeks',
    image: '/images/treatments/botox_fillers.png',
    desc: 'Powerful antioxidant IV therapy that detoxifies the liver and naturally lightens and brightens the skin from within.',
    benefits: ['Full body brightening', 'Boosts immunity', 'Detoxifies liver', 'Anti-aging properties'],
    process: ['Medical consultation', 'IV setup', '45-min drip session', 'Relaxation', 'Hydration advice'],
  },
  'face-lifting': {
    title: 'Face Lifting', subtitle: 'Non-surgical face lifting techniques',
    duration: '60–90 min', sessions: '1–3 sessions',
    image: '/images/treatments/botox_fillers.png',
    desc: 'Using advanced technologies like HIFU or Thread Lifts to tighten sagging skin and restore a youthful V-shape contour without surgery.',
    benefits: ['Non-surgical', 'Lifts sagging skin', 'Defines jawline', 'Long-lasting tightening'],
    process: ['Contour mapping', 'Numbing', 'Lifting procedure', 'Immediate tightening effect', 'Post-care'],
  },
  'prp-hair': {
    title: 'PRP Hair Treatment', subtitle: 'Stimulate natural hair regrowth',
    duration: '60–90 min', sessions: '4–6 sessions',
    image: '/images/treatments/prp_hair.png',
    desc: 'Platelet Rich Plasma (PRP) therapy uses your own blood\'s growth factors to naturally stimulate dormant hair follicles.',
    benefits: ['Natural hair regrowth', '100% safe & natural', 'Treats hair loss at root', 'Thickens existing hair'],
    process: ['Blood draw', 'Centrifuge processing', 'PRP extraction', 'Scalp micro-injections', 'Scalp massage'],
  },
  'gfc-hair': {
    title: 'GFC Hair Transplant', subtitle: 'Next-gen hair restoration',
    duration: '60–90 min', sessions: '3–5 sessions',
    image: '/images/treatments/prp_hair.png',
    desc: 'Growth Factor Concentrate (GFC) is a highly advanced, concentrated version of PRP that delivers faster and denser hair regrowth.',
    benefits: ['Highly concentrated growth factors', 'Painless procedure', 'Faster visible results', 'Reduces hair fall quickly'],
    process: ['Blood draw in GFC tubes', 'Specialized centrifuge', 'Pure GFC extraction', 'Targeted scalp injections'],
  },
  'anti-dandruff': {
    title: 'Anti-Dandruff Treatment', subtitle: 'Medically-formulated scalp care',
    duration: '30–45 min', sessions: '3–5 sessions',
    image: '/images/treatments/prp_hair.png',
    desc: 'Clinical treatments that target the root cause of severe dandruff, flakiness, and scalp itching, restoring a healthy scalp microbiome.',
    benefits: ['Stops itching instantly', 'Removes stubborn flakes', 'Balances scalp oil', 'Promotes healthy hair'],
    process: ['Scalp analysis', 'Deep cleansing exfoliation', 'Anti-fungal serum application', 'Ozone therapy', 'Soothing mask'],
  },
  'bridal': {
    title: 'Bridal Skincare Package', subtitle: 'Glow on your most important day',
    duration: 'Multi-session', sessions: 'Pre-wedding package',
    image: '/images/treatments/bridal_skincare.png',
    desc: 'A curated series of treatments starting 6-8 weeks before your wedding to ensure luminous, flawless skin for your special day.',
    benefits: ['Radiant bridal glow', 'Customized for your skin', 'Treats pigmentation', 'Stress-free experience'],
    process: ['Bridal consultation', 'Deep cleanse + peel', 'HydraFacial', 'Korean Glass Glow', 'Day-before touch-up'],
  },
  'moles-warts': {
    title: 'Moles & Warts Removal', subtitle: 'Safe, scar-free removal',
    duration: '20–30 min', sessions: '1 session',
    image: '/images/treatments/laser_hair_removal.png',
    desc: 'Painless, precise removal of skin tags, moles, and warts using advanced radiofrequency or laser technology with minimal downtime.',
    benefits: ['Quick 20-min procedure', 'Virtually painless', 'No scarring', 'Immediate results'],
    process: ['Dermatologist assessment', 'Local numbing', 'Laser/RF removal', 'Antibiotic cream application', 'Quick healing'],
  },
  'fat-lypolysis': {
    title: 'Targeted Fat Lypolysis', subtitle: 'Non-surgical spot fat reduction',
    duration: '45–60 min', sessions: '4–6 sessions',
    image: '/images/treatments/laser_hair_removal.png',
    desc: 'Advanced injection lipolysis or cryolipolysis to dissolve stubborn fat pockets (like double chin or love handles) without surgery.',
    benefits: ['Non-surgical fat loss', 'Targets stubborn areas', 'No downtime', 'Contours the body'],
    process: ['Measurement & marking', 'Targeted treatment', 'Fat cell breakdown', 'Natural elimination over weeks', 'Follow-up'],
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
