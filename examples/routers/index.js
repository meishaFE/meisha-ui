import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: () => import('../home.vue')
    },
    {
      path: '/button',
      component: () => import('../components/button.vue')
    },
    {
      path: '/cell',
      component: () => import('../components/cell.vue')
    },
    {
      path: '/footer-tab',
      component: () => import('../components/footer-tab.vue')
    },
    {
      path: '/toast',
      component: () => import('../components/toast.vue')
    },
    {
      path: '/back-top',
      component: () => import('../components/back-top.vue')
    },
    {
      path: '/modal',
      component: () => import('../components/modal.vue')
    },
    {
      path: '/popup',
      component: () => import('../components/popup.vue')
    },
    {
      path: '/loading',
      component: () => import('../components/loading.vue')
    },
    {
      path: '/switch',
      component: () => import('../components/switch.vue')
    },
    {
      path: '/radio',
      component: () => import('../components/radio.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
