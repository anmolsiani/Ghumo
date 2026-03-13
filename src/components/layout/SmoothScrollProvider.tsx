"use client"

import { ReactNode, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    let rfId: number

    function raf(time: number) {
      lenis.raf(time)
      rfId = requestAnimationFrame(raf)
    }

    rfId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rfId)
    }
  }, [mounted])

  return (
    <div className="smooth-scroll-wrapper">
      {children}
    </div>
  )
}
