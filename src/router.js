import Vue from 'vue'
import Router from 'vue-router'
import Customers from "./views/Customers.vue";
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Settings from './views/Settings.vue'
import Products from './views/Products.vue'
import Signup from './views/Signup.vue'

import firebase from 'firebase'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      // meta: {
      //   requiresAuth: true
      // }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;