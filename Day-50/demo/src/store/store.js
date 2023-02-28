import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {
              name: 'Orange',
              price: 20,
            },
            {
              name: 'Apple',
              price: 60,
            },
            {
              name: 'Banana',
              price: 40,
            },
            {
              name: 'Kiwi',
              price: 80,
            },
          ]
    },
    getters:{
        saleProducts: state => {
            var saleProducts = state.products.map(product=>{
                return{
                    name: '**' + product.name + '**',
                    price: product.price
                }
            });
            return saleProducts
        }
    },
    
    mutations:{
        reducePrice:(state,payload)=>{
            // setTimeout(()=>{
                state.products.forEach(product=>{
                    product.price -= payload;
                })
            // }, 3000)
        }
    },
    actions:{
        reducePrice:((context, payload)=>{
        setTimeout(()=>{
            context.commit('reducePrice',payload)
        }, 1000)
    })}
})