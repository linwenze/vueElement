import axios from 'axios'
import {baseUrl,oldHost} from './env'
import store from '../store/index'
// axios.defaults.headers.common['Authorization'] = `Bearer m_b6bAU6SrLpW`
let xhrQueue = {};
const queue = (source)=> { // 负责存队列
  const _id = `${+new Date()}${Math.ceil(Math.random() * 10000)}`;
  xhrQueue[_id] = source;
  return _id;
}
const queueCleaner = (id)=> {// 删除队列中某个source
  delete xhrQueue[id];
}
const xhrCancel = ()=> {// 清除所有队列
  Object.keys(xhrQueue)
    .forEach(id => {
      let source = xhrQueue[id];
      source.cancel(); // 退订
    });
}
const jQueryLikeParamSerializer = (params)=> { // 把post参数格式化成formData需要的格式，主要兼容对象和数组的情况
  if (!params) return '';
  var parts = [];
  serialize(params, '', true);
  return parts.length > 0 ? parts.join('&') : '';

  function serialize(toSerialize, prefix, topLevel) {
    if (toSerialize === null || typeof toSerialize === 'undefined') return;
    if (Array.isArray(toSerialize)) {
      for (let key in toSerialize) {
        if (Object.prototype.toString.call(toSerialize[key]) === '[object Object]') {
          serialize(toSerialize[key], prefix + '[' + key + ']');
        } else {
          serialize(toSerialize[key], prefix + '[]');
        }
      }
    } else if (Object.prototype.toString.call(toSerialize) === '[object Object]') {
      for (let key in toSerialize) {
        serialize(toSerialize[key], prefix +
            (topLevel ? '' : '[') +
            key +
            (topLevel ? '' : ']'));
      }
    } else {
      // parts.push(encodeURIComponent(prefix) + '=' + encodeURIComponent(serializeValue(toSerialize)));
      parts.push(encodeURIComponent(prefix) + '=' + encodeURIComponent(toSerialize));
    }
  }
}
export default {
  $request({method,url,params,options}){
    // console.log(method,url,data,options);
    options = options? options: {};
    let headerObj;
    if ( method === 'GET') {
      options.params = !!params ? params : null;
      headerObj = {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'responseType': 'application/json',
      };
    } else {
      options.data = !!params ? jQueryLikeParamSerializer(params) : null;
      headerObj = {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'responseType': 'application/json',
      };
    }
    
    let myHeaders=options.headers? options.headers: headerObj
    // let token = store().state.session;
    // alert(token)
    let userInfo=store.getters.userInfo;
    if(userInfo && userInfo.token){
        let Authorization={
        Authorization: 'Bearer ' + userInfo.token
      }
      Object.assign(myHeaders,Authorization)
    }
    // console.log(options);
    const config = Object.assign({
      url,
      method,
      headers: myHeaders
    },options);
    // console.log(config);
    return new Promise((resolve,reject)=>{
      let source = axios.CancelToken.source();
      config.cancelToken = source.token;
      const queueId = queue(source); // 存进队列
      axios.request(config).then(res=>{
        // error处理

        if (res.data.ret === 100 || res.data.code==200) {
          resolve(res.data);
        } else {
          let msg=res.data.msg?res.data.msg:res.msg;
          store.dispatch('error', msg)
          reject(res.data); 
        }
        queueCleaner(queueId); // 释放队列中的subscription
      }).catch(error=>{
        // console.log(error.response);
        // console.log(error.config);
        // console.log(error.message);
        // store.dispatch('inquiry', '登录失效，重新登录？') 
        // 
        if(error.response && error.response.data.code==401){
          window.location.href="/login"
        }
        reject(error);
        queueCleaner(queueId); // 释放队列中的subscription
      });
    });
  },
  $ajaxOld(method,url,params,options){
    url=oldHost+url;
    return this.$request({method,url,params,options});
  },
  $ajax(method,url,params,options){
    url=baseUrl+url;
    return this.$request({method,url,params,options});
  },
  $get(url,params,options){
    url=baseUrl+url;
    return this.$request({method: 'GET',url,params,options});
  },
  $post(url,params,options){
    url=baseUrl+url;
    return this.$request({method: 'POST',url,params,options});
  },
  baseUrl,
  oldHost,
  setHeaderAuthorization(state,token){
    state.token = token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}
