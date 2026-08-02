'use client'

import { useState, type FormEvent } from 'react'
import { divisions } from '@/lib/site-data'

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Aurexis consultation — ${String(form.get('division'))}`)
    const body = encodeURIComponent(
      `Name: ${String(form.get('name'))}\nEmail: ${String(form.get('email'))}\nPhone: ${String(form.get('phone') || 'Not supplied')}\nDivision: ${String(form.get('division'))}\n\nProject:\n${String(form.get('message'))}`,
    )
    window.location.href = `mailto:aurexiscorp@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
        <p className="font-serif text-3xl font-light">Thank you</p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
          Your consultation request has been received. We&apos;ll be in touch
          within one working day.
        </p>
      </div>
    )
  }

  return (
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
        Phone <span className="normal-case tracking-normal text-muted-foreground/70">(optional)</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
        />
      </label>
      <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        Division
        <select
          name="division"
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary"
        >
          {divisions.map((division) => (
            <option key={division.slug}>{division.title}</option>
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
  )
}
