"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from './Button'

export function NavBar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 h-24 flex items-center justify-between">
        <Link href="/" className="font-heading font-black text-2xl tracking-tighter text-[var(--accent-earth)]">
          GHUMO<span className="text-[var(--text-primary)]">HOLIDAYS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-[var(--accent-earth)] transition-colors text-sm uppercase tracking-widest font-bold">Home</Link>
          <Link href="/destinations" className="hover:text-[var(--accent-earth)] transition-colors text-sm uppercase tracking-widest font-bold">Destinations</Link>
          <Link href="/gallery" className="hover:text-[var(--accent-earth)] transition-colors text-sm uppercase tracking-widest font-bold">Gallery</Link>
          <Link href="/start-journey" className="hover:text-[var(--accent-earth)] transition-colors text-sm uppercase tracking-widest font-bold text-[var(--accent-teal)]">Start Journey</Link>
          <Link href="/blog/upload" className="hover:text-[var(--accent-earth)] transition-colors text-sm uppercase tracking-widest font-bold">Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="secondary" className="!px-6 !py-3 !rounded-full" as="div">Cart</Button>
          </Link>
          <Link href="/contact" className="hidden sm:block">
            <Button variant="primary" magnetic className="!px-6 !py-3 !rounded-full" as="div">Contact Us</Button>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
