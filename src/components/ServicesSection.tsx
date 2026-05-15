'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ALL 17 services from official Aisri Cosmetic Clinic flyer
// Images are specifically chosen to match each exact treatment
const services = [
  {
    slug: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    desc: 'Advanced IPL/diode laser for permanent hair reduction on face, body, and sensitive areas.',
    // IPL laser device on skin — exact match
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    tag: 'Most Popular',
    tagColor: 'bg-luxury-gold text-rich-black',
  },
  {
    slug: 'acne-scars',
    title: 'Acne & Acne Scars',
    desc: 'Targeted protocols combining peels, MNRF, and lasers to treat active acne and stubborn scarring.',
    // Close-up of skin with acne/blemishes treatment
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'skin-lightening',
    title: 'Skin Lightening',
    desc: 'Medical-grade brightening treatments for uneven skin tone, dark spots, hyperpigmentation.',
    // Glowing, brightened, even-toned skin
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'face-lifting',
    title: 'Face Lifting',
    desc: 'Non-surgical HIFU & thread-based face lifting for a youthful, contoured appearance.',
    // Facial treatment / lifting procedure
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'korean-glass-glow',
    title: 'Korean Glass Glow',
    desc: 'K-beauty multi-step glass skin protocol delivering a radiant, lit-from-within luminosity.',
    // Glass skin / glowing Korean beauty result
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
    tag: 'Trending',
    tagColor: 'bg-deep-teal text-white',
  },
  {
    slug: 'prp-hair',
    title: 'Hair Loss — PRP, GFC & Hair Transplant',
    desc: 'PRP, GFC growth factor therapy, and advanced hair transplant techniques to restore hair growth.',
    // Scalp injection / PRP hair treatment
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
    tag: 'Advanced',
    tagColor: 'bg-deep-teal text-white',
  },
  {
    slug: 'anti-dandruff',
    title: 'Anti-Dandruff Treatment',
    desc: 'Medical scalp treatments to permanently eliminate dandruff and restore healthy scalp balance.',
    // Scalp/hair care treatment session
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'iv-infusions',
    title: 'IV Infusions — Glutathione',
    desc: 'Intravenous vitamin & glutathione drips for deep skin brightening, detox, and radiant glow.',
    // IV drip/infusion medical setup
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'bridal',
    title: 'Bridal Skincare & Treatments',
    desc: 'Custom pre-wedding packages to get you glowing, even-toned, and camera-ready for your big day.',
    // Bride beauty/skincare treatment
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    tag: 'Special',
    tagColor: 'bg-feminine-pink text-rich-black',
  },
  {
    slug: 'botox-fillers',
    title: 'Anti-Aging — Botox & Fillers',
    desc: 'FDA-approved Botox and hyaluronic acid fillers for wrinkle smoothing and facial contouring.',
    // Injection near the face/lip area
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80',
    tag: 'Premium',
    tagColor: 'bg-luxury-gold text-rich-black',
  },
  {
    slug: 'hydra-facial',
    title: 'Medifacial / HydraFacial / Vampire Facial',
    desc: 'Deep-cleansing vortex facial, PRP vampire facial, and medifacial for total skin renewal.',
    // HydraFacial machine being used on a patient
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    tag: 'Best Seller',
    tagColor: 'bg-luxury-gold text-rich-black',
  },
  {
    slug: 'laser-photo-facial',
    title: 'Laser Photo Facial',
    desc: 'IPL photo rejuvenation to treat sun damage, redness, pigmentation and restore youthful skin.',
    // Laser light device on face
    image: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'mnrf',
    title: 'Micro Needling Radio Frequency (MNRF)',
    desc: 'Gold-tipped microneedling combined with RF energy for deep skin remodeling and tightening.',
    // Microneedling device close-up on skin
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&q=80',
    tag: 'Advanced',
    tagColor: 'bg-deep-teal text-white',
  },
  {
    slug: 'chemical-peels',
    title: 'Chemical Peels',
    desc: 'TCA, glycolic, and salicylic peels for deep exfoliation, glow, and skin resurfacing.',
    // Chemical peel treatment application
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'fat-lypolysis',
    title: 'Targeted Fat Lypolysis',
    desc: 'Non-surgical spot fat reduction using advanced lipolysis injections and contouring technology.',
    // Body contouring / fat treatment
    image: 'https://images.unsplash.com/photo-1574482620826-40685ca5edef?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'open-pores-stretch-marks',
    title: 'Open Pores & Stretch Marks Reduction',
    desc: 'Combined laser and RF treatments to tighten pores and fade stretch marks effectively.',
    // Skin texture / pores close-up
    image: 'https://images.unsplash.com/photo-1607008829749-c0f284a49fc7?w=600&q=80',
    tag: '',
    tagColor: '',
  },
  {
    slug: 'moles-warts',
    title: 'Moles & Warts Removal',
    desc: 'Safe, precise laser removal of moles, skin tags, warts, and DPN with minimal downtime.',
    // Laser skin tag / spot removal
    image: 'https://images.unsplash.com/photo-1612417101802-40f91de29b4f?w=600&q=80',
    tag: '',
    tagColor: '',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-ivory" id="services">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">What We Offer</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <span className="gold-line" />
          <p className="text-brown-gray font-inter text-base max-w-xl mx-auto mt-5 leading-relaxed">
            17 premium aesthetic treatments — each personalized, results-driven, and performed by certified experts.
          </p>
        </motion.div>

        {/* Services Grid — 17 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <Link
                href={`/treatments/${service.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.5)] hover:-translate-y-2 hover:shadow-card-hover transition-all duration-400 h-full shadow-card"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-600"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                  {service.tag && (
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold font-inter uppercase tracking-widest ${service.tagColor}`}>
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-playfair text-base font-semibold text-charcoal group-hover:text-luxury-gold transition-colors duration-200 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-brown-gray font-inter text-xs leading-relaxed mb-4 flex-1">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1 text-luxury-gold text-xs font-inter font-medium group-hover:gap-2 transition-all duration-200">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-luxury-gold text-luxury-gold font-inter font-medium hover:bg-gold-gradient hover:text-white hover:border-transparent transition-all duration-300"
          >
            View All Treatments <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
