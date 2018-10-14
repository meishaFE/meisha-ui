<template>
    <div>
        <div style="padding: 10px; background: #fff;">
            <ms-range v-model="value"></ms-range>
        </div>
        <div style="padding: 10px; background: #fff;">
            <ms-range v-model="value2"
                      disabled></ms-range>
        </div>
        <div style="padding: 10px; background: #fff;">
            <ms-range v-model="value3"
                      :min="1"
                      :max="100"></ms-range>
        </div>
        <div style="padding: 10px; background: #fff;">
            <ms-range v-model="value3"
                      :min="1"
                      :max="100">
                <span slot="start">1</span>
                <span slot="end">100</span>
            </ms-range>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MsRangeExample',

  data() {
    return {
      value: 1,
      value2: 10,
      value3: 3
    };
  }
};
</script>
