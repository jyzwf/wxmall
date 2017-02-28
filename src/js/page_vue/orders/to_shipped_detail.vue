<!--´ý·¢»õÏêÇé-->

<template>
    <div id="to_shipped_detail">
        <order-header-tpl :headermsg.sync="order_header.info"></order-header-tpl>
        <receive-msg :receivemsg.sync="order_header.address"></receive-msg>
        <order-goods-msg  :goods_msg.sync="order_header.order" :money_msg.sync="order_header.info"></order-goods-msg>
    </div>
</template>

<style>

</style>

<script>
    import storeData from '../../store/base_data.js';
    import orderHeaderTpl from '../../components/order_detail_header.vue';
    import receiveMsg from '../../components/receive_msg.vue';
    import orderGoodsMsg from '../../components/order_goods_msg.vue';
    //    import orderMsgNorefund from '../../components/order_goods_msg.vue';

    export default {
        data(){
        return {

        }
    },
    components:{orderHeaderTpl,receiveMsg,orderGoodsMsg},
    methods:{
        get_data(){
            this.$http.post(storeData.store.state.baseUrl+'Distribution/getOrderInfo',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse( res.data )
                if(res.resp_code == 100){
                    this.$set('order_header',res)
                }

            },function(err){
                console.log(err)
            })
        }
    },
    ready(){
        this.get_data()
    }
    }
</script>