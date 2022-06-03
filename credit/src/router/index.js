import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreditType from '../views/CreditType'
import MicroCreditProcedure from '../views/MicroCreditProcedure'
import CreditCardProcedure from '../views/CreditCardProcedure'
import AvtoCreditProcedure from '../views/AvtoCreditProcedure'
import EducationCreditProcedure from '../views/EducationCreditProcedure'
import AboutUser from "@/views/AboutUser"
import Agrobank from "@/views/Agrobank";
import store from "@/store";
import creditCalculator from "@/views/CreditCalculator";
import notConfirmed from "@/views/NotConfirmed";
import MicroCreditService from "@/views/MicroCreditService";
import EducationCreditService from "@/views/EducationCreditService";
import CreditCardService from "@/views/CreditCardService";
import AvtoCreditService from "@/views/AvtoCreditService";
import MarketPlaceMicroCredit from "@/views/MarketPlaceMicroCredit.vue"
import OnlineMicroCredit from "@/views/OnlineMicroCredit.vue"
import SimpleMicroCredit from "@/views/SimpleMicroCredit.vue"
import SupportMicroCredit from "@/views/SupportMicroCredit.vue"

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
    path: '/micro-credit-service',
    name: 'microcreditservice',
    component: MicroCreditService
  },
  {
    path: '/education-credit-service',
    name: 'educationcreditservice',
    component: EducationCreditService
  },
  {
    path: '/credit-card-service',
    name: 'creditcardservice',
    component: CreditCardService
  },
  {
    path: '/avto-credit-service',
    name: 'avtocreditservice',
    component: AvtoCreditService
  },
  {
    path: '/not-confirmed',
    name: 'not_confirmed',
    component: notConfirmed
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
    path: '/micro-credit-procedure',
    name: 'micro-credit-procedure',
    component: MicroCreditProcedure
  },
  {
    path: '/credit-card-procedure',
    name: 'credit-card-procedure',
    component: CreditCardProcedure
  },
  {
    path: '/education-credit-procedure',
    name: 'education-credit-procedure',
    component: EducationCreditProcedure
  },
  {
    path: '/avto-credit-procedure',
    name: 'avto-credit-procedure',
    component: AvtoCreditProcedure
  },
  {
    path: '/simple-micro-credit',
    name: 'simple-micro-credit',
    component: SimpleMicroCredit
  },
  {
    path: '/support-micro-credit',
    name: 'support-micro-credit',
    component: SupportMicroCredit
  },
  {
    path: '/market-place-micro-credit',
    name: 'market-place-micro-credit',
    component: MarketPlaceMicroCredit
  },
  {
    path: '/online-micro-credit',
    name: 'online-micro-credit',
    component: OnlineMicroCredit
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
