import API from '../../api'
import * as types from '../mutation-types'

const state = {
  isFetching: false,
  list: [],
}

const getters = {}

const actions = {
  fetchIdols ({ commit }) {
    commit(types.REQUEST_IDOLS)
    API.getIdols()
      .then(idols => commit(types.RECEIVE_IDOLS, { idols }))
  },
}

const mutations = {
  [types.REQUEST_IDOLS] (state) {
    state.isFetching = true
    state.list = []
  },
  [types.RECEIVE_IDOLS] (state, { idols }) {
    state.isFetching = false
    state.list = idols
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
