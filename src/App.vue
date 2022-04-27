<template>
  <div id="app">
    <!-- 案例一 -->
    <div>
      <h3>案例一</h3>
      <h1>state测试: <span>{{ compute_name }}</span></h1>
      <h1>getters测试: <span>{{ compute_decorationName }}</span></h1>
      <button @click="changeName()">立刻修改</button>
      <button @click="changeNameAsync()">1s后修改</button>
    </div>
    <div>
      <h3>案例二</h3>
      <div>
        <h1>价格：<span>{{ price }}</span> 元</h1>
        <h1>数量：<span>{{ number }}</span> 个</h1>
        <h1>总价：<span>{{ this.$store.getters.total }}</span> 元</h1>
      </div>
      <div>
        <button @click="changePrice()">价格+1</button>
        <button @click="changeNumberAsync()">数量+1</button>
        <span v-if="numberBack">正在查询库存，请稍等...</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from './myVuex'
  export default {
    name: 'App',
    computed: {
      compute_name () {
        return this.$store.state.name
      },
      compute_decorationName () {
        return this.$store.getters.decorationName
      },
      ...mapState(['price', 'number', 'numberBack'])
      
    },
    methods: {
      changeName() {
        this.$store.commit('changeName', '李四')
      },
      changeNameAsync(){
        this.$store.dispatch('changeNameAsync', '王五')
      },
      changePrice() {
        this.$store.commit('changePrice')
      },
      changeNumberAsync() {
        this.$store.dispatch('changeNumberAsync')
      }
    }
  }
</script>

<style  scoped>
  h3 {
    color: rgb(81, 24, 141)
  }
  h1 span{
    color: #4f4f4f;
  }
</style>
