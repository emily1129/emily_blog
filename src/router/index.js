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
    component: () => import('@/components/Home'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/components/Profile')
      },
      {
        path: 'web',
        name: 'web',
        component: () => import('@/components/Web')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
