<!--首页五个Tab切换入口-->

<script>
    import storeData from '../store/base_data.js';
    export default{
        data(){
            return {
                goods_count:0
            }
        },
        /*compoted:{
            goods_count:storeData.store.state.shop_count
        },*/
        ready(){
            var _this = this;
//            console.log(storeData.store.state.shop_count);
            /*let t =setTimeout(function(){
                _this.$set('goods_count',storeData.store.state.shop_count);
            },1000)*/
        /*this.$nextTick(function () {
//            this.goods_count = storeData.store.state.shop_count;
            alert(storeData.store.state.shop_count);
            this.$set('goods_count',storeData.store.state.shop_count)
        })*/


        }
    }
</script>

<template>
    <div id="mainPage">
        <router-view :goods_number.sync = 'goods_count'></router-view>
        <div id="l_nav">

            <a v-link="{ name: 'index'}">
                <img class="s_icon" src="../../asset/imgs/tab-home.svg" alt=""/>
                <span>商城首页</span>
            </a>

            <a v-link="{ name: 'brandHall'}">
                <img class="s_icon" src="../../asset/imgs/tab-brands.svg" alt=""/>
                <span>品牌馆</span>
            </a>

            <a class="show_good_num" v-link="{ name: 'shopCar'}">
                <div>
                    <img class="s_icon" src="../../asset/imgs/tab-cart.svg" alt=""/>
                    <span class="goods_num">{{goods_count}}</span>
                </div>
                <span>购物车</span>

            </a>

            <a v-link="{ name: 'allOrder'}">
                <img class="s_icon" src="../../asset/imgs/tab-orders.svg" alt=""/>
                <span>我的订单</span>
            </a>

            <a v-link="{ name: 'userCenter'}">
                <img class="s_icon" src="../../asset/imgs/tab-me.svg" alt=""/>
                <span>我是代言人</span>
            </a>

        </div>
    </div>
</template>

<style>
    #mainPage{
    #l_nav{
        width:100%;
        max-width: 5.4rem;
        position:fixed;
        bottom:0;
        border-top: 1px solid #D4C9C9;
        display:flex;
        z-index:99;
        font-size:0;
        /*height:0.5rem;*/

        a{
            flex:1;
            display: flex;
            flex-direction: column;
            font-size: 0.11rem;
            color:#7B6464;
            padding: 0.1rem 0px 0.06rem;
            background: #fff;
            justify-content:center;
            align-items:center;
            cursor:pointer;

            &.active{
                 color:#000;
             };
        }

        .show_good_num div{
            position:relative;
            .goods_num{
                position: absolute;
                right: -0.08rem;
                top: -0.04rem;
                width: 0.16rem;
                height: 0.16rem;
                border-radius: 50%;
                background: red;
                color: #fff;
                font-size: 0.12rem;
                line-height: 0.16rem;
                text-align: center;
            }
        }
    }
    }
</style>