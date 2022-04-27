import Vue from 'vue'
import Vuex from './myVuex' // 导入 我们自己写的 Vuex 插件
Vue.use(Vuex) // 执行了install方法

// 实例化store类
export default new Vuex.Store({
  state: {
    name: '张三',
    high: 199,
    price: 5,
    number: 6,
    numberBack: false
  },
  mutations: {
    changeName(state, newName) {
      state.name = newName
    },
    changePrice(state) {
      state.price++
    },
    changeNumber(state) {
      state.number++
    },
    changeNumberBack(state, newBack) {
      state.numberBack = newBack
    }
  },
  actions: {
    changeNameAsync(context, newName) {
      setTimeout(() => {
        // 在这里调用 mutations 中的处理方法
        context.commit('changeName', newName)
      }, 1000)
    },
    changeNumberAsync(context) {
      context.commit('changeNumberBack', true)
      setTimeout(() => {
        context.commit('changeNumberBack', false)
        context.commit('changeNumber')
      }, 2000)
    }
  },
  getters: {
    decorationName(state) {
      return `我叫${state.name}，身高${state.high}cm`
    },
    total(state) {
      return state.price * state.number
    }
  },
})