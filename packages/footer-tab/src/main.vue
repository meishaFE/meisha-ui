<template>
    <div class="ms-footer-tab"
         :class="{ 'is-fixed': fixed }">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'MsFooterTab',
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    value: {}
  }
};
</script>
