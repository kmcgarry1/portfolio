<script setup lang="ts">
import CopyButton from "./components/CopyButton.vue";
import ProjectCard from "./components/ProjectCard.vue";
import ContactForm from "./components/ContactForm.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import { ArrowDown, Github, Linkedin } from "lucide-vue-next";
import { profile } from "./data/profile";
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <a
    href="#content"
    class="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-xl focus:bg-bg focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:shadow-soft focus:outline-none focus:ring-2 focus:ring-brand/40"
  >
    Skip to content
  </a>

  <div id="top" class="relative">
    <div
      aria-hidden="true"
      class="app-background pointer-events-none fixed inset-0 -z-10"
    />

    <ThemeToggle v-reveal="150" class="fixed right-6 top-6 z-50" />

    <main id="content">
      <section
        class="screen relative flex items-center justify-center text-center"
      >
        <div v-reveal class="container-page">
          <div
            aria-hidden="true"
            class="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/15 to-accent/10 blur-3xl"
          />

          <h1
            class="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent sm:text-7xl lg:text-8xl"
          >
            {{ profile.name }}
          </h1>
          <div class="mt-6 flex flex-wrap items-center justify-center gap-3 text-muted">
            <p class="text-lg font-medium tracking-tight sm:text-2xl">
              {{ profile.role }}
            </p>
            <a
              :href="profile.github.url"
              class="icon-btn h-11 w-11 rounded-full"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              title="GitHub"
            >
              <Github class="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              :href="profile.linkedin.url"
              class="icon-btn h-11 w-11 rounded-full"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <a
          v-reveal="250"
          href="#projects"
          class="icon-btn group absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full p-3 motion-reduce:animate-none"
          aria-label="Scroll to projects"
        >
          <ArrowDown
            class="h-5 w-5 animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </a>
      </section>

      <section id="projects" class="screen relative flex items-center">
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 bg-card"
        />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_0%,rgb(var(--brand)/0.14)_0%,transparent_60%),radial-gradient(70%_60%_at_85%_10%,rgb(var(--accent)/0.12)_0%,transparent_55%)]"
        />

        <div class="container-page relative z-10 w-full py-14 sm:py-16">
          <div
            v-reveal
            class="mb-10 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"
          >
            <div>
              <p class="text-sm font-medium text-muted">Projects</p>
              <h2
                class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Selected live work
              </h2>
              <p class="mt-3 max-w-prose text-sm text-muted">
                {{ profile.projects.length }} recent builds chosen from my live
                Vercel projects, with an emphasis on richer UX, external
                integrations, and tools people can actually use.
              </p>
            </div>

            <div
              class="flex flex-wrap items-center justify-center gap-3 sm:justify-end"
            >
              <a
                :href="profile.github.url"
                class="btn-secondary"
                target="_blank"
                rel="noreferrer"
                >GitHub</a
              >
              <a
                :href="profile.linkedin.url"
                class="btn-secondary"
                target="_blank"
                rel="noreferrer"
                >LinkedIn</a
              >
              <a href="/Kevin-McGarry-CV.pdf" class="btn-secondary" download
                >Download CV</a
              >
              <a href="#contact" class="btn-primary">Contact</a>
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <ProjectCard
              v-for="(project, index) in profile.projects"
              :key="project.name"
              v-reveal="index * 120"
              :project="project"
            />
          </div>
        </div>
      </section>

      <section id="contact" class="screen flex items-center">
        <div class="container-page w-full py-14 sm:py-16">
          <div v-reveal class="mx-auto max-w-2xl text-center">
            <p class="text-sm font-medium text-muted">Contact</p>
            <h2 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Send me a message
            </h2>
            <p class="mt-4 text-sm text-muted sm:text-base">
              This form opens your email client with a pre-filled message.
            </p>
          </div>

          <div v-reveal="160" class="mx-auto mt-10 max-w-xl card p-6 sm:p-8">
            <ContactForm :to-email="profile.email" />

            <div class="mt-8 grid gap-3">
              <div
                class="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg/40 px-4 py-3"
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
                class="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg/40 px-4 py-3"
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
                class="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg/40 px-4 py-3"
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
  </div>
</template>
