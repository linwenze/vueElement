export default {
  error({ commit }, tips) {
    commit('alertTips', tips)
  }
}
