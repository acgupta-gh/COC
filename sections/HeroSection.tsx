import { GridTexture, CopperGlow } from '@/components/ui/GridTexture'
import { buttonVariants }          from '@/components/ui/Button'

// ── Data ──────────────────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  { icon: <IconPerson />, label: '30+ Years of Teaching'      },
  { icon: <IconGroup  />, label: '3000+ Students Mentored'    },
  { icon: <IconStar   />, label: 'Countless Success Stories'  },
]

const SUBJECTS = [
  { label: 'Accountancy', icon: <IconCalculator /> },
  { label: 'Economics',   icon: <IconChart />      },
  { label: 'CUET',        icon: <IconGradCap />    },
  { label: 'APs',         icon: <IconBook />       },
]

// ── CTA icons ─────────────────────────────────────────────────────────────────

function IconWhatsApp() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

function IconEnvelope() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

// ── Subject card icons ────────────────────────────────────────────────────────

function IconCalculator() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <line x1="8" y1="6" x2="16" y2="6"/>
      <rect x="7.5" y="10" width="2.5" height="2.5" rx=".5"/>
      <rect x="10.75" y="10" width="2.5" height="2.5" rx=".5"/>
      <rect x="14" y="10" width="2.5" height="2.5" rx=".5"/>
      <rect x="7.5" y="14" width="2.5" height="2.5" rx=".5"/>
      <rect x="10.75" y="14" width="2.5" height="2.5" rx=".5"/>
      <rect x="14" y="14" width="2.5" height="4.5" rx=".5"/>
      <rect x="7.5" y="18" width="2.5" height="0.5" rx=".25"/>
      <rect x="10.75" y="18" width="2.5" height="0.5" rx=".25"/>
    </svg>
  )
}

function IconChart() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="20" x2="21" y2="20"/>
      <rect x="5"  y="14" width="3.5" height="6" rx=".5"/>
      <rect x="10.25" y="9" width="3.5" height="11" rx=".5"/>
      <rect x="15.5" y="4" width="3.5" height="16" rx=".5"/>
    </svg>
  )
}

function IconGradCap() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6"/>
      <path d="M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12.5v5c0 0 2.5 2.5 6 2.5s6-2.5 6-2.5v-5"/>
    </svg>
  )
}

function IconBook() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  )
}

// ── Trust bar icons ───────────────────────────────────────────────────────────

function IconPerson() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4"/>
      <path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
    </svg>
  )
}

function IconGroup() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="3.5"/>
      <path d="M2 21v-.5A6.5 6.5 0 0 1 15.5 20.5V21"/>
      <circle cx="18" cy="8" r="2.5"/>
      <path d="M15 21a5 5 0 0 1 7 0"/>
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Concepts of Commerce — Hero"
      className="relative flex flex-col overflow-hidden bg-transparent"
      style={{ minHeight: '100svh' }}
    >
      <GridTexture cellSize={52} opacity={0.038} />
      <CopperGlow intensity={0.12} />

      <span
        aria-hidden="true"
        className="absolute top-24 right-6 md:right-10 z-10 font-body text-[0.6rem] font-medium tracking-[0.2em] text-coc-ivory/[0.10] select-none"
      >
        01
      </span>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div
        className="container relative z-10 flex flex-col items-center text-center justify-center flex-1"
        style={{ paddingTop: 'calc(7rem + 36px)', paddingBottom: '3rem' }}
      >

        {/* Preheading — rules stretch full headline width */}
        <div
          className="flex items-center justify-center gap-4 w-full animate-fade-up"
          style={{ marginBottom: 'clamp(2rem, 4vh, 2.75rem)', animationDelay: '0ms', animationFillMode: 'both' }}
        >
          <div className="h-px flex-1 bg-coc-accent/50" aria-hidden="true" />
          <span className="font-body text-[0.6rem] font-medium tracking-[0.24em] uppercase text-coc-accent whitespace-nowrap">
            Concepts of Commerce · By AC Gupta
          </span>
          <div className="h-px flex-1 bg-coc-accent/50" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-bold text-coc-ivory animate-fade-up"
          style={{
            fontSize:          'clamp(2.5rem, 6.5vw, 5.5rem)',
            lineHeight:        '1.06',
            letterSpacing:     '-0.02em',
            animationDelay:    '80ms',
            animationFillMode: 'both',
          }}
        >
          Strong <em className="text-coc-accent">Concepts,</em><br />
          Confident <em className="text-coc-accent">Results.</em>
        </h1>

        {/* Copper rule */}
        <div
          aria-hidden="true"
          className="w-12 h-px bg-coc-accent/50 animate-fade-up"
          style={{ marginTop: 'clamp(1.25rem, 2.5vh, 1.75rem)', animationDelay: '140ms', animationFillMode: 'both' }}
        />

        {/* Tagline */}
        <p
          className="font-heading font-normal text-coc-muted/80 animate-fade-up"
          style={{
            fontSize:          'clamp(1rem, 2.2vw, 1.625rem)',
            lineHeight:        '1.45',
            fontStyle:         'italic',
            letterSpacing:     '0.005em',
            marginTop:         'clamp(1rem, 2vh, 1.375rem)',
            animationDelay:    '180ms',
            animationFillMode: 'both',
          }}
        >
          Learn deeply. Think critically. Excel confidently.
        </p>

        {/* Lead paragraph — vw-based max-width tracks headline width across viewports */}
        <p
          className="font-lora font-normal text-coc-ivory/70 leading-[1.62] animate-fade-up"
          style={{
            fontSize:          'clamp(0.9375rem, 1.65vw, 1.25rem)',
            maxWidth:          'clamp(16rem, 54vw, 45rem)',
            marginTop:         'clamp(1.125rem, 2.5vh, 1.625rem)',
            animationDelay:    '240ms',
            animationFillMode: 'both',
          }}
        >
          A calm academic studio for Class 11–12 commerce students, CUET aspirants,
          and AP learners who need stronger concepts, better writing, and steady exam confidence.
        </p>

        {/* Primary CTAs — each button pops in individually */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-[0.875rem]"
          style={{ marginTop: 'clamp(2rem, 4vh, 2.75rem)' }}
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'primary', size: 'md' }) + ' animate-pop-in'}
            style={{ animationDelay: '300ms', animationFillMode: 'both' }}
          >
            <IconWhatsApp />
            WhatsApp
          </a>
          <a
            href="/#contact"
            className={buttonVariants({ variant: 'ghost', size: 'md' }) + ' animate-pop-in'}
            style={{ animationDelay: '420ms', animationFillMode: 'both' }}
          >
            Connect
            <IconArrow />
          </a>
          <a
            href="/#contact"
            className={buttonVariants({ variant: 'outline', size: 'md' }) + ' animate-pop-in'}
            style={{ animationDelay: '540ms', animationFillMode: 'both' }}
          >
            <IconEnvelope />
            Enquire
          </a>
        </div>

        {/* ── Expert Mentorship In — full-width ruled label + icon cards ─── */}
        <div
          className="w-full animate-fade-up"
          style={{
            marginTop:         'clamp(2.5rem, 5vh, 3.5rem)',
            animationDelay:    '360ms',
            animationFillMode: 'both',
          }}
        >
          {/* Full-width ruled label — copper, same visual width as CTAs */}
          <div className="flex items-center gap-4 mb-5 md:mb-6 max-w-[26rem] mx-auto w-full">
            <div className="h-px flex-1 bg-coc-accent/30" aria-hidden="true" />
            <span className="font-body text-[0.6rem] font-semibold tracking-[0.26em] uppercase text-coc-accent flex-shrink-0 px-1">
              Expert Mentorship In
            </span>
            <div className="h-px flex-1 bg-coc-accent/30" aria-hidden="true" />
          </div>

          {/* Icon cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {SUBJECTS.map(({ label, icon }) => (
              <a
                key={label}
                href="/#learning"
                className="group flex flex-col items-center justify-center gap-3 py-7 px-4 rounded-[4px] border transition-all duration-300 bg-coc-secondary/60 border-coc-accent/[0.28] hover:border-coc-accent/[0.65] hover:bg-coc-card/80"
              >
                <span className="text-coc-accent transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </span>
                <span className="font-body text-[0.625rem] font-medium tracking-[0.22em] uppercase text-coc-ivory/60 group-hover:text-coc-ivory transition-colors duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Trust bar ────────────────────────────────────────────────────── */}
      <div className="relative z-10" aria-label="Trust indicators">
        {/* Copper dot above the rule */}
        <div className="flex justify-center mb-[-4px]">
          <div className="w-[5px] h-[5px] rounded-full bg-coc-accent/60" aria-hidden="true" />
        </div>

        <div className="border-t border-coc-ivory/[0.07]">
          <div className="container">
            {/* Trust items — copper, bold, single row, matching CTA width */}
            <div className="flex flex-row items-center justify-center py-5 md:py-[1.375rem] max-w-[44rem] mx-auto w-full">
              {TRUST_ITEMS.map(({ icon, label }, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      className="w-px h-3 bg-coc-accent/25 mx-5 md:mx-7 flex-shrink-0"
                    />
                  )}
                  <div className="flex items-center gap-[0.45rem]">
                    <span className="text-coc-accent flex-shrink-0">{icon}</span>
                    <span className="font-body text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-coc-accent whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
