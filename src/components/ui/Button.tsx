"use client"

import React, { useRef, useState, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'glass'
  magnetic?: boolean
  withArrow?: boolean
  as?: any
}

export const Button = ({
  children,
  variant = 'primary',
  magnetic = false,
  withArrow = false,
  className = '',
  as: Component = 'button',
  ...props
}: ButtonProps) => {
  const buttonRef = useRef<any>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) * 0.3
    const y = (e.clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const variants = {
    primary: 'bg-[#8B7355] text-white hover:bg-[#2C5F5D] shadow-[0_4px_16px_rgba(139,115,85,0.3)] hover:shadow-[0_8px_24px_rgba(44,95,93,0.4)]',
    secondary: 'bg-transparent border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white',
    glass: 'glass text-white',
  }

  const MotionComponent = motion.create(Component as any)

  return (
    <MotionComponent
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-400 ease-smooth cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && <ArrowRight className="w-5 h-5" />}
    </MotionComponent>
  )
}
