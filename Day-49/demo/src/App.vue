<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <HobbiesDemo>
        <h2>Hobby</h2>
      </HobbiesDemo>
    </div>
    <p></p>
    <div>
      <HobbiesDemo>
        <template #delault="{hobby}">
          <h2>{{hobby}}</h2>
        </template>
      </HobbiesDemo>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import HobbiesDemo from './components/HobbiesDemo.vue';

export default {
  name: 'App',
  components: {
    HobbiesDemo
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
