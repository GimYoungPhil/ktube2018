import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import IdolList from './components/IdolList.vue'
import IdolDetail from './components/IdolDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/idols', component: IdolList },
  { path: '/idol/:idolKey', component: IdolDetail },
]

const router = new VueRouter({
  routes
})

export default router
