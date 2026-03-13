"use client"

import React from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-32 bg-white flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-20 text-center">
        <div className="glass p-20 rounded-[4rem] relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-[#8B7355]/10 to-[#2C5F5D]/10">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-earth)]/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--accent-teal)]/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">Adventure Awaits</span>
            <h2 className="text-[var(--text-lg)] font-black leading-tight max-w-2xl mx-auto">Ready to start your next great story?</h2>
            <p className="text-[var(--text-base)] text-[var(--text-secondary)] max-w-xl mx-auto">
              Book a consultation with our travel experts today and let us craft a journey tailored specifically for you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Button variant="primary" magnetic withArrow className="!px-12">Plan My Trip</Button>
              <Link href="/contact">
                <Button variant="secondary" className="!px-12">Contact Support</Button>
              </Link>
            </div>
            
            <div className="pt-12 border-t border-black/5 mt-12 flex flex-wrap justify-center gap-12 grayscale opacity-40">
               {/* Trust Marks */}
               <div className="flex items-center gap-2">
                  <span className="text-2xl font-black">24/7</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Expert<br/>Support</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-2xl font-black">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Secure<br/>Payments</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-2xl font-black">ISO</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Certified<br/>Agency</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
