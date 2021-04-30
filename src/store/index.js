import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// ストア作成
export default new Vuex.Store({
  state: {
    message: 'メッセージ'
  },
  mutations: {
    // カウントアップするミューテーションを登録
    increment(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
