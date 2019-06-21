<template>
    <div>
        <h2>footer-tab</h2>
        <ms-footer-tab v-model="activated"
                       @change="handleFooterTabChange">
            <ms-tab-item value="1">
                <i slot="icon"
                   class="ms-icon-arrow-right"></i>
                tab-item1</ms-tab-item>
            <ms-tab-item value="2" disabled>
                <i slot="icon"
                   class="ms-icon-arrow-left"></i>
                tab-item2</ms-tab-item>
            <ms-tab-item value="3">tab-item3</ms-tab-item>
        </ms-footer-tab>
    </div>
</template>
<script>
export default {
  name: 'MsFooterTabExample',
  data() {
    return {
      activated: '1'
    };
  },
  methods: {
    handleFooterTabChange(val) {
      console.log(val);
    }
  }
};
</script>
