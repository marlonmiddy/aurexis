import Image from 'next/image'

export function PageHero({
  eyebrow,
  title,
  line,
  image,
  imageAlt,
  compact = false,
}: {
  eyebrow: string
  title: string
  line?: string
  image?: string
  imageAlt?: string
  compact?: boolean
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-primary text-primary-foreground ${
        compact ? 'min-h-[52svh]' : 'min-h-[68svh]'
      }`}
    >
      {image ? (
        <>
          <Image
            src={image || '/placeholder.svg'}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:pb-24">
        <p className="animate-in fade-in slide-in-from-bottom-2 text-[0.65rem] font-medium uppercase tracking-[0.5em] text-primary-foreground/55 duration-1000">
          {eyebrow}
        </p>
        <h1 className="animate-in fade-in slide-in-from-bottom-4 mt-6 max-w-4xl font-serif text-5xl font-light leading-[1.05] text-balance duration-1000 md:text-7xl">
          {title}
        </h1>
        {line ? (
          <p className="animate-in fade-in slide-in-from-bottom-4 mt-6 max-w-md text-sm font-light leading-relaxed text-primary-foreground/70 duration-1000">
            {line}
          </p>
        ) : null}
      </div>
    </section>
  )
}
