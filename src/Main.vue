<template>
    <div>

        <!--<keep-alive>-->
            <router-view style="padding-bottom: 50px;"></router-view>
        <!--</keep-alive>-->

        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="home" replace>首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="category" replace>分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="goodsList" replace>产品</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="mine" replace>我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>


    export default {
        name: 'app',
        data() {
            return {
                active: 0
            };
        },
        methods: {},
        mounted: function () {
//            this.$router.push('home')
        }


    }
</script>

<style scoped>
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*color: #2c3e50;*/
    }


</style>
