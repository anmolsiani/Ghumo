"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-32 bg-white flex items-center justify-center perspective-container overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-20 text-center preserve-3d">
        <motion.div 
          whileHover={{ rotateX: 5, rotateY: -5, z: 50 }}
          className="glass p-20 rounded-[4rem] relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-[#8B7355]/10 to-[#2C5F5D]/10 preserve-3d"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-earth)]/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--accent-teal)]/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 space-y-8 preserve-3d">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">Adventure Awaits</span>
            <h2 className="text-[var(--text-lg)] font-black leading-tight max-w-2xl mx-auto">Ready to start your next great story?</h2>
            <h3 className="text-[var(--text-base)] text-[var(--text-secondary)] max-w-xl mx-auto font-medium" style={{ transform: 'translateZ(20px)' }}>
              Book a consultation with our travel experts today and let us craft a journey tailored specifically for you.
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4" style={{ transform: 'translateZ(40px)' }}>
              <Button variant="primary" magnetic withArrow className="!px-12">Plan My Trip</Button>
              <Link href="/contact">
                <Button variant="secondary" className="!px-12" as="div" magnetic>Contact Support</Button>
              </Link>
            </div>
            
            <div className="pt-12 border-t border-black/5 mt-12 flex flex-wrap justify-center gap-12 grayscale opacity-40" style={{ transform: 'translateZ(10px)' }}>
               {/* Trust Marks */}
               <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-black">24/7</h4>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Expert<br/>Support</h4>
               </div>
               <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-black">100%</h4>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Secure<br/>Payments</h4>
               </div>
               <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-black">ISO</h4>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-left leading-tight">Certified<br/>Agency</h4>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
