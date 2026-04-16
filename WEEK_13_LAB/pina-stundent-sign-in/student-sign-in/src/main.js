import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

import App from './App.vue'
// createApp(App).mount('#app')

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
