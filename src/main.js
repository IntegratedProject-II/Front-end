import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import content from '@/components/content.vue'

createApp(App).component('content-layout',content)
.use(store).use(router).mount('#app')
