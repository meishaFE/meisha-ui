<template>
 <div class="ms-range" :class="{ 'is-disabled': disabled }">
    <slot name="start"></slot>
    <div class="ms-range__core" ref="core">
      <div class="ms-range__runway" :style="{ 'border-top-width': barHeight + 'px' }"></div>
      <div class="ms-range__progress" :style="{ width: progress + '%', height: barHeight + 'px' }"></div>
      <div class="ms-range__thumb" :class="{ 'is-disabled': disabled }" ref="thumb" :style="{ left: progress + '%' }"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
import draggable from './draggable';

export default {
  name: 'MsRange',

  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: Boolean,
    value: Number,
    barHeight: {
      type: Number,
      default: 4
    }
  },

  computed: {
    progress() {
      const value = this.value;
      if (typeof value === 'undefined' || value === null) return 0;
      return Math.floor((value - this.min) / (this.max - this.min) * 100);
    }
  },

  mounted() {
    const thumb = this.$refs.thumb;
    const core = this.$refs.core;
    const getThumbPosition = () => {
      const contentBox = core.getBoundingClientRect();
      const thumbBox = thumb.getBoundingClientRect();
      return {
        left: thumbBox.left - contentBox.left,
        top: thumbBox.top - contentBox.top,
        thumbBoxLeft: thumbBox.left
      };
    };
    let dragState = {};
    draggable(thumb, {
      start: event => {
        if (this.disabled) return;
        const position = getThumbPosition();
        const thumbClickDetalX = event.clientX - position.thumbBoxLeft;
        dragState = {
          thumbStartLeft: position.left,
          thumbStartTop: position.top,
          thumbClickDetalX: thumbClickDetalX
        };
      },
      drag: event => {
        if (this.disabled) return;
        const contentBox = core.getBoundingClientRect();
        const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft - dragState.thumbClickDetalX;
        const stepCount = Math.ceil((this.max - this.min) / this.step);
        const newPosition = dragState.thumbStartLeft + deltaX - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);
        let newProgress = newPosition / contentBox.width;
        if (newProgress < 0) {
          newProgress = 0;
        } else if (newProgress > 1) {
          newProgress = 1;
        }
        this.$emit('input', Math.round(this.min + newProgress * (this.max - this.min)));
      },
      end: () => {
        if (this.disabled) return;
        this.$emit('change', this.value);
        dragState = {};
      }
    });
  }
};
</script>
