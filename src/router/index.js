import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import DisableOtp from '../views/otp/DisableOtp.vue'
import EnableOtp from '../views/otp/EnableOtp.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/otp/enable',
    name: 'otp-enable',
    component: EnableOtp
  },
  {
    path: '/otp/disable',
    name: 'otp-disable',
    component: DisableOtp
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
     if (!store.getters['auth/authenticated']) {
      return next({
        name: 'signin'
      })
     }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
