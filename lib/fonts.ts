import { Cormorant_Garamond, Inter, Lora } from 'next/font/google'

/**
 * Cormorant Garamond — editorial serif for all headings.
 * Loaded with italic variants for in-heading emphasis (e.g. hero "Confusion.")
 */
export const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
})

/**
 * Lora — warm serif for the hero lead paragraph.
 */
export const lora = Lora({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-lora',
  display:  'swap',
})

/**
 * Inter — clean sans-serif for body, labels, and UI text.
 */
export const inter = Inter({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  variable: '--font-inter',
  display:  'swap',
})
