import { createApp } from 'vue' // create Vue app
import { createPinia } from 'pinia' // create Pinia store

import './style.css' // global styles
import App from './App.vue' // root component

const piniaStore = createPinia() // Pinia instance
const app = createApp(App) // Vue app instance

app.use(piniaStore) // add Pinia to app
app.mount('#app') // mount app to page