import fetch from '../../axios'
import { crownpin } from '../port_url'
import store from '../../../store/index'
import axios from 'axios'


//车源列表
export function carList(params) { 
  store.commit('openLoading')
  return fetch.$ajax('GET', crownpin.carList, params);
}
