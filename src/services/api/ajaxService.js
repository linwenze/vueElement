import axios from 'axios';
import qs from 'qs';
import * as userInfo from '../common/getUserInfo';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 60000;
// axios.defaults.baseURL = process.env.API_ROOT;

let http = axios.create();

// 添加一个请求拦截器
http.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = userInfo.getAuthorization() || '';
    config.headers['Authorization'] = 'Bearer ohg2q4p7otgccumd2enmqi1h87';
    return config;
  },
  error => {
    // 请求出错
    console.log('发送错误', error);
  }
);

// 添加一个响应拦截器
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

// get请求
http.getAjax = function (url, params) {
  return http.get(url, {params: params});
};

// post 请求
http.postAjax = function (url, params, isJson = false) {
  return isJson?http.post(url, params) : http.post(url, qs.stringify(params));
};
// 更新接口 参数为 form-data形式传
http.updateAjax = function (url, params) {
  return http.put(url, qs.stringify(params));
};
// 删除接口
http.deleteAjax = function (url) {
  return http.delete(url);
};

export default http;
