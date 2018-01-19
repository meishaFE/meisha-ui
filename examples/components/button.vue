<template>
  <div class="button-group">
    <!-- type -->
    <h2>type</h2>
    <ms-button>button default</ms-button>
    <ms-button type="primary">button primary</ms-button>
    <ms-button type="warning">button warning</ms-button>
    <ms-button type="danger">button danger</ms-button>
    <!-- size -->
    <h2>size</h2>
    <ms-button size="normal">button normal</ms-button>
    <ms-button size="small">button small</ms-button>
    <!-- disabled -->
    <h2>disabled</h2>
    <ms-button :disabled="true">button disabled</ms-button>
    <ms-button type="primary" :disabled="true">button disabled</ms-button>
    <ms-button type="warning" :disabled="true">button disabled</ms-button>
    <ms-button type="danger" :disabled="true">button disabled</ms-button>
    <ms-button size="small" :disabled="true">button disabled</ms-button>
    <!-- plain -->
    <h2>plain</h2>
    <ms-button :plain="true">button primary plain</ms-button>
    <ms-button type="warning" :plain="true">button warning plain</ms-button>
    <ms-button type="danger" :plain="true">button danger plain</ms-button>
    <ms-button type="primary" :plain="true">button primary plain</ms-button>

    <!-- round -->
    <h2>round</h2>
    <ms-button size="small" round="100px">button has round</ms-button>
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




<style>

</style>
