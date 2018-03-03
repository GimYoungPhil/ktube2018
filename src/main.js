import Vue from 'vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'

Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
