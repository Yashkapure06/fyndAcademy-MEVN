<template>
    <div>
        <h1>
            Using Directives
        </h1>
        <h2 v-once>{{ fname }}</h2>
        <h2>{{ fname }}</h2>
        <button v-on:click="hello()">Click me</button>
        <br/>
        {{ 4+6 }}
        <br/>
        <p>{{ htmlData }}</p>
        <p v-html="htmlData"></p>
        <button v-bind:disabled="btnDisabled">Submit</button>

        <img v-bind:src="src1" alt="" width="300" height="400">
        
        <a v-bind:href="hreflink">Stranger Things</a>


        <p>Binding in classes</p>
        <p class="active">Paragraph</p>
        <h1 v-bind:class="{active: isActive}"> Heading 1</h1>
        <h1 class="info" v-bind:class="{active: isActive}"> Heading 2 </h1>


        <h1 v-bind:id="{active: isIDActive}"> Heading 3</h1>
        <h1 class="info" v-bind:id="{active: isIDActive}"> Heading 4 </h1>

    </div>
</template>
<script>
export default {
    name: "TemplateDemo",
    data() {
        return {
            fname: 'abcdef',
            htmlData:'<h1>Heading tag</h1>',
            btnDisabled:true,
            src1:'https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==',
            hreflink:'https://www.netflix.com/in/title/80057281',
            isActive:true,
            isIDActive:true
        }
    },
    //yaha hum function banate hai
    methods: {
        hello() {
            this.fname="fynd";
        }
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .active{
        background-color: red;
        color: black;
    }
    #active{
        background-color: red;
        color: black;
    }
    .info{
        background-color: blue;
        color: white;
    }
</style>