-- ============================================
-- AISRI COSMETIC CLINIC — Supabase SQL Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  phone       TEXT NOT NULL,
  email       TEXT,
  service     TEXT NOT NULL,
  date        DATE NOT NULL,
  time        TEXT NOT NULL,
  notes       TEXT,
  status      TEXT NOT NULL DEFAULT 'pending'
              CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (for booking form)
CREATE POLICY "Allow public inserts"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to do everything (for admin API)
CREATE POLICY "Allow service role all"
  ON bookings FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings(status);
CREATE INDEX IF NOT EXISTS bookings_date_idx   ON bookings(date);
CREATE INDEX IF NOT EXISTS bookings_created_idx ON bookings(created_at DESC);

-- ============================================
-- DONE. Your bookings table is ready!
-- ============================================
