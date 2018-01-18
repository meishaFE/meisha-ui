const fs = require('fs');
const path = require('path');
const render = require('json-templater/string');
const uppercamelcase = require('uppercamelcase'); // foo_bar => FooBar
const endOfLine = require('os').EOL;
const components = require('../../components.json') || {};
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');

module.exports = () => {
  const MAIN_TEMPLATE = `/* Automatically generated */

{{include}}

const components = [
{{install}}
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
  version: '{{version}}',
  install,
{{list}}
};

module.exports.default = module.exports;
`;

  const IMPORT_TEMPLATE = "import {{name}} from '../packages/{{package}}/index.js';";
  const INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
  var includeComponentTemplate = [];
  var installTemplate = [];
  var listTemplate = [];

  const exitComponetNames = Object.keys(components);

  exitComponetNames.forEach(name => {
    const componentName = uppercamelcase(name);
    includeComponentTemplate.push(
      render(IMPORT_TEMPLATE, {
        name: componentName,
        package: name
      })
    );
    if (!~['Loading', 'Toast'].indexOf(componentName)) {
      installTemplate.push(
        render(INSTALL_COMPONENT_TEMPLATE, {
          name: componentName,
          component: name
        })
      );
    }
    if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);

    let template = render(MAIN_TEMPLATE, {
      include: includeComponentTemplate.join(endOfLine),
      install: installTemplate.join(',' + endOfLine),
      version: process.env.VERSION || require('../../package.json').version,
      list: listTemplate.join(',' + endOfLine)
    });
    fs.writeFileSync(OUTPUT_PATH, template);
  });

  console.log('[build entry] DONE');
};
