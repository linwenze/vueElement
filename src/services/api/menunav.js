import http from './ajaxService';

// 获取主菜单
export function getTopNav(params) {
  return http.getAjax('/menu/default/get-top', params);
}

// 获取左侧菜单
export function getSubNav(id, title) {
  let params = {
    column_id: id,
    column_name: title
  }
  return http.getAjax('/menu/default/get-sub', params);
}
