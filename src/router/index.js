import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Loy from '@/views/Location.vue'
import Member from '@/views/Member.vue'
import Login from '@/views/Login.vue'
import History from '@/views/History.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/loy',
    name:'Loy',
    component:Loy
  },
  {
    path:'/history',
    name:'History',
    component:History
  },
  {
    path:'/member',
    name:'Member',
    component:Member
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
