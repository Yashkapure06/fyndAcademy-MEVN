<template>
    <div>
        <h1>Methods Demo</h1>
        <!-- <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>
        <br/><span>{{ publishedBooksMessage2 }}</span> -->
        <!-- <h1> Random number but METHOD</h1>
        <br/><span>{{ getRandomno1() }}</span>
        <br/><span>{{ getRandomno1() }}</span>
        <br/><span>{{ getRandomno1() }}</span>
        <hr/>
        <h1> Random number but COMPUTED</h1>
        <br/><span>{{ getRandomno2 }}</span>
        <br/><span>{{ getRandomno2 }}</span> -->
        <!-- <h1>Watch in VUE</h1>
        Kilometers<input type="text" v-model="kilometers"/>
        Meters<input type="text" v-model="meters"/>
        <input type="text" v-model="message">
        <br/> -->

        <input v-model="name"/>
        <button v-on:click="myName(name)">Submit</button>
        <p>{{ output }}</p>
            
    </div>
</template>

<script>
export default {
    name: "MethodsDemo",
    data(){
        return{
            kilometers:0,
            meters:0,
            message:"",
            typing:false,
            name:'',
            output:''
        }
    },
    // watch:{
    //     kilometers(val){
    //         this.kilometers = val;
    //         this.meters = val * 1000;
    //     },
    //     meters(val){
    //         this.kilometers = val / 1000;
    //         this.meters = val;
    //     },
    //     message(newVal,oldVal){
    //         console.log("newVal",newVal);
    //         console.log("oldVal",oldVal);
    //         this.typing = true;
    //         //what is happening over here?
    //         //we are setting a timeout of 2 seconds
    //         //and then we are setting typing to false
    //         //so that we can see the typing message
    //         //for 2 seconds
    //         setTimeout(() => {
    //             this.typing = false;
    //             console.log("typing",this.typing);
    //         }, 2000);
    //     }
    // },
    methods:{
        myName(name){
            this.output = name;
            setTimeout(() => {
            this.output = `${name} Kapure`
            }, 5000)
        }

    }
    
    // methods:{
    //     getRandomno1:function(){
    //         return Math.random();
    //     }
    // },
    // computed:{
    //     getRandomno2:function(){
    //         return Math.random();
    //     }
    // }
    // data() {
    //     return {
    //         author: {
    //             name: "Yash Kapure",
    //             books:[
    //                 'book1',
    //                 'book2',
    //                 'book3',
    //                 'book4',
    //             ]
    //         }
    //     };
    // },
    // methods: {
    //     publishedBooksMessage1() {
    //         return this.author.books.length > 0 ? "Yes": "No";
    //     },
    // },
    // computed: {
    //     publishedBooksMessage2() {
    //         return this.author.books.length > 0 ? "Yes inside Computed": "No";
    //     },

};
</script>