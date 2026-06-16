/**
 * COC Homepage — Section Assembly
 *
 * Reorder sections by moving the import line + JSX element.
 * Each section is fully self-contained. Nothing else changes.
 *
 * Scroll-reveal: wrap any element in className="reveal" to fade it up
 * as it enters the viewport (powered by RevealObserver in layout.tsx).
 */

import { HeroSection } from '@/sections/HeroSection'

export default function HomePage() {
  return (
    <>
      {/* 01 · Hero ──────────────────────────────────────────────────────── */}
      <HeroSection />
    </>
  )
}
