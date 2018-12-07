import fetch from '../../axios'
import {login} from '../port_url'
import store from '../../../store/index'
import axios from 'axios'
export function toLogin(params) { 
  store.commit('openLoading')
  return fetch.$ajax('GET', login.loginurl, params);
}
