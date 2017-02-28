/**
 * Created by zhuwangfei on 2016/5/31.
 */
import VueResource from 'vue-resource';
import brand_hall from '../page_vue/goods/brand_hall.vue';

import base from '../../scss/base/index.scss';

Vue.use(VueResource);
Vue.config.debug = true;

new Vue(brand_hall);