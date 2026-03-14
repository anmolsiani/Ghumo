import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { packagesData } from '@/data/packages'
import { DESTINATION_IMAGES } from '@/data/destinationsData'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, Clock, Star, MapPin } from 'lucide-react'
import { StateGallery } from '@/components/destinations/StateGallery'

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params

  // Fetch packages for this state from LOCAL DATA
  const statePackages = packagesData.filter(pkg => pkg.state === state)
  
  // Use local Pexels images for the header
  // @ts-ignore
  const stateImgs = DESTINATION_IMAGES[state] || []
  const headerImage = stateImgs[0] || "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1400&q=80"

  const stateTitle = state.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pb-32">
      <header className="relative min-h-[50vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <Image 
          src={headerImage} 
          fill 
          className="object-cover" 
          alt={stateTitle} 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/20 to-transparent shadow-inner"></div>
        
        <div className="relative inset-0 flex flex-col items-center justify-center text-center px-6 py-20 md:py-0 z-10 w-full">
          <Link href="/destinations" className="mb-6 md:mb-8 glass px-5 md:px-6 py-2 rounded-full flex items-center gap-2 text-white hover:bg-white hover:text-black transition-all">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">All Destinations</span>
          </Link>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[var(--text-xl)] font-black tracking-tighter mb-4 drop-shadow-2xl">
            {stateTitle}
          </h1>
          <p className="text-white/80 text-sm md:text-lg max-w-xl md:max-w-2xl font-medium">
            Explore {statePackages.length} curated premium packages in the heart of {stateTitle}.
          </p>
        </div>
      </header>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statePackages.length > 0 ? (
            statePackages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={pkg.images[0] || "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80"} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={pkg.title}
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {pkg.category}
                  </div>
                </div>

                <div className="p-8 space-y-6 flex-grow flex flex-col">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {pkg.duration}</span>
                      <span className="flex items-center gap-1 text-[var(--accent-gold)]"><Star className="w-3 h-3 fill-current" /> {pkg.rating?.toFixed(1) || "4.8"}</span>
                    </div>
                    <h3 className="text-2xl font-black font-heading leading-tight group-hover:text-[var(--accent-earth)] transition-colors">
                      {pkg.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                    {pkg.description}
                  </p>

                  <div className="pt-6 border-t border-black/5 mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)] mb-1 text-left">Premium Package</p>
                      <p className="text-2xl font-black text-[var(--accent-teal)] text-left">₹{pkg.price.toLocaleString()}/-</p>
                    </div>
                    <Link href={`/packages/${pkg.id}`}>
                      <Button variant="primary" className="!px-6 !py-3 !text-xs !rounded-full" as="div">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center space-y-6 glass rounded-[3rem]">
               <MapPin className="w-16 h-16 mx-auto opacity-20" />
               <p className="text-xl font-bold opacity-40 uppercase tracking-[0.2em]">No packages found for this region yet.</p>
               <Link href="/"><Button variant="secondary">Back to Home</Button></Link>
            </div>
          )}
        </div>
      </section>

      {/* Region Gallery */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Visual Snapshot</span>
             <h2 className="text-[var(--text-lg)] font-black leading-tight">Glimpses of {stateTitle}</h2>
          </div>
        </div>

        <StateGallery images={stateImgs} stateTitle={stateTitle} />
      </section>
    </div>
  )
}
