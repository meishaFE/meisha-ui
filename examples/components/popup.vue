<template>
    <div>
        <ms-button @click="showPopup">显示 popup</ms-button>
        <ms-popup :visible.sync="popupVisible"
                  title="popup 标题"
                  @close="handleClose"
                  @open="handleOpen">
            <p>这是内容</p>
            <ms-button size="small"
                       @click="popupVisible = false"
                       type="primary">关闭 popup</ms-button>
        </ms-popup>
    </div>
</template>

<script>
export default {
  name: 'MsPopupExample',
  data() {
    return {
      popupVisible: false
    };
  },
  methods: {
    showPopup() {
      this.popupVisible = true;
    },
    handleClose() {
      console.log('close');
    },
    handleOpen() {
      console.log('open');
    }
  }
};
</script>
