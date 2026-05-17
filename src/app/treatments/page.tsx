import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Treatments & Services | Aisri Cosmetic Clinic Warangal',
  description: 'Explore all treatments at Aisri Cosmetic Clinic — Laser Hair Removal, HydraFacial, Botox, PRP, Korean Glass Glow, Bridal Skincare and 20+ more.',
};

const categories = [
  {
    name: 'Skin Treatments',
    color: 'from-pink-500/20 to-rose-500/5',
    treatments: [
      { slug: 'laser-hair-removal', title: 'Laser Hair Removal', duration: '30–60 min', image: '/images/treatments/laser_hair_removal.png', tag: 'Most Popular', desc: 'Permanent hair reduction using advanced diode laser.' },
      { slug: 'hydra-facial', title: 'HydraFacial', duration: '45–60 min', image: '/images/treatments/hydrafacial.png', tag: 'Best Seller', desc: 'Deep cleansing + hydration facial. Instant glow.' },
      { slug: 'korean-glass-glow', title: 'Korean Glass Glow', duration: '60 min', image: '/images/treatments/korean_glass_glow.png', tag: 'Trending', desc: 'K-beauty glass skin treatment for a lit-from-within glow.' },
      { slug: 'chemical-peels', title: 'Chemical Peels', duration: '30–45 min', image: '/images/treatments/hydrafacial.png', tag: '', desc: 'Exfoliation & skin renewal for acne, pigmentation & dullness.' },
      { slug: 'acne-scars', title: 'Acne & Acne Scars', duration: '45–60 min', image: '/images/treatments/hydrafacial.png', tag: '', desc: 'Targeted protocols to treat active acne and stubborn scars.' },
      { slug: 'skin-lightening', title: 'Skin Lightening', duration: '60 min', image: '/images/treatments/korean_glass_glow.png', tag: '', desc: 'Safe, effective brightening for uneven skin tone & dark patches.' },
    ],
  },
  {
    name: 'Anti-Aging & Injectables',
    color: 'from-gold-dark/20 to-luxury-gold/5',
    treatments: [
      { slug: 'botox-fillers', title: 'Botox & Fillers', duration: '30–60 min', image: '/images/treatments/botox_fillers.png', tag: 'Premium', desc: 'Precision anti-aging injectables for wrinkles, lip & face contouring.' },
      { slug: 'mnrf', title: 'MNRF', duration: '60–90 min', image: '/images/treatments/laser_hair_removal.png', tag: 'Advanced', desc: 'Micro-needling radiofrequency for skin tightening & rejuvenation.' },
      { slug: 'iv-glutathione', title: 'IV Infusions / Glutathione', duration: '45 min', image: '/images/treatments/botox_fillers.png', tag: '', desc: 'Intravenous brightening drips for radiant, glowing skin from within.' },
      { slug: 'face-lifting', title: 'Face Lifting', duration: '60–90 min', image: '/images/treatments/botox_fillers.png', tag: '', desc: 'Non-surgical face lifting techniques for a youthful, lifted look.' },
    ],
  },
  {
    name: 'Hair Treatments',
    color: 'from-teal-500/20 to-deep-teal/5',
    treatments: [
      { slug: 'prp-hair', title: 'PRP Hair Treatment', duration: '60–90 min', image: '/images/treatments/prp_hair.png', tag: 'Advanced', desc: 'Platelet Rich Plasma therapy to naturally stimulate hair regrowth.' },
      { slug: 'gfc-hair', title: 'GFC Hair Transplant', duration: '2–4 hrs', image: '/images/treatments/prp_hair.png', tag: '', desc: 'Growth Factor Concentrate — next-gen hair restoration therapy.' },
      { slug: 'anti-dandruff', title: 'Anti-Dandruff Treatment', duration: '30–45 min', image: '/images/treatments/prp_hair.png', tag: '', desc: 'Medically-formulated scalp treatments to permanently treat dandruff.' },
    ],
  },
  {
    name: 'Bridal & Special Packages',
    color: 'from-feminine-pink/30 to-blush/5',
    treatments: [
      { slug: 'bridal', title: 'Bridal Skincare Package', duration: 'Multi-session', image: '/images/treatments/bridal_skincare.png', tag: 'Special', desc: 'Curated pre-wedding protocols for brides — glow, brightening & radiance.' },
      { slug: 'moles-warts', title: 'Moles & Warts Removal', duration: '20–30 min', image: '/images/treatments/laser_hair_removal.png', tag: '', desc: 'Safe, scar-free removal using advanced laser technology.' },
      { slug: 'fat-lypolysis', title: 'Targeted Fat Lypolysis', duration: '45–60 min', image: '/images/treatments/laser_hair_removal.png', tag: '', desc: 'Spot fat reduction using advanced non-surgical lipolysis techniques.' },
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center px-6 bg-gradient-to-br from-[#0E5E63] via-[#0a4a4e] to-[#1C1410] relative overflow-hidden">
        <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-luxury-gold/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-56 h-56 rounded-full bg-luxury-gold/8 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">Everything We Offer</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-5">
            Our <span className="text-gold-gradient">Treatments</span>
          </h1>
          <span className="gold-line" />
          <p className="text-white/70 font-inter text-base max-w-xl mx-auto mt-6 leading-relaxed">
            20+ premium aesthetic treatments. Each one personalized. All results-driven.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <section key={cat.name} className="py-16 border-t border-[rgba(212,175,55,0.08)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <h2 className={`font-playfair text-2xl font-bold text-charcoal mb-8 pb-4 border-b border-[rgba(212,175,55,0.15)] inline-block`}>
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.treatments.map((t) => (
                <Link
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.4)] shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image src={t.image} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.6)] via-transparent to-transparent" />
                    {t.tag && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-luxury-gold/90 text-rich-black text-[10px] font-bold font-inter uppercase tracking-widest">
                        {t.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-playfair text-base font-semibold text-charcoal group-hover:text-luxury-gold transition-colors duration-200">{t.title}</h3>
                      <div className="flex items-center gap-1 text-brown-gray/60 shrink-0">
                        <Clock size={11} />
                        <span className="text-[11px] font-inter">{t.duration}</span>
                      </div>
                    </div>
                    <p className="text-brown-gray font-inter text-sm leading-relaxed mb-4">{t.desc}</p>
                    <div className="flex items-center gap-1 text-luxury-gold text-sm font-inter font-medium group-hover:gap-2 transition-all duration-200">
                      Learn More <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 text-center px-6 bg-cream border-t border-[rgba(212,175,55,0.1)]">
        <h2 className="font-playfair text-3xl font-bold text-charcoal mb-3">Not sure which treatment?</h2>
        <p className="text-brown-gray font-inter text-base mb-8 max-w-md mx-auto">Book a free consultation and our experts will recommend the best treatment for your skin goals.</p>
        <Link href="/book" className="inline-flex items-center px-10 py-4 rounded-full bg-gold-gradient text-charcoal font-semibold font-inter hover:shadow-gold-glow hover:scale-105 transition-all duration-300">
          Get Free Consultation
        </Link>
      </section>
    </div>
  );
}
