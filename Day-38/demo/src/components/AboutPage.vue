<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>About Page</h1>
        <HomePage msg="About Page ke component ke andhar Home Page Component"/>
    </div>
</template>

<script>
import HomePage from './HomePage.vue';

export default {
    name: "AboutPage",
    components:{
        HomePage
    },
    props:{
        msg:String
    }
}

</script>
<style scoped>
    div h1{
        background-color:rgb(225, 133, 133);
    }
</style>