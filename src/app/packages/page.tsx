"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { packagesData } from '@/data/packages'
import { Button } from '@/components/ui/Button'
import { MapPin, Clock, Star, Zap } from 'lucide-react'

export default function PackagesPage() {
  const [filter, setFilter] = useState('All')
  const states = ['All', ...new Set(packagesData.map(p => p.state))]

  const filteredPackages = filter === 'All' 
    ? packagesData 
    : packagesData.filter(p => p.state === filter)

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">Our Collection</span>
            <h1 className="text-6xl font-black tracking-tighter leading-tight">
              Premium <br /> <span className="text-[var(--accent-earth)]">Packages</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {states.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === s 
                    ? 'bg-[var(--accent-earth)] text-white shadow-lg' 
                    : 'bg-white text-[var(--text-muted)] hover:bg-gray-50'
                }`}
              >
                {s.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="relative h-72">
                <Image 
                  src={pkg.images[0]} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={pkg.title} 
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--accent-earth)]">
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-10 space-y-6">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--accent-earth)]" />
                  <span className="text-xs font-bold uppercase tracking-widest">{pkg.state.replace('-', ' ')}</span>
                </div>
                
                <h3 className="text-2xl font-black tracking-tight group-hover:text-[var(--accent-earth)] transition-colors line-clamp-2">
                  {pkg.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest block mb-1">Starting from</span>
                    <span className="text-2xl font-black text-[var(--accent-teal)]">₹{pkg.price.toLocaleString()}/-</span>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button variant="secondary" magnetic className="!px-6 !py-3 !rounded-xl" as="div">Details</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
