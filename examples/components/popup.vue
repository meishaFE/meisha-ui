<template>
    <div>
        <ms-button @click="showPopup">显示 popup</ms-button>
        <ms-button @click="showSlotPopup">显示 自定义 header 的 popup</ms-button>
        <ms-button @click="showNoTitlePopup">显示 没有 header 的 popup</ms-button>
        <ms-popup :visible.sync="popupVisible"
                  @close="handleClose"
                  title="标题"
                  @open="handleOpen">
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <ms-button size="small"
                       @click="popupVisible = false"
                       type="primary">关闭 popup</ms-button>
        </ms-popup>
        <ms-popup :visible.sync="popupVisible2">
            <div slot="header">
                slot 的 header
            </div>
            <span>内容</span>
        </ms-popup>
         <ms-popup :visible.sync="popupVisible3">
            <span>内容</span>
        </ms-popup>
    </div>
</template>

<script>
export default {
  name: 'MsPopupExample',
  data() {
    return {
      popupVisible: false,
      popupVisible2: false,
      popupVisible3: false
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
    },
    showSlotPopup() {
      this.popupVisible2 = true;
    },
    showNoTitlePopup() {
      this.popupVisible3 = true;
    }
  }
};
</script>
