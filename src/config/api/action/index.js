import * as login from './login'
import * as crownpin from './crownpin'
import * as common from './common'
import * as market from './market'
// const apiObj = {
//   login,
//   crownpin,
//   market
// }
let apiObj={login,crownpin,common,market};
// Object.assign(apiObj,login,crownpin,market)

const install = function (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get() {
        return apiObj
      }
    }
  })
}

export default {
  install
}
