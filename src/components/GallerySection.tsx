'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Real Justdial clinic images + matching Unsplash for treatments
const images = [
  {
    src: 'https://images.jdmagicbox.com/comp/warangal/r3/9999px870.x870.230113113919.n2r3/catalogue/aisri-cosmetic-clinic-hanamkonda-warangal-skin-care-clinics-1co2vuhd1e.jpg',
    alt: 'Aisri Clinic Interior Reception',
    category: 'Clinic',
    span: 'md:col-span-2 md:row-span-2',
    unoptimized: true,
  },
  {
    src: 'https://images.jdmagicbox.com/comp/warangal/t3/9999px870.x870.230113113919.n2r3/catalogue/aisri-cosmetic-clinic-hanamkonda-warangal-skin-care-clinics-vgb947kkhc.jpg',
    alt: 'Aisri Clinic Treatment Area',
    category: 'Clinic',
    unoptimized: true,
  },
  {
    src: 'https://images.jdmagicbox.com/comp/warangal/t3/9999px870.x870.230113113919.n2r3/catalogue/aisri-cosmetic-clinic-hanamkonda-warangal-skin-care-clinics-uwn4ipwxa3.jpg',
    alt: 'Aisri Clinic Branding & Signage',
    category: 'Clinic',
    unoptimized: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    alt: 'HydraFacial Treatment',
    category: 'Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    alt: 'Laser Treatment Session',
    category: 'Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    alt: 'Bridal Treatment Package',
    category: 'Treatment',
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-ivory" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-deep-teal font-cormorant italic text-xl mb-3">Inside Aisri</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Clinic <span className="text-gold-gradient">Gallery</span>
          </h2>
          <span className="gold-line" />
          <p className="text-brown-gray font-inter text-base max-w-lg mx-auto mt-5 leading-relaxed">
            A real look into our premium clinic at KSR Plaza, Hanamkonda — and the transformations we deliver.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden shadow-card-light group cursor-pointer ${img.span || ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized={img.unoptimized}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.7)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-luxury-gold text-[10px] font-inter uppercase tracking-widest block mb-0.5">{img.category}</span>
                <p className="text-white font-inter text-xs font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/gallery"
            className="inline-flex items-center px-8 py-3.5 rounded-full border border-luxury-gold text-luxury-gold font-inter text-sm font-medium hover:bg-gold-gradient hover:text-white hover:border-transparent transition-all duration-300"
          >
            View Full Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
