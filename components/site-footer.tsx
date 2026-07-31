import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo inverted />
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-primary-foreground/50">
            Built environments. Glass technologies. Visual communications.
            Mobility.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { href: '#divisions', label: 'Divisions' },
            { href: '#studio', label: 'Studio' },
            { href: '#projects', label: 'Projects' },
            { href: '#process', label: 'Process' },
            { href: '#consultation', label: 'Consultation' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/35">
          © {new Date().getFullYear()} Aurexis Surface Transformations
        </p>
      </div>
    </footer>
  )
}
