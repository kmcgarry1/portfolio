import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(sectionIds: readonly string[]) {
  const activeSectionId = ref('')
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

        if (best?.target instanceof HTMLElement && best.target.id) {
          activeSectionId.value = best.target.id
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    for (const el of elements) observer.observe(el)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { activeSectionId }
}
