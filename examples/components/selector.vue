<template>
  <div>
    <ms-selector v-model="value" label="学员信息" multiple placeholder="选择学员"
    @click="changeData"></ms-selector>
  </div>
</template>
<script>
export default {
  name: 'MsSelectorExample',
  data() {
    return {
      value: ''
    };
  },

  methods: {
    changeData() {
      setTimeout(() => {
        this.value = ['Lemon', 'Jayden'];
      }, 1000);
    }
  }
};
</script>
