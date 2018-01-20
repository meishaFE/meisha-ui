import Main from './src/main.vue';
import Vue from 'vue';

const LoadingCtor = Vue.extend(Main);
const DEFAULT_TEXT = '加载中...';
let loadingInstance;

LoadingCtor.prototype.close = () => {
  if (loadingInstance) {
    loadingInstance.visible = false;
  }
};

const Loading = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      text: options
    };
  }

  if (!loadingInstance) {
    loadingInstance = new LoadingCtor({
      el: document.createElement('div')
    });
  }

  if (loadingInstance.visible) return;
  loadingInstance.text = options.text || DEFAULT_TEXT;

  document.body.appendChild(loadingInstance.$el);

  Vue.nextTick(() => {
    loadingInstance.visible = true;
  });
  return loadingInstance;
};

export default Loading;
