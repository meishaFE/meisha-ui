<template>
    <div class="ms-checkbox-group"
         role="group"
         aria-label="checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'MsCheckboxGroup',

  props: {
    value: {},
    disabled: Boolean,
    round: {
      type: String,
      default: '4px'
    },
    min: Number,
    max: Number,
    button: Boolean
  },

  methods: {
    handleChildInput(val) {
      this.$emit('input', val);
    },
    handleChildChange(val) {
      this.$emit('change', val);
    }
  },

  created() {
    if (!this.value || this.value === null || this.value === undefined) {
      this.$emit('input', []);
    }
  }
};
</script>
