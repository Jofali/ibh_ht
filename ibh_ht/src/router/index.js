import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/pages/admin'
import sign from '@/pages/login'
import ii from '@/pages/ii'
import forget from '@/pages/forget'
import table from '@/components/content/table'
import sort from '@/components/content/sort'
import article from '@/components/content/article'
import editarticle from '@/components/content/editarticle'
import table8 from '@/components/content/table8'
import table9 from '@/components/content/table9'
import addarticle from '@/components/content/addarticle'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'sign',
    component: sign
  },
  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: '/',
        component: table
      },
      {
        path: 'sort',
        component: sort
      },
      {
        path: 'article/:id',
        component: article
      },
      {
        path: 'addarticle',
        component: addarticle
      },
      {
        path: 'editarticle/:id',
        component: editarticle
      },
      {
        path: 'types8',
        component: table8
      },
      {
        path: 'types9',
        component: table9
      }
    ]
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

