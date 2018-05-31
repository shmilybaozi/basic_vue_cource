/* 1.模板：html结构 */
<template>
  <!-- 有且只能有一个根标签 -->
  <div id="home">
    <!-- 在子组件对应的标签中 绑定$emit("传值名字","内容")为传值名字的属性 获取内容用$event -->
    <app-header :title="title" @titleChanged="updateTitle($event)"></app-header>
    <!-- 父组件向子组件传值：在子组件的标签中绑定一个自定义属性,传入数据 -->
    <users :users="users"></users>
    <users :users="users"></users>
    <app-footer :title="title"></app-footer>
  </div>
</template>

/* 2.行为：处理逻辑 */
<script>
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
   // 局部注册组件
  components: {
    Users,
    "app-header": Header,
    "app-footer": Footer,
  },
  data () {
    return {
      title: "传值：在子组件中修改数据,仅当前组件发生修改",
      users: [
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      //   {name: "图图",food:"爱吃小龙虾",show:false},
      ],
    }
  },
  methods: {
    updateTitle (title) {
      this.title = title;
    },
  },
  // created 组件实例化完毕,但页面还未显示,读取数据data
  created () {
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
      this.users = data.body;
    })
  },
}
</script>

/* 3.样式：解决样式 */
<style>
h1{
  color: pink;
}
</style>