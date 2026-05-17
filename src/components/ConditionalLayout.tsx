'use client';

import { usePathname } from 'next/navigation';
import FloatingGlassNavbar from './ui/FloatingGlassNavbar';
import Footer from './Footer';
import FloatingWhatsApp from './ui/FloatingWhatsApp';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <FloatingGlassNavbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingWhatsApp />}
    </>
  );
}
