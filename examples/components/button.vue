<template>
  <div class="button-group">
    <!-- type -->
    <h2>type</h2>
    <ms-button>button default</ms-button>
    <ms-button type="primary">button primary</ms-button>
    <ms-button type="danger">button danger</ms-button>
    <!-- size -->
    <h2>size</h2>
    <ms-button size="normal">button normal</ms-button>
    <ms-button size="small">button small</ms-button>
    <ms-button size="mini">button mini</ms-button>
    <!-- disabled -->
    <h2>disabled</h2>
    <ms-button :disabled="true">button disabled</ms-button>
    <ms-button type="primary" :disabled="true">button disabled</ms-button>
    <ms-button type="danger" :disabled="true">button disabled</ms-button>
  </div>
</template>

<script>
export default {
  name: 'MsButtonExample'
};
</script>

<style lang="scss" scoped>
.button-group > * {
  margin-bottom: 15px;
}
</style>
