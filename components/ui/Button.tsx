import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

// ── Variant system ─────────────────────────────────────────────────────────────

type Variant = 'primary' | 'ghost' | 'outline'
type Size    = 'sm' | 'md' | 'lg'

const BASE =
  'inline-flex items-center justify-center gap-2 font-body font-medium ' +
  'tracking-[0.06em] transition-all duration-300 ease-coc rounded-[3px] ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coc-accent ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-coc-bg ' +
  'disabled:pointer-events-none disabled:opacity-40'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-coc-accent text-coc-bg ' +
    'hover:bg-coc-accent-light hover:-translate-y-px ' +
    'hover:shadow-[0_8px_28px_rgb(201_168_122_/_0.28)] active:translate-y-0',

  ghost:
    'border border-coc-accent/40 text-coc-ivory ' +
    'hover:border-coc-accent hover:text-coc-accent hover:-translate-y-px ' +
    'active:translate-y-0',

  outline:
    'border border-coc-ivory/10 text-coc-muted ' +
    'hover:border-coc-ivory/25 hover:text-coc-ivory ' +
    'active:scale-[0.98]',
}

const SIZES: Record<Size, string> = {
  sm: 'text-[0.75rem] py-[0.5625rem] px-5',
  md: 'text-[0.8125rem] py-3 px-7',
  lg: 'text-[0.875rem] py-[0.875rem] px-9',
}

// ── buttonVariants helper ──────────────────────────────────────────────────────
// Export this so any element (a, Link, div) can look like a Button

export interface ButtonVariantProps {
  variant?:   Variant
  size?:      Size
  className?: string
}

export function buttonVariants({
  variant   = 'primary',
  size      = 'md',
  className = '',
}: ButtonVariantProps = {}): string {
  return cn(BASE, VARIANTS[variant], SIZES[size], className)
}

// ── Button component ───────────────────────────────────────────────────────────

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  children: ReactNode
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  )
}
