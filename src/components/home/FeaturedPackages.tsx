"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { packagesData } from '@/data/packages'

import { motion } from 'framer-motion'

export function FeaturedPackages() {
  const [packages, setPackages] = useState<any[]>([])

  useEffect(() => {
    // Filter out only featured packages and limit to exactly 3
    const featured = packagesData.filter(pkg => pkg.isFeatured).slice(0, 3)
    setPackages(featured)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-white perspective-container overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 preserve-3d">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16 preserve-3d">
          <div className="space-y-4">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Curated Selection</span>
             <h2 className="text-3xl sm:text-4xl lg:text-[var(--text-lg)] font-black leading-tight">Featured Packages</h2>
          </div>
          <Link href="/destinations" style={{ transform: 'translateZ(20px)' }} className="w-full sm:w-auto">
            <Button variant="secondary" magnetic className="w-full sm:w-auto">View All Packages</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 preserve-3d">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id} 
              whileHover={{ rotateX: 5, rotateY: -5, z: 40 }}
              className="preserve-3d will-change-transform"
            >
              <Link href={`/packages/${pkg.id}`} className="group cursor-pointer block preserve-3d">
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 shadow-2xl transition-shadow hover:shadow-shadow-xl preserve-3d border border-gray-100">
                  <Image 
                    src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80'} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={pkg.title}
                  />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 glass px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white" style={{ transform: 'translateZ(30px)' }}>
                    Trending
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3 px-2 md:px-4" style={{ transform: 'translateZ(20px)' }}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading font-black text-xl md:text-2xl leading-tight group-hover:text-[var(--accent-earth)] transition-colors">{pkg.title}</h3>
                  </div>
                  <h4 className="text-[10px] md:text-sm text-[var(--text-secondary)] flex items-center gap-2 font-medium">
                    <span>📍 {pkg.state.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>⏱️ {pkg.duration}</span>
                  </h4>
                  <div className="flex items-center gap-2 pt-1 md:pt-2" style={{ transform: 'translateZ(10px)' }}>
                    <h3 className="text-xl md:text-2xl font-black text-[var(--accent-teal)]">₹{pkg.price.toLocaleString()}/-</h3>
                    <h4 className="text-[9px] md:text-xs text-[var(--text-muted)] font-normal">per person</h4>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
