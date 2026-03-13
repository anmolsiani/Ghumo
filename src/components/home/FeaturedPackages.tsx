"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { packagesData } from '@/data/packages'

export function FeaturedPackages() {
  const [packages, setPackages] = useState<any[]>([])

  useEffect(() => {
    // Filter out only featured packages and limit to exactly 3
    const featured = packagesData.filter(pkg => pkg.isFeatured).slice(0, 3)
    setPackages(featured)
  }, [])

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Curated Selection</span>
             <h2 className="text-[var(--text-lg)] font-black leading-tight">Featured Packages</h2>
          </div>
          <Link href="/destinations">
            <Button variant="secondary">View All Packages</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Link href={`/packages/${pkg.id}`} key={pkg.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-md transition-shadow hover:shadow-xl">
                <Image 
                  src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80'} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={pkg.title}
                />
                <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                  Trending
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading font-bold text-xl leading-tight group-hover:text-[var(--accent-earth)] transition-colors">{pkg.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                  <span>📍 {pkg.state.replace('-', ' ')}</span>
                  <span>•</span>
                  <span>⏱️ {pkg.duration}</span>
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-lg font-black text-[var(--accent-teal)]">₹{pkg.price.toLocaleString()}/-</span>
                  <span className="text-xs text-[var(--text-muted)]">per person</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
