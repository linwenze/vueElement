# chexiu.4s.scrm

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

#开发环境切换域名
@src/config/env.js文件下切换
let Host=process.env.HOST || 'prod';
switch (Host) {
  case 'test':
    baseUrl = 'https://pcapi.test-chexiu.cn';
    break;
  case 'pro':
    baseUrl = 'https://pcapi.chexiu.cn';
    break;
  case 'demo':
  baseUrl = 'https://newpc.demo-chexiu.cn';
  break;
  default:
    baseUrl = 'https://newpc.dev-chexiu.cn';//开发环境当前环境，可修改baseUrl切换环境
   
    break;
}

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build -- demo   demo环境

# build for production with minification
npm run build -- test   测试环境

# build for production and view the bundle analyzer report
npm run build -- pro 生产环境

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
#前端规范
命名规范

1、全局函数

  gFunxxx                      gFunCheckDate

2、全局对象

  gVar                        gVarIsLogin

3、文件名称

名称_动作_类型                userEditCtrl.js

便于相同模块文件在一个区域

4、对象名称

  动作_名称_类型                getUserInfo

5、常用的单词

新增：add          编辑：edit

保存：save          列表：list

详细：info          审批：audit

确认：confirm        查询：find

获取：get          设置：set

加载：load          状态：status

跳转：to          删除：del

6、常见文件名称

  控制器：名称Ctrl          userInfoCtrl.js

  指令：名称Directive        userDirective.js

  过滤器：名称Filter        userFilter.js

  路由：名称State            userState.js

  服务：名称Service          userService.js

  全局函数：名称Fun          baseFun.js

  视图：名称Tpl            userTpl.html

7、CSS class命名
add-user-info
8、JS命名骆峰法


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
