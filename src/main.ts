import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initTheme } from './lib/theme'
import { reveal } from './lib/reveal'

initTheme()
const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')
