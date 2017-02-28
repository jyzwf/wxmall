<template>
    <div class="order_goods_msg">
        <section class="goods_msg">
            <p class="msg_title">商品信息 <span>{{money_msg.delivery_company}}发货</span></p>
            <div class="sg_cells">
                <div class="re_cell" v-for="goods in goods_msg.commodity">
                    <div  class="cell_g">
                        <img :src="goods.commodity_title_img" alt=""/>
                        <div class="cell_g_m">
                            {{goods.commodity_name}}
                        </div>
                        <div class="cell_g_r">
                            <p>￥ {{goods.commodity_sale_price}}</p>
                            <p>x {{goods.commodity_num}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <a href="javascript:void(0)">
                    <span>发货方式</span>
                    <p>
                        <span>{{money_msg.delivery_way}} {{money_msg.express}}元</span>
                    </p>
                </a>

                <a href="javascript:void(0)">
                    <span>订单总价</span>
                    <p>
                        <span>￥ {{money_msg.all_price}}</span>
                    </p>
                </a>

            </div>
        </section>
    </div>
</template>

<style lang="sass">
    .order_goods_msg{
        margin-top: 0.12rem;
        background:#fff;
        font-size: 0.13rem;
        border:1px solid #e0e0e0;
        border-width:1px 0;
        margin-bottom:0.5rem;
    .msg_title{
        font-size:0.15rem;
        padding:0.07rem 0.12rem 0.07rem 0.17rem;
        border-bottom:1px solid #e0e0e0;
        display: flex;
        align-items: center;
        white-space:nowrap;

    span{
        font-size: 0.13rem;
        margin-left:0.04rem;
        text-overflow:ellipsis;
        width:calc(70%);
        overflow: hidden;
    }
    }

    .sg_cells{
    .re_cell{
        margin: 0 0.12rem 0 0.17rem;
        padding: 0.12rem 0;
        border-bottom: 0.01rem solid #e0e0e0;

    &:last-child{
         border:none;
     };
    .cell_g{
        margin:0;
        padding:0;
        border:none;
    }


    }
    .refund_btn{
        text-align:right;
    button{
        background: transparent;
        border:0.01rem solid red;
        font-size: 0.15rem;
        color:red;
        padding:0.03rem .06rem;
    }
    }
    }

    .cell{
        background:#fff;
        padding:0rem 0.12rem 0rem 0.16rem;
        font-size:0.15rem;
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
</style>

<script>
    export default {
        props:['goods_msg','money_msg']
//        methods:{
//            to_refuns(order_id,item){
//            this.$route.router.go({'name':'refund',params:{'orderId':order_id,'commodityId':item.commodity_id}})
//        }
    }

</script>