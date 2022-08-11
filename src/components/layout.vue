<template>
    <div class="layout">
        <h2 class="title">大概是一个标题</h2>
        <div class="container">
            <wen-menu :show-menu.sync="showMenu" ></wen-menu>
            <router-view />
        </div>
    </div>
</template>

<script>
import WenMenu from '@/components/menu.vue'
export default {
    name: 'layout',
    components: {WenMenu},
    data() {
        return {
            showMenu: true
            // examples: [
            //     {name: 'wen-vant-preview', path: '/wen-vant-preview'}
            // ]
        }
    }
}
</script>

<style lang="scss" scoped>
.layout{
    width: 100%;
    height: 100%;
    .title {
        margin: 0;
        padding: 30px;
    }
    .container{
        display: flex;
        flex-direction: row;
        position: relative;
    }
}
</style>