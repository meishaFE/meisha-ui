import MsPopup from './src/main.vue';

MsPopup.install = function(Vue) {
  Vue.component(MsPopup.name, MsPopup);
};

export default MsPopup;
