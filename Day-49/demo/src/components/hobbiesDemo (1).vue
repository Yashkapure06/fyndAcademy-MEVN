<template>
    <div>
<ul>
    <li v-for="hobby in hobbies" :key="hobby"><slot :hobby="hobby" :item=4></slot></li>
</ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hobbies:['sports','reading','writing']
        }
    }
}
</script>