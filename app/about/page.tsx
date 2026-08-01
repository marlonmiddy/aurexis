import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { Process } from '@/components/process'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { company } from '@/lib/site-data'

export const metadata: Metadata = { title: 'About', description: 'The craft, material intelligence and precision behind Aurexis.' }

const principles = [
  ['Material before decoration', 'The right surface does more than change appearance. It improves use, longevity and atmosphere.'],
  ['Precision before speed', 'Every edge, return and junction is resolved before installation begins.'],
  ['Renewal before replacement', 'We preserve what performs and transform what is seen, reducing disruption and waste.'],
  ['Assurance after handover', 'Our relationship continues through care guidance, inspection and warranty support.'],
]

export default function AboutPage() {
  return <><SiteNav /><main>
    <PageHero eyebrow="About Aurexis" title="Craft, engineered for longevity." line="A surface transformation company shaped by architecture, material intelligence and exacting execution." image="/images/div-built.png" imageAlt="Architectural surfaces resolved with precision" />
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-36"><Reveal><div className="grid gap-12 md:grid-cols-12"><p className="text-label text-accent md:col-span-3">Our position</p><div className="md:col-span-8 md:col-start-5"><h2 className="font-serif text-4xl font-light leading-tight text-balance md:text-6xl">We transform what already exists into what comes next.</h2><p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">For five years, Aurexis has worked across interiors, glass, communications and mobility. Our work begins with the existing condition, then applies material, technology and craft with restraint. The aim is not novelty. It is a better surface, a better experience and a longer useful life.</p><p className="mt-6 text-sm text-muted-foreground">Founded and led by {company.ceo}.</p></div></div></Reveal></section>
    <section className="bg-secondary"><div className="mx-auto max-w-7xl px-6 py-24 md:py-36"><div className="grid gap-16 lg:grid-cols-2"><Reveal><div className="relative min-h-[30rem] overflow-hidden rounded-3xl"><Image src="/images/hero-glass.png" alt="Light passing through a precision film glass system" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></Reveal><div className="grid gap-5 sm:grid-cols-2">{principles.map(([title, line], index) => <Reveal key={title} delay={index * 70}><article className="glass h-full rounded-3xl p-7"><p className="text-label text-accent">0{index + 1}</p><h3 className="mt-8 font-serif text-2xl font-light">{title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{line}</p></article></Reveal>)}</div></div></div></section>
    <Process /><CtaBand title="Designed to endure. Built to be supported." />
  </main><SiteFooter /></>
}
