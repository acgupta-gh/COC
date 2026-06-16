// ── Navigation ────────────────────────────────────────────────────────────────

export interface NavLink {
  label:     string
  href:      string
  external?: boolean
}

// ── Learning Areas ────────────────────────────────────────────────────────────

export interface LearningArea {
  id:          string
  title:       string
  description: string
  icon:        string
  tags:        string[]
  classes:     string
  /** Marks Class 11 / Class 12 cards for alternate visual treatment */
  isClass?:    boolean
}

// ── Hero ─────────────────────────────────────────────────────────────────────

export interface HeroStat {
  value:   string
  suffix?: string
  label:   string
}

// ── About ─────────────────────────────────────────────────────────────────────

export interface Pillar {
  number:      string
  title:       string
  description: string
}

// ── Footer ────────────────────────────────────────────────────────────────────

export interface FooterColumn {
  heading: string
  links:   { label: string; href: string; external?: boolean }[]
}
