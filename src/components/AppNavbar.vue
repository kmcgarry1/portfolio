<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Menu, Moon, Sun, X } from 'lucide-vue-next'
import { setThemePreference } from '../lib/theme'
import { useActiveSection } from '../lib/useActiveSection'

export type NavItem = {
  id: string
  label: string
}

const props = defineProps<{
  name: string
  items: NavItem[]
  cvHref: string
}>()

const { activeSectionId } = useActiveSection(props.items.map((item) => item.id))
const mobileOpen = ref(false)
const isDark = ref(false)

function syncThemeFromDom() {
  isDark.value = document.documentElement.classList.contains('dark')
}

function toggleTheme() {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
  setThemePreference(next)
  syncThemeFromDom()
}

function closeMobile() {
  mobileOpen.value = false
}

function onNavClick() {
  closeMobile()
}

const initials = computed(() =>
  props.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join(''),
)

onMounted(() => {
  syncThemeFromDom()
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur">
    <div class="container-page flex h-16 items-center justify-between gap-3">
      <a href="#top" class="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40">
        <div
          class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent text-sm font-semibold text-white shadow-soft"
          aria-hidden="true"
        >
          {{ initials }}
        </div>
        <span class="hidden text-sm font-semibold tracking-tight sm:block">{{ name }}</span>
      </a>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <a
          v-for="item in items"
          :key="item.id"
          class="btn-ghost px-3 py-2 text-sm text-muted hover:text-fg"
          :class="activeSectionId === item.id ? 'text-fg' : ''"
          :href="`#${item.id}`"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a :href="cvHref" class="btn-secondary hidden sm:inline-flex" download>Download CV</a>
        <button type="button" class="btn-ghost" aria-label="Toggle theme" @click="toggleTheme">
          <Sun v-if="!isDark" class="h-4 w-4 text-muted" aria-hidden="true" />
          <Moon v-else class="h-4 w-4 text-muted" aria-hidden="true" />
          <span class="hidden text-sm text-muted sm:block">{{ isDark ? 'Dark' : 'Light' }}</span>
        </button>

        <button
          type="button"
          class="btn-ghost md:hidden"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <Menu v-if="!mobileOpen" class="h-5 w-5 text-muted" aria-hidden="true" />
          <X v-else class="h-5 w-5 text-muted" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="border-t border-border bg-bg/80 backdrop-blur md:hidden">
      <div class="container-page py-3">
        <div class="grid gap-1">
          <a
            v-for="item in items"
            :key="item.id"
            class="btn-ghost w-full justify-start px-3 py-3 text-sm text-muted hover:text-fg"
            :class="activeSectionId === item.id ? 'text-fg' : ''"
            :href="`#${item.id}`"
            @click="onNavClick"
          >
            {{ item.label }}
          </a>
          <a :href="cvHref" class="btn-secondary mt-2 w-full" download @click="onNavClick">Download CV</a>
        </div>
      </div>
    </div>
  </header>
</template>
