<template>
  <div style="padding: 10px;" @touchmove="handleTouchMove" @scroll="handleScroll">
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <div>滚动测试</div>
    <ms-button @click="showModal" type="primary">显示遮罩</ms-button>
    <ms-modal :visible.sync="isModalVisible" @open="handleOpen" @close="handleClose"></ms-modal>
  </div>
</template>
<script>
export default {
  name: 'MsModalExample',
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    handleClose() {
      console.log('====================================');
      console.log('close');
      console.log('====================================');
    },
    handleOpen() {
      console.log('====================================');
      console.log('open');
      console.log('====================================');
    },
    showModal() {
      this.isModalVisible = true;
    },
    handleTouchMove() {
      console.log('handleTouchMove');
    },
    handleScroll() {
      console.log('handleScroll');
    }
  }
};
</script>
