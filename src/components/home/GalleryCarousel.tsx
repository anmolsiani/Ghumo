"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Camera } from 'lucide-react'

interface GalleryCarouselProps {
  images: Array<{
    url: string
    caption?: string
    location?: string
    username?: string
  }>
}

const FALLBACK_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80', location: 'Himachal Pradesh', caption: 'Snow peaks at dawn', username: '@traveler' },
  { url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=800&q=80', location: 'Kerala', caption: 'Backwater bliss', username: '@explorer' },
  { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80', location: 'Rajasthan', caption: 'Desert at sunset', username: '@wanderer' },
  { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', location: 'Leh Ladakh', caption: 'Pangong Tso', username: '@adventurer' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', location: 'Kashmir', caption: 'Dal Lake mornings', username: '@nomad' },
  { url: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=800&q=80', location: 'Goa', caption: 'Golden shores', username: '@beachlover' },
  { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80', location: 'Coorg', caption: 'Coffee trails', username: '@naturist' },
  { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80', location: 'Uttarakhand', caption: 'Valley of flowers', username: '@hiker' },
]

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const displayImages = images.length > 0 ? images : FALLBACK_IMAGES
  const doubled = [...displayImages, ...displayImages]

  const track1 = useRef<HTMLDivElement>(null)
  const track2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tracks = [
      { el: track1.current, speed: 0.5, dir: 1 },
      { el: track2.current, speed: 0.4, dir: -1 },
    ]
    
    const positions = [0, 0]
    let animId: number

    const animate = () => {
      tracks.forEach((t, i) => {
        if (!t.el) return
        positions[i] += t.speed * t.dir
        const half = t.el.scrollWidth / 2
        if (positions[i] >= half) positions[i] = 0
        if (positions[i] < 0)     positions[i] = half - 1
        t.el.style.transform = `translateX(-${positions[i]}px)`
      })
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    const pause = () => cancelAnimationFrame(animId)
    const resume = () => { animId = requestAnimationFrame(animate) }

    const container = document.getElementById('gallery-carousel-root')
    container?.addEventListener('mouseenter', pause)
    container?.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animId)
      container?.removeEventListener('mouseenter', pause)
      container?.removeEventListener('mouseleave', resume)
    }
  }, [])

  const Card = ({ img, idx }: { img: typeof FALLBACK_IMAGES[0]; idx: number }) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.04, rotateY: -8, z: 60 }}
      className="flex-shrink-0 w-72 h-96 relative rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer preserve-3d border border-white/20"
    >
      <Image
        src={img.url}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        alt={img.caption || 'Gallery'}
        sizes="288px"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      {/* Camera icon top right */}
      <div className="absolute top-5 right-5 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Camera className="w-5 h-5 text-white" />
      </div>

      {/* Info bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {img.caption && (
          <h3 className="text-white font-black text-lg leading-tight line-clamp-1">{img.caption}</h3>
        )}
        {img.location && (
          <div className="flex items-center gap-1.5 text-white/70">
            <MapPin className="w-3.5 h-3.5" />
            <h4 className="text-xs font-bold">{img.location}</h4>
          </div>
        )}
        {img.username && (
          <h4 className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-earth)]/80">{img.username}</h4>
        )}
      </div>
    </motion.div>
  )

  return (
    <div id="gallery-carousel-root" className="space-y-6">
      {/* Row 1: left-to-right */}
      <div className="overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        <div ref={track1} className="flex gap-6 w-max will-change-transform">
          {doubled.map((img, idx) => (
            <Card key={idx} img={img as any} idx={idx} />
          ))}
        </div>
      </div>

      {/* Row 2: right-to-left (offset images) */}
      <div className="overflow-hidden">
        <div ref={track2} className="flex gap-6 w-max will-change-transform">
          {[...doubled].reverse().map((img, idx) => (
            <Card key={idx} img={img as any} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
