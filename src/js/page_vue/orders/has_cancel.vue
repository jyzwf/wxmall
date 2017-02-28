<template>
    <div id="cancel_del">
        <order-header-tpl :headermsg.sync="order_header.info"></order-header-tpl>
        <receive-msg :receivemsg.sync="order_header.address"></receive-msg>
        <order-msg-norefund  :goods_msg.sync="order_header.order" :money_msg.sync="order_header.info"></order-msg-norefund>
    </div>
</template>

<style>

</style>

<script>
    import storeData from '../../store/base_data.js';
    import orderHeaderTpl from '../../components/order_detail_header.vue';
    import receiveMsg from '../../components/receive_msg.vue';
    import orderMsgNorefund from '../../components/order_msg_norefund.vue';
//    import orderMsgNorefund from '../../components/order_goods_msg.vue';

    export default {
        data(){
            return {
//                order_header:{
//                    "order_id":"O00000057EAGPW4Q",
//                    "time": "2016-07-15 02:23:58",
//                    "state": "已取消",
//                    "order_number": "2016071510151545",
//                    "address_id":"A00000057CXHNNWR"
//                }
            }
        },
        components:{orderHeaderTpl,receiveMsg,orderMsgNorefund},
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