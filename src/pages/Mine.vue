<template>
    <div>
        <div class="user-head">

            <div style="position: absolute;text-align: center">
                <img style="width: 100px;height: 100px;" src="https://www.93goodtea.com/img/pic/775x362-2.jpg">
                <p>用户名</p>
            </div>

        </div>

        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="pending-payment" />
                待付款
            </van-col>
            <van-col span="6">
                <van-icon name="records" />
                待接单
            </van-col>
            <van-col span="6">
                <van-icon name="tosend" />
                待发货
            </van-col>
            <van-col span="6">
                <van-icon name="logistics" />
                已发货
            </van-col>
        </van-row>

        <van-cell-group class="user-group">
            <van-cell icon="records" title="全部订单" is-link to="orderList" />
        </van-cell-group>

        <van-cell-group>
            <van-cell icon="points" title="我的积分" is-link />
            <van-cell icon="gold-coin-o" title="我的优惠券" is-link to="couponList"/>
            <van-cell icon="gift-o" title="我收到的礼物" is-link />
            <van-cell icon="gift-o" title="地址管理" is-link to="address"/>
        </van-cell-group>
    </div>
</template>

<script>
    import { Row, Col, Icon, Cell, CellGroup } from 'vant';
    export default {
        name: 'goods',
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    /*.user-span{*/
        /*color: rebeccapurple;*/
        /*position: absolute;*/
        /*z-index: 2000;*/

    /*}*/
    .user {
        &-head{
            width: 100%;
            height: 53vw;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                color: rebeccapurple;
                position: absolute;
                z-index: 2000;

            }
        }

        &-poster {
            width: 100%;
            height: 53vw;


        }
        &-group {
            margin-bottom: 15px;
        }
        &-links {
            padding: 15px 0;
            font-size: 12px;
            text-align: center;
            background-color: #fff;
            .van-icon {
                display: block;
                font-size: 24px;
            }
        }
    }
</style>
