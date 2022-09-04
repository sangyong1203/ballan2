import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  getters: {
  },
  mutations: {
    setUserInfo(state, param){
      console.log("setUserinfo",param)
      state.userInfo = Object.assign({},this.state.userInfo, param)
    }
  },
  actions: {
  },
  modules: {
  }
})
