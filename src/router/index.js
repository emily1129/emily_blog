import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: { name: 'Home' }
  }, {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
