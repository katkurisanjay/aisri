'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, Phone, Mail, Clock, RefreshCw,
  CheckCircle2, XCircle, AlertCircle, Loader2, LogOut, Filter
} from 'lucide-react';

type Booking = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
};

const STATUS_STYLES: Record<string, string> = {
  pending:   'bg-yellow-100 text-yellow-700 border-yellow-300',
  confirmed: 'bg-blue-100 text-blue-700 border-blue-300',
  completed: 'bg-green-100 text-green-700 border-green-300',
  cancelled: 'bg-red-100 text-red-700 border-red-300',
};

const STATUS_ICONS: Record<string, React.ElementType> = {
  pending:   AlertCircle,
  confirmed: Clock,
  completed: CheckCircle2,
  cancelled: XCircle,
};

type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  
  // Tabs
  const [activeTab, setActiveTab] = useState<'bookings' | 'admins'>('bookings');

  // Bookings State
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');
  
  // Admins State (Mock CRUD)
  const [admins, setAdmins] = useState<AdminUser[]>([
    { id: '1', name: 'Akshitha Aroori', email: 'admin@aisriclinic.com', role: 'Owner' },
    { id: '2', name: 'Dr. Kavya SP', email: 'kavya@aisriclinic.com', role: 'Doctor' },
  ]);
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<AdminUser | null>(null);
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminRole, setNewAdminRole] = useState('Staff');
  const [newAdminPass, setNewAdminPass] = useState('');

  const fetchBookings = useCallback(async (key: string, status = 'all') => {
    setLoading(true);
    try {
      const res = await fetch(`/api/bookings?status=${status}`, {
        headers: { 'x-admin-key': key },
      });
      if (!res.ok) { setError('Unauthorized or server error'); return; }
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch { setError('Failed to load bookings'); }
    finally { setLoading(false); }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validAdmin = admins.find(a => a.email === email);
    if (!validAdmin) {
      setError('Invalid email address');
      return;
    }
    setAdminKey(password);
    setAuthed(true);
    setError('');
    fetchBookings(password, filter);
  };

  const handleSaveAdmin = () => {
    if (!newAdminName || !newAdminEmail) return;
    
    if (editingAdmin) {
      // Update
      setAdmins(admins.map(a => a.id === editingAdmin.id ? { ...a, name: newAdminName, email: newAdminEmail, role: newAdminRole } : a));
    } else {
      // Create
      setAdmins([...admins, { id: Date.now().toString(), name: newAdminName, email: newAdminEmail, role: newAdminRole }]);
    }
    
    setShowAddAdmin(false);
    setEditingAdmin(null);
    setNewAdminName('');
    setNewAdminEmail('');
    setNewAdminRole('Staff');
    setNewAdminPass('');
  };

  const handleDeleteAdmin = (id: string) => {
    if (confirm('Are you sure you want to delete this admin?')) {
      setAdmins(admins.filter(a => a.id !== id));
    }
  };

  const openEditAdmin = (admin: AdminUser) => {
    setEditingAdmin(admin);
    setNewAdminName(admin.name);
    setNewAdminEmail(admin.email);
    setNewAdminRole(admin.role);
    setNewAdminPass('');
    setShowAddAdmin(true);
  };

  useEffect(() => {
    if (authed && adminKey) fetchBookings(adminKey, filter);
  }, [filter, authed, adminKey, fetchBookings]);

  const updateStatus = async (id: string, status: string) => {
    await fetch('/api/bookings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
      body: JSON.stringify({ id, status }),
    });
    fetchBookings(adminKey, filter);
  };

  // Stats
  const stats = {
    total:     bookings.length,
    pending:   bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    completed: bookings.filter(b => b.status === 'completed').length,
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 max-w-sm w-full border border-[rgba(212,175,55,0.3)] shadow-card"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
              <span className="text-charcoal font-playfair font-bold text-xl">A</span>
            </div>
            <h1 className="font-playfair text-2xl font-bold text-charcoal">Admin Portal</h1>
            <p className="text-brown-gray font-inter text-xs mt-1">Aisri Cosmetic Clinic</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-500 text-xs font-inter text-center">{error}</p>}
            <input
              type="email"
              placeholder="Admin Email (admin@aisriclinic.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-cream border border-[rgba(212,175,55,0.3)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/50 focus:outline-none focus:border-luxury-gold transition-all"
              required
            />
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-cream border border-[rgba(212,175,55,0.3)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/50 focus:outline-none focus:border-luxury-gold transition-all"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0E5E63] to-[#1A8A8E] text-white font-semibold font-inter hover:shadow-gold-glow transition-all duration-300"
            >
              Sign In
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory pt-8 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-playfair text-3xl font-bold text-charcoal">Bookings Dashboard</h1>
            <p className="text-brown-gray font-inter text-sm mt-1">Aisri Cosmetic Clinic · Admin</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => {
                setEditingAdmin(null);
                setNewAdminName('');
                setNewAdminEmail('');
                setNewAdminRole('Staff');
                setNewAdminPass('');
                setShowAddAdmin(true);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-charcoal text-sm font-semibold font-inter hover:shadow-gold-glow transition-all duration-200"
            >
              Add Admin
            </button>
            <button
              onClick={() => fetchBookings(adminKey, filter)}
              className="p-2.5 rounded-xl border border-[rgba(212,175,55,0.2)] text-luxury-gold hover:bg-[rgba(212,175,55,0.1)] transition-all duration-200"
              aria-label="Refresh"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={() => { setAuthed(false); setAdminKey(''); setBookings([]); }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[rgba(212,175,55,0.2)] text-brown-gray text-sm font-inter hover:text-luxury-gold hover:border-luxury-gold transition-all duration-200"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-8 border-b border-[rgba(212,175,55,0.2)]">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`pb-3 font-playfair font-semibold text-lg transition-all duration-200 relative ${activeTab === 'bookings' ? 'text-charcoal' : 'text-brown-gray/50 hover:text-charcoal'}`}
          >
            Bookings
            {activeTab === 'bookings' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-luxury-gold rounded-t-full" />}
          </button>
          <button
            onClick={() => setActiveTab('admins')}
            className={`pb-3 font-playfair font-semibold text-lg transition-all duration-200 relative ${activeTab === 'admins' ? 'text-charcoal' : 'text-brown-gray/50 hover:text-charcoal'}`}
          >
            Admins
            {activeTab === 'admins' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-luxury-gold rounded-t-full" />}
          </button>
        </div>

        {/* Add Admin Modal */}
        {showAddAdmin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full border border-[rgba(212,175,55,0.3)] shadow-2xl relative">
              <button 
                onClick={() => setShowAddAdmin(false)}
                className="absolute top-4 right-4 text-brown-gray hover:text-charcoal"
              >
                <XCircle size={20} />
              </button>
              <h2 className="font-playfair text-2xl font-bold text-charcoal mb-2">
                {editingAdmin ? 'Edit Admin' : 'Add New Admin'}
              </h2>
              <p className="text-brown-gray font-inter text-xs mb-6">
                {editingAdmin ? 'Update administrator details.' : 'Create a new administrator account.'}
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={newAdminName}
                  onChange={(e) => setNewAdminName(e.target.value)}
                  className="w-full bg-cream border border-[rgba(212,175,55,0.3)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/50 focus:outline-none focus:border-luxury-gold transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  className="w-full bg-cream border border-[rgba(212,175,55,0.3)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/50 focus:outline-none focus:border-luxury-gold transition-all"
                />
                <select
                  value={newAdminRole}
                  onChange={(e) => setNewAdminRole(e.target.value)}
                  className="w-full bg-cream border border-[rgba(212,175,55,0.3)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm focus:outline-none focus:border-luxury-gold transition-all"
                >
                  <option value="Owner">Owner</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Staff">Staff</option>
                </select>
                <input
                  type="password"
                  placeholder={editingAdmin ? "Change Password (optional)" : "Create Password"}
                  value={newAdminPass}
                  onChange={(e) => setNewAdminPass(e.target.value)}
                  className="w-full bg-cream border border-[rgba(212,175,55,0.3)] rounded-xl px-4 py-3 text-charcoal font-inter text-sm placeholder:text-brown-gray/50 focus:outline-none focus:border-luxury-gold transition-all"
                />
                <button
                  onClick={handleSaveAdmin}
                  className="w-full py-3 rounded-xl bg-gold-gradient text-charcoal font-semibold font-inter hover:shadow-gold-glow transition-all duration-300"
                >
                  {editingAdmin ? 'Save Changes' : 'Create Admin'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-inter">{error}</div>}

        {activeTab === 'admins' && (
          <div className="space-y-4">
            <div className="grid grid-cols-4 px-6 py-3 bg-[rgba(212,175,55,0.1)] rounded-xl border border-[rgba(212,175,55,0.2)]">
              <span className="font-playfair font-semibold text-charcoal">Name</span>
              <span className="font-playfair font-semibold text-charcoal">Email</span>
              <span className="font-playfair font-semibold text-charcoal">Role</span>
              <span className="font-playfair font-semibold text-charcoal text-right">Actions</span>
            </div>
            {admins.map((admin) => (
              <div key={admin.id} className="grid grid-cols-4 px-6 py-4 bg-white rounded-xl border border-[rgba(212,175,55,0.2)] items-center shadow-card">
                <span className="font-inter text-charcoal font-medium">{admin.name}</span>
                <span className="font-inter text-brown-gray text-sm">{admin.email}</span>
                <span className="font-inter text-brown-gray text-sm">
                  <span className="px-3 py-1 bg-cream rounded-full border border-[rgba(212,175,55,0.3)] text-xs">{admin.role}</span>
                </span>
                <div className="flex gap-2 justify-end">
                  <button onClick={() => openEditAdmin(admin)} className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 text-xs font-inter hover:bg-blue-500/20 transition-all">Edit</button>
                  <button onClick={() => handleDeleteAdmin(admin.id)} className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-600 text-xs font-inter hover:bg-red-500/20 transition-all">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'bookings' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total',     value: stats.total,     color: 'text-charcoal' },
                { label: 'Pending',   value: stats.pending,   color: 'text-yellow-600' },
                { label: 'Confirmed', value: stats.confirmed, color: 'text-blue-600' },
                { label: 'Completed', value: stats.completed, color: 'text-green-600' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-[rgba(212,175,55,0.2)] shadow-card">
                  <p className={`font-playfair text-3xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-brown-gray font-inter text-xs uppercase tracking-wider mt-1">{s.label} Bookings</p>
                </div>
              ))}
            </div>

            {/* Filter */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Filter size={14} className="text-luxury-gold" />
              {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full border text-xs font-inter capitalize transition-all duration-200 ${
                    filter === f
                      ? 'border-luxury-gold bg-[rgba(212,175,55,0.15)] text-luxury-gold'
                      : 'border-[rgba(212,175,55,0.3)] text-brown-gray hover:border-luxury-gold/60'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex justify-center py-16">
                <Loader2 size={32} className="text-luxury-gold animate-spin" />
              </div>
            )}

            {/* Bookings Table */}
            {!loading && bookings.length === 0 && (
              <div className="text-center py-16 text-brown-gray/50 font-inter">No bookings found.</div>
            )}

            {!loading && bookings.length > 0 && (
              <div className="space-y-4">
                {bookings.map((b) => {
                  const StatusIcon = STATUS_ICONS[b.status];
                  return (
                    <motion.div
                      key={b.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl p-6 border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.4)] shadow-card transition-all duration-200"
                    >
                      <div className="flex flex-col lg:flex-row justify-between gap-6">
                        {/* Main info with strictly defined grid widths for perfect alignment across rows */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
                      <div>
                        <p className="text-luxury-gold font-playfair font-semibold text-base">{b.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Phone size={11} className="text-brown-gray/50" />
                          <a href={`tel:${b.phone}`} className="text-brown-gray font-inter text-xs hover:text-luxury-gold transition-colors">{b.phone}</a>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Mail size={11} className="text-brown-gray/50" />
                          <span className="text-brown-gray font-inter text-xs">{b.email || '—'}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-charcoal font-inter text-sm font-medium">{b.service}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar size={11} className="text-brown-gray/50" />
                          <span className="text-brown-gray font-inter text-xs">{b.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Clock size={11} className="text-brown-gray/50" />
                          <span className="text-brown-gray font-inter text-xs">{b.time}</span>
                        </div>
                      </div>
                      <div>
                        {b.notes && (
                          <p className="text-brown-gray/60 font-inter text-xs leading-relaxed italic">"{b.notes}"</p>
                        )}
                        <p className="text-brown-gray/40 font-inter text-[10px] mt-2">
                          Received: {new Date(b.created_at).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' })}
                        </p>
                        </div>
                        
                        {/* Status + Actions - fixed width to prevent altering the main grid alignment */}
                        <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-[280px] shrink-0 border-t lg:border-t-0 lg:border-l border-[rgba(212,175,55,0.1)] pt-4 lg:pt-0 lg:pl-6">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-inter font-medium capitalize ${STATUS_STYLES[b.status]}`}>
                        <StatusIcon size={11} />
                        {b.status}
                      </span>
                      {/* Status actions */}
                      <div className="flex flex-wrap gap-2">
                        {b.status !== 'confirmed' && b.status !== 'completed' && (
                          <button
                            onClick={() => updateStatus(b.id, 'confirmed')}
                            className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-inter hover:bg-blue-500/20 transition-all"
                          >Confirm</button>
                        )}
                        {b.status !== 'completed' && (
                          <button
                            onClick={() => updateStatus(b.id, 'completed')}
                            className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-inter hover:bg-green-500/20 transition-all"
                          >Complete</button>
                        )}
                        {b.status !== 'cancelled' && (
                          <button
                            onClick={() => updateStatus(b.id, 'cancelled')}
                            className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-inter hover:bg-red-500/20 transition-all"
                          >Cancel</button>
                        )}
                        {/* WhatsApp direct */}
                        <a
                          href={`https://wa.me/${b.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${b.name}! Your appointment for ${b.service} on ${b.date} at ${b.time} has been confirmed at Aisri Cosmetic Clinic. See you soon! 😊`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-inter hover:bg-[#25D366]/20 transition-all"
                        >WhatsApp</a>
                      </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
