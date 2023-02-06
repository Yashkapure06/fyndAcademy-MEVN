<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HomePage data="This is what VUE IS!" msg="Welcome to Your Vue.js App"/> -->
    <AboutPage msg="This is About Page"/>
    <ContactPage/>
  </div>
</template>

<script>
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'

export default {
  name: 'App',
  components: {
    AboutPage,
    ContactPage
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
