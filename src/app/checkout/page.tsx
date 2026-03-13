"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ShieldCheck, CreditCard, Send } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false)
  const { items, total, clearCart } = useCartStore()
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          total,
          customer: {
            name: `${(e.target as any).elements[0].value} ${(e.target as any).elements[1].value}`,
            email: (e.target as any).elements[2].value,
            phone: (e.target as any).elements[3].value,
          }
        })
      })

      if (response.ok) {
        setCompleted(true)
        clearCart()
        router.refresh()
      } else {
        console.error('Checkout failed')
      }
    } catch (error) {
      console.error('Checkout error:', error)
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
    <div className="min-h-screen pt-40 pb-32 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl font-black tracking-tighter mb-6">Secure <span className="text-[var(--accent-earth)]">Checkout</span></h1>
            <p className="text-[var(--text-secondary)]">Complete your booking details to start your journey.</p>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">First Name</label>
                  <input required className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)]" placeholder="John" />
               </div>
               <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Last Name</label>
                  <input required className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)]" placeholder="Doe" />
               </div>
            </div>
            <div>
               <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Email Address</label>
               <input required type="email" className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)]" placeholder="john@example.com" />
            </div>
            <div>
               <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Phone Number</label>
               <input required className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:border-[var(--accent-earth)]" placeholder="+91 99999 00000" />
            </div>
            
            <div className="pt-6">
               <Button variant="primary" type="submit" disabled={loading} className="w-full !py-5 !rounded-xl !text-lg">
                  {loading ? 'Processing...' : 'Confirm Booking'}
               </Button>
            </div>
          </form>
        </div>

        <div className="space-y-8">
           <div className="glass p-10 rounded-[3rem]">
              <h2 className="text-2xl font-black mb-8">Order Summary</h2>
              <div className="space-y-6 mb-8">
                 {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                       <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={item.image} fill className="object-cover" alt={item.title} />
                       </div>
                       <div className="flex-grow">
                          <p className="font-bold text-sm line-clamp-1">{item.title}</p>
                          <p className="text-[10px] text-[var(--text-muted)]">{item.state}</p>
                       </div>
                       <p className="font-bold whitespace-nowrap">₹{item.price.toLocaleString()}</p>
                    </div>
                 ))}
              </div>
              <div className="border-t border-black/5 pt-6 flex justify-between items-end">
                 <div>
                    <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Total Amount</p>
                    <p className="text-3xl font-black text-[var(--accent-teal)]">₹{total.toLocaleString()}/-</p>
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
