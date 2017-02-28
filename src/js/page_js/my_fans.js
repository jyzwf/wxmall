/**
 * Created by zhuwangfei on 2016/7/1.
 */
import VueResource from 'vue-resource';

import orderForm from '../page_vue/user/fans/my_fans.vue';

import base from '../../scss/base/index.scss';


Vue.config.debug = true;
Vue.use(VueResource);
new Vue(orderForm);