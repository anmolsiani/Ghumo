"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function GalleryPreview() {
  const images = [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  ]

  return (
    <section className="py-32 bg-[var(--bg-primary)] overflow-hidden perspective-container">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 text-center space-y-8 mb-16 preserve-3d">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Visual Journey</span>
        <h2 className="text-[var(--text-lg)] font-black leading-tight">The Ghumo Gallery</h2>
        <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">Experience India Through Our Lens</h3>
      </div>

      <div className="flex gap-8 animate-scroll-x hover:pause preserve-3d py-10">
        {[...images, ...images].map((img, i) => (
          <motion.div 
            key={i} 
            whileHover={{ 
              rotateX: 10, 
              rotateY: -10, 
              z: 50,
              scale: 1.05
            }}
            className="relative flex-shrink-0 w-80 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/20 preserve-3d cursor-pointer"
          >
             <Image src={img} fill className="object-cover" alt="Gallery preview" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center preserve-3d">
        <Link href="/gallery">
          <Button variant="secondary" magnetic as="div">Explore Full Gallery</Button>
        </Link>
      </div>
    </section>
  )
}
