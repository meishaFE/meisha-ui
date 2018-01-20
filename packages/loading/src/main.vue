<template>
<transition name="ms-loading-fade">
    <div class="ms-loading__wrapper" v-show="visible">
        <div class="ms-loading">
            <div class="ms-loading__content">
              <div class="ms-loading__oval"></div>
              <div class="ms-loading__dot ms-loading__circular"></div>
              <div class="ms-loading__dot ms-loading__square"></div>
              <!-- TODO: 这个不能用代码实现，换图片 -->
              <!-- <div class="ms-loading__dot ms-loading__triangle"></div> -->
            </div>
            <p class="ms-loading__text">
              <slot name="text">{{text}}</slot>
            </p>
        </div>
        <div class="ms-loading__mask" @touchmove.stop.prevent></div>
    </div>
</transition>
</template>

<script>
export default {
  name: 'MsLoading',

  props: {
    text: {
      type: String,
      default: '加载中...'
    }
  },

  data() {
    return {
      visible: false
    };
  }
};
</script>
