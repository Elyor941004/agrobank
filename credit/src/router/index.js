import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreditView from '../views/CreditView'
import CreditTypes from '../views/CreditTypes'
import CreditProcedure from '../views/CreditProcedure'
import AboutUser from "@/views/AboutUser"
import Agrobank from "@/views/Agrobank";

const routes = [
  {
    path: '/',
    name: 'agrobank',
    component: Agrobank
  },
  {
    path: '/credit',
    name: 'credit',
    component: CreditView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/credit-type',
    name: 'credit-type',
    component: CreditTypes
  },
  {
    path: '/credit-procedure',
    name: 'credit-procedure',
    component: CreditProcedure
  },
  {
    path: '/about-user',
    name: 'about-user',
    component: AboutUser
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
