'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

// Real Justdial clinic images
const CLINIC_INTERIOR = 'https://images.jdmagicbox.com/comp/warangal/r3/9999px870.x870.230113113919.n2r3/catalogue/aisri-cosmetic-clinic-hanamkonda-warangal-skin-care-clinics-1co2vuhd1e.jpg';

const highlights = [
  'Advanced dermatological equipment',
  'Personalized skincare protocols',
  'Certified & experienced doctors',
  'Hygienic, clinical-grade environment',
  'Post-treatment care & follow-up',
  'Affordable luxury experience',
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-cream" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Image — Real clinic interior */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-card-light">
              <Image
                src={CLINIC_INTERIOR}
                alt="Aisri Cosmetic Clinic interior — KSR Plaza, Hanamkonda"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,94,99,0.25)] to-transparent" />
            </div>

            {/* Floating review card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-card-light p-5 max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-luxury-gold gap-0.5 text-base">★★★★★</div>
                <span className="text-charcoal font-playfair font-bold text-sm">4.6</span>
              </div>
              <p className="text-charcoal/70 text-xs font-inter leading-snug">
                &ldquo;Best cosmetic clinic in Warangal. Amazing results!&rdquo;
              </p>
              <p className="text-deep-teal text-xs font-inter font-semibold mt-2">— Niharika, Warangal</p>
            </motion.div>

            {/* Decorative border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-luxury-gold/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-deep-teal font-cormorant italic text-xl mb-3">About Our Clinic</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-2">
              Warangal&apos;s Premier
            </h2>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-5">
              <span className="text-gold-gradient">Aesthetic Clinic</span>
            </h2>

            <div className="w-14 h-0.5 bg-gradient-to-r from-luxury-gold to-transparent mb-7" />

            <p className="text-brown-gray font-inter text-base leading-relaxed mb-5">
              Aisri Cosmetic Clinic is a Justdial-verified, <strong className="text-deep-teal">4.6★ rated</strong> premium aesthetic clinic
              located at KSR Plaza, 4th Floor, Naimnagar, Hanamkonda, Warangal. We specialize in advanced skincare,
              hair restoration, and body aesthetic treatments.
            </p>
            <p className="text-brown-gray font-inter text-base leading-relaxed mb-8">
              Our team of certified doctors and dermatologists combines the latest medical technology
              with personalized care protocols — ensuring every patient achieves their desired results
              safely and effectively.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-deep-teal shrink-0" />
                  <span className="text-brown-gray font-inter text-sm">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-deep-teal text-white font-inter font-medium text-sm hover:bg-[#0a3d40] hover:shadow-teal-glow transition-all duration-300"
              >
                Our Story
              </Link>
              <Link
                href="/doctors"
                className="inline-flex items-center px-8 py-3.5 rounded-full border border-deep-teal text-deep-teal font-inter font-medium text-sm hover:bg-deep-teal hover:text-white transition-all duration-300"
              >
                Meet Our Doctors
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
