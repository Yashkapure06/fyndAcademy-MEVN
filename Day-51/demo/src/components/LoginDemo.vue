<template>
    <div>
        <h1>Login</h1>
        <label>Email: </label>
        <input id="email" type="email" v-model="email">
        <!-- {{email}} -->
        <label>Password: </label>
        <input id="password" type="password" v-model="password">
        <!-- {{ password }} --><br/><br/>
        <button @click="login">Login</button>
    </div>
</template>
<script>
export default {
    name: "LoginDemo",
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods: {
            login(){
                if(this.email && this.password){
                    localStorage.setItem('token', 'my-token');
                    this.$router.replace({path:'/profile'})
                }
            }
        },
}    
</script>