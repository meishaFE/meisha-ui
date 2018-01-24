<template>
  <div>
    <ms-dialog :visible.sync="visible"></ms-dialog>
  </div>
</template>
<script>
export default {
  name: 'MsDialogExample',
  data() {
    return {
      visible: false
    };
  }
};
</script>
