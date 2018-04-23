import Vue from 'vue';
import Meisha from '../src';
import App from './app.vue';
import router from './routers';
Vue.use(Meisha);

// 开启debug模式
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
