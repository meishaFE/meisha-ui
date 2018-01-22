<template>
    <div style="padding: 20px; background: #fff;">
        <div style="margin-bottom: 10px;">
            <ms-input-number v-model="number"></ms-input-number>
        </div>
        <div style="margin-bottom: 10px;">
            <ms-input-number disabled
                             v-model="number1"></ms-input-number>
        </div>
        <div style="margin-bottom: 10px;">
            <ms-input-number :min="0"
                             :max="10"
                             v-model="number2"></ms-input-number>
        </div>
        <div style="margin-bottom: 10px;">
        <ms-input-number :min="0"
                         size="small"
                         :max="10"
                         v-model="number2"></ms-input-number>
        </div>
         <ms-input-number :min="0"
                         size="small"
                         :max="10"
                         :controls="false"
                         v-model="number2"></ms-input-number>
    </div>
</template>
<script>
export default {
  name: 'MsInputNumberExample',

  data() {
    return {
      number: 1,
      number1: 1,
      number2: 1
    };
  }
};
</script>
