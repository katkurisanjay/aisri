import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const isMock = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('your-project');

// Dummy data for when Supabase is not configured yet
let mockBookings = [
  { id: '1', name: 'John Doe', phone: '9876543210', email: 'john@example.com', service: 'Laser Hair Removal', date: '2026-06-20', time: '10:00 AM', notes: 'First time', status: 'pending', created_at: new Date().toISOString() },
  { id: '2', name: 'Jane Smith', phone: '9876543211', email: 'jane@example.com', service: 'HydraFacial', date: '2026-06-21', time: '11:30 AM', notes: 'Skin is slightly sensitive', status: 'confirmed', created_at: new Date(Date.now() - 86400000).toISOString() },
  { id: '3', name: 'Anjali Sharma', phone: '9876543212', email: 'anjali@example.com', service: 'Botox & Fillers', date: '2026-06-22', time: '02:00 PM', notes: '', status: 'completed', created_at: new Date(Date.now() - 172800000).toISOString() }
];

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key'
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, date, time, notes } = body;

    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (isMock) {
      const newBooking = { id: Math.random().toString(), name, phone, email, service, date, time, notes, status: 'pending', created_at: new Date().toISOString() };
      mockBookings.unshift(newBooking);
      return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
    }

    const { data, error } = await supabase.from('bookings').insert([
      { name, phone, email, service, date, time, notes, status: 'pending', created_at: new Date().toISOString() },
    ]).select();

    if (error) throw error;

    return NextResponse.json({ success: true, booking: data?.[0] }, { status: 201 });
  } catch (err: any) {
    console.error('Booking error:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const adminKey = req.headers.get('x-admin-key');

  if (!isMock && adminKey !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const status = searchParams.get('status');
  
  if (isMock) {
    const filtered = status && status !== 'all' ? mockBookings.filter(b => b.status === status) : mockBookings;
    return NextResponse.json({ bookings: filtered });
  }

  let query = supabase.from('bookings').select('*').order('created_at', { ascending: false });
  if (status && status !== 'all') query = query.eq('status', status);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ bookings: data });
}

export async function PATCH(req: NextRequest) {
  const adminKey = req.headers.get('x-admin-key');
  if (!isMock && adminKey !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { id, status } = body;

  if (isMock) {
    const b = mockBookings.find(b => b.id === id);
    if (b) b.status = status;
    return NextResponse.json({ success: true, booking: b });
  }

  const { data, error } = await supabase.from('bookings').update({ status }).eq('id', id).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, booking: data?.[0] });
}
