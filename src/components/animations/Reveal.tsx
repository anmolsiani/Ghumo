"use client"

import React, { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  distance?: number
  stagger?: number
}

export function Reveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8, 
  distance = 50,
  stagger = 0.1
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        staggerChildren: stagger,
        ease: "easeOut",
      }
    }
  }

  return (
    <div ref={ref} className="reveal-wrapper">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  )
}
