import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreditType from '../views/CreditType'
import CreditService from '../views/CreditService'
import CreditProcedure from '../views/CreditProcedure'
import AboutUser from "@/views/AboutUser"
import Agrobank from "@/views/Agrobank";
import store from "@/store";
import creditCalculator from "@/views/CreditCalculator";

const routes = [
  {
    path: '/',
    name: 'credit-type',
    component: CreditType,
  },
  {
    path: '/agrobank',
    name: 'agrobank',
    component: Agrobank
  },
  {
    path: '/credit-calculator',
    name: 'creditCalculator',
    component: creditCalculator
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next)=>{
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'agrobank'
        })
      }
      next()
    }
  },
  {
    path: '/credit-service',
    name: 'credit-service',
    component: CreditService
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
