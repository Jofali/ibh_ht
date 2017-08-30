import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/pages/admin'
import sign from '@/pages/login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: sign
  },
  {
    path: '/admin',
    component: admin
  }
]

export default routes

