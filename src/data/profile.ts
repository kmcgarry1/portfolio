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
      name: 'pokeball-matcher-react',
      description: 'Pick a Kanto Pokémon and see which Poké Balls it belongs in.',
      liveUrl: 'https://pokeball-matcher-react.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/pokeball-matcher-react',
      tags: ['Next.js', 'TypeScript', 'PokéAPI'],
    },
    {
      name: 'edhrec-compare',
      description:
        'Compare a Deckbox CSV with EDHREC data to see what cards you own that are most used for a commander.',
      liveUrl: 'https://edhrec-compare.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/edhrec-compare',
      tags: ['Vue', 'Vite', 'EDHREC', 'Scryfall'],
    },
    {
      name: 'daggerheart-dm-screen',
      description: 'A lightweight DM screen UI for Daggerheart sessions.',
      liveUrl: 'https://daggerheart-dm-screen.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/daggerheart-dm-screen',
      tags: ['Vue 3', 'Vite', 'Daggerheart'],
    },
    {
      name: 'prepboard',
      description: 'Track multiple timers for cooking with a simple, focused UI.',
      liveUrl: 'https://prepboard-green.vercel.app',
      repoUrl: 'https://github.com/kmcgarry1/prepboard',
      tags: ['Vue 3', 'TypeScript', 'Timers'],
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
