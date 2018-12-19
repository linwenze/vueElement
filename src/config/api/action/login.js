import fetch from '../../axios'
import {login} from '../port_url'
import store from '../../../store/index'
import axios from 'axios'
export function toLogin(params) {  
  store.commit('openLoading')
  return fetch.$ajax('POST', login.loginurl, params);
}
export function loginOld(params) {  
  store.commit('openLoading')
  return fetch.$ajaxOld('OPTIONS', login.loginOldUrl, params);
}
