import Vue from 'vue';
import Main from './main.vue';

const ToastCtor = Vue.extend(Main);
let pool = [];

let getInstance = () => {
  if (pool && pool.length) {
    let ins = pool.splice(0, 1)[0];
    return ins;
  }
  return new ToastCtor({
    el: document.createElement('div')
  });
};

let returnAnInstance = instance => {
  if (instance) {
    pool.push(instance);
  }
};

ToastCtor.prototype.close = function() {
  this.closed = true;
  returnAnInstance(this);
};

const Toast = (options = {}) => {
  if (Vue.prototype.$isServer) return;

  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  const duration = options.duration || 3000;

  const instance = getInstance();
  instance.closed = false;
  clearTimeout(instance.timer);

  instance.message = options.message;
  instance.position = options.position || 'middle';
  instance.customClass = options.customClass || '';
  instance.iconClass = options.iconClass || '';
  instance.type = options.type || '';

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visible = true;
    if (~duration) {
      instance.timer = setTimeout(() => {
        if (instance.closed) return;
        instance.close();
      }, duration);
    }
  });

  return instance;
};

['success', 'error'].forEach(type => {
  Toast[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Toast(options);
  };
});

export default Toast;
