import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export type LegalSection = { id: string; title: string; paragraphs: string[] }
export function LegalPage({ eyebrow, title, intro, updated, sections }: { eyebrow: string; title: string; intro: string; updated: string; sections: LegalSection[] }) {
  return <><SiteNav /><main><PageHero eyebrow={eyebrow} title={title} line={intro} compact /><div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-12 md:py-32"><aside className="md:col-span-3"><p className="text-label text-muted-foreground">Effective {updated}</p><nav aria-label="On this page" className="mt-8 hidden md:block"><ul className="flex flex-col gap-3">{sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{section.title}</a></li>)}</ul></nav></aside><article className="md:col-span-8 md:col-start-5">{sections.map(section => <section id={section.id} key={section.id} className="scroll-mt-32 border-t border-border py-10 first:border-t-0 first:pt-0"><h2 className="font-serif text-3xl font-light">{section.title}</h2><div className="mt-6 flex flex-col gap-5">{section.paragraphs.map(paragraph => <p key={paragraph} className="text-sm leading-7 text-muted-foreground">{paragraph}</p>)}</div></section>)}</article></div></main><SiteFooter /></>
}
