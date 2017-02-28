<script>
    export default{
        props:['sale'],
        data(){
            return {
                sale_count:1
            }
        },
        methods:{
            add_goods:function(){
//                向后台发送数据
                this.sale_count++
            }
        }
    }
</script>

<template>
    <div class="shop_car">
        <div class="car">
            <p>
                <img src="/dist/imgs/ic_shopping_cart.svg" alt=""/>
                <span>{{sale_count}}</span>
            </p>

            <span></span>
        </div>

        <div class="money">
            <span>￥{{sale}}</span>
            <span @click="add_goods">加入购物车</span>
        </div>
    </div>
</template>

<style lang="sass">
    .shop_car{
        width:100%;
        position: fixed;
        bottom:0;
        display: flex;
        padding: 0 0.12rem 0 0.16rem;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        box-sizing: border-box;
        height: 0.56rem;
        border-top:1px solid rgba(0,0,0,.12);

        .car{
            cursor:pointer;
            img{
                width:0.24rem;
                height: 0.24rem;
            }

            p{
                display: inline-block;
                position: relative;

                span{
                    position: absolute;
                    right:-0.04rem;
                    top:-0.04rem;
                    width:0.16rem;
                    height:0.16rem;
                    border-radius: 50%;
                    background: red;
                    color:#fff;
                    font-size: 0.12rem;
                    line-height: 0.16rem;
                    text-align: center;
                }
            }
        }

        .money{
            span:first-child{
                color:red;
            }

            span:last-child{
                padding:0.04rem 0.08rem;
                background: rgba(0, 0, 0, 0.87);
                color:#fff;
                border-radius: 0.04rem;
                margin-left:0.11rem;
                cursor: pointer;
            }
        }
    }
</style>