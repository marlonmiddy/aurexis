'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const slides = [
  {
    src: '/images/hero-kitchen.png',
    alt: 'Luxury residential kitchen with transformed cabinetry surfaces',
    caption: 'Built Environments',
  },
  {
    src: '/images/hero-glass.png',
    alt: 'Office glass partitions with gradient privacy film',
    caption: 'Glass Technologies',
  },
  {
    src: '/images/hero-vehicle.png',
    alt: 'Luxury vehicle with satin midnight blue wrap',
    caption: 'Mobility',
  },
  {
    src: '/images/hero-hotel.png',
    alt: 'Boutique hotel lobby with layered architectural surfaces',
    caption: 'Visual Communications',
  },
]

const SLIDE_DURATION = 7000

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_DURATION,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative h-svh min-h-[640px] overflow-hidden">
      {/* Cinematic slideshow */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            'hero-slide absolute inset-0',
            i === index ? 'z-10 scale-105 opacity-100' : 'z-0 scale-100 opacity-0',
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src || '/placeholder.svg'}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Depth scrim */}
      <div className="absolute inset-0 z-20 bg-primary/40" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-1/2 bg-gradient-to-t from-primary/80 to-transparent" />

      {/* Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.5em] text-primary-foreground/60">
          Aurexis Surface Transformations
        </p>
        <h1 className="max-w-5xl font-serif text-5xl font-light leading-[1.05] text-primary-foreground text-balance md:text-7xl lg:text-8xl">
          Engineering Better Surfaces
        </h1>

        <div className="mt-8 h-5 overflow-hidden" aria-live="polite">
          <p
            key={index}
            className="animate-in fade-in slide-in-from-bottom-2 text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/70 duration-1000"
          >
            {slides[index].caption}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#divisions"
            className="glass-dark lift rounded-2xl px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground"
          >
            Explore Divisions
          </a>
          <a
            href="#consultation"
            className="lift rounded-2xl border border-primary-foreground/25 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/85 hover:text-primary-foreground"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide: ${slide.caption}`}
            className={cn(
              'h-0.5 rounded-full transition-all duration-700',
              i === index
                ? 'w-10 bg-primary-foreground'
                : 'w-4 bg-primary-foreground/30 hover:bg-primary-foreground/60',
            )}
          />
        ))}
      </div>
    </section>
  )
}
