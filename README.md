# Kevin McGarry Portfolio

A responsive, evidence-led portfolio built with Vue 3, TypeScript, Vue Router, Vite, and Tailwind CSS.

The homepage is optimized for a short hiring-team scan. Featured projects link to routed case studies covering the product problem, engineering decisions, release quality, and outcome.

## Develop

- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- Create a production build: `npm run build`
- Preview the production build: `npm run preview`

## Content

Edit `src/data/profile.ts` to update profile information, skills, commercial experience, and case-study evidence. Featured projects require a unique `slug` used by `/work/:slug`.

## CV

The editable CV source is `cv/Kevin-McGarry-CV.html`. Its generated one-page PDF is served from `public/Kevin-McGarry-CV.pdf`, with a synchronized convenience copy at the repository root.
