// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import Vuex from 'vuex'
import routes from './router/index'
import store from './vuex/store'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.login) {
    to.query.url = from.query.url
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
