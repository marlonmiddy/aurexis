import {
  Compass,
  PenTool,
  FileCheck,
  Factory,
  Wrench,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: Compass, title: 'Discover', line: 'Understanding space, use and ambition.' },
  { icon: PenTool, title: 'Design', line: 'Material direction with intent.' },
  { icon: FileCheck, title: 'Specify', line: 'Engineered documentation.' },
  { icon: Factory, title: 'Produce', line: 'Precision fabrication.' },
  { icon: Wrench, title: 'Install', line: 'Craft on site, without disruption.' },
  { icon: ShieldCheck, title: 'Support', line: 'Warranted for the long term.' },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
            The Process
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
            Six steps. No surprises.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 80}>
              <div className="glass lift flex h-full flex-col rounded-3xl p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-xl text-muted-foreground/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-normal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.line}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
