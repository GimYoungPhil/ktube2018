import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import idols from './modules/idols'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  modules: {
    idols,
  },
  strict: process.env.NODE_ENV !== 'production',
})
