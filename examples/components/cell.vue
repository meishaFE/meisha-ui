<template>
  <div class="ms-cell-example">
    <h2>cell</h2>
    <ms-cell is-link @click.native="handleListClick">test 3</ms-cell>
    <ms-cell is-link @click.native="handleListClick">test2asdfasfa asfasfasfasfasdfasdfasdsasgasg</ms-cell>
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
}
</style>

