<!--购物车结算页面-->

<script>

    import storeData from '../../store/base_data.js';

    export default {
        data(){
            return {
                default_ad:null
            }
        },
        methods:{
            getSettle:function(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/balance',{"token":"xtongtong","openid":storeData.store.state.openId,"address_id":storeData.store.state.first_address},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse(res.data);
                    if(res.resp_code == 100){
                        if(!res.shopping_cart){
                            this.$route.router.go({name:"shopCar"});
                            return false;
                        }
                        storeData.store.changeSettleAddress(res.address.address_id);
                        window.sessionStorage.now_address = res.address.address_id;
                        this.default_ad = res.address.address_id;
                        this.$set('get_settle',res);
                    }
                    console.log(res)

                },function(err){
                    console.log(err)
                })
            },

            jsApiCall(param)
            {
                var _this = this;
//                alert(JSON.stringify(param));
                WeixinJSBridge.invoke(
                        'getBrandWCPayRequest',
                        param,
                        function(res){
//                            WeixinJSBridge.log(res.err_msg);
                           // alert(res.err_code+res.err_desc+res.err_msg);

                            _this.$http.post(storeData.store.state.baseUrl+'WechatPay/notify',{"openid":openid2,"address_id":_this.get_settle.address.address_id,"out_trade_no":param.out_trade_no},{"emulateJSON":true,"emulateHTTP":true}).then(function(str) {
//                                alert(str.data+'*************');
                                var str = JSON.parse(str.data);
                                if(str.resp_code == 100){
//                                    alert('niahoooooooo');
                                    _this.$route.router.go({'name':'toBeShipped'})
                                }else{
//                                    alert(JSON.stringify(str));
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

            callpay(param)
            {
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
            go_pay(){       //去付款
                if(!this.get_settle.address.address_id){
                    alert('请选择地址');
                    return false;
                }
                this.$http.post(storeData.store.state.baseUrl+'WechatPay/getParam',{"openid":openid2},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
//                    alert(res.data);
                    var res = JSON.parse(res.data);
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
            this.getSettle();
        }
    }
</script>
<template>
    <div id="to_settlement" v-cloak>
        <div class="warning">
            <img src="../../../asset/imgs/ic_query_builder.svg" alt=""/>
            <span>请在 <span class="deadline">20:00</span> 内提交订单，时间结束后商品可能被抢完哦</span>
        </div>

        <a v-link="{name:'chooseAd'}" class="adress">
            <div class="ad_icon">
                <img class="s_icon" src="../../../asset/imgs/ic-loc.svg" alt=""/>
            </div>

            <div v-if="default_ad"  class="receiver">
                <p>
                    <span class="user">收货人: {{get_settle.address.name}}</span>
                    <span class="tel">{{get_settle.address.mobile}}</span>
                </p>

                <p class="adre">
                    收货地址: {{get_settle.address.address_province+get_settle.address.address_city+get_settle.address.address_part+get_settle.address.address}}
                </p>

               <!-- <p class="id_num" v-if="get_settle.address.id_number">
                    身份证：{{get_settle.address.id_number}}
                </p>-->

            </div>

            <div v-else class="receiver">
                    增加收货地址
            </div>

            <div class="ad_icon">
                <img class="s_icon" src="../../../asset/imgs/ic-chevron-right.svg" alt=""/>
            </div>
            
        </a>

        <div class="orders">
            <div class="order_item" v-for="orderItem in get_settle.shopping_cart">
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

        <div class="pay_method wash_cell">
            <p id="pay_msg">支付信息</p>
            <ul>

                <li class="layout">
                    <div class="left">
                        <img src="../../../asset/imgs/wechat-pay-copy.svg" alt=""/>
                        <span class="word pay_word">微信支付</span>

                    </div>

                    <div class="right">
                        <input type="radio" name="pay" checked value="1" id="wxpay"/>
                        <label for="wxpay">
                        </label>
                    </div>
                </li>
            </ul>
        </div>

        <div id="billing">
            <span class="total">总计 ￥ {{get_settle.all_price}}</span>
            <button class="to_billing" @click="go_pay">去付款</button>
        </div>
    </div>
</template>

<style lang="sass">
body,html{
    background-color:#f8f8f8;
}
    #to_settlement{
        margin-bottom:0.7rem;
        .warning{
            padding:.1rem;
            border-bottom:1px solid rgba(0, 0, 0, 0.12);
            font-size:0.12rem;
            display: flex;
            align-items: center;
            img{
                width:0.144rem;
                margin-right: 0.08rem;
            }

            span{
                vertical-align: inherit;
                .deadline{
                    color:red
                }
            }
        }

        .adress{
            background: #393a3f;
            padding: 0.12rem 0.16rem;
            color:#fff;
            display: flex;
            align-items: center;
            font-size:0.15rem;
            .ad_icon{
                width:0.24rem;
            }
            .receiver{
                margin:0 0.12rem;
                flex:auto;
                p:first-child{
                    margin-bottom: 0.04rem;

                    span{
                        vertical-align:inherit;
                    }
                    .tel{
                        margin-left: 0.16rem;
                        font-size: 0.13rem;
                    }
                }

                .adre,.id_num{
                    font-size: 0.123rem;
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






    $radio_color:(1,#ff5777), (2,#FFAC16), (3,#7ED321) ,(4,#5ECEE3);


    %word{
         color:rgba(0, 0, 0, 0.54);
         font-size: 0.14rem;
     }

    .wash_cell{
        background: #fff;
        border-bottom:1px solid rgba(0, 0, 0, 0.12);
        font-family:NotoSansCJKsc;

    &.pay_method{
         border-top:1px solid  rgba(0, 0, 0, 0.12);
        margin-bottom: 0.7rem;
     }

    .layout{
        font-size: 0.16rem;
        padding:0.1rem 0.16rem;
        display: flex;
        justify-content:space-between;
        align-items:center;

    .left,.right{
        font-size:0;
    }

    .left{
    img{
        width:0.24rem;
        height:0.24rem;
        margin-right: 0.16rem;
    }
    }

    span,img{
        display:inline-block;
        vertical-align: middle;
    }

    .right{
        cursor:pointer;
        margin-right:0.28rem;
    input{
        position:absolute;
        left: -9999px;
        opacity: 0;

    &:not(:checked) + label:after{
         transform: scale(0) translateY(-100%);
     }

    &:checked + label:after{
         transform: scale(0.5) translateY(-100%);
     }
    }

    label{
        position: relative;
        transition:all .28s ease;
        -webkit-user-select: none;

    &:before,&:after{
                  content: "";
                  width:0.16rem;
                  height:0.16rem;
                  box-sizing: border-box;
                  position: absolute;
                  right:-0.28rem;
                  top:50%;
                  transform: translateY(-50%);
                  border:2px solid rgba(0, 0, 0, 0.54);
                  border-radius: 50%;
              }
    &:after{

         border:none;
         background: rgba(0, 0, 0, 0.54);
     }
    }
    }

    }

    #pay_msg{
    @extend %word;
        margin:0.16rem 0.16rem 0.08rem;
    }
    }



    .pay_word{
    @extend %word;
    }

    #billing{
        width:100%;
        max-width: 5.4rem;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.14rem 0.12rem 0.14rem 0.16rem;
        font-size:0.15rem;
        bottom:0rem;
        border-top:1px solid #e0e0e0;
        background:#F8F8F8;
    .to_billing{
        padding: 0.04rem 0.27rem;
        background: #000;
        border-radius: 0.04rem;
        color: #fff;
        cursor: pointer;
        border:none;
        outline:none;
        font-size: 0.15rem;
    }

    span{
        color: red;
    }

    }

    }
</style>