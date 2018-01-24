import MsMessageBox from './src/main.vue';

MsMessageBox.install = function(Vue) {
  Vue.component(MsMessageBox.name, MsMessageBox);
};

export default MsMessageBox;
