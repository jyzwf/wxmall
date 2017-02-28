<!--粉丝销量详情-->
<script>
    import storeData from '../../../store/base_data.js';

    export default {
        data(){
        return {

        }
    },
    methods:{
        getOrderMsg:function(){

            this.$http.post(storeData.store.state.baseUrl+'Distribution/fansOrderInfo',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                console.log(res);
                var res = JSON.parse(res.data);

                if(res.resp_code == '100'){
                    this.$set('orderMsg',res.orders);
                }

            },function(err){
                console.log(err);
            })
        }
    },
    ready(){
        this.getOrderMsg();
    }
    }
</script>


<template>
    <div id="order_detail">
        <p>
            <span class="l">累计</span>
            <span class="r">￥ {{orderMsg.valuble_money}}</span>
        </p>

        <p>
            <span class="l">订单号</span>
            <span class="r">{{orderMsg.order_number}}</span>
        </p>

        <p>
            <span class="l">订单状态</span>
            <span class="r">{{orderMsg.state}}</span>
        </p>

        <p>
            <span class="l">下单时间</span>
            <span class="r">{{orderMsg.time}}</span>
        </p>

        <p>
            <span class="l">订单金额</span>
            <span class="r">￥{{orderMsg.money}}</span>
        </p>

        <p>
            <span class="l">粉丝昵称</span>
            <span class="r">{{orderMsg.name}}</span>
        </p>

        <p>
            <span class="l">粉丝 ID</span>
            <span class="r">{{orderMsg.id}}</span>
        </p>

    </div>
</template>

<style lang="sass">
    #order_detail{
        padding:0 0.16rem .08rem;
        font-size:0.12rem;
        border-bottom:1px solid rgba(0,0,0,.12);
        background:#fff;

    p:first-child{
        padding:0.2rem 0;
        border-bottom:1px solid rgba(0,0,0,.12);
        margin-bottom:0.08rem;
    .l{
        font-size: 0.15rem;
    }
    .r{
        font-size: 0.2rem;
        color: #4caf50;
        float: right;
    }
    }

    p:nth-of-type(n+2){
        padding:0.08rem 0;
    .r{
        float:right
    }
    }
    }
</style>