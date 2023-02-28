<template>
    <div>
        <h1>Hey! {{ name }}</h1>
        <p id="test">
            <button v-on:click="test">Click  me</button>
        </p>

        <p>Filter: {{text | toLowerCase}}</p>

    </div>
</template>
<script>
export default{
    name:'NewComponent',
    props: {
        name: String,
    },
    data(){
        return{
            text:"Hey There!, Have a  great day"
        }
    },
    methods:{
        test(){
            document.getElementById('test').innerHTML = 'Hello World!'
        }
    
    }
}
</script>