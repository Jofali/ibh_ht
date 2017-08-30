import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sign: {
      email: '',
      password: '',
      token: '',
      vertype: false
    }
  },
  mutations: {
    updateEmail (state, email) {
      state.sign.email = email
    },
    updatePassword (state, password) {
      state.sign.password = password
    },
    updateVertype (state, vertype) {
      state.sign.vertype = vertype
    }
  }
})

export default store
