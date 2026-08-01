import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug)
  return project ? { title: project.title, description: project.outcome } : {}
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  const index = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteNav />
      <main>
        <PageHero eyebrow={`${project.industry} · ${project.location}`} title={project.title} line={project.services} image={project.cover} imageAlt={project.coverAlt} />
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-12">
              <p className="text-label text-accent md:col-span-3">The outcome</p>
              <p className="font-serif text-3xl font-light leading-snug text-balance md:col-span-8 md:col-start-5 md:text-5xl">{project.outcome}</p>
            </div>
          </Reveal>
          <div className="mt-20 flex flex-col gap-6 md:mt-28 md:gap-10">
            {project.gallery.map((image, imageIndex) => (
              <Reveal key={image.src}>
                <figure className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted md:aspect-[16/8]">
                  <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
                  <figcaption className="absolute bottom-4 left-4 rounded-full bg-primary/70 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-md">View {String(imageIndex + 1).padStart(2, '0')}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <nav aria-label="Project navigation" className="mt-20 grid gap-4 border-t border-border pt-8 sm:grid-cols-2 md:mt-28">
            <Link href={`/projects/${previous.slug}`} className="group flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:bg-card"><ArrowLeft className="size-5" aria-hidden="true" /><span><span className="text-label text-muted-foreground">Previous</span><span className="mt-1 block font-serif text-xl">{previous.title}</span></span></Link>
            <Link href={`/projects/${next.slug}`} className="group flex items-center justify-end gap-4 rounded-2xl border border-border p-5 text-right transition-colors hover:bg-card"><span><span className="text-label text-muted-foreground">Next</span><span className="mt-1 block font-serif text-xl">{next.title}</span></span><ArrowRight className="size-5" aria-hidden="true" /></Link>
          </nav>
        </section>
        <CtaBand title="Your project could be next" />
      </main>
      <SiteFooter />
    </>
  )
}
