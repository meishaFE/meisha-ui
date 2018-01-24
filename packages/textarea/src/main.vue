<template>
    <ms-cell class="ms-textarea"
             :class="{'is-disabled': disabled || readonly}">
        <div class="ms-textarea__inner">
            <label class="ms-textarea__label"
                   :class="{'is-required': required}"
                   v-show="label">{{label}}</label>
            <textarea class="ms-textarea__core"
                      :rows="4"
                      :placeholder="placeholder"
                      :disabled="disabled"
                      @change="$emit('change', currentValue)"
                      ref="textarea"
                      :readonly="readonly"
                      :value="currentValue"
                      @input="handleInput"></textarea>
        </div>
    </ms-cell>
</template>

<script>
// TODO: 表单校验
import MsCell from '../../cell/src/main';
export default {
  name: 'MsTextarea',

  components: { MsCell },

  props: {
    rows: {
      type: Number,
      default: 4
    },
    label: String,
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    value: {}
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  methods: {
    handleInput(evt) {
      this.currentValue = evt.target.value;
    },
    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  }
};
</script>
