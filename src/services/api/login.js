import http from './ajaxService';

// 登录接口
export function login(params) {
  return http.postAjax('/site/login', params);
}

// 退出接口
export function logout() {
  return http.postAjax('/login/apiLogout', {});
}