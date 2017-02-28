<!--粉丝销量-->

<script>
    import storeData from '../../../store/base_data.js';
    import noFans from '../../../components/no_fans.vue';

    export default {
        data(){
            return {
                noFans:true,
                needScroll:'sb',
                num:'',
                currentView : ''
            }
        },
        components:{
            no_fans: noFans
        },
        methods:{
            getAllOrderList:function(){

                this.$http.post(storeData.store.state.baseUrl+'Distribution/fansOrders',{"openid":storeData.store.state.openId,"token":"xtongtong"},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {

                    var res = JSON.parse(res.data);
                    this.$set('fansOrders',res);
                    this.noFans = res.orders;

                },function(err){
                    console.log(err);
                })
            },

            getOffsetTop:function(ev){
                console.log(ev.currentTarget.offsetTop)
            },

            search(fan){
                if(fan == '' ){
                    alert('请输入粉丝ID或订单号');
                    return false;
                }

                this.$http.post(storeData.store.state.baseUrl+'Distribution/searchFansOrder',{"openid":storeData.store.state.openId,"token":"xtongtong","data":fan},{"emulateJSON":true,"emulateHTTP":true}).then(function(res){
                    var res = JSON.parse(res.data);

                    this.fansOrders = res;

                    if(res.resp_code == 100){
                        this.currentView = '';
                    }else{
                        this.$set('set_err',res.resp_desc)
                        this.currentView = 'no_fans';
                        this.noFans = true;
                    }


                })

            }
        },
        ready(){
            this.getAllOrderList();

        }
    }
</script>


<template>
    <div id="fans_order">
        <section class="income">
            <div class="accumulat_income">
                <p>累计奖励 (元)</p>
                <h5>{{fansOrders.valuable_count}}</h5>
            </div>

            <div class="fans_sale">
                <p>粉丝销量 (元)</p>
                <h5>{{fansOrders.all_count}}</h5>
            </div>
        </section>



        <section class="search">

            <input type="text"    v-model="num" placeholder="输入订单号, 粉丝 ID"/>
            <button  @click="search(num)" >搜索</button>
        </section>

        <section class="no_fans_sell" v-if="!noFans">
            <img src="../../../../asset/imgs/ic-no-fans-copy.svg" alt=""/>
            <span>粉丝还没有腐败过</span>
        </section>

        <section class="order_list">
            <a v-link="{name:'fansOrderMsg',params:{orderId:order.order_id}}" v-for="order in fansOrders.orders">
                <p class="list_h">
                    <span class="l">订单编号: {{order.order_number}}</span>
                    <span class="r">{{order.time}}</span>
                </p>

                <div class="fan">
                    <img src="{{order.head_img}}" alt="user_heading"/>
                    <div class="order_show">
                        <p>
                            <span class="user">{{order.name}}</span>
                            <span class="state">可提现</span>
                        </p>

                        <p>
                            <span class="userId">ID:{{order.id}}</span>
                            <span class="order_money">￥ {{order.money}}</span>
                        </p>
                    </div>
                </div>
            </a>
        </section>

        <component :is="currentView" :fan_list.sync = "fansList.fans" :fan_des.sync="set_err">

        </component>
    </div>
</template>


<style lang="sass">
    #fans_order{
        /*overflow: scroll;*/
        /*height:5.68rem;*/

    /*income*/
    .income{
        display: flex;
        padding:0.08rem;
        border-bottom:1px solid rgba(0,0,0,.12);
        background:#fff;

    &>div{
          flex:1;
        display: flex;
          flex-direction: column;
        justify-content: center;
        align-items: center;
      padding:0.24rem 0;
      font-size:0.13rem;
      &.accumulat_income{
        border-right:1px solid rgba(0,0,0,.12)
       }

       p{
           color:rgba(0, 0, 0, 0.54);
           margin-bottom: 0.04rem;
       }

        h5{

            margin:0;
            font-size: 0.15rem;
        }
      }
    }

    /*search*/
    .search{
        padding:0.16rem;
        display: flex;
        justify-content: center;
        border-bottom:0.01rem solid rgba(0,0,0,.12);
        background: #fff;
        font-size: 0rem;
        height:0.71rem;

        input{
            font-size: 0.16rem;
            border:none;
            outline: none;
            border:1px solid #393a3f;
            border-right:none;
            padding:0.08rem;
            height:0.4rem;
            border-radius:0;
        }

        button{
            padding:0.09rem 0.2rem;
            background: #393a3f;
            color:#fff;
            font-size: 0.16rem;
            height:0.4rem;
            border:none;
            outline: none;
        }

    }

    .no_fans{
       img{
           margin-top:1rem;
       }
    }

    /*no_fans*/
    .no_fans_sell{
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items:center;
        img{
            width:0.96rem;
            height:0.96rem;
            margin: 1rem 0 0.16rem;
        }
        
        span{
            font-size: 0.13rem;
            color: rgba(0,0,0,.54);
        }
    }

    /*fans_list*/
    .order_list{
        margin-bottom:0.5rem;
        a{
            display: block;
            padding:0 0.16rem;
            font-size: 0.13rem;

            .list_h{
                margin:0.08rem 0;
                font-size: 0.11rem;
                color:rgba(0, 0, 0, 0.54);
                span{
                    vertical-align: inherit;
                }
                .r{
                    float: right;
                }
            }

            .fan{
                display: flex;
                /*align-items:center;*/
                img{
                    width:0.4rem;
                    height:0.4rem;
                    min-width: 0.4rem;
                    border-radius: 0.04rem;
                    margin-right: 0.16rem;
                }

                .order_show{
                    flex:auto;
                    padding-bottom:0.12rem;
                    border-bottom:1px solid rgba(0,0,0,.12);
                    .state,.order_money{
                        float: right;
                    }

                    .order_money{
                        color:#4caf50
                    }

                }

            }
        }
    }
    }
</style>