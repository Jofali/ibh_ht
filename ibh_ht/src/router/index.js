import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/pages/admin'
import sign from '@/pages/login'
import ii from '@/pages/ii'
import forget from '@/pages/forget'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: sign
  },
  {
    path: '/admin',
    component: admin
  },
  {
    path: '/ii',
    component: ii
  },
  {
    path: '/forget',
    component: forget
  }
]

export default routes

