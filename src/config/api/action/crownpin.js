import fetch from '../../axios'
import { crownpin } from '../port_url'
import store from '../../../store/index'
import axios from 'axios'


//试驾列表
export function shijia(params,hideLoad) { 
  if(!hideLoad){
    store.commit('openLoading')
  }
  return fetch.$ajax('GET', crownpin.shijia, params);
}
