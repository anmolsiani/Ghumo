"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ShieldCheck, CreditCard, Send } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser'

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false)
  const { items, total, clearCart } = useCartStore()
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('sending')
    
    // Extract customer info from form
    const elements = (e.target as any).elements
    const firstName = elements[0].value
    const lastName = elements[1].value
    const email = elements[2].value
    const phone = elements[3].value

    // Map cart items for EmailJS template
    const travN = 1 // Default to 1 for checkout unless specified
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
      from_name:       `${firstName} ${lastName}`,
      from_email:      email,
      phone:           phone,
      travellers:      '1', // Checkout is usually for the user
      travel_date:     '—',
      message:         'New Booking from Checkout Page',
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

      grand_total:     '₹' + total.toLocaleString('en-IN'),
    };

    try {
      // 1. Send EmailJS notification
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 2. Original API call (optional, but keep for backend logging if it exists)
       await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          total,
          customer: {
            name: `${firstName} ${lastName}`,
            email: email,
            phone: phone,
          }
        })
      })

      setCompleted(true)
      setStatus('success')
      clearCart()
      router.refresh()
    } catch (error) {
      console.error('Checkout error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  if (completed) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle className="w-12 h-12 text-green-500" />
        </motion.div>
        <h1 className="text-5xl font-black mb-4 tracking-tighter">Booking Confirmed!</h1>
        <p className="text-[var(--text-secondary)] mb-12 max-w-sm">
          Your premium travel experience is being prepared. We have sent a confirmation email with all the details.
        </p>
        <Link href="/">
          <Button variant="primary" magnetic as="div">Return to Home</Button>
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black mb-4">No items to checkout</h1>
        <Link href="/destinations">
          <Button variant="primary" as="div">Explore Packages</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-32 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8 md:space-y-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 md:mb-6">Secure <span className="text-[var(--accent-earth)]">Checkout</span></h1>
            <p className="text-sm md:text-base text-[var(--text-secondary)]">Complete your booking details to start your journey.</p>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">First Name</label>
                  <input required className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)] text-sm md:text-base" placeholder="John" />
               </div>
               <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Last Name</label>
                  <input required className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)] text-sm md:text-base" placeholder="Doe" />
               </div>
            </div>
            <div>
               <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Email Address</label>
               <input required type="email" className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)] text-sm md:text-base" placeholder="john@example.com" />
            </div>
            <div>
               <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Phone Number</label>
               <input required className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)] text-sm md:text-base" placeholder="+91 99999 00000" />
            </div>
            
            <div className="pt-6">
               <Button variant="primary" type="submit" disabled={loading} className="w-full !py-4 md:!py-5 !rounded-xl !text-base md:!text-lg">
                  {loading ? 'Processing...' : 'Confirm Booking'}
               </Button>
            </div>
          </form>
        </div>

        <div className="space-y-8 mt-12 lg:mt-0">
           <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem]">
              <h2 className="text-xl md:text-2xl font-black mb-6 md:mb-8">Order Summary</h2>
              <div className="space-y-6 mb-8">
                 {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                       <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={item.image} fill className="object-cover" alt={item.title} />
                       </div>
                       <div className="flex-grow">
                          <p className="font-bold text-xs md:text-sm line-clamp-1">{item.title}</p>
                          <p className="text-[9px] md:text-[10px] text-[var(--text-muted)]">{item.state}</p>
                       </div>
                       <p className="font-bold text-sm md:text-base whitespace-nowrap">₹{item.price.toLocaleString()}</p>
                    </div>
                 ))}
              </div>
              <div className="border-t border-black/5 pt-6 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
                 <div className="text-center sm:text-left">
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">Total Amount</p>
                    <p className="text-2xl md:text-3xl font-black text-[var(--accent-teal)]">₹{total.toLocaleString()}/-</p>
                 </div>
                 <div className="flex items-center gap-2 text-green-600">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Secure</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
