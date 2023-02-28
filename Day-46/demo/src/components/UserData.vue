<template>
    <div>
        <h1>User Data</h1>
        <h3>User ID: {{id}}</h3>
    </div>
</template>
<script>
export default {
    name: "UserData",
    data() {
        return {
            id: this.$route.params.id
        }
    },
}
</script>