<template>
    <div class="ms-toast-example">
    </div>
</template>
<script>
export default {
  name: 'MsToastExample',
  created() {
    setTimeout(() => {
      this.$toast('无 icon 提示');
      this.$toast.success('操作成功');
      this.$toast.error('操作失败');
    }, 1000);
  }
};
</script>
