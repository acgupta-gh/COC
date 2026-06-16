import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Badge — eyebrow label component.
 * Used above section headings to provide context/category.
 *
 * Renders: [──] LABEL TEXT
 */

interface BadgeProps {
  children:  ReactNode
  className?: string
  /** Show leading copper rule (default: true) */
  showRule?: boolean
}

export function Badge({ children, className, showRule = true }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-[0.625rem]',
        'font-body text-eyebrow font-medium uppercase tracking-[0.22em] text-coc-accent',
        className
      )}
    >
      {showRule && (
        <span
          aria-hidden="true"
          className="block h-px w-7 flex-shrink-0 bg-coc-accent"
        />
      )}
      {children}
    </div>
  )
}

/**
 * TagBadge — small bordered tag used inside cards.
 */
export function TagBadge({ children }: { children: ReactNode }) {
  return (
    <span
      className={
        'inline-block font-body text-[0.625rem] font-medium uppercase ' +
        'tracking-[0.12em] text-coc-ivory/30 ' +
        'border border-coc-ivory/[0.08] rounded-[2px] px-[0.5rem] py-[0.2rem] ' +
        'transition-colors duration-250 group-hover/card:text-coc-ivory/50 ' +
        'group-hover/card:border-coc-ivory/[0.13]'
      }
    >
      {children}
    </span>
  )
}
