export const company = {
  name: 'AUREXIS',
  tagline: 'Surface Transformations',
  ceo: 'Avant Gardi',
  phone: '061 820 2622',
  phoneHref: 'tel:+27618202622',
  whatsappHref: 'https://wa.me/27618202622',
  email: 'aurexiscorp@gmail.com',
  instagram: '@w3st_midas',
  instagramHref: 'https://instagram.com/w3st_midas',
  offices: [
    {
      city: 'Cape Town',
      country: 'South Africa',
      lines: ['30 Cole Street', 'Observatory', 'Cape Town'],
      mapHref:
        'https://www.google.com/maps/search/?api=1&query=30+Cole+Street+Observatory+Cape+Town',
    },
    {
      city: 'Victoria Falls',
      country: 'Zimbabwe',
      lines: ['Victoria Falls', 'Zimbabwe'],
      mapHref:
        'https://www.google.com/maps/search/?api=1&query=Victoria+Falls+Zimbabwe',
    },
  ],
  regions: ['Cape Town', 'Victoria Falls', 'Southern Africa'],
} as const

export type Service = {
  title: string
  line: string
  image: string
  alt: string
}

export type Division = {
  slug: string
  title: string
  eyebrow: string
  headline: string
  line: string
  overview: string
  hero: string
  heroAlt: string
  services: Service[]
}

export const divisions: Division[] = [
  {
    slug: 'built-environments',
    title: 'Built Environments',
    eyebrow: 'Division 01',
    headline: 'Architecture, resurfaced',
    line: 'Interiors reimagined through architectural surface systems.',
    overview:
      'Walls, cabinetry and joinery — transformed in place with engineered architectural films. The result of demolition, without the demolition.',
    hero: '/images/div-built.png',
    heroAlt: 'Residential interior with wrapped architectural wall panels',
    services: [
      {
        title: 'Kitchen & Cabinetry',
        line: 'Cabinetry resurfaced in stone, timber and matte finishes.',
        image: '/images/be-kitchen.png',
        alt: 'Minimal luxury kitchen with resurfaced matte cabinetry',
      },
      {
        title: 'Hospitality',
        line: 'Suites and public spaces, renewed without closure.',
        image: '/images/be-hospitality.png',
        alt: 'Boutique hotel suite with warm panelled feature wall',
      },
      {
        title: 'Retail',
        line: 'Environments that carry the brand in every surface.',
        image: '/images/be-retail.png',
        alt: 'Premium retail interior with stone-textured display wall',
      },
      {
        title: 'Residential',
        line: 'Living spaces elevated through material precision.',
        image: '/images/be-residential.png',
        alt: 'Contemporary residential living room with panelled wall',
      },
      {
        title: 'Corporate',
        line: 'Workplaces that communicate intent before a word is spoken.',
        image: '/images/be-corporate.png',
        alt: 'Corporate lobby with warm timber slat feature wall',
      },
      {
        title: 'Healthcare',
        line: 'Hygienic, durable surfaces engineered for care.',
        image: '/images/be-healthcare.png',
        alt: 'Calm healthcare reception with light timber surfaces',
      },
      {
        title: 'Education',
        line: 'Resilient environments built for daily intensity.',
        image: '/images/be-education.png',
        alt: 'Modern education interior with durable panelled walls',
      },
      {
        title: 'Commercial Buildings',
        line: 'Lobbies, lifts and common areas — transformed at scale.',
        image: '/images/be-commercial.png',
        alt: 'Commercial building lobby with architectural stone surfaces',
      },
    ],
  },
  {
    slug: 'glass-technologies',
    title: 'Glass Technologies',
    eyebrow: 'Division 02',
    headline: 'Light, engineered',
    line: 'Light, privacy and protection — engineered into glass.',
    overview:
      'Architectural films that control light, heat, privacy and safety. Invisible engineering with measurable performance.',
    hero: '/images/div-glass.png',
    heroAlt: 'Smart switchable glass partition detail',
    services: [
      {
        title: 'Privacy Films',
        line: 'Gradient and frosted systems for discreet separation.',
        image: '/images/gt-privacy.png',
        alt: 'Office partition with gradient frosted privacy film',
      },
      {
        title: 'Solar Control',
        line: 'Heat and glare, managed without losing the view.',
        image: '/images/gt-solar.png',
        alt: 'Floor-to-ceiling glazing with solar control film and soft light',
      },
      {
        title: 'Safety Films',
        line: 'Invisible reinforcement for glass under stress.',
        image: '/images/gt-safety.png',
        alt: 'Laminated architectural safety glass detail',
      },
      {
        title: 'Decorative Glass',
        line: 'Pattern and texture, applied with restraint.',
        image: '/images/gt-decorative.png',
        alt: 'Decorative etched glass panel with linear pattern',
      },
    ],
  },
  {
    slug: 'visual-communications',
    title: 'Visual Communications',
    eyebrow: 'Division 03',
    headline: 'Clarity, applied',
    line: 'Environments that speak with clarity and restraint.',
    overview:
      'Brand carried across fleets, facades and interiors — designed once, executed consistently, engineered to endure.',
    hero: '/images/div-visual.png',
    heroAlt: 'Premium retail storefront with minimal window graphics',
    services: [
      {
        title: 'Fleet Branding',
        line: 'Every vehicle, a moving expression of the brand.',
        image: '/images/vc-fleet.png',
        alt: 'Fleet of vans with minimal midnight blue brand livery',
      },
      {
        title: 'Shopfront Branding',
        line: 'First impressions, composed with precision.',
        image: '/images/vc-shopfront.png',
        alt: 'Elegant boutique shopfront with restrained brand graphics',
      },
      {
        title: 'Wayfinding',
        line: 'Navigation that never raises its voice.',
        image: '/images/vc-wayfinding.png',
        alt: 'Minimal architectural wayfinding signage in a corporate atrium',
      },
      {
        title: 'Window Graphics',
        line: 'Glazing as a quiet communication surface.',
        image: '/images/vc-window.png',
        alt: 'Storefront glazing with subtle frosted window graphics',
      },
    ],
  },
  {
    slug: 'mobility',
    title: 'Mobility',
    eyebrow: 'Division 04',
    headline: 'Motion, protected',
    line: 'Precision surface craft for vehicles of every scale.',
    overview:
      'Paint protection, colour change and tint for road, water and air. Applied in controlled conditions, finished to concours standard.',
    hero: '/images/div-mobility.png',
    heroAlt: 'Luxury vehicle detail with satin protection wrap',
    services: [
      {
        title: 'Paint Protection Film',
        line: 'Invisible armour for factory paint.',
        image: '/images/mb-ppf.png',
        alt: 'Paint protection film being finished on a luxury car bonnet',
      },
      {
        title: 'Wraps',
        line: 'Colour change with a factory-level finish.',
        image: '/images/mb-wraps.png',
        alt: 'Luxury car in satin colour-change wrap under studio light',
      },
      {
        title: 'Tint',
        line: 'Comfort, privacy and protection in every pane.',
        image: '/images/mb-tint.png',
        alt: 'Luxury vehicle with precision-tinted glass',
      },
      {
        title: 'Marine',
        line: 'Hull and superstructure surfaces, sea-proofed.',
        image: '/images/mb-marine.png',
        alt: 'Yacht hull with premium protective wrap at a marina',
      },
      {
        title: 'Aircraft',
        line: 'Aviation-grade finishes for private aircraft.',
        image: '/images/mb-aircraft.png',
        alt: 'Private jet fuselage detail with premium livery',
      },
      {
        title: 'Luxury Vehicles',
        line: 'Bespoke treatment for exceptional machines.',
        image: '/images/mb-luxury.png',
        alt: 'Exotic luxury vehicle in a minimal studio environment',
      },
    ],
  },
]

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug)
}
