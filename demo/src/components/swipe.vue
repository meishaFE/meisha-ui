<template>
    <div>
        <ms-swipe class="swipe" :auto="4000">
            <ms-swipe-item style="background: #ff9c19" class="swipe-item">A</ms-swipe-item>
            <ms-swipe-item style="background: #ff4742" class="swipe-item">B</ms-swipe-item>
            <ms-swipe-item style="background: #00ca9d" class="swipe-item">C</ms-swipe-item>
            <ms-swipe-item style="background: #9C86F4" class="swipe-item">D</ms-swipe-item>
        </ms-swipe>
    </div>
</template>
<script>
export default {
  name: 'MsSwipeExample'
};
</script>

<style lang="scss" scoped>
.swipe {
  height: 200px;
  &-item {
    text-align: center;
    line-height: 200px;
    font-size: 24px;
  }
}
</style>
