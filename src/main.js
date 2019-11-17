import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import {routes} from './router'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import './assets/global.css'

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(Lazyload);

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})



new Vue({
    router,render: h => h(App)
}).$mount('#app')
