import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DESTINATION_IMAGES } from '@/data/destinationsData'
import { ArrowRight } from 'lucide-react'

const STATES = [
  { id: 'himachal-pradesh', title: 'Himachal Pradesh', subtitle: 'Mountains & Valleys' },
  { id: 'goa', title: 'Goa', subtitle: 'Sun, Sand & Sea' },
  { id: 'leh-ladakh', title: 'Leh Ladakh', subtitle: 'The Cold Desert' },
  { id: 'darjeeling-sikkim', title: 'Darjeeling & Sikkim', subtitle: 'Eastern Himalayas' },
  { id: 'uttarakhand', title: 'Uttarakhand', subtitle: 'Devbhoomi' },
  { id: 'kerala', title: 'Kerala', subtitle: 'God\'s Own Country' },
  { id: 'rajasthan', title: 'Rajasthan', subtitle: 'Land of Kings' },
  { id: 'kashmir', title: 'Kashmir', subtitle: 'Paradise on Earth' }
];

export default async function DestinationsPage() {
  const stateData = STATES.map((state) => {
    // @ts-ignore
    const imgs = DESTINATION_IMAGES[state.id] || []
    return { ...state, image: imgs[0] || "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80" }
  })

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        
        <div className="text-center space-y-6 mb-24">
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]">Discover India</span>
           <h1 className="text-[var(--text-xl)] font-black tracking-tighter leading-none">All Destinations</h1>
           <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
             From the snow-capped peaks of the Himalayas to the tranquil backwaters of Kerala, select your next premium getaway.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {stateData.map((state) => (
             <Link key={state.id} href={`/destinations/${state.id}`} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-lg block">
                <Image 
                  src={state.image} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={state.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-2">{state.subtitle}</p>
                     <h3 className="text-2xl font-black text-white leading-tight font-heading flex flex-col items-start gap-4">
                        {state.title}
                        <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <ArrowRight className="w-4 h-4" />
                        </span>
                     </h3>
                  </div>
                </div>
             </Link>
           ))}
        </div>

      </div>
    </div>
  )
}
