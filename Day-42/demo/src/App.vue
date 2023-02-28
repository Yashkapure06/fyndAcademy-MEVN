<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NewComponent name="Yash"/>
  </div>
</template>

<script>
import NewComponent from './components/NewComponent.vue'

export default {
  name: 'App',
  components: {
    NewComponent
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
