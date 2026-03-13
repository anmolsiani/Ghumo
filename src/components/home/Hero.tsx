"use client"

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Multi-speed parallax using GSAP for smoother results than raw scroll events
      const parallaxElements = containerRef.current?.querySelectorAll('[data-speed]')
      
      parallaxElements?.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '1')
        gsap.to(el, {
          y: () => -(ScrollTrigger.maxScroll(window) * (speed - 1) * 0.1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        })
      })

      // Animation for hero image (Reference Image 1 style)
      gsap.fromTo(imageRef.current, 
        { scale: 0.8, opacity: 0, y: 100 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "expo.out", delay: 0.5 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-[#F0F0F0] flex items-center justify-center pt-24 perspective-container">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/10 w-64 h-64 bg-[#8B7355]/5 rounded-full blur-3xl" data-speed="0.3"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#2C5F5D]/5 rounded-full blur-3xl" data-speed="0.6"></div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-center z-10 preserve-3d">
        
        {/* Left: Headline Content */}
        <Reveal direction="left" delay={0.2}>
          <div className="hero-text space-y-8" data-speed="1.2">
            <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-md border border-white/30 rounded-full shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-earth)]">Premium Travel 2026</span>
            </div>

            <h1 className="text-[var(--text-hero)] leading-[1.05] font-black tracking-tight" style={{ fontFamily: 'var(--font-oxanium)' }}>
              SUPER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-earth)] to-[var(--accent-teal)]">PREMIUM</span><br />
              TRAVEL <span className="italic font-light">EXPERIENCES</span>
            </h1>
            
            <h3 className="text-[var(--text-base)] text-[var(--text-secondary)] max-w-lg leading-relaxed font-medium">
              We don't just plan trips — we curate soulful odysseys that transcend the ordinary. Every journey is a masterpiece of discovery across 8 states and 43 exclusive packages.
            </h3>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/start-journey">
                <Button variant="primary" magnetic withArrow as="div">Start Your Journey</Button>
              </Link>
              <Link href="/packages">
                <Button variant="secondary" as="div">View Catalog</Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-12">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image src={`https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80&sig=${i}`} fill sizes="100px" className="object-cover" alt="User" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[#FAFAFA] flex items-center justify-center text-[var(--text-muted)] text-sm font-bold">
                  +
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold">10k+ Positive Reviews</h4>
                <div className="flex text-[#D4AF37]">
                  {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        
        {/* Right: Product Showcase (Reference Image 1 style) */}
        <Reveal direction="right" delay={0.5}>
          <div ref={imageRef} className="relative aspect-square lg:aspect-[4/3] w-full preserve-3d" data-speed="1.5">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent rounded-[2rem] -z-10 transform rotate-3"></div>
            
            {/* Main Hero Image */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-x-12 hover:rotate-y-12">
              <Image 
                  src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80" 
                  fill
                  className="object-cover"
                  alt="Premium Travel Destination"
                  priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Glassmorphic Info Cards (Reference Image 2 style) */}
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl flex items-center gap-4 animate-float" style={{ transform: 'translateZ(var(--z-depth-lg))' }}>
              <div className="w-12 h-12 rounded-full bg-[var(--accent-earth)] flex items-center justify-center text-xl">🏔️</div>
              <div>
                <h4 className="font-bold text-sm">8 States</h4>
                <p className="text-xs text-[var(--text-secondary)]">43 Curated Packages</p>
              </div>
            </div>

            <div className="absolute top-10 -right-8 glass p-6 rounded-2xl flex flex-col gap-2 shadow-xl" style={{ transform: 'translateZ(var(--z-depth-md))' }}>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Current Trend</h4>
              <h4 className="font-black text-xl text-[var(--accent-teal)]">Manali Magic</h4>
              <div className="flex justify-between items-center gap-8">
                <span className="text-sm font-medium">Starting from</span>
                <span className="font-black text-lg">₹5,999/-</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</h4>
        <div className="w-[1px] h-16 bg-gradient-to-b from-black to-transparent"></div>
      </div>
    </section>
  )
}
