/* Automatically generated */

import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';
import FooterTab from '../packages/footer-tab/index.js';
import TabItem from '../packages/tab-item/index.js';
import Toast from '../packages/toast/index.js';
import FloatButton from '../packages/float-button/index.js';
import BackTop from '../packages/back-top/index.js';
import Modal from '../packages/modal/index.js';
import Dialog from '../packages/dialog/index.js';
import Popup from '../packages/popup/index.js';

const components = [
  Button,
  Cell,
  FooterTab,
  TabItem,
  FloatButton,
  BackTop,
  Modal,
  Dialog,
  Popup
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
  version: '0.0.6',
  install,
  Button,
  Cell,
  FooterTab,
  TabItem,
  Toast,
  FloatButton,
  BackTop,
  Modal,
  Dialog,
  Popup
};

module.exports.default = module.exports;
