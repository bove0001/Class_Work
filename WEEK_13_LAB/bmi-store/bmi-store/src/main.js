import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const piniaStore = createPinia()
const app = createApp(App)

app.use(piniaStore)
app.mount('#app')
