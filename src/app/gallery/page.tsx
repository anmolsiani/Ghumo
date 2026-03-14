'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, X, MapPin, User, Camera, Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GalleryCarousel } from '@/components/home/GalleryCarousel'
import { MIXED_GALLERY_IMAGES } from '@/data/destinationsData'
import { MasonryGallery } from '@/components/gallery/MasonryGallery'

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([])
  
  // Mixed images formatted for display
  const curatedImages = MIXED_GALLERY_IMAGES.map((url, i) => ({
    _id: `mixed-${i}`,
    url,
    caption: 'Discover India',
    location: 'Iconic Destination',
    username: 'Ghumo Holidays'
  }))
  const [showUpload, setShowUpload] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    url: '',
    caption: '',
    location: '',
    username: ''
  })

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/gallery')
      const data = await res.json()
      setImages(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setShowUpload(false)
        setFormData({ url: '', caption: '', location: '', username: '' })
        fetchImages()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  const allImages = [...curatedImages, ...images]

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-32 perspective-container">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 preserve-3d">
        <div className="text-center space-y-6 mb-24">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]"
           >
             Visual Anthology
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-[var(--text-xl)] font-black tracking-tighter"
           >
             The Ghumo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-earth)] to-[var(--accent-teal)]">Gallery</span>
           </motion.h1>
           <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-[var(--text-secondary)] max-w-2xl mx-auto font-medium"
           >
             A curated odyssey of moments captured across the subcontinent. From the misty peaks of the North to the serene backwaters of the South.
           </motion.h3>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
             className="pt-8"
           >
             <Button 
               variant="primary" 
               className="!rounded-full px-8 py-4 shadow-xl shadow-[var(--accent-earth)]/20"
               onClick={() => setShowUpload(true)}
               magnetic
             >
               <Plus className="w-5 h-5 mr-2" /> Share Your Moment
             </Button>
           </motion.div>
         </div>
      </div>

      {/* ── Infinite Scroll Carousel ── */}
      <div className="py-6 overflow-hidden">
        <GalleryCarousel images={allImages} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 preserve-3d">
        {/* Section divider */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-black shrink-0 tracking-tighter">OUR JOURNEY</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        <MasonryGallery images={allImages} />
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUpload && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUpload(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30, rotateX: -10 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden preserve-3d"
            >
              <div className="p-12 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[var(--accent-earth)]">
                      <Camera className="w-6 h-6" />
                      <span className="text-xs font-bold uppercase tracking-widest">Contribute</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight">Share Your <br/>Perspective</h2>
                  </div>
                  <button 
                    onClick={() => setShowUpload(false)}
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleUpload} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-bold ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. wanderer_soul" 
                        value={formData.username}
                        onChange={e => setFormData({...formData, username: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[var(--accent-earth)] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold ml-1">Location</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Spiti Valley" 
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[var(--accent-earth)] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold ml-1">Image URL</label>
                    <input 
                      required
                      type="url" 
                      placeholder="Paste Unsplash or direct image link" 
                      value={formData.url}
                      onChange={e => setFormData({...formData, url: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[var(--accent-earth)] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold ml-1">Caption</label>
                    <textarea 
                      required
                      placeholder="Describe the magic of this moment..." 
                      rows={3}
                      value={formData.caption}
                      onChange={e => setFormData({...formData, caption: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[var(--accent-earth)] outline-none transition-all resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full !py-5 !rounded-2xl shadow-xl shadow-[var(--accent-earth)]/20"
                    disabled={uploading}
                    magnetic
                  >
                    {uploading ? 'Publishing...' : <><Sparkles className="w-5 h-5 mr-2" /> Publish to Gallery</>}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
