'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Upload, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function BlogUploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    authorEmail: '',
    excerpt: '',
    content: '',
    category: 'Travel Tips',
    tags: '',
    image: '',
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        setFormData(prev => ({ ...prev, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Validation
      if (!formData.title || !formData.author || !formData.excerpt || !formData.content || !formData.image) {
        setError('Please fill in all required fields')
        return
      }

      if (formData.excerpt.length < 50) {
        setError('Excerpt must be at least 50 characters')
        return
      }

      if (formData.content.length < 200) {
        setError('Content must be at least 200 characters')
        return
      }

      // Create slug from title
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      const submitData = {
        ...formData,
        slug,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        published: false, // Admin approval needed
      }

      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || 'Failed to submit blog')
        return
      }

      setSubmitted(true)
      setFormData({
        title: '',
        author: '',
        authorEmail: '',
        excerpt: '',
        content: '',
        category: 'Travel Tips',
        tags: '',
        image: '',
      })
      setImagePreview(null)

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    'Travel Tips',
    'Destination Guide',
    'Travel Stories',
    'Budget Travel',
    'Solo Travel',
    'Family Travel',
    'Adventure',
    'Culture & History',
  ]

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-40 pb-32">
      {/* Header */}
      <section className="px-6 max-w-[1200px] mx-auto mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-earth)] hover:opacity-70 mb-8 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-6xl font-black tracking-tighter leading-tight">
            Share Your <span className="text-[var(--accent-earth)]">Travel Story</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl">
            Have travel insights, tips, or stories to share? Contribute to our blog community and inspire fellow travelers.
          </p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p>{error}</p>
                </motion.div>
              )}

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 text-green-700"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Blog submitted successfully!</p>
                    <p className="text-sm">It will be published after admin review.</p>
                  </div>
                </motion.div>
              )}

              {/* Title */}
              <div className="space-y-3">
                <label className="block text-sm font-bold">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors"
                  placeholder="10 Hidden Gems in Himachal Pradesh"
                />
                <p className="text-xs text-[var(--text-muted)]">{formData.title.length}/100</p>
              </div>

              {/* Image Upload */}
              <div className="space-y-3">
                <label className="block text-sm font-bold">Featured Image *</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[var(--accent-earth)] transition-colors cursor-pointer">
                    {imagePreview ? (
                      <div className="space-y-3">
                        <img src={imagePreview} alt="Preview" className="w-full max-h-64 object-cover rounded-lg" />
                        <p className="text-sm text-[var(--accent-earth)] font-bold">Click to change image</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Upload className="w-12 h-12 mx-auto text-gray-400" />
                        <div>
                          <p className="font-bold">Click to upload or drag and drop</p>
                          <p className="text-sm text-[var(--text-muted)]">PNG, JPG, GIF up to 5MB</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-bold">Author Name *</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-bold">Email (Optional)</label>
                  <input
                    type="email"
                    name="authorEmail"
                    value={formData.authorEmail}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Category & Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-bold">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-bold">Tags (Comma-separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors"
                    placeholder="travel, hiking, mountains"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-3">
                <label className="block text-sm font-bold">Excerpt (Short Summary) * <span className="text-xs text-[var(--text-muted)]">Min 50 chars</span></label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  maxLength={200}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors resize-none"
                  placeholder="A brief summary of your blog post..."
                />
                <p className="text-xs text-[var(--text-muted)]">{formData.excerpt.length}/200</p>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <label className="block text-sm font-bold">Content * <span className="text-xs text-[var(--text-muted)]">Min 200 chars</span></label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={10}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[var(--accent-earth)] focus:outline-none transition-colors resize-none font-mono text-sm"
                  placeholder="Write your blog content here. You can use markdown formatting..."
                />
                <p className="text-xs text-[var(--text-muted)]">{formData.content.length}/10000</p>
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1 !py-4 !rounded-xl"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Blog Post'}
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  className="flex-1 !py-4 !rounded-xl"
                  onClick={() => {
                    setFormData({
                      title: '',
                      author: '',
                      authorEmail: '',
                      excerpt: '',
                      content: '',
                      category: 'Travel Tips',
                      tags: '',
                      image: '',
                    })
                    setImagePreview(null)
                  }}
                >
                  Clear Form
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Guidelines */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-4">
              <h3 className="text-xl font-black">Guidelines</h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex gap-2">
                  <span className="text-[var(--accent-earth)] font-bold">✓</span>
                  <span>Be authentic and share real experiences</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent-earth)] font-bold">✓</span>
                  <span>Write engaging titles and clear content</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent-earth)] font-bold">✓</span>
                  <span>Use high-quality images (min 1000x600px)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent-earth)] font-bold">✓</span>
                  <span>Include helpful tips and actionable advice</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent-earth)] font-bold">✓</span>
                  <span>Avoid promotional content or spam</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-[var(--accent-earth)]/5 to-[var(--accent-teal)]/5 rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-black">Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-lg">🌍</span>
                  <span>Reach thousands of travelers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lg">✍️</span>
                  <span>Build your travel portfolio</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lg">💰</span>
                  <span>Potential monetization options</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lg">🔗</span>
                  <span>Backlinks to your website</span>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-sm text-blue-900">
              <p className="font-bold mb-2">📝 Pro Tip</p>
              <p>Your post will be reviewed by our editorial team before publishing. We typically review within 24 hours.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
