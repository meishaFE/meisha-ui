<template>
    <div style="position: absolute; z-index: 2001;">
        <transition name="ms-message-box-fade">
            <div class="ms-message-box"
                 v-show="visible">
                <div class="ms-message-box__header"
                     v-if="title">
                    <div class="ms-message-box__title">{{ title }}</div>
                </div>
                <div class="ms-message-box__content"
                     v-if="message || $slots.default">
                    <div class="ms-message-box__message">
                        <slot>
                            <div v-html="message"></div>
                        </slot>
                    </div>
                    <div class="ms-message-box__input"
                         v-show="showInput">
                        <input v-model="inputValue"
                               :placeholder="inputPlaceholder"
                               ref="input">
                    </div>
                </div>
                <div v-if="showFooter"
                     class="ms-message-box__footer"
                     :class="{'is-default': !$slots.footer}">
                    <slot name="footer">
                        <button class="ms-message-box__button ms-message-box__cancel is-border-right"
                                :class="[ cancelButtonClasses ]"
                                v-show="showCancelButton"
                                @click="handleAction('cancel')">{{ cancelButtonText }}</button>
                        <button class="ms-message-box__button ms-message-box__confirm"
                                :class="[ confirmButtonClasses ]"
                                v-show="showConfirmButton"
                                @click="handleAction('confirm')">{{ confirmButtonText }}</button>
                    </slot>
                </div>
            </div>
        </transition>
        <transition name="ms-msbox-modal-fade">
            <ms-modal class="ms-popup__modal"
                      :visible.sync="modalVisible"
                      :color="modalColor"
                      :close-on-click="closeOnClickModal"
                      :lockScreen="lockScreen"
                      @close="handleModalClick" />
        </transition>
    </div>
</template>

<script>
import MsModal from '../../modal/src/main';
export default {
  name: 'MsMessageBox',

  components: { MsModal },

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    message: String,
    showFooter: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonClass: String,
    cancelButtonClass: String,
    modalColor: {
      type: String,
      default: 'transparent'
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputValue: String,
    inputPlaceholder: String,
    lockScreen: {
      type: Boolean,
      default: true
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
    },
    handleAction(type) {
      this.$emit(type);
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
  },

  computed: {
    confirmButtonClasses() {
      return this.confirmButtonClass;
    },
    cancelButtonClasses() {
      return this.cancelButtonClass;
    }
  }
};
</script>
<style>

</style>
