<script setup lang="ts">
import { ArrowUpRight, Github } from 'lucide-vue-next'
import type { Project } from '../data/profile'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="supporting-project">
    <a
      class="supporting-project__media"
      :href="project.liveUrl"
      target="_blank"
      rel="noreferrer"
      :aria-label="`Open ${project.name} live demo`"
    >
      <img
        :src="project.visual.snapshotUrl"
        :alt="`${project.name} application interface`"
        loading="lazy"
      />
    </a>

    <div class="p-5 sm:p-6">
      <p class="eyebrow">{{ project.status }}</p>
      <h3 class="mt-3 text-xl font-semibold text-fg">{{ project.name }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-muted">{{ project.description }}</p>
      <p class="mt-4 text-sm leading-relaxed text-fg">{{ project.evidence[0] }}</p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
      </div>

      <div class="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <a class="text-link" :href="project.liveUrl" target="_blank" rel="noreferrer">
          Live project
          <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          class="icon-btn h-11 w-11"
          :href="project.repoUrl"
          target="_blank"
          rel="noreferrer"
          :aria-label="`View ${project.name} source code on GitHub`"
          title="View source code"
        >
          <Github class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
</template>
