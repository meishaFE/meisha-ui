import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/demo'
    },
    {
      path: '/api',
      component: () => import('@/views/api.vue')
    },
    {
      path: '/demo',
      component: () => import('@/views/demo.vue')
    },
    {
      path: '/demo/button',
      component: () => import('@/components/button.vue')
    },
    {
      path: '/demo/cell',
      component: () => import('@/components/cell.vue')
    },
    {
      path: '/demo/footer-tab',
      component: () => import('@/components/footer-tab.vue')
    },
    {
      path: '/demo/toast',
      component: () => import('@/components/toast.vue')
    },
    {
      path: '/demo/back-top',
      component: () => import('@/components/back-top.vue')
    },
    {
      path: '/demo/modal',
      component: () => import('@/components/modal.vue')
    },
    {
      path: '/demo/popup',
      component: () => import('@/components/popup.vue')
    },
    {
      path: '/demo/loading',
      component: () => import('@/components/loading.vue')
    },
    {
      path: '/demo/switch',
      component: () => import('@/components/switch.vue')
    },
    {
      path: '/demo/radio',
      component: () => import('@/components/radio.vue')
    },
    {
      path: '/demo/input',
      component: () => import('@/components/input.vue')
    },
    {
      path: '/demo/textarea',
      component: () => import('@/components/textarea.vue')
    },
    {
      path: '/demo/input-number',
      component: () => import('@/components/input-number.vue')
    },
    {
      path: '/demo/selector',
      component: () => import('@/components/selector.vue')
    },
    {
      path: '/demo/range',
      component: () => import('@/components/range.vue')
    },
    {
      path: '/demo/message-box',
      component: () => import('@/components/message-box.vue')
    },
    {
      path: '/demo/swipe',
      component: () => import('@/components/swipe.vue')
    },
    {
      path: '/demo/check-box',
      component: () => import('@/components/checkbox.vue')
    },
    {
      path: '/demo/badge',
      component: () => import('@/components/badge.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
