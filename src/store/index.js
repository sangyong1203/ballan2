import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 회원정보 저장
    userInfo:{}
  },
  getters: {
  },
  mutations: {
    // 회원정보 수정
    setUserInfo(state, param){
      state.userInfo = Object.assign({},this.state.userInfo, param)
    }
  },
  actions: {
  },
  modules: {
  }
})
