export type Project = {
  slug: string
  title: string
  industry: string
  location: string
  services: string
  outcome: string
  cover: string
  coverAlt: string
  gallery: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'the-meridian-hotel',
    title: 'The Meridian Hotel',
    industry: 'Hospitality',
    location: 'Cape Town',
    services: 'Built Environments · Glass Technologies',
    outcome:
      'Guest corridors and suites resurfaced in travertine and smoked oak film — 14 floors renewed without a single night of closure.',
    cover: '/images/project-hotel.png',
    coverAlt: 'Hotel corridor with travertine wrapped wall panels and smoked glass',
    gallery: [
      {
        src: '/images/hero-hotel.png',
        alt: 'Boutique hotel lobby with layered architectural surfaces',
      },
      {
        src: '/images/be-hospitality.png',
        alt: 'Hotel suite with warm panelled feature wall',
      },
    ],
  },
  {
    slug: 'northbank-headquarters',
    title: 'Northbank Headquarters',
    industry: 'Commercial',
    location: 'Cape Town',
    services: 'Glass Technologies · Wayfinding',
    outcome:
      'Six floors of open glazing given gradient privacy and solar control, with a unified wayfinding system across the campus.',
    cover: '/images/project-hq.png',
    coverAlt: 'Corporate atrium with frosted glass balustrades and wayfinding panels',
    gallery: [
      {
        src: '/images/hero-glass.png',
        alt: 'Office glass partitions with gradient privacy film',
      },
      {
        src: '/images/gt-privacy.png',
        alt: 'Gradient frosted privacy film detail',
      },
    ],
  },
  {
    slug: 'vantage-logistics-fleet',
    title: 'Vantage Logistics Fleet',
    industry: 'Mobility',
    location: 'Southern Africa',
    services: 'Fleet Branding · Paint Protection',
    outcome:
      'A 60-vehicle fleet rebranded in a restrained midnight livery, protected with commercial-grade film for the long haul.',
    cover: '/images/project-fleet.png',
    coverAlt: 'Fleet of vans with minimal midnight blue wrap design',
    gallery: [
      {
        src: '/images/vc-fleet.png',
        alt: 'Branded fleet vehicles in minimal livery',
      },
      {
        src: '/images/hero-vehicle.png',
        alt: 'Luxury vehicle with satin midnight blue wrap',
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
