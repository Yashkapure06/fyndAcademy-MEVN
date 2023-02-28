<template>
    <div>
        <ul>
            <li v-for="hobby in hobbies" :key="hobby"><slot :hobby="hobby"></slot></li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name: "HobbiesDemo",
    data(){
        return{
            hobbies: ['Cricket', 'Hockey', ' Basketball'],
        }
    },
}
</script>