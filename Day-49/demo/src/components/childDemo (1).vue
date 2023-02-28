<template>
    <div>
<header><slot name="header"></slot></header>
<main><slot name="main"></slot></main>
<footer><slot name="footer"><button>Click Me</button></slot></footer>

    </div>
</template>
<script>
export default {
props:{
    name1:String
}
}
</script>