<template>
    <div id="watch_logistic">

        <!-- 物流状态-->
        <div class="logistic_header">
            <p>{{log_data.company}}</p>
            <p>订单编号：{{log_data.no}}</p>
            <p>物流状态：{{log_data.state}}</p>
        </div>

        <!-- 物流电话-->
        <div class="logistic_tel">
            <span>物流电话：{{log_data.phone}}</span>
            <a href="tel:log_data.phone">拨打</a>
        </div>

        <!-- 物流详情-->
        <div class="logistic_detail">
            <p>物流跟踪</p>
            <div class="logistic_list">
                <div class="log_l" v-for="l in log_data.list">
                    <div class="content">
                        <span class="radius"></span>
                        <p class="log_pos">{{l.remark}}</p>
                        <p class="log_time">{{l.datetime}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    #watch_logistic{
        .logistic_header{
            padding:0.13rem 0.16rem;
            background-color: #393a3f;
            color: #fff;
            font-size:0.13rem;
            p:first-child{
                font-size: 0.15rem;
            }

            p:nth-of-type(2){
                margin:0.04rem 0;
            }
        }
    
        .logistic_tel{
            display: flex;
            padding:0.13rem .16rem;
            background: #fff;
            font-size: 0.15rem;
            justify-content: space-between;
            margin:0.12rem 0;
            border-bottom:0.01rem solid #e0e0e0;
            border-top:0.01rem solid #e0e0e0;
        }

        .logistic_detail{
            margin-bottom:0.7rem;
            &>p{
                padding:0.13rem .16rem;
                font-size: 0.15rem;
                  background: #fff;
                  border-bottom:0.01rem solid #e0e0e0;
                  border-top:0.01rem solid #e0e0e0;
              }

              .logistic_list{
                  padding:0.12rem 0.16rem;
                  background: #fff;

                  .log_l{
                      padding:0.12rem 0.16rem 0.04rem;
                      border-left:0.02rem solid #9e9e9e;

                        .content{
                            position: relative;
                            font-size: 0.13rem;

                        }
                      .radius{
                          position: absolute;
                          width:0.1rem;
                          height:0.1rem;
                          border:0.02rem solid #9e9e9e;
                          border-radius: 50%;
                          left:-0.22rem;
                          background: #fff;
                          top: 0.05rem;
                      }

                    &:first-child{
                         color:#4caf50;
                        .radius{
                            border-color:#4caf50;
                            background:#4caf50;
                        }
                    }
                  }
              }
        }
    }
</style>

<script>
    import storeData from '../../store/base_data.js';
    export default {
        methods:{
            get_logistic_data(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/getDeliveryInfo',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data );
                    res.delivery.list = res.delivery.list.reverse();
                    if(res.resp_code == 100){
                        this.$set('log_data',res.delivery);
                    }

                },function(err){
                    console.log(err)
                })
            }
        },

    ready(){
        this.get_logistic_data();
    }

    }
</script>