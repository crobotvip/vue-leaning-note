<template>
    <div>
        <van-sticky>
            <van-nav-bar title="全部订单"  @click-left="onClickLeft"
                         left-arrow
                         >
            </van-nav-bar>
        </van-sticky>
        <van-tabs v-model="active" animated  sticky :offset-top="40">
            <van-tab v-for="item in titles" :key="item.index" :title="item.name">
                <div>
                    <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad"
                    >
                        <van-cell
                                v-for="item in list"
                                :key="item"

                        >
                            <div style="display: flex;flex-direction: row" @click="gotoDetail">



                                <div style="display:flex;margin-left: 10px;flex-direction: column">
                                    <span style="">订单编号：1234567890987654321</span>
                                    <span style="">订单状态：已支付</span>
                                    <span style="">支付方式：支付宝</span>
                                </div>


                            </div>
                        </van-cell>
                    </van-list>

                </div>
            </van-tab>
        </van-tabs>


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
                active: 0,
                finished: false,
                titles:[{name:"待付款"},{name:"待接单"},{name:"待发货"},{name:"已发货"}]
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            },
            gotoDetail(){
                this.$router.push('orderDetail')
            },
            onClickLeft() {
                this.$router.back()
            },
            onClickRight() {
                this.$router.push({name:'newaddress',params:{action:'add'}})
            }

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
