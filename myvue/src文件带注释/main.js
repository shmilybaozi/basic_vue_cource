// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 绑定根标签
  el: '#app',

  // 注册组件
  components: { App }, //<---来源于 import 导入的App.vue

  // 模板
  template: '<App/>' // <---组件调用标签
})

// index.html ---> main.js ---> App.vue