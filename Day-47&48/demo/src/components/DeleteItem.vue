<template>
    <div>
        <h1>Delete route child of create item</h1>

        <button>
            <router-link :to="`/post`" class="btn btn-success">Back</router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: "DeleteItem",
    data(){
        return{
            id: this.$route.params.id
        }
    },
}
</script>