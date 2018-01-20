<template>
    <label class="ms-switch">
        <input class="ms-switch__input"
               :disabled="disabled"
               @change="$emit('change', checked)"
               type="checkbox"
               v-model="checked">
        <span class="ms-switch__core"
              :class="{'is-checked': checked, 'is-disabled': disabled}"
              :style="{ 'width': width + 'px' }"
              ref="core">
            <span class="ms-switch__button"
                  :style="{ transform }"></span>
        </span>
        <div class="ms-switch__label">
            <slot></slot>
        </div>
    </label>
</template>

<script>
export default {
  name: 'MsSwitch',

  props: {
    value: Boolean,
    width: {
      type: Number,
      default: 48
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inactiveColor: {
      type: String,
      default: '#dbdee4'
    },
    activeColor: {
      type: String,
      default: '#00ca9d'
    }
  },

  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    transform() {
      return this.checked ? `translate3d(${this.width - 26}px, 0, 0)` : '';
    }
  },

  watch: {
    checked() {
      if (this.activeColor || this.inactiveColor) {
        this.setCoreBgColor();
      }
    }
  },

  methods: {
    setCoreBgColor() {
      this.$refs.core.style.backgroundColor = this.checked ? this.activeColor : this.inactiveColor;
    }
  }
};
</script>
