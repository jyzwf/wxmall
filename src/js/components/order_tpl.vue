<template>
    <div id="order_tpl">
        <div class="order_list" v-for="order in orders">

            <a href="javascript:void(0)" class="order_item" >
                <div class="header">
                    <span class="order_state">{{order.state}}</span>
                    <span class="order_time">{{order.time}}</span>
                </div>

                <div @click="watch_detail(order.state,order.order_id)" class="sg_cells">
                    <div class="cell_g" v-for="order_goods in order.commodity">
                        <img :src="order_goods.commodity_title_img" alt=""/>
                        <!--<img src="../../asset/imgs/five.jpg" alt=""/>-->
                        <div class="cell_g_m">
                            {{order_goods.commodity_name}}
                        </div>
                        <div class="cell_g_r">
                            <p>￥ {{order_goods.commodity_sale_price}}</p>
                            <p>x {{order_goods.commodity_num}}</p>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <span>总计：￥{{order.all_price}}</span>
                    <!--待收货 -->
                    <div v-if="order.state == '已发货'">
                        <button @click="viewLogistics(order)">查看物流</button>
                        <button @click="confirmReceipt(order)">确认收货</button>
                    </div>

                    <!-- 待付款-->
                    <div v-if="order.state == '待付款'">
                        <button @click="cancel(order)">取消</button>
                        <button  @click="goPay(order)">去付款 <span v-cutdown="order.timeC">{{order.timeC}}</span></button>
                    </div>

                </div>
            </a>

        </div>
    </div>
</template>


<style lang="sass">
    #order_tpl{

    .header{
        border-bottom:1px solid rgba(0,0,0,.12);
        font-size:0.13rem;
    .order_state{
        padding:0.1rem 0.16rem;
        border-right:1px solid rgba(0,0,0,.12);
    }
    }
    .order_list{
        margin-bottom: 0.16rem;
        background: #fff;
    }

    .order_time{
        margin-left: 0.16rem;
    }

    .footer{
        text-align: right;
        padding:0.1rem 0.12rem;
        color:rgba(0, 0, 0, 0.54);
        font-size: 0.15rem;
    div{
        display: inline-block;
    }
    button{
        border:1px solid rgba(0,0,0,.84);
        background: transparent;
        vertical-align: middle;
        outline:none;
        padding:0.03rem 0.06rem;
        border-radius:.02rem;
        margin-left:.12rem;
        font-size:0.13rem;

    &:last-child{
         background:#000;
         color:#fff
     }
    }
    }
    }
</style>

<script>

    import storeData from '../store/base_data.js';
    export default {
        data(){
            return {
                detail_type:null
            }
        },
        props:['orders'],

        methods:{

        //取消订单
            cancel:function(item){
                var t = confirm('你确认要取消此订单吗?');
                console.log(item.order_id);
                if(t){
                    this.$http.post(storeData.store.state.baseUrl+'Distribution/cancelOrder',{"order_id":item.order_id,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse( res.data )
                        if(res.resp_code == 100){
                            this.$route.router.go({'name':'allOrder'})
                        }

                    },function(err){
                        console.log(err)
                    })
                }
            },

        //去付款
            goPay:function(item){
                this.$router.go({name:'directPay',params:{'orderId':item.order_id}})
            },

            //确认收货
            confirmReceipt:function(item){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/takeDelivery',{"order_id":item.order_id,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    if(res.resp_code == 100){
                        this.$route.router.go({'name':'allOrder'})
                    }

                },function(err){
                    console.log(err)
                })

            },

            //查看物流
            viewLogistics:function(item){
                this.$router.go({name:'watchLogistics',params:{'orderId':item.order_id}})
            },

            add_zero(str){
                return str<10 ? '0'+str:str;
            },

        //查看各个订单的详情
            watch_detail(state,order_id){
                this.detail_type[state](order_id);
            }
        },
        /*events:{
          cut_time(str){
            let time = +str;
            let t = setInterval(function(){
                str = this.add_zero( Math.floor(time/60) )+ " : " +this.add_zero( Math.floor(time%60) )
                time--;
                if(time<=0){
                    clearInterval(t);
                    return false;
                }
            },1000);
          }
        },*/

        directives:{
            cutdown:{
                twoWay:true,
                update(val1){

                    let _this = this;

                    this.set ( this.vm.add_zero( Math.floor(val1/60) ) + ':' + this.vm.add_zero( Math.floor(val1%60) ) );

                    this.t = setInterval(function(){

                        val1--;
                        if(val1<=1){
                            clearInterval(_this.t);
                            _this.set("00:00");
                            return false;
                        }
                        _this.set ( _this.vm.add_zero( Math.floor(val1/60) ) + ':' + _this.vm.add_zero( Math.floor(val1%60) ) );
                       /* if(val1<=0){

                            return false;
                        }*/
                    },1000);

                },
                unbind(){
                    clearInterval(this.t);
                }
            }
        },

        ready(){
            var _this = this;
            console.log(this.orders);
//            console.log(this.orders);
//            let i=0;
            /*for(let i= 0;i<this.orders.length;i++){
                let time = +(k.timeC);
                let t = setInterval(function(){
                    k.timeC = _this.add_zero( Math.floor(time/60) )+ " : " +_this.add_zero( Math.floor(time%60) )
                    time--;
                    if(time<=0){
                        clearInterval(t);
                        return false;
                    }
                },1000);
            };*/

            this.detail_type = {
                "已取消":function(str){
                    _this.$route.router.go({'name':'cancelOrder', params:{"orderId":str}})
                },
                "待发货":function(str){
                       _this.$route.router.go({'name':'toShippeddel', params:{"orderId":str}})
                },
                "待付款":function(str){
                        _this.$route.router.go({'name':'needpaydel',params:{"orderId":str}})
                },
                "交易成功":function(str){
                    _this.$route.router.go({'name':'successOrder', params:{"orderId":str}})
                },
                "已发货":function(str){
                    _this.$route.router.go({'name':'shippedOrder', params:{"orderId":str}})
                }
            };

//            setTimeout(function(){
//                console.log(_this.orders);
//            },2000)
        }
    }
</script>