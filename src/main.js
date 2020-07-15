import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './cube-ui'
import interceptor from '../serve/interceptors'

Vue.config.productionTip = false

const app =new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')

interceptor(app)
