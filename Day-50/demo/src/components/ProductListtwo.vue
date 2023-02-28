<template>
    <div class="productListTwo">
       <h2> Product List 2</h2>
       <ul>
        <li v-for="product in saleProducts" :key="product">
            <span class="name">{{product.name}}</span> - <span class="price">${{product.price}}</span>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductListtwo',
    components: {
    },
    data(){
        return{
            
        }
    },
    
    computed:{
        products(){
            return this.$store.state.products;
        },
        saleProducts(){
            return this.$store.getters.saleProducts;
        }
    }
}
</script>

<style scoped>
.productListTwo{
    background-color: #e7a1ed;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
}
.productListTwo h2{
    color: #fff;
}
.productListTwo ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.productListTwo li{
    display: inline-block;
    background-color: #ffffffa2;
    padding: 20px;
    margin: 10px 10px;
    border-radius: 10px;
}
.name{
    font-weight: bold;
    color: #000;
}
.price{
    font-weight: bold;
    color: #000;
}
</style>