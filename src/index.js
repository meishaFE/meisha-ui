/* Automatically generated */

import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';
import FooterTab from '../packages/footer-tab/index.js';
import TabItem from '../packages/tab-item/index.js';
import Toast from '../packages/toast/index.js';
import FloatButton from '../packages/float-button/index.js';
import BackTop from '../packages/back-top/index.js';
import Modal from '../packages/modal/index.js';
import Popup from '../packages/popup/index.js';
import Loading from '../packages/loading/index.js';
import Radio from '../packages/radio/index.js';
import Input from '../packages/input/index.js';
import Label from '../packages/label/index.js';
import Selector from '../packages/selector/index.js';
import Checkbox from '../packages/checkbox/index.js';
import Picker from '../packages/picker/index.js';
import Badge from '../packages/badge/index.js';
import Switch from '../packages/switch/index.js';
import Textarea from '../packages/textarea/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import InputNumber from '../packages/input-number/index.js';
import Range from '../packages/range/index.js';
import MessageBox from '../packages/message-box/index.js';
import Swipe from '../packages/swipe/index.js';
import SwipeItem from '../packages/swipe-item/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';

const components = [
  Button,
  Cell,
  FooterTab,
  TabItem,
  FloatButton,
  BackTop,
  Modal,
  Popup,
  Radio,
  Input,
  Label,
  Selector,
  Checkbox,
  Picker,
  Badge,
  Switch,
  Textarea,
  RadioGroup,
  InputNumber,
  Range,
  MessageBox,
  Swipe,
  SwipeItem,
  CheckboxGroup
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
  version: '0.1.0',
  install,
  Button,
  Cell,
  FooterTab,
  TabItem,
  Toast,
  FloatButton,
  BackTop,
  Modal,
  Popup,
  Loading,
  Radio,
  Input,
  Label,
  Selector,
  Checkbox,
  Picker,
  Badge,
  Switch,
  Textarea,
  RadioGroup,
  InputNumber,
  Range,
  MessageBox,
  Swipe,
  SwipeItem,
  CheckboxGroup
};

module.exports.default = module.exports;
