'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, User, Camera } from 'lucide-react'
import { Skeleton } from '@/components/ui/Skeleton'

interface MasonryImageProps {
  img: {
    _id: string
    url: string
    caption: string
    location: string
    username: string
  }
  idx: number
}

function GalleryCard({ img, idx }: MasonryImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5, 
        z: 50,
        transition: { duration: 0.3 } 
      }}
      className="relative break-inside-avoid rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer preserve-3d border border-white/20 mb-8 bg-gray-100"
    >
       <div className="relative aspect-[4/5] sm:aspect-auto">
         {!loaded && <Skeleton className="absolute inset-0 w-full h-full rounded-[2.5rem]" />}
         <img
           src={img.url} 
           className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`} 
           alt={img.caption}
           loading="lazy"
           onLoad={() => setLoaded(true)}
         />
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-3" style={{ transform: 'translateZ(30px)' }}>
            <div className="flex items-center gap-2 text-[var(--accent-earth)]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">{img.location}</span>
            </div>
            <h4 className="text-white text-2xl font-black">{img.caption}</h4>
            <div className="flex items-center gap-2 text-white/60">
              <User className="w-4 h-4" />
              <span className="text-sm">Shared by {img.username}</span>
            </div>
          </div>
       </div>
    </motion.div>
  )
}

export function MasonryGallery({ images }: { images: any[] }) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 preserve-3d">
      {images.map((img, i) => (
        <GalleryCard key={img._id || i} img={img} idx={i} />
      ))}
    </div>
  )
}
