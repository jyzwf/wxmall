<!--提现历史列表-->
<script>
    export default {
        props:['his_data']
    }
</script>

<template>
    <section class="withdrawal_l">
        <div class="withdrawal_item" v-for="item in his_data.cash_history">
            <div>
                <img src="../../asset/imgs/ic-withdrew-copy-2.svg" alt=""/>
                <div class="withdralMsg">
                    <p>提现 ￥{{item.count}}</p>
                    <p>{{item.time}}</p>
                </div>
            </div>

            <span>{{item.state}}</span>
        </div>
    </section>
</template>

<style lang="sass">
    .withdrawal_l{
        background: #fff;
        padding-left:0.16rem;
        border-bottom:1px solid #e0e0e0;
        .withdrawal_item{
            display: flex;
            justify-content: space-between;
            align-items:center;
            padding:0.16rem 0.16rem 0.16rem 0;
            border-bottom:1px solid #e0e0e0;
            font-size:0.12rem;

            &:last-child{
                border:none;
             }
            &>div{
                display: flex;

            }

              .withdralMsg{
                  p:first-child{
                      font-size: 0.16rem;
                  }

                  p:last-child{
                      color:rgba(0, 0, 0, 0.38)
                  }
              }

              img{
                  margin-right:0.16rem;
              }

              span{
                  padding:0.04rem 0.08rem;
                  background: #eff6fa;
                  color:#22aaee;
                  border-radius: 0.03rem;
              }
        }
    }
</style>