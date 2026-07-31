'use client'

import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/reveal'

const divisionOptions = [
  'Built Environments',
  'Glass Technologies',
  'Visual Communications',
  'Mobility',
]

export function Consultation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="consultation" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
            Consultation
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
            Begin the transformation
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A conversation, not a quotation. Tell us about your environment and
            we&apos;ll respond within one working day.
          </p>

          <dl className="mt-12 space-y-6 border-t border-border pt-10 text-sm">
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Studio
              </dt>
              <dd className="mt-1.5">12 Merchant Quarter, Birmingham, B1 2AA</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Enquiries
              </dt>
              <dd className="mt-1.5">studio@aurexis.com · +44 (0)121 000 0000</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <div className="glass rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <p className="font-serif text-3xl font-light">Thank you</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Your consultation request has been received. We&apos;ll be in
                  touch within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Division
                  <select
                    name="division"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
                  >
                    {divisionOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Your project
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
                <button
                  type="submit"
                  className="lift mt-2 rounded-xl bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
