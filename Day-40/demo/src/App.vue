<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <TemplateDemo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TemplateDemo from './components/templateDemo.vue'

export default {
  name: 'App',
  components: {
    TemplateDemo
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
