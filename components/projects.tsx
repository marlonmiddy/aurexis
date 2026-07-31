import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'The Meridian Hotel',
    industry: 'Hospitality',
    location: 'London',
    services: 'Built Environments · Glass Technologies',
    image: '/images/project-hotel.png',
    alt: 'Hotel corridor with travertine wrapped wall panels and smoked glass',
  },
  {
    title: 'Northbank Headquarters',
    industry: 'Commercial',
    location: 'Manchester',
    services: 'Glass Technologies · Wayfinding',
    image: '/images/project-hq.png',
    alt: 'Corporate atrium with frosted glass balustrades and wayfinding panels',
  },
  {
    title: 'Vantage Logistics Fleet',
    industry: 'Mobility',
    location: 'Nationwide',
    services: 'Fleet Branding · Paint Protection',
    image: '/images/project-fleet.png',
    alt: 'Fleet of vans with minimal midnight blue wrap design',
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <Reveal>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
          Selected Work
        </p>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
          Environments, transformed
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20 md:gap-28">
        {projects.map((project, i) => (
          <Reveal key={project.title} as="article">
            <div
              className={`grid items-end gap-8 md:grid-cols-12 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="img-reveal overflow-hidden rounded-3xl md:col-span-8">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
              </div>
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
