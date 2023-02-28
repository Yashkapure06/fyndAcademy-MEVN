import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomeDemo from './components/HomeDemo.vue';
import PostDemo from './components/PostDemo.vue';
import CreatePost from './components/CreatePost.vue';
import CreateItem from './components/CreateItem.vue';
// import DeleteItem from './components/DeleteItem.vue';
// import EditItem from './components/EditItem.vue';
import axios from 'axios';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomeDemo
  },
  {
    path: '/post',
    name: 'postDemo',
    component: PostDemo
  },
  {
    path: '/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path:'/post/:id',
    name:'createitem',
    component:CreateItem,
    children: [
      {
        path: 'edit',
        component: CreateItem,
        props:true
      },
      {
        path: 'delete',
        component: CreateItem,
        props:true
      }
    ]
  }
] 
//* Object create kiya
//* mode:'history' is used to create a history making the url as localhost:8000/contact
const router = new VueRouter({  mode:'history', routes, linkExactActiveClass:'active' })
router.go(1)
axios.defaults.baseURL='https://fynd-vue-default-rtdb.asia-southeast1.firebasedatabase.app/'

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
//what is mount here?
