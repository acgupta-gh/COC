import type { Metadata } from 'next'
import { AboutSection }         from '@/sections/AboutSection'
import { StatementSection }     from '@/sections/StatementSection'
import { LearningAreasSection } from '@/sections/LearningAreasSection'

// ── Future sections ───────────────────────────────────────────────────────────
// import { TestimonialsSection }  from '@/sections/TestimonialsSection'
// import { ArticlesSection }      from '@/sections/ArticlesSection'
// import { ContactSection }       from '@/sections/ContactSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Concepts of Commerce — the academic philosophy, teaching approach, and learning areas offered by AC Gupta for Class 11–12 commerce students.',
}

export default function AboutPage() {
  return (
    <>
      {/* Spacer — pushes content below fixed preheader (36px) + header (4.25rem) */}
      <div style={{ height: 'calc(4.25rem + 36px)' }} aria-hidden="true" />

      {/* 01 · About ─────────────────────────────────────────────────────── */}
      <div className="reveal">
        <AboutSection />
      </div>

      {/* 02 · Statement — philosophy anchor ─────────────────────────────── */}
      <div className="reveal">
        <StatementSection />
      </div>

      {/* 03 · Learning Areas ─────────────────────────────────────────────── */}
      <div id="learning" className="reveal">
        <LearningAreasSection />
      </div>

      {/* 04 · Testimonials (coming soon) ─────────────────────────────────── */}
      {/* <TestimonialsSection /> */}

      {/* 05 · Articles (coming soon) ─────────────────────────────────────── */}
      {/* <ArticlesSection /> */}

      {/* 06 · Contact (coming soon) ──────────────────────────────────────── */}
      {/* <ContactSection /> */}
    </>
  )
}
