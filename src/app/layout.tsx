import type { Metadata } from 'next';
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Aisri Cosmetic Clinic | Premium Skin & Hair Treatments in Warangal',
  description:
    "Aisri Cosmetic Clinic — Warangal's leading luxury aesthetic clinic offering Laser Hair Removal, HydraFacial, Korean Glass Glow, Botox, PRP Hair Transplant, Bridal Treatments & more. Book your consultation today.",
  keywords: [
    'cosmetic clinic warangal', 'skin clinic hanamkonda', 'laser hair removal warangal',
    'hydrafacial warangal', 'botox fillers warangal', 'PRP hair treatment warangal',
    'korean glass glow warangal', 'bridal skin treatment', 'aisri cosmetic clinic',
  ],
  openGraph: {
    title: 'Aisri Cosmetic Clinic | Premium Aesthetic Clinic Warangal',
    description: 'Experience luxury skincare & aesthetic treatments at Aisri Cosmetic Clinic, Hanamkonda, Warangal.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body>
        <SmoothScrollProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
