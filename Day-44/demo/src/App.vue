<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <MethodsDemo/> -->
    <TextEditor/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import MethodsDemo from './components/MethodsDemo.vue';
import TextEditor from './components/TextEditor.vue';

export default {
  name: 'App',
  components: {
    // MethodsDemo,
    TextEditor
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
