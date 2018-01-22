<template>
    <div class="ms-popup">
        <transition name="ms-popup-fade">
            <div class="ms-popup__inner"
                 :style="{height: height}"
                 v-show="visible">
                <div class="ms-popup__header">
                    <slot name="header">
                        <div class="ms-popup__title">{{ title }}</div>
                        <div v-if="showClose">
                            <i class="ms-popup__close ms-icon-close"
                               @click.prevent.stop="handleClose"></i>
                        </div>
                    </slot>
                </div>
                <div class="ms-popup__body">
                    <slot></slot>
                </div>
            </div>
        </transition>
        <transition name="ms-popup-modal-fade">
            <ms-modal class="ms-popup__modal"
                      v-if="modal"
                      :visible="modalVisible"
                      :close-on-click="closeOnClickModal"
                      @close="handleModalClick" />
        </transition>
    </div>
</template>

<script>
import MsModal from '../../modal/src/main';
export default {
  name: 'MsPopup',

  components: { MsModal },

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    modal: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '80%'
    }
  },

  data() {
    return {
      closed: false,
      modalVisible: false
    };
  },

  methods: {
    open() {
      this.closed = false;
      this.modalVisible = true;
      this.$emit('open');
    },
    close() {
      this.$emit('close');
      this.modalVisible = false;
      this.closed = true;
    },
    handleModalClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      this.$emit('update:visible', false);
      this.close();
    }
  },

  mounted() {
    if (this.visible) {
      this.open();
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.open();
      } else {
        if (!this.closed) this.close();
      }
    }
  }
};
</script>
