<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

        
        <h1>{{ datashow }}</h1>
        <!-- <input type="text" v-model="datashow"> -->
        <!-- <button v-on:click="add">Add</button> -->
        <button @click="add" class="btn btn-success">Add</button>
        <h2>Add Number 100+300={{ total }}</h2>

        <!-- MouseEvent -->
        <!-- <div @mouseover="hover" :style="styleobj"></div> -->
        <!-- <div :style="styleobj" @mouseout="hover"></div> -->
        <!-- <div :style="styleobj" v-on:mouseover="hover" v-on:mouseout="originalColor"></div> -->

        <!-- Event MOdifiers -->
        <button v-on:click="buttonClicked" v-bind:style="styleobj1">Click Me</button>
        Output:{{ clicknum }}
        <br/>
        <br/>
        <br/>
        <button v-on:click.once="buttonClicked1" v-bind:style="styleobj1" class="btn btn-primary">Click Me</button>

        Output:{{ clicknum1 }}

        <a href="https://www.google.com" v-on:click.prevent="clickme" target="_blank" class="styleObj2">Google</a>

        <input type="text" v-bind:style="styleobj4" placeholder="Enter Your Name.." v-on:keyup.enter="showinput">
<h3>{{ name }}</h3>

            <div v-for="friend in friendsName" :key="friend">{{ friend.toUpperCase() }}</div>
            <br/>
            <div v-for="friend in friendsName" :key="friend">{{ friend | toUpperCase }}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                datashow:"Welcome in session",
                num1:100,
                num2:300,
                total:'',
                clicknum:0,
                clicknum1:0,
                styleobj:{
                    width:'100px',
                    height:'100px',
                    backgroundColor:'red'
                },
                styleobj1:{
                    cursor:'pointer',
                    padding:'8px 16px',
                    backgroundColor:'#2396f3',
                    verticalAlign:'middle'
                },
                styleObj2:{
                    color:'#4caf50',
                    textDecoration:'none',
                    cursor:'pointer',
                    padding:'20px',
                    fontSize:'50px'
                },
                styleobj4:{
                    width:'30%',
                    height:'50px',
                    padding:'10px',
                    fontSize:'20px',
                    border:'1px solid #ccc',
                    borderRadius:'5px'
                },
                name:'',
                friendsName:[
                    'Atharva',
                    'Siddharth',
                    'Yash'
                ]

            }
        },
        methods:{
            add(){
                this.total = this.num1 + this.num2;
            },
            hover(){
                console.log("Hover");
                this.styleobj.backgroundColor = "green";
            },
            originalColor(){
                this.styleobj.backgroundColor = "red";
            },
            buttonClicked(){
                this.clicknum++;
            },
            buttonClicked1(){
                this.clicknum1++;
            },
            showinput(e){
                this.name = e.target.value
            }
        }
    }
</script>