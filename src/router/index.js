import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/user.vue'

Vue.use(VueRouter)
// 路由规则数组
const routes = [
  // meta记录路由信息
  { path: '/', component: Home, meta: { isRecord: true, top: 0 } },
  { path: '/user', component: User }

]
// 创建路由实例对象
const router = new VueRouter({
  routes,
  // 在页面之间导航时控制滚动的函数。可以返回一个 Promise 来延迟滚动。
  scrollBehavior (to, from, savedPosition) {
  // `to` 和 `from` 都是路由地址
    // `savedPosition` 可以为空，如果没有的话。
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})

export default router
