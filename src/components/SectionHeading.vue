<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header class="mb-8">
    <p v-if="subtitle" class="text-sm font-medium text-muted">
      {{ subtitle }}
    </p>
    <h2 class="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
      {{ title }}
    </h2>
  </header>
</template>

