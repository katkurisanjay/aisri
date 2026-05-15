/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ─── Brand Colors ─── */
      colors: {
        // Backgrounds
        ivory:         '#FFFBF4',
        cream:         '#FDF6EC',
        blush:         '#FFF0EB',

        // Gold (logo color)
        'luxury-gold': '#D4AF37',
        'gold-light':  '#E8C87A',
        'gold-dark':   '#9A7B1C',

        // Teal (CTA)
        'deep-teal':   '#0E5E63',
        'teal-light':  '#1A8A8E',

        // Rose/pink
        rose:          '#E8B4A0',
        'blush-dark':  '#D4906E',

        // Text
        charcoal:      '#1C1410',
        'brown-gray':  '#6B5B4E',
        muted:         '#9C8B7E',

        // Legacy (keep for admin/dark sections)
        'rich-black':  '#050505',
        'soft-cream':  '#F8F4EE',
        charcoal2:     '#1A1A1A',
        'feminine-pink': '#E8D6D0',
      },

      /* ─── Fonts ─── */
      fontFamily: {
        playfair:  ['Playfair Display', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },

      /* ─── Gradient Backgrounds ─── */
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E8C87A 50%, #9A7B1C 100%)',
        'gold-light-gradient': 'linear-gradient(135deg, #E8C87A 0%, #D4AF37 100%)',
        'teal-gradient': 'linear-gradient(135deg, #0E5E63 0%, #1A8A8E 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FFFBF4 0%, #FDF6EC 100%)',
        'warm-gradient': 'linear-gradient(135deg, #FFFBF4 0%, #FFF0EB 50%, #FDF6EC 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(255,251,244,0.3) 0%, rgba(253,246,236,0.92) 100%)',
      },

      /* ─── Box Shadows ─── */
      boxShadow: {
        'gold-sm':    '0 4px 20px rgba(212,175,55,0.2)',
        'gold-glow':  '0 8px 40px rgba(212,175,55,0.4)',
        'teal-glow':  '0 8px 30px rgba(14,94,99,0.35)',
        'card':       '0 4px 40px rgba(28,20,16,0.08)',
        'card-hover': '0 16px 60px rgba(28,20,16,0.15)',
        'card-dark':  '0 8px 40px rgba(28,20,16,0.12)',
      },

      /* ─── Keyframe Animations ─── */
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
      animation: {
        shimmer:  'shimmer 2.5s infinite',
        float:    'float 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease forwards',
      },

      /* ─── Border Radius ─── */
      borderRadius: { '4xl': '2rem', '5xl': '3rem' },
    },
  },
  plugins: [],
};
