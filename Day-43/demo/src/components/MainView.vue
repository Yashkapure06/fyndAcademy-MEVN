<template>
    <div>
        <div class="button-container">
            <button v-on:click="view = 'list'"><i class="fa fa-list" aria-hidden="true"></i></button>
            <button @click="view = 'grid'"><i class="fa fa-th" aria-hidden="true"></i></button>
        </div>
        <div v-if="view === 'list'">
           
            <ListView/>
            
        </div>
        <div v-if="view === 'grid'">
            
            <GridView/>
            
        </div>
    </div>
</template>

<script>
import GridView from './GridView.vue';
import ListView from './ListView.vue';

    export default {
    name: "MainView",
    components: { ListView, GridView },
    data() {
        return {
            view: 'list'
        }
    }
}
</script>
<style scoped>
h1 {
    text-align: center;
}
.button-container {
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
    padding: 10px;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
}
button {
    margin: 10px;
    font-size: 25px;
    padding: 10px;
    border: none;
    background-color: #71a74c;
    border-radius: 5px;
    cursor: pointer;
    color: #ddd;
}
button:hover {
    background-color: #ddd;
    color: #71a74c;
}

</style>
 