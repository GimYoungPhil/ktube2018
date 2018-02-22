import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import idols from './modules/idols'
import idolDetail from './modules/idolDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  modules: {
    idols,
    idolDetail,
  },
  strict: process.env.NODE_ENV !== 'production',
})
