import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
Vue.config.productionTip = false

new Vue({
  router,
  data(){
    return {
      cart: [],
      isAuth:false,
    }
  },
  render: h => h(App),
}).$mount('#app')
