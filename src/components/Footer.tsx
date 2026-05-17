'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const services = [
  'Laser Hair Removal', 'HydraFacial / Medifacial', 'Botox & Fillers', 
  'PRP / GFC Hair Transplant', 'Korean Glass Glow', 'Bridal Skincare',
];

const quickLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About Us' },
  { href: '/treatments',   label: 'Treatments' },
  { href: '/doctors',      label: 'Our Doctors' },
  { href: '/gallery',      label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact' },
  { href: '/book',         label: 'Book Appointment' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1410] border-t border-[rgba(212,175,55,0.2)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <div className="relative h-14 w-36">
              <Image src="/images/logo.png" alt="Aisri Cosmetic Clinic" fill className="object-contain object-left" />
            </div>
          </div>
          <p className="text-soft-cream/60 text-sm font-inter leading-relaxed mb-6">
            Premium cosmetic clinic providing advanced skincare, hair transplant & aesthetic treatments in Hanamkonda, Warangal.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, href: 'https://instagram.com/aisricosmeticclinic', label: 'Instagram' },
              { icon: Facebook,  href: 'https://facebook.com/aisricosmeticclinic',  label: 'Facebook' },
              { icon: Youtube,   href: 'https://youtube.com',   label: 'YouTube' },
              { icon: MessageCircle, href: 'https://wa.me/919418476666', label: 'WhatsApp' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-soft-cream/60 hover:text-luxury-gold hover:border-luxury-gold hover:shadow-gold-sm transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-playfair text-lg font-semibold text-luxury-gold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-inter text-soft-cream/60 hover:text-luxury-gold transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-4 h-[1px] bg-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-playfair text-lg font-semibold text-luxury-gold mb-5">Treatments</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/treatments"
                  className="text-sm font-inter text-soft-cream/60 hover:text-luxury-gold transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-4 h-[1px] bg-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  {s}
                </Link>
              </li>
            ))}
            <li className="pt-3 mt-3 border-t border-[rgba(212,175,55,0.1)]">
              <Link
                href="/treatments"
                className="text-sm font-inter text-luxury-gold hover:text-white transition-colors duration-200 flex items-center gap-2 group font-medium"
              >
                View All Treatments <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-playfair text-lg font-semibold text-luxury-gold mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={16} className="text-luxury-gold mt-0.5 shrink-0" />
              <p className="text-sm font-inter text-soft-cream/60 leading-relaxed">
                House No. 5-11-245, KSR Plaza,<br />4th Floor, Naimnagar, Hanamkonda,<br />Warangal – 506001, Telangana
              </p>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-luxury-gold shrink-0" />
              <a href="tel:9418476666" className="text-sm font-inter text-soft-cream/60 hover:text-luxury-gold transition-colors duration-200">
                94184 76666
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-luxury-gold shrink-0" />
              <a href="mailto:info@aisricosmeticclinic.com" className="text-sm font-inter text-soft-cream/60 hover:text-luxury-gold transition-colors duration-200">
                info@aisricosmeticclinic.com
              </a>
            </li>
          </ul>
          <div className="mt-6 p-4 rounded-xl border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.04)]">
            <p className="text-xs font-inter text-soft-cream/50 uppercase tracking-widest mb-1">Business Hours</p>
            <p className="text-sm font-inter text-soft-cream/70">Mon – Sat: 10:00 AM – 7:00 PM</p>
            <p className="text-sm font-inter text-soft-cream/70">Sunday: 10:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(212,175,55,0.1)] py-6 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-soft-cream/40 text-xs font-inter text-center md:text-left">
            © {new Date().getFullYear()} Aisri Cosmetic Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-soft-cream/30 font-inter">Rating:</span>
            <div className="flex text-luxury-gold gap-0.5 mx-1">{'★★★★★'.split('').map((s, i) => <span key={i} className="text-xs">{s}</span>)}</div>
            <span className="text-xs text-soft-cream/40 font-inter">4.6 (151 reviews)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
