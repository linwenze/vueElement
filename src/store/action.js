import { Notification } from 'element-ui';
export default {
  error({ commit }, tips) {
    Notification.error({
          title: '错误提示',
          message: tips
    })
  },
  success({ commit }, tips) {
    Notification.success({
          title: '操作提示',
          message: tips
    })
  },
  getSession({ commit,state }){
     return state.session
  },
  setUser(context,val){
    context.commit('saveUser',val)
  }
  
}
