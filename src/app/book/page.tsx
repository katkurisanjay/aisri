'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Calendar, User, Stethoscope, CheckCircle2 } from 'lucide-react';

const services = [
  'Laser Hair Removal', 'HydraFacial', 'Botox & Fillers', 'PRP Hair Transplant',
  'Korean Glass Glow', 'Bridal Skincare Package', 'Acne & Acne Scars',
  'Skin Lightening', 'Chemical Peels', 'MNRF', 'Anti-Aging Treatments',
  'IV Infusions / Glutathione', 'Face Lifting', 'Hair Transplant (GFC)',
  'Anti-Dandruff Treatment', 'Moles & Warts Removal', 'Tattoo Removal',
  'Vaginal Tightening', 'Targeted Fat Lypolysis', 'Stretch Marks Reduction',
];

const timeSlots = {
  Morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'],
  Evening: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'],
};

const steps = [
  { id: 1, label: 'Service',   icon: Stethoscope },
  { id: 2, label: 'Schedule',  icon: Calendar },
  { id: 3, label: 'Details',   icon: User },
  { id: 4, label: 'Confirm',   icon: Check },
];

interface FormData {
  services: string[];
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    services: [], date: '', time: '', name: '', phone: '', email: '', notes: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, status: 'pending' }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please call us directly at 94184 76666.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white shadow-card rounded-3xl p-12 max-w-md w-full text-center border border-[rgba(212,175,55,0.2)]"
        >
          <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.15)] border border-luxury-gold flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-luxury-gold" />
          </div>
          <h2 className="font-playfair text-3xl font-bold text-charcoal mb-3">Booking Confirmed!</h2>
          <p className="text-brown-gray font-inter text-sm leading-relaxed mb-4">
            Thank you, <strong className="text-charcoal">{form.name}</strong>! Your appointment request for
            <strong className="text-luxury-gold"> {form.services.join(', ')}</strong> on <strong className="text-luxury-gold">{form.date}</strong> at <strong className="text-luxury-gold">{form.time}</strong> has been received.
          </p>
          <p className="text-brown-gray font-inter text-xs mb-8">
            Our team will confirm your appointment shortly via call or WhatsApp on <strong className="text-charcoal">{form.phone}</strong>.
          </p>
          <a href="/" className="inline-flex items-center px-8 py-3 rounded-full bg-gold-gradient text-charcoal font-semibold font-inter text-sm hover:shadow-gold-glow transition-all duration-300">
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-luxury-gold font-cormorant italic text-xl mb-3">Schedule Your Visit</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal">
            Book <span className="text-gold-gradient">Appointment</span>
          </h1>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-10 relative">
          <div className="absolute top-5 left-0 right-0 h-[1px] bg-[rgba(212,175,55,0.15)] z-0" />
          <div
            className="absolute top-5 left-0 h-[1px] bg-luxury-gold z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                step > s.id ? 'bg-luxury-gold border-luxury-gold text-white' :
                step === s.id ? 'bg-[rgba(212,175,55,0.15)] border-luxury-gold text-luxury-gold' :
                'bg-white border-[rgba(212,175,55,0.2)] text-brown-gray/40'
              }`}>
                {step > s.id ? <Check size={16} /> : <s.icon size={16} />}
              </div>
              <span className={`text-[10px] font-inter tracking-widest uppercase ${step >= s.id ? 'text-luxury-gold' : 'text-brown-gray/50'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="bg-white shadow-card rounded-3xl p-8 border border-[rgba(212,175,55,0.2)]"
          >
            {/* Step 1: Service */}
            {step === 1 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal">Select Treatments</h3>
                  <span className="text-xs font-inter text-brown-gray/60 bg-[rgba(212,175,55,0.1)] px-3 py-1 rounded-full border border-[rgba(212,175,55,0.2)]">
                    {form.services.length} selected
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      onClick={() => setForm({
                        ...form,
                        services: form.services.includes(s)
                          ? form.services.filter(item => item !== s)
                          : [...form.services, s]
                      })}
                      className={`text-left px-4 py-3 rounded-xl border font-inter text-sm transition-all duration-200 flex items-center justify-between ${
                        form.services.includes(s)
                          ? 'border-luxury-gold bg-[rgba(212,175,55,0.1)] text-luxury-gold'
                          : 'border-[rgba(212,175,55,0.12)] text-brown-gray hover:border-[rgba(212,175,55,0.3)] hover:text-charcoal'
                      }`}
                    >
                      {s}
                      {form.services.includes(s) && <Check size={16} className="text-luxury-gold" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">Choose Date & Time</h3>
                <div>
                  <label className="block text-brown-gray/80 text-xs font-inter uppercase tracking-wider mb-2">Preferred Date</label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-ivory border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-brown-gray/80 text-xs font-inter uppercase tracking-wider mb-2">Preferred Time</label>
                  {Object.entries(timeSlots).map(([period, slots]) => (
                    <div key={period} className="mb-4">
                      <p className="text-xs font-inter text-charcoal font-medium mb-2">{period}</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {slots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setForm({ ...form, time: t })}
                            className={`py-2 px-3 rounded-xl border font-inter text-xs transition-all duration-200 ${
                              form.time === t
                                ? 'border-luxury-gold bg-[rgba(212,175,55,0.1)] text-luxury-gold'
                                : 'border-[rgba(212,175,55,0.12)] text-brown-gray hover:border-[rgba(212,175,55,0.3)]'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <div className="space-y-5">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">Your Details</h3>
                {[
                  { key: 'name',  label: 'Full Name',    type: 'text',  placeholder: 'Enter your full name' },
                  { key: 'phone', label: 'Phone Number', type: 'tel',   placeholder: '+91 00000 00000' },
                  { key: 'email', label: 'Email Address',type: 'email', placeholder: 'your@email.com' },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-brown-gray/80 text-xs font-inter uppercase tracking-wider mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={(form as any)[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full bg-ivory border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/40 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-brown-gray/80 text-xs font-inter uppercase tracking-wider mb-2">Additional Notes (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any concerns, medical history, or specific requests..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full bg-ivory border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/40 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30 transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">Confirm Booking</h3>
                <div className="space-y-3 mb-8">
                  {[
                    { label: 'Treatments',    value: form.services.join(', ') },
                    { label: 'Date',          value: form.date },
                    { label: 'Time',          value: form.time },
                    { label: 'Name',          value: form.name },
                    { label: 'Phone',         value: form.phone },
                    { label: 'Email',         value: form.email },
                    { label: 'Notes',         value: form.notes || '—' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-4 py-3 border-b border-[rgba(212,175,55,0.15)]">
                      <span className="text-brown-gray/60 font-inter text-xs uppercase tracking-wider">{row.label}</span>
                      <span className="text-charcoal font-inter text-sm text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-brown-gray/80 font-inter text-xs text-center mb-6">
                  By confirming, you agree that our team will contact you to confirm the appointment.
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 gap-4">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 rounded-xl border border-[rgba(212,175,55,0.2)] text-brown-gray font-inter text-sm hover:border-luxury-gold hover:text-luxury-gold transition-all duration-200"
                >
                  Back
                </button>
              )}
              <button
                onClick={step < 4 ? () => setStep(step + 1) : handleSubmit}
                disabled={
                  (step === 1 && form.services.length === 0) ||
                  (step === 2 && (!form.date || !form.time)) ||
                  (step === 3 && (!form.name || !form.phone || !form.email)) ||
                  loading
                }
                className="ml-auto flex items-center gap-2 px-8 py-3 rounded-xl bg-gold-gradient text-charcoal font-semibold font-inter text-sm hover:shadow-gold-glow hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {loading ? 'Saving...' : step < 4 ? (<>Next <ChevronRight size={16} /></>) : 'Confirm Appointment'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
