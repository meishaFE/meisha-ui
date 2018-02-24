<template>
    <button class="ms-button"
            @click="handleClick"
            :disabled="disabled"
            :class="[
              type ? 'ms-button--' + type : '',
              size ? 'ms-button--' + size : '',
              {
                'is-disabled': disabled,
                'is-plain': plain,
              }
            ]"
            :style="[buttonBorder]">
        <span v-if="$slots.default"
              @click="handleInnerClick">
            <slot></slot>
        </span>
    </button>
</template>

<script>
// TODO: 暂未添加 loading （暂无需求），icon 插槽（暂无需求）
/**
 * @description 按钮
 * @param {string} [type=default] - 显示类型，接受 default, warning, danger, primary
 * @param {string} [size=normal] - 尺寸，接受 normal, small, mini
 * @param {string} [round=false] - 按钮的圆角
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {slot} - 显示文本
 *
 * @example
 * <ms-button size="large" type="warning">button</ms-button>
 */
export default {
  name: 'MsButton',

  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return !!~['default', 'primary', 'danger', 'warning'].indexOf(value);
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return !!~['mini', 'small', 'normal'].indexOf(value);
      }
    },
    disabled: Boolean,
    plain: Boolean,
    round: {
      type: String
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
    handleInnerClick(evt) {
      this.disabled && evt.stopPropagation();
    }
  },

  computed: {
    buttonBorder() {
      return {
        [this.round ? 'borderRadius' : '']: this.round
      };
    }
  }
};
</script>
