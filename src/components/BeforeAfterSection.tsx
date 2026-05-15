'use client';

import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const cases = [
  {
    id: 1,
    label: 'Acne Scar Treatment',
    before: 'https://images.unsplash.com/photo-1612417101802-40f91de29b4f?w=600&q=80',
    after:  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
  },
  {
    id: 2,
    label: 'Skin Brightening',
    before: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80',
    after:  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  },
  {
    id: 3,
    label: 'Hair Restoration (PRP)',
    before: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
    after:  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-24 bg-ivory" id="results">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">Real Results</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Before &amp; <span className="text-gold-gradient">After</span>
          </h2>
          <span className="gold-line" />
          <p className="text-brown-gray font-inter text-base max-w-lg mx-auto mt-5 leading-relaxed">
            Drag the slider to see the transformative results achieved by our patients.
          </p>
        </motion.div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.2)] shadow-card"
            >
              {/* Slider */}
              <div className="relative h-72">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={c.before}
                      alt={`Before ${c.label}`}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={c.after}
                      alt={`After ${c.label}`}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  }
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Labels */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[rgba(5,5,5,0.7)] text-soft-cream/80 text-[10px] font-inter tracking-widest uppercase">Before</span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[rgba(212,175,55,0.8)] text-rich-black text-[10px] font-inter font-bold tracking-widest uppercase">After</span>
              </div>
              {/* Caption */}
              <div className="p-4 bg-white border-t border-[rgba(212,175,55,0.1)]">
                <p className="text-charcoal font-playfair text-base font-medium text-center">{c.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-brown-gray/50 text-xs font-inter mt-8">
          * Individual results may vary. All treatments performed by certified medical professionals.
        </p>
      </div>
    </section>
  );
}
