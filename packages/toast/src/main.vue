<template>
    <transition name="ms-toast-fade">
        <div class="ms-toast"
             :class="[ type && !iconClass ? `ms-toast--${type}`: '',
             type || iconClass ? 'ms-toast-icon' : '',
             customClasses]"
             v-show="visible">
            <i :class="iconClass"
               v-if="iconClass"></i>
            <i :class="typeClass"
               v-else></i>
            <span class="ms-toast__text"
                  :style="{ 'padding-top': !type && !iconClass ? '0' : '16px' }">{{ message }}</span>
        </div>
    </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  error: 'error'
};

export default {
  name: 'MsToast',
  props: {
    message: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      validator(val) {
        return !!~['top', 'bottom', 'middle'].indexOf(val);
      },
      default: 'middle'
    },
    customClass: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      validator(val) {
        return !!~Object.keys(typeMap).indexOf(val);
      }
    }
  },
  data() {
    return {
      visible: false,
      closed: false
    };
  },
  computed: {
    typeClass() {
      return this.type && !this.iconClass ? `ms-toast__icon ms-icon-${typeMap[this.type]}` : '';
    },
    customClasses() {
      const classes = [];
      switch (this.position) {
        case 'top':
          classes.push('is-top');
          break;
        case 'middle':
          classes.push('is-middle');
          break;
        case 'bottom':
          classes.push('is-bottom');
          break;
        default:
          break;
      }
      classes.push(this.customClass);
      return classes.join('');
    }
  },
  methods: {
    destroyEle() {
      this.$el.removeEventListener('transitionend', this.destroyEle);
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyEle);
      }
    }
  }
};
</script>
