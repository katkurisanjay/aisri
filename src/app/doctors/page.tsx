import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Award, Star, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors | Aisri Cosmetic Clinic Warangal',
  description: 'Meet Founder Akshitha Aroori and Co-Founder Dr. Kavya SP — the expert team behind Aisri Cosmetic Clinic in Hanamkonda, Warangal.',
};

const doctors = [
  {
    name: 'Akshitha Aroori',
    instagram: '@akshitha_aroori1111',
    title: 'Founder — Aisri Cosmetic Clinic',
    specialization: 'Aesthetic & Cosmetic Specialist',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=85',
    qualifications: ['Cosmetic Specialist', 'Aesthetic Practitioner', 'Nail & Beauty Expert'],
    expertise: ['Bridal Skincare', 'Nail Couture (@nailcouchbyaisri)', 'Aesthetic Treatments', 'Clinic Operations'],
    bio: 'Akshitha Aroori, the Founder of Aisri Cosmetic Clinic, brings a passion for beauty and aesthetics to every patient interaction. Under her leadership, the clinic has grown to serve 5,000+ patients across Warangal, earning a 4.6★ Justdial rating with 151 reviews.',
  },
  {
    name: 'Dr. Kavya SP',
    instagram: '@dr.kavyadsp',
    title: 'Co-Founder & Medical Director',
    specialization: 'Cosmetic Medicine Practitioner · PMU Certified',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=85',
    qualifications: ['MBBS', 'Cosmetic Medicine Practitioner', 'PMU Certified', 'Advanced Aesthetic Diploma'],
    expertise: ['Botox & Fillers', 'Laser Treatments', 'MNRF', 'PRP Hair Therapy', 'PMU / Permanent Makeup'],
    bio: 'Dr. Kavya SP, Co-Founder and Medical Director, is a certified Cosmetic Medicine Practitioner and PMU (Permanent Makeup) Certified specialist. She oversees all clinical treatments at Aisri and ensures the highest standards of safety, results, and patient care.',
  },
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <section className="pt-32 pb-20 text-center px-6 bg-gradient-to-br from-[#0E5E63] via-[#0a4a4e] to-[#1C1410] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-luxury-gold/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-luxury-gold/8 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">The Experts Behind Your Transformation</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-5">
            Meet Our <span className="text-gold-gradient">Team</span>
          </h1>
          <span className="gold-line" />
          <p className="text-white/70 font-inter text-base max-w-xl mx-auto mt-6 leading-relaxed">
            Founded by Akshitha Aroori and led clinically by Dr. Kavya SP &mdash; a PMU-certified Cosmetic Medicine Practitioner.
          </p>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-12 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-24">
          {doctors.map((doc, i) => (
            <div key={doc.name}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''}`}
              >
                {/* Photo */}
                <div className="relative">
                <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-card">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.4)] to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(212,175,55,0.9)] text-charcoal">
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs font-inter font-bold">{doc.experience} Experience</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-deep-teal flex items-center justify-center shadow-teal-glow">
                  <Award size={24} className="text-white" />
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl border-2 border-luxury-gold/30 -z-10" />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-luxury-gold font-cormorant italic text-lg">{doc.specialization}</p>
                </div>
                <h2 className="font-playfair text-3xl font-bold text-charcoal mb-1">{doc.name}</h2>
                <p className="text-brown-gray font-inter text-sm mb-1">{doc.title}</p>

                {/* Instagram handle */}
                <a
                  href={`https://instagram.com/${doc.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-inter text-brown-gray/80 hover:text-luxury-gold transition-colors mb-5"
                >
                  <Instagram size={12} /> {doc.instagram}
                </a>

                <p className="text-brown-gray font-inter text-sm leading-relaxed mb-6">{doc.bio}</p>

                {/* Qualifications */}
                <div className="mb-5">
                  <p className="text-brown-gray/60 text-xs font-inter uppercase tracking-wider mb-3">Qualifications</p>
                  <div className="flex flex-wrap gap-2">
                    {doc.qualifications.map((q) => (
                      <span key={q} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgba(212,175,55,0.25)] text-luxury-gold text-xs font-inter">
                        <GraduationCap size={11} /> {q}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-8">
                  <p className="text-brown-gray/60 text-xs font-inter uppercase tracking-wider mb-3">Areas of Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {doc.expertise.map((e) => (
                      <span key={e} className="px-3 py-1.5 rounded-full bg-[rgba(14,94,99,0.1)] border border-[rgba(14,94,99,0.2)] text-charcoal/80 text-xs font-inter">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold-gradient text-charcoal font-semibold font-inter text-sm hover:shadow-gold-glow hover:scale-105 transition-all duration-300"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
            {i < doctors.length - 1 && (
              <hr className="border-[rgba(212,175,55,0.15)] mt-24" />
            )}
          </div>
          ))}
        </div>
      </section>

      {/* Instagram follow CTA */}
      <section className="py-12 bg-cream border-t border-[rgba(212,175,55,0.1)] text-center px-6">
        <div className="max-w-xl mx-auto">
          <p className="text-brown-gray/60 font-inter text-xs uppercase tracking-widest mb-3">Follow Our Journey</p>
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">
            @<span className="text-gold-gradient">aisricosmeticclinic</span>
          </h2>
          <p className="text-brown-gray font-inter text-sm mb-6">233 posts · 1,274 followers · See our latest treatments & transformations</p>
          <a
            href="https://instagram.com/aisricosmeticclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E1306C] via-[#833AB4] to-[#F56040] text-white font-inter font-medium text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Instagram size={16} /> Follow on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
