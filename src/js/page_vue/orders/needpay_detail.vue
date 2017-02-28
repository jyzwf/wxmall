<!--待付款的详情-->
<template>
    <div id="needpay_del">
        <order-header-tpl :headermsg.sync="order_header.info"></order-header-tpl>
        <receive-msg :receivemsg.sync="order_header.address"></receive-msg>

        <div class="orders">
            <div class="order_item" v-for="orderItem in order_header.shopping_cart">
                <header>订单{{$index+1 }}: <span>时光传媒 杭州 发货 (包邮)</span></header>
                <div class="sg_cells">
                    <div class="cell_g" v-for="item in orderItem.commodity">
                        <img v-cloak :src="item.commodity_title_img" alt=""/>
                        <div class="cell_g_m">
                            {{item.commodity_name}}
                        </div>
                        <div class="cell_g_r">
                            <p>￥ {{item.commodity_sale_price}}</p>
                            <p>x {{item.commodity_num}}</p>
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <a href="javascript:void(0)">
                        <span>发货方式</span>
                        <p>
                            <span>快递 {{orderItem.express}}元</span>
                        </p>
                    </a>

                    <a href="javascript:void(0)">
                        <span>订单总价</span>
                        <p>
                            <span>￥ {{orderItem.all_price}}</span>
                        </p>
                    </a>

                </div>
            </div>
        </div>

        <div class="pay_w">
            <p>支付方式 <span>合计金额：<b>￥{{order_header.all_price}}</b></span></p>
            <div class="wx_pay">
                <div>
                    <img src="../../../asset/imgs/wechat-pay-copy.svg" class="s_icon" alt=""/>
                    <span>微信支付</span>
                </div>
            </div>
        </div>

        <footer>
            <span>微信支付</span>
            <span @click="detail_pay">去付款</span>
        </footer>
    </div>
</template>

<style lang="sass">
    #needpay_del{
        margin-bottom:1rem;
        /*.order_goods_msg{*/
            /*margin-bottom: 0.06rem;*/
        /*}*/

        .pay_w{
            p{
                padding:0rem 0.16rem 0.12rem;
                span{
                    float: right;
                }

                b{
                    color:red;
                }
            }
        }

    .order_item{
        background:#fff;
        margin-bottom:0.16rem;
    header{
        padding: 0.12rem 0.16rem 0.04rem;
    span{
        vertical-align: inherit;
    }
    }
    .cell{
        padding:0rem 0.12rem 0rem 0.16rem;
        font-size:0.15rem;
        border-bottom:1px solid #e0e0e0;
    a{
        margin-top: 0.14rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom:0.14rem;
        border-bottom:1px solid #e0e0e0;
    &:last-child{
         border:none
     }
    p{
    span{
        color:rgba(0, 0, 0, 0.54)
    }
    }
    }
    }
    }

    .wx_pay{
        padding:0.14rem 0.16rem;
        background: #fff;
        font-size: 0.15rem;
        color:rgba(0, 0, 0, 0.54);
        img{
            margin-right:0.16rem;
        }

    }

    footer{
        position: fixed;
        bottom:0;
        left:0;
        padding:0.17rem 0.16rem;
        background: #fff;
        width:100%;
        border-top: 0.01rem solid #e0e0e0;
        font-size:0.15rem;

    span:last-child{
        float:right;
        background:rgba(0, 0, 0, 0.87);
        color:#fff;
        padding:0.04rem 0.2rem;
        border-radius:0.04rem;
    }
    }
    }
</style>

<script>
    import storeData from '../../store/base_data.js';
    import orderHeaderTpl from '../../components/order_detail_header.vue';
    import receiveMsg from '../../components/receive_msg.vue';
    import orderMsgNorefund from '../../components/order_msg_norefund.vue';

    export default {
        data(){
            return {
//                order_header:{
//                    "order_id":"O00000057EAGPW4Q",
//                    "time": "2016-07-15 02:23:58",
//                    "state": "待付款",
//                    "order_number": "2016071510151545",
//                    "address_id":"A00000057CXHNNWR"
//                }
            }
        },
        components:{orderHeaderTpl,receiveMsg,orderMsgNorefund},
        methods:{
            get_data(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/orderToBePaidBalance',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    if(res.resp_code == 100){
                        this.$set('order_header',res)
                    }
                },function(err){
                    console.log(err)
                })
            },
            jsApiCall(param){
                var _this = this;
//                alert(JSON.stringify(param));
                WeixinJSBridge.invoke(
                        'getBrandWCPayRequest',
                        param,
                        function(res){
//                            WeixinJSBridge.log(res.err_msg);
//                            alert(res.err_code+res.err_desc+res.err_msg);

                            _this.$http.post(storeData.store.state.baseUrl+'WechatPay/orderNotify',{"openid":openid2,"order_id":_this.order_header.info.order_id,"address_id":_this.order_header.address.address_id,"out_trade_no":param.out_trade_no},{"emulateJSON":true,"emulateHTTP":true}).then(function(str) {
//                                alert(str.data);
                                var str = JSON.parse(str.data);
                                if(str.resp_code == 100){
                                    _this.$route.router.go({'name':'toBeShipped'})
                                }else{
                                    _this.$route.router.go({'name':'payfail',params:{
                                        "orderN":str.order.order_id,
                                        "time":str.order.time,
                                        "allPrice":str.order.all_price
                                    }})
                                }
                            },function(err){
                                alert('出错了'+err)
                                console.log(err)
                            })

                        }
                );
            },

            callpay(param){
                if (typeof WeixinJSBridge == "undefined"){
                    if( document.addEventListener ){
                        document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
                    }else if (document.attachEvent){
                        document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
                        document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
                    }
                }else{
                    this.jsApiCall(param);
                }
            },

            detail_pay(){
                alert(48)
                this.$http.post(storeData.store.state.baseUrl+'WechatPay/getOrderParam',{
                    "order_id":this.order_header.info.order_id,
                    "openid":openid2,
                },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data );
                    if(res.resp_code ){
                        alert('出错了，请稍后再试');
                        return false;
                    }
                    this.callpay(res);

                },function(err){
                    console.log(err)
                })
            }
        },
        ready(){
            this.get_data()
        }
    }
</script>
