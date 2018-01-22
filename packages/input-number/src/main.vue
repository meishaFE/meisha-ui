<template>
    <div>
        <div class="ms-input-number"
             :class="[
            { 'is-disabled': disabled },
            { 'is-without-controls': !controls },
            {'is-small': size === 'small'}
          ]">
            <span v-if="controls"
                  class="ms-input-number__button ms-input-number__decrease"
                  :class="{'is-disabled': minDisabled}"
                  @click="decrease">—
            </span>
            <span v-if="controls"
                  class="ms-input-number__button ms-input-number__increase"
                  :class="{'is-disabled': maxDisabled}"
                  @click="increase">
                <i class="ms-icon-plus"></i>
            </span>
            <input class="ms-input-number__core"
                   :value="currentValue"
                   @blur="handleBlur"
                   @focus="handleFocus"
                   @input="debounceHandleInput"
                   :disabled="disabled"
                   :max="max"
                   :min="min"
                   ref="input">
        </div>
    </div>
</template>

<script>
import debounce from 'throttle-debounce/debounce';
export default {
  name: 'MsInputNumber',
  props: {
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      default: 0
    },
    disabled: Boolean,
    controls: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    },
    size: {
      type: String,
      validator(val) {
        return !!~['normal', 'small'].indexOf(val);
      },
      default: 'normal'
    }
  },

  data() {
    return {
      currentValue: 0
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        let newVal = Number(value);
        if (isNaN(newVal)) return;
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.$emit('input', newVal);
      }
    }
  },

  computed: {
    minDisabled() {
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled() {
      return this._increase(this.value, this.step) > this.max;
    },
    precision() {
      const { value, step, getPrecision } = this;
      return Math.max(getPrecision(value), getPrecision(step));
    }
  },

  created() {
    this.debounceHandleInput = debounce(this.debounce, value => {
      this.handleInput(value);
    });
  },

  mounted() {
    this.$nextTick(() => {
      let innerInput = this.$refs.input;
      innerInput.setAttribute('role', 'spinbutton');
      innerInput.setAttribute('aria-valuemax', this.max);
      innerInput.setAttribute('aria-valuemin', this.min);
      innerInput.setAttribute('aria-valuenow', this.currentValue);
      innerInput.setAttribute('aria-disabled', this.disabled);
    });
  },

  updated() {
    let innerInput = this.$refs.input;
    innerInput.setAttribute('aria-valuenow', this.currentValue);
  },

  methods: {
    _increase(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      const precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
    },
    _decrease(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      const precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
    },
    toPrecision(num, precision) {
      if (precision === undefined) precision = this.precision;
      return parseFloat(parseFloat(Number(num).toFixed(precision)));
    },
    getPrecision(value) {
      const valueString = value.toString();
      const dotPosition = valueString.indexOf('.');
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    decrease() {
      if (this.disabled || this.minDisabled) return;
      const value = this.value || 0;
      const newVal = this._decrease(value, this.step);
      if (newVal < this.min) return;
      this.setCurrentValue(newVal);
    },
    increase() {
      if (this.disabled || this.maxDisabled) return;
      const value = this.value || 0;
      const newVal = this._increase(value, this.step);
      if (newVal > this.max) return;
      this.setCurrentValue(newVal);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    focus() {
      this.$refs['input'].focus();
    },
    setCurrentValue(newVal) {
      const oldVal = this.currentValue;
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) {
        this.$refs.input.value = oldVal;
        return;
      }
      this.$emit('change', newVal, oldVal);
      this.$emit('input', newVal);
      this.currentValue = newVal;
    },
    handleInput(evt) {
      const value = evt.target.value;
      if (value === '') {
        return;
      }

      if (value.indexOf('.') === value.length - 1) {
        return;
      }

      if (value.indexOf('-') === value.length - 1) {
        return;
      }

      const newVal = Number(value);
      if (!isNaN(newVal)) {
        this.setCurrentValue(newVal);
      } else {
        this.$refs.input.value = this.currentValue;
      }
    }
  }
};
</script>
