<template>
    <label class="ms-checkbox"
         :class="[{ 'is-disabled': isDisabled },
      { 'is-button': isButton },
      { 'is-checked': isChecked }]"
      :style="buttonRadius">
        <span class="ms-checkbox__check"></span>
        <!-- <input type="checkbox"> -->
        <input class="ms-checkbox__input"
               type="checkbox"
               :disabled="isDisabled"
               :value="label"
               :name="name"
               v-model="_model"
               @change="handleChange">
        <span class="ms-checkbox__label"
              v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
import MsCell from '../../cell/src/main';
const CHECKBOX_GROUP_NAME = 'MsCheckboxGroup';
export default {
  name: 'MsCheckbox',

  components: { MsCell },

  props: {
    value: {},
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(val) {
        return !!~['medium', 'small', 'mini'].indexOf(val);
      }
    },
    round: {
      type: String,
      default: '4px'
    },
    name: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selfModel: false,
      isLimitExceeded: false
    };
  },

  computed: {
    _model: {
      get() {
        return this.isInGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },

      set(val) {
        if (this.isInGroup) {
          this.isLimitExceeded = false;
          this._group.min !== undefined && val.length < this._group.min && (this.isLimitExceeded = true);
          this._group.max !== undefined && val.length > this._group.max && (this.isLimitExceeded = true);

          this.isLimitExceeded === false && this._group.handleChildInput(val);
        } else {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },

    store() {
      return this._group ? this._group.value : this.value;
    },

    isInGroup() {
      let $parent = this.$parent;

      while ($parent) {
        if ($parent.$options.name !== CHECKBOX_GROUP_NAME) {
          $parent = $parent.$parent;
        } else {
          this._group = $parent;
          return true;
        }
      }
      return false;
    },

    isChecked() {
      if (Object.prototype.toString.call(this._model) === '[object Boolean]') return this._model;
      else if (Array.isArray(this._model)) return !!~this._model.indexOf(this.label);
    },

    isDisabled() {
      return this.isInGroup ? this._group.disabled || this.disabled : this.disabled;
    },

    isButton() {
      return this.isInGroup ? this._group.button || this.button : this.button;
    },
    buttonRadius() {
      return {
        [this.isButton ? 'borderRadius' : '']: this.isInGroup ? this._group.round : this.round
      };
    }
  },

  methods: {
    init() {
      if (!this.checked) return;
      if (Array.isArray(this._model) && !~this._model.indexOf(this.label)) {
        this._model.push(this.label);
      } else {
        this._model = true;
      }
    },
    handleChange(event) {
      if (this.isLimitExceeded) return;
      let value;
      if (event.target.checked) {
        value = true;
      } else {
        value = false;
      }
      this.$emit('change', value, event);
      this.$nextTick(() => {
        if (this.isGroup) {
          this._group.handleChildChange([this._group.value]);
        }
      });
    }
  },

  created() {
    this.init();
  }
};
</script>
