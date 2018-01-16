/* Automatically generated */

import Button from '../packages/button/index.js';

const components = [
  Button
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
  version: '0.0.2',
  install,
  Button
};

module.exports.default = module.exports;
