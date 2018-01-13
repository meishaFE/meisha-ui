const fs = require('fs');
const path = require('path');
const program = require('commander');
const render = require('json-templater/string');
const uppercamelcase = require('uppercamelcase'); // foo_bar => FooBar
const decamelize = require('decamelize'); // fooBar => foo_bar / foo-bar
const newComponentNames = program.parse(process.argv).args;
const components = require('../../components.json') || {};
const buildEntry = require('./gen-entry');
const PACKAGE_INDEX_TEMPLATE = `import {{name}} from './src/main.vue';

{{name}}.install = function(Vue) {
  Vue.component({{name}}.name, {{name}});
};

export default {{name}};
`;

const COMPONENT_VUE_TEMPLATE = `<template>
<div></div>
</template>

<script>
export default {
  name: 'Ms{{name}}'
};
</script>

<style lang="scss" scoped>

</style>
`;

newComponentNames.forEach(name => {
  const newPackageName = decamelize(name, '-');
  const newComponentName = uppercamelcase(name);
  const packageDirs = [path.join(__dirname, `../../packages/${newPackageName}`), path.join(__dirname, `../../packages/${newPackageName}/src`)];

  if (fs.existsSync(packageDirs[0])) {
    console.log('[gen file] ERROR:', `${packageDirs[0]} is exit`);
    return;
  }

  packageDirs.forEach(dir => {
    fs.mkdirSync(dir);
  });

  components[newPackageName] = `./packages/${newPackageName}/index.js`;

  const indexTemplate = render(PACKAGE_INDEX_TEMPLATE, {
    name: newComponentName
  });
  const vueTemplate = render(COMPONENT_VUE_TEMPLATE, {
    name: newComponentName
  });
  fs.writeFileSync(path.join(__dirname, `../../packages/${newPackageName}/index.js`), indexTemplate);
  fs.writeFileSync(path.join(__dirname, `../../packages/${newPackageName}/src/main.vue`), vueTemplate);
  fs.writeFileSync(path.join(__dirname, `../../packages/theme-default/src/${newPackageName}.scss`), '');
  fs.writeFileSync(path.join(__dirname, `../../components.json`), JSON.stringify(components, null, 2));
  console.log(`[gen file] INFO: add ${newPackageName} success!`);
});

buildEntry();

console.log('[gen file] DONE');
