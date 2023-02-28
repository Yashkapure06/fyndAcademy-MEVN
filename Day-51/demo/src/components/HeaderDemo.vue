<template>
    <div >
        <router-link class="links" to="/login">Login</router-link>

        <router-link class="links" to="/profile">Profile</router-link>
    </div>
</template>

<script>
export default{
    name: "HeaderDemo"
}
</script>
<style scoped>
.links{
    margin:0 10px;
    font-weight: 700;
}

</style>