<!--我的订单-->

<script>

    import storeData from '../../store/base_data.js';
    export default{
        props:['goods_number'],
        data(){
            return {
                bar_width:0,
                num:0
            }
        },
        methods:{
            setbar_width:function(){
                this.bar_width = document.querySelector('#order_nav a').offsetWidth;
            }
        },
        computed:{
            bar_left:function(){
                return this.num * this.bar_width
            }
        },
        ready(){
            this.setbar_width();
//            console.log(typeof this.bar_width)


        }
    }
</script>

<template>
    <div id="order_form">
        <div id="order_nav">
            <a v-link="{name:'allOrder'}">全部</a>
            <a v-link="{name:'needPay'}" >待付款</a>
            <a v-link="{name:'toBeShipped'}">待发货</a>
            <a v-link="{name:'alreadyShipped'}" >已发货</a>
            <a v-link="{name:'successShipped'}">交易成功</a>
            <span class="move_bar" :style="{width:bar_width +'px',left:bar_left + 'px' }"></span>
        </div>

        <router-view :num.sync = 'num' :order_goods_number.sync = 'goods_number'></router-view>
    </div>
</template>

<style lang="sass">
    #order_form{
    #order_nav{
        width:100%;
        position: fixed;
        display: flex;
        max-width:5.4rem;
        align-items: center;
        font-size:0.13rem;
    a{
        flex:1;
        text-align: center;
        padding: 0.1rem 0 .13rem;
        background: #fff;

    &.active{
         color:#000;
     };
    }

    span{
        display: inline-block;
        position: absolute;
        /*width:0.72rem;*/
        height:0.03rem;
        background: #000;
        bottom:0px;
        left:0px;
        transition:all .5s cubic-bezier(0.35,0,0.25,1);
    }
    }
    }
</style>

