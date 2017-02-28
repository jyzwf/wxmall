<!--品牌详情-->
<script>

    import storeData from '../../store/base_data.js';


    export default {
        data(){
            return {
                maskState:false
            }
        },
        components:{},
        methods:{
            get_data:function(){

                this.$http.post(storeData.store.state.baseUrl+'Distribution/brandInfo',{"brand_id":this.$route.params.brandId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    this.$set('active_data',res);

                },function(err){
                    console.log(err)
                })
            },
            add_goods:function(idNum){
//                this.maskState = true;


                this.$http.post(storeData.store.state.baseUrl+'Distribution/addToShoppingCart',{
                    "openid":storeData.store.state.openId,
                    "token":"xtongtong",
                    "commodity_id":idNum,
                    "commodity_num":1,
                    "change":2
                },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    if(res.resp_code == 100 && res.result ){
                        this.maskState = true;
//                        window.sessionStorage.show_goods_count++;
                        var _this = this;
                        var t = setTimeout(function(){
                            _this.maskState = false;
                            clearTimeout(t);
                        },2000);
                    }

                },function(err){
                    console.log(err)
                })
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
            this.get_data();
        }
    }
</script>

<template>
    <div id="mall_index">
        <div class="mask" v-if="maskState">已加入购物车</div>
        <div class="brandPic">
            <img src="{{active_data.brand_info.brand_title_img}}" alt=""/>
        </div>

        <div class="word_intr">
            <img src="../../../asset/imgs/6.jpg" alt=""/>
            <span>{{active_data.brand_info.brand_desc}}</span>
        </div>

        <section id="goods">
            <a v-link="{name:'goodMsg',params:{commodityId:item.commodity_id}}" v-for = 'item in active_data.commodities'>
                <div class="first_view">
                    <p v-if="item.is_null == '1'">已抢完</p>
                    <img v-load_pic="item.commodity_show_img"  src="../../../asset/imgs/9.jpg" alt=""/>
                </div>
                <div class="des">
                    <p>{{item.commodity_name}}</p>
                    <p><span>￥{{item.commodity_sale_price}} <del>￥{{item.commodity_primitive_price}}</del></span><img v-if="item.is_null != '1'" @click.stop.prevent="add_goods(item.commodity_id)" src="../../../asset/imgs/ic-add-cart.svg" alt=""/></p>
                </div>
            </a>
        </section>

    </div>

</template>

<style lang="sass">
    #mall_index{
        position:relative;

        .mask{
            background: rgba(0,0,0,.8);
            color:#fff;
            position: fixed;
            padding:0.2rem 0.4rem;
            border-radius: 0.04rem;
            left:50%;
            top:50%;
            transform: translate3d(-50%,-50%,0);
            z-index: 999;
        }

        .brandPic{
            img{
                width:100%;
            }
        }
        .word_intr{
            padding: 0.16rem;
            display: flex;
            justify-content: flex-start;
            border-bottom:1px solid rgba(0, 0, 0, 0.12);
            background:#fff;
            font-size:0.12rem;

            img{
                /*display: inline-block;*/
                width:0.48rem;
                min-width:0.48rem;
                height: 0.5rem;
                margin-right:0.16rem;
            }

            span{
                white-space: pre-wrap;
                flex:auto;
            }
        }
    #goods{
        padding:0.08rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;

        a{
            /*flex:1;*/
            margin-bottom:0.08rem;
            width:calc(50% - 0.04rem);
            background: #fff;
        }

        .first_view{
            width:100%;
            position:relative;

            img{
                width:inherit;
                height:inherit;
            }

            p{
                position: absolute;
                width:0.65rem;
                height:0.65rem;
                text-align: center;
                font-size: 0.15rem;
                line-height: 0.65rem;
                background: rgba(0,0,0,.54);
                color:#fff;
                left:50%;
                top:50%;
                transform: translate3d(-50%,-50%,0);
                border-radius: 50%;
            }
        }

        /*img:first-child{*/
            /*width:100%;*/
            /*height:1.68rem;*/
            /*border-top-left-radius: 0.08rem;*/
            /*border-top-right-radius: 0.08rem;*/
        /*}*/

        .des{
            padding:0.09rem .12rem;
            font-size:0.15rem;

            del{
                color:rgba(0, 0, 0, 0.38);
                font-size: 0.11rem;
            }

            p:first-child{
                overflow : hidden;
                /*text-overflow: ellipsis;*/
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-bottom:0.08rem;
                font-size: 0.13rem;
                color:rgba(0,0,0,.58);
            }

            p:last-child{
                display: flex;
                justify-content:space-between;
                align-items: flex-end;
                span{
                    color:red;
                }
            }

            img{
                width:0.24rem;
                height:0.24rem;
                border-radius: 50%;
            }
        }


        }
    }
</style>

