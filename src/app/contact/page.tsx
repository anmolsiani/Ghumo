'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Define animation variants outside component
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const FAQ_DATA = [
  { q: "How far in advance should I book?", a: "We recommend booking 6-8 weeks in advance for the best prices and availability." },
  { q: "What payment methods do you accept?", a: "We accept credit cards, debit cards, UPI, and bank transfers." },
  { q: "Can I customize my itinerary?", a: "Absolutely! All our packages can be customized to your preferences." },
  { q: "What's your cancellation policy?", a: "Varies by package. Contact us for specific details." },
]

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 99998 08162",
    subtext: "Available 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@ghumoholidays.com",
    subtext: "Reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "New Delhi, India",
    subtext: "Cyber City",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "9:00 AM - 9:00 PM",
    subtext: "Monday - Sunday",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    travelDates: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      router.refresh()
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', travelers: '1', travelDates: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-40 pb-32 perspective-container">
      {/* Hero */}
      <section className="px-6 max-w-[1400px] mx-auto mb-24 preserve-3d">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-16 preserve-3d"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">Get in Touch</span>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
            Let's Plan Your <br /> Next <span className="text-[var(--accent-earth)]">Adventure</span>
          </h1>
          <h3 className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-medium">
            Have questions? Need personalized recommendations? Our travel experts are here to help you curate the perfect itinerary.
          </h3>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 max-w-[1400px] mx-auto mb-24 preserve-3d">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 preserve-3d">
          
          {/* Contact Form */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 preserve-3d"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)] block mb-3">Contact Form</span>
              <h2 className="text-4xl font-black tracking-tighter mb-4">Send us a Message</h2>
              <h4 className="text-[var(--text-secondary)] font-normal">Fill out the form and we'll get back to you within 24 hours.</h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 preserve-3d">
              <div className="grid grid-cols-1 gap-6">
                <motion.div variants={item}>
                  <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                    placeholder="John Doe"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={item}>
                  <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                    placeholder="+91 99999 00000"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={item}>
                  <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Travelers *</label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, '6-10', '10+'].map(val => (
                      <option key={val} value={val}>{val} {val === 1 ? 'Traveler' : 'Travelers'}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Preferred Dates</label>
                  <input
                    type="text"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                    placeholder="Dec 2023 or 15-20 Jan"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <motion.div variants={item}>
                  <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                    placeholder="E.g. Package Inquiry, Custom Trip, etc."
                  />
                </motion.div>
              </div>

              <motion.div variants={item}>
                <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50 resize-none"
                  placeholder="Tell us about your dream trip..."
                />
              </motion.div>

              <motion.div variants={item} className="pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full !py-5 !rounded-xl flex items-center justify-center gap-3 text-lg"
                  disabled={loading}
                  magnetic
                >
                  {loading ? 'Sending...' : <>Send Message <Send className="w-5 h-5" /></>}
                </Button>
              </motion.div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-green-50 border border-green-200 rounded-xl flex items-center gap-4 text-green-700 mt-4"
                >
                  <CheckCircle className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Message sent successfully!</h4>
                    <h4 className="text-sm font-normal">Our team will be in touch with you shortly.</h4>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 preserve-3d"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)] block mb-3">Information</span>
              <h2 className="text-4xl font-black tracking-tighter mb-4">Contact Details</h2>
              <h4 className="text-[var(--text-secondary)] font-normal">Multiple ways to reach our world-class customer service team.</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 preserve-3d">
              {CONTACT_INFO.map((contact, idx) => {
                const Icon = contact.icon
                return (
                  <motion.div 
                    key={idx} 
                    variants={item} 
                    whileHover={{ rotateY: idx % 2 === 0 ? 10 : -10, z: 30 }}
                    className="bg-white rounded-2xl p-8 shadow-lg transition-all border border-gray-100 group preserve-3d"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent-earth)]/10 to-[var(--accent-teal)]/10 flex items-center justify-center text-[var(--accent-earth)] mb-6 group-hover:scale-110 transition-transform" style={{ transform: 'translateZ(20px)' }}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div style={{ transform: 'translateZ(10px)' }}>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">{contact.title}</h4>
                      <h4 className="text-lg font-black text-[var(--text-primary)] mb-1">{contact.content}</h4>
                      <h4 className="text-sm text-[var(--text-secondary)] font-normal">{contact.subtext}</h4>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* FAQ */}
            <motion.div variants={item} className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 mt-8 preserve-3d">
              <h3 className="font-black text-2xl mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[var(--accent-earth)] text-white flex items-center justify-center text-sm">FAQ</span>
                Frequent Questions
              </h3>
              <div className="space-y-6 preserve-3d">
                {FAQ_DATA.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0" style={{ transform: `translateZ(${idx * 5}px)` }}>
                    <h4 className="font-bold text-[var(--text-primary)] mb-2 text-lg">{faq.q}</h4>
                    <h4 className="text-[var(--text-secondary)] leading-relaxed font-normal">{faq.a}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
