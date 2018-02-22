import axios from 'axios'

export default {
  getIdolList() {
    return axios.get('/api/idols')
      .then(response => response.data)
  },

  getIdolDetail({ idolKey }) {
    return axios.get(`/api/idols/${idolKey}`)
      .then(response => response.data)
  },
}
