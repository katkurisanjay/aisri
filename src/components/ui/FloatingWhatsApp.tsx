'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const whatsappUrl = `https://wa.me/919418476666?text=${encodeURIComponent(
    'Hello! I found Aisri Cosmetic Clinic online and would like to book an appointment.'
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                className="glass rounded-2xl p-4 max-w-[220px] shadow-card-dark"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                    <span className="text-rich-black font-playfair font-bold text-xs">A</span>
                  </div>
                  <button onClick={() => setTooltipOpen(false)} className="text-soft-cream/40 hover:text-soft-cream mt-0.5">
                    <X size={14} />
                  </button>
                </div>
                <p className="text-xs font-inter text-soft-cream/80 leading-relaxed mb-3">
                  👋 Hi! Book your <span className="text-luxury-gold font-semibold">free consultation</span> today on WhatsApp!
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold font-inter hover:opacity-90 transition-opacity"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            onClick={() => setTooltipOpen(!tooltipOpen)}
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] flex items-center justify-center hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
          >
            <FaWhatsapp size={30} className="text-white" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
