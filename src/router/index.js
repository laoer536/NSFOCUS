import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      redirect: '/home'
  },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
]

const router = new VueRouter({
  /*mode: 'history',
  base: process.env.BASE_URL,*/     /*这里为什么要注释掉，因为只有使用vue默认的hash模式才行，当然只是如果要发布就要这样子来，自己运行可以不注释掉*/
  routes
})

export default router
