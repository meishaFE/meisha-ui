<template>
    <ms-cell class="ms-selector"
             :class="{'is-disabled': disabled}"
             is-link
             @click.native="handleClick">
        <div class="ms-selector__inner">
            <label class="ms-selector__label">{{label}}</label>
            <span class=" ms-selector__core"
                  v-if="currentValue">{{currentValue}}</span>
            <span class=" ms-selector__placeholder"
                  v-else>{{placeholder}}</span>
        </div>
    </ms-cell>
</template>

<script>
// TODO: 目前只是假的选择器
import MsCell from '../../cell/src/main';
export default {
  name: 'MsSelector',

  components: { MsCell },

  props: {
    value: {
      required: true
    },
    multiple: Boolean,
    disabled: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: String,
    label: String
  },

  computed: {
    currentValue() {
      if (this.multiple) {
        if (Object.prototype.toString.call(this.value) === '[object Array]') {
          return this.value.join(', ');
        } else {
          this.$emit('input', [this.value]);
          return this.value;
        }
      }
      return this.value;
    }
  },

  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit('click');
    }
  }
};
</script>
