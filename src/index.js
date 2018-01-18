/* Automatically generated */

import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';
import FooterTab from '../packages/footer-tab/index.js';
import TabItem from '../packages/tab-item/index.js';
import Toast from '../packages/toast/index.js';
import FloatButton from '../packages/float-button/index.js';
import BackTop from '../packages/back-top/index.js';

const components = [
  Button,
  Cell,
  FooterTab,
  TabItem,
  FloatButton,
  BackTop
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$toast = Toast;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.5',
  install,
  Button,
  Cell,
  FooterTab,
  TabItem,
  Toast,
  FloatButton,
  BackTop
};

module.exports.default = module.exports;
