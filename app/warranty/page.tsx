import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = { title: 'Aurexis Assurance', description: 'Our approach to workmanship, material warranty and long-term support.' }
const covered = ['Verified material performance within the manufacturer warranty', 'Aurexis installation workmanship', 'Documented inspection and care guidance', 'Clear assessment and remedy process']
const process = [['01', 'Tell us', 'Share the project, installation date and visible concern.'], ['02', 'We inspect', 'Our team reviews the condition, care history and material system.'], ['03', 'We resolve', 'A valid claim is repaired or replaced under the applicable warranty.']]

export default function WarrantyPage() { return <><SiteNav /><main>
  <PageHero eyebrow="The Aurexis Assurance" title="Confidence, built into the finish." line="Premium work is not complete at handover. Our assurance combines installed craftsmanship, product-backed warranties and responsive support." image="/images/gt-safety.png" imageAlt="Engineered glass detail representing long-term surface protection" />
  <section className="mx-auto max-w-7xl px-6 py-24 md:py-36"><div className="grid gap-14 lg:grid-cols-2"><Reveal><div><ShieldCheck className="size-10 text-accent" aria-hidden="true" /><h2 className="mt-8 font-serif text-4xl font-light md:text-6xl">Our work should age with dignity.</h2><p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">Coverage varies by material, application and manufacturer. Your project handover records the exact term and care requirements. Some architectural film systems carry manufacturer warranties of up to ten years.</p></div></Reveal><Reveal delay={120}><div className="glass rounded-3xl p-8 md:p-10"><p className="text-label text-accent">What assurance includes</p><ul className="mt-8 flex flex-col gap-5">{covered.map(item => <li key={item} className="flex gap-4 text-sm leading-relaxed"><Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul></div></Reveal></div>
  <div className="mt-24 border-t border-border pt-16"><p className="text-label text-accent">Claims, made clear</p><div className="mt-10 grid gap-10 md:grid-cols-3">{process.map(([number,title,line]) => <article key={number}><p className="font-serif text-3xl text-muted-foreground/50">{number}</p><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{line}</p></article>)}</div></div>
  <aside className="mt-24 rounded-3xl bg-secondary p-8 md:p-12"><h2 className="font-serif text-3xl font-light">Before submitting a claim</h2><p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Impact damage, misuse, unapproved chemicals, substrate failure and third-party alterations are generally excluded. Keep your handover record and follow the provided care guide.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-label">Start a support enquiry<ArrowUpRight className="size-4" aria-hidden="true" /></Link></aside>
  </section>
  </main><SiteFooter /></> }
