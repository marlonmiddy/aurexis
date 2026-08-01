import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBand({
  title = 'Begin the transformation',
  line = 'A conversation, not a quotation. We respond within one working day.',
}: {
  title?: string
  line?: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-24 md:flex-row md:items-end md:justify-between md:py-32">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/45">
            Consultation
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-primary-foreground/60">
            {line}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <Link
            href="/contact"
            className="glass-dark lift inline-flex items-center gap-3 rounded-2xl px-9 py-4.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground"
          >
            Book Consultation
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
