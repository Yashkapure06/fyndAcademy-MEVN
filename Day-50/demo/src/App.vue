<template>
  <div id="app">
    <ProductListone></ProductListone>
    <ProductListtwo></ProductListtwo>
  </div>
</template>

<script>
    
import ProductListone from './components/ProductListone.vue' 
import ProductListtwo from './components/ProductListtwo.vue'

export default {
  name: 'App',
  components: {
    ProductListone,
    ProductListtwo
  },
  data(){
    return{
      
    }
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
