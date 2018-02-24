<template>
    <transition name="ms-back-top-fade">
        <div class="ms-back-top"
             :class="[customClass]"
             @click="handleClick"
             v-show="isShow">
            <i v-if="icon"
               class="ms-back-top__icon"
               :class="[`ms-icon-${icon}`]"></i>
            <span v-if="!icon">
                <slot></slot>
            </span>
        </div>
    </transition>
</template>

<script>
/**
 * @description 返回顶部的悬浮按钮
 * @param {number} [showHeight=500] - 按钮显示的滚动距离
 * @param {string} [icon=arrow-top] - 按钮内部的 icon
 * @param {string} [customClass] - 自定义类名
 * @param {slot} - 显示文本
 *
 * @example
 * <ms-back-top>back-top</ms-back-top>
 */
import scrollToTop from './scroll-to-top';
export default {
  name: 'MsBackTop',

  props: {
    showHeight: {
      type: Number,
      default: 500
    },
    icon: {
      type: String,
      default: 'arrow-top'
    },
    customClass: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isShow: false
    };
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('rezise', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('rezise', this.handleScroll);
  },
  methods: {
    handleClick(evt) {
      this.backToTop();
      this.$emit('click', evt);
    },
    backToTop() {
      const sTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollToTop(window, sTop, 0);
    },
    handleScroll() {
      this.isShow = window.pageYOffset >= this.showHeight;
    }
  }
};
</script>
