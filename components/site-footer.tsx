import Link from 'next/link'
import { Logo } from '@/components/logo'
import { company, divisions } from '@/lib/site-data'

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/warranty', label: 'Warranty' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo inverted />
            <p className="mt-8 max-w-xs text-sm font-light leading-relaxed text-primary-foreground/55">
              A surface transformation company. Engineering better experiences
              through architecture, glass, communication and mobility.
            </p>
          </div>

          {/* Divisions */}
          <nav aria-label="Divisions" className="lg:col-span-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary-foreground/40">
              Divisions
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {divisions.map((division) => (
                <li key={division.slug}>
                  <Link
                    href={`/divisions/${division.slug}`}
                    className="text-sm font-light text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {division.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary-foreground/40">
              Company
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary-foreground/40">
              Contact
            </p>
            <address className="mt-6 flex flex-col gap-3.5 text-sm font-light not-italic text-primary-foreground/70">
              <a
                href={company.phoneHref}
                className="transition-colors hover:text-primary-foreground"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-primary-foreground"
              >
                {company.email}
              </a>
              <a
                href={company.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-foreground"
              >
                Instagram {company.instagram}
              </a>
              <span className="mt-2 text-primary-foreground/50">
                {company.offices[0].lines.join(', ')}
              </span>
              <span className="text-primary-foreground/50">
                {company.offices[1].lines.join(', ')}
              </span>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-6">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/35">
            © {new Date().getFullYear()} Aurexis Surface Transformations
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/35">
              {company.regions.join(' · ')}
            </span>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/35 transition-colors hover:text-primary-foreground/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
