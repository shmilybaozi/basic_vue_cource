<template>
  <footer>
    <p>{{copyright}}{{title}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      copyright: "Copyright 2018 Vue Demo"
    }
  },
  props: ["title"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
