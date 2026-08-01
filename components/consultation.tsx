import { Reveal } from '@/components/reveal'
import { ConsultationForm } from '@/components/consultation-form'
import { company } from '@/lib/site-data'

export function Consultation() {
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
                Cape Town
              </dt>
              <dd className="mt-1.5">{company.offices[0].lines.join(', ')}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Zimbabwe
              </dt>
              <dd className="mt-1.5">{company.offices[1].lines.join(', ')}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Enquiries
              </dt>
              <dd className="mt-1.5">
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
                {' · '}
                <a href={company.phoneHref} className="hover:text-accent">
                  {company.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <div className="glass rounded-3xl p-8 md:p-10">
            <ConsultationForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
