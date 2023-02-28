import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import AboutDemo from './components/AboutDemo.vue';
import HomeDemo from './components/HomeDemo.vue';
// import ContactUs from './components/ContactUs.vue';
// import ErrorPage from './components/ErrorPage.vue';
// import UserData from './components/UserData.vue';
import PostDemo from './components/PostDemo.vue';
import CreatePost from './components/CreatePost.vue';

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
  }
  // {
  //   path: '/aboutdata',
  //   name: 'about',
  //   component: AboutDemo
  // },
  // {
  //   path: '/contact',
  //   component: ContactUs
  // },
  // {
  //   path:'*',
  //   component: ErrorPage
  // },
  // {
  //   path:'/user/:id',
  //   component:UserData
  // }
] 
//* Object create kiya
//* mode:'history' is used to create a history making the url as localhost:8000/contact
const router = new VueRouter({  mode:'history', routes, linkExactActiveClass:'active' })

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
//what is mount here?
