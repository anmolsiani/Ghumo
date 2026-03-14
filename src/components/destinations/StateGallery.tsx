'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/Skeleton'

interface StateGalleryProps {
  images: string[]
  stateTitle: string
}

export function StateGallery({ images, stateTitle }: StateGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <GalleryImage key={i} src={img} alt={`${stateTitle} view ${i + 1}`} />
      ))}
    </div>
  )
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group bg-gray-100">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full rounded-[2.5rem]" />}
      <Image 
        src={src} 
        fill 
        className={`object-cover transition-all duration-1000 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`} 
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}
