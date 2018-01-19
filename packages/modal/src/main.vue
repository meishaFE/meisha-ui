<template>
    <div class="ms-modal"
         v-show="visible"
         @click.prevent.stop="handleClick">
    </div>
</template>

<script>
const getBodyScrollTop = () => document.body.scrollTop || document.documentElement.scrollTop;
const to = scrollTop => {
  document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
};
export default {
  name: 'MsModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    lockScreen: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      closed: false,
      scrollTop: 0
    };
  },
  mounted() {
    if (this.visible) {
      this.open();
    }
  },
  methods: {
    handleClick() {
      if (!this.closeOnClick) return;
      this.close();
    },
    open() {
      this.closed = false;
      this.$emit('open');
      if (this.lockScreen) this.lockBody();
    },
    close() {
      this.$emit('update:visible', false);
      this.$emit('close');
      this.unLockBody();
      this.closed = true;
    },
    lockBody() {
      this.scrollTop = getBodyScrollTop();
      document.body.classList.add('ms-modal-open');
      document.body.style.top = -this.scrollTop + 'px';
    },
    unLockBody() {
      document.body.classList.remove('ms-modal-open');
      to(this.scrollTop);
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.open();
      } else {
        if (!this.closed) this.$emit('close');
      }
    }
  }
};
</script>
