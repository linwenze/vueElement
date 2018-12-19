import store from '@/store'
export function getParams() {
  let url = location.search;
  let theRequest = new Object();
  if (url.indexOf('?') != -1) { 
    let str = url.substr(1); 
    let strs = str.split("&"); 
    for(var i = 0; i < strs.length; i ++) { 
      theRequest[strs[i].split('=')[0]]=(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}

//手机号验证
export function telReg(val) {
  var telReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/;
  return telReg.test(val);
}

//身份证号验证
export function IDReg(val) {
  var IDReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
  return IDReg.test(val);
}


export function getUser(){
   let userInfo=store.getters.userInfo;
    if(userInfo.token){
        return
      }else{
        let user_info=localStorage.getItem('user_info');
        user_info=JSON.parse(user_info);
        store.dispatch('setUser', user_info)
      }
}