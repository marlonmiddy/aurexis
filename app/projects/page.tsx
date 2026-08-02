import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ProjectFilter } from '@/components/project-filter'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected Aurexis surface transformation projects across Southern Africa.',
}

export default function ProjectsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero eyebrow="Selected Work" title="Proof, in the surface." line="A considered record of environments, glass systems, identities and machines transformed." image="/images/project-hq.png" imageAlt="Corporate atrium with transformed glass and wayfinding" />
        <ProjectFilter projects={projects} />
      </main>
      <SiteFooter />
    </>
  )
}
