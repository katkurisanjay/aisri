import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Aisri Cosmetic Clinic Warangal',
  description: 'Browse our clinic gallery — treatment rooms, before & after results, and the Aisri Cosmetic Clinic experience in Hanamkonda, Warangal.',
};

const allImages = [
  { src: '/images/gallery/interior_1.png', alt: 'Clinic Reception', category: 'Clinic' },
  { src: '/images/gallery/interior_2.png', alt: 'Treatment Room', category: 'Clinic' },
  { src: '/images/results/acne_before.png', alt: 'Acne Scar Treatment Before', category: 'Results' },
  { src: '/images/results/acne_after.png', alt: 'Acne Scar Treatment After', category: 'Results' },
  { src: '/images/gallery/interior_3.png', alt: 'Consultation Room', category: 'Clinic' },
  { src: '/images/results/bright_before.png', alt: 'Skin Brightening Before', category: 'Results' },
  { src: '/images/results/bright_after.png', alt: 'Skin Brightening After', category: 'Results' },
  { src: '/images/gallery/interior_4.png', alt: 'Product Display', category: 'Clinic' },
  { src: '/images/results/hair_before.png', alt: 'PRP Hair Loss Before', category: 'Results' },
  { src: '/images/results/hair_after.png', alt: 'PRP Hair Regrowth After', category: 'Results' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <section className="pt-32 pb-20 text-center px-6 bg-gradient-to-br from-[#0E5E63] via-[#0a4a4e] to-[#1C1410] relative overflow-hidden">
        <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-luxury-gold/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-56 h-56 rounded-full bg-luxury-gold/8 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">A Glimpse Inside</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-5">
            Clinic <span className="text-gold-gradient">Gallery</span>
          </h1>
          <span className="gold-line" />
          <p className="text-white/70 font-inter text-base max-w-lg mx-auto mt-6 leading-relaxed">
            Explore our world-class clinic, treatment rooms, and the beautiful results we deliver every day.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 px-6 md:px-8">
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
