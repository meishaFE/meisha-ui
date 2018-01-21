<template>
    <div class="ms-cell">
        <div class="ms-cell__inner">
            <div class="ms-cell__content"
                 :class="{
                   'is-icon': isLink || icon
                 }">
                <slot>
                </slot>
            </div>
            <i class="ms-cell__suffix"
               :class="[isLink && !icon ? 'ms-icon-arrow-right' : `ms-icon-${icon}`]"
               v-if="icon || isLink"
               @click="handleIconClick"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MsCell',

  props: {
    icon: {
      type: String
    },
    isLink: {
      type: Boolean,
      default: false
    },
    onIconClick: {
      type: Function
    }
  },

  methods: {
    handleIconClick(evt) {
      if (this.onIconClick) this.onIconClick(evt);
    }
  }
};
</script>
