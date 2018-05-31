<template>
  <div id="app">
    <ul>
      <!-- 
        <a>标签中href的内容必须和路由的path内容一致才能实现跳转
        使用<a>标签每次都重新加载页面,不满足提高运行速度的需求
          
        使用路由router-link to="和路由的path内容一致"
      -->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="helloworld">Hello</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style scoped>

</style>