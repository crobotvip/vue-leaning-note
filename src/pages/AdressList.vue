<template>
    <div>
        <van-sticky>
            <van-nav-bar title="地址列表" right-text="新增" @click-left="onClickLeft"
                         left-arrow
                         @click-right="onClickRight">
            </van-nav-bar>
        </van-sticky>

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
                            <span style="">收货人：张三</span>
                            <span style="">联系方式：123456882</span>
                            <span style="">收货地址：上海市 徐汇区 肇嘉浜路</span>
                        </div>


                    </div>
                </van-cell>
            </van-list>

        </div>

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
                finished: false
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
                this.$router.push({name:'newaddress',params:{action:'detail'}})
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
