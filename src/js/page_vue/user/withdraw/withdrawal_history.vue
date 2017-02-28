<!--提现历史-->

<script>
    import storeData from '../../../store/base_data.js';
    import no_withdrawal from '../../../components/no_withdrawal.vue';
    import w_history from '../../../components/withdrawal_list.vue';

    export default {
        data(){
            return {
                w_history:'w_list'
            }
        },
        components:{
            noWithdrawal : no_withdrawal,
            w_list : w_history
        },
        methods:{
            get_history:function(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/getCashHistory',
                        {
                            "token":"xtongtong",
                            "openid":storeData.store.state.openId,
                        },
                        {"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                            var res = JSON.parse( res.data );
                            if(res.resp_code ==  100 && res.cash_history.length>0){
                                this.w_history = 'w_list';
                                this.$set('historyDate',res);
                            }else{
                                this.w_history = 'noWithdrawal';
                            }


                        },function(err){
                            console.log(err)
                        })
            }
        },
        ready(){
            this.get_history()
        }
    }
</script>

<template>
    <component :is="w_history" :his_data.sync = 'historyDate' >
    </component>
</template>


<style lang="sass">

</style>

