export type Experience = {
  company: string
  title: string
  location?: string
  period: string
  highlights: string[]
}

export type Education = {
  school: string
  degree: string
  period: string
  highlights: string[]
}

export type Project = {
  name: string
  description: string
  liveUrl: string
  repoUrl: string
  tags: string[]
  highlights: string[]
  visual: {
    icon: ProjectVisualIcon
    palette: ProjectVisualPalette
    pattern: ProjectVisualPattern
  }
}

export type ProjectVisualIcon = 'search' | 'clock' | 'shield' | 'shuffle'
export type ProjectVisualPalette = 'lime' | 'sky' | 'rose' | 'amber'
export type ProjectVisualPattern = 'grid' | 'arc' | 'orbit' | 'stack'

export const profile = {
  name: 'Kevin McGarry',
  role: 'Frontend Developer',
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
    'Frontend developer with 7+ years building Vue, TypeScript, and map-based product interfaces.',
  focusAreas: [
    {
      title: 'Maps & Data Visualization',
      description:
        'Mapbox work, geospatial tooling, and data-led interfaces.',
    },
    {
      title: 'Dashboards & Admin Tools',
      description:
        'Dashboards, admin flows, and configuration tools.',
    },
    {
      title: 'Performance & UX',
      description:
        'Fast, clear, maintainable frontend systems.',
    },
  ],
  skills: {
    core: ['Vue.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5'],
    styling: ['CSS3', 'Sass', 'UI systems & component libraries'],
    mapping: ['Mapbox GL JS', 'Data visualization', 'Geospatial workflows'],
    tooling: ['Git', 'Agile workflows', 'Documentation', 'Figma'],
    backend: ['Node.js'],
  },
  experience: [
    {
      company: 'RiskTech Ltd',
      title: 'Digital Cartographer and Frontend Developer',
      period: '2017 — 2025',
      highlights: [
        'Built Vue and TypeScript component architecture for internal and client tools.',
        'Shipped dashboards, admin flows, and map-based product features.',
        'Created internal review and editing tools for data quality workflows.',
        'Contributed to reusable UI patterns and developer documentation.',
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Commander Scout',
      description:
        'Compare your collection against EDHREC decks.',
      liveUrl: 'https://edhrec-compare.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/edhrec-compare',
      tags: ['Vue 3', 'TypeScript', 'Scryfall', 'CSV Parsing'],
      highlights: [
        'Uploads Deckbox CSV exports and highlights owned cards.',
        'Adds Scryfall pricing and card data.',
      ],
      visual: {
        icon: 'search',
        palette: 'lime',
        pattern: 'grid',
      },
    },
    {
      name: 'Figure Drawing Slideshow',
      description:
        'A figure drawing timer for practice sessions.',
      liveUrl: 'https://simple-figure-drawing-tool.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/simple-figure-drawing-tool',
      tags: ['Vue 3', 'Vite', 'Testing', 'Accessibility'],
      highlights: [
        'Supports bulk uploads, class presets, and timed pose blocks.',
        'Built with automated checks and a cleaner setup flow.',
      ],
      visual: {
        icon: 'clock',
        palette: 'amber',
        pattern: 'arc',
      },
    },
    {
      name: 'Daggerheart Session Manager',
      description:
        'A real-time companion app for Daggerheart sessions.',
      liveUrl: 'https://daggerheart-session-manager.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/daggerheart-session-manager',
      tags: ['Vue 3', 'Firebase', 'Realtime', 'TypeScript'],
      highlights: [
        'Uses join codes and Firebase sync across devices.',
        'Tracks session state, fear, and countdowns live.',
      ],
      visual: {
        icon: 'shield',
        palette: 'rose',
        pattern: 'orbit',
      },
    },
    {
      name: 'Randomander',
      description:
        'A Commander randomizer for deck-building ideas.',
      liveUrl: 'https://randomander.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/randomander',
      tags: ['Vue 3', 'Pinia', 'EDHREC', 'Local Storage'],
      highlights: [
        'Supports multiple draw modes in one focused UI.',
        'Stores history and saved pulls locally.',
      ],
      visual: {
        icon: 'shuffle',
        palette: 'sky',
        pattern: 'stack',
      },
    },
  ] satisfies Project[],
  education: [
    {
      school: 'Ballyfermot College',
      degree: 'BA Honours in Visual Media — Games',
      period: '2013 — 2015',
      highlights: [
        'Served as Class Representative on the Student Council.',
        "Founded and led the college’s tabletop role-playing club.",
      ],
    },
  ] satisfies Education[],
  interests: ['Tabletop RPGs', 'Miniature painting', 'Football', 'Cooking'],
} as const
