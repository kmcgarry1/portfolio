<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github, Mail } from 'lucide-vue-next'
import AppFooter from '../components/AppFooter.vue'
import AppNavbar, { type NavItem } from '../components/AppNavbar.vue'
import { getProjectBySlug, profile } from '../data/profile'

const route = useRoute()
const project = computed(() => getProjectBySlug(String(route.params.slug)))
const featuredProjects = profile.projects.filter((item) => item.featured)
const nextProject = computed(() => {
  if (!project.value) return featuredProjects[0]
  const index = featuredProjects.findIndex((item) => item.slug === project.value?.slug)
  return featuredProjects[(index + 1) % featuredProjects.length]
})

const navItems: NavItem[] = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]

</script>

<template>
  <a href="#content" class="skip-link">Skip to content</a>

  <div id="top" class="min-h-screen bg-bg text-fg">
    <AppNavbar
      :name="profile.name"
      :items="navItems"
      cv-href="/Kevin-McGarry-CV.pdf"
      home-href="/"
    />

    <main v-if="project" id="content">
      <section class="case-hero">
        <div class="container-page">
          <RouterLink to="/#work" class="text-link page-enter">
            <ArrowLeft class="h-4 w-4" aria-hidden="true" />
            Back to selected work
          </RouterLink>

          <div class="case-hero__grid">
            <div class="page-enter" style="--page-enter-delay: 80ms">
              <p class="eyebrow">Product case study / {{ project.status }}</p>
              <h1>{{ project.name }}</h1>
              <p class="case-hero__summary">{{ project.description }}</p>
              <div class="mt-7 flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
              </div>
            </div>

            <div class="case-hero__actions page-enter" style="--page-enter-delay: 160ms">
              <a class="btn-primary min-h-11" :href="project.liveUrl" target="_blank" rel="noreferrer">
                View live product <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
              </a>
              <a class="btn-secondary min-h-11" :href="project.repoUrl" target="_blank" rel="noreferrer">
                <Github class="h-4 w-4" aria-hidden="true" /> Source code
              </a>
            </div>
          </div>

          <a
            v-parallax
            class="case-hero__media page-enter"
            style="--page-enter-delay: 220ms"
            :href="project.liveUrl"
            target="_blank"
            rel="noreferrer"
            :aria-label="`Open ${project.name} live product`"
          >
            <img :src="project.visual.snapshotUrl" :alt="`${project.name} application interface`" />
            <span aria-hidden="true"><ArrowUpRight class="h-5 w-5" /></span>
          </a>
        </div>
      </section>

      <section class="case-section">
        <div class="container-page case-overview">
          <article v-reveal>
            <p class="eyebrow">The problem</p>
            <h2>What needed to become easier</h2>
            <p>{{ project.problem }}</p>
          </article>
          <article v-reveal="100">
            <p class="eyebrow">The outcome</p>
            <h2>What the product delivers</h2>
            <p>{{ project.outcome }}</p>
          </article>
        </div>
      </section>

      <section class="case-section case-section--tinted">
        <div class="container-page">
          <header v-reveal class="case-section__heading">
            <p class="eyebrow">Engineering decisions</p>
            <h2>How the solution was shaped</h2>
            <p>Decisions made around workflow clarity, architecture, performance, and operational quality.</p>
          </header>

          <div class="decision-list">
            <article v-for="(decision, index) in project.decisions" :key="decision.title" v-reveal="index * 80">
              <span>0{{ index + 1 }}</span>
              <div>
                <h3>{{ decision.title }}</h3>
                <p>{{ decision.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="case-section">
        <div class="container-page evidence-grid">
          <div v-reveal>
            <p class="eyebrow">Release confidence</p>
            <h2>Quality is part of the product.</h2>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-muted">
              The repository carries executable evidence for core behavior, accessibility, and release readiness.
            </p>
          </div>

          <ul v-reveal="100" class="quality-list">
            <li v-for="item in project.quality" :key="item">
              <Check class="h-4 w-4 flex-none text-brand" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

      <section class="case-next">
        <div class="container-page">
          <RouterLink v-if="nextProject" :to="`/work/${nextProject.slug}`" class="case-next__link">
            <span>
              <span class="eyebrow">Next case study</span>
              <strong>{{ nextProject.name }}</strong>
            </span>
            <ArrowRight class="h-6 w-6" aria-hidden="true" />
          </RouterLink>

          <div class="case-contact">
            <div>
              <p class="eyebrow">Discuss the work</p>
              <h2>Building a complex frontend product?</h2>
            </div>
            <a :href="`mailto:${profile.email}`" class="btn-primary min-h-11">
              <Mail class="h-4 w-4" aria-hidden="true" /> Email Kevin
            </a>
          </div>
        </div>
      </section>
    </main>

    <main v-else id="content" class="case-not-found container-page">
      <p class="eyebrow">Project not found</p>
      <h1>This case study is not available.</h1>
      <RouterLink to="/#work" class="btn-primary mt-8">Return to selected work</RouterLink>
    </main>

    <AppFooter :name="profile.name" />
  </div>
</template>
