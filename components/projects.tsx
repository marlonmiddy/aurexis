import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/projects'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
              Selected Work
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
              Environments, transformed
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            All case studies
            <ArrowUpRight
              className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20 md:gap-28">
        {projects.map((project, i) => (
          <Reveal key={project.slug} as="article">
            <div
              className={`grid items-end gap-8 md:grid-cols-12 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="img-reveal block overflow-hidden rounded-3xl md:col-span-8"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.cover || '/placeholder.svg'}
                    alt={project.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="md:col-span-4 md:pb-4">
                <h3 className="font-serif text-3xl font-normal md:text-4xl">
                  {project.title}
                </h3>
                <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Industry</dt>
                    <dd>{project.industry}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-right">
                    <dt className="text-muted-foreground">Services</dt>
                    <dd className="text-pretty">{project.services}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
