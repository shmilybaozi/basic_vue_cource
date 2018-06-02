// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
// import Users from './components/Users'

Vue.config.productionTip = false;
Vue.use(VueRouter);
// vue官方建议不要使用 vue-resource 了,用axios代替
Vue.use(vueResource);

// 配置路由
const router = new VueRouter({
  routes: [
    {path:"/",component:Home},
    {path:"/helloworld",component:HelloWorld},
  ],
  // 消除地址中的#
  mode: "history"
});

// 全局注册组件
// Vue.component('users',Users)

/* eslint-disable no-new */
new Vue({
  // 使用路由
  router,

  // 绑定根标签
  el: '#app',

  // 注册组件
  components: { App }, //<---来源于 import 导入的App.vue

  // 模板
  template: '<App/>' // <---组件调用标签
});

// index.html ---> main.js ---> App.vue
