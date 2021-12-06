import Vue from 'vue'
import App from './App.vue'
import router from './router'
import artistData from '../public/mockData.js'

Vue.config.productionTip = false

let data = {
  artistData,
  tickets: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
