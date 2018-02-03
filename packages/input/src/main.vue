<template>
    <ms-cell class="ms-input"
             :class="{'is-disabled': disabled || readonly}">
        <div class="ms-input__inner">
            <label class="ms-input__label"
                   :class="{'is-required': required}"
                   v-show="label">{{label}}</label>
            <input @change="$emit('change', currentValue)"
                   ref="input"
                   class="ms-input__input"
                   :placeholder="placeholder"
                   :type="type"
                   :disabled="disabled"
                   :readonly="readonly"
                   :value="currentValue"
                   @input="handleInput"
                   :style="[inputStyle]">
        </div>
    </ms-cell>
</template>

<script>
// TODO: 表单校验
import msCell from '../../cell/src/main';
export default {
  name: 'MsInput',

  components: { msCell },

  props: {
    type: {
      type: String,
      default: 'text'
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
    textAlign: {
      type: String,
      validator(value) {
        return !!~['left', 'right'].indexOf(value);
      }
    },
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
      this.$emit('input', this.currentValue);
    },
    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    },
    setCurrentValue(newVal) {
      if (this.currentValue === newVal) return;
      this.currentValue = newVal;
    }
  },

  computed: {
    inputStyle() {
      return {
        [this.textAlign ? 'textAlign' : '']: this.textAlign
      };
    }
  },

  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  }
};
</script>
