import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import BookCTASection from '@/components/BookCTASection';
import ContactSection from '@/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aisri Cosmetic Clinic | Premium Skin & Hair Treatments in Warangal',
  description:
    "Warangal's leading luxury aesthetic clinic. Laser Hair Removal, HydraFacial, Botox, PRP, Korean Glass Glow & Bridal Treatments. 4.6★ rated with 151+ reviews.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <AboutSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <GallerySection />
      <BookCTASection />
      <ContactSection />
    </>
  );
}
