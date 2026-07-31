import { Reveal } from '@/components/reveal'
import { LogoMark } from '@/components/logo'

export function Manifesto() {
  return (
    <section id="studio" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-44">
        <Reveal>
          <LogoMark inverted className="mx-auto mb-12 size-14" />
        </Reveal>
        <Reveal delay={100}>
          <p className="font-serif text-3xl font-light leading-snug text-balance md:text-5xl">
            Every surface carries intention. We work where architecture meets
            material — transforming walls, glass and vehicles into assets that
            endure.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-primary-foreground/60">
            Craft over decoration. Engineering over ornament. Longevity over
            trend. This is surface transformation, practised with precision and
            restraint.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <dl className="mt-20 grid grid-cols-3 gap-8 border-t border-primary-foreground/15 pt-12">
            {[
              { value: '4', label: 'Divisions' },
              { value: '120+', label: 'Environments Transformed' },
              { value: '10 yr', label: 'Material Warranties' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-4xl font-light md:text-5xl">
                  {stat.value}
                </dd>
                <dd className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-primary-foreground/50">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
