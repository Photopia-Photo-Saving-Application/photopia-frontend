import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './modules/Auth/index'
import rootGetters from './getters'
import rootMutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    token:null,
  },
  getters:rootGetters,
  mutations: rootMutations,
  actions: {
  },
  modules: {
    auth: authModule
  }
})
