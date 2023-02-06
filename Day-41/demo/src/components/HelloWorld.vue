<template>
  <div>
    <!-- <p v-size="'small'">This is paragraph</p> 
    <p v-size>This is paragraph</p> 
    <p v-size="'big'">This is paragraph</p> 
    <span  v-changeStyle>This is span</span><br/>
    <span  v-changeStyle="{color:'purple'}">This is span</span> -->

    <!-- <h1>{{ message }}</h1> -->
    <h1>{{ changeToUpperCase() }}</h1>
    <p>marks in % {{ marks | perConv }}</p>
<!-- Filter -->
    <h1>{{ str | toUpperCase | isPalindrome }}</h1>

      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      message:"my name is yash kapure",
      marks:7.5,
      str:"leVeL"
    }
  },
  methods:{
    changeToUpperCase(){
      return this.message.toUpperCase()/;
    }
  },
}
</script>

