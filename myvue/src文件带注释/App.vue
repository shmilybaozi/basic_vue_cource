/* 1.模板：html结构 */
<template>
  <!-- 有且只能有一个根标签 -->
  <div id="app">
    <img src="./assets/logo.png">

    <!-- 显示HelloWorld组件内容 -->
    <HelloWorld/>

  </div>
</template>

/* 2.行为：处理逻辑 */
<script>
// 导入components文件夹下的HelloWorld组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  // 注册组件
  components: {
    HelloWorld
  }
}
</script>

/* 3.样式：解决样式 */
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
