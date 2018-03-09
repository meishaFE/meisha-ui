<template>
    <div style="background: #fff; height: 600px; padding: 10px;">
        <h3>普通使用</h3>
        <ms-radio v-model="value"
                  label="1"></ms-radio>
        <h3>带 label</h3>
        <ms-radio v-model="value2"
                  label="1">测试1</ms-radio>
        <ms-radio v-model="value2"
                  label="2">测试2</ms-radio>
        <h3>改变大小</h3>
        <ms-radio v-model="value3"
                  :size="30"
                  label="1">大 size</ms-radio>
        <h3>改变颜色</h3>
        <ms-radio v-model="value4"
                  label="1"
                  borderColor="#00ca9d">改变边框颜色</ms-radio>
        <ms-radio v-model="value4"
                  label="2"
                  activeColor="#ff4742">改变选中的颜色</ms-radio>
        <h3>禁用</h3>
        <ms-radio v-model="value5"
                  disabled
                  label="1">禁用</ms-radio>
        <h3>按钮状态</h3>
        <ms-radio v-model="value6"
                  :button="true"
                  label="1">按钮状态</ms-radio>
        <ms-radio v-model="value6"
                  :button="true"
                  label="2">按钮状态</ms-radio>
        <ms-radio v-model="value6"
                  button
                  disabled
                  label="3">按钮禁用</ms-radio>
                  <ms-radio v-model="value6"
                  button
                  button-round="100px"
                  label="4">按钮加圆角</ms-radio>
    </div>
</template>
<script>
export default {
  name: 'MsRadioExample',

  data() {
    return {
      value: '2',
      value2: '1',
      value3: '2',
      value4: '2',
      value5: '1',
      value6: '1'
    };
  }
};
</script>
<style scoped>
h3 {
  margin: 10px 0;
}
</style>
