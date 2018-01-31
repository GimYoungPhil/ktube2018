import axios from 'axios'

export default {
  getIdols() {
    return axios.get('/api/idols')
      .then(response => response.data)
  }
}
