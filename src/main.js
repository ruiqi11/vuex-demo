import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 挂载到vue 中
  store,
  render: (h) => h(App),
}).$mount('#app')