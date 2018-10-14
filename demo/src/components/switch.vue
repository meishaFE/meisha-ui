<template>
    <div style="background: #fff; height: 500px; padding: 10px;">
        <h3>普通使用</h3>
        <ms-switch v-model="value"></ms-switch>
        <h3>带 label</h3>
        <ms-switch v-model="value2">这是 label</ms-switch>
        <h3>禁用状态</h3>
        <ms-switch disabled
                   v-model="value3"></ms-switch>
        <h3>改变颜色</h3>
        <ms-switch v-model="value4"
                   inactiveColor="#00ca9d"
                   activeColor="#ff4742"></ms-switch>
        <h3>改变宽度</h3>
        <ms-switch v-model="value5"
                   :width="70"></ms-switch>
    </div>
</template>

<script>
export default {
  name: 'MsSwitchExample',
  data() {
    return {
      value: false,
      value2: false,
      value3: false,
      value4: false,
      value5: false
    };
  }
};
</script>
<style scoped>
h3 {
  margin: 10px 0;
}
</style>
