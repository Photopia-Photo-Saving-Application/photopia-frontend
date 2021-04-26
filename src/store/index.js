import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './modules/Auth/index'
import rootGetters from './getters'
import rootMutations from './mutations'

Vue.use(Vuex)

export const store=new Vuex.Store({
  state: {
    loading:false,
    token:null,
    uploadDialogFlag:false,
    deleteDialogFlag:false,
    logoutDialogFlag:false,
    deleteAccountDialogFlag:false
  },
  getters:rootGetters,
  mutations: rootMutations,
  actions: {
  },
  modules: {
    auth: authModule
  }
})
store.dispatch('auth/signInAuto');