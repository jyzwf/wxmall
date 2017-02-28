<!--所有订单-->
<script>
    import storeData from '../../store/base_data.js';
    import orderTpl from '../../components/order_tpl.vue';
    import noOrder from '../../components/no_order.vue';
    export default {
        props:['num','order_goods_number'],
        data(){
        return {
            currentView:'order'
        }
    },
    components:{
        order:orderTpl,
        noorder:noOrder
    },
    methods:{
        getAllOrderList:function(){
            this.num = 0;
            this.$http.post(storeData.store.state.baseUrl+'Distribution/getAllOrderList',{"openid":storeData.store.state.openId,"token":"xtongtong"},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {

                var res = JSON.parse(res.data);

                if(res.resp_code == '100'){
                    this.$set('allOrder',res.orders);
                    this.order_goods_number = res.shopping_cart_num;
                }else{
                    this.currentView = 'noorder'
                }

            },function(err){
                console.log(err);
            })
        }
    },
    ready(){
        this.getAllOrderList();
    }
    }
</script>


<template>
    <div id="allOrder">

        <component :is="currentView"  :orders.sync="allOrder" >
        </component>
            <!--<order-tpl></order-tpl>-->

    </div>
</template>

<style lang="sass">
    #allOrder{
        padding-top:0.5rem;
        margin-bottom: 1rem;
    }
</style>
