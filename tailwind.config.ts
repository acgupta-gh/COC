import type { Config } from 'tailwindcss'

/**
 * COC Design System — Tailwind Configuration
 * Colors use rgb(<channels> / <alpha-value>) format to enable
 * Tailwind's opacity modifier syntax: bg-coc-accent/20, text-coc-ivory/60, etc.
 */

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    // Override default container
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1160px',   // COC max-width
        '2xl': '1160px',
      },
    },

    extend: {
      // ── Colors ──────────────────────────────────────────────────────────
      colors: {
        coc: {
          bg:            'rgb(20 45 30 / <alpha-value>)',
          secondary:     'rgb(27 57 42 / <alpha-value>)',
          card:          'rgb(31 63 48 / <alpha-value>)',
          accent:        'rgb(201 168 122 / <alpha-value>)',
          'accent-light':'rgb(220 192 152 / <alpha-value>)',
          ivory:         'rgb(244 237 225 / <alpha-value>)',
          muted:         'rgb(217 208 195 / <alpha-value>)',
        },
      },

      // ── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', '"Times New Roman"', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        lora:    ['var(--font-lora)', 'Georgia', 'serif'],
      },

      fontSize: {
        'display': ['clamp(3.5rem, 9vw, 7.5rem)',   { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'h1':      ['clamp(2.75rem, 6vw, 5.5rem)',   { lineHeight: '1.06', letterSpacing: '-0.01em'  }],
        'h2':      ['clamp(2rem, 4.5vw, 3.75rem)',   { lineHeight: '1.10', letterSpacing: '-0.005em' }],
        'h3':      ['clamp(1.25rem, 2vw, 1.625rem)', { lineHeight: '1.20'                             }],
        'eyebrow': ['0.6875rem',                     { lineHeight: '1',    letterSpacing: '0.22em'    }],
        'caption': ['0.8125rem',                     { lineHeight: '1.5'                              }],
      },

      // ── Spacing ──────────────────────────────────────────────────────────
      maxWidth: {
        coc: '1160px',
      },

      // ── Animations ───────────────────────────────────────────────────────
      animation: {
        'fade-up':      'fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pop-in':       'popIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'scroll-pulse': 'scrollPulse 2.2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        popIn: {
          '0%':   { opacity: '0', transform: 'scale(0.82) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)'       },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.25', transform: 'scaleY(1)'   },
          '50%':      { opacity: '1',    transform: 'scaleY(0.65)' },
        },
      },

      // ── Transitions ───────────────────────────────────────────────────────
      transitionTimingFunction: {
        coc: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
    },
  },

  plugins: [],
}

export default config
