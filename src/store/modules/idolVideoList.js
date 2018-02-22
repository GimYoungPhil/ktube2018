import API from '../../api'
import * as types from '../mutation-types'

const state = {
  isFetching: false,
  list: [],
}

const getters = {}

const actions = {
  fetchIdolVideoList ({ commit }, idolKey) {
    commit(types.REQUEST_IDOL_VIDEOS)
    API.getIdolVideoList({ idolKey })
      .then(videos => commit(types.RECEIVE_IDOL_VIDEOS, { videos }))
  },
}

const mutations = {
  [types.REQUEST_IDOL_VIDEOS] (state) {
    state.isFetching = true
    state.list = []
  },
  [types.RECEIVE_IDOL_VIDEOS] (state, { videos }) {
    state.isFetching = false
    state.list = videos
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
