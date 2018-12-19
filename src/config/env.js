/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let host = '';
let routerMode = 'history';
let imgBaseUrl = 'http://images.cangdu.org/';
let oldHost='';//旧系统
baseUrl = '';
let Host=process.env.HOST || 'prod';
switch (Host) {
  case 'test':
    baseUrl = 'https://pcapi.test-chexiu.cn';
    oldHost='https://pcv8.test-chexiu.cn';
    break;
  case 'pro':
    baseUrl = 'https://pcapi.chexiu.cn';
    oldHost='https://pcv8.chexiu.cn';
    break;
  case 'demo':
  baseUrl = 'https://pcapi.demo-chexiu.cn';
  oldHost='https://pcv8.demo-chexiu.cn';
  break;
  default:
    baseUrl = 'https://pcapi.dev-chexiu.cn';
    oldHost='https://pcv8.dev-chexiu.cn';

    break;
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  oldHost,
  host
}
