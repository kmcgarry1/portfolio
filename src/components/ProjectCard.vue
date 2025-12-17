<script setup lang="ts">
import { computed } from 'vue'
import { AppWindow, ExternalLink, Github } from 'lucide-vue-next'
import type { Project } from '../data/profile'

const props = defineProps<{
  project: Project
}>()

const liveDomain = computed(() => {
  try {
    return new URL(props.project.liveUrl).host
  } catch {
    return props.project.liveUrl
  }
})

const repoSlug = computed(() => {
  try {
    const url = new URL(props.project.repoUrl)
    return url.pathname.replace(/^\//, '')
  } catch {
    return props.project.repoUrl
  }
})
</script>

<template>
  <article class="group card relative overflow-hidden p-5 transition hover:-translate-y-0.5 hover:border-muted/40 sm:p-6">
    <div aria-hidden="true" class="pointer-events-none absolute -inset-px opacity-0 transition group-hover:opacity-100">
      <div
        class="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_0%,rgb(var(--brand)/0.16)_0%,transparent_60%),radial-gradient(60%_50%_at_85%_15%,rgb(var(--accent)/0.14)_0%,transparent_55%)]"
      />
    </div>

    <div class="relative flex items-start justify-between gap-4">
      <div class="min-w-0">
        <div class="flex items-center gap-3">
          <div
            class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-soft"
            aria-hidden="true"
          >
            <AppWindow class="h-5 w-5" aria-hidden="true" />
          </div>

          <div class="min-w-0">
            <h3 class="truncate text-lg font-semibold tracking-tight">
              {{ project.name }}
            </h3>
            <p class="mt-0.5 truncate text-sm text-muted">
              {{ liveDomain }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span
          class="hidden items-center gap-2 rounded-full border border-border bg-bg/50 px-3 py-1 text-xs font-medium text-muted sm:inline-flex"
        >
          <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500/80" aria-hidden="true" />
          Live
        </span>

        <a
          class="btn-ghost h-10 w-10 rounded-xl p-0 text-muted hover:text-fg"
          :href="project.liveUrl"
          target="_blank"
          rel="noreferrer"
          aria-label="Open live demo"
          title="Open live demo"
        >
          <ExternalLink class="mx-auto h-4 w-4" aria-hidden="true" />
        </a>

        <a
          class="btn-ghost h-10 w-10 rounded-xl p-0 text-muted hover:text-fg"
          :href="project.repoUrl"
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub repository"
          title="Open GitHub repository"
        >
          <Github class="mx-auto h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>

    <p
      class="relative mt-4 text-sm leading-relaxed text-muted [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden"
    >
      {{ project.description }}
    </p>

    <div class="relative mt-4 flex flex-wrap items-center gap-2">
      <a :href="project.repoUrl" target="_blank" rel="noreferrer" class="chip hover:text-fg">
        <Github class="h-4 w-4" aria-hidden="true" />
        <span class="truncate">{{ repoSlug }}</span>
      </a>
      <span v-for="tag in project.tags" :key="tag" class="chip">
        {{ tag }}
      </span>
    </div>
  </article>
</template>
