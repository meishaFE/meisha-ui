import MsTabItem from '../footer-tab/src/tab-item.vue';

MsTabItem.install = function(Vue) {
  Vue.component(MsTabItem.name, MsTabItem);
};

export default MsTabItem;
