'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * RevealObserver — mounts a single IntersectionObserver on the page that
 * watches for elements with the `.reveal` class and adds `.visible` to them
 * as they enter the viewport.
 *
 * Usage in any section: add `className="reveal"` to elements you want to
 * fade-up on scroll. Add `className="reveal-group"` to a container to
 * automatically stagger its direct children.
 *
 * No external dependency. Degrades gracefully (elements visible if JS off).
 *
 * pathname dependency: re-runs on every client-side route change so that
 * .reveal elements added by the incoming page are picked up. Without this,
 * navigating Home → About left those elements permanently invisible because
 * the layout never remounts during client-side navigation.
 */

export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Unobserve once visible — animation plays once only
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold:   0.12,
        rootMargin:  '0px 0px -40px 0px',
      }
    )

    // Observe all .reveal elements (including those inside .reveal-group)
    const targets = document.querySelectorAll('.reveal, .reveal-group > *')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return null
}
