<template>
    <div>
        <h3>Post Details</h3>
        <table class="tabledata">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in postDetails" :key="post.id">
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.description}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import axios from "axios";
export default {
    name: "CreatePost",
    data(){
        return{
            postDetails:[]
        }
    },
    mounted(){
        //use axios
        axios.get(`https://fynd-vue-default-rtdb.asia-southeast1.firebasedatabase.app/post.json`)
        .then((response)=>{
            console.log(response.data)
            this.getData(response.data)
        })
    },
    methods:{
        getData(postsData){
            for(let key in postsData){
                this.postDetails.push({
                    id: key,
                    title: postsData[key].title,
                    description: postsData[key].description
                })   
            }
        }
    }
}
</script>