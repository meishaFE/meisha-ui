import MsCollapse from './src/main.vue';

MsCollapse.install = function(Vue) {
  Vue.component(MsCollapse.name, MsCollapse);
};

export default MsCollapse;
