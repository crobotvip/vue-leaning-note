<template>
    <div>
        <van-sticky>
            <van-nav-bar title="商品列表">
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
                    <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                            @click="gotoGoodsDetail"
                    />
                    <div style="display: flex;flex-direction: row;" v-show="false" >

                        <van-image

                                width="100"
                                height="100"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />

                        <div style="display:flex;justify-content: center;align-items: center;margin-left: 10px;flex-direction: column">
                            <span style="">名称</span>
                            <span style="">价格</span>
                            <span style="">数量</span>
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
            gotoGoodsDetail(){
                this.$router.push('goodsDetail')
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
