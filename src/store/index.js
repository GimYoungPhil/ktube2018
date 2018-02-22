import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import idolList from './modules/idolList'
import idolDetail from './modules/idolDetail'
import idolVideoList from './modules/idolVideoList'
import idolKaraokeList from './modules/idolKaraokeList'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  modules: {
    idolList,
    idolDetail,
    idolVideoList,
    idolKaraokeList,
  },
  strict: process.env.NODE_ENV !== 'production',
})
