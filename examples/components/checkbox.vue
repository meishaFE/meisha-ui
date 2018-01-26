<template>
  <div style="padding: 10px; background: #fff;">
    <ms-checkbox-group v-model="value" button round="20px">
    <ms-checkbox label="1">test1</ms-checkbox>
    <ms-checkbox label="2">test2</ms-checkbox>
    <ms-checkbox label="3">test3</ms-checkbox>
    </ms-checkbox-group>
  </div>
</template>
<script>
export default {
  name: 'MsCheckboxExample',
  data() {
    return {
      value: ['1']
    };
  }
};
</script>
