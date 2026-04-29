import { createApp } from 'vue' // create Vue app
import { createPinia } from 'pinia' // create Pinia store

import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap styles

import 'bootstrap-icons/font/bootstrap-icons.css' // Bootstrap icons
import './style.css' // import styles

import App from './App.vue'

const app = createApp(App) // app instance
const pinia = createPinia() // Pinia instance
app.use(pinia) // add Pinia to app
app.mount('#app') // mount app