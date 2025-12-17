<script setup lang="ts">
import { computed, ref } from 'vue'
import { LoaderCircle, SendHorizontal } from 'lucide-vue-next'

const props = defineProps<{
  toEmail: string
}>()

const name = ref('')
const email = ref('')
const message = ref('')
const submitting = ref(false)

const canSubmit = computed(() => {
  return Boolean(name.value.trim() && email.value.trim() && message.value.trim()) && !submitting.value
})

function buildMailtoUrl() {
  const subjectBase = 'Portfolio enquiry'
  const subject = name.value.trim() ? `${subjectBase} — ${name.value.trim()}` : subjectBase
  const bodyLines = [
    `Name: ${name.value.trim()}`,
    `Email: ${email.value.trim()}`,
    '',
    message.value.trim(),
  ]

  const body = bodyLines.join('\n').trim()
  const params = new URLSearchParams({
    subject,
    body,
  })

  return `mailto:${props.toEmail}?${params.toString()}`
}

function submit() {
  if (submitting.value) return
  submitting.value = true
  window.location.href = buildMailtoUrl()
  window.setTimeout(() => {
    submitting.value = false
  }, 1500)
}
</script>

<template>
  <form class="grid gap-4" @submit.prevent="submit">
    <div class="grid gap-2">
      <label for="name" class="text-sm font-medium text-fg">Name</label>
      <input
        id="name"
        v-model="name"
        type="text"
        autocomplete="name"
        class="w-full rounded-xl border border-border bg-bg/50 px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand/30"
        placeholder="Your name"
        required
        :disabled="submitting"
      />
    </div>

    <div class="grid gap-2">
      <label for="email" class="text-sm font-medium text-fg">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        autocomplete="email"
        class="w-full rounded-xl border border-border bg-bg/50 px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand/30"
        placeholder="you@example.com"
        required
        :disabled="submitting"
      />
    </div>

    <div class="grid gap-2">
      <label for="message" class="text-sm font-medium text-fg">Message</label>
      <textarea
        id="message"
        v-model="message"
        rows="5"
        class="w-full resize-none rounded-xl border border-border bg-bg/50 px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand/30"
        placeholder="Tell me a bit about what you’re building…"
        required
        :disabled="submitting"
      />
    </div>

    <button type="submit" class="btn-primary w-full" :disabled="!canSubmit" :aria-busy="submitting">
      <LoaderCircle v-if="submitting" class="h-4 w-4 animate-spin" aria-hidden="true" />
      <SendHorizontal v-else class="h-4 w-4" aria-hidden="true" />
      <span>{{ submitting ? 'Opening…' : 'Open email client' }}</span>
    </button>
  </form>
</template>
