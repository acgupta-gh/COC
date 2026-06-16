import type { ReactNode, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * SectionWrapper — consistent section padding and max-width container.
 *
 * Every homepage section uses this for uniform vertical rhythm.
 * Swap section order in page.tsx — padding stays consistent.
 */

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children:     ReactNode
  /** HTML id for in-page navigation anchors */
  id?:          string
  /** Accessible label for screen readers */
  ariaLabel?:   string
  /** Alternate teal background (#16393A) */
  alternate?:   boolean
  /** Extra padding multiplier — 'tight' collapses vertical space */
  spacing?:     'default' | 'tight' | 'loose'
  className?:   string
  innerClass?:  string
}

const SPACING_MAP = {
  tight:   'py-14 md:py-20',
  default: 'py-20 md:py-28 lg:py-[8.5rem]',
  loose:   'py-28 md:py-36',
}

export function SectionWrapper({
  children,
  id,
  ariaLabel,
  alternate = false,
  spacing   = 'default',
  className,
  innerClass,
  ...rest
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        'relative overflow-hidden w-full',
        alternate ? 'bg-coc-secondary' : 'bg-coc-bg',
        SPACING_MAP[spacing],
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          'container relative z-10',
          innerClass
        )}
      >
        {children}
      </div>
    </section>
  )
}
