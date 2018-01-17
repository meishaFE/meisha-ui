/* Automatically generated */

import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';
import FooterTab from '../packages/footer-tab/index.js';
import TabItem from '../packages/tab-item/index.js';

const components = [
  Button,
  Cell,
  FooterTab,
  TabItem
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.4',
  install,
  Button,
  Cell,
  FooterTab,
  TabItem
};

module.exports.default = module.exports;
