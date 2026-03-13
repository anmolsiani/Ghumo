"use client"

import React, { useRef, useEffect, useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const DESTINATIONS = [
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', packages: 8, price: 5999, icon: '🏔️', tag: 'Snow Peaks', query: 'manali mountains' },
  { id: 'goa', name: 'Goa', packages: 5, price: 5999, icon: '🏖️', tag: 'Beach Paradise', query: 'goa beach' },
  { id: 'leh-ladakh', name: 'Leh Ladakh', packages: 3, price: 24999, icon: '🏜️', tag: 'Desert Mountains', query: 'ladakh' },
  { id: 'darjeeling-sikkim', name: 'Darjeeling & Sikkim', packages: 3, price: 22999, icon: '🍵', tag: 'Tea Gardens', query: 'darjeeling' },
  { id: 'uttarakhand', name: 'Uttarakhand', packages: 9, price: 9999, icon: '🕉️', tag: 'Spiritual Trails', query: 'rishikesh' },
  { id: 'kerala', name: 'Kerala', packages: 6, price: 7500, icon: '🚤', tag: 'Backwaters', query: 'kerala' },
  { id: 'rajasthan', name: 'Rajasthan', packages: 6, price: 7500, icon: '🏰', tag: 'Royal Heritage', query: 'rajasthan fort' },
  { id: 'kashmir', name: 'Kashmir', packages: 3, price: 14999, icon: '🏔️', tag: 'Paradise on Earth', query: 'kashmir lake' }
];

export function DestinationsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(1)

  useLayoutEffect(() => {
    if (!trackRef.current) return

    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      // Horizontal scroll animation
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 160),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            setProgress(self.progress * 100)
            
            // Logic for current card index
            const index = Math.round(self.progress * (DESTINATIONS.length - 1)) + 1
            setCurrentIndex(index)
          }
        }
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="destinations-section relative bg-[var(--bg-secondary)] overflow-hidden py-32 min-h-screen flex flex-col justify-center perspective-container">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 mb-16 preserve-3d">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Explore Destinations</span>
             <h2 className="text-[var(--text-lg)] font-black leading-tight max-w-xl">Where would you like to go?</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24" style={{ transform: 'translateZ(30px)' }}>
               <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-gray-200" 
                  />
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="var(--accent-earth)" 
                    strokeWidth="4" 
                    strokeDasharray="283" 
                    strokeDashoffset={283 - (283 * progress) / 100}
                    className="transition-all duration-300"
                  />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center font-heading font-black text-xl">
                 {currentIndex.toString().padStart(2, '0')}
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-container relative overflow-visible preserve-3d">
        <div ref={trackRef} className="carousel-track flex gap-8 px-6 lg:px-20 pb-20 preserve-3d">
          {DESTINATIONS.map((state) => (
            <motion.article 
              key={state.id} 
              whileHover={{ rotateY: 10, z: 50, scale: 1.02 }}
              className="state-card flex-shrink-0 w-[450px] group preserve-3d"
            >
              <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl glass border-white/40 preserve-3d">
                {/* Background Image */}
                <div className="absolute inset-0 preserve-3d">
                   <Image 
                     src={`https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80&sig=${state.id}`} 
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                     alt={state.name}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                </div>

                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full flex items-center gap-2" style={{ transform: 'translateZ(40px)' }}>
                   <span>{state.icon}</span>
                   <h4 className="text-xs font-bold text-white tracking-widest uppercase">{state.tag}</h4>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-10 text-white space-y-4 preserve-3d">
                  <div className="flex justify-between items-end border-b border-white/20 pb-6 mb-6" style={{ transform: 'translateZ(30px)' }}>
                    <div>
                      <h4 className="text-xs font-medium opacity-60 uppercase tracking-widest block mb-2">{state.packages} Packages</h4>
                      <h3 className="text-3xl font-black font-heading">{state.name}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between" style={{ transform: 'translateZ(50px)' }}>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest opacity-60 mb-1 font-normal">Starting from</h4>
                      <h3 className="text-2xl font-black">₹{state.price.toLocaleString()}/-</h3>
                    </div>
                    <Link href={`/destinations/${state.id}`}>
                      <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-[var(--accent-earth)] hover:text-white transition-colors cursor-pointer shadow-xl">
                        <ArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
