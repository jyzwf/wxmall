<template>
    <div id="manage_credit">
        <header  class="common_header">
            <img @click="go_back"  src="../../../asset/imgs/ic_arrow_back.svg" class="s_icon" alt=""/>
            <span>管理退款方式</span>
            <span  @click="save_credit">保存</span>
            <!--<a v-link="{ name: 'manageAd'}">保存</a>-->
        </header>

        <div class="account_list">
            <div class="account_item" >
                <div class="account_msg">
                    <span>开户银行</span>
                    <select name="" id="" v-model='change_msg.bank'>
                        <option value="" disabled>请选择退款银行</option>
                        <option value="建设银行" >建设银行</option>
                        <option value="交通银行" >交通银行</option>
                        <option value="工商银行" >工商银行</option>
                    </select>
                </div>
            </div>
            <div class="account_item" >
                <div class="account_msg">
                    <span>银行卡卡号</span>
                    <input type="number" v-model='change_msg.card_number' placeholder="请输入银行卡卡号"/>
                </div>
            </div>
            <div class="account_item" >
                <div class="account_msg">
                    <span>姓名</span>
                    <input type="text" v-model='change_msg.name' placeholder="请输入姓名"/>
                </div>
            </div>

        </div>

        <button @click="save_credit">保存</button>
    </div>
</template>

<style lang="sass">
    #manage_credit{
    .account_list{
        border-top:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;
        padding-left:0.16rem;
        background: #fff;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }

    .account_item{
        font-size:0rem;
        transform: translateX(0);
        cursor:pointer;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        select,input{
            border:none;
            outline: none;
            font-size: 0.15rem;
            -webkit-appearance: none;
            direction: rtl;
            float: right;
        }

    &:last-child{
    .account_msg{
        border:none;
    }
    }

    div{
        font-size: 0.15rem;
        display: inline-block;
        padding:0.14rem 0;
    span{
        vertical-align: inherit;
    }
    }

    .account_msg{
        width:100%;
        padding-right:0.12rem;
        border-bottom:1px solid #e0e0e0;
    span:last-child{
        float:right
    }
    }

    }

    button{
        text-align: center;
        margin-top:0.12rem;
        padding:0.13rem 0;
        background: #393a3f;
        color:#fff;
        width:100%;
        font-size:.15rem ;
    }
    }
</style>

<script>

    import storeData from '../../store/base_data.js';
    export default {
        data(){
            return {

            }
        },
        methods:{
            go_back(){
               this.$route.router.go({'name':'chooseAccount'})
            },
            get_credit(){

                this.$http.post(storeData.store.state.baseUrl+'Distribution/getCredit',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data );
                    if(res.resp_code == 100){
                        this.$set('change_msg',res.credit);
                    }

                },function(err){
                    console.log(err)
                })
            },
            save_credit(){
                if(this.change_msg.bank !='' && (/^\d{16}|\d{19}$/).test(this.change_msg.card_number) && this.change_msg.name.trim() !== ''){

                    this.$http.post(storeData.store.state.baseUrl+'Distribution/changeCredit',{
                        "token":"xtongtong",
                        "openid":storeData.store.state.openId,
                        "name":this.change_msg.name,
                        "bank":this.change_msg.bank,
                        "card_number":this.change_msg.card_number
                    },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse( res.data );
                        if(res.resp_code == 100){
                            this.$route.router.go({'name':'chooseAccount'})
                        }

                    },function(err){
                        console.log(err)
                    })

                }else{
                    alert('请检查是否填写正确!');
                    return false;
                }

            }
        },
        ready(){
            this.get_credit();
        }
    }
</script>