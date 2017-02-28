<!--去提现-->

<script>
    import storeData from '../../../store/base_data.js';
    export default {
        data(){
            return {
                warning:"",
                cash : '',
                account:'',
                right:true
            }
        },
        methods:{
            send_w:function(){
                if(!(/^(([1-9]\d*)|0)(\.(\d){1,2})?$/).test(this.cash)){
                    alert('请输入正确的提现金额');
                    return false;
                }
                if(+this.cash > this.aviliable){
                    alert('提现金额不足');
                    return false;
                }else if(+this.cash < this.min_money){
                    alert('提现金额最低为'+this.min_money+'元');
                    return false;
                }

                this.$http.post(storeData.store.state.baseUrl+'Distribution/getCash',{
                    "openid":storeData.store.state.openId,
                    "token":"xtongtong",
                    "cash":(+this.cash).toFixed(2),
                    "cash_way":this.account
                },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse(res.data);
                    if(res.resp_code == '100'){
                        this.$route.router.go({'name':'userCenter'});
                    }

                },function(err){
                    console.log(err);
                })
            },

            get_data(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/getValuableCount',{"openid":storeData.store.state.openId,"token":"xtongtong"},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse(res.data);
                    if(res.resp_code == '100'){
                        this.$set('aviliable',+res.valuable_count);
                        this.$set('min_money',+res.largest);
                    }

                },function(err){
                    console.log(err);
                })
            }

        },

        computed:{
            'warn'(){
                return this.cash > this.aviliable ? true : false;
            }
        },

        directives:{
            getcash:{
                twoWay : true,
                update(val){
                    var _this = this;
                    this.el.onkeyup = function(){
                        if(!(/^(([1-9]\d*)|0)(\.(\d){1,2})?$/).test(val)  ){
                            _this.vm.right = true;
                            _this.vm.cash = '';
                            return false;
                        }
                        _this.vm.right = false;
                        _this.vm.cash = val.match(/^\d+\.?\d{0,2}/)[0];
                    }
                }
            }
        },

        ready(){
            this.get_data();
        }


    }
</script>

<template>
    <div id="toWithdrawal">
        <div class="withdraw_panel">
            <p>
                <span>提现账户</span>
                <select name="" id="" v-model="account">
                    <option value="" disabled>请选择</option>
                    <option value="1">微信账户</option>
                    <!--<option value="2">银行卡</option>-->
                </select>
            </p>

            <p>
                <span>提现金额</span>
                <input type="number" v-getcash = 'cash' :disabled="account.trim() == ''" v-model="cash" required placeholder="请输入提现金额"/>
            </p>

        </div>

        <p class="warning" v-if="warn">输入金额超提现金额</p>
        <p v-else>可提现金额<span>{{aviliable}}</span>元</p>
        <!--<p>{{cash}}</p>-->

        <button class="sg_btn be_vpn" @click="send_w" :disabled="right">申请提现</button>
    </div>
</template>


<style lang="sass">
    #toWithdrawal{
        %s{
             -webkit-appearance: none;
             outline:none;
             border:none;
             font-size:0.15rem;
         }

    .withdraw_panel{
        padding-left:0.16rem;
        background: #fff;
        display:flex;
        flex-direction:column;
        font-size:0.15rem;
        margin-top:0.08rem;
        border-bottom:0.01rem solid #e0e0e0;
        border-top:0.01rem solid #e0e0e0;

    select{
        @extend %s;
        direction: rtl;
    }

        input{
        @extend %s;
           text-align: right;
        }
        p{
           padding:0.13rem 0.16rem 0.13rem 0.08rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            &:first-child{
                 border-bottom:0.01rem solid #e0e0e0;
             }
        }

    }

    &>p{
      text-align:center;
          font-size: 0.13rem;
      margin-top:0.08rem;
        span{
            color:red;
            vertical-align: inherit;
        }

        &.warning{
            color:red;

         }
      }

    button.be_vpn{
        background: #4caf50;
    }
    }
</style>

