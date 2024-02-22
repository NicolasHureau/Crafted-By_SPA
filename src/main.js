import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaStores from '@/plugins/piniaStores.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(piniaStores)

app.use(router)

app.mount('#app')
