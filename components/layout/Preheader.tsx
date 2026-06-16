import Link from 'next/link'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconPhone() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#030604"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

// ── Social links ──────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { icon: <IconFacebook />,  href: 'https://facebook.com',  label: 'Facebook'  },
  { icon: <IconInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <IconYoutube />,   href: 'https://youtube.com',   label: 'YouTube'   },
  { icon: <IconLinkedIn />,  href: 'https://linkedin.com',  label: 'LinkedIn'  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function Preheader() {
  return (
    <div
      className="w-full fixed top-0 left-0 right-0 z-[60]"
      style={{
        background:   '#0A160D',
        borderBottom: '1px solid rgba(201, 168, 122, 0.18)',
        height:       '36px',
      }}
    >
      <div className="container h-full flex items-center justify-between">

        {/* Left — contact info */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+918860618842"
            className="flex items-center gap-[0.4rem] text-coc-ivory/50 hover:text-coc-accent transition-colors duration-200"
          >
            <span className="text-coc-accent"><IconPhone /></span>
            <span className="font-body text-[0.65rem] tracking-[0.04em]">8860-61-8842</span>
          </a>

          <div className="w-px h-3 bg-coc-ivory/10" aria-hidden="true" />

          <a
            href="mailto:acgupta@outlook.com"
            className="flex items-center gap-[0.4rem] text-coc-ivory/50 hover:text-coc-accent transition-colors duration-200"
          >
            <span className="text-coc-accent"><IconMail /></span>
            <span className="font-body text-[0.65rem] tracking-[0.04em]">acgupta@outlook.com</span>
          </a>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-[0.375rem]">
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-6 h-6 rounded-[3px] text-coc-ivory/45 hover:text-coc-accent hover:border-coc-accent/40 transition-colors duration-200"
              style={{ border: '1px solid rgba(201,168,122,0.2)' }}
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
