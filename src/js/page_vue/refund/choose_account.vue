<!--选择退款账号-->
<script>
    import storeData from '../../store/base_data.js';
    export default {
        data(){
            return {
                delWidth:'',
                state:true,
                upState:false
            }
        },
        methods:{
            get_credit(){

                this.$http.post(storeData.store.state.baseUrl+'Distribution/getCredit',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data );
                    if(res.resp_code == 100){
                        this.$set('credit_msg',res.credit);
                    }

                },function(err){
                    console.log(err)
                })
            },
            go_back(){
                console.log( window.sessionStorage.getItem('refund_orderId'));
               // this.$route.router.go({'name':'refund',params:{'orderId':storeData.store.state.refund_orderId,'commodityId':storeData.store.state.refund_commodityId}})
                this.$route.router.go({'name':'refund',params:{'orderId':window.sessionStorage.getItem('refund_orderId'),'commodityId':window.sessionStorage.getItem('refund_commodityId')}})
            },
            choose_type(){

            }

        },
        ready(){
            this.get_credit();
        }
    }
</script>

<template>
    <div id="chooseAccount">
        <header  class="common_header">
            <img  @click="go_back" src="../../../asset/imgs/ic_arrow_back.svg" class="s_icon" alt=""/>
            <span>选择退款方式</span>
            <a v-link="{ name: 'manageAccount'}">管理</a>
        </header>

        <div class="account_list">
            <div class="account_item" >
                <div class="account_msg">
                    <span>原路返回</span>
                    <span>返回原支付账户</span>
                </div>
            </div>

            <!--退还到银行卡-->
            <!--<div class="account_item" >
                <div class="account_msg">
                    <span>退款银行卡</span>
                    <span>{{credit_msg.bank}} {{'尾号' + credit_msg.card_number.slice(-4)}} {{credit_msg.name}}</span>
                </div>
            </div>-->

        </div>
    </div>
</template>


<style lang="sass">
    #chooseAccount{
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
    }
</style>
