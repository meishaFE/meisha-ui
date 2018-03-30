const showdown = require('showdown');
const converter = new showdown.Converter({ tables: true });
const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;

const API_VUE_PATH = path.join(__dirname, '../../demo/src/views/api.vue');
const API_MARKDOWN_PATH = path.join(__dirname, '../../docs/guide.md');

const apiMarkFile = fs.readFileSync(API_MARKDOWN_PATH);
const apiVueFile = fs.readFileSync(API_VUE_PATH);

const apiVueSplitFlag = /<template>(.|\r|\n)*<\/template>/;

try {
  const markdown = apiMarkFile.toString();
  const apiVue = apiVueFile.toString();
  const apiHtml = converter.makeHtml(markdown);
  const content = `<template><div class="api"><article class="markdown-body">${apiHtml}</article></div></template>${endOfLine}`;
  const template = apiVue.replace(apiVueSplitFlag, content);
  fs.writeFileSync(path.join(__dirname, '../../demo/src/views/api.vue'), template);
  console.log(`[gen file] INFO: build success!`);
} catch (error) {
  console.error(error);
}
