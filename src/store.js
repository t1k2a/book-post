import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// ストア作成
const store = new Vuex.Store({
    state: {
        count: 0,
        list: [
            { id:1, name: 'りんご', price: 100},
            { id:2, name: 'ばなな', price: 200},
            { id:3, name: 'いちご', price: 300},
        ],
        message: 'こんにちは',
    },
    getters: {
        // 単純にステートを返す
        count(state, getters, rootState, rootGetter) {
            return state.count
        },
        // リストの各要素のpriceプロパティの中から最大数値を返す
        max(state) {
            return state.list.reduce((a, b) => {
                return a > b.price ? a: b.price
            }, 0)
        },
        // 引数付きゲッター
        // listからidが一致する要素を返す
        item(state) {
            // 引数を使用するためにアロー関数を返している
            return id => state.list.find(el => el.id === id)
        },
        // 別のゲッターを使うこともできる
        name(state, getters) {
            return id => getters.item(id).name
        },
        // messageを使用するゲッター
        message(state) {
            return state.message
        },
    },
    mutations: {
        mutationType(state, payload) {
            state.count = payload
        }
    },
    actions: {
        actionType({ commit }, payload) {
            // アクション内からコミットする
            commit('mutationType')
        },
        doUpdate({
            commit
        }, message) {
            commit('setMessage', {
                message
            })
        }
    }
})

const unwatch = store.watch(
    (state, getters) => {
        return state.count // 監視したいデータを返す
    },
    (newVal, oldVal) => {
        
    }
)

export default store