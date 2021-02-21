// Before you create app
Vue.config.devtools = true;

//vue全体の処理
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //vuexで用意したstore

Vue.config.productionTip = false


new Vue({
  router,
  store,//vuexで用意したstore
  render: h => h(App)
}).$mount('#app')
