'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, X, MapPin, User, Camera, Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GalleryCarousel } from '@/components/home/GalleryCarousel'

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([])
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
        <GalleryCarousel images={images} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 preserve-3d">
        {/* Section divider */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-black shrink-0 tracking-tighter">COMMUNITY MOMENTS</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        {images.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Camera className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-black text-gray-400">No Uploads Yet</h3>
            <h4 className="text-gray-400 font-medium">Be the first to share a moment!</h4>
          </div>
        ) : (
         <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 preserve-3d">
          {images.map((img, i) => (
            <motion.div 
              key={img._id || i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                rotateX: 5, 
                rotateY: 5, 
                z: 50,
                transition: { duration: 0.3 } 
              }}
              className="relative break-inside-avoid rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer preserve-3d border border-white/20"
            >
               <div className="relative aspect-[4/5] sm:aspect-auto">
                 <img
                   src={img.url} 
                   className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   alt={img.caption} 
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-3" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex items-center gap-2 text-[var(--accent-earth)]">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">{img.location}</span>
                    </div>
                    <h4 className="text-white text-2xl font-black">{img.caption}</h4>
                    <div className="flex items-center gap-2 text-white/60">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Shared by {img.username}</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          ))}
         </div>
        )}
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
