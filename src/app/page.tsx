import { Hero } from "@/components/home/Hero";
import { DestinationsCarousel } from "@/components/home/DestinationsCarousel";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsCarousel />
      
      <section className="py-32 bg-white flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <Reveal direction="left">
             <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80" 
                  fill 
                  className="object-cover" 
                  alt="About us"
                />
             </div>
           </Reveal>
           <Reveal direction="right">
             <div className="space-y-8">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]">Our Story</span>
                <h2 className="text-[var(--text-lg)] font-black leading-tight">Redefining Premium Travel Since 2010.</h2>
                <p className="text-[var(--text-base)] text-[var(--text-secondary)] leading-relaxed">
                  Ghumo Holidays was born from a passion for authentic Indian experiences. We believe that travel should be more than just visiting a place — it should be a transformation. Our curated packages are designed to bring you the best of India's heritage, luxury, and adventure.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                   <div className="space-y-2">
                      <p className="text-4xl font-black text-[var(--accent-earth)]">15+</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Years Excellence</p>
                   </div>
                   <div className="space-y-2">
                      <p className="text-4xl font-black text-[var(--accent-earth)]">10k+</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Happy Travelers</p>
                   </div>
                </div>
             </div>
           </Reveal>
        </div>
      </section>

      <FeaturedPackages />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
