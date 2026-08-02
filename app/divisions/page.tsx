import type { Metadata } from 'next'
import { Divisions } from '@/components/divisions'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Divisions',
  description: 'Four specialist divisions. One material philosophy.',
}

export default function DivisionsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero eyebrow="The Aurexis Ecosystem" title="Four disciplines. One standard." line="Integrated surface systems for the spaces, glass, identities and vehicles that shape daily experience." image="/images/hero-hotel.png" imageAlt="Layered architectural surfaces in a refined interior" />
        <Divisions />
        <CtaBand title="One partner, across every surface" />
      </main>
      <SiteFooter />
    </>
  )
}
