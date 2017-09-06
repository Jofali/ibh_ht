import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/vuex/mutations'
import state from '@/vuex/state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
