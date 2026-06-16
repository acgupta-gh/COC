import type {
  NavLink,
  LearningArea,
  HeroStat,
  Pillar,
  FooterColumn,
} from '@/lib/types'

// ── Navigation ────────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',      href: '/'               },
  { label: 'About',     href: '/about'           },
  { label: 'Resources', href: '/resources'       },
  { label: 'Articles',  href: '/articles'        },
  { label: 'Contact',   href: '/about#contact'   },
]

// ── Hero Stats ────────────────────────────────────────────────────────────────

export const HERO_STATS: HeroStat[] = [
  { value: '200', suffix: '+', label: 'Students Taught' },
  { value: '5',               label: 'Commerce Subjects' },
  { value: 'XI & XII',        label: 'Classes Covered'  },
]

// ── About Pillars ─────────────────────────────────────────────────────────────

export const ABOUT_PILLARS: Pillar[] = [
  {
    number: '01',
    title:  'Our Mission',
    description:
      'To give every commerce student — regardless of school or coaching access — the kind of clear, expert instruction that was previously available only to a few.',
  },
  {
    number: '02',
    title:  'Our Vision',
    description:
      'A generation of students who approach commerce not as a set of rules to memorise, but as a framework for understanding how businesses, economies, and markets actually work.',
  },
  {
    number: '03',
    title:  'Why COC Exists',
    description:
      'Because memorisation is not learning. Because textbooks are necessary but not sufficient. Because commerce, taught well, is one of the most powerful ways to develop rigorous, analytical thinking.',
  },
]

// ── Learning Areas ────────────────────────────────────────────────────────────

export const LEARNING_AREAS: LearningArea[] = [
  {
    id:    'accountancy',
    title: 'Accountancy',
    icon:  '◉',
    description:
      'From journal entries to financial statements, ratio analysis to cash flow — built on the fundamentals that make every concept feel inevitable rather than arbitrary.',
    tags:    ['Financial Statements', 'Ratio Analysis', 'Partnership', 'Company Accounts'],
    classes: 'Class XI & XII',
  },
  {
    id:    'economics',
    title: 'Economics',
    icon:  '◈',
    description:
      'Micro and macro, taught with genuine rigour. Demand, supply, market structures, GDP, inflation, and monetary policy — understood, not memorised.',
    tags:    ['Microeconomics', 'Macroeconomics', 'Money & Banking', 'Statistics'],
    classes: 'Class XI & XII',
  },
  {
    id:    'business-studies',
    title: 'Business Studies',
    icon:  '◇',
    description:
      'Strategy, management, and organisation explained with the clarity that standard textbooks consistently miss. Finance, marketing, and HRM as interconnected disciplines.',
    tags:    ['Management', 'Marketing', 'HRM', 'Finance of Business'],
    classes: 'Class XI & XII',
  },
  {
    id:      'class-11',
    title:   'Class XI',
    icon:    '⊕',
    description:
      'Build the foundation correctly. Every commerce concept introduced from first principles — with the conceptual depth that determines everything that follows.',
    tags:    ['All Subjects', 'Foundation', 'Concept Building', 'Exam Prep'],
    classes: 'Class XI',
    isClass: true,
  },
  {
    id:      'class-12',
    title:   'Class XII',
    icon:    '⊗',
    description:
      'Board preparation that goes beyond memorisation and templates. Score high because you understand deeply — that kind of confidence cannot be faked in an examination.',
    tags:    ['Board Prep', 'Revision Strategy', 'All Subjects', 'Mock Tests'],
    classes: 'Class XII',
    isClass: true,
  },
]

// ── Footer ────────────────────────────────────────────────────────────────────

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Navigate',
    links: [
      { label: 'Home',      href: '/'          },
      { label: 'About COC', href: '/about'     },
      { label: 'Resources', href: '/resources' },
      { label: 'Articles',  href: '/articles'  },
    ],
  },
  {
    heading: 'Learning',
    links: [
      { label: 'Accountancy',     href: '/about#learning' },
      { label: 'Economics',       href: '/about#learning' },
      { label: 'Business Studies',href: '/about#learning' },
      { label: 'Class XI & XII',  href: '/about#learning' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Contact Us', href: '/#contact'                          },
      { label: 'WhatsApp',   href: 'https://wa.me/', external: true     },
      { label: 'Instagram',  href: 'https://instagram.com/', external: true },
      { label: 'YouTube',    href: 'https://youtube.com/', external: true   },
    ],
  },
]
