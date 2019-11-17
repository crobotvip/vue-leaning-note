/**
 * Created by luopeng on 2019/11/7.
 */
import Home from './pages/Home.vue'
import Goods from './pages/Goods.vue'
import Mine from './pages/Mine.vue'
import GoodsDetail from './pages/GoodsDetail.vue'
import GoodsList from './pages/GoodsList.vue'
import Category from './pages/Category.vue'
import AdressList from './pages/AdressList.vue'
import AdressDetail from './pages/AdressDetail.vue'
import CouponList from './pages/CouponList.vue'
import OrderList from './pages/order/OrderList.vue'
import OrderDetail from './pages/order/OrderDetail.vue'
import Main from './Main.vue'
export const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {path: '/home', component: Home},
            {path: '/', component: Home},
            {path: '/goods', component: Goods},
            {path: '/mine', component: Mine},

            {path: '/goodsList', component: GoodsList},
            {path: '/category', component: Category}
        ]

    },
    {path: '/address', component: AdressList},
    {path: '/newaddress', name: 'newaddress', component: AdressDetail},
    {path: '/goodsDetail', component: GoodsDetail},
    {path: '/couponList', component: CouponList},
    {path: '/orderList', component: OrderList},
    {path: '/orderDetail', component: OrderDetail}

]