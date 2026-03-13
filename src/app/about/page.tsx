'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-32 bg-[var(--bg-primary)] perspective-container">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 space-y-32 preserve-3d">
        
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center preserve-3d">
           <div className="space-y-8 order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">Our Legacy</span>
              <h1 className="text-[var(--text-xl)] font-black tracking-tighter leading-none">Crafting Memories <br/><span className="text-[var(--accent-earth)]">Since 2010.</span></h1>
              <h3 className="text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
                At Ghumo Holidays, we believe that travel is the only thing you buy that makes you richer. For over 15 years, we've been dedicated to uncovering the soul of India, providing travelers with more than just a destination, but a deeper connection to the culture, land, and spirit of Bharat.
              </h3>
              <h4 className="text-[var(--text-base)] text-[var(--text-secondary)] leading-relaxed font-normal">
                Starting as a small boutique agency in New Delhi, we've grown into one of India's premier travel connoisseurs, serving over 10,000 happy souls with hand-crafted, high-end itineraries.
              </h4>
           </div>
           <motion.div 
             whileHover={{ rotateX: -5, rotateY: 5, z: 50 }}
             className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl order-1 lg:order-2 preserve-3d border border-white/20"
           >
              <Image 
                src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80" 
                fill 
                className="object-cover" 
                alt="Taj Mahal Experience"
              />
           </motion.div>
        </section>

        {/* Mission Section */}
        <section className="glass p-20 rounded-[4rem] border-white/40 text-center space-y-8 relative overflow-hidden preserve-3d">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-earth)] to-transparent"></div>
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--text-muted)] italic">"Atithi Devo Bhava"</span>
           <h2 className="text-[var(--text-lg)] font-black max-w-3xl mx-auto leading-tight">Our mission is to treat every traveler as a guest of honor in our home, India.</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
              <div className="space-y-4" style={{ transform: 'translateZ(30px)' }}>
                 <div className="text-4xl">💎</div>
                 <h4 className="font-black text-xl">Pure Luxury</h4>
                 <h4 className="text-sm text-[var(--text-secondary)] font-normal">Only the finest properties and most exclusive experiences for our guests.</h4>
              </div>
              <div className="space-y-4" style={{ transform: 'translateZ(50px)' }}>
                 <div className="text-4xl">🌍</div>
                 <h4 className="font-black text-xl">Expert Curation</h4>
                 <h4 className="text-sm text-[var(--text-secondary)] font-normal">Local experts who know the hidden trails and the best-kept secrets.</h4>
              </div>
              <div className="space-y-4" style={{ transform: 'translateZ(30px)' }}>
                 <div className="text-4xl">🛡️</div>
                 <h4 className="font-black text-xl">Unmatched Safety</h4>
                 <h4 className="text-sm text-[var(--text-secondary)] font-normal">24/7 support and vetted partners to ensure your peace of mind.</h4>
              </div>
           </div>
        </section>

        {/* Team CTA */}
        <section className="text-center space-y-12 preserve-3d">
           <div className="flex flex-col items-center gap-6">
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <motion.div 
                     key={i} 
                     whileHover={{ z: 20, scale: 1.1 }}
                     className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-xl relative"
                   >
                      <Image src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&q=80&sig=${i}`} fill sizes="150px" className="object-cover" alt="Expert" />
                   </motion.div>
                 ))}
              </div>
              <h3 className="text-4xl font-black">Meet our travel connoisseurs.</h3>
              <h4 className="text-[var(--text-secondary)] max-w-lg mx-auto font-normal">
                Our team consists of passionate explorers who have traversed every corner of India to bring you the most authentic experiences.
              </h4>
           </div>
           <Link href="/contact">
             <Button variant="primary" magnetic withArrow as="div">Talk to an Expert</Button>
           </Link>
        </section>
      </div>
    </div>
  )
}
