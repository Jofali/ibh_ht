// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import Vuex from 'vuex'
import routes from './router/index'
import store from './vuex/'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:1736/api/'
Vue.config.productionTip = false

const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
