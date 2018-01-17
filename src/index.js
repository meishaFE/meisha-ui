/* Automatically generated */

import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';

const components = [
  Button,
  Cell
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
  version: '0.0.3',
  install,
  Button,
  Cell
};

module.exports.default = module.exports;
