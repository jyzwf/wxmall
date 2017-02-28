<script>
    export default{
        data(){
            return {
                bar_width:0,
                bar_left : 0
            }
        },
        methods:{
            setbar_width:function(){
                this.bar_width = this.$el.querySelector('#order_nav a').offsetWidth;
            },

            move_bar : function(num){
                this.bar_left = num;
            }
        },
        ready(){
            this.setbar_width();
        }
    }
</script>

<template>
    <div id="order_nav">
        <a href="javascript:void(0)" @click = "move_bar(0)">全部</a>
        <a href="javascript:void(0)" @click = "move_bar(bar_width)">待付款</a>
        <a href="javascript:void(0)" @click = "move_bar(bar_width*2)">代发货</a>
        <a href="javascript:void(0)" @click = "move_bar(bar_width*3)">已发货</a>
        <a href="javascript:void(0)" @click = "move_bar(bar_width*4)">交易成功</a>
        <span class="move_bar" :style="{width:bar_width +'px',left:bar_left + 'px' }"></span>
    </div>
</template>

<style lang="sass">
    #order_nav{
        width:100%;
        max-width: 5.4rem;
        position: fixed;
        display: flex;
        align-items: center;
        font-size:0.13rem;
        a{
            flex:1;
            text-align: center;
            padding: 0.1rem 0 .13rem;
            background: #fff;

            &.active{
             color:#000;
            };
        }

        span{
            display: inline-block;
            position: absolute;
            /*width:0.72rem;*/
            height:0.03rem;
            background: #000;
            bottom:0px;
            left:0px;
            transition:all .5s cubic-bezier(0.35,0,0.25,1);
        }
    }
</style>