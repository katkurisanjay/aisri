'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function BookCTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-teal-gradient">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 50%, #D4AF37 0%, transparent 50%)' }}
      />
      {/* Animated gold circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-luxury-gold/20"
          style={{ width: 200 + i * 150, height: 200 + i * 150, left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 mb-8">
            <Sparkles size={14} className="text-luxury-gold" />
            <span className="text-luxury-gold text-xs font-inter tracking-widest uppercase">Free Consultation Available</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready for Your<br />
            <span className="text-gold-gradient">Transformation?</span>
          </h2>

          <p className="text-white/80 font-inter text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Book your personalized consultation with our expert doctors at Aisri Cosmetic Clinic, Hanamkonda, Warangal.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              id="cta-book-appointment"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold-gradient text-charcoal font-semibold font-inter text-base hover:shadow-gold-glow hover:scale-105 transition-all duration-300"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919418476666?text=I%20want%20to%20book%20a%20consultation%20at%20Aisri%20Cosmetic%20Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/30 text-white font-inter text-base hover:bg-white/10 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
