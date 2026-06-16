import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Badge } from '@/components/ui/Badge'
import { TagBadge } from '@/components/ui/Badge'
import { GridTexture } from '@/components/ui/GridTexture'
import { buttonVariants } from '@/components/ui/Button'
import { LEARNING_AREAS } from '@/lib/constants'
import type { LearningArea } from '@/lib/types'

/**
 * LearningAreasSection — showcase of the five learning domains.
 *
 * Layout:
 *   Row 1: Accountancy | Economics | Business Studies  (subject cards, 3-col)
 *   Row 2: Class XI    | Class XII                     (class cards, 2-col, wider)
 *
 * Cards have:
 *   - Icon glyph in bordered container
 *   - Section number (top-right, faint)
 *   - Cormorant title
 *   - Inter description
 *   - Tag chips
 *   - Copper underline reveal on hover
 */

// ── Individual card ────────────────────────────────────────────────────────────

function AreaCard({
  area,
  index,
}: {
  area:  LearningArea
  index: number
}) {
  return (
    <article
      className={
        'group/card relative flex flex-col gap-4 ' +
        'bg-coc-secondary hover:bg-coc-card ' +
        'border border-coc-ivory/[0.06] hover:border-coc-ivory/[0.10] ' +
        'rounded-[4px] p-7 lg:p-8 ' +
        'overflow-hidden ' +
        'transition-all duration-350 ease-coc ' +
        'cursor-default'
      }
      aria-label={area.title}
    >
      {/* Copper underline reveal on hover */}
      <span
        aria-hidden="true"
        className={
          'absolute bottom-0 left-0 right-0 h-[2px] bg-coc-accent ' +
          'scale-x-0 group-hover/card:scale-x-100 ' +
          'transition-transform duration-350 ease-coc origin-left'
        }
      />

      {/* Subtle corner glow on hover */}
      <span
        aria-hidden="true"
        className={
          'absolute top-0 right-0 w-32 h-32 pointer-events-none ' +
          'opacity-0 group-hover/card:opacity-100 transition-opacity duration-400'
        }
        style={{
          background: 'radial-gradient(circle at top right, rgba(184,115,51,0.07), transparent 70%)',
        }}
      />

      {/* Icon + Number row */}
      <div className="flex items-start justify-between">
        <div
          className={
            'w-10 h-10 flex items-center justify-center ' +
            'border border-coc-ivory/[0.08] group-hover/card:border-coc-accent/30 ' +
            'rounded-[3px] text-coc-ivory/60 group-hover/card:text-coc-accent ' +
            'transition-all duration-300 ' +
            'font-heading text-xl'
          }
          aria-hidden="true"
        >
          {area.icon}
        </div>
        <span
          aria-hidden="true"
          className="font-body text-[0.6rem] font-medium tracking-[0.15em] text-coc-ivory/18 select-none mt-0.5"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-heading font-medium text-coc-ivory group-hover/card:text-coc-ivory transition-colors duration-250"
        style={{
          fontSize:   'clamp(1.125rem, 2vw, 1.4375rem)',
          lineHeight: '1.15',
        }}
      >
        {area.title}
      </h3>

      {/* Description */}
      <p className="font-body text-[0.875rem] font-light leading-[1.75] text-coc-ivory/45 flex-1">
        {area.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-[0.375rem] mt-auto" aria-label="Topics covered">
        {area.tags.map((tag) => (
          <TagBadge key={tag}>{tag}</TagBadge>
        ))}
      </div>

      {/* Classes covered badge */}
      <div className="flex items-center justify-between mt-1">
        <span className="font-body text-[0.625rem] font-medium tracking-[0.14em] uppercase text-coc-accent/70">
          {area.classes}
        </span>
        <span
          aria-hidden="true"
          className="text-coc-ivory/20 group-hover/card:text-coc-accent transition-colors duration-250 text-sm"
        >
          →
        </span>
      </div>
    </article>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export function LearningAreasSection() {
  const subjects    = LEARNING_AREAS.filter((a) => !a.isClass)
  const classLevels = LEARNING_AREAS.filter((a) => a.isClass)
  const allAreas    = LEARNING_AREAS

  return (
    <SectionWrapper
      id="learning"
      ariaLabel="Learning Areas"
      alternate
      className="relative"
    >
      {/* Background texture (slightly lighter on secondary bg) */}
      <GridTexture cellSize={52} opacity={0.025} fade />

      {/* Section index */}
      <span
        aria-hidden="true"
        className="absolute top-8 right-6 md:right-10 font-body text-[0.6rem] font-medium tracking-[0.2em] text-coc-ivory/12 select-none"
      >
        03 / LEARNING
      </span>

      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center mb-14 md:mb-20">
        <Badge>What We Teach</Badge>

        <h2
          className="font-heading font-normal text-coc-ivory mt-4"
          style={{
            fontSize:      'clamp(2rem, 5vw, 3.75rem)',
            lineHeight:    '1.08',
            letterSpacing: '-0.005em',
          }}
        >
          Five Areas.<br />
          <em className="text-coc-accent">One Standard.</em>
        </h2>

        <p
          className="mt-5 font-body font-light text-coc-ivory/45 max-w-[52ch] leading-[1.78]"
          style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
        >
          Each subject taught as a discipline worth understanding —
          not a paper worth clearing. Every concept explained until it is inevitable,
          not just recognisable.
        </p>
      </div>

      {/* ── Cards grid ─────────────────────────────────────────────────── */}

      {/* Subject cards: 3 columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-coc-ivory/[0.05] rounded-t-[5px] overflow-hidden border border-b-0 border-coc-ivory/[0.06]">
        {subjects.map((area, i) => (
          <div key={area.id} className="bg-coc-secondary">
            <AreaCard area={area} index={i} />
          </div>
        ))}
      </div>

      {/* Class level cards: 2 columns — visually connected */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-coc-ivory/[0.05] rounded-b-[5px] overflow-hidden border border-t-0 border-coc-ivory/[0.06]">
        {classLevels.map((area, i) => (
          <div key={area.id} className="bg-coc-secondary">
            <AreaCard area={area} index={subjects.length + i} />
          </div>
        ))}
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <div className="flex justify-center mt-12 md:mt-16">
        <a
          href="/#contact"
          className={buttonVariants({ variant: 'ghost', size: 'md' })}
        >
          Join COC — Enrol Now
        </a>
      </div>

    </SectionWrapper>
  )
}
