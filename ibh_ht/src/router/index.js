import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import admin from '@/pages/admin'
import signin from '@/components/signin'
import signup from '@/components/signup'

Vue.use(Router)

const routes = [
  { path: '/',
    component: login,
    children: [
      {
        path: 'signin',
        component: signin
      },
      {
        path: 'signup',
        component: signup
      }
    ]
  },
  { path: '/admin', component: admin }
]

export default new Router({
  routes
})
