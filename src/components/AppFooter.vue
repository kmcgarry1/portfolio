<script setup lang="ts">
const props = defineProps<{
  name: string
  interests?: readonly string[]
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="pb-6 pt-2">
    <div class="container-page">
      <div
        class="surface-primary flex flex-col gap-3 px-6 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between"
      >
        <div class="grid gap-1">
          <p>© {{ year }} {{ props.name }}</p>
          <p class="text-xs uppercase tracking-[0.2em] text-muted/80">
            Built with Vue, TypeScript, Vite, and Tailwind CSS.
          </p>
        </div>

        <p v-if="props.interests?.length" class="max-w-xl text-sm md:text-right">
          Away from work: {{ props.interests.join(' · ') }}
        </p>
      </div>
    </div>
  </footer>
</template>
