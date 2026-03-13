'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, MapPin, Calendar, Users, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const JOURNEY_STEPS = [
  {
    step: 1,
    title: "Tell Us Your Dreams",
    description: "Share your travel preferences, budget, and what you're looking for in your next adventure.",
    icon: Brain,
    highlights: ["Destinations", "Budget", "Travel Style", "Duration"]
  },
  {
    step: 2,
    title: "Explore Curated Packages",
    description: "Browse our handpicked collection of premium packages tailored to your preferences.",
    icon: MapPin,
    highlights: ["1000+ Packages", "Expert Picks", "Reviews", "Pricing Options"]
  },
  {
    step: 3,
    title: "Customize Your Trip",
    description: "Work with our travel experts to personalize every detail of your journey.",
    icon: Calendar,
    highlights: ["Flexible Dates", "Custom Itinerary", "Special Requests", "Add-ons"]
  },
  {
    step: 4,
    title: "Book & Travel",
    description: "Secure your booking and receive full support before, during, and after your trip.",
    icon: Users,
    highlights: ["Easy Booking", "Payment Options", "24/7 Support", "Travel Insurance"]
  }
]

export default function StartAJourneyPage() {
  const [selectedStep, setSelectedStep] = useState(0)

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-earth)]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-teal)]/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)] block">START YOUR ADVENTURE</span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
              Your Next <span className="bg-gradient-to-r from-[var(--accent-earth)] to-[var(--accent-teal)] bg-clip-text text-transparent">Journey</span> Starts Here
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              From dreaming to discovering, we guide you through every step of creating the perfect vacation. No generic tours here — just authentic, personalized experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/destinations">
              <Button variant="primary" className="!px-10 !py-4" magnetic withArrow as="div">
                Explore Destinations
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="!px-10 !py-4" as="div">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Journey Steps */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-20 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">THE GHUMO PROCESS</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            4 Steps to Your Dream Trip
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {JOURNEY_STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedStep(idx)}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className={`group relative cursor-pointer transition-all duration-500 rounded-[2.5rem] p-10 overflow-hidden ${
                  selectedStep === idx
                    ? 'bg-white shadow-[0_20px_50px_rgba(139,115,85,0.15)] border-2 border-[var(--accent-earth)]'
                    : 'bg-white/60 shadow-lg border border-white/50 hover:bg-white hover:shadow-2xl'
                }`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-earth)]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--accent-earth)] to-[var(--accent-teal)] flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="px-3 py-1 rounded-full bg-[var(--accent-earth)]/10 text-[10px] font-black uppercase tracking-widest text-[var(--accent-earth)]">Step {step.step}</span>
                       <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--accent-earth)]/20 to-transparent"></div>
                    </div>
                    <h3 className="text-3xl font-black tracking-tight">{step.title}</h3>
                  </div>
  
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                    {step.description}
                  </p>
  
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: selectedStep === idx ? 'auto' : 0, 
                        opacity: selectedStep === idx ? 1 : 0 
                      }}
                      whileHover={selectedStep !== idx ? { height: 'auto', opacity: 1 } : {}}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="space-y-3 pt-6 border-t border-black/5"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4">Highlights</p>
                      {step.highlights.map((highlight, hidx) => (
                        <p key={hidx} className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-3 group/item">
                          <span className="w-2 h-2 bg-[var(--accent-earth)] rounded-full group-hover/item:scale-150 transition-transform"></span>
                          {highlight}
                        </p>
                      ))}
                      
                      {selectedStep !== idx && (
                        <p className="text-xs font-black text-[var(--accent-earth)] pt-4 flex items-center gap-2 animate-pulse">
                          Click to select <ArrowRight className="w-3 h-3" />
                        </p>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline visual */}
        <div className="hidden lg:block relative mt-24">
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-earth)] via-[var(--accent-teal)] to-[var(--accent-earth)]"></div>
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {JOURNEY_STEPS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white border-4 border-[var(--accent-earth)] flex items-center justify-center font-black text-[var(--accent-earth)]">
                  {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            Why Choose Ghumo Holidays?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Because we believe travel should be more than just checking off destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Curation",
              description: "Every package is personally curated by travel experts who have been there, loved it, and want to share it with you.",
              stat: "1000+"
            },
            {
              title: "Premium Quality",
              description: "We partner only with 5-star verified hotels, restaurants, and local guides to ensure your experience is exceptional.",
              stat: "5⭐"
            },
            {
              title: "Personalized Service",
              description: "No cookie-cutter itineraries. We customize every trip to match your unique interests and preferences.",
              stat: "24/7"
            },
            {
              title: "Best Price Guarantee",
              description: "Get the same premium experience at competitive prices. We work directly with providers to give you the best deals.",
              stat: "Best"
            },
            {
              title: "Local Experiences",
              description: "Skip the touristy spots. Our local guides take you to hidden gems that most travelers never discover.",
              stat: "Authentic"
            },
            {
              title: "Full Support",
              description: "From pre-booking queries to 24/7 on-trip support, we're here for you every step of the way.",
              stat: "Always"
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-black text-[var(--accent-earth)] mb-4">{feature.stat}</div>
              <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[var(--accent-earth)]/10 to-[var(--accent-teal)]/10 rounded-[3rem] p-16 space-y-8 border border-[var(--accent-earth)]/20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Ready to Start Your Journey?</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-xl mx-auto">
            Let's create memories that last a lifetime. Whether you're planning a solo adventure, couple's getaway, or family vacation, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/contact">
              <Button variant="primary" className="!px-10 !py-4" magnetic as="div">
                Plan My Trip <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/destinations">
              <Button variant="secondary" className="!px-10 !py-4" as="div">Browse All Packages</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
