<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border/60">
    <div class="container-page flex flex-col gap-2 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {{ year }} {{ props.name }}
      </p>
      <p class="text-muted">
        Built with Vue, TypeScript, Vite, and Tailwind CSS.
      </p>
    </div>
  </footer>
</template>
