<!--商品详情-->
<script>
    import storeData from '../../store/base_data.js';
    import gooddetail from '../../components/good_detail';

    import carousel from '../../components/carousel';

    export default {
        el : '#active_goods',
        data(){
        return {
            maskState:false,
            briefInfo:[]
        }
    },
    components:{gooddetail,carousel},
    methods:{
        get_good_info:function(){   //一开始获取数据
            this.$http.post(storeData.store.state.baseUrl+'Distribution/commodityInfo',{"token":"xtongtong","commodity_id":this.$route.params.commodityId,"openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse(res.data);
                if(res.resp_code == 100){
                    this.transform_data(res.brief_info);
                    this.$set('goods_data',res);
                }


            },function(err){
                console.log(err)
            })
        },
        add_goods:function(num){

            if(num == '1'){
                return false;
            }

            this.$http.post(storeData.store.state.baseUrl+'Distribution/addToShoppingCart',{
                "openid":storeData.store.state.openId,
                "token":"xtongtong",
                "commodity_id":this.$route.params.commodityId,
                "commodity_num":1,
                "change":2
            },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse( res.data )
                if(res.resp_code == 100 && res.result ){
                    this.maskState = true;
                    this.goods_data.shopping_cart_num++;
//                    window.sessionStorage.show_goods_count++;
                    var _this = this;
                    var t = setTimeout(function(){
                        _this.maskState = false;
//                        location.reload();
                        clearTimeout(t);
                    },2000);
                }

            },function(err){
                console.log(err)
            })
        },

        transform_data:function(data){
            var brief_info = {
                "brand_name":"【品　　牌】",
                "cintro_shelf_life":"【保质期】",
                "cintro_storage":"【储藏方法】",
                "cintro_net_content":"【净含量】",
                "cintro_production_date":"【生产日期】",
                "cintro_place":"【产　　地】",
                "cintro_prompt":"【温馨提示】",
                "cintro_edible_method":"【食用方法】"
            };

            for(var k in data){
                this.briefInfo.push({
                    name : brief_info[k],
                    val :  data[k]
                })
            }


        }
    },
    directives:{
        load_pic:{
            twoWay:true,
                    update(val){
                this.el.onload = ()=>{
                    if(this.el){
                        this.el.src = val;
                    }

                }

            }
        }
    },
    ready(){
        this.get_good_info();
    }
    }
</script>

<template>
    <div id="mall_index">
        <div class="mask" v-if="maskState">已加入购物车</div>
        <carousel :top_stories.sync="goods_data.title_img"></carousel>
        <gooddetail :title_goods = "goods_data.commodity_info"></gooddetail>
        <div class="word_intr">
            <img src="../../../asset/imgs/6.jpg" alt=""/>
            <span>{{ goods_data.commodity_info.commodity_desc }}</span>
        </div>

        <div class="good_intr">
            <p class="intr_title">商品介绍</p>
            <div>
                <p v-for="item in briefInfo"><span>{{item.name}}</span><span>{{item.val}}</span></p>
                <!--<p><span>【产         地】</span><span>商品介绍商品介绍</span></p>-->
                <!--<p><span>【净   含   量】</span><span>商品介绍商品介绍</span></p>-->
                <!--<p><span>【保   质   期】</span><span>商品介绍商品介绍</span></p>-->
                <!--<p><span>【储 藏 方 法】</span><span>商品介绍商品介绍商品介绍商品介绍商品介绍-->
                <!--商品介绍</span></p>-->
                <!--<p><span>【温 馨 提 示】</span><span>商品介绍商品介绍</span></p>-->
            </div>
        </div>


        <div id="good_pic">
            <p>商品详情</p>
            <!--<img  v-for="pic in goods_data.details_img" src="{{pic}}" alt=""/>-->
            <img  v-for="pic in goods_data.details_img" v-load_pic="pic" src="../../../asset/imgs/9.jpg" alt=""/>
        </div>

        <div id="add_to_shopCar">
            <div class="car">
                <a v-link="{name:'shopCar'}">
                    <img src="../../../asset/imgs/ic-cart-border.svg" alt=""/>
                    <span>{{goods_data.shopping_cart_num}}</span>
                </a>

                <span></span>
            </div>

            <div class="money">
                <span>￥{{goods_data.commodity_info.commodity_sale_price}}</span>
                <span  @click="add_goods(goods_data.commodity_info.is_null)">{{goods_data.commodity_info.is_null == '0'?"加入购物车":"已抢完"}}</span>
                <!--<span v-else disabled>已抢光</span>-->
            </div>
        </div>
    </div>

</template>

<style lang="sass">
    #mall_index{
        position:relative;
        font-size:0.13rem;
        .mask{
            background: rgba(0,0,0,.8);
            color:#fff;
            position: fixed;
            padding:0.2rem 0.4rem;
            border-radius: 0.04rem;
            left:50%;
            top:50%;
            transform: translate3d(-50%,-50%,0);
        }

        .good_intr{
            font-size: 0.12rem;
            background: #fff;
            margin-top:0.16rem;

            .intr_title{
                padding:0.08rem 0.16rem;
                border-bottom: 1px solid rgba(0,0,0,.12);
            }

            div{
                padding:0.12rem 0.16rem;
                p{
                    display: flex;
                    span:first-child{
                        min-width: 0.9rem;
                    }
                }
            }
        }

        .word_intr{
            padding: 0.16rem;
            display: flex;
            justify-content: flex-start;
            border-bottom:1px solid rgba(0, 0, 0, 0.12);
            background:#fff;

            img{
                /*display: inline-block;*/
                width:0.48rem  !important;
                height: 0.5rem;
                margin-right:0.16rem;
            }

            span{
                white-space: pre-wrap;
                max-width: 2.64rem;
            }

        }

        #good_pic{
            padding:0.1rem 0.16rem;
            background:#fff;
            margin-bottom:0.6rem;
            margin-top:0.2rem;
            p{
                padding:0.08rem 0;
                margin-bottom:.1rem;
                border-bottom: 1px solid rgba(0,0,0,.12);
            }
            img{
                width:100%;
                height:auto;
            }
        }
    #add_to_shopCar{
        width:100%;
        max-width:5.4rem;
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

            a{
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
    }
</style>
