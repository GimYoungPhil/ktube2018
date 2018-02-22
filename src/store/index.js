import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import idolList from './modules/idolList'
import idolDetail from './modules/idolDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  modules: {
    idolList,
    idolDetail,
  },
  strict: process.env.NODE_ENV !== 'production',
})
