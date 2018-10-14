<template>
  <div>
    <ms-button @click="showLoading">显示 loading</ms-button>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
    <div>loading测试</div>
  </div>
</template>
<script>
export default {
  name: 'MsLoadingExample',

  methods: {
    showLoading() {
      const l = this.$loading();
      setTimeout(() => {
        l.close();
      }, 5000);
    }
  }
};
</script>
