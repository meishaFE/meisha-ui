import MsModal from './src/main.vue';

MsModal.install = function(Vue) {
  Vue.component(MsModal.name, MsModal);
};

export default MsModal;
