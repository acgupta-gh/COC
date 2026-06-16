import Link from 'next/link'
import Image from 'next/image'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconPhone() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// ── Mentorship subject icons ───────────────────────────────────────────────────

function IconCalculator() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="10" x2="12" y2="10" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="10" x2="16" y2="10" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="18" x2="16" y2="18" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function IconBarChart() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  )
}

function IconGraduationCap() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
    </svg>
  )
}

function IconBook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

// ── Social icons ──────────────────────────────────────────────────────────────

function IconYoutube() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0D1610" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.534 4.055 1.472 5.764L0 24l6.352-1.469A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.645-.497-5.172-1.364l-.369-.219-3.821.884.901-3.713-.243-.389A9.961 9.961 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-coc-accent mb-4">
      {children}
    </h3>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative border-t border-coc-ivory/[0.07]"
      style={{ background: '#0D1610' }}
      role="contentinfo"
    >
      {/* ── 5-column grid ─────────────────────────────────────────────────── */}
      <div className="container pt-8 pb-6 md:pt-10 md:pb-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-6">

          {/* ── COL 1 · CENTRES — UNCHANGED ────────────────────────────── */}
          <div>
            <ColHeading>Centres</ColHeading>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Ardee City',  addr: 'Palm Grove Heights, Ardee City, Gurugram' },
                { name: 'DLF Phase 1', addr: 'Qutubh Plaza, DLF Phase 1, Gurugram' },
              ].map((c) => (
                <div key={c.name} className="flex gap-2.5 items-start">
                  <span className="text-coc-accent mt-[3px] shrink-0"><IconPin /></span>
                  <div>
                    <p className="font-body text-[0.84rem] font-medium text-coc-ivory/80 leading-[1.4]">
                      {c.name}
                    </p>
                    <p className="font-body text-[0.75rem] font-light text-coc-ivory/40 leading-[1.4] mt-0.5">
                      {c.addr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── COL 2 · CONTACT — UNCHANGED ────────────────────────────── */}
          <div>
            <ColHeading>Contact</ColHeading>
            <div className="flex flex-col gap-3">
              {[
                { icon: <IconPhone />, text: '+91 8860618842', href: 'tel:+918860618842' },
                { icon: <IconPhone />, text: '+91 9971150771', href: 'tel:+919971150771' },
                { icon: <IconMail />,  text: 'acgupta@outlook.com', href: 'mailto:acgupta@outlook.com' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 font-body text-[0.84rem] font-light text-coc-ivory/50 hover:text-coc-accent transition-colors duration-200 group"
                >
                  <span className="text-coc-accent/60 group-hover:text-coc-accent transition-colors duration-200 shrink-0">
                    {item.icon}
                  </span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 3 · QUICK LINKS — UNCHANGED ───────────────────────── */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { label: 'Home',      href: '/'          },
                { label: 'About COC', href: '/about'     },
                { label: 'Resources', href: '/resources' },
                { label: 'Articles',  href: '/articles'  },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-[0.875rem] font-normal text-coc-ivory/45 hover:text-coc-ivory transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4 · MENTORSHIP — UPDATED ───────────────────────────── */}
          <div>
            <ColHeading>Mentorship</ColHeading>
            <ul className="flex flex-col gap-2.5" role="list">
              {[
                { icon: <IconCalculator />,    label: 'Accountancy', href: '/about#learning' },
                { icon: <IconBarChart />,       label: 'Economics',   href: '/about#learning' },
                { icon: <IconGraduationCap />,  label: 'CUET',        href: '/about#learning' },
                { icon: <IconBook />,           label: 'APs',         href: '/about#learning' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5 font-body text-[0.875rem] font-normal text-coc-ivory/45 hover:text-coc-accent transition-colors duration-200 group"
                  >
                    <span className="text-coc-accent/55 group-hover:text-coc-accent transition-colors duration-200 shrink-0">
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 5 · BRAND — UPDATED ────────────────────────────────── */}
          <div>
            {/*
              Invisible heading spacer: same class as ColHeading + mb-4,
              keeps this col's content in-sync with cols 4's list start Y.
            */}
            <h3
              className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-coc-accent mb-4 invisible select-none"
              aria-hidden="true"
            >
              Mentorship
            </h3>

            {/*
              3 rows with same gap-2.5 as col 4's <ul>.
              Each row is fixed to a natural li height (~21px) so they
              lock to their counterpart rows in col 4:
                Row 1 → "Accountancy"
                Row 2 → "Economics" + gap + "CUET"  (52px = 21+10+21)
                Row 3 → "APs"
            */}
            <div className="flex flex-col gap-2.5 items-center text-center">

              {/* Row 1 — tagline aligns with Accountancy */}
              <div className="flex items-center justify-center w-full" style={{ height: '21px' }}>
                <p className="font-body text-[0.72rem] italic leading-none text-coc-accent whitespace-nowrap">
                  &ldquo;Learn deeply. Score confidently.&rdquo;
                </p>
              </div>

              {/* Row 2+3 — logo spans Economics + CUET rows incl. their gap */}
              <div className="flex items-center justify-center w-full" style={{ height: '52px' }}>
                <Link href="/" aria-label="Concepts of Commerce — Home">
                  <Image
                    src="/coc-logo.png"
                    alt="Concepts of Commerce"
                    width={110}
                    height={36}
                    className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </Link>
              </div>

              {/* Row 4 — social icons align with APs */}
              <div className="flex items-center justify-center gap-2 w-full" style={{ height: '21px' }}>
                {[
                  { icon: <IconYoutube />,   href: 'https://youtube.com/',   title: 'YouTube'   },
                  { icon: <IconInstagram />, href: 'https://instagram.com/', title: 'Instagram' },
                  { icon: <IconWhatsApp />,  href: 'https://wa.me/',         title: 'WhatsApp'  },
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.title}
                    className={
                      'w-6 h-6 border border-coc-ivory/[0.1] rounded-[3px] ' +
                      'flex items-center justify-center text-coc-ivory/35 ' +
                      'hover:border-coc-accent/45 hover:text-coc-accent ' +
                      'transition-all duration-200'
                    }
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
      <div className="border-t border-coc-ivory/[0.06]">
        <div className="container py-3.5 flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p className="font-body text-[0.7rem] text-coc-ivory/22 tracking-[0.04em] text-center">
            © {year} Concepts of Commerce · AC Gupta · All rights reserved
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-[0.7rem] text-coc-ivory/22 hover:text-coc-ivory/50 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
