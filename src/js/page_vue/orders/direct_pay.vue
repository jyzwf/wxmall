<!--直接点击去付款的页面-->

<template>
    <div id="direct_pay">
        <header>
            <p>订单总金额（含邮）</p>
            <p>￥ {{direct_pay_msg.all_price}}</p>
        </header>

        <p>支付方式</p>
        <div class="wx_pay">
            <div>
                <img src="../../../asset/imgs/wechat-pay-copy.svg" class="s_icon" alt=""/>
                <span>微信支付</span>
            </div>
        </div>

        <footer>
            <span>微信支付</span>
            <span @click="pay">去付款</span>
        </footer>
    </div>
</template>


<style lang="sass">
    #direct_pay{
        header{
            background:#393a3f ;
            padding:0.15rem 0.16rem;
            color:#fff;
            font-size:0.15rem;

            p{
                text-align: center;
                &:first-child{
                    margin-bottom:0.1rem;
                 }
            }
        }

    &>p{
        padding:0.12rem 0.16rem;
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

    export default {
        methods:{
            get_data(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/getOrderToBePaidPayPage',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    if(res.resp_code == 100){
                        this.$set('direct_pay_msg',res)
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
//                            alert('么么哒');

                            _this.$http.post(storeData.store.state.baseUrl+'WechatPay/orderNotify',{"openid":openid2,"order_id":_this.direct_pay_msg.order_id,"address_id":_this.direct_pay_msg.address_id,"out_trade_no":param.out_trade_no},{"emulateJSON":true,"emulateHTTP":true}).then(function(str) {
//                                alert(str.data+'/////////////');
                                var str = JSON.parse(str.data);
                                if(str.resp_code == 100){
//                                alert(7987987987897)
                                    _this.$route.router.go({'name':'toBeShipped'});
                                }else{
//                                    alert(JSON.stringify(str));
                                    _this.$route.router.go({'name':'payfail',params:{
                                        "orderN":str.order.order_id,
                                        "time":str.order.time,
                                        "allPrice":str.order.all_price
                                    }})
                                }
                            },function(err){
                                alert('出错了'+err);
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

            pay(){

                this.$http.post(storeData.store.state.baseUrl+'WechatPay/getOrderParam',{
                    "order_id":this.direct_pay_msg.order_id,
                    "openid":openid2
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
            this.get_data();
        }
    }
</script>