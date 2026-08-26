<script setup lang="ts">
import { Check, Copy } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps<{ email: string }>()
const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(props.email)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 1600)
  } catch {
    window.location.href = `mailto:${props.email}`
  }
}
</script>

<template>
  <button type="button" class="btn-secondary min-h-11" :aria-live="copied ? 'polite' : 'off'" @click="copyEmail">
    <Check v-if="copied" class="h-4 w-4 text-brand" aria-hidden="true" />
    <Copy v-else class="h-4 w-4" aria-hidden="true" />
    <span>{{ copied ? 'Email copied' : 'Copy email' }}</span>
  </button>
</template>
