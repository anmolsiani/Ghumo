"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Clock } from 'lucide-react'
import { packagesData } from '@/data/packages'
import { motion } from 'framer-motion'

export function PackagesScrollStrip() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animId: number
    let pos = 0
    const speed = 0.6

    const animate = () => {
      pos += speed
      if (pos >= track.scrollWidth / 2) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    // Pause on hover
    const pause = () => cancelAnimationFrame(animId)
    const resume = () => { animId = requestAnimationFrame(animate) }
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animId)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  const featured = packagesData.filter(p => p.isFeatured)
  const doubled = [...featured, ...featured]

  return (
    <section className="py-24 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 mb-14">
        <div className="flex items-end justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">
              Curated Escapes
            </span>
            <h2 className="text-[var(--text-lg)] font-black leading-tight">
              Packages Crafted<br className="hidden sm:block" /> for Every Soul
            </h2>
          </div>
          <Link
            href="/destinations"
            className="hidden md:flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--accent-earth)] hover:gap-4 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Scrolling track */}
      <div className="relative select-none overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="flex gap-6 will-change-transform w-max pb-4 pt-2 px-6">
          {doubled.map((pkg, i) => (
            <Link href={`/packages/${pkg.id}`} key={`${pkg.id}-${i}`}>
              <motion.div
                whileHover={{ y: -8, rotateX: 5, z: 40 }}
                className="relative flex-shrink-0 w-80 rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer border border-white/30 bg-white preserve-3d"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={pkg.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Trending badge */}
                  <div className="absolute top-5 left-5 glass px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                    Trending
                  </div>

                  {/* Price overlay */}
                  <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md rounded-xl px-4 py-2">
                    <h4 className="text-white font-black text-lg">₹{pkg.price.toLocaleString()}/-</h4>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <div>
                    <h3 className="font-black text-xl leading-tight group-hover:text-[var(--accent-earth)] transition-colors line-clamp-1">
                      {pkg.title}
                    </h3>
                    <h4 className="text-sm text-[var(--text-secondary)] font-medium mt-1">
                      📍 {pkg.state.replace('-', ' ')}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                      <Clock className="w-4 h-4" />
                      <h4 className="text-xs font-bold">{pkg.duration}</h4>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <h4 className="text-xs font-black">4.9</h4>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[var(--accent-earth)] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 md:hidden">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--accent-earth)]"
        >
          View All Packages <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
