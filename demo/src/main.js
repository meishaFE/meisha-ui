import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meisha from 'meisha-ui';
import 'meisha-ui/lib/styles/index.css';
import '@/styles/reset.scss';

Vue.use(Meisha);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
