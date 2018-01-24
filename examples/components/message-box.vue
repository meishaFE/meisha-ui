<template>
    <div>
        <div style="padding: 10px;">
            <ms-button style="margin-bottom: 10px;"
                       @click="showMessageBox('visible')">显示普通弹窗</ms-button>
            <ms-button style="margin-bottom: 10px;"
                       @click="showMessageBox('visible1')">显示有取消按钮的弹窗</ms-button>
            <ms-button style="margin-bottom: 10px;"
                       @click="showMessageBox('visible2')">显示自定义按钮样式的弹窗</ms-button>
            <ms-button style="margin-bottom: 10px;"
                       @click="showMessageBox('visible3')">显示没标题的弹窗</ms-button>
            <ms-button style="margin-bottom: 10px;"
                       @click="showMessageBox('visible4')">显示slot底部的弹窗</ms-button>
        </div>
        <ms-message-box :visible.sync="visible"
                        title="提醒"
                        confirmButtonText="确定"
                        @open="hnadleOpen"
                        @close="handleClose"
                        @confirm="handleConfirm">
            <div>这是弹窗内容</div>
        </ms-message-box>
        <ms-message-box :visible.sync="visible1"
                        title="提醒"
                        cancelButtonText="取消"
                        confirmButtonText="确定"
                        showCancelButton
                        @cancel="handleCancel"
                        @confirm="handleConfirm">
            <div>这是只显示确定按钮的弹窗内容</div>
        </ms-message-box>
        <ms-message-box :visible.sync="visible2"
                        title="提醒"
                        confirmButtonText="确定"
                        confirmButtonClass="red"
                        @cancel="handleCancel"
                        @confirm="handleConfirm">
            <div>显示自定义按钮样式的弹窗</div>
        </ms-message-box>
        <ms-message-box :visible.sync="visible3"
                        confirmButtonText="确定"
                        @cancel="handleCancel"
                        @confirm="handleConfirm">
            <div>显示没有标题的的弹窗</div>
        </ms-message-box>
        <ms-message-box :visible.sync="visible4"
                        confirmButtonText="确定"
                        confirmButtonClass="red"
                        @cancel="handleCancel"
                        @confirm="handleConfirm">
            <div>显示slot底部的弹窗</div>
            <div slot="footer"
                 style="text-align: center; line-height: 50px;"
                 @click="closeMessageBox('visible4')">这是底部</div>
        </ms-message-box>
    </div>
</template>
<script>
export default {
  name: 'MsMessageBoxExample',
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      currentShow: null
    };
  },

  methods: {
    showMessageBox(key) {
      this[key] = true;
      this.currentShow = key;
    },
    handleConfirm() {
      console.log('====================================');
      console.log('handle confirm event');
      console.log('====================================');
      this.closeMessageBox(this.currentShow);
    },
    handleCancel() {
      console.log('====================================');
      console.log('handle cancel event');
      console.log('====================================');
      this.closeMessageBox(this.currentShow);
    },
    handleClose() {
      console.log('====================================');
      console.log('handle close event');
      console.log('====================================');
    },
    hnadleOpen() {
      console.log('====================================');
      console.log('handle open event');
      console.log('====================================');
    },
    closeMessageBox(key) {
      this[key] = false;
    }
  }
};
</script>
<style lang="scss">
.red {
  color: #ff4742;
}
</style>
