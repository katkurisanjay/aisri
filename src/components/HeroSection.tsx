'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Phone, ArrowRight } from 'lucide-react';

const CLINIC_HERO = 'https://images.jdmagicbox.com/comp/warangal/r3/9999px870.x870.230113113919.n2r3/catalogue/aisri-cosmetic-clinic-hanamkonda-warangal-skin-care-clinics-1co2vuhd1e.jpg';

export default function HeroSection() {
  const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${CLINIC_HERO})` }}
        />
        {/* Warm ivory/cream overlay — reduced opacity to make background image more visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(253,246,236,0.85)] via-[rgba(253,246,236,0.6)] to-[rgba(255,251,244,0.1)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,251,244,0.1)] via-transparent to-[rgba(253,246,236,0.4)]" />
      </div>

      {/* Decorative gold orbs — soft, not harsh */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 80 + i * 60,
            height: 80 + i * 60,
            background: `rgba(212,175,55,${0.06 + i * 0.02})`,
            right: `${5 + i * 8}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{ y: [-15, 15, -15], scale: [1, 1.04, 1] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-2xl">

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(212,175,55,0.5)] bg-white/70 backdrop-blur-sm mb-8 shadow-card"
          >
            <div className="flex text-luxury-gold gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
            </div>
            <span className="text-xs font-inter text-brown-gray tracking-wider uppercase font-medium">
              4.6 Rated · 151 Reviews · JD Verified
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-cormorant italic text-2xl md:text-3xl text-luxury-gold tracking-wide mb-4"
          >
            Welcome to Aisri Cosmetic Clinic
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-playfair text-5xl md:text-7xl font-bold leading-[1.08] text-charcoal mb-4"
          >
            Discover<br />
            <span className="text-gold-gradient">Your True</span><br />
            <span className="italic font-light text-brown-gray">Beauty</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="inline-block bg-luxury-gold text-charcoal font-inter text-sm md:text-base leading-relaxed px-5 py-3 rounded-xl font-medium shadow-gold-sm max-w-lg mb-10"
          >
            17 premium aesthetic treatments — Laser, HydraFacial, Botox, Korean Glass Glow,
            PRP Hair &amp; luxury Bridal Skincare. Expert care at KSR Plaza, Hanamkonda, Warangal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/book"
              id="hero-book-cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-white font-semibold font-inter text-sm md:text-base shadow-gold-sm hover:shadow-gold-glow hover:scale-105 transition-all duration-300"
            >
              Book Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="tel:9418476666"
              id="hero-call-cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-luxury-gold text-luxury-gold font-inter text-sm md:text-base bg-white/60 backdrop-blur-sm hover:bg-luxury-gold hover:text-white transition-all duration-300"
            >
              <Phone size={16} /> 94184 76666
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-6 mt-10"
          >
            {[
              { label: '5,000+', sub: 'Happy Patients' },
              { label: '10+',    sub: 'Years Experience' },
              { label: '17',     sub: 'Treatments' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-card border border-[rgba(212,175,55,0.2)]">
                <p className="font-playfair text-2xl font-bold text-gold-gradient">{s.label}</p>
                <p className="text-brown-gray text-xs font-inter mt-0.5">{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
