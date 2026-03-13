'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, ArrowLeft, CheckCircle, AlertCircle, Sparkles, Send, ShieldCheck, Mail, User, Type, AlignLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function BlogSubmitPage() {
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
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size too large (max 5MB)')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        setFormData(prev => ({ ...prev, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!formData.title || !formData.author || !formData.excerpt || !formData.content || !formData.image) {
        setError('Please fill in all required fields')
        setLoading(false)
        return
      }

      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      const submitData = {
        ...formData,
        slug,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
        published: false,
      }

      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || 'Failed to submit blog')
        setLoading(false)
        return
      }

      router.refresh()
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
      }, 8000)
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    'Travel Tips', 'Destination Guide', 'Travel Stories', 
    'Budget Travel', 'Solo Travel', 'Family Travel', 
    'Adventure', 'Culture & History'
  ]

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-6">
            <Link href="/blog" className="inline-flex items-center gap-3 text-sm font-black text-[var(--accent-earth)] hover:opacity-70 transition-all group">
              <div className="w-8 h-8 rounded-full bg-[var(--accent-earth)]/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </div>
              BACK TO JOURNAL
            </Link>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Share Your <br /><span className="text-[var(--accent-earth)]">Masterpiece.</span>
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
             <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
             </div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] leading-none mb-1">Editor Verified</p>
                <p className="text-sm font-black">Secure Submission</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-16 items-start">
          
          {/* Main Submission Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-earth)]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              
              {/* Form Status Messages */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-4 text-red-700"
                  >
                    <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div className="font-bold">{error}</div>
                  </motion.div>
                )}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-green-50 border border-green-200 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 text-green-700"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                       <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xl font-black mb-1">Story Received!</p>
                      <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Our editorial team will review and publish your masterpiece within 24-48 hours.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Title Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-[var(--accent-earth)]" />
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">CATCHY TITLE</label>
                </div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full text-4xl font-black bg-transparent border-b-2 border-black/5 focus:border-[var(--accent-earth)] outline-none pb-4 transition-colors placeholder:text-black/5"
                  placeholder="The Story Title..."
                />
              </div>

              {/* Cover Image Upload */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-[var(--accent-earth)]" />
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">COVER VISUAL</label>
                </div>
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div className={`
                    relative rounded-[2rem] overflow-hidden min-h-[300px] flex items-center justify-center border-2 border-dashed transition-all duration-500
                    ${imagePreview ? 'border-transparent' : 'border-gray-200 hover:border-[var(--accent-earth)] group-hover:bg-gray-50'}
                  `}>
                    {imagePreview ? (
                      <>
                        <img src={imagePreview} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm px-4">
                           <span className="px-6 py-3 bg-white rounded-xl text-xs font-black uppercase tracking-widest text-black shadow-xl">Change Image</span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center space-y-4 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto text-[var(--accent-earth)]">
                           <Sparkles className="w-10 h-10" />
                        </div>
                        <p className="text-lg font-black tracking-tight">Drop your masterpiece here</p>
                        <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Recommended: 1600x900px, Under 5MB</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Author & Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-[var(--accent-earth)]" />
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">AUTHOR NAME</label>
                  </div>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full py-4 bg-gray-50/50 border-b-2 border-transparent focus:border-[var(--accent-earth)] outline-none transition-all px-4 rounded-t-xl font-bold"
                    placeholder="Who wrote this?"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--accent-earth)]" />
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">EMAIL ADDRESS</label>
                  </div>
                  <input
                    type="email"
                    name="authorEmail"
                    value={formData.authorEmail}
                    onChange={handleChange}
                    className="w-full py-4 bg-gray-50/50 border-b-2 border-transparent focus:border-[var(--accent-earth)] outline-none transition-all px-4 rounded-t-xl font-bold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Category & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[var(--accent-earth)]" />
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">CATEGORY</label>
                  </div>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full py-4 bg-gray-50/50 border-b-2 border-transparent focus:border-[var(--accent-earth)] outline-none transition-all px-4 rounded-t-xl font-bold appearance-none cursor-pointer"
                  >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[var(--accent-earth)]" />
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">TAGS</label>
                  </div>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full py-4 bg-gray-50/50 border-b-2 border-transparent focus:border-[var(--accent-earth)] outline-none transition-all px-4 rounded-t-xl font-bold"
                    placeholder="Adventure, Mountains, Solo..."
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlignLeft className="w-5 h-5 text-[var(--accent-earth)]" />
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">SHORT SYNOPSIS</label>
                </div>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={2}
                  className="w-full py-4 bg-gray-50/50 border-b-2 border-transparent focus:border-[var(--accent-earth)] outline-none transition-all px-4 rounded-t-xl font-medium text-lg leading-relaxed resize-none"
                  placeholder="Sum up your adventure in one or two compelling sentences..."
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[var(--accent-earth)]" />
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">FULL STORY <span className="text-red-400">*</span></label>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                    {formData.content.length} chars
                  </span>
                </div>
                <div className="relative bg-white rounded-[2.5rem] border-2 border-gray-100 focus-within:border-[var(--accent-earth)] transition-all shadow-sm overflow-hidden">
                  {/* Writing area header */}
                  <div className="flex items-center gap-2 px-8 pt-6 pb-4 border-b border-gray-100">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-gray-300">Full Story Editor</span>
                  </div>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={14}
                    className="w-full bg-transparent outline-none font-serif text-xl leading-[1.8] transition-all min-h-[380px] px-10 py-8 resize-none placeholder:text-gray-300"
                    placeholder="Once upon a time in a faraway land, I found myself standing at the edge of something extraordinary..."
                  />
                  {/* Bottom word count bar */}
                  <div className="px-10 pb-5 flex items-center justify-between border-t border-gray-50">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                      {formData.content.trim().split(/\s+/).filter(Boolean).length} words
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${formData.content.trim().split(/\s+/).filter(Boolean).length >= 300 ? 'text-green-500' : 'text-[var(--accent-earth)]'}`}>
                      {formData.content.trim().split(/\s+/).filter(Boolean).length >= 300 ? '✓ Minimum Met' : 'Aim for 300+ words'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submission Button */}
              <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-xs font-bold text-[var(--text-muted)] max-w-sm">
                  By clicking "Publish Masterpiece", you agree to our content guidelines and allow Ghumo Holidays to feature your story.
                </p>
                <div className="flex gap-4 w-full md:w-auto">
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex-1 md:w-80 !py-6 !rounded-2xl text-lg font-black flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(139,115,85,0.3)] transition-transform active:scale-95"
                      disabled={loading}
                    >
                      {loading ? 'Transmitting Story...' : <>Publish Masterpiece <Send className="w-5 h-5" /></>}
                    </Button>
                </div>
              </div>

            </form>
          </motion.div>

          {/* Sidebar Guidelines */}
          <aside className="space-y-8">
             <div className="bg-black text-white rounded-[3rem] p-12 space-y-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                   <h3 className="text-3xl font-black tracking-tight mb-8">Writer's <br />Guidelines</h3>
                   <ul className="space-y-6">
                      {[
                        { icon: Sparkles, text: "Be authentic. Share real emotions and experiences." },
                        { icon: ShieldCheck, text: "Respect privacy. Gain permission for all photos." },
                        { icon: AlignLeft, text: "Minimum 300 words for the full story." },
                        { icon: Type, text: "Use clear, engaging subheadings." },
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 group/item">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--accent-earth)] group-hover/item:scale-110 transition-transform">
                             <item.icon className="w-5 h-5" />
                          </div>
                          <p className="text-sm font-bold text-white/70 leading-snug pt-1">{item.text}</p>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Editor's Note</p>
                   <p className="text-sm font-medium italic">"The best travel stories are not about where you went, but how you changed."</p>
                </div>
             </div>

             <div className="glass p-12 rounded-[3rem] border-white/40 text-center space-y-6">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent-earth)] to-[var(--accent-teal)] flex items-center justify-center text-white mx-auto text-3xl font-black">
                    $
                 </div>
                 <h4 className="text-2xl font-black">Get Rewarded</h4>
                 <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                   Top-performing stories earn premium Ghumo Rewards points that can be redeemed for your next adventure.
                 </p>
             </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
