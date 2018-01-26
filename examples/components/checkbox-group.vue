<template>
  <div>
    <ms-check-box v-model="value" :label="test" button>test</ms-check-box>
  </div>
</template>
<script>
export default {
  name: 'MsCheckboxGroupExample',
  data() {
    return {
      value: []
    };
  }
};
</script>
