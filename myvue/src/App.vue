<template>
  <div id="app">
    <ul>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <!--使用路由router-link to="和路由的path内容一致"-->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="helloworld">Hello</router-link></li>
    </ul>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
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
