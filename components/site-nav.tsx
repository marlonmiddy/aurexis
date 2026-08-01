'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { Logo, LogoMark } from '@/components/logo'
import { company, divisions } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const pages = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/warranty', label: 'Warranty' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  // Close on route change
  useEffect(() => {
    close()
  }, [pathname, close])

  // Lock scroll + escape to close
  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  const light = scrolled && !open

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <nav
          aria-label="Main"
          className={cn(
            'flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-700 md:px-6',
            light ? 'glass' : 'border border-transparent bg-transparent',
          )}
        >
          <Link href="/" aria-label="Aurexis home" onClick={close}>
            <span className="hidden md:block">
              <Logo inverted={!light} />
            </span>
            <span className="md:hidden">
              <LogoMark inverted={!light} />
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className={cn(
                'hidden rounded-xl px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-500 sm:block',
                light
                  ? 'bg-primary text-primary-foreground hover:opacity-90'
                  : 'glass-dark text-primary-foreground hover:bg-primary/60',
              )}
            >
              Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="fullscreen-menu"
              className={cn(
                'flex items-center gap-3 rounded-xl px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-500',
                light
                  ? 'border border-border text-foreground hover:bg-secondary'
                  : 'border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10',
              )}
            >
              <span className="relative flex h-2.5 w-5 flex-col justify-between" aria-hidden="true">
                <span
                  className={cn(
                    'h-px w-full bg-current transition-transform duration-500',
                    open && 'translate-y-[4.5px] rotate-45',
                  )}
                />
                <span
                  className={cn(
                    'h-px w-full bg-current transition-transform duration-500',
                    open && '-translate-y-[4.5px] -rotate-45',
                  )}
                />
              </span>
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen luxury menu */}
      <div
        id="fullscreen-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          'fixed inset-0 z-40 transition-all duration-700',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <div className="menu-backdrop absolute inset-0" onClick={close} aria-hidden="true" />

        <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28 md:px-12 md:pt-36">
          <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12 md:gap-8">
            {/* Divisions */}
            <nav aria-label="Divisions" className="md:col-span-7">
              <p
                className={cn(
                  'menu-item mb-8 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/40',
                  open && 'is-open',
                )}
                style={{ '--menu-delay': '100ms' } as React.CSSProperties}
              >
                Divisions
              </p>
              <ul className="flex flex-col">
                {divisions.map((division, i) => (
                  <li key={division.slug}>
                    <Link
                      href={`/divisions/${division.slug}`}
                      onClick={close}
                      className={cn(
                        'menu-item group flex items-baseline gap-4 border-b border-primary-foreground/10 py-4 md:py-5',
                        open && 'is-open',
                      )}
                      style={{ '--menu-delay': `${180 + i * 90}ms` } as React.CSSProperties}
                    >
                      <span className="text-[0.65rem] font-medium tracking-[0.2em] text-primary-foreground/35">
                        0{i + 1}
                      </span>
                      <span className="font-serif text-3xl font-light text-primary-foreground transition-colors duration-500 group-hover:text-primary-foreground/70 md:text-5xl">
                        {division.title}
                      </span>
                      <ArrowUpRight
                        className="ml-auto size-5 shrink-0 self-center text-primary-foreground/30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-foreground"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Pages + contact */}
            <div className="flex flex-col gap-12 md:col-span-4 md:col-start-9">
              <nav aria-label="Pages">
                <p
                  className={cn(
                    'menu-item mb-6 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/40',
                    open && 'is-open',
                  )}
                  style={{ '--menu-delay': '250ms' } as React.CSSProperties}
                >
                  Company
                </p>
                <ul className="flex flex-col gap-3.5">
                  {pages.map((page, i) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        onClick={close}
                        className={cn(
                          'menu-item text-lg font-light text-primary-foreground/80 transition-colors duration-300 hover:text-primary-foreground',
                          open && 'is-open',
                        )}
                        style={{ '--menu-delay': `${320 + i * 70}ms` } as React.CSSProperties}
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div
                className={cn('menu-item flex flex-col gap-4', open && 'is-open')}
                style={{ '--menu-delay': '620ms' } as React.CSSProperties}
              >
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/40">
                  Enquiries
                </p>
                <a
                  href={company.phoneHref}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {company.email}
                </a>
                <Link
                  href="/contact"
                  onClick={close}
                  className="glass-dark lift mt-2 inline-flex w-fit items-center gap-2 rounded-2xl px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground"
                >
                  Book Consultation
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div
            className={cn(
              'menu-item mx-auto mt-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 pt-16 text-[0.65rem] uppercase tracking-[0.25em] text-primary-foreground/35',
              open && 'is-open',
            )}
            style={{ '--menu-delay': '720ms' } as React.CSSProperties}
          >
            <span>Cape Town · Victoria Falls</span>
            <a
              href={company.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary-foreground"
            >
              Instagram {company.instagram}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
