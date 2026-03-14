"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import { Menu, X, ShoppingCart } from 'lucide-react'

export function NavBar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isOpen) {
      if (hidden) setHidden(false);
      return
    }
    const previous = scrollY.getPrevious() || 0;
    const diff = latest - previous;
    
    // Only update if difference is significant or crossing a threshold
    if (Math.abs(diff) > 5) {
      const shouldHide = latest > previous && latest > 200;
      if (shouldHide !== hidden) setHidden(shouldHide);
    }
    
    const isScrolled = latest > 50;
    if (isScrolled !== scrolled) setScrolled(isScrolled);
  })

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Start Journey', href: '/start-journey', highlight: true },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[130] transition-colors duration-300 ${scrolled || isOpen ? 'glass border-b border-black/5' : 'bg-transparent'}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 h-16 md:h-24 flex items-center gap-2">
          
          {/* Mobile Menu Toggle - Left Side */}
          <div className="lg:hidden flex-none">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-gray-100/50 hover:bg-gray-100 transition-colors text-[var(--text-primary)]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo - Centered on mobile, Left on desktop */}
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start lg:mr-auto overflow-hidden">
            <Link 
              href="/" 
              className="font-heading font-black text-base sx:text-lg sm:text-xl md:text-2xl tracking-tighter text-[var(--accent-earth)] whitespace-nowrap" 
              onClick={() => setIsOpen(false)}
            >
              GHUMO<span className="text-[var(--text-primary)]">HOLIDAYS</span>
            </Link>
          </div>

          {/* Desktop Nav - Pushed to right via flex-none lg:mr-auto above */}
          <nav className="hidden lg:flex items-center gap-8 font-medium mx-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`hover:text-[var(--accent-earth)] transition-colors text-xs uppercase tracking-widest font-bold ${link.highlight ? 'text-[var(--accent-teal)]' : 'text-[var(--text-primary)]'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart & Global CTA */}
          <div className="flex-none lg:flex-none flex items-center justify-end gap-2 md:gap-4">
            <Link href="/cart" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="!px-3 sm:!px-4 md:!px-6 !py-2 md:!py-3 !rounded-full !text-xs md:!text-sm flex items-center gap-2" as="div">
                <ShoppingCart className="w-4 h-4 text-[var(--text-primary)]" />
                <span className="hidden sm:inline">Cart</span>
              </Button>
            </Link>
            
            <Link href="/contact" className="hidden lg:block">
              <Button variant="primary" magnetic className="!px-6 !py-3 !rounded-full !text-sm" as="div">Contact Us</Button>
            </Link>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110] lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[280px] sm:w-[300px] z-[120] p-8 lg:hidden glass border-r border-black/5 flex flex-col pt-24 overflow-y-auto"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-black tracking-tighter hover:text-[var(--accent-earth)] transition-colors block ${link.highlight ? 'text-[var(--accent-teal)]' : 'text-[var(--text-primary)]'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-10 mt-4 border-t border-black/5"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="primary" className="w-full !py-4 !rounded-2xl !text-base" as="div">
                      Talk to an Expert
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
