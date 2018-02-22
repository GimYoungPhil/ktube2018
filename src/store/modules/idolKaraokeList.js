import API from '../../api'
import * as types from '../mutation-types'

const state = {
  isFetching: false,
  list: [],
}

const getters = {}

const actions = {
  fetchIdolKaraokeList ({ commit }, idolKey) {
    commit(types.REQUEST_IDOL_KARAOKES)
    API.getIdolKaraokeList({ idolKey })
      .then(karaokes => commit(types.RECEIVE_IDOL_KARAOKES, { karaokes }))
  },
}

const mutations = {
  [types.REQUEST_IDOL_KARAOKES] (state) {
    state.isFetching = true
    state.list = []
  },
  [types.RECEIVE_IDOL_KARAOKES] (state, { karaokes }) {
    state.isFetching = false
    state.list = karaokes
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
