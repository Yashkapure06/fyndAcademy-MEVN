<template>
    <div>
        <h1>Edit item  child of created item</h1>

        <button>
            <router-link :to="`/post`" class="btn btn-success">Back</router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: "EditItem",
    data(){
        return{
            id: this.$route.params.id
        }
    },
}
</script>