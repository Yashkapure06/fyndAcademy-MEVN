<template>
    <div>
        <h1>Home Page</h1>
        <!-- <h2 v-on:mouseover="display('hi there!')">{{msg}} {{data}}</h2> -->
        <!--<button v-on:click="show()">Show</button>
        <button v-on:click="display('Hello from HomePage from display()')">Display</button>
        <button v-on:mouseover="display('Hello from HomePage from display() with mouseover')">MouseOver</button> -->

        <!-- <h3></h3> -->
        <!-- <h1 v-if="show">Conditional Rendering in Vue JS</h1>
        <h1 v-else>Else side</h1>
<br/>
        <h1 v-if="num<0">The number is negative</h1>
        <h1 v-else-if="num>0">The number is positive</h1>
        <h1 v-else>The number is zero</h1>

        <button v-on:click="display()">Show/Hide(Toggle)</button> -->
            <p>{{ msg }}</p>
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="obj in arrayObj" :key="obj.id">
                <td>{{obj.id}}</td>
                <td>{{obj.name}}</td>
                <td>{{obj.email}}</td>
            </tr>
        </table>

    </div>

</template>

<script>

export default {
    name: "HomePage",
    props:{
        msg:String
    },
    //array object
    data() {
        return {
            arrayObj: [
                {
                    id: "1",
                    name: "John",
                    email: "james@gmail.com",
                },
                {
                    id: "2",
                    name: "Doe",
                    email: "doe@gmail.com"
                },
                {
                    id: "3",
                    name: "Smith",
                    email: "smith@gmail.com"
                },
                {
                    id: "4",
                    name: "James",
                    email: "james@gmail.com"
                },
            ]
        }
    }


    // data(){
    //     return{
    //         show:false,
    //         num:-10
    //     }
    // },
    // methods:{
    //     display(){
    //         this.show =!this.show
    //     }
    // }
    // props:{
    //     data:String,
    //     msg:String
    // },
    // methods:{
    // show(){
    //     console.log("Hello from HomePage inside Show() method");
    // },
    // display(data1){
    //     alert(data1)
    // }

    // }
}
</script>


<style scoped>
    div h1{
        background-color:rgb(225, 133, 133);
    }
    p{
        background-color:#cde185;
        width: 50%;
        margin: 0 auto;
    }
</style>