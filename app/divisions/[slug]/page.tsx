import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { divisions, getDivision } from '@/lib/site-data'

export function generateStaticParams() {
  return divisions.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const division = getDivision(slug)
  if (!division) return {}
  return { title: division.title, description: division.overview }
}

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const division = getDivision(slug)
  if (!division) notFound()

  return (
    <>
      <SiteNav />
      <main>
        <PageHero eyebrow={division.eyebrow} title={division.headline} line={division.line} image={division.hero} imageAlt={division.heroAlt} />
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <Reveal>
            <div className="grid gap-10 border-b border-border pb-20 md:grid-cols-12 md:pb-28">
              <p className="text-label text-accent md:col-span-3">The discipline</p>
              <div className="md:col-span-8 md:col-start-5">
                <h2 className="font-serif text-4xl font-light leading-tight text-balance md:text-6xl">{division.title}</h2>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{division.overview}</p>
              </div>
            </div>
          </Reveal>
          <div className="mt-20 grid gap-14 md:mt-28 md:grid-cols-2 md:gap-x-8 md:gap-y-24">
            {division.services.map((service, index) => (
              <Reveal key={service.title} as="article" delay={(index % 2) * 100}>
                <div className="img-reveal overflow-hidden rounded-3xl bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-7 md:p-9">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-label text-muted-foreground">{String(index + 1).padStart(2, '0')}</p>
                        <h3 className="mt-3 font-serif text-3xl font-light">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.line}</p>
                      </div>
                      <Check className="mt-1 size-5 text-accent" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8 md:mt-28">
            <Link href="/divisions" className="inline-flex items-center gap-2 text-label text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" aria-hidden="true" />All divisions</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-label text-foreground">Discuss this discipline<ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </section>
        <CtaBand title="Make the existing exceptional" line="Share the surface, environment or vehicle you want to transform." />
      </main>
      <SiteFooter />
    </>
  )
}
