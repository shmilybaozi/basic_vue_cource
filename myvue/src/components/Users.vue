<template>
  <div class="users">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="(users,index) in users" :key="index">
        <h2>{{users.name}}</h2>
        <h3>{{users.email}}</h3>
      </li>
    </ul>

    <button @click="deleteUser">传引用：在子组件中修改数据,所有引用位置都改变</button>
  </div>
</template>

/*
父组件传递数据给子组件：
1.传值：string number boolean  --->在子组件中修改数据,仅当前组件发生修改
2.传引用：array object    --->在子组件中修改数据,所有引用位置都改变
根据需求来定传值还是传引用
*/

<script>
export default {
  name: 'users',
  // 接受父组件传递的数据props:["自定义属性名"]
  props: ["users"],
  // props的标准写法：
  /*  props: {
    users: {
      type: Array,
      required: true,
    }
  }, */
  data () {
    return {
      title: "Hello users",
    }
  },
  methods: {
    deleteUser () {
      this.users.pop();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: purple;
}
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 1px;
}
</style>
