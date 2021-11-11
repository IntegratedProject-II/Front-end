import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Member from '@/views/Member.vue'
import SignIn from '@/views/SignIn.vue'
import History from '@/views/History.vue'
import AllKrathong from '@/views/AllKrathong.vue'
import Register from '@/views/Register.vue'
import Krathong from '@/views/DetailKrathong.vue'
import Place from '@/views/Place.vue'
import AddKrathong from '@/views/AddKrathong.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path:'/signIn',
    name:'SignIn',
    component:SignIn
  },
  {
    path:'/loy', 
    name:'AllKrathong',
    component:AllKrathong
  },
  {
    path:'/register', 
    name:'Register',
    component:Register
  },
  {
    path:'/krathong/:kt_id',
    name:'Krathong',
    component : Krathong
  },
  {
    path:'/place',
    name:'Place',
    component : Place
  },
  {
    path:'/addKrathong',
    name:'AddKrathong',
    component : AddKrathong
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
