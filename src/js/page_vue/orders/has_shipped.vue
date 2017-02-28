<!--待收货详情-->

<template>
    <div id="shipped_del">
        <order-header-tpl :headermsg.sync="order_header.info"></order-header-tpl>
        <logistics-part :logistics_msg.sync="order_header.delivery"></logistics-part>
        <receive-msg :receivemsg.sync="order_header.address"></receive-msg>
        <order-goods-msg  :goods_msg.sync="order_header.order" :money_msg.sync="order_header.info"></order-goods-msg>

        <button @click="toConfirmReceipt" class="sg_btn be_vpn">确认收货</button>
    </div>
</template>

<style lang="sass">
    #shipped_del{
        button.sg_btn{
            background: #000;
        }
    }
</style>

<script>
    import storeData from '../../store/base_data.js';
    import orderHeaderTpl from '../../components/order_detail_header.vue';
    import receiveMsg from '../../components/receive_msg.vue';
    import orderGoodsMsg from '../../components/order_goods_msg.vue';
    import logisticsPart from '../../components/logistics.vue';

    export default {
        data(){
        return {
            order_header:{
                "order_id":"O00000057EAGPW4Q",
                "time": "2016-07-15 02:23:58",
                "state": "待收货",
                "order_number": "2016071510151545",
                "address_id":"A00000057CXHNNWR"
            }
        }
    },
    components:{orderHeaderTpl,receiveMsg,orderGoodsMsg,logisticsPart},
    methods:{
        get_data(){
            this.$http.post(storeData.store.state.baseUrl+'Distribution/getOrderInfo',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse( res.data )
                if(res.resp_code == 100){
                    res.delivery.list = res.delivery.list.reverse();
                    this.$set('order_header',res)
                }

            },function(err){
                console.log(err)
            })
        },
        //确认收货
        toConfirmReceipt:function(){
            this.$http.post(storeData.store.state.baseUrl+'Distribution/takeDelivery',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse( res.data )
                if(res.resp_code == 100){
                    this.$route.router.go({'name':'allOrder'})
                }

            },function(err){
                console.log(err)
            })

        },
    },
    ready(){
        this.get_data()
    }
    }
</script>