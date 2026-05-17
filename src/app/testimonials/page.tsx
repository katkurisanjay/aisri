import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Testimonials | Aisri Cosmetic Clinic Warangal',
  description: 'Read real patient reviews and testimonials for Aisri Cosmetic Clinic — 4.6★ rated, 151 verified Justdial reviews.',
};

const testimonials = [
  { name: 'Niharika', loc: 'Warangal', rating: 5, treatment: 'Skin Treatment', text: 'AISRI COSMETIC CLINIC is a great place! The doctors and physiotherapists are very good at their jobs. They always check on you well and make sure you are comfortable throughout the treatment. Highly recommended!', avatar: 'N' },
  { name: 'Sai Charan', loc: 'Hanamkonda', rating: 5, treatment: 'Laser Treatment', text: 'I had a great experience at AISRI COSMETIC CLINIC! The prices are very reasonable, and I was happy with the service. The staff was friendly and helpful. Would definitely come back!', avatar: 'S' },
  { name: 'Gowri', loc: 'Warangal', rating: 5, treatment: 'HydraFacial', text: 'AISRI COSMETIC CLINIC is very clean and hygienic. The staff is very kind and helpful. I waited less than expected for my appointment. Really great experience overall!', avatar: 'G' },
  { name: 'Priya Reddy', loc: 'Kazipet', rating: 5, treatment: 'PRP Hair Treatment', text: 'After 6 sessions of PRP my hair fall has reduced by 80%. I can see new hair growth too. The doctors are so patient and explain everything clearly. Amazing results!', avatar: 'P' },
  { name: 'Lakshmi D.', loc: 'Warangal', rating: 5, treatment: 'Korean Glass Glow + Bridal', text: 'Got the bridal package for my wedding — my skin was absolutely glowing on my special day! Everyone was complimenting me. Aisri clinic is the best in Warangal. Thank you so much!', avatar: 'L' },
  { name: 'Ravi Kumar', loc: 'Hanamkonda', rating: 4, treatment: 'Laser Hair Removal', text: 'Excellent laser hair removal sessions — virtually painless and very effective. After 6 sessions I can see 85-90% reduction. The clinic is well-maintained and staff is professional.', avatar: 'R' },
  { name: 'Meena S.', loc: 'Warangal', rating: 5, treatment: 'Skin Lightening', text: 'Visible results in just 3 sessions! My skin tone has lightened significantly and the dark patches are gone. The doctor is very knowledgeable and caring.', avatar: 'M' },
  { name: 'Arjun T.', loc: 'Hanamkonda', rating: 5, treatment: 'Hair Transplant (GFC)', text: 'I was losing hair rapidly and was very worried. After GFC treatment at Aisri, my hair growth is back. It has been 4 months and I am very happy with the results!', avatar: 'A' },
  { name: 'Divya N.', loc: 'Warangal', rating: 5, treatment: 'Botox & Fillers', text: 'I was nervous about Botox but the doctor made me feel completely at ease. The results are so natural — I look refreshed, not frozen! Will definitely do it again.', avatar: 'D' },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <section className="pt-32 pb-20 text-center px-6 bg-gradient-to-br from-[#0E5E63] via-[#0a4a4e] to-[#1C1410] relative overflow-hidden">
        <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-luxury-gold/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-56 h-56 rounded-full bg-luxury-gold/8 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">Patient Experiences</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-5">
            Real <span className="text-gold-gradient">Testimonials</span>
          </h1>
          <span className="gold-line" />
          {/* JD Rating */}
          <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="flex gap-0.5 text-luxury-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-white/80 font-inter text-sm">
              <strong className="text-luxury-gold">4.6/5</strong> &middot; 151 Verified Reviews &middot; Justdial Certified
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white shadow-card rounded-3xl p-7 border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 relative group overflow-hidden"
            >
              <Quote size={40} className="absolute top-5 right-5 text-luxury-gold/10 group-hover:text-luxury-gold/20 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-luxury-gold fill-luxury-gold" />
                ))}
              </div>

              <p className="text-charcoal/80 font-inter text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>

              <div className="pt-4 border-t border-[rgba(212,175,55,0.1)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                  <span className="text-charcoal font-playfair font-bold text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-charcoal font-inter font-semibold text-sm">{t.name}</p>
                  <p className="text-brown-gray font-inter text-xs">{t.loc} · {t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-6 bg-cream border-t border-[rgba(212,175,55,0.1)]">
        <h2 className="font-playfair text-3xl font-bold text-charcoal mb-5">Join Our Happy Patients</h2>
        <Link href="/book" className="inline-flex items-center px-10 py-4 rounded-full bg-gold-gradient text-charcoal font-semibold font-inter hover:shadow-gold-glow hover:scale-105 transition-all duration-300">
          Book Your Appointment
        </Link>
      </section>
    </div>
  );
}
