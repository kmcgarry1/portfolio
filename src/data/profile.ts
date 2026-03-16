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
}

export const profile = {
  name: 'Kevin McGarry',
  role: 'Frontend Developer',
  location: 'Douglas, Cork, Ireland',
  email: 'kevin.mc.garry.13@gmail.com',
  phone: '+353 87 916 1786',
  github: {
    label: 'kmcgarry1',
    url: 'https://github.com/kmcgarry1',
  },
  linkedin: {
    label: 'kevin-mcgarry-7b6a9333',
    url: 'https://www.linkedin.com/in/kevin-mcgarry-7b6a9333/',
  },
  summary:
    'Front-End Developer with 7+ years of experience specializing in Vue.js, TypeScript, and Mapbox. Strong background in visual media and game design, with a focus on bridging creative and technical teams to deliver engaging, performant, user-focused applications.',
  focusAreas: [
    {
      title: 'Maps & Data Visualization',
      description:
        'Mapbox GL JS integrations, mapping pipelines, and tools for review, editing, and quality control.',
    },
    {
      title: 'Dashboards & Admin Tools',
      description:
        'Component-driven dashboards, admin interfaces, and configuration tooling for client solutions.',
    },
    {
      title: 'Performance & UX',
      description:
        'Fast, accessible UIs with an emphasis on maintainable architecture and smooth collaboration.',
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
        'Co-led the design and implementation of custom Mapbox integrations and mapping pipelines for client solutions.',
        'Progressed from Digital Cartographer to Front-End Developer, building Vue.js + TypeScript component architecture.',
        'Led the frontend implementation of new dashboard and admin features.',
        'Created internal map review and editing tools for quality control and data visualization.',
        'Built a client dashboard administration tool to manage data integration and configuration.',
        'Collaborated on AI-driven front-end interfaces to visualise and interact with client datasets.',
        'Authored technical documentation and internal guides to support onboarding and developer efficiency.',
        'Contributed to internal component libraries to improve consistency and re-usability across projects.',
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Commander Scout',
      description:
        'Upload a Deckbox CSV, compare it against EDHREC commander lists, and layer in Scryfall data to spot what you already own.',
      liveUrl: 'https://edhrec-compare.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/edhrec-compare',
      tags: ['Vue 3', 'TypeScript', 'Scryfall', 'CSV Parsing'],
    },
    {
      name: 'Figure Drawing Slideshow',
      description:
        'A studio-style figure drawing tool with bulk image uploads, class presets, timed sessions, remote controls, and saved session setups.',
      liveUrl: 'https://simple-figure-drawing-tool.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/simple-figure-drawing-tool',
      tags: ['Vue 3', 'Vite', 'Testing', 'Accessibility'],
    },
    {
      name: 'Daggerheart Session Manager',
      description:
        'A real-time companion app for Daggerheart tables with share codes, countdowns, fear tracking, and Firebase-backed session sync.',
      liveUrl: 'https://daggerheart-session-manager.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/daggerheart-session-manager',
      tags: ['Vue 3', 'Firebase', 'Realtime', 'TypeScript'],
    },
    {
      name: 'Randomander',
      description:
        'A Commander randomizer with multiple draw modes, EDHREC and Scryfall integrations, saved pulls, and persistent local history.',
      liveUrl: 'https://randomander.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/randomander',
      tags: ['Vue 3', 'Pinia', 'EDHREC', 'Local Storage'],
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
