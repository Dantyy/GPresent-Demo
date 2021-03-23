import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Goodlist from '../components/goodlist.vue'
import Shopcar from '../components/shopcar.vue'
import Wishlist from '../components/wishlist.vue'
import Gv from '../components/gv.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    // { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/goodlist', component: Goodlist },
    { path: '/shopcar', component: Shopcar },
    { path: '/wishlist', component: Wishlist },
    { path: '/gv', component: Gv }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/home') return next()
  // 获取token
  // const tokenStr = window.sessionStorage.getItem('token')
  const tokenStr = 'admin'
  if (!tokenStr) return next('/home')
  next()
})

export default router
