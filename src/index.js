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
import Loading from '../packages/loading/index.js';
import Radio from '../packages/radio/index.js';
import Input from '../packages/input/index.js';
import Label from '../packages/label/index.js';
import Selector from '../packages/selector/index.js';
import Checkbox from '../packages/checkbox/index.js';
import Picker from '../packages/picker/index.js';
import Collapse from '../packages/collapse/index.js';
import Badge from '../packages/badge/index.js';
import Carousel from '../packages/carousel/index.js';
import Switch from '../packages/switch/index.js';

const components = [
  Button,
  Cell,
  FooterTab,
  TabItem,
  FloatButton,
  BackTop,
  Modal,
  Dialog,
  Popup,
  Radio,
  Input,
  Label,
  Selector,
  Checkbox,
  Picker,
  Collapse,
  Badge,
  Carousel,
  Switch
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$toast = Toast;
  Vue.prototype.$loading = Loading;
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
  Popup,
  Loading,
  Radio,
  Input,
  Label,
  Selector,
  Checkbox,
  Picker,
  Collapse,
  Badge,
  Carousel,
  Switch
};

module.exports.default = module.exports;
