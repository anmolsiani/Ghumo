"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/animations/Reveal'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Award, Globe, Users, Heart } from 'lucide-react'

const team = [
  {
    name: "Rajat Saini",
    role: "Founder",
    bio: "Visionary leader with a passion for transforming the Indian travel landscape. Rajat focuses on strategic partnerships and expanding the Ghumo Holidays footprint globally.",
    image: "/team/rajat_c.png",
    skills: ["Strategy", "Partnerships", "Vision"]
  },
  {
    name: "Komal Saini",
    role: "CEO",
    bio: "Driving operational excellence and customer-centric growth. Komal ensures that every package curated by Ghumo Holidays meets the highest standards of quality and service.",
    image: "/team/komal_c.png",
    skills: ["Operations", "Growth", "Quality"]
  },
  {
    name: "Ish",
    role: "Tech & Support",
    bio: "Ensuring a seamless digital experience for all travelers. Ish leads our technical infrastructure and customer support systems, bridging technology with soulful travel.",
    image: "/team/ish_c.png",
    skills: ["Infrastructure", "Support", "Innovation"]
  }
]

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-20 mb-20 md:mb-32">
        <div className="max-w-[1400px] mx-auto text-center space-y-8">
          <Reveal direction="up">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Our Story</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
              Crafting Soulful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-earth)] to-[var(--accent-teal)] italic font-light">Odysseys</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              We don't just plan trips — we curate experiences that stay with you long after you return home. India's premier travel curators, dedicated to authenticity and luxury.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-20 mb-20 md:mb-32 relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <Globe className="w-5 h-5" />, label: "All Over India", value: "& More" },
            { icon: <Users className="w-5 h-5" />, label: "10k+ Travelers", value: "Trusted" },
            { icon: <Heart className="w-5 h-5" />, label: "43+ Packages", value: "Curated" },
            { icon: <Award className="w-5 h-5" />, label: "4.9/5 Rating", value: "Reviews" }
          ].map((stat, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="glass p-6 rounded-2xl md:rounded-3xl text-center space-y-3 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-earth)]/10 flex items-center justify-center text-[var(--accent-earth)] mx-auto">
                  {stat.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-black">{stat.label}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{stat.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 lg:px-20 mb-20 md:mb-32">
        <div className="max-w-[1400px] mx-auto space-y-16 md:space-y-20">
          <div className="text-center space-y-4">
            <Reveal direction="up">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Meet the Visionaries</h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-[var(--text-secondary)] text-sm md:text-base font-medium max-w-xl mx-auto uppercase tracking-widest">
                The experts behind your next soulful journey
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, idx) => (
              <Reveal key={member.name} direction="up" delay={0.2 + idx * 0.1}>
                <div className="group relative">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border border-gray-100 will-change-transform transform transition-transform duration-500 hover:-translate-y-4">
                    <Image 
                      src={member.image} 
                      fill 
                      className="object-cover transition-all duration-700 scale-105 group-hover:scale-110" 
                      alt={member.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 text-white space-y-1">
                      <h3 className="text-2xl font-black tracking-tight">{member.name}</h3>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-earth)]">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 px-4">
                    <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-medium">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-[var(--accent-earth)]/10 text-[var(--accent-earth)] rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* No CTA needed here as the new Footer provides a global premium CTA */}
    </main>
  )
}
