<template>
    <label class="ms-radio"
           :class="{'is-checked': model === label, 'is-disabled': disabled}">
        <input class="ms-radio__input"
               v-model="model"
               :disabled="disabled"
               :value="label"
               type="radio"
               @change="$emit('change', model)">
        <span class="ms-radio__core"
              :style="{width: size + 'px', height: size + 'px', borderColor: borderColor}"
              ref="core">
            <span class="ms-radio__dot"
                  :style="{width: size / 2 + 'px', height: size /2 + 'px', backgroundColor: activeColor}"></span>
        </span>
        <div class="ms-radio__label">
            <slot></slot>
        </div>
    </label>
</template>

<script>
// TODO: 按钮和带边框样式的 radio
export default {
  name: 'MsRadio',

  props: {
    value: {},
    label: {},
    size: {
      type: Number,
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: '#eff2f7'
    },
    activeColor: {
      type: String,
      default: '#00ca9d'
    }
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>
