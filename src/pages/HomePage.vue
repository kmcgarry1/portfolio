<script setup lang="ts">
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-vue-next'
import AppFooter from '../components/AppFooter.vue'
import AppNavbar, { type NavItem } from '../components/AppNavbar.vue'
import CopyEmailButton from '../components/CopyEmailButton.vue'
import FeaturedProject from '../components/FeaturedProject.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { profile } from '../data/profile'

const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const skillGroups = [
  { title: 'Core stack', items: profile.skills.core },
  { title: 'Interface systems', items: profile.skills.styling },
  { title: 'Maps and data', items: profile.skills.mapping },
  { title: 'Quality engineering', items: profile.skills.quality },
  { title: 'Product workflow', items: profile.skills.tooling },
  { title: 'Platform', items: profile.skills.backend },
] as const

const heroFacts = [
  { value: '7+', label: 'Years building product UI' },
  { value: 'Vue / TS', label: 'Core frontend stack' },
  { value: 'SaaS UI', label: 'Data-heavy product focus' },
] as const

const featuredProjects = profile.projects.filter((project) => project.featured)
const supportingProjects = profile.projects.filter((project) => !project.featured)
const featuredExperience = profile.experience[0]!
const education = profile.education[0]!
</script>

<template>
  <a href="#content" class="skip-link">Skip to content</a>

  <div id="top" class="min-h-screen bg-bg text-fg">
    <AppNavbar :name="profile.name" :items="navItems" cv-href="/Kevin-McGarry-CV.pdf" />

    <main id="content">
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="container-page">
          <div class="hero-grid">
            <div class="page-enter" style="--page-enter-delay: 80ms">
              <p class="availability-line">
                <span class="availability-dot" aria-hidden="true" />
                {{ profile.availability }}
              </p>

              <h1 id="hero-title" class="hero-title">
                <span>{{ profile.name }}</span>
                <span class="hero-title__role">{{ profile.positioning }}</span>
              </h1>

              <p class="hero-summary">{{ profile.summary }}</p>

              <div class="hero-actions">
                <a href="#work" class="btn-primary min-h-11">
                  <span>View case studies</span>
                  <ArrowDown class="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/Kevin-McGarry-CV.pdf" class="btn-secondary min-h-11" download>
                  <Download class="h-4 w-4" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
              </div>

              <div class="hero-socials" aria-label="Professional profiles">
                <a class="icon-btn h-11 w-11" :href="profile.github.url" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub">
                  <Github class="h-5 w-5" aria-hidden="true" />
                </a>
                <a class="icon-btn h-11 w-11" :href="profile.linkedin.url" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
                  <Linkedin class="h-5 w-5" aria-hidden="true" />
                </a>
                <a class="icon-btn h-11 w-11" :href="`mailto:${profile.email}`" aria-label="Email Kevin" title="Email">
                  <Mail class="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <dl class="hero-facts page-enter" style="--page-enter-delay: 180ms">
              <div v-for="fact in heroFacts" :key="fact.label" class="hero-fact">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="work" class="section-shell" aria-labelledby="work-title">
        <div class="container-page">
          <header class="section-heading">
            <div>
              <p class="eyebrow">Selected work</p>
              <h2 id="work-title">Engineering evidence, not just feature lists.</h2>
            </div>
            <p>
              Two product case studies showing how I structure complex workflows, make technical
              tradeoffs, and build release confidence.
            </p>
          </header>

          <div class="mt-12 grid gap-16 sm:mt-16 sm:gap-24 lg:gap-32">
            <FeaturedProject
              v-for="(project, index) in featuredProjects"
              :key="project.slug"
              :project="project"
              :index="index"
            />
          </div>

          <div class="supporting-work">
            <div v-reveal class="supporting-work__heading">
              <p class="eyebrow">More product work</p>
              <h3>Supporting projects</h3>
            </div>
            <div class="grid gap-5 md:grid-cols-2">
              <ProjectCard
                v-for="(project, index) in supportingProjects"
                :key="project.slug"
                v-reveal="index * 100"
                :project="project"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" class="section-shell section-shell--tinted" aria-labelledby="experience-title">
        <div class="container-page">
          <header v-reveal class="section-heading">
            <div>
              <p class="eyebrow">Commercial experience</p>
              <h2 id="experience-title">From specialist data workflows to product UI.</h2>
            </div>
            <p>{{ featuredExperience.context }}</p>
          </header>

          <article v-reveal="100" class="experience-entry">
            <div class="experience-entry__meta">
              <p class="eyebrow">{{ featuredExperience.period }}</p>
              <p class="mt-4 text-sm text-muted">{{ featuredExperience.location }}</p>
            </div>
            <div class="experience-entry__body">
              <p class="text-sm font-semibold text-brand">{{ featuredExperience.company }}</p>
              <h3>{{ featuredExperience.title }}</h3>
              <div class="mt-5 flex flex-wrap gap-2">
                <span v-for="area in featuredExperience.scope" :key="area" class="chip">{{ area }}</span>
              </div>
              <ul class="experience-highlights">
                <li v-for="highlight in featuredExperience.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </article>

          <article v-reveal="160" class="education-entry">
            <div class="education-entry__icon" aria-hidden="true">
              <GraduationCap class="h-5 w-5" />
            </div>
            <div>
              <p class="eyebrow">Education / {{ education.period }}</p>
              <h3>{{ education.degree }}</h3>
              <p class="mt-2 text-sm text-muted">{{ education.school }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="about" class="section-shell" aria-labelledby="about-title">
        <div class="container-page">
          <header v-reveal class="section-heading">
            <div>
              <p class="eyebrow">How I contribute</p>
              <h2 id="about-title">Product judgment backed by frontend rigor.</h2>
            </div>
            <p>My strongest work sits where dense data, operational workflows, and clear interaction design meet.</p>
          </header>

          <div class="focus-list">
            <article v-for="(area, index) in profile.focusAreas" :key="area.title" v-reveal="index * 80" class="focus-item">
              <span>0{{ index + 1 }}</span>
              <div>
                <h3>{{ area.title }}</h3>
                <p>{{ area.description }}</p>
              </div>
            </article>
          </div>

          <div class="skills-grid">
            <div v-for="group in skillGroups" :key="group.title" v-reveal class="skill-group">
              <h3>{{ group.title }}</h3>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section-shell section-shell--contact" aria-labelledby="contact-title">
        <div class="container-page">
          <div v-reveal class="contact-conversion">
            <div>
              <p class="eyebrow">Contact</p>
              <h2 id="contact-title">Looking for a frontend engineer?</h2>
              <p class="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {{ profile.availability }} Email is the fastest way to start a conversation.
              </p>
            </div>

            <div class="contact-actions">
              <a :href="`mailto:${profile.email}`" class="btn-primary min-h-11">
                <Mail class="h-4 w-4" aria-hidden="true" />
                <span>Email Kevin</span>
              </a>
              <CopyEmailButton :email="profile.email" />
              <a href="/Kevin-McGarry-CV.pdf" class="btn-secondary min-h-11" download>
                <Download class="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div class="contact-footer-links">
            <a :href="profile.linkedin.url" target="_blank" rel="noreferrer">
              <Linkedin class="h-4 w-4" aria-hidden="true" /> LinkedIn <ArrowUpRight class="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a :href="profile.github.url" target="_blank" rel="noreferrer">
              <Github class="h-4 w-4" aria-hidden="true" /> GitHub <ArrowUpRight class="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <p><MapPin class="h-4 w-4" aria-hidden="true" /> {{ profile.location }}</p>
          </div>
        </div>
      </section>
    </main>

    <AppFooter :name="profile.name" :interests="profile.interests" />
  </div>
</template>
