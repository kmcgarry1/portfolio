<script setup lang="ts">
import { computed } from 'vue'
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  Github,
  Search,
  Shield,
  Shuffle,
} from 'lucide-vue-next'
import type { Project } from '../data/profile'

const props = defineProps<{
  project: Project
}>()

const iconMap = {
  search: Search,
  clock: Clock3,
  shield: Shield,
  shuffle: Shuffle,
} as const

const liveDomain = computed(() => {
  try {
    return new URL(props.project.liveUrl).host
  } catch {
    return props.project.liveUrl
  }
})

const projectIcon = computed(() => iconMap[props.project.visual.icon])
const previewPaletteClass = computed(() => `project-preview--${props.project.visual.palette}`)
</script>

<template>
  <article class="project-card surface-primary">
    <a
      class="project-preview block"
      :class="previewPaletteClass"
      :href="project.liveUrl"
      target="_blank"
      rel="noreferrer"
      :aria-label="`Open ${project.name} live demo`"
    >
      <img
        class="project-preview__image"
        :src="project.visual.snapshotUrl"
        :alt="`${project.name} site snapshot`"
        loading="lazy"
      />
      <div class="project-preview__tint" />
      <div class="project-preview__glow" />

      <div class="relative flex items-start justify-between gap-3 p-5 sm:p-6">
        <div
          class="surface-subtle grid h-11 w-11 place-items-center rounded-2xl text-brand"
          aria-hidden="true"
        >
          <component :is="projectIcon" class="h-5 w-5" aria-hidden="true" />
        </div>

        <span
          class="surface-subtle hidden items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-fg/80 sm:inline-flex"
        >
          <span class="h-2 w-2 animate-pulse rounded-full bg-brand/90" aria-hidden="true" />
          Live
        </span>
      </div>
    </a>

    <div class="p-5 sm:p-6">
      <div class="min-w-0">
        <h3 class="truncate text-lg font-semibold tracking-tight text-fg">
          {{ project.name }}
        </h3>
        <p class="mt-1 truncate text-sm text-muted">
          {{ liveDomain }}
        </p>
      </div>

      <p
        class="mt-4 text-sm leading-relaxed text-muted [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
      >
        {{ project.description }}
      </p>

      <ul class="mt-5 grid gap-2">
        <li
          v-for="highlight in project.highlights"
          :key="highlight"
          class="flex items-start gap-3 text-sm leading-relaxed text-muted"
        >
          <CheckCircle2 class="mt-0.5 h-4 w-4 flex-none text-brand" aria-hidden="true" />
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <div class="mt-5 flex flex-wrap items-center gap-2">
        <span v-for="tag in project.tags" :key="tag" class="chip">
          {{ tag }}
        </span>
      </div>

      <div class="mt-6 flex items-center gap-2">
        <a
          class="btn-secondary min-w-[7.5rem]"
          :href="project.liveUrl"
          target="_blank"
          rel="noreferrer"
          aria-label="Open live demo"
          title="Open live demo"
        >
          <ExternalLink class="h-4 w-4" aria-hidden="true" />
          <span>Live demo</span>
        </a>

        <a
          class="icon-btn h-10 w-10 p-0"
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
  </article>
</template>
