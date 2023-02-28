<template>
    <div>
        <h3>Data of User</h3>
        <div>
            <div>
                ID:{{id}}
            </div>
            <div>
                Title:{{post.title}}
            </div>
            <div>
                Description:{{post.description}}
            </div>
        </div>
        <div>

            
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:"PostDemo",
    data(){
        return{
            id:'',
            post:'',
            title:'',
            description:''
        }
    },
    created(){
        this.id=this.$route.params.id
        // axios.get(`https://fynd-vue-default-rtdb.asia-southeast1.firebasedatabase.app/post/${this.id}.json`)
        axios.get(`post.json?id=${this.id}`)
        .then((response)=>{
            this.post = response.data[this.id]

        })
    }

}
</script>