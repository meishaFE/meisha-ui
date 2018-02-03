<template>
  <div>
    <ms-input v-model="value" placeholder="请输入" label="邀请码"></ms-input>
    <ms-input v-model="value" placeholder="请输入" text-align="left" label="邀请码"></ms-input>
    <ms-input v-model="value" required placeholder="请输入" label="邀请码"></ms-input>
    <ms-input v-model="value" required placeholder="请输入" disabled label="邀请码"></ms-input>
  </div>
</template>
<script>
export default {
  name: 'MsInputExample',

  data() {
    return {
      value: 'asdfasfasfasf'
    };
  },
  created() {
    setTimeout(() => {
      this.value = 'lemon';
    }, 1000);
  }
};
</script>
