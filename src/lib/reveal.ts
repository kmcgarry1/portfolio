import type { Directive } from 'vue'

type RevealValue =
  | number
  | {
      delay?: number
      threshold?: number | number[]
      rootMargin?: string
    }

const observers = new WeakMap<Element, IntersectionObserver>()

function shouldReduceMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

function parseValue(value: RevealValue | undefined) {
  if (typeof value === 'number') return { delay: value }
  return value ?? {}
}

export const reveal: Directive<HTMLElement, RevealValue> = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const { delay = 0, threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = parseValue(binding.value)

    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (shouldReduceMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return

        requestAnimationFrame(() => {
          el.classList.add('reveal-visible')
        })
        observer.unobserve(el)
        observer.disconnect()
        observers.delete(el)
      },
      { threshold, rootMargin },
    )

    observers.set(el, observer)
    observer.observe(el)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}

