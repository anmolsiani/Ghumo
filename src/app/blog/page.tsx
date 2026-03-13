'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Search, Filter, Calendar, User, ArrowRight, BookOpen } from 'lucide-react'

// Sample blog data (In a real app, this would come from an API)
const BLOGS = [
  {
    id: '1',
    title: 'Exploring the Dolomites: A Journey Through Italy\'s Majestic Peaks',
    excerpt: 'Immersive hiking, stunning vistas, and the serene beauty of South Tyrol. Discover why the Dolomites should be your next adventure.',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80',
    date: 'Oct 15, 2023',
    author: 'Elena Rossi',
    category: 'Adventure',
    featured: true
  },
  {
    id: '2',
    title: 'Iceland\'s Hidden Wonders',
    excerpt: 'Beyond the Golden Circle, Iceland holds secrets that will leave you breathless. Explore hidden waterfalls and lava fields.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    date: 'Nov 19, 2023',
    author: 'Lukas Berg',
    category: 'Adventure'
  },
  {
    id: '3',
    title: 'Kyoto: Ancient Traditions',
    excerpt: 'Experience the soul of Japan through its most beautiful temples, gardens, and traditional tea ceremonies in the heart of Kyoto.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    date: 'Nov 13, 2023',
    author: 'Yuki Tanaka',
    category: 'Culture'
  },
  {
    id: '4',
    title: 'The Sahara Desert',
    excerpt: 'A guide to exploring the endless dunes of Morocco. From camel treks to spending nights under a blanket of desert stars.',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&w=800&q=80',
    date: 'Dec 1, 2023',
    author: 'Amine Jabri',
    category: 'Adventure'
  }
]

const CATEGORIES = ['All', 'Adventure', 'Culture', 'Photography', 'Road Trips', 'Food']

export default function BlogLandingPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  
  const featuredBlog = BLOGS.find(b => b.featured)
  const regularBlogs = BLOGS.filter(b => !b.featured)

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-32 perspective-container">
      {/* Header & Filter */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 mb-16 preserve-3d">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-12 preserve-3d">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">OUR JOURNAL</span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
              Stories from <br /> <span className="text-[var(--accent-earth)]">Around the World</span>
            </h1>
          </div>
          
          <div className="flex flex-col gap-4" style={{ transform: 'translateZ(30px)' }}>
             <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)] group-focus-within:text-[var(--accent-earth)] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search stories..." 
                  className="w-full lg:w-80 pl-16 pr-8 py-5 rounded-2xl bg-white shadow-lg border border-transparent focus:border-[var(--accent-earth)] focus:outline-none transition-all placeholder:text-[var(--text-muted)] font-medium"
                />
             </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 preserve-3d">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-[var(--accent-earth)] text-white shadow-xl' 
                  : 'bg-white text-[var(--text-muted)] hover:bg-white hover:shadow-lg'
              }`}
              style={{ transform: `translateZ(${idx * 2}px)` }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featuredBlog && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-20 mb-20 preserve-3d">
          <Link href={`/blog/${featuredBlog.id}`}>
            <motion.div 
              whileHover={{ rotateX: 5, z: 50 }}
              className="group relative h-[75vh] rounded-[4rem] overflow-hidden shadow-2xl flex items-end preserve-3d border border-white/20"
            >
              <Image 
                src={featuredBlog.image} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt={featuredBlog.title}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
              
              <div className="relative z-10 p-12 lg:p-24 space-y-6 max-w-4xl preserve-3d">
                <span className="px-5 py-2 bg-[var(--accent-earth)] text-white text-[10px] font-black uppercase tracking-widest rounded-lg" style={{ transform: 'translateZ(40px)' }}>FEATURED STORY</span>
                <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight" style={{ transform: 'translateZ(30px)' }}>
                  {featuredBlog.title}
                </h2>
                <h3 className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium" style={{ transform: 'translateZ(20px)' }}>
                  {featuredBlog.excerpt}
                </h3>
                <div className="flex items-center gap-10 pt-6" style={{ transform: 'translateZ(10px)' }}>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-[var(--accent-earth)]" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">{featuredBlog.author}</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[var(--accent-earth)]" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">{featuredBlog.date}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 preserve-3d">
        <div className="flex items-center gap-6 mb-16 preserve-3d">
          <h2 className="text-3xl font-black shrink-0 tracking-tighter">LATEST JOURNAL ENTRIES</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-black/10 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 preserve-3d">
          {regularBlogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ rotateY: 8, z: 40 }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 preserve-3d"
            >
              <Link href={`/blog/${blog.id}`} className="preserve-3d">
                <div className="relative aspect-[4/5] overflow-hidden preserve-3d">
                  <Image 
                    src={blog.image} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={blog.title} 
                  />
                  <div className="absolute top-8 left-8" style={{ transform: 'translateZ(30px)' }}>
                    <span className="px-4 py-1.5 bg-white shadow-xl rounded-xl text-[10px] font-black uppercase tracking-widest text-[var(--accent-earth)]">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-12 space-y-6 preserve-3d" style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-[var(--accent-earth)] transition-colors leading-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <h4 className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 font-normal">
                    {blog.excerpt}
                  </h4>
                  <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 transition-colors group-hover:border-[var(--accent-earth)]">
                        <User className="w-5 h-5 text-[var(--accent-earth)]" />
                      </div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest">{blog.author}</h4>
                    </div>
                    <h4 className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest italic">{blog.date}</h4>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Share Story CTA */}
        <div className="mt-40 perspective-container">
          <motion.div 
            whileHover={{ rotateX: -5, z: 50 }}
            className="glass p-12 lg:p-24 rounded-[5rem] text-center space-y-8 relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-[#8B7355]/5 to-[#2C5F5D]/5 preserve-3d"
          >
             <div className="relative z-10 preserve-3d">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">CONTRIBUTION</span>
                <h2 className="text-[var(--text-lg)] font-black leading-tight max-w-2xl mx-auto my-8">Have a story worth telling?</h2>
                <h3 className="text-xl text-[var(--text-secondary)] max-w-xl mx-auto mb-12 font-medium" style={{ transform: 'translateZ(20px)' }}>
                  Join our community of travelers and share your unique experiences with the world. Your story might inspire someone's next great adventure.
                </h3>
                <Link href="/blog/submit" style={{ transform: 'translateZ(40px)' }}>
                  <Button variant="primary" magnetic withArrow as="div" className="!px-16 !py-6 text-lg !rounded-2xl shadow-xl shadow-[var(--accent-earth)]/20">
                    Share Your Story
                  </Button>
                </Link>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
