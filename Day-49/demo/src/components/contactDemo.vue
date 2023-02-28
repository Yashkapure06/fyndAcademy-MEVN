<template>
<div>
<div>Contact Component</div>
        <div>{{counter}}</div>
    <button @click.prevent="incrementData(5)">Increment</button>
</div>
    
</template>
<script>
import incrementMixin from '../mixin/incrementMixin'
export default {
mixins:[incrementMixin]
}
</script>