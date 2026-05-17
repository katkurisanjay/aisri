'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/treatments',   label: 'Treatments' },
  { href: '/doctors',      label: 'Doctors' },
  { href: '/gallery',      label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact' },
];

export default function FloatingGlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(253,246,236,0.96)] backdrop-blur-2xl border-b border-[rgba(212,175,55,0.25)] shadow-[0_4px_30px_rgba(28,20,16,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-14 w-36">
              <Image
                src="/images/logo.png"
                alt="Aisri Cosmetic Clinic"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-inter font-medium tracking-wide transition-colors duration-200 group ${
                  pathname === link.href ? 'text-luxury-gold' : 'text-charcoal hover:text-luxury-gold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-luxury-gold transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:9418476666"
              className="hidden md:flex items-center gap-2 text-sm font-inter text-charcoal bg-luxury-gold/20 border border-luxury-gold/40 px-3 py-1.5 rounded-full hover:bg-luxury-gold hover:text-charcoal transition-all duration-200"
            >
              <Phone size={14} />
              <span>94184 76666</span>
            </a>
            <Link
              href="/book"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-gold-gradient text-rich-black text-sm font-semibold font-inter hover:shadow-gold-glow hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-soft-cream hover:text-luxury-gold transition-colors duration-200 p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(253,246,236,0.98)] backdrop-blur-2xl flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            {/* Mobile logo */}
            <div className="relative h-16 w-40 mb-4">
              <Image src="/images/logo.png" alt="Aisri Cosmetic Clinic" fill className="object-contain" />
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-playfair font-medium transition-colors duration-200 ${
                    pathname === link.href ? 'text-luxury-gold' : 'text-charcoal hover:text-luxury-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}>
              <Link
                href="/book"
                className="mt-4 inline-flex items-center px-10 py-3 rounded-full bg-gold-gradient text-rich-black text-base font-semibold font-inter hover:shadow-gold-glow transition-all duration-300"
              >
                Book Appointment
              </Link>
            </motion.div>
            <a href="tel:9418476666" className="flex items-center gap-2 text-brown-gray hover:text-luxury-gold transition-colors font-inter">
              <Phone size={16} />
              <span>94184 76666</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
