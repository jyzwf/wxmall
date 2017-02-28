/**
 * Created by zhuwangfei on 2016/6/4.
 */
//import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import user_center from '../page_vue/user/user_center.vue';

import qr_code from '../page_vue/user/qr_code.vue';

import base from '../../scss/base/index.scss';

Vue.use(VueRouter,VueResource);
//Vue.http.options.emulateJSON = true;

//console.log(Vue.http.emulateJSON);

var router = new VueRouter({
    //abstract:true
});

router.map({
    '/':{
        component : user_center
    },
    '/qr_code/:heading/:qrCode':{
        name:'qrCode',
        component : qr_code
    }
})

router.redirect({
    '*':'/'
})

var u_center = Vue.extend({});

router.start(u_center,'#user_center');

Vue.config.debug = true;

