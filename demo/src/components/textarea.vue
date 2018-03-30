<template>
    <div>
        <ms-textarea v-model="text"
                     placeholder="请输入"
                     label="测试"></ms-textarea>
        <ms-textarea v-model="text"
                     placeholder="请输入"
                     disabled
                     label="测试"></ms-textarea>
        <ms-textarea v-model="text"
                     required
                     placeholder="请输入"
                     label="测试"></ms-textarea>
    </div>
</template>

<script>
export default {
  name: 'MsTextareaExample',

  data() {
    return {
      text: ''
    };
  }
};
</script>
