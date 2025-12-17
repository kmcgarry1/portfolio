<script setup lang="ts">
import { ref } from 'vue'
import { Check, Copy } from 'lucide-vue-next'

const props = defineProps<{
  value: string
  label: string
}>()

const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.value)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 1200)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <button
    type="button"
    class="btn-ghost -mr-2 rounded-lg px-2 py-2 text-muted hover:text-fg"
    :aria-label="`Copy ${label}`"
    @click="copy"
  >
    <span class="sr-only">Copy</span>
    <Copy v-if="!copied" class="h-4 w-4" aria-hidden="true" />
    <Check v-else class="h-4 w-4 text-brand" aria-hidden="true" />
  </button>
</template>
