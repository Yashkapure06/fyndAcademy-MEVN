<template>
<div>
    <div>About Component</div>
    <div>{{counter}}</div>
    <button @click.prevent="incrementData(2)">Increment</button>
</div>

</template>
<script>
import incrementMixin from '../mixin/incrementMixin'
export default {
mixins:[incrementMixin]
}
</script>