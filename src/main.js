import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/normalize.css'

Vue.config.productionTip = false
Vue.prototype.$imgsrc = 'http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/screen/'
Vue.prototype.$imgsrcFace = 'http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/screen/lilanz.png'

import * as apis from '@/utils/apis.js';
Vue.prototype.$api = apis;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
