import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
// 公共样式表
import './assets/css/base.less'
import './assets/css/commen.less'
import store from "./store/store";
import "./registerServiceWorker";
import '../public/rem.js'
//  Mint - ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 
import api from './api/api.js'

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

// api
Vue.prototype.api = api

Vue.config.productionTip = false;
Vue.config.devtools = window.location.href.indexOf('dev') > 0 || window.location.href.indexOf('local') > 0 ;
Vue.use(Mint);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



// new Vue({
//   el: '#app',
//   router,
//   store,
//   api: api,
//   components: { App },
//   template: '<App/>'
// })
