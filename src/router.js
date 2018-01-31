import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Idols from './components/Idols.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/idols', component: Idols },
]

const router = new VueRouter({
  routes
})

export default router
