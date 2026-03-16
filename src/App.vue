<script setup lang="ts">
import type { CSSProperties } from 'vue'
import {
  ArrowRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-vue-next'
import { Analytics } from '@vercel/analytics/vue'
import AppFooter from './components/AppFooter.vue'
import AppNavbar, { type NavItem } from './components/AppNavbar.vue'
import ContactForm from './components/ContactForm.vue'
import CopyButton from './components/CopyButton.vue'
import ProjectCard from './components/ProjectCard.vue'
import { profile } from './data/profile'

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'focus', label: 'Focus' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const skillGroups = [
  { title: 'Core stack', items: profile.skills.core },
  { title: 'Styling systems', items: profile.skills.styling },
  { title: 'Mapping and data', items: profile.skills.mapping },
  { title: 'Workflow', items: profile.skills.tooling },
  { title: 'Backend', items: profile.skills.backend },
] as const

const heroFacts = [
  { label: 'Based in', value: profile.location },
  {
    label: 'Core stack',
    value: `${profile.skills.core[0]} · ${profile.skills.core[1]} · ${profile.skills.core[3]}`,
  },
  {
    label: 'Best fit',
    value: profile.focusAreas.map((area) => area.title).join(' · '),
  },
] as const

const featuredExperience = profile.experience[0]!
const education = profile.education[0]!
const featuredExperienceHighlights = featuredExperience.highlights.slice(0, 4)

const backgroundImages = [
  '/backgrounds/glass-lime.svg',
  '/backgrounds/glass-neutral.svg',
  '/backgrounds/glass-ink.svg',
] as const

const appBackgroundStyle: CSSProperties = {
  '--app-background-image':
    `url("${backgroundImages[Math.floor(Math.random() * backgroundImages.length)]}")`,
}
</script>

<template>
  <Analytics />
  <a
    href="#content"
    class="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-xl focus:bg-bg focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:shadow-soft focus:outline-none focus:ring-2 focus:ring-brand/40"
  >
    Skip to content
  </a>

  <div id="top" class="relative min-h-screen overflow-x-hidden" :style="appBackgroundStyle">
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div class="app-background-layer app-background-media" />
      <div class="app-background-layer app-background-tint" />
      <div class="app-background-layer app-background-glow" />
      <div class="app-background-layer app-background-vignette" />
    </div>

    <AppNavbar
      :name="profile.name"
      :items="navItems"
      cv-href="/Kevin-McGarry-CV.pdf"
    />

    <main id="content" class="relative pb-6">
      <section class="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div aria-hidden="true" class="hero-scrim" />

        <div class="container-page relative">
          <div class="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-end lg:gap-10">
            <div class="page-enter" style="--page-enter-delay: 80ms">
              <p class="eyebrow">Frontend developer for product teams</p>
              <h1
                class="font-display mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
              >
                {{ profile.name }}
              </h1>
              <p class="mt-4 text-lg font-semibold tracking-tight text-fg/90 sm:text-2xl">
                {{ profile.role }}
              </p>
              <p class="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {{ profile.summary }}
              </p>
              <p class="mt-5 max-w-xl text-sm font-medium leading-relaxed text-fg">
                {{ profile.availability }}
              </p>

              <div class="mt-8 flex flex-wrap gap-3">
                <a href="#projects" class="btn-primary">
                  <ArrowRight class="h-4 w-4" aria-hidden="true" />
                  <span>View Projects</span>
                </a>
                <a href="/Kevin-McGarry-CV.pdf" class="btn-secondary" download>
                  <Download class="h-4 w-4" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
                <a href="#contact" class="btn-secondary">
                  <Mail class="h-4 w-4" aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </div>

              <div class="mt-8 flex flex-wrap items-center gap-3 text-sm">
                <a
                  :href="profile.github.url"
                  class="chip"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github class="h-4 w-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  :href="profile.linkedin.url"
                  class="chip"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin class="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <span class="chip">
                  <MapPin class="h-4 w-4" aria-hidden="true" />
                  <span>{{ profile.location }}</span>
                </span>
              </div>
            </div>

            <article class="surface-primary page-enter p-6 sm:p-8 lg:p-9" style="--page-enter-delay: 180ms">
              <p class="eyebrow">Selected strengths</p>
              <h2 class="font-display mt-3 text-3xl font-semibold tracking-tight text-fg">
                Clear frontend for complex products.
              </h2>

              <dl class="mt-6 grid gap-3">
                <div
                  v-for="fact in heroFacts"
                  :key="fact.label"
                  class="surface-subtle rounded-2xl p-4"
                >
                  <dt class="eyebrow">{{ fact.label }}</dt>
                  <dd class="mt-2 text-sm font-semibold leading-relaxed text-fg">
                    {{ fact.value }}
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section id="about" class="relative py-12 sm:py-16">
        <div
          class="container-page grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10"
        >
          <div v-reveal>
            <p class="eyebrow">About</p>
            <h2
              class="font-display mt-3 max-w-md text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
            >
              Product UI with a practical bias.
            </h2>
          </div>

          <div class="grid gap-4">
            <article v-reveal="80" class="surface-primary p-6 sm:p-8">
              <p class="text-lg leading-relaxed text-fg sm:text-xl">
                I build dashboards, internal tools, and map-heavy interfaces.
              </p>
            </article>

            <div class="grid gap-4 sm:grid-cols-2">
              <article v-reveal="140" class="surface-subtle rounded-[1.75rem] p-5">
                <p class="eyebrow">Currently available</p>
                <p class="mt-3 text-base font-semibold leading-relaxed tracking-tight text-fg">
                  {{ profile.availability }}
                </p>
              </article>

              <article v-reveal="200" class="surface-subtle rounded-[1.75rem] p-5">
                <p class="eyebrow">Working style</p>
                <p class="mt-3 text-base font-semibold leading-relaxed tracking-tight text-fg">
                  Design-aware frontend engineering, kept simple.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" class="section-break relative py-12 sm:py-16">
        <div class="container-page">
          <div v-reveal class="max-w-2xl">
            <p class="eyebrow">Focus</p>
            <h2
              class="font-display mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
            >
              Focus areas
            </h2>
          </div>

          <div class="mt-8 grid gap-4 lg:grid-cols-3">
            <article
              v-for="(area, index) in profile.focusAreas"
              :key="area.title"
              v-reveal="index * 100"
              class="surface-primary p-6"
            >
              <p class="eyebrow">0{{ index + 1 }}</p>
              <h3 class="mt-3 text-xl font-semibold tracking-tight text-fg">
                {{ area.title }}
              </h3>
              <p class="mt-3 text-sm leading-relaxed text-muted">
                {{ area.description }}
              </p>
            </article>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <article
              v-for="(group, index) in skillGroups"
              :key="group.title"
              v-reveal="140 + index * 80"
              class="surface-subtle rounded-[1.75rem] p-5"
            >
              <p class="text-sm font-semibold tracking-tight text-fg">
                {{ group.title }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="item in group.items" :key="item" class="chip">
                  {{ item }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" class="relative py-14 sm:py-20">
        <div class="container-page">
          <div v-reveal class="max-w-2xl">
            <p class="eyebrow">Experience</p>
            <h2
              class="font-display mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
            >
              Experience
            </h2>
          </div>

          <article v-reveal="100" class="surface-primary mt-8 p-6 sm:p-8">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div class="max-w-2xl">
                <p class="eyebrow">{{ featuredExperience.period }}</p>
                <h3
                  class="font-display mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
                >
                  {{ featuredExperience.company }}
                </h3>
                <p class="mt-2 text-lg font-semibold tracking-tight text-fg">
                  {{ featuredExperience.title }}
                </p>
              </div>

              <div class="surface-subtle max-w-sm rounded-2xl p-4">
                <p class="eyebrow">Career arc</p>
                <p class="mt-3 text-sm leading-relaxed text-muted">
                  Moved from digital cartography into frontend product work.
                </p>
              </div>
            </div>

            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <div
                v-for="highlight in featuredExperienceHighlights"
                :key="highlight"
                class="surface-subtle rounded-2xl p-4 text-sm leading-relaxed text-muted"
              >
                {{ highlight }}
              </div>
            </div>
          </article>

          <article v-reveal="180" class="surface-primary mt-6 p-6 sm:p-8">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p class="eyebrow">Education</p>
                <h3
                  class="mt-3 flex items-center gap-3 text-xl font-semibold tracking-tight text-fg"
                >
                  <GraduationCap class="h-5 w-5 text-brand" aria-hidden="true" />
                  <span>{{ education.school }}</span>
                </h3>
                <p class="mt-2 text-sm text-muted">{{ education.degree }}</p>
              </div>
              <p class="text-sm font-medium text-muted">{{ education.period }}</p>
            </div>

            <div class="mt-6">
              <p class="text-sm leading-relaxed text-muted">
                {{ education.highlights.join(' · ') }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="section-break relative py-16 sm:py-24">
        <div class="container-page">
          <div
            v-reveal
            class="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div class="max-w-2xl">
              <p class="eyebrow">Projects</p>
              <h2
                class="font-display mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
              >
                Selected work
              </h2>
              <p class="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {{ profile.projects.length }} live projects.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-3 sm:justify-end">
              <a
                :href="profile.github.url"
                class="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                :href="profile.linkedin.url"
                class="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="/Kevin-McGarry-CV.pdf" class="btn-secondary" download>
                Download CV
              </a>
              <a href="#contact" class="btn-primary">Contact</a>
            </div>
          </div>

          <div class="grid gap-6 xl:grid-cols-2">
            <ProjectCard
              v-for="(project, index) in profile.projects"
              :key="project.name"
              v-reveal="index * 120"
              :project="project"
            />
          </div>
        </div>
      </section>

      <section id="contact" class="section-break relative py-16 sm:py-20">
        <div
          class="container-page grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10"
        >
          <div v-reveal class="max-w-md">
            <p class="eyebrow">Contact</p>
            <h2
              class="font-display mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
            >
              Get in touch
            </h2>
            <p class="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {{ profile.availability }}
            </p>

            <div class="mt-6 grid gap-3">
              <a :href="`mailto:${profile.email}`" class="btn-secondary w-fit">
                <Mail class="h-4 w-4" aria-hidden="true" />
                <span>{{ profile.email }}</span>
              </a>
              <a
                :href="profile.linkedin.url"
                class="btn-secondary w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin class="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="/Kevin-McGarry-CV.pdf"
                class="btn-secondary w-fit"
                download
              >
                <Download class="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div v-reveal="120" class="surface-primary p-6 sm:p-8">
            <ContactForm :to-email="profile.email" />

            <div class="mt-8 grid gap-3">
              <div
                class="surface-subtle flex items-center justify-between gap-3 rounded-xl px-4 py-3"
              >
                <div class="min-w-0">
                  <p class="text-xs font-medium text-muted">Email</p>
                  <a
                    :href="`mailto:${profile.email}`"
                    class="link truncate text-sm font-medium text-fg"
                  >
                    {{ profile.email }}
                  </a>
                </div>
                <CopyButton :value="profile.email" label="email address" />
              </div>

              <div
                class="surface-subtle flex items-center justify-between gap-3 rounded-xl px-4 py-3"
              >
                <div class="min-w-0">
                  <p class="text-xs font-medium text-muted">Phone</p>
                  <a
                    :href="`tel:${profile.phone.replace(/\\s+/g, '')}`"
                    class="link truncate text-sm font-medium text-fg"
                  >
                    {{ profile.phone }}
                  </a>
                </div>
                <CopyButton :value="profile.phone" label="phone number" />
              </div>

              <div
                class="surface-subtle flex items-center justify-between gap-3 rounded-xl px-4 py-3"
              >
                <div class="min-w-0">
                  <p class="text-xs font-medium text-muted">Location</p>
                  <p class="truncate text-sm font-medium text-fg">
                    {{ profile.location }}
                  </p>
                </div>
              </div>

              <div
                class="surface-subtle flex items-center justify-between gap-3 rounded-xl px-4 py-3"
              >
                <div class="min-w-0">
                  <p class="text-xs font-medium text-muted">LinkedIn</p>
                  <a
                    :href="profile.linkedin.url"
                    class="link truncate text-sm font-medium text-fg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/{{ profile.linkedin.label }}
                  </a>
                </div>
                <CopyButton
                  :value="profile.linkedin.url"
                  label="LinkedIn profile URL"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter :name="profile.name" :interests="profile.interests" />
  </div>
</template>
