import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Badge } from '@/components/ui/Badge'
import { ABOUT_PILLARS } from '@/lib/constants'

/**
 * AboutSection — mission, vision, why COC exists.
 *
 * Design intent: the pull quote must be enormous — it IS the section.
 * Everything else supports it. Think of the SFC "Finance is not just
 * numbers" quote. That kind of scale and weight.
 */

export function AboutSection() {
  return (
    <SectionWrapper id="about" ariaLabel="About Concepts of Commerce">

      {/* Section index */}
      <span
        aria-hidden="true"
        className="absolute top-8 right-6 md:right-10 font-body text-[0.6rem] font-medium tracking-[0.2em] text-coc-ivory/12 select-none"
      >
        02
      </span>

      {/* ── Two-column grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-[clamp(3.5rem,9vw,8rem)] lg:items-start">

        {/* ── Left: pull quote + body ─────────────────────────────────── */}
        <div>
          <Badge>About COC</Badge>

          {/* Copper rule */}
          <div className="w-9 h-px bg-coc-accent mt-5 mb-9" aria-hidden="true" />

          {/*
           * THE pull quote — this is the visual anchor of this section.
           * It must be large enough that a visitor understands the section's
           * thesis without reading anything else.
           */}
          <h2
            className="font-heading font-normal text-coc-ivory"
            style={{
              fontSize:      'clamp(2.5rem, 5.5vw, 4.5rem)',
              lineHeight:    '1.10',
              letterSpacing: '-0.01em',
            }}
          >
            Commerce is not<br />
            a subject to clear.<br />
            It is a discipline<br />
            to <em className="text-coc-accent">master.</em>
          </h2>

          {/* Divider */}
          <div className="w-9 h-px bg-coc-ivory/12 mt-10 mb-8" aria-hidden="true" />

          {/* Body */}
          <div className="space-y-5 font-body text-[0.9375rem] font-light leading-[1.85] text-coc-ivory/48">
            <p>
              Concepts of Commerce was founded on a simple conviction: the gap between
              what students are taught in classrooms and what they actually need to
              understand is not inevitable. It is addressable — with the right instruction.
            </p>
            <p>
              We run structured sessions, applied concept discussions, and rigorous exam
              preparation that go beyond the textbook — equipping students with the
              vocabulary, analytical instincts, and confidence that define serious
              commerce thinkers.
            </p>
          </div>

          {/* Blockquote — copper left border */}
          <blockquote
            className="mt-10 pl-6 py-1"
            style={{ borderLeft: '2px solid rgb(184 115 51 / 0.55)' }}
          >
            <p
              className="font-heading font-normal text-coc-ivory/80"
              style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', lineHeight: '1.55', fontStyle: 'italic' }}
            >
              &ldquo;Commerce understood at the concept level changes how students
              think — not just how they score.&rdquo;
            </p>
            <cite className="mt-4 block font-body text-[0.625rem] font-medium tracking-[0.2em] uppercase text-coc-accent not-italic">
              — COC Founding Principle
            </cite>
          </blockquote>
        </div>

        {/* ── Right: numbered pillars ─────────────────────────────────── */}
        <div className="pt-0 lg:pt-[0.5rem]">
          <span className="font-body text-[0.6rem] font-medium uppercase tracking-[0.2em] text-coc-ivory/22">
            Our Foundation
          </span>

          <ul className="mt-7 flex flex-col" role="list">
            {ABOUT_PILLARS.map((pillar, i) => (
              <li
                key={pillar.number}
                className={[
                  'group py-7',
                  'border-b border-coc-ivory/[0.06]',
                  'hover:border-coc-accent/25',
                  'transition-colors duration-300',
                  'grid grid-cols-[2.5rem_1fr] gap-5 items-start',
                  i === 0 ? 'border-t border-coc-ivory/[0.06]' : '',
                ].join(' ')}
              >
                <span className="font-body text-[0.6rem] font-medium tracking-[0.14em] text-coc-accent pt-[0.35rem]">
                  {pillar.number}
                </span>
                <div>
                  <h3
                    className="font-heading font-medium text-coc-ivory mb-2"
                    style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.4375rem)', lineHeight: '1.18' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="font-body text-[0.875rem] font-light leading-[1.78] text-coc-ivory/42">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-body text-[0.72rem] font-normal text-coc-ivory/20 leading-[1.75] max-w-[36ch]">
            COC is led by AC Gupta — an educator committed to making expert commerce
            instruction accessible to every student.
          </p>
        </div>

      </div>
    </SectionWrapper>
  )
}
