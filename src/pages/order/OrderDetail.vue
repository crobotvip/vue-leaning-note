<template>
    <div>
        <van-sticky>
            <van-nav-bar title="订单详情" @click-left="onClickLeft"
                         left-arrow
            >
            </van-nav-bar>
        </van-sticky>
        <div style="background-color: orange;height: 90px;display: flex;flex-direction: column;justify-content: center;color: white;padding-left: 20px;">
            <span>卖家已发货</span>
            <span>自动确认收货还剩12小时</span>

        </div>

        <div class="teaweb_title">寄件地址</div>

        <div style="display: flex;flex-direction: column">
            <span style="color: cornflowerblue">[重庆市]快件已经出发，在发往上海转运中心</span>
            <span>2019-11-17 01：16：20</span>

        </div>
        <div class="teaweb_title">收货地址</div>

    </div>
</template>

<script>

    export default {
        name: 'goods',
        components: {},
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                searchResult: []
            };
        },
        created: function () {


        },
        mounted: function () {

        },
        methods: {

            onClickLeft() {
                this.$router.back()
            },
            onClickRight() {
                this.$router.back()
            },
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
