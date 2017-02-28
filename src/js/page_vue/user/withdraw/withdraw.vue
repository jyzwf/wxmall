<!--提现-->

<script>
    import storeData from '../../../store/base_data.js';
    export default {
        methods:{
            get_data:function(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/cashPage',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data );
                    if(res.resp_code == '100'){
                        this.$set('withdrawal_msg',res);
                    }

                },function(err){
                    console.log(err)
                })
            },

            to_withdrawal(){
                this.$route.router.go({'name':'beginWithdrawal'})
            }
        },
        ready(){
            this.get_data();
        }
    }
</script>


<template>
    <div id="withdraw">
        <img src="../../../../asset/imgs/wallet.svg" alt=""/>
        <p>可提现金额 (元)</p>
        <h1>{{withdrawal_msg.info.valuable_count}}</h1>
        <button @click="to_withdrawal" :disabled="withdrawal_msg.info.is_vip!='1'" class="sg_btn be_vip">成为会员后可提现</button>
        <a  v-link="{ name: 'withdrawalHistory'}" class="sg_btn wd_history">提现历史</a>
    </div>
</template>

<style lang="sass">
    html,body{
        background: #fff !important;
    }
    #withdraw{
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items:center;

        img{
            width:0.7rem;
            height:0.7rem;
            margin: 1.17rem 0 0.16rem;
        }

        p{
            font-size: 0.15rem;
        }

        h1{
            margin-top: 0.04rem;
            font-size: 0.28rem;
        }

        .be_vip{
            background: rgba(0, 0, 0, 0.38);
            margin-top: 0px;
            margin-bottom: 0px;
        }

        .wd_history{
            background: #fff;
            color:rgba(0, 0, 0, 0.87) !important;
            border: 1px solid #e0e0e0;
        }
    }

</style>