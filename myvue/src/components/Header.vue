<template>
  <header @click="changeTitle">
    <h1>{{title1}}--{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      title1: "Vue.js Demo"
    }
  },
  props: ["title"],
  methods: {
    changeTitle () {
      // this.title = "只有头部发生变化";
      // 子组件向父组件传值$emit("传值名字","内容")
      this.$emit("titleChanged","子组件向父组件传值")
    },
  },
  // vue的生命周期函数
  // beforeCreate () {
  //   alert("beforeCreate组件实例化之前执行的函数");
  // },
  // created () {
  //   alert("created组件实例化完毕,但页面还未显示");
  // },
  // beforeMount () {
  //   alert("beforeMount组件挂载前,页面仍未显示,但虚拟Dom已经配置");
  // },
  // mounted () {
  //   alert("mounted组件挂载完毕,此方法执行后,页面显示");
  // },
  // beforeUpdate () {
  //   alert("beforeUpdate组件更新前,页面仍未更新,但虚拟Dom已经配置");
  // },
  // updated () {
  //   alert("updated组件更新完毕,此方法执行后,页面显示");
  // },
  // beforeDestroy () {
  //   lert("beforeDestroy组件销毁前");
  // },
  // destroyed () {
  //   lert("destroyed组件销毁");
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
