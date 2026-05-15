# Aisri Cosmetic Clinic 

A premium, luxury-focused web application for **Aisri Cosmetic Clinic**, located in Hanamkonda, Warangal. This platform is built with modern web technologies to provide a fast, SEO-optimized, and visually stunning experience for clinic patients.

## 🌟 Key Features
- **Premium UI/UX**: Designed with a "Warm Bright Luxury" aesthetic (Ivory, Cream, and Gold palette).
- **Responsive Design**: Flawless mobile-first experience using Tailwind CSS.
- **Dynamic Routing**: Dedicated pages for individual treatments, doctors, gallery, and patient testimonials.
- **Admin Dashboard**: A secure, built-in portal (`/admin`) for clinic staff to manage patient bookings.
- **Supabase Integration**: Ready for backend database integration to store appointment requests.
- **Smooth Animations**: High-performance scroll animations powered by Framer Motion.

## 💻 Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database Backend**: Supabase (PostgreSQL)
- **Deployment**: Vercel

---

## 🚀 Running Locally

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the root directory. If you are just testing the UI, you can skip this step and the app will automatically use **Mock Data**.
   If you have a live database, add the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ADMIN_PASSWORD=your_secure_password
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🌐 Deployment to Vercel

This application is fully optimized for **Vercel** deployment.

1. Go to [Vercel](https://vercel.com/) and create a new project.
2. Import this GitHub repository.
3. In the **Environment Variables** section during setup, add the keys listed above (optional for first deploy).
4. Click **Deploy**. Vercel will automatically detect the Next.js framework and build the site.

---

## 🎨 Design System
The site relies heavily on a custom design system configured in `tailwind.config.js`. 
- Primary accents: `luxury-gold` (#D4AF37), `gold-light` (#F3E5AB)
- Backgrounds: `ivory` (#FDF6EC), `cream` (#FFFBF4)
- Text colors: `charcoal` (#2C302E), `brown-gray` (#5A5A5A)

## 📁 Project Structure
- `/src/app`: Next.js App Router pages (Home, Treatments, Doctors, Contact, Book, Admin).
- `/src/components`: Reusable UI components (HeroSection, Navbar, Footer, etc.).
- `/src/app/api`: Serverless backend API routes for managing Supabase bookings.
- `/public`: Static assets, including images and the clinic logo.
