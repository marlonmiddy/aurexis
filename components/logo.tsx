import { cn } from '@/lib/utils'

export function LogoMark({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative flex size-11 items-center justify-center rounded-xl',
        inverted
          ? 'bg-primary-foreground text-primary'
          : 'bg-primary text-primary-foreground',
        className,
      )}
    >
      {/* inner hairline frame */}
      <span className="pointer-events-none absolute inset-1 rounded-lg border border-current opacity-25" />
      <span className="font-serif text-lg font-medium leading-none tracking-tight">
        AST
      </span>
      {/* oxide red accent */}
      <span className="absolute right-1.5 top-1.5 size-1 rounded-full bg-accent" />
    </span>
  )
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark inverted={inverted} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-base font-medium tracking-[0.32em]',
            inverted ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          AUREXIS
        </span>
        <span
          className={cn(
            'mt-1.5 text-[0.55rem] font-medium uppercase tracking-[0.28em]',
            inverted ? 'text-primary-foreground/60' : 'text-muted-foreground',
          )}
        >
          Surface Transformations
        </span>
      </span>
      <span className="sr-only">Aurexis Surface Transformations</span>
    </span>
  )
}
