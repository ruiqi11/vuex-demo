import Vue from 'vue'
// 导入 我们自己写的 Vuex 插件
import Vuex from './myVuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '张三',
    high: 199,
  },
  mutations: {
    changeName(state, newName) {
      state.name = newName
    },
  },
  actions: {
    changeNameAsync(context, newName) {
      setTimeout(() => {
        // 在这里调用 mutations 中的处理方法
        context.commit('changeName', newName)
      }, 1000)
    },
  },
  getters: {
    decorationName(state) {
      return `我的名字叫${state.name}，身高${state.high}`
    },
  },
})