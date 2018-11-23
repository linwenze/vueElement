import Vue from 'vue'
import Router from 'vue-router'
import crownpin from './crownpin';
import login from '@/pages/login';
Vue.use(Router)

const baseRoute = [{path: '/', redirect:"/login"},{
  path: '/login',
  component: login,
  name : 'login'
}];
Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: baseRoute.concat(crownpin)
})

router.beforeResolve((to, from, next) => { // 全局路由钩子
   next()
})

export default router
