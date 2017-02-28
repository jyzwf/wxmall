<template>
    <div id="pay_fail">
        <div class="fail_msg">
            <!--<p class="warning">
                <img src="../../../asset/imgs/ic_query_builder.svg" alt=""/>
                <span>请在 <span class="deadline">20:00</span> 内提交订单，时间结束后商品可能被抢完哦</span>
            </p>-->

            <p class="warning">
                <img src="../../../asset/imgs/ic_query_builder.svg" alt=""/>
                <span>付款失败</span>
            </p>
        </div>

        <div class="fail_order">
            <div class="order_msg">
                <p>
                    <span>订单编号:</span>
                    <span class="val">{{$route.params.orderN}}</span>
                </p>

                <p>
                    <span>交易时间:</span>
                    <span class="val">{{$route.params.time}}</span>
                </p>

                <p>
                    <span>支付方式:</span>
                    <span class="val">微信支付</span>
                </p>

                <p>
                    <span>支付金额:</span>
                    <span class="val order_pay">￥{{$route.params.allPrice}}</span>
                </p>
            </div>
            
            <div class="fail_operate">
                <a v-link="{name:'needPay'}">查看订单</a>
                <a v-link="{name:'index'}">返回首页</a>

            </div>
        </div>
    </div>
</template>


<style lang="sass">
#pay_fail{
    .fail_msg{
        padding: 0.12rem 0 0.12rem .12rem;
        border-bottom:0.01rem solid #e0e0e0;
        .warning{
            display: flex;
            font-size:0.13rem;
            &:first-child{
                /*margin-bottom:0.12rem;*/
             }
             
             span{
                 vertical-align: inherit;
             }
             .deadline{
                 color:red;
             }
             img{
                 width:0.16rem;
                 height:0.16rem;
                 margin-right:0.08rem;
             }
        }
    }

    .fail_order{
        background: #fff;
        padding:0.16rem 0.12rem 0.2rem;
        font-size:0.13rem;
        border-bottom:0.01rem solid #e0e0e0;
        p{
            margin-bottom:0.16rem;
            .val{
                color:rgba(0, 0, 0, 0.54);
                float:right
            }
            .order_pay{
                color:#ff2d55;
                font-size: 0.17rem;
            }
        }
    }

    .fail_operate{
        padding-top: 0.2rem;
        display:flex;
        a{
            padding:0.1rem 0 ;
            width:1.44rem;
            /*display: inline-block;*/
            flex:1;
            text-align: center;
            border-radius: 0.03rem;
            border:0.01rem solid rgba(0, 0, 0, 0.87);
            &:first-child{
                margin-right:0.24rem;
             }
        }
    }
 }
</style>