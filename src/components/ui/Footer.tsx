"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-gray-200 pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        {/* Top Section with Animated Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Brand & Links */}
          <div className="space-y-12">
            <div>
              <Link href="/" className="font-heading font-black text-4xl tracking-tighter text-[var(--accent-earth)] mb-6 block">
                GHUMO<span className="text-[var(--text-primary)]">HOLIDAYS</span>
              </Link>
              <p className="text-[var(--text-secondary)] text-lg max-w-md">
                We don't just plan trips — we create experiences that stay with you long after you return home. India's premier travel curators.
              </p>
            </div>

            <div className="flex flex-wrap gap-12">
              <div>
                <h4 className="font-heading font-black text-xl mb-6">Explore</h4>
                <ul className="space-y-3 text-[var(--text-secondary)] font-medium">
                  <li><Link href="/destinations" className="hover:text-[var(--accent-earth)] transition-colors">Destinations</Link></li>
                  <li><Link href="/gallery" className="hover:text-[var(--accent-earth)] transition-colors">Gallery</Link></li>
                  <li><Link href="/start-journey" className="hover:text-[var(--accent-earth)] transition-colors">Start a Journey</Link></li>
                  <li><Link href="/blog/upload" className="hover:text-[var(--accent-earth)] transition-colors flex items-center gap-2">Write a Blog <span className="px-2 py-0.5 bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] rounded text-[10px] uppercase font-bold">New</span></Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-black text-xl mb-6">Contact</h4>
                <ul className="space-y-4 text-[var(--text-secondary)]">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-earth)]/10 flex items-center justify-center text-[var(--accent-earth)]"><Phone className="w-4 h-4" /></div>
                    <span className="font-medium">+91 99998 08162</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-earth)]/10 flex items-center justify-center text-[var(--accent-earth)]"><Mail className="w-4 h-4" /></div>
                    <span className="font-medium">hello@ghumoholidays.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-earth)]/10 flex items-center justify-center text-[var(--accent-earth)]"><MapPin className="w-4 h-4" /></div>
                    <span className="font-medium">Cyber City, New Delhi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Animated Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-earth)]/20 to-[var(--accent-teal)]/20 rounded-[3rem] blur-2xl -z-10 transform -rotate-3"></div>
            <motion.div 
              className="bg-white rounded-[2.5rem] p-10 shadow-xl relative border border-gray-100"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[var(--accent-teal)] rounded-full flex items-center justify-center text-white shadow-lg transform rotate-12">
                <span className="text-2xl font-black">👋</span>
              </div>
              
              <h3 className="font-black text-3xl mb-2">Get in Touch</h3>
              <p className="text-[var(--text-secondary)] mb-8">We'd love to hear from you. Drop us a line!</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none bg-gray-50 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none bg-gray-50 transition-colors"
                  />
                </div>
                <textarea
                  required
                  placeholder="How can we help you plan your trip?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none bg-gray-50 transition-colors resize-none"
                />
                
                {submitted ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    className="w-full p-3 bg-green-50 text-green-600 rounded-xl flex items-center justify-center gap-2 font-bold border border-green-200"
                  >
                    <CheckCircle className="w-5 h-5" /> Message Sent!
                  </motion.div>
                ) : (
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full py-4 flex items-center justify-center gap-2 rounded-xl group"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : (
                      <>
                        Send Message 
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                          <Send className="w-4 h-4" />
                        </motion.span>
                      </>
                    )}
                  </Button>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[var(--text-muted)] text-sm font-medium">
            © {new Date().getFullYear()} Ghumo Holidays. All rights reserved.
          </p>
          
          <div className="flex gap-3">
            <a href="https://wa.me/919999808162" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            
            {/* Social Links */}
            {[
              { name: 'Instagram', icon: '📱' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'YouTube', icon: '▶️' }
            ].map((social) => (
              <a key={social.name} href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--accent-earth)] hover:text-white transition-colors">
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
