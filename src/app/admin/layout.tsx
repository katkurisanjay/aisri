import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Aisri Cosmetic Clinic',
  description: 'Admin portal for managing appointments at Aisri Cosmetic Clinic.',
  robots: 'noindex, nofollow',
};

// This layout intentionally excludes the public Navbar, Footer, and WhatsApp widget
// so that the admin panel is a clean, standalone experience.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
