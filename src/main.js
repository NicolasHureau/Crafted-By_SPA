import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios, {isCancel, AxiosError} from 'axios';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(axios, {isCancel, AxiosError})

app.mount('#app')
