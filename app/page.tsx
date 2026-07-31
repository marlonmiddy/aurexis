import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Divisions } from '@/components/divisions'
import { Manifesto } from '@/components/manifesto'
import { Projects } from '@/components/projects'
import { Process } from '@/components/process'
import { Consultation } from '@/components/consultation'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Divisions />
        <Manifesto />
        <Projects />
        <Process />
        <Consultation />
      </main>
      <SiteFooter />
    </>
  )
}
