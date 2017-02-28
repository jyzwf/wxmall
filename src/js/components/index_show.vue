<script>
    export default{
        data(){
            return {
               json:{}
            }
        },
        methods:{
//            获取数据
            get_msg:function(){

                this.$http.get('/src/js/json/index.json').then(function(data) {

                    this.$set('json',data.data)
                })
            },
//            处理数据
            deal_msg:function(data){
//                var free_time = new Date(data);
            }
        },
        ready(){
            this.get_msg();
        }
    }
</script>

<template>
    <div id="index_show">

        <div class="goods_card" v-for="goods in json.packages">
            <p class="time">
                剩 <span>{{ goods.package_time_rest }}</span>结束
            </p>
            <a href="#">
                <div class="img_attention">
                    <img src="{{ goods.package_show_img }}" alt=""/>
                    <!--<div>即将开抢</div>-->
                </div>
                <div class="simple_intr">
                    <div class="left">
                        <img src="/dist/imgs/ic_shopping_cart.svg" alt=""/>
                        <span class="active_title text_overflow">{{ goods.package_name }}</span>
                    </div>
                    <span class="goods_name text_overflow">华丽升级环球代言人</span>
                </div>

            </a>
        </div>

    </div>
</template>

<style lang="sass">
    #index_show{
        margin-bottom:0.6rem;
        .goods_card{
            width:100%;
            /*height:1.58rem;*/
            margin-bottom: 0.09rem;
            position: relative;
            overflow: hidden;
            border-bottom:1px solid rgba(0, 0, 0, 0.12);

            .time{
                font-size: 0.13rem;
                padding:0.02rem 0.08rem 0.04rem 0.09rem;
                background: #353535;
                color:#fff;
                border-bottom-left-radius: 0.08rem;
                position:absolute;
                right:0;
                top:0;

                span{
                    vertical-align: inherit;
                }
            }

            img{
                width:100%;
            }

            .simple_intr{
                padding:0.1rem;
                background:#fff;
                display:flex;
                flex-wrap:nowrap;
                justify-content:space-between;

                img{
                    width:0.18rem;
                    height:0.18rem;
                    margin-right:0.1rem;
                    border-radius:50%;
                }

                span{
                    font-size:0.14rem;

                    color:#33404a;

                    &.active_title{
                     }

                     &.goods_name{
                            opacity: 0.69;
                      }
                }

            }
        }
    }
</style>