<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Moon, Sun } from 'lucide-vue-next'
import { setThemePreference } from '../lib/theme'

const isDark = ref(false)

function syncThemeFromDom() {
  isDark.value = document.documentElement.classList.contains('dark')
}

function toggleTheme() {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
  setThemePreference(next)
  syncThemeFromDom()
}

onMounted(() => {
  syncThemeFromDom()
})
</script>

<template>
  <button
    type="button"
    class="icon-btn h-11 w-11 rounded-xl"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <Sun v-if="!isDark" class="h-5 w-5" aria-hidden="true" />
    <Moon v-else class="h-5 w-5" aria-hidden="true" />
  </button>
</template>
