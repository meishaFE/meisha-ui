import MsButton from './src/main.vue';

MsButton.install = function(Vue) {
  Vue.component(MsButton.name, MsButton);
};

export default MsButton;
