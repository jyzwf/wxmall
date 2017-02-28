<template>
    <div id="successful_trade">
        <component :is="currentView"  :orders.sync="allSuccess" >
        </component>

    </div>
</template>

<style lang="sass">
    #successful_trade{
        padding-top:0.5rem;
        margin-bottom: 1rem;
    }
</style>

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
        success_order:function(){
            this.num = 4;
            this.$http.post(storeData.store.state.baseUrl+'Distribution/getOrders',{"openid":storeData.store.state.openId,"token":"xtongtong","state":"3"},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {

                var res = JSON.parse(res.data);

                if(res.resp_code == '100'){
                    this.$set('allSuccess',res.orders);
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
        this.success_order();
//        storeData.store.moveBarPos(4)
    }
    }
</script>