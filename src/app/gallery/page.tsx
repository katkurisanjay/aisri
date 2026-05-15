import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Aisri Cosmetic Clinic Warangal',
  description: 'Browse our clinic gallery — treatment rooms, before & after results, and the Aisri Cosmetic Clinic experience in Hanamkonda, Warangal.',
};

const allImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85', alt: 'Clinic Interior', category: 'Clinic' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85', alt: 'HydraFacial Treatment', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85', alt: 'Laser Treatment', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=800&q=85', alt: 'Treatment Room', category: 'Clinic' },
  { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=85', alt: 'Skin Consultation', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85', alt: 'Bridal Treatment', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=85', alt: 'Hair Treatment', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=85', alt: 'Korean Glass Glow', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85', alt: 'Hair Care', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85', alt: 'Doctor Consultation', category: 'Team' },
  { src: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=85', alt: 'Skincare Treatment', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1612417101802-40f91de29b4f?w=800&q=85', alt: 'Beauty Treatment', category: 'Treatment' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-ivory pt-24">
      {/* Header */}
      <section className="py-16 text-center px-6">
        <p className="text-luxury-gold font-cormorant italic text-xl mb-3">A Glimpse Inside</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-5">
          Clinic <span className="text-gold-gradient">Gallery</span>
        </h1>
        <span className="gold-line" />
        <p className="text-brown-gray font-inter text-base max-w-lg mx-auto mt-6 leading-relaxed">
          Explore our world-class clinic, treatment rooms, and the beautiful results we deliver every day.
        </p>
      </section>

      {/* Masonry Grid */}
      <section className="pb-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {allImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.4)] shadow-card transition-all duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={i % 3 === 0 ? 500 : 300}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.8)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div>
                    <span className="text-[10px] font-inter text-luxury-gold uppercase tracking-widest block mb-1">{img.category}</span>
                    <span className="text-white font-inter text-sm font-medium">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
