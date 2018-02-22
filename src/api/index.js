import axios from 'axios'

export default {
  getIdols() {
    return axios.get('/api/idols')
      .then(response => response.data)
  },

  getIdol({ idolKey }) {
    return axios.get(`/api/idols/${idolKey}`)
      .then(response => response.data)
  },
}
