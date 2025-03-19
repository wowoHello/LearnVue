import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import themePlugin from './stores/themePlugin'
import logPlugin from './stores/logPlugin'

const app = createApp(App)

const pinia = createPinia();

pinia.use(themePlugin);
pinia.use(logPlugin);
app.use(pinia)
app.mount('#app')
