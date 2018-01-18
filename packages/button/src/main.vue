<template>
    <button class="ms-button"
            @click="handleClick"
            :disabled="disabled"
            :class="[
              type ? 'ms-button--' + type : '',
              size ? 'ms-button--' + size : '',
              {
                'is-disabled': disabled,
                'is-loading': loading,
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
// TODO: 暂未添加 loading （无设计稿），icon 插槽（暂无需求）
// TODO: 单元测试
/**
 * @description 按钮
 * @param {String} [type=default] - 显示类型，接受 default, warning, danger, primary
 * @param {string} [size=normal] - 尺寸，接受 normal, small, mini
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [native-type] - 原生 type 属性
 * @param {slot} - 显示文本
 *
 * @example
 * <ms-button size="large" type="warning">这是按钮</ms-button>
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
        return !!~['small', 'normal'].indexOf(value);
      }
    },
    nativeType: {
      type: String,
      default: 'button'
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
