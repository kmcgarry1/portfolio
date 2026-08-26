<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Download, Menu, Moon, Sun, X } from 'lucide-vue-next'
import { setThemePreference } from '../lib/theme'
import { useActiveSection } from '../lib/useActiveSection'

export type NavItem = {
  id: string
  label: string
  href?: string
}

const props = defineProps<{
  name: string
  items: NavItem[]
  cvHref: string
  homeHref?: string
}>()

const { activeSectionId } = useActiveSection(props.items.map((item) => item.id))
const mobileOpen = ref(false)
const isDark = ref(false)
const menuButton = ref<HTMLButtonElement>()
const firstMobileLink = ref<HTMLAnchorElement>()
let previousOverflow = ''

const initials = computed(() =>
  props.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join(''),
)

function syncThemeFromDom() {
  isDark.value = document.documentElement.classList.contains('dark')
}

function toggleTheme() {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
  setThemePreference(next)
  syncThemeFromDom()
}

function closeMobile(returnFocus = false) {
  if (!mobileOpen.value) return
  mobileOpen.value = false
  if (returnFocus) nextTick(() => menuButton.value?.focus())
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMobile(true)
}

function onResize() {
  if (window.innerWidth >= 768) closeMobile()
}

watch(mobileOpen, async (open) => {
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    firstMobileLink.value?.focus()
  } else {
    document.body.style.overflow = previousOverflow
  }
})

onMounted(() => {
  syncThemeFromDom()
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <header class="site-header">
    <div class="container-page">
      <div class="site-header__bar">
        <a :href="homeHref ?? '#top'" class="brand-link" :aria-label="homeHref ? 'Back to portfolio home' : 'Back to top'">
          <span class="brand-mark" aria-hidden="true">{{ initials }}</span>
          <span class="hidden text-sm font-semibold text-fg sm:block">{{ name }}</span>
        </a>

        <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <a
            v-for="item in items"
            :key="item.id"
            class="nav-link"
            :class="{ 'nav-link--active': activeSectionId === item.id }"
            :href="item.href ?? `#${item.id}`"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="flex items-center gap-1.5">
          <a :href="cvHref" class="btn-secondary hidden sm:inline-flex" download>
            <Download class="h-4 w-4" aria-hidden="true" />
            <span>CV</span>
          </a>
          <button
            type="button"
            class="icon-btn h-11 w-11"
            :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" class="h-5 w-5" aria-hidden="true" />
            <Moon v-else class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            ref="menuButton"
            type="button"
            class="icon-btn h-11 w-11 md:hidden"
            :aria-label="mobileOpen ? 'Close navigation menu' : 'Open navigation menu'"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-navigation"
            @click="mobileOpen ? closeMobile(true) : (mobileOpen = true)"
          >
            <X v-if="mobileOpen" class="h-5 w-5" aria-hidden="true" />
            <Menu v-else class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        v-if="mobileOpen"
        id="mobile-navigation"
        class="mobile-navigation md:hidden"
        aria-label="Mobile navigation"
      >
        <a
          v-for="(item, index) in items"
          :key="item.id"
          :ref="(el) => { if (index === 0) firstMobileLink = el as HTMLAnchorElement }"
          class="mobile-navigation__link"
          :class="{ 'mobile-navigation__link--active': activeSectionId === item.id }"
          :href="item.href ?? `#${item.id}`"
          @click="closeMobile()"
        >
          <span>0{{ index + 1 }}</span>
          <strong>{{ item.label }}</strong>
        </a>
        <a :href="cvHref" class="btn-primary mt-3 min-h-11 w-full" download @click="closeMobile()">
          <Download class="h-4 w-4" aria-hidden="true" />
          <span>Download CV</span>
        </a>
      </nav>
    </div>
  </header>
</template>
