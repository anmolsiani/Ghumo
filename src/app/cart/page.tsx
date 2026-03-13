"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/Button'
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'

export default function CartPage() {
  const [mounted, setMounted] = useState(false)
  const { items, removeItem, total, clearCart } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 flex items-center justify-center">
        <div className="text-center"><p className="text-xl font-black">Loading...</p></div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8">
           <ShoppingBag className="w-10 h-10 text-gray-400" />
        </div>
        <h1 className="text-4xl font-black mb-4">Your cart is empty</h1>
        <p className="text-[var(--text-secondary)] mb-12 max-w-sm">
          It looks like you haven't added any premium travel packages to your cart yet.
        </p>
        <Link href="/destinations">
          <Button variant="primary" magnetic withArrow as="div">Explore Destinations</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-40 pb-32 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-black tracking-tighter">Your <span className="text-[var(--accent-earth)]">Cart</span></h1>
            <button onClick={clearCart} className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors">Clear All</button>
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="glass p-6 rounded-[2rem] flex flex-col sm:flex-row items-center gap-8 border-white/50">
                <div className="relative w-full sm:w-48 aspect-square rounded-2xl overflow-hidden shadow-md">
                   <Image src={item.image} fill className="object-cover" alt={item.title} />
                </div>
                <div className="flex-grow text-center sm:text-left space-y-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-earth)]">Premium Package</span>
                   <h3 className="text-2xl font-black leading-tight">{item.title}</h3>
                   <p className="text-sm text-[var(--text-secondary)]">📍 {item.state.replace('-', ' ')}</p>
                </div>
                <div className="flex flex-col items-center sm:items-end gap-4 min-w-[150px]">
                   <p className="text-2xl font-bold">₹{item.price.toLocaleString()}/-</p>
                   <button 
                     onClick={() => removeItem(item.id)}
                     className="p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                   >
                     <Trash2 className="w-5 h-5" />
                   </button>
                </div>
              </div>
            ))}
          </div>

          <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            Continue Browsing
          </Link>
        </div>

        {/* Summary & Checkout */}
        <div className="lg:col-span-1">
          <div className="glass p-10 rounded-[3rem] sticky top-32 border-[var(--accent-earth)]/10">
            <h2 className="text-2xl font-black mb-8">Summary</h2>
            <div className="space-y-4 mb-8">
               <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Subtotal ({items.length} items)</span>
                  <span className="font-bold">₹{total.toLocaleString()}</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">GST (Included)</span>
                  <span className="font-bold">₹0</span>
               </div>
               <div className="border-t border-black/5 pt-4 flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-[var(--accent-teal)]">₹{total.toLocaleString()}/-</span>
               </div>
            </div>

            <Button variant="primary" magnetic className="w-full !rounded-2xl">Proceed to Checkout</Button>
            
            <p className="mt-8 text-[10px] text-center text-[var(--text-muted)] leading-relaxed">
              By clicking checkout, you agree to our Terms of Service and Privacy Policy regarding travel bookings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
