import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Aisri Cosmetic Clinic Warangal',
  description: 'Contact Aisri Cosmetic Clinic at KSR Plaza, Hanamkonda, Warangal. Call 089 0494 8544 or WhatsApp for appointments.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory pt-24">
      {/* Header */}
      <section className="py-12 text-center px-6">
        <p className="text-luxury-gold font-cormorant italic text-xl mb-3">We&apos;re Here For You</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-5">
          Contact <span className="text-gold-gradient">Us</span>
        </h1>
        <span className="gold-line" />
        <p className="text-brown-gray font-inter text-base max-w-lg mx-auto mt-6 leading-relaxed">
          Visit us at KSR Plaza, Hanamkonda or reach us by phone, WhatsApp, or email. We respond quickly!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="tel:9418476666" className="inline-flex items-center px-8 py-3.5 rounded-full bg-gold-gradient text-charcoal font-semibold font-inter text-sm hover:shadow-gold-glow hover:scale-105 transition-all duration-300">
            Call Now: 94184 76666
          </a>
          <a
            href="https://wa.me/919418476666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#25D366] text-white font-semibold font-inter text-sm hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            WhatsApp Us
          </a>
          <Link href="/book" className="inline-flex items-center px-8 py-3.5 rounded-full border border-[rgba(212,175,55,0.4)] text-luxury-gold font-inter text-sm hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300">
            Book Appointment
          </Link>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
