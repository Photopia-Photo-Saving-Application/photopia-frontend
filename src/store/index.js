import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './modules/Auth/index'
import rootGetters from './getters'
import rootMutations from './mutations'
import rootActions from './actions'

Vue.use(Vuex)

export const store=new Vuex.Store({
  state: {
    loading:false,
    token:null,
    uploadDialogFlag:false,
    deleteDialogFlag:false,
    logoutDialogFlag:false,
    deleteAccountDialogFlag:false,
    imageList:[],
  },
  getters:rootGetters,
  mutations: rootMutations,
  actions:rootActions,
  modules: {
    auth: authModule
  }
})
store.dispatch('auth/signInAuto');