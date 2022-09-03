import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userSignUp',
    component: () => import('../views/login/userSignUp.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('../views/login/userInfo.vue')
  },
  {
    path: '/userCard',
    name: 'userCard',
    component: () => import('../views/login/userCard.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
