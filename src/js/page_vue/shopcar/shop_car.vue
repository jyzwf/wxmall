<!--购物车结算-->

<script>
    import storeData from '../../store/base_data.js';
    import empty_car from '../../components/empty_car.vue';

    export default {
        props:['goods_number'],
        data(){
            return {
                shop_car:{},
                empty:'',
                showList:false,
                maskState:false,
                maskWord:''
            }
        },
        components:{
            emptycar : empty_car
        },
        methods:{

            get_shop_car:function(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/shoppingCart',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse(res.data);
                        if(res.resp_code == 100){
                            this.$set('shop_car',res);

                            this.goods_number = res.shopping_cart_num;
                            this.showList = !!res.commodity.length;
                            this.empty = ''
                        }else{
                            this.showList = false;
                            this.empty = 'emptycar'
                        }



                },function(err){
                    console.log(err)
                })
            },

            // 商品数量增加
            get_add:function(item){

                this.$http.post(storeData.store.state.baseUrl+'Distribution/addToShoppingCart',{
                    "openid":storeData.store.state.openId,
                    "token":"xtongtong",
                    "commodity_id":item.commodity_id,
                    "commodity_num":'1',
                    "change":2
                },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    if(res.resp_code == 100 && res.result ){
                        this.maskWord = '已加入购物车';
                        this.goods_number++;
                        this.maskState = true;
                        window.sessionStorage.show_goods_count++;
                        item.commodity_num = +item.commodity_num +1;

                        this.shop_car.all_price = (( (+item.commodity_sale_price).toFixed(2) * 100 + (+this.shop_car.all_price).toFixed(2) * 100)/100).toFixed(2);
                        var that = this;
                        var t = setTimeout(function(){
                            that.maskState = false;
                            clearTimeout(t);
                        },2000);
                    }

                },function(err){
                    console.log(err)
                })


            },

            // 商品数量减少
            get_sub:function(item){
                if(item.commodity_num == 1) return false;

                this.$http.post(storeData.store.state.baseUrl+'Distribution/addToShoppingCart',{
                    "openid":storeData.store.state.openId,
                    "token":"xtongtong",
                    "commodity_id":item.commodity_id,
                    "commodity_num":'-1',
                    "change":2
                },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    if(res.resp_code == 100 && res.result ){
                        this.maskWord = '已减少';
                        this.goods_number--;
                        this.maskState = true;

                        item.commodity_num = +item.commodity_num - 1 < 1 ? 1 : +item.commodity_num - 1;

                        this.shop_car.all_price = (( (+this.shop_car.all_price).toFixed(2)*100 - (+item.commodity_sale_price).toFixed(2)*100)/100).toFixed(2);

                        var that = this;
                        var t = setTimeout(function(){
                            that.maskState = false;
                            clearTimeout(t);
                        },2000);
                    }

                },function(err){
                    console.log(err)
                })

            },

            // 删除商品
            del_goods:function(index,item){
                var warn = confirm('确定要删除该商品吗?');
                var that = this;
                if(warn){
                    this.$http.post(storeData.store.state.baseUrl+'Distribution/deleteShoppingCart',{"token":"xtongtong","commodity_id":item.commodity_id,"openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse(res.data);
                        if(res.resp_code == 100 && res.result){
                            this.goods_number = this.goods_number - item.commodity_num;
                            that.shop_car.all_price = +that.shop_car.all_price - item.commodity_sale_price * item.commodity_num;
                            that.shop_car.commodity.splice(index,1);
                            if(!that.shop_car.commodity.length){
                                that.showList = false;
                                that.empty = 'emptycar';
                                this.goods_number=0;
                            }
                        }

                    },function(err){
                        console.log(err)
                    })

                }
            },

            //顶部倒计时
            countdown:function(){

            },

            toChange:function(){
                console.log(88)
            }
        },
        directives:{
            tochange: {
                twoWay: true,
                update:function(val1,val2){
                    console.log(val1+'#'+val2);
                        if(! /^[\d]+$/g.test(val1)){
                            val1 = val2;
                            return;
                        }
//                    alert(9587)
                    return ;


//                    if(+val1<1)
                    this.$http.post(storeData.store.state.baseUrl+'Distribution/addToShoppingCart',{
                        "openid":storeData.store.state.openId,
                        "token":"xtongtong",
                        "commodity_id":item.commodity_id,
                        "commodity_num":'1',
                        "change":2
                    },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse( res.data )
                        if(res.resp_code == 100 && res.result ){
                            this.maskWord = '已加入购物车';
                            this.maskState = true;

                            item.commodity_num = +item.commodity_num +1;

                            this.shop_car.all_price = +item.commodity_sale_price + this.shop_car.all_price;
                            var that = this;
                            var t = setTimeout(function(){
                                that.maskState = false;
                                clearTimeout(t);
                            },2000);
                        }

                    },function(err){
                        console.log(err)
                    })
                }
            }
        },
        ready(){
            this.get_shop_car();
        }
    }
</script>


<template>
    <div id="shopping_car">
        <!--<empty_car></empty_car>-->
        <div class="mask" v-if="maskState">{{maskWord}}</div>
        <section v-if="showList">
        <div class="warning">
            <img src="../../../asset/imgs/ic_query_builder.svg" alt=""/>
            <span>请在 <span class="deadline">20:00</span> 内提交订单，时间结束后商品可能被抢完哦</span>
        </div>

        <div class="lists">
            <div class="item" v-for="shop_items in shop_car.commodity">
                    <img class="pic_s" v-bind:src='shop_items.commodity_title_img' alt=""/>
                    <div class="show">
                    <p class="des_msg">{{ shop_items.commodity_name }}</p>
                    <div>
                        <span class="money">&nbsp;￥ {{ shop_items.commodity_sale_price }}</span>
                        <p class="operate_count">
                            <img class="sub" @click="get_sub(shop_items)" src="../../../asset/imgs/ic_remove.svg" alt=""/>
                            <!--<input v-tochange="shop_items.commodity_num"  class="num" v-model="shop_items.commodity_num" />-->
                            <input readonly class="num" v-model="shop_items.commodity_num" />
                            <img class="add" @click="get_add(shop_items)" src="../../../asset/imgs/ic_add.svg" alt=""/>
                            <img src="../../../asset/imgs/ic_delete.svg" alt="" @click="del_goods($index,shop_items)" class="delete"/>
                        </p>
                    </div>
                <!--</div>-->
                </div>
            </div>
        </div>

        <div id="billing">
            <span class="total">总计 ￥ {{shop_car.all_price}}</span>
            <a v-link="{name:'settlement'}" class="to_billing">去结算</a>
        </div>
        </section>

        <component :is="empty">
        </component>
    </div>
</template>

<style lang="sass">

    body,html{
        height:100%;
    }
    #shopping_car{
        height:100%;
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
        }
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

    .lists{
        margin-bottom: 1.3rem;
    }

    .item{
        display: flex;
        /*align-items: center;*/
        padding: 0.1rem 0.12rem;
        background: #fff;
        border-bottom:1px solid rgba(0, 0, 0, 0.12);
        img.pic_s{
            width:0.44rem;
            height:0.44rem;
            border-radius: 0.04rem;
            margin-right: 0.14rem;
        }

        .show{
            /*height:0.44rem;*/
            display: flex;
            /*flex:auto;*/
            width:calc(100% - 0.6rem);
            flex-direction:column;
            justify-content:space-between;

            .des_msg{
                margin-bottom: 0.06rem;
                width:100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.13rem;
            }
            div {
            display:flex;
            justify-content:space-between;
            align-items:center;

            .operate_count{
                display: flex;
                align-items: center;
            }


                *{
                    display: inline-block
                }
                .money{
                    color:red;
                    font-size: 0.15rem;
                }

                .delete{
                    width:0.2rem;
                    height:0.2rem;
                    margin-left: 0.24rem;
                    cursor: pointer;
                }

                p{
                    font-size: 0px;
                }

                .sub,.add{
                    border: 1px solid #e0e0e0;
                    width: 0.2rem;
                    height: 0.2rem;
                    cursor: pointer;
                }

                .num{
                    border:none;
                    outline:none;
                    text-align: center;
                    border:1px solid #e0e0e0;
                    border-width:1px 0;
                    font-size: 0.14rem;
                    height:0.2rem;
                    width:0.4rem;
                    line-height: 0.2rem;
                    border-radius:0;
                }

            }
        }
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
        bottom:0.48rem;
        border-top:1px solid #e0e0e0;
        background:#fff;
        .to_billing{
            padding: 0.04rem 0.27rem;
            background: #000;
            border-radius: 0.04rem;
            color: #fff;
            cursor: pointer;
        }

        span{
            color: red;
        }

    }

    }
</style>