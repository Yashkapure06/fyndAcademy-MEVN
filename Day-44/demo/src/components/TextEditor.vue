<template>
    <div>
      <div @click="showEditor = true">{{ text }}</div>
      <div v-if="showEditor" class="editor">
        <input type="text" v-model="newText" />
        <button @click="showEditor = false">Save</button>
      </div>
    </div>
  </template>
  
 
  
  <script>
  export default {
    data() {
      return {
        text: "Click to edit",
        showEditor: false,
        newText: ""
      };
    },
    //watch means 
    //whenever the value of showEditor changes
    //we will run the function
    
    watch: {
      showEditor(value) {
        if (!value) {
          this.text = this.newText;
          this.newText = "";
        }
      }
    }
  };
  </script>
<style>
   .editor {
     position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

   }
 </style>