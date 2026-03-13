import React from 'react'
import Image from 'next/image'
import { fetchStateImages } from '@/lib/unsplash'

export default async function GalleryPage() {
  // Fetch a broad set of images from some key states
  const himachal = await fetchStateImages('himachal', undefined, 10)
  const kashmir = await fetchStateImages('kashmir', undefined, 10)
  const kerala = await fetchStateImages('kerala', undefined, 10)
  const rajasthan = await fetchStateImages('rajasthan', undefined, 10)
  
  const allImages = [...himachal, ...kashmir, ...kerala, ...rajasthan].sort(() => Math.random() - 0.5)

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="text-center space-y-6 mb-24">
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">Visual Anthology</span>
           <h1 className="text-[var(--text-xl)] font-black tracking-tighter">The Ghumo Gallery</h1>
           <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
             A curated collection of moments from across the Indian subcontinent. Experience the magic of India through our lens.
           </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {allImages.map((img, i) => (
            <div key={i} className="relative break-inside-avoid rounded-3xl overflow-hidden shadow-lg group">
               <Image 
                 src={img.url} 
                 width={600} 
                 height={800} 
                 className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 alt={img.alt} 
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">{img.photographer}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
