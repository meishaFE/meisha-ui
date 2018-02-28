<template>
  <section>
    <div>
      <ms-badge value="小标点">我的学员</ms-badge>
    </div>
    <div>
      <ms-badge value="hellow">我的学员</ms-badge>
    </div>
    <div>
      <ms-badge :value="100" :max="99">我的学员</ms-badge>
    </div>
    <div>
      <ms-badge :value="1" :max="99">我的学员</ms-badge>
    </div>
    <div>
      <ms-badge is-dot>我的学员</ms-badge>
    </div>
  </section>
</template>
<script>
export default {
  name: 'MsBadgeExample'
};
</script>
