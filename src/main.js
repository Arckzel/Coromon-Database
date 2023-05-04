import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './routes'

import './assets/main.css'
import './assets/types.css'

createApp(App).use(router).mount('#app')
