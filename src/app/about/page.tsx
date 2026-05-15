import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Aisri Cosmetic Clinic Warangal',
  description: 'Learn about Aisri Cosmetic Clinic — Warangal\'s premier aesthetic clinic with 10+ years experience, Justdial verified, 4.6★ rated.',
};

const milestones = [
  { year: '2013', label: 'Clinic Founded in Hanamkonda' },
  { year: '2016', label: 'Introduced Advanced Laser Treatments' },
  { year: '2019', label: 'Expanded Hair Transplant Services' },
  { year: '2022', label: 'Korean Glass Glow & Bridal Packages Launch' },
  { year: '2024', label: '5,000+ Happy Patients Milestone' },
];

const values = [
  { icon: Award,       title: 'Medical Excellence',   desc: 'All treatments performed by certified doctors with the latest FDA-approved equipment.' },
  { icon: Heart,       title: 'Patient-First Care',   desc: 'Every protocol is personalized. We listen, assess, and tailor treatments to your unique needs.' },
  { icon: Users,       title: 'Trusted by Thousands', desc: '5,000+ patients trust us for their skincare, hair, and aesthetic goals.' },
  { icon: CheckCircle2,title: 'Verified & Hygienic',  desc: 'Justdial Verified. Clinical-grade hygiene standards maintained at all times.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1920&q=85" alt="Clinic" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-ivory" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">Our Story</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            About <span className="text-gold-gradient">Aisri Clinic</span>
          </h1>
          <p className="text-charcoal/80 font-inter text-lg leading-relaxed max-w-2xl mx-auto">
            For over a decade, we've been Warangal's most trusted destination for premium cosmetic and aesthetic treatments — combining medical expertise with luxury care.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-card-light">
            <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85" alt="Clinic interior" fill className="object-cover" />
          </div>
          <div>
            <p className="text-deep-teal font-cormorant italic text-xl mb-3">Our Mission</p>
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">
              Beauty Meets <span className="text-gold-gradient">Medicine</span>
            </h2>
            <p className="text-brown-gray font-inter text-base leading-relaxed mb-5">
              At Aisri Cosmetic Clinic, we believe every individual deserves to feel confident and beautiful. Our mission is to deliver world-class aesthetic treatments in a safe, comfortable, and luxurious environment.
            </p>
            <p className="text-brown-gray font-inter text-base leading-relaxed mb-8">
              Located at KSR Plaza, Hanamkonda, we serve patients from across Warangal, Karimnagar, and Hyderabad who seek genuine results with no compromise on safety or quality.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-deep-teal text-white font-inter text-sm font-medium">
              <span>✦</span> Justdial Verified · 4.6★ · 151 Reviews
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-5">Our <span className="text-gold-gradient">Core Values</span></h2>
            <span className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white shadow-card rounded-2xl p-6 border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center mb-5 group-hover:shadow-gold-sm transition-all duration-300">
                  <v.icon size={20} className="text-luxury-gold" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-charcoal mb-3">{v.title}</h3>
                <p className="text-brown-gray font-inter text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-5">Our <span className="text-gold-gradient">Journey</span></h2>
            <span className="gold-line" />
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-luxury-gold via-luxury-gold/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 items-start pl-14 relative">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-[rgba(212,175,55,0.15)] border border-luxury-gold flex items-center justify-center shrink-0">
                    <span className="text-luxury-gold font-playfair font-bold text-xs">{m.year.slice(2)}</span>
                  </div>
                  <div className="bg-white shadow-card rounded-xl p-4 flex-1 border border-[rgba(212,175,55,0.2)]">
                    <span className="text-luxury-gold font-inter text-xs font-semibold tracking-widest">{m.year}</span>
                    <p className="text-charcoal font-playfair text-base font-medium mt-1">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-gradient text-center px-6">
        <h2 className="font-playfair text-3xl font-bold text-white mb-5">Ready to Start Your Journey?</h2>
        <Link href="/book" className="inline-flex items-center px-10 py-4 rounded-full bg-gold-gradient text-charcoal font-semibold font-inter hover:shadow-gold-glow hover:scale-105 transition-all duration-300">
          Book Your Free Consultation
        </Link>
      </section>
    </div>
  );
}
