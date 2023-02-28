import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//creating custom directives
Vue.directive("size",{
  bind(el,binding){
    if(binding.value =='small'){
      el.style.fontSize = "30px";
    }else if(binding.value =='big'){
      el.style.fontSize = "100px";
    }else{
      el.style.fontSize = "50px";
    }
  }
})
//creating custom directive changing color
Vue.directive("changeStyle",{
  bind(el,binding){
    if(binding.value && binding.value.color){
    // if(binding.value!=null){
      console.log(binding.value);
      console.log(binding.value.color);

      el.style.color = binding.value.color;
      el.style.fontSize = "50px";
    }
    else{
      el.style.color = "blue";
      el.style.fontSize = "50px";
    }
  }
})

Vue.filter('perConv', function(val){
  return val*9.5 +"%";
})

//filter is used for creating custom
  
// 
Vue.filter('isPalindrome', function(str){
  if(str===''){
    return "Empty String";
  }else  if(str.split('').reverse().join('') === str){
    return "Palindrome";
  }
  else{
    return "Not Palindrome";
  }
})

Vue.filter("toUpperCase", function(str){
  return str.toUpperCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
