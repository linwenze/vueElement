import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { handleResponse } from './services/common/handleResponse';
import { getUser } from './config/tools/util';
import Element from 'element-ui'
import component from './components/statis/index';
import api from './config/api/action/index'

// 样式
import '@/assets/css/base.scss'; // 全局自定义的css样式
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/element-reset.scss';
import '@/assets/css/scrm-icon.scss';
import 'font-awesome/css/font-awesome.min.css' // font-awesome样式
Vue.use(api)
Vue.use(Element)
Vue.config.productionTip = true
Vue.prototype.$handleResponse = handleResponse;
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue();


//数字转字符串过滤器
Vue.filter("filterNuber", function(value) {   
 return value.toString();
});
Vue.filter("normalTime", function(value) {   
 return value.toString();
});

// 注册全局组件
Object.keys(component).forEach(key => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()); // 首字母大写
  Vue.component(`${name}`, component[key]);
});
router.beforeResolve((to, from, next) => { // 全局路由钩子
  getUser();//获取用户信息
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
