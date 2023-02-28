<template>
    <div class="productListOne">
       <h2>Product List 1</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product">
                <span class="name">{{product.name}}</span> - <span class="price">${{product.price}}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(4)">Reduce Price</button>
    </div>
</template>

<script>
export default {
    name: 'ProductListone',
    components: {
    },
    computed:{
        products(){
            return this.$store.state.products;
        },
        saleProducts(){
            return this.$store.getters.saleProducts;
        }    
    },
    methods:{
        reducePrice:function(amount){
            // this.$store.state.products.forEach(product=>{
            //     product.price -= 1;
            // })
            // this.$store.commit('reducePrice');
            this.$store.dispatch('reducePrice',amount);
        }
    },
}
</script>

<style scoped>
.productListOne{
    background-color: #c4eda1;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
}
.productListOne h2{
    color: #fff;
}
.productListOne ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.productListOne li{
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