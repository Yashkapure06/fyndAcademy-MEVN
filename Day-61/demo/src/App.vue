<template>
  <div id="app">
    <WeatherApp />
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp.vue';
export default {
  name: 'App',
  components: {
    WeatherApp  
  }
}
</script>

<style>
body{
  background: linear-gradient(37deg, #fd591c, #b5cbff, #1e1e1e, #4cff79, #b9b9b9);
  background-size: 1000% 1000%;

  -webkit-animation: colorgradiant 30s ease infinite;
  animation: colorgradiant 30s ease infinite;
}

@-webkit-keyframes colorgradiant {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@keyframes colorgradiant {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

</style>
