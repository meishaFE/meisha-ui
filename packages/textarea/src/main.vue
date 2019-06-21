<template>
    <ms-cell class="ms-textarea"
             :class="{'is-disabled': disabled || readonly}">
        <div class="ms-textarea__inner">
            <label class="ms-textarea__label"
                   :class="{'is-required': required}"
                   v-show="label">{{label}}</label>
            <textarea class="ms-textarea__core"
                      ref="textarea"
                      v-on="textareaListeners"
                      :rows="rows"
                      :placeholder="placeholder"
                      :disabled="disabled"
                      :readonly="readonly"
                      :value="currentValue"></textarea>
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
    },
    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },

  computed: {
    textareaListeners() {
      const vm = this;
      return Object.assign({}, this.$listeners, {
        input(event) {
          const value = event.target.value;
          vm.currentValue = value;
          this.$emit('input', value);
        },
        change() {
          this.$emit('change', vm.currentValue);
        }
      });
    }
  }
};
</script>
