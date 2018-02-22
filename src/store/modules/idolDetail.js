import API from '../../api'
import * as types from '../mutation-types'

const state = {
  list: {},
  detail: {},
}

const getters = {}

const actions = {
  fetchIdolDetail ({ commit }, idolKey) {
    commit(types.REQUEST_IDOL)
    API.getIdolDetail({ idolKey })
      .then(idol => commit(types.RECEIVE_IDOL, { idolKey, idol }))
  },
}

const mutations = {
  [types.REQUEST_IDOL] (state) {
    state.list = {}
    state.detail = {}
  },
  [types.RECEIVE_IDOL] (state, { idolKey, idol }) {
    state.list[idolKey] = idol
    state.detail = idol
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
