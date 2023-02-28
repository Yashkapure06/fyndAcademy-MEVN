<template>
    <div>
        Home component
<!-- <childDemo name1="abc"/>
<childDemo name1="Peter"/>
<childDemo name1="John"/>

<childDemo><h1>Heading Tag</h1></childDemo>
<childDemo><a href="#">Google</a></childDemo>
<childDemo><img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg" alt=""></childDemo>
<childDemo></childDemo> -->
<childDemo>
    <template  v-slot:header><h1>Peter Parker</h1></template>
     <template  v-slot:main> <p>Paragraph tag</p> <span>Vue JS course</span> </template>
          <template  v-slot:footer><button>Click Now</button></template>

   
    
    <button>Click Now</button>
</childDemo>
<childDemo>
    <template  v-slot:header><h1>John Wick</h1></template>
     <template  v-slot:main> <p>Paragraph tag</p> <span>Vue JS course</span> </template>
          <template  v-slot:footer></template>

   
    
    <button>Click Now</button>
</childDemo>
<!-- <childDemo>
    <h1>Peter Parker</h1>
    <p>Paragraph tag</p>
    <span>Vue JS course</span>
    <button>Click Now</button>
</childDemo> -->
    </div>
</template>
<script>
import childDemo from './childDemo.vue';
export default {
    components:{
        childDemo
    }
}
</script>