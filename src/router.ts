import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CaseStudyPage from './pages/CaseStudyPage.vue'
import { getProjectBySlug } from './data/profile'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/work/:slug', name: 'case-study', component: CaseStudyPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const project = to.name === 'case-study' ? getProjectBySlug(String(to.params.slug)) : undefined
  const title = project
    ? `${project.name} case study | Kevin McGarry`
    : 'Kevin McGarry | Frontend Engineer'
  const description = project
    ? project.description
    : 'Frontend engineer with 7+ years building Vue, TypeScript, and data-heavy product interfaces.'
  const canonicalUrl = `https://portfolio-ecru-rho-56.vercel.app${to.path}`

  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
})

export default router
