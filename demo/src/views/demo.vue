<template>
    <div style="padding-top: 20px;">
        <ms-cell is-link>
            <router-link :to="{path: '/demo/button'}">button</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/cell'}">cell</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/footer-tab'}">footer-tab</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/toast'}">toast</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/back-top'}">back-top</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/modal'}">modal</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/popup'}">popup</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/loading'}">loading</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/switch'}">switch</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/radio'}">radio</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/input'}">input</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/textarea'}">textarea</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/input-number'}">input-number</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/selector'}">selector</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/range'}">range</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/message-box'}">message-box</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/swipe'}">swipe</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/check-box'}">check-box</router-link>
        </ms-cell>
        <ms-cell is-link>
            <router-link :to="{path: '/demo/badge'}">badge</router-link>
        </ms-cell>
    </div>
</template>

<script>
export default {
  name: 'Demo'
};
</script>
<style lang="scss" scoped>
a {
  color: #00ca9d;
  display: block;
}
</style>
