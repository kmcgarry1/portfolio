<script setup lang="ts">
const props = defineProps<{
  name: string
  interests?: readonly string[]
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 sm:pt-10">
    <div class="container-page">
      <div class="flex flex-col gap-4 text-sm text-muted md:flex-row md:items-end md:justify-between">
        <div class="grid gap-1">
          <p>© {{ year }} {{ props.name }}</p>
          <p class="text-xs uppercase text-muted/80">
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
