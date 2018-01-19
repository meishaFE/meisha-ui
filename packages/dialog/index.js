import MsDialog from './src/main.vue';

MsDialog.install = function(Vue) {
  Vue.component(MsDialog.name, MsDialog);
};

export default MsDialog;
