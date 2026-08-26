export type Experience = {
  company: string
  title: string
  location: string
  period: string
  context: string
  scope: string[]
  highlights: string[]
}

export type Education = {
  school: string
  degree: string
  period: string
  highlights: string[]
}

export type ProjectDecision = {
  title: string
  description: string
}

export type Project = {
  slug: string
  name: string
  description: string
  status: string
  featured: boolean
  liveUrl: string
  repoUrl: string
  tags: string[]
  highlights: string[]
  evidence: string[]
  problem: string
  decisions: ProjectDecision[]
  quality: string[]
  outcome: string
  visual: {
    snapshotUrl: string
  }
}

export const profile = {
  name: 'Kevin McGarry',
  role: 'Frontend Engineer',
  positioning: 'Frontend engineer for data-heavy SaaS products.',
  location: 'Douglas, Cork, Ireland',
  email: 'kevin.mc.garry.13@gmail.com',
  phone: '+353 87 916 1786',
  availability:
    'Open to frontend roles focused on Vue, TypeScript, and product UI.',
  github: {
    label: 'kmcgarry1',
    url: 'https://github.com/kmcgarry1',
  },
  linkedin: {
    label: 'kevin-mcgarry-7b6a9333',
    url: 'https://www.linkedin.com/in/kevin-mcgarry-7b6a9333/',
  },
  summary:
    'I build Vue and TypeScript dashboards, internal tools, and map-based interfaces that turn complex workflows into clear product experiences.',
  focusAreas: [
    {
      title: 'Data-heavy interfaces',
      description:
        'Dashboards, dense data views, geospatial tooling, and workflows that stay understandable under real product complexity.',
    },
    {
      title: 'Frontend architecture',
      description:
        'Typed integrations, reusable UI systems, predictable state, and maintainable component boundaries.',
    },
    {
      title: 'Production quality',
      description:
        'Accessibility, performance budgets, automated testing, security controls, and observable releases.',
    },
  ],
  skills: {
    core: ['Vue.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5'],
    styling: ['CSS3', 'Sass', 'UI systems & component libraries'],
    mapping: ['Mapbox GL JS', 'Data visualization', 'Geospatial workflows'],
    tooling: ['Git', 'Agile workflows', 'Documentation', 'Figma'],
    quality: ['Vitest', 'Playwright', 'Accessibility testing', 'CI workflows'],
    backend: ['Node.js', 'Firebase'],
  },
  experience: [
    {
      company: 'RiskTech Ltd',
      title: 'Digital Cartographer and Frontend Developer',
      location: 'Douglas, Cork',
      period: '2017 - 2025',
      context:
        'Progressed from digital cartography into frontend development, translating specialist geospatial, configuration, and data-quality workflows into client and internal product interfaces.',
      scope: ['Dashboards', 'Client configuration', 'Map-based products', 'Data review tooling', 'AI-assisted interfaces'],
      highlights: [
        'Co-led the design and implementation of custom Mapbox integrations and mapping pipelines for client solutions.',
        'Led frontend implementation for new dashboard and administration features using Vue and TypeScript.',
        'Built a client dashboard administration tool for data integration and configuration.',
        'Independently created map review and editing tools for internal quality control and data visualization.',
        'Collaborated on AI-driven interfaces for visualizing and interacting with client datasets.',
        'Contributed to internal component libraries, onboarding documentation, and developer guides.',
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      slug: 'commander-scout',
      name: 'Commander Scout',
      description:
        'A data-comparison workspace that matches a personal card collection against EDHREC recommendations.',
      status: 'Active product',
      featured: true,
      liveUrl: 'https://edhrec-compare.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/edhrec-compare',
      tags: ['Vue 3', 'TypeScript', 'IndexedDB', 'Playwright'],
      highlights: [
        'Turns Deckbox CSV exports into owned and missing card views.',
        'Enriches dense recommendations with live Scryfall data and pricing.',
      ],
      evidence: [
        'Typed API clients with caching and request deduplication',
        'Virtualized tables for dense collection browsing',
        'Unit, component, and Playwright coverage in CI',
      ],
      problem:
        'Collection exports and deck recommendations live in separate workflows. Comparing them manually is slow, especially when recommendations contain large card lists and several external data points.',
      decisions: [
        {
          title: 'Keep collection data private',
          description:
            'CSV data is parsed in the browser and kept in memory rather than persisted or sent to a project-owned backend.',
        },
        {
          title: 'Control network cost',
          description:
            'Typed EDHREC and Scryfall clients use request deduplication plus TTL-based IndexedDB caching to avoid repeated enrichment work.',
        },
        {
          title: 'Design for dense data',
          description:
            'Virtualized card tables, owned/missing filters, route-level views, and persistent display preferences keep large lists usable.',
        },
        {
          title: 'Treat quality as product work',
          description:
            'The release workflow includes linting, unit and component tests, Playwright flows, bundle budgets, CSP reporting, and optional Sentry monitoring.',
        },
      ],
      quality: [
        'Vitest unit and component coverage',
        'Playwright end-to-end user flows',
        'CI build, test, and bundle-size gates',
        'Content Security Policy and privacy-aware telemetry',
      ],
      outcome:
        'A deployable browser product that converts a collection export into an enriched decision-making workspace without requiring an account or storing the uploaded collection.',
      visual: {
        snapshotUrl: '/project-snapshots/commander-scout.webp',
      },
    },
    {
      slug: 'figure-drawing-slideshow',
      name: 'Figure Drawing Slideshow',
      description:
        'A session-planning and presentation tool for timed figure-drawing practice.',
      status: 'Active product',
      featured: true,
      liveUrl: 'https://simple-figure-drawing-tool.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/simple-figure-drawing-tool',
      tags: ['Vue 3', 'Workflow design', 'Accessibility', 'Playwright'],
      highlights: [
        'Supports quick practice and structured one-, two-, or three-hour classes.',
        'Coordinates uploads, pose blocks, countdowns, breaks, and session summaries.',
      ],
      evidence: [
        'Step-based setup for a complex multi-stage workflow',
        'Keyboard, focus, accessibility, and visual regression checks',
        'CI, CodeQL, automated releases, and production observability',
      ],
      problem:
        'Timed drawing practice combines image management, class planning, countdown state, breaks, and fullscreen presentation. A useful tool must make setup quick without hiding the controls needed for longer structured sessions.',
      decisions: [
        {
          title: 'Separate fast and advanced paths',
          description:
            'Quick sessions handle a simple upload-and-timer flow, while a step-based class wizard manages presets, pose blocks, ordering, and longer sessions.',
        },
        {
          title: 'Model the session explicitly',
          description:
            'Session logic is isolated in composables and shared helpers so countdowns, pause/resume, breaks, next-image preloading, and summaries remain predictable.',
        },
        {
          title: 'Make live use resilient',
          description:
            'Keyboard controls, focus management, next-image preloading, reconnect handling, and optional remote configuration support the realities of an active class.',
        },
        {
          title: 'Automate release confidence',
          description:
            'Vitest, Playwright smoke/accessibility/visual suites, CodeQL, Dependabot, and release automation cover both interaction quality and maintenance.',
        },
      ],
      quality: [
        'Vitest behavior coverage',
        'Playwright smoke, accessibility, and visual checks',
        'Keyboard controls and modal focus management',
        'CI, CodeQL, dependency automation, and optional Sentry',
      ],
      outcome:
        'A responsive practice tool that supports both immediate solo use and structured class sessions while keeping setup, live controls, and recovery paths distinct.',
      visual: {
        snapshotUrl: '/project-snapshots/figure-drawing-slideshow.webp',
      },
    },
    {
      slug: 'daggerheart-session-manager',
      name: 'Daggerheart Session Manager',
      description:
        'A real-time companion that shares lightweight session state across a tabletop group.',
      status: 'Working prototype',
      featured: false,
      liveUrl: 'https://daggerheart-session-manager.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/daggerheart-session-manager',
      tags: ['Vue 3', 'Firebase', 'Realtime', 'TypeScript'],
      highlights: [
        'Uses expiring join codes and Firebase synchronization across devices.',
        'Separates host controls from the live player view.',
      ],
      evidence: [
        'Realtime Firestore session state',
        'Authentication and expiring session lifecycle',
      ],
      problem:
        'Tabletop groups need a lightweight shared view of session state without passing a device around the table.',
      decisions: [],
      quality: [],
      outcome:
        'A working multi-device prototype for synchronized fear, countdowns, and session status.',
      visual: {
        snapshotUrl: '/project-snapshots/daggerheart-session-manager.webp',
      },
    },
    {
      slug: 'randomander',
      name: 'Randomander',
      description:
        'A discovery tool for generating and saving unusual Commander deck-building directions.',
      status: 'Active product',
      featured: false,
      liveUrl: 'https://randomander.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/randomander',
      tags: ['Vue 3', 'Pinia', 'Persistence', 'Accessibility'],
      highlights: [
        'Supports several draw modes, compatibility rules, filters, and saved results.',
        'Uses partitioned browser persistence with validation and migration handling.',
      ],
      evidence: [
        'Pinia application and domain state',
        'Vitest, Playwright, axe, and browser-matrix CI',
      ],
      problem:
        'Commander players need useful creative constraints rather than a single unstructured random result.',
      decisions: [],
      quality: [],
      outcome:
        'A responsive discovery workflow with saved history, privacy-aware local state, and release-quality browser coverage.',
      visual: {
        snapshotUrl: '/project-snapshots/randomander.webp',
      },
    },
  ] satisfies Project[],
  education: [
    {
      school: 'Ballyfermot College',
      degree: 'BA Honours in Visual Media - Games',
      period: '2013 - 2015',
      highlights: [
        'Served as Class Representative on the Student Council.',
        "Founded and led the college's tabletop role-playing club.",
      ],
    },
  ] satisfies Education[],
  interests: ['Tabletop RPGs', 'Miniature painting', 'Football', 'Cooking'],
} as const

export function getProjectBySlug(slug: string): Project | undefined {
  return profile.projects.find((project) => project.slug === slug)
}
