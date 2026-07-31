'use client'

import { useEffect, useState } from 'react'
import { Logo, LogoMark } from '@/components/logo'
import { cn } from '@/lib/utils'

const links = [
  { href: '#divisions', label: 'Divisions' },
  { href: '#studio', label: 'Studio' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        aria-label="Main"
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-700 md:px-6',
          scrolled ? 'glass' : 'border border-transparent bg-transparent',
        )}
      >
        <a href="#top" aria-label="Aurexis home">
          <span className="hidden md:block">
            <Logo inverted={!scrolled} />
          </span>
          <span className="md:hidden">
            <LogoMark inverted={!scrolled} />
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-500',
                scrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-primary-foreground/70 hover:text-primary-foreground',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#consultation"
          className={cn(
            'rounded-xl px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-500',
            scrolled
              ? 'bg-primary text-primary-foreground hover:opacity-90'
              : 'glass-dark text-primary-foreground hover:bg-primary/60',
          )}
        >
          Consultation
        </a>
      </nav>
    </header>
  )
}
