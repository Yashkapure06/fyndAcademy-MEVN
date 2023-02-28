<template>
    <div>
        <h1>Home Page</h1>
        <!-- <router-link to="user/1">  User 1 </router-link>
        <router-link to="user/2">  User 2 </router-link>
        <router-link to="user/3">  User 3 </router-link>
        <router-link to="user/4">  User 4 </router-link>
        <router-link to="user/5">  User 5 </router-link> -->
        <button @click="postClick()">Post Data</button>
    </div>

</template>

<script>
export default {
    name: "HomeDemo",
    methods: {
        postClick() {
            // this.$router.push('/post')
            // this.$router.replace({path:'/post', query:{id:3}})
            this.$router.replace('/post')
        },
    },
}
</script>