/**
 * StatementSection — full-width typographic statement.
 *
 * This is the visual equivalent of SFC's "Ethos" section:
 * a dramatic full-width centred statement in large Cormorant italic
 * with maximum whitespace and a copper accent.
 *
 * It breaks the card/column rhythm of the page and creates
 * a memorable visual anchor mid-scroll.
 */

import { GridTexture } from '@/components/ui/GridTexture'

export function StatementSection() {
  return (
    <section
      id="statement"
      aria-label="COC Philosophy"
      className="relative overflow-hidden bg-coc-bg"
      style={{ paddingTop: 'clamp(5rem, 12vh, 9rem)', paddingBottom: 'clamp(5rem, 12vh, 9rem)' }}
    >
      <GridTexture cellSize={52} opacity={0.03} fade />

      {/* Faint large watermark number */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-normal text-coc-ivory/[0.02] select-none pointer-events-none"
        style={{ fontSize: 'clamp(18rem, 40vw, 36rem)', lineHeight: 1 }}
      >
        ◈
      </span>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">

          {/* Top copper rule */}
          <div className="flex items-center gap-5 mb-12">
            <div className="h-px flex-1 bg-coc-ivory/[0.06]" aria-hidden="true" />
            <span className="font-body text-[0.625rem] font-medium tracking-[0.24em] uppercase text-coc-accent">
              The COC Standard
            </span>
            <div className="h-px flex-1 bg-coc-ivory/[0.06]" aria-hidden="true" />
          </div>

          {/* THE statement */}
          <h2
            className="font-heading font-normal text-coc-ivory"
            style={{
              fontSize:      'clamp(2.25rem, 6vw, 5.5rem)',
              lineHeight:    '1.12',
              letterSpacing: '-0.01em',
            }}
          >
            Not just another<br />
            coaching centre.
          </h2>

          {/* Italic line below */}
          <p
            className="mt-6 font-heading font-normal text-coc-accent"
            style={{
              fontSize:    'clamp(1.75rem, 4vw, 3.75rem)',
              lineHeight:  '1.2',
              fontStyle:   'italic',
              letterSpacing: '-0.005em',
            }}
          >
            A standard of instruction.
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-coc-accent mt-10 mb-10" aria-hidden="true" />

          {/* Supporting lines */}
          <p
            className="font-body font-light text-coc-ivory/45 max-w-[56ch] leading-[1.85]"
            style={{ fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)' }}
          >
            Every session at COC is designed around one question:
            does this student <em className="text-coc-ivory/70 not-italic">understand</em> — or have they only memorised?
            The difference is everything.
          </p>

          {/* Three short pillars in a row */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-[1px] w-full bg-coc-ivory/[0.06] border border-coc-ivory/[0.06] rounded-[4px] overflow-hidden">
            {[
              { label: 'Conceptual Depth',    copy: 'Every topic from first principles — not from the back of the book.' },
              { label: 'Applied Rigour',      copy: 'Real numbers, real cases, real business logic — not abstract theory.' },
              { label: 'Examination Clarity', copy: 'Board preparation built on understanding — not on template repetition.' },
            ].map((item) => (
              <div key={item.label} className="bg-coc-bg px-7 py-7 text-left">
                <p className="font-body text-[0.625rem] font-medium uppercase tracking-[0.2em] text-coc-accent mb-3">
                  {item.label}
                </p>
                <p className="font-body text-[0.875rem] font-light leading-[1.72] text-coc-ivory/42">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom rule */}
          <div className="flex items-center gap-5 mt-12">
            <div className="h-px flex-1 bg-coc-ivory/[0.06]" aria-hidden="true" />
            <span className="font-body text-[0.6rem] font-medium tracking-[0.22em] uppercase text-coc-ivory/22">
              Concepts of Commerce · By AC Gupta
            </span>
            <div className="h-px flex-1 bg-coc-ivory/[0.06]" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  )
}
