// import {setStore, getStore} from '../config/mUtils'

export default {
  // 设置session
  setSession(state, value) {
    state.session = value;
  },
  openLoading(state) {
    state.loadingShow = true;
  },
  closeLoading(state) {
    state.loadingShow = false;
  },

}
