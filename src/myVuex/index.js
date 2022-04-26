// 保存一个全局的 Vue 之后会用到
let _Vue = null

// Store 类
class Store {
  constructor(options) {
    const state = options.state || {}
    const mutations = options.mutations || {}
    const actions = options.actions || {}
    const getters = options.getters || {}

    // state转为响应式数据
    this.state = _Vue.observable(state)

    // getters
    this.getters = Object.create(null)
    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key].call(this, this.state)
        },
      })
    })

    // mutations
    this.mutations = {}
    Object.keys(mutations).forEach((key) => {
      this.mutations[key] = (params) => {
        // 改变this指向 ，默认是要传入 state
        mutations[key].call(this, this.state, params)
      }
    })

    // actions
    this.actions = {}
    Object.keys(actions).forEach((key) => {
      this.actions[key] = (params) => {
        // 改变this指向 ，默认是要传入 store也就是 this
        actions[key].call(this, this, params)
      }
    })
  }

  // 实现commit 方法
  commit = (eventName, params) => {
    this.mutations[eventName](params)
  }

  // 实现 dispatch 方法
  dispatch = (eventName, params) => {
    this.actions[eventName](params)
  }
}

// 因为Vuex 需要 Vue.use() 安装，所以我们必须要有个 install 方法 传入 Vue
// 全局混入，将Store类挂载到 Vue 原型
function install(Vue) {
  // 保存到全局 _Vue
  _Vue = Vue
    // 全局注册混入 这样在所有的组件都能使用 $store
  _Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        // 把 store 挂载到 Vue 原型上
        _Vue.prototype.$store = this.$options.store
      }
    },
  })
}

// 导出 install 和 Store
export default {
  install,
  Store
}