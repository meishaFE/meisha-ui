<template>
  <div class="ms-badge">
    <slot></slot>
    <sup
      v-show="!hidden"
      v-text="content"
      class="ms-badge__content"
      :class="{ 'is-dot': isDot }">
    </sup>
  </div>
</template>

<script>
export default {
  name: 'MsBadge',
  props: {
    value: {},
    max: Number,
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value;
    }
  }
};
</script>
