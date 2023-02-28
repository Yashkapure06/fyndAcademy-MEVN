<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="" method="post">
      <input type="text" name="name" id="name" placeholder="Enter your name" />
      <input type="submit" value="Submit" />
      <!--*  -->
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
