<template>
    <div>
        <van-sticky>
            <van-nav-bar title="优惠券列表" @click-left="onClickLeft"
                         left-arrow
                         >
            </van-nav-bar>
        </van-sticky>
        <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
        />

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
                chosenCoupon: -1,
                coupons: [{
                    available: 1,
                    condition: '无使用门槛\n最多优惠12元',
                    reason: '',
                    value: 150,
                    name: '优惠券名称',
                    startAt: 1489104000,
                    endAt: 1514592000,
                    valueDesc: '1.5',
                    unitDesc: '元'
                }],
                disabledCoupons: [{
                    available: 1,
                    condition: '无使用门槛\n最多优惠12元',
                    reason: '',
                    value: 150,
                    name: '优惠券名称',
                    startAt: 1489104000,
                    endAt: 1514592000,
                    valueDesc: '1.5',
                    unitDesc: '元'
                }]
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
                this.$router.push('newaddress/detail')
            },
            onClickLeft() {
                this.$router.back()
            },
            onClickRight() {
                this.$router.push('newaddress/add')
            },
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            }

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
