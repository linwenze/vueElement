import fetch from '../../axios'
import { common } from '../port_url'
import store from '../../../store/index'
import axios from 'axios'


//获取用户列表
export function getAccount(params) { 
  console.log(common)
  return fetch.$ajax('GET', common.account, params);
}
