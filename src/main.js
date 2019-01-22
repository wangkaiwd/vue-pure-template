import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from 'store'
import 'utils/rem'
import 'styles/reset'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
