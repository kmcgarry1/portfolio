import type { Directive } from 'vue'

const cleanups = new WeakMap<HTMLElement, () => void>()

function motionEnabled(): boolean {
  return (
    window.matchMedia('(min-width: 768px)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export const parallax: Directive<HTMLElement> = {
  mounted(el) {
    let frame = 0

    const update = () => {
      frame = 0

      if (!motionEnabled()) {
        el.style.removeProperty('--parallax-offset')
        return
      }

      const rect = el.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const progress = Math.max(-1, Math.min(1, (elementCenter - viewportCenter) / window.innerHeight))
      el.style.setProperty('--parallax-offset', `${progress * -24}px`)
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })
    requestUpdate()

    cleanups.set(el, () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    })
  },
  unmounted(el) {
    cleanups.get(el)?.()
    cleanups.delete(el)
  },
}
