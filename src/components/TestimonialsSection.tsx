'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Niharika',
    location: 'Warangal',
    rating: 5,
    text: 'AISRI COSMETIC CLINIC is a great place! The doctors and physiotherapists are very good at their jobs. They always check on you well and make sure you are comfortable throughout the treatment.',
    treatment: 'Skin Treatment',
    avatar: 'N',
  },
  {
    id: 2,
    name: 'Sai Charan',
    location: 'Hanamkonda',
    rating: 5,
    text: 'I had a great experience at AISRI COSMETIC CLINIC! The prices are very reasonable, and I was happy with the service. The staff was friendly and helpful throughout.',
    treatment: 'Laser Treatment',
    avatar: 'S',
  },
  {
    id: 3,
    name: 'Gowri',
    location: 'Warangal',
    rating: 5,
    text: 'AISRI COSMETIC CLINIC is very clean and hygienic. The staff is very kind and helpful. I waited less than expected for my appointment. Highly recommended!',
    treatment: 'HydraFacial',
    avatar: 'G',
  },
  {
    id: 4,
    name: 'Priya Reddy',
    location: 'Kazipet',
    rating: 5,
    text: 'Absolutely love my results after PRP treatment! My hair fall has reduced significantly. The doctors are very knowledgeable and explain everything clearly.',
    treatment: 'PRP Hair Treatment',
    avatar: 'P',
  },
  {
    id: 5,
    name: 'Lakshmi',
    location: 'Warangal',
    rating: 5,
    text: 'Got the Korean Glass Glow treatment before my wedding — my skin has never looked better! The bridal package was worth every penny. Thank you Aisri!',
    treatment: 'Korean Glass Glow',
    avatar: 'L',
  },
  {
    id: 6,
    name: 'Ravi Kumar',
    location: 'Hanamkonda',
    rating: 4,
    text: 'Excellent laser hair removal sessions — painless and effective. The clinic is well-maintained, staff is professional. Will definitely recommend to friends and family.',
    treatment: 'Laser Hair Removal',
    avatar: 'R',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-cream overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">Patient Stories</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            What Our <span className="text-gold-gradient">Patients Say</span>
          </h2>
          <span className="gold-line" />
          <p className="text-brown-gray font-inter text-base max-w-lg mx-auto mt-5 leading-relaxed">
            Real experiences from real people — 151 verified reviews on Justdial.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence>
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-${current}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 shadow-card border border-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Quote icon */}
                <Quote size={36} className="text-luxury-gold/15 absolute top-5 right-5 group-hover:text-luxury-gold/25 transition-colors duration-300" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={14} className="text-luxury-gold fill-luxury-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-charcoal/80 font-inter text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-light-gradient flex items-center justify-center shrink-0">
                    <span className="text-white font-playfair font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-charcoal font-inter font-semibold text-sm">{t.name}</p>
                    <p className="text-brown-gray font-inter text-xs">{t.location} · {t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => paginate(-1)}
            className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-luxury-gold hover:bg-[rgba(212,175,55,0.1)] hover:shadow-gold-sm transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2 bg-luxury-gold' : 'w-2 h-2 bg-charcoal/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-luxury-gold hover:bg-[rgba(212,175,55,0.1)] hover:shadow-gold-sm transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* JD Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)]">
            <div className="flex gap-0.5 text-luxury-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-brown-gray font-inter text-sm">
              <strong className="text-luxury-gold">4.6/5</strong> from 151 verified reviews on Justdial
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
