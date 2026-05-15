'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Star } from 'lucide-react';

const stats = [
  { icon: Users,       value: '5,000+',  label: 'Happy Patients' },
  { icon: Award,       value: '10+',     label: 'Years Experience' },
  { icon: ShieldCheck, value: 'Verified',label: 'Justdial Certified' },
  { icon: Star,        value: '4.6★',    label: '151 Reviews' },
];

export default function TrustBar() {
  return (
    <section className="py-6 bg-white border-y border-[rgba(212,175,55,0.15)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[rgba(212,175,55,0.15)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 justify-center md:px-8 py-2"
            >
              <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center shrink-0">
                <stat.icon size={18} className="text-luxury-gold" />
              </div>
              <div>
                <p className="font-playfair text-xl font-bold text-gold-gradient leading-none">{stat.value}</p>
                <p className="text-brown-gray text-xs font-inter mt-1 tracking-wide">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
