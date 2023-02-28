import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProfileDemo from './components/ProfileDemo.vue'
import LoginDemo from './components/LoginDemo.vue'
import HomeDemo from './components/HomeDemo.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  {path:'/', component: HomeDemo},
  {path:'/login', component: LoginDemo},
  {path:'/profile', component: ProfileDemo}
]
const router = new VueRouter({mode:'history', routes})
router.beforeEach((to, from, next)=>{
  const isAuth = localStorage.getItem('token');

  if (to.path !== '/login' && !isAuth) {
    next('/login');
  } else {
    next();
  }
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
