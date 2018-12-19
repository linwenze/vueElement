// import {setStore, getStore} from '../config/mUtils'
import { Loading } from 'element-ui';
export default {
  // 设置session
  setSession(state, value) {
    state.session = value;
  },
  saveUser(state,value){
    state.userInfo=value;
  },
  openLoading(state) {
    state.loadingShow = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
  },
  closeLoading(state) {
    state.loadingShow.close()
  },

}
