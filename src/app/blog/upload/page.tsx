"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Camera, Send, CheckCircle, Image as ImageIcon } from 'lucide-react'

export default function BlogUploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    location: '',
    content: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call for blog upload
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ title: '', author: '', location: '', content: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)] block">Share Your Story</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
            Write a <span className="text-[var(--accent-earth)]">Travel Blog</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Inspire others by sharing your unforgettable journey with Ghumo Holidays. We love featuring our travelers' experiences!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Title & Author */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                  placeholder="e.g. A Magical Weekend in Manali"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Your Name *</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Destinations Visited *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50"
                placeholder="e.g. Shimla, Kullu, Manali"
              />
            </div>

            {/* Image Upload Area (Visual only) */}
            <div>
              <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Cover Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[var(--accent-earth)] transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-8 h-8 text-[var(--accent-earth)]" />
                </div>
                <p className="font-bold text-[var(--text-primary)]">Click to upload an image</p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
              </div>
            </div>

            {/* Content Area */}
            <div>
              <label className="block text-sm font-bold mb-3 text-[var(--text-primary)]">Your Story *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={12}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors bg-gray-50 resize-y"
                placeholder="Tell us about the amazing places you saw, the food you ate, and the memories you made..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full !py-5 !rounded-xl flex items-center justify-center gap-3 text-lg"
                disabled={loading}
                magnetic
              >
                {loading ? 'Publishing...' : <>Submit for Review <Send className="w-5 h-5" /></>}
              </Button>
            </div>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700"
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-bold">Blog submitted successfully!</p>
                  <p className="text-sm">Our team will review it and publish it on the site soon. Thank you for sharing!</p>
                </div>
              </motion.div>
            )}

          </form>
        </div>
      </div>
    </div>
  )
}
