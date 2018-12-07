import Vue from 'vue'
import Router from 'vue-router'

// 引入子路由
import crownpin from './crownpin'
import login from '@/pages/login/Login';
import market from './market';

Vue.use(Router)

let baseRoute = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: login, name: 'login'},
];

var router = new Router({
  mode: 'history',
  routes: baseRoute.concat(crownpin,market)
})

router.beforeEach(function (to, from, next) {
  next();
  // 页面切换成功，页面会滚到顶部
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;


  // document.title = to.name; //page跳转后title改
  // let login = localStorage.getItem('userInfo');

  // let path = to.path;
  // if (path === '/login') {
  //   next();
  //   return;
  // }
  // if (login) { // 判断是否登录，防止未登录时浏览器后退回到上一个页面
  //   if (path === '/') {
  //     next({
  //       path: '/index'
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next({
  //     path: '/login'
  //   })
  // }
})

export default router
