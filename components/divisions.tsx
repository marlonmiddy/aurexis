import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { divisions } from '@/lib/site-data'

export function Divisions() {
  return (
    <section id="divisions" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <Reveal>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
          Four Divisions
        </p>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
          One material philosophy
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {divisions.map((division, i) => (
          <Reveal key={division.slug} delay={i * 120}>
            <Link
              href={`/divisions/${division.slug}`}
              className="lift img-reveal group block overflow-hidden rounded-3xl bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={division.hero || '/placeholder.svg'}
                  alt={division.heroAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-6 p-7 md:p-9">
                <div>
                  <h3 className="font-serif text-2xl font-normal md:text-3xl">
                    {division.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {division.line}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {division.services.slice(0, 4).map((service) => (
                      <li
                        key={service.title}
                        className="rounded-full border border-border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
