export type ThemePreference = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'theme-preference'

function prefersDark(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

export function getThemePreference(): ThemePreference {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'system' || stored === 'light' || stored === 'dark') return stored
  return 'light'
}

export function applyTheme(preference: ThemePreference): void {
  const isDark = preference === 'dark' || (preference === 'system' && prefersDark())
  document.documentElement.classList.toggle('dark', isDark)
}

export function setThemePreference(preference: ThemePreference): void {
  window.localStorage.setItem(STORAGE_KEY, preference)
  applyTheme(preference)
}

export function initTheme(): void {
  applyTheme(getThemePreference())
}
