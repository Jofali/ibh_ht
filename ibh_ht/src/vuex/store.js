import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sign: {
      email: '',
      Nickname: '',
      LoginState: true
    }
  },
  mutations: {
    updataSign (state, data) {
      state.sign.Nickname = data.Nickname
      state.sign.LoginState = true
    },
    updataEmail (state, data) {
      state.sign.email = data
    }
  }
})

export default store
