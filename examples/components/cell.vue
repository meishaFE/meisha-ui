<template>
  <div class="ms-cell-example">
    <ms-cell is-link @click.native="handleListClick">test 3</ms-cell>
    <ms-cell @click.native="handleListClick">test 2</ms-cell>
  </div>
</template>
<script>
export default {
  name: 'MsCellItemExample',
  methods: {
    handleListClick() {
      console.log('click');
    }
  }
};
</script>

<style lang="scss" scoped>
.ms-cell-example {
  padding: 20px;
  background: #f2f2f2;
}
</style>

