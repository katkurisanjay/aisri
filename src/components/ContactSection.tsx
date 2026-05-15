'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wa = `https://wa.me/919418476666?text=${encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`
    )}`;
    window.open(wa, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="py-24 bg-cream" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">Find Us</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Get In <span className="text-gold-gradient">Touch</span>
          </h2>
          <span className="gold-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: MapPin, label: 'Address', value: 'House No. 5-11-245, KSR Plaza, 4th Floor,\nNaimnagar, Hanamkonda, Warangal – 506001' },
                { icon: Phone, label: 'Phone', value: '94184 76666', href: 'tel:9418476666' },
                { icon: Mail, label: 'Email', value: 'info@aisricosmeticclinic.com', href: 'mailto:info@aisricosmeticclinic.com' },
                { icon: Clock, label: 'Hours', value: 'Mon–Sat: 10AM – 7PM\nSunday: 10AM – 2PM' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 bg-white shadow-card border border-[rgba(212,175,55,0.2)] rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={16} className="text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-brown-gray/60 text-xs font-inter uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-charcoal font-inter text-sm hover:text-luxury-gold transition-colors duration-200 whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-charcoal font-inter text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.15)] h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.9!2d79.5647!3d17.9862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334c6e1a4b3a7f%3A0x8f2c5b8e1a4b3a7f!2sKSR%20Plaza%2C%20Hanamkonda%2C%20Warangal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aisri Cosmetic Clinic Location"
              />
            </div>
          </motion.div>

          {/* Right: Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white shadow-card rounded-3xl p-8 border border-[rgba(212,175,55,0.2)]">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-2">Send a Message</h3>
              <p className="text-brown-gray font-inter text-sm mb-7">We'll respond within a few hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Your name' },
                  { name: 'phone',   label: 'Phone Number',  type: 'tel',   placeholder: '+91 00000 00000' },
                  { name: 'email',   label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-brown-gray/80 text-xs font-inter uppercase tracking-wider mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={(form as any)[field.name]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-ivory border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/40 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 transition-all duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-brown-gray/80 text-xs font-inter uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your concern or treatment interest..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-ivory border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/40 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gold-gradient text-charcoal font-semibold font-inter hover:shadow-gold-glow hover:scale-[1.02] transition-all duration-300"
                >
                  {sent ? '✓ Message Sent via WhatsApp!' : (<><Send size={16} /> Send Message</>)}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
