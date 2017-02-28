/**
 * Created by zhuwangfei on 2016/7/9.
 */
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import base from '../scss/base/index.scss';
import Swiper from 'swiper'
window.Swiper = Swiper;

//引入首页的五个tab切换页面的入口页
import mainPage from './page_vue/indexTab.vue';



//引入有关地址的页面
//import addressPage from './page_vue/adress.vue';

//引入loading组件
import loadpart from './components/loading.vue';

Vue.use(VueRouter,VueResource);

var router = new VueRouter({
    transitionOnLoad:true
});



//路由的配置
router.map({
    '/':{   //配置一开始的五个tab切换的路由
        component : mainPage,
        subRoutes:{
            '/':{
                name:'index',
                component:function (resolve) {
                    require(['./page_vue/indexPage/index.vue'], resolve)
                }
            },
            '/index':{          //首页
                name:'index',
                component:function (resolve) {
                    require(['./page_vue/indexPage/index.vue'], resolve)
                }
            },
            '/brandHall':{      //品牌馆
                name:'brandHall',
                component:function (resolve) {
                    require(['./page_vue/goods/brand_hall.vue'], resolve)
                }
            },
            '/shopCar':{        //购物车
                name:'shopCar',
                component:function (resolve) {
                    require(['./page_vue/shopcar/shop_car.vue'], resolve)
                }
            },
            '/myOrder':{
                component:function (resolve) {
                    require(['./page_vue/orders/order_form.vue'], resolve)
                },
                subRoutes:{
                    '/':{     //结算
                        name:'allOrder',
                        component:function(resolve){
                            require(['./page_vue/orders/allOrder.vue'],resolve);
                        }
                    },
                    '/needPay':{        //待付款
                        name:"needPay",
                        component:function(resolve){
                            require(['./page_vue/orders/need_pay.vue'],resolve)
                        }
                    },
                    '/toBeShipped':{    //待发货
                        name:'toBeShipped',
                        component:function(resolve){
                            require(['./page_vue/orders/to_be_shipped.vue'],resolve)
                        }
                    },
                    '/alreadyShipped':{     //已发货
                        name:"alreadyShipped",
                        component:function(resolve){
                            require(['./page_vue/orders/already_shipped.vue'],resolve)
                        }
                    },
                    '/successTrade':{       //交易成功
                        name:'successShipped',
                        component:function(resolve){
                            require(['./page_vue/orders/successful_trade.vue'],resolve)
                        }
                    }
                }
            },
            '/userCenter':{
                name:'userCenter',      //个人中心
                component:function (resolve) {
                    require(['./page_vue/user/user_center.vue'], resolve)
                }
            }
        }
    },

    '/newMore':{   //更多新品
        name:'new_more',
        component:function (resolve) {
            require(['./page_vue/goods/today_new_more.vue'], resolve)
        }
    },

    '/newRecommend':{   //更多新品
        name:'new_recommend',
        component:function (resolve) {
            require(['./page_vue/goods/today_more_recommend.vue'], resolve)
        }
    },

    '/brandDetail/:brandId':{   //品牌详情
        name:'brandMsg',
        component:function (resolve) {
            require(['./page_vue/goods/active.vue'], resolve)
        }
    },

    '/goodsMsg/:commodityId':{     //商品详情
        name:'goodMsg',
        component:function (resolve) {
            require(['./page_vue/goods/active_goods.vue'], resolve)
        }
    },

    '/myFans' : {   //我的粉丝
        name:'myFans',
        component:function (resolve) {
            require(['./page_vue/user/fans/my_fans.vue'], resolve)
        }
    },
    '/fansSell':{   //粉丝销量
        name:'fansOrder',
        component:function (resolve) {
            require(['./page_vue/user/fans_sell/fans_order.vue'], resolve)
        }
    },

    '/fansOrderMsg/:orderId':{   //粉丝订单详情
        name:'fansOrderMsg',
        component:function(resolve){
            require(['./page_vue/user/fans_sell/forder_detail.vue'],resolve);
        }
    },


    '/qr_code/:heading/:qrCode':{      //我的二维码
        name:'qrCode',
        component:function (resolve) {
            require(['./page_vue/user/qr_code.vue'], resolve)
        }
    },

    '/withdrawal':{ //提现
        name:'withdrawal',
        component:function(resolve) {
            require(['./page_vue/user/withdraw/withdraw.vue'], resolve)
        }
    },

    '/to_withdrawal':{  //成为会员后开始提现
        name:'beginWithdrawal',
        component:function(resolve) {
            require(['./page_vue/user/withdraw/to_withdrawal.vue'], resolve)
        }
    },

    '/withdrawal_h':{  //成为会员后开始提现历史
        name:'withdrawalHistory',
        component:function(resolve) {
            require(['./page_vue/user/withdraw/withdrawal_history.vue'], resolve)
        }
    },

    '/settlement':{     //结算
        name:'settlement',
        component:function(resolve){
            require(['./page_vue/settlement/settlement.vue'], resolve)
        }
    },


    '/chooseAd':{       //选择收货地址
        name:'chooseAd',
        component:function(resolve){
            require(['./page_vue/address/chooseAd.vue'],resolve);
        }
    },

    '/manageAd':{       //管理收货地址
        name:'manageAd',
        component:function(resolve){
            require(['./page_vue/address/manageAd.vue'],resolve);
        }
    },

    '/addAd':{          //增加收货地址
        name:'addAd',
        component:function(resolve){
            require(['./page_vue/address/addAd.vue'],resolve);
        }
    },

    '/changeAd/:addressId':{       //修改地址
        name:'changeAd',
        component:function(resolve){
            require(['./page_vue/address/changeAd.vue'],resolve);
        }
    },

    '/orderDetail':{       //订单详情
        name:'orderDel',
        component:function(resolve){
            require(['./page_vue/orders/orderDel.vue'],resolve);
        }
    },

    '/refund/:orderId/:commodityId':{         //申请退款
        name:'refund',
        component:function(resolve){
            require(['./page_vue/refund/refund.vue'],resolve);
        }
    },

    /*'/chooseAccount':{      //选择退款账户
        name:'chooseAccount',
        title:'选择退款账户',
        component:function(resolve){
            require(['./page_vue/refund/choose_account.vue'],resolve);
        }
    },*/

    /*'/manageAccount':{      //管理退款银行卡
        name:'manageAccount',
        title:'管理退款银行卡',
        component:function(resolve){
            require(['./page_vue/refund/manage_credit.vue'],resolve);
        }
    },*/

    '/cancel_order/:orderId':{   //取消订单详情
        name:'cancelOrder',
        component:function(resolve){
            require(['./page_vue/orders/has_cancel.vue'],resolve);
        }
    },

    '/success_order/:orderId':{      //交易成功详情
        name:'successOrder',
        component:function(resolve){
            require(['./page_vue/orders/has_success.vue'],resolve);
        }
    },

    '/shipped_order/:orderId':{      //待收货详情
        name:'shippedOrder',
        component:function(resolve){
            require(['./page_vue/orders/has_shipped.vue'],resolve);
        }
    },


    '/to_shippeddel/:orderId':{      //待发货详情
        name:'toShippeddel',
        component:function(resolve){
            require(['./page_vue/orders/to_shipped_detail.vue'],resolve);
        }
    },

    '/needpay_del/:orderId':{      //待付款详情
        name:'needpaydel',
        component:function(resolve){
            require(['./page_vue/orders/needpay_detail.vue'],resolve);
        }
    },

    '/pay_fail/:orderN/:time/:allPrice':{       //付款失败
        name:'payfail',
        component:function(resolve){
            require(['./page_vue/orders/pay_fail.vue'],resolve);
        }
    },

    '/watch_logistics/:orderId':{       //查看物流
        name:'watchLogistics',
        component:function(resolve){
            require(['./page_vue/logistics/watch_logistic.vue'],resolve);
        }
    },

    '/direct_pay/:orderId':{     //点击待付款的时候的去支付页面
        name:'directPay',
        component:function(resolve){
            require(['./page_vue/orders/direct_pay.vue'],resolve);
        }
    }



})

var App = Vue.extend({
    data(){
        return {
            showLoading:true
        }
    },
    components: {
        loadpart
    },
    ready(){
        Vue.http.interceptors.push((request, next) => {
            router.app.showLoading = true;
            next((response) => {
                router.app.showLoading = false;
            return response
        });
    });
    }
});

/*router.beforeEach(function (transition) {
    window.document.title=transition.to.title;
    transition.next()
})*/

router.start(App,'#light_time');

//var rootEl = router.app;

//console.log(rootEl);

/**/

Vue.config.debug = true;