<script setup lang="ts">
import { ArrowUpRight, Check, Github } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import type { Project } from '../data/profile'

defineProps<{
  project: Project
  index: number
}>()
</script>

<template>
  <article class="featured-project" :class="{ 'featured-project--reverse': index % 2 === 1 }">
    <RouterLink
      v-parallax
      v-reveal
      class="featured-project__media"
      :to="`/work/${project.slug}`"
      :aria-label="`Read the ${project.name} case study`"
    >
      <img
        :src="project.visual.snapshotUrl"
        :alt="`${project.name} application interface`"
        loading="lazy"
      />
      <span class="featured-project__launch" aria-hidden="true">
        <ArrowUpRight class="h-5 w-5" />
      </span>
    </RouterLink>

    <div v-reveal="120" class="featured-project__content">
      <p class="eyebrow">Featured project / 0{{ index + 1 }}</p>
      <h3 class="mt-4 text-3xl font-semibold text-fg sm:text-4xl lg:text-5xl">
        {{ project.name }}
      </h3>
      <p class="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        {{ project.description }}
      </p>

      <p class="eyebrow mt-7">Engineering evidence</p>
      <ul class="mt-4 grid gap-3">
        <li
          v-for="item in project.evidence"
          :key="item"
          class="flex items-start gap-3 text-sm leading-relaxed text-fg"
        >
          <Check class="mt-0.5 h-4 w-4 flex-none text-brand" aria-hidden="true" />
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="mt-7 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
      </div>

      <div class="mt-8 flex flex-wrap gap-3">
        <RouterLink class="btn-primary" :to="`/work/${project.slug}`">
          <span>Read case study</span>
          <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
        </RouterLink>
        <a class="btn-secondary" :href="project.liveUrl" target="_blank" rel="noreferrer">Live product</a>
        <a class="btn-secondary" :href="project.repoUrl" target="_blank" rel="noreferrer">
          <Github class="h-4 w-4" aria-hidden="true" />
          <span>Source code</span>
        </a>
      </div>
    </div>
  </article>
</template>
