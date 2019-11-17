<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>

        </keep-alive>



        <!--<el-container>-->
            <!--<el-header>-->
                <!--<el-menu-->
                        <!--:default-active="activeIndex"-->
                        <!--class="el-menu-demo"-->
                        <!--mode="horizontal"-->
                        <!--@select="handleSelect"-->
                        <!--background-color="#545c64"-->
                        <!--text-color="#fff"-->
                        <!--active-text-color="#ffd04b">-->
                    <!--<el-menu-item index="1" route="/home">首页</el-menu-item>-->
                    <!--<el-menu-item index="2" route="/goods">商品列表</el-menu-item>-->
                    <!--<el-menu-item index="3" route="/mine">我的信息</el-menu-item>-->
                <!--</el-menu>-->
            <!--</el-header>-->
            <!--<el-main>-->
                <!---->
            <!--</el-main>-->
            <!--&lt;!&ndash;<el-footer>Footer</el-footer>&ndash;&gt;-->
        <!--</el-container>-->


    </div>
</template>

<script>


    export default {
        name: 'app',
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
//            handleSelect(key, keyPath) {
//                console.log(key, keyPath);
//                var path;
//                switch (key){
//                    case '1':
//                        path="home"
//                        break;
//                    case '2':
//                        path="goods"
//                        break;
//                    case '3':
//                        path="mine"
//                        break;
//                }
//                this.$router.push(path)
//            }
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

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        padding-left: 0px;
        padding-right: 0px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        background-color: #ffffff;
        color: #333;
        min-height: 1000px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
