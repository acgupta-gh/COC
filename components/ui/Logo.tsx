'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Logo — renders the COC logo image from /public/coc-logo.png.
 *
 * SETUP: Place your logo file at:
 *   coc-platform/public/coc-logo.png
 *
 * For best results on the dark teal background, provide a PNG with
 * a transparent background. If the image fails to load, a styled
 * text fallback is rendered automatically.
 *
 * Sizes: 'sm' (header/footer), 'md' (default), 'lg' (hero/splash)
 */

type LogoSize = 'sm' | 'md' | 'lg'

const SIZE_MAP: Record<LogoSize, { w: number; h: number; imgClass: string }> = {
  sm: { w: 130, h: 44, imgClass: 'h-9 w-auto'  },
  md: { w: 160, h: 54, imgClass: 'h-11 w-auto' },
  lg: { w: 200, h: 68, imgClass: 'h-14 w-auto' },
}

interface LogoProps {
  size?:      LogoSize
  className?: string
}

export function Logo({ size = 'sm', className }: LogoProps) {
  const [hasError, setHasError] = useState(false)
  const { w, h, imgClass } = SIZE_MAP[size]

  if (hasError) {
    return <LogoFallback size={size} className={className} />
  }

  return (
    <div
      className={cn('flex items-center', className)}
      aria-label="Concepts of Commerce"
    >
      <Image
        src="/coc-logo.png"
        alt="Concepts of Commerce"
        width={w}
        height={h}
        priority
        className={cn(imgClass, 'object-contain')}
        onError={() => setHasError(true)}
      />
    </div>
  )
}

// ── Text fallback ─────────────────────────────────────────────────────────────

function LogoFallback({ size, className }: LogoProps) {
  const isLarge = size === 'lg'
  return (
    <div
      className={cn('flex items-center gap-[0.6rem]', className)}
      aria-label="Concepts of Commerce"
    >
      {/* Monogram mark */}
      <div
        className={cn(
          'flex-shrink-0 border border-coc-accent rounded-[2px] ',
          'flex items-center justify-center ',
          'font-heading text-coc-accent font-semibold leading-none ',
          isLarge ? 'w-10 h-10 text-xl' : 'w-8 h-8 text-base'
        )}
        aria-hidden="true"
      >
        ◈
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading font-semibold text-coc-ivory tracking-[0.04em]',
            isLarge ? 'text-lg' : 'text-[1rem]'
          )}
        >
          Concepts of Commerce
        </span>
        <span
          className={cn(
            'font-body font-normal uppercase tracking-[0.18em] text-coc-muted/55',
            isLarge ? 'text-[0.65rem] mt-[0.25rem]' : 'text-[0.56rem] mt-[0.2rem]'
          )}
        >
          COC · By AC Gupta
        </span>
      </div>
    </div>
  )
}
