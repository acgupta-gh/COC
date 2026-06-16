import type { Metadata, Viewport } from 'next'
import { cormorant, inter, lora } from '@/lib/fonts'
import { Preheader } from '@/components/layout/Preheader'
import { Header }     from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RevealObserver } from '@/components/ui/RevealObserver'
import './globals.css'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default:  'Concepts of Commerce — COC',
    template: '%s | COC',
  },
  description:
    'A structured academic platform for Class XI and XII commerce students. ' +
    'Learn Accountancy, Economics, and Business Studies with genuine depth and clarity.',
  keywords: [
    'commerce education',
    'Class 11 commerce',
    'Class 12 commerce',
    'Accountancy tutoring',
    'Economics CBSE',
    'Business Studies',
    'COC',
    'AC Gupta',
  ],
  authors:   [{ name: 'AC Gupta' }],
  creator:   'AC Gupta',
  metadataBase: new URL('https://conceptsofcommerce.in'), // update with your domain
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    title:       'Concepts of Commerce — COC',
    description: 'Learn commerce deeply. Think critically. Score confidently.',
    siteName:    'Concepts of Commerce',
  },
  twitter: {
    card:  'summary_large_image',
    title: 'Concepts of Commerce — COC',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor:   '#142D1E',
  colorScheme:  'dark',
  width:        'device-width',
  initialScale: 1,
}

// ── Root Layout ───────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${lora.variable}`}
    >
      <body className="font-body antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-coc-accent focus:text-coc-bg focus:rounded font-body text-sm font-medium"
        >
          Skip to main content
        </a>

        {/* Scroll-reveal observer — activates .reveal elements as they enter viewport */}
        <RevealObserver />

        <Preheader />
        <Header />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
