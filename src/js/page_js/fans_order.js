/**
 * Created by zhuwangfei on 2016/6/30.
 */
/**
 * Created by zhuwangfei on 2016/6/26.
 */

import base from '../../scss/base/index.scss';

import VueRouter from 'vue-router';

import fans_ord from '../page_vue/user/fans_sell/fans_order.vue';

import faor_datail from '../page_vue/user/fans_sell/forder_detail.vue';




Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/':{
        component : fans_ord
    },
    'detail':{
        component : faor_datail
    }
})

router.redirect({
    '*':'/'
})

var App = Vue.extend({});

router.start(App,'#fans_order');

Vue.config.debug = true;


