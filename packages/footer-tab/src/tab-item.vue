<template>
    <div class="ms-tab-item"
         @click="handleTabItemClick"
         :class="{ 'is-activated': $parent && $parent.value === value }">
        <div v-if="$slots.icon" class="ms-tab-item__icon">
            <slot name="icon"></slot>
        </div>
        <div class="ms-tab-item__label">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MsTabItem',

  props: {
    value: {}
  },

  methods: {
    handleTabItemClick(evt) {
      if (!this.$parent) {
        this.$emit('input', this.value, evt);
        this.$emit('change', this.value, evt);
      } else {
        this.$parent.$emit('input', this.value, evt);
        this.$parent.$emit('change', this.value, evt);
      }
    }
  }
};
</script>
