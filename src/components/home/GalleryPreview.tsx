"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

import { MIXED_GALLERY_IMAGES } from '@/data/destinationsData'

export function GalleryPreview() {
  const images = MIXED_GALLERY_IMAGES
  const row1 = images.slice(0, 10)
  const row2 = images.slice(10, 20)

  return (
    <section className="py-20 md:py-32 bg-[var(--bg-primary)] overflow-hidden perspective-container">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 text-center space-y-6 mb-12 md:mb-16 preserve-3d">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Visual Journey</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[var(--text-lg)] font-black leading-tight">The Ghumo Gallery</h2>
        <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">Experience India Through Our Lens</h3>
      </div>

      <div className="space-y-6 md:space-y-8 py-10">
        {/* Row 1 */}
        <div className="flex gap-4 md:gap-8 animate-scroll-x hover:pause preserve-3d will-change-transform">
          {[...row1, ...row1].map((img, i) => (
            <GalleryItem key={`r1-${i}`} img={img} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 md:gap-8 animate-scroll-x-reverse hover:pause preserve-3d will-change-transform">
          {[...row2, ...row2].map((img, i) => (
            <GalleryItem key={`r2-${i}`} img={img} />
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-20 text-center preserve-3d px-6">
        <Link href="/gallery" className="w-full sm:w-auto">
          <Button variant="secondary" magnetic className="w-full sm:w-auto" as="div">Explore Full Gallery</Button>
        </Link>
      </div>
    </section>
  )
}

function GalleryItem({ img }: { img: string }) {
  return (
    <motion.div 
      whileHover={{ 
        rotateX: 10, 
        rotateY: -10, 
        z: 50,
        scale: 1.05
      }}
      className="relative flex-shrink-0 w-64 md:w-80 aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 preserve-3d cursor-pointer translate-z-0 will-change-transform"
    >
       <Image src={img} fill className="object-cover" alt="Gallery preview" loading="lazy" />
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  )
}
