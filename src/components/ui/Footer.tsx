"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import emailjs from '@emailjs/browser'

export function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const params = {
      from_name:       formData.name,
      from_email:      formData.email,
      phone:           formData.phone,
      message:         formData.message || 'Legacy Footer Contact',
      submission_date: new Date().toLocaleString('en-IN'),
      reference_id:    'GH-' + Date.now().toString().slice(-8),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <footer className="relative bg-[#F8F9FA] pt-48 pb-12 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[25vw] font-black text-black/[0.02] leading-none tracking-tighter uppercase">
          GHUMO
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Floating Dark CTA Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative -mt-64 mb-32 bg-[#0A0C12] rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl"
        >
          {/* Mesh Gradient Background */}
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-[var(--accent-earth)]/20 to-transparent blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-full bg-gradient-to-tr from-[var(--accent-teal)]/10 to-transparent blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                The range of functionalities <br />
                offered on the platform <br />
                <span className="text-gray-400">includes the ability to connect</span>
              </h2>
              <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                With existing travel strategies that reduce risk and automatically curate the best soulful journeys for you.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                <Link href="/start-journey">
                  <Button variant="primary" className="!rounded-full !px-8 !py-4 h-auto shadow-lg shadow-[var(--accent-earth)]/20" as="div">
                    Get started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/gallery" className="flex items-center gap-2 text-white font-bold hover:text-[var(--accent-earth)] transition-colors">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">▶</div>
                  Watch how it works
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text" required placeholder="Name"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors text-sm"
                  />
                  <input
                    type="tel" required placeholder="Phone"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors text-sm"
                  />
                </div>
                <input
                  type="email" required placeholder="Email Address"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors text-sm"
                />
                <textarea
                  placeholder="Tell us about your next adventure..." rows={2}
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors resize-none text-sm"
                />
                <Button type="submit" variant="primary" className="w-full py-4 !rounded-xl" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="font-black text-2xl tracking-tighter uppercase">
              GHUMO<span className="text-[var(--accent-earth)]">.</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed max-w-[240px]">
              We curate experiences that stay with you long after you return home.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-black/40">Discover</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/destinations" className="hover:text-[var(--accent-earth)] transition-colors">Destinations</Link></li>
              <li><Link href="/packages" className="hover:text-[var(--accent-earth)] transition-colors">Curated Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--accent-earth)] transition-colors">Visual Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--accent-earth)] transition-colors">Travel Stories</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-black/40">Company</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/about" className="hover:text-[var(--accent-earth)] transition-colors">Visionaries</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--accent-earth)] transition-colors">Support Center</Link></li>
              <li><Link href="/privacy" className="hover:text-[var(--accent-earth)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--accent-earth)] transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-black/40">Social</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-[var(--accent-earth)] transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-[var(--accent-earth)] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[var(--accent-earth)] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[var(--accent-earth)] transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:row items-center justify-between gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-green-600">All systems operational</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
              © {new Date().getFullYear()} GHUMO. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-[10px] font-bold text-black/40 uppercase tracking-widest hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[10px] font-bold text-black/40 uppercase tracking-widest hover:text-black transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
