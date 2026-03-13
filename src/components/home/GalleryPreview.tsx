"use client"

import React from 'react'
import Image from 'next/image'
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
    <section className="py-32 bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 text-center space-y-8 mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Visual Journey</span>
        <h2 className="text-[var(--text-lg)] font-black leading-tight">The Ghumo Gallery</h2>
      </div>

      <div className="flex gap-4 animate-scroll-x hover:pause">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="relative flex-shrink-0 w-80 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
             <Image src={img} fill className="object-cover" alt="Gallery preview" />
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href="/gallery">
          <Button variant="secondary" magnetic>Explore Full Gallery</Button>
        </Link>
      </div>
    </section>
  )
}
