import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initTheme } from './lib/theme'
import { reveal } from './lib/reveal'
import { parallax } from './lib/parallax'
import router from './router'

initTheme()
const app = createApp(App)
app.use(router)
app.directive('reveal', reveal)
app.directive('parallax', parallax)
app.mount('#app')
