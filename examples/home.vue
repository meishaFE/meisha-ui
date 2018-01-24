<template>
    <div style="padding-top: 20px;">
        <ms-cell is-link>
            <router-link :to="{path: '/button'}">button</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/cell'}">cell</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/footer-tab'}">footer-tab</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/toast'}">toast</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/back-top'}">back-top</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/modal'}">modal</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/popup'}">popup</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/loading'}">loading</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/switch'}">switch</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/radio'}">radio</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/input'}">input</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/textarea'}">textarea</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/input-number'}">input-number</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/selector'}">selector</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/range'}">range</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/message-box'}">message-box</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/swipe'}">swipe</router-link>
        </ms-cell>
    </div>
</template>

<script>
export default {
  name: 'home'
};
</script>
<style lang="scss" scoped>
a {
  color: #00ca9d;
  display: block;
}
</style>
