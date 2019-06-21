import MsPicker from './src/main.vue';

MsPicker.install = function(Vue) {
  Vue.component(MsPicker.name, MsPicker);
};

export default MsPicker;
