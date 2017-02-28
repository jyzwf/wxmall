<script>
    export default{
        props:['title_goods'],
        data(){
            return {
                date:{
                    d:'00',
                    h:'00',
                    m:'00',
                    s:'00'
                },
                close_t:null
            }
        },
        methods:{
            count_down:function(time){
                var end_time = new Date(time),
                        now_time = new Date();

                var t = end_time.getTime() - now_time.getTime();

                if( t>=0 ){
                    this.date = {
                        d : this.add_zero( Math.floor(t/1000/60/60/24) ),
                        h : this.add_zero( Math.floor(t/1000/60/60%24) ),
                        m : this.add_zero( Math.floor(t/1000/60%60) ),
                        s : this.add_zero( Math.floor(t/1000%60) )
                    }
                }else{
                    clearInterval(this.close_t);
                    console.log(8888)
                }
            },
            add_zero:function(str){
                return str = str<10 ? "0" + str : str;
            },
        },
//    watch:['date'],
        ready(){
            var _this = this;
            this.close_t = setInterval( function(){
                _this.count_down('2016-07-02 17:49:59')
            },0);
        }
    }
</script>

<template>
    <div id="goods_detail">
        <div class="goods_title">
            <p>{{title_goods.commodity_name}}</p>
            <p>
                <span>￥{{ title_goods.commodity_sale_price}} <del>￥{{ title_goods.commodity_primitive_price }}</del></span>
                <!--<span>剩 {{date.d}}天{{date.h}}:{{date.m}}:{{date.s}}</span>-->
            </p>
        </div>

        <div class="goods_provide">
            <p>* 本产品由{{title_goods.giver}}提供</p>
        </div>
    </div>
</template>

<style lang="sass">
    #goods_detail{
        margin-bottom:0.08rem;
        background:#fff;

        .goods_title{
            padding:0.12rem;

            p:first-child{
                overflow : hidden;
                font-size: 0.15rem;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-bottom:0.08rem;
                font-weight: bold;
            }

            del{
                color:rgba(0, 0, 0, 0.38);
                font-size: 0.11rem;
            }

            p:last-child{
                display: flex;
                justify-content:space-between;
                align-items: center;
                font-size:0.15rem;
                span:first-child{
                    color:red;
                }

                /*span:last-child{
                    background: rgba(0, 0, 0, 0.87);
                    color:#fff;
                    padding:0.02rem 0.04rem;
                    border-radius: 0.02rem;
                }*/
            }
        }

        .goods_provide{
            padding:0.08rem 0.16rem;
            color:rgba(0, 0, 0, 0.54);
            border:1px solid rgba(0,0,0,.12);
            border-width:1px 0px;
            font-size: .12rem;
        }

    }
</style>