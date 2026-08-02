'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const filters = ['All', ...Array.from(new Set(projects.map((project) => project.industry)))]
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((project) => project.industry === active)

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by industry">
        {filters.map((filter) => <button key={filter} type="button" onClick={() => setActive(filter)} aria-pressed={active === filter} className={cn('rounded-full border px-5 py-2.5 text-label transition-colors', active === filter ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:text-foreground')}>{filter}</button>)}
      </div>
      <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
        {visible.map((project) => (
          <article key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="img-reveal group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted"><Image src={project.cover} alt={project.coverAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div><p className="text-label text-accent">{project.industry} · {project.location}</p><h2 className="mt-2 font-serif text-3xl font-light">{project.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.services}</p></div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="size-4" aria-hidden="true" /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
