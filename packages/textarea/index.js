import MsTextarea from './src/main.vue';

MsTextarea.install = function(Vue) {
  Vue.component(MsTextarea.name, MsTextarea);
};

export default MsTextarea;
