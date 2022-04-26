<template>
  <div id="app">
    <!-- 案例一 -->
    <div>
      <h1>state测试: <span>{{ this.$store.state.name }}</span></h1>
      <h1>getters测试: <span>{{ this.$store.getters.decorationName }}</span></h1>
      <button @click="changName()">立刻修改</button>
      <button @click="changeNameAsync()">一秒后修改</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => {
      return {}
    },
    methods: {
      changName() {
        this.$store.commit('changeName', '李四')
      },
      changeNameAsync(){
        this.$store.dispatch('changeNameAsync', '王五')
      }
    }
  }
</script>

<style  scoped>
  h1 span{
    color: #4f4f4f;
  }
</style>
