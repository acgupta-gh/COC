'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Logo }      from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/constants'
import { cn }        from '@/lib/utils'

/**
 * Header — fixed sticky navigation with:
 * - COC logo (left)
 * - Desktop nav links (right, uppercase + tracked — matching reference site style)
 * - Hamburger menu for mobile
 * - Frosted glass backdrop on scroll
 * - Full-screen slide-in mobile menu
 */

export function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed top-[36px] left-0 right-0 z-50',
          'transition-all duration-400 ease-coc',
          scrolled
            ? 'bg-coc-bg/90 backdrop-blur-[14px] border-b border-coc-ivory/[0.07]'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="container">
          <div className="flex items-center h-[4.25rem]">

            {/* Logo — left */}
            <Link href="/" aria-label="Concepts of Commerce — Home" className="flex-shrink-0">
              <Logo size="sm" />
            </Link>

            {/* Desktop Navigation — pushed to the right with ml-auto */}
            <nav
              className="hidden md:flex items-center gap-7 lg:gap-9 ml-auto"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative font-body text-[0.7rem] font-medium uppercase tracking-[0.16em]',
                    'text-coc-ivory/45 hover:text-coc-ivory',
                    'transition-colors duration-250',
                    'group'
                  )}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                  {/* Underline reveal on hover */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-[3px] left-0 right-0 h-px bg-coc-accent',
                      'scale-x-0 group-hover:scale-x-100',
                      'transition-transform duration-300 ease-coc origin-left'
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger — also pushed right */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden flex flex-col gap-[5px] p-1.5 ml-auto -mr-1"
            >
              <span
                className={cn(
                  'block w-[22px] h-[1.5px] bg-coc-ivory rounded transition-all duration-300',
                  menuOpen && 'rotate-45 translate-y-[6.5px]'
                )}
              />
              <span
                className={cn(
                  'block w-[22px] h-[1.5px] bg-coc-ivory rounded transition-all duration-300',
                  menuOpen && 'opacity-0 scale-x-0'
                )}
              />
              <span
                className={cn(
                  'block w-[22px] h-[1.5px] bg-coc-ivory rounded transition-all duration-300',
                  menuOpen && '-rotate-45 -translate-y-[6.5px]'
                )}
              />
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-40 bg-coc-bg flex flex-col',
          'transition-all duration-400 ease-coc',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Top bar spacer matches header height */}
        <div className="h-[4.25rem] flex-shrink-0" />

        {/* Border */}
        <div className="h-px w-full bg-coc-ivory/[0.07]" />

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-10 pb-8 gap-0 flex-1 overflow-y-auto">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                'font-heading font-normal text-[2.25rem] leading-none',
                'text-coc-ivory/45 hover:text-coc-ivory',
                'transition-colors duration-250',
                'border-b border-coc-ivory/[0.07] py-5',
                'translate-y-0',
                menuOpen && 'animate-fade-up',
              )}
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer tagline */}
        <p className="px-6 pb-8 font-body text-[0.7rem] tracking-[0.15em] uppercase text-coc-ivory/20">
          Concepts of Commerce · By AC Gupta
        </p>
      </div>
    </>
  )
}
