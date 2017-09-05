import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/vuex/mutations'

Vue.use(Vuex)

const state = {
  sign: {
    Email: '',
    Password: null,
    Nickname: null,
    IsUsed: null,
    LogInState: null
  }
}

export default new Vuex.Store({
  state,
  mutations
})
