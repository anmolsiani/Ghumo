import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { packagesData } from '@/data/packages'
import { Button } from '@/components/ui/Button'
import { AddToCartButton } from '@/components/packages/AddToCartButton'
import { ArrowLeft, Clock, MapPin, Star, Users, Check } from 'lucide-react'

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const pkg = packagesData.find(p => p.id === id)

  if (!pkg) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black mb-4">Package Not Found</h1>
        <p className="text-[var(--text-secondary)] mb-12">Sorry, this package doesn't exist.</p>
        <Link href="/destinations">
          <Button variant="primary" as="div">Back to Destinations</Button>
        </Link>
      </div>
    )
  }

  const packageData = {
    id: pkg.id,
    title: pkg.title,
    price: pkg.price,
    state: pkg.state,
    image: pkg.images?.[0] || 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80'
  }

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pb-32">
      {/* Header with Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image 
          src={pkg.images?.[0] || "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1400&q=80"} 
          fill 
          className="object-cover" 
          alt={pkg.title} 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/20 to-transparent"></div>
        
        <Link href="/destinations" className="absolute top-12 left-8 glass px-6 py-3 rounded-full flex items-center gap-2 text-white hover:bg-white hover:text-black transition-all z-20">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Back</span>
        </Link>
      </div>

      {/* Package Details */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Title & Meta */}
            <div className="bg-white rounded-[2.5rem] p-12 shadow-xl">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-earth)] mb-3 block">{pkg.category}</span>
                  <h1 className="text-5xl font-black tracking-tighter leading-tight mb-4">{pkg.title}</h1>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{pkg.description}</p>
                </div>

                <div className="flex flex-wrap gap-6 pt-6 border-t border-black/5">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Duration</p>
                    <p className="text-xl font-bold flex items-center gap-2"><Clock className="w-5 h-5" />{pkg.duration}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Destination</p>
                    <p className="text-xl font-bold flex items-center gap-2"><MapPin className="w-5 h-5" />{pkg.state.replace('-', ' ')}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Rating</p>
                    <p className="text-xl font-bold flex items-center gap-2"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />{pkg.rating?.toFixed(1) || '4.8'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Travelers</p>
                    <p className="text-xl font-bold flex items-center gap-2"><Users className="w-5 h-5" />{pkg.reviews || '150+'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <div className="bg-white rounded-[2.5rem] p-12 shadow-xl">
                <h2 className="text-3xl font-black mb-8">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <Check className="w-6 h-6 text-[var(--accent-teal)] flex-shrink-0" />
                      <span className="font-semibold">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="bg-white rounded-[2.5rem] p-12 shadow-xl">
                <h2 className="text-3xl font-black mb-8">Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((day: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-[var(--accent-earth)] pl-6 py-2">
                      <h3 className="text-xl font-bold mb-2">Day {day.day} - {day.title}</h3>
                      <ul className="space-y-2 text-[var(--text-secondary)]">
                        {day.activities?.map((activity: string, aidx: number) => (
                          <li key={aidx} className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[var(--accent-earth)] rounded-full"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-[2.5rem] p-10 shadow-xl space-y-8">
              
              {/* Price */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Per Person Price</p>
                {pkg.price > 0 ? (
                  <>
                    <p className="text-4xl font-black text-[var(--accent-teal)]">₹{pkg.price.toLocaleString()}/-</p>
                    <p className="text-xs text-[var(--text-secondary)]">Min 2 Pax (Prices may vary based on group size)</p>
                  </>
                ) : (
                  <p className="text-2xl font-bold text-[var(--accent-earth)]">Custom Pricing</p>
                )}
              </div>

              <div className="border-t border-black/5"></div>

              {/* CTA */}
              {pkg.price > 0 ? (
                <AddToCartButton packageData={packageData} />
              ) : (
                <Link href="/contact" className="w-full block">
                  <Button variant="primary" className="w-full !rounded-2xl" as="div">Request Custom Quote</Button>
                </Link>
              )}

              <Link href="/contact" className="block text-center">
                <Button variant="secondary" className="w-full !rounded-2xl" as="div">Contact Us for Details</Button>
              </Link>

              {/* Trust Elements */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Why Book With Us</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-green-500" /> Expert local guides</p>
                  <p className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-green-500" /> 100% verified hotels</p>
                  <p className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-green-500" /> 24/7 customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
