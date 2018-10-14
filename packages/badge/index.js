import MsBadge from './src/main.vue';

MsBadge.install = function(Vue) {
  Vue.component(MsBadge.name, MsBadge);
};

export default MsBadge;
