<template>
    <div>
        THis is home
        <!-- <ChildDemo name1="ABC"/>
        <ChildDemo name1="PQR"/>
        <ChildDemo name1="XYZ"/>

        <ChildDemo>
            <h1>Heading Tag</h1>
        </ChildDemo>
        <ChildDemo>
            <a href="#">google.com</a>
        </ChildDemo>
        <ChildDemo>
            <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg" alt="">
        </ChildDemo>
        <ChildDemo>
            inside child demo component
        </ChildDemo> -->
        <ChildDemo>
            <template  v-slot:header>
                    <h1>Peter Parker</h1>
            </template>
            <template  v-slot:main>
                <p>Paragraph Tag</p>
            </template>
            <template  v-slot:footer>
                <span>This is VUE JS Course</span>
            </template>
            <button>Click me</button>
        </ChildDemo>
        
        <ChildDemo>
            <template  v-slot:header>
                    <h1>Alex Hales</h1>
            </template>
            <template  v-slot:main>
                <p>Paragraph Tag</p>
            </template>
            <template  v-slot:footer>
                <span>This is VUE JS Course</span>
            </template>
        </ChildDemo>
    </div>
</template>
<script>
import ChildDemo from './ChildDemo.vue';

export default {
    name: "HomeDemo",
    components: { ChildDemo }
}
</script>