'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, User, Mail, Phone, Users, Calendar, MessageSquare, Sparkles, CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import emailjs from '@emailjs/browser'
import { useCartStore } from '@/store/cartStore'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  cartTotal?: number
}

const INPUT_CLS =
  'w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-all text-sm font-medium placeholder:text-gray-400'

const LABEL_CLS = 'block text-xs font-black uppercase tracking-widest text-gray-500 mb-2'

export function LeadCaptureModal({ isOpen, onClose, onSuccess, cartTotal }: LeadCaptureModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    travelDate: '',
    specialRequests: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { items, total } = useCartStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const travN = parseInt(form.travelers) || 1;
    const cartItems = items.map(i => ({
      name: i.title,
      price: i.price,
      location: i.state,
      duration: '—',
      id: i.id
    }))

    const getItem = (i: number, key: string) =>
      cartItems[i] ? (cartItems[i] as any)[key] || '—' : '—';

    const getSub = (i: number) => {
      if (!cartItems[i]) return '—';
      const price = parseFloat(cartItems[i].price.toString()) || 0;
      return '₹' + (price * travN).toLocaleString('en-IN');
    };

    const params = {
      from_name:       form.name,
      from_email:      form.email,
      phone:           form.phone,
      travellers:      form.travelers || '—',
      travel_date:     form.travelDate || '—',
      message:         form.specialRequests || 'Lead from Popup Modal',
      submission_date: new Date().toLocaleString('en-IN'),
      reference_id:    'GH-' + Date.now().toString().slice(-8),
      cart_count:      cartItems.length,

      item1_name:      getItem(0, 'name'),
      item1_price:     '₹' + (cartItems[0]?.price || 0),
      item1_location:  getItem(0, 'location'),
      item1_duration:  getItem(0, 'duration'),
      item1_id:        getItem(0, 'id'),
      item1_subtotal:  getSub(0),

      item2_name:      getItem(1, 'name'),
      item2_price:     '₹' + (cartItems[1]?.price || 0),
      item2_location:  getItem(1, 'location'),
      item2_duration:  getItem(1, 'duration'),
      item2_id:        getItem(1, 'id'),
      item2_subtotal:  getSub(1),

      item3_name:      getItem(2, 'name'),
      item3_price:     '₹' + (cartItems[2]?.price || 0),
      item3_location:  getItem(2, 'location'),
      item3_duration:  getItem(2, 'duration'),
      item3_id:        getItem(2, 'id'),
      item3_visible:   cartItems.length >= 3 ? 'flex' : 'none',

      grand_total:     '₹' + (cartTotal || total).toLocaleString('en-IN'),
    };

    try {
      // 1. Send EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 2. API call
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, cartTotal: cartTotal || total }),
      })

      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        onSuccess()
      }, 1800)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-2xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-[3rem] shadow-2xl"
          >
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[3rem] bg-gradient-to-r from-[var(--accent-earth)] to-[var(--accent-teal)]" />

            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[var(--accent-earth)]">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Almost There</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                    Tell us about<br />your journey
                  </h2>
                  <h4 className="text-[var(--text-secondary)] text-sm font-medium">
                    Help us personalise your perfect trip 🌏
                  </h4>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 mt-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success state */}
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black">Brilliant! All set 🎉</h3>
                  <h4 className="text-[var(--text-secondary)] font-medium">Redirecting you to checkout...</h4>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name */}
                  <div>
                    <label className={LABEL_CLS}>
                      <User className="inline w-3 h-3 mr-1" />Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Arjun Sharma"
                      value={form.name}
                      onChange={handleChange}
                      className={INPUT_CLS}
                    />
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL_CLS}>
                        <Mail className="inline w-3 h-3 mr-1" />Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="arjun@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={INPUT_CLS}
                      />
                    </div>
                    <div>
                      <label className={LABEL_CLS}>
                        <Phone className="inline w-3 h-3 mr-1" />Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        className={INPUT_CLS}
                      />
                    </div>
                  </div>

                  {/* Row 3: Travelers & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL_CLS}>
                        <Users className="inline w-3 h-3 mr-1" />Number of Travelers *
                      </label>
                      <select
                        name="travelers"
                        required
                        value={form.travelers}
                        onChange={handleChange}
                        className={INPUT_CLS + ' cursor-pointer'}
                      >
                        {[1, 2, 3, 4, 5, '6-10', '10+'].map(v => (
                          <option key={v} value={v}>{v} {v === 1 ? 'Traveler' : 'Travelers'}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={LABEL_CLS}>
                        <Calendar className="inline w-3 h-3 mr-1" />Travel Date *
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        required
                        value={form.travelDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={INPUT_CLS}
                      />
                    </div>
                  </div>

                  {/* Row 4: Special Requests */}
                  <div>
                    <label className={LABEL_CLS}>
                      <MessageSquare className="inline w-3 h-3 mr-1" />Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      placeholder="Dietary requirements, accessibility needs, celebrations, room preferences..."
                      rows={3}
                      value={form.specialRequests}
                      onChange={handleChange}
                      className={INPUT_CLS + ' resize-none'}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-sm text-red-600 font-medium px-2">{error}</p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    magnetic
                    className="w-full !py-5 !rounded-2xl !text-base shadow-xl shadow-[var(--accent-earth)]/20"
                    disabled={loading}
                  >
                    {loading ? 'Saving your details...' : (
                      <><Sparkles className="w-5 h-5 mr-2" /> Submit &amp; Continue to Checkout</>
                    )}
                  </Button>

                  <p className="text-[10px] text-center text-gray-400 leading-relaxed">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
