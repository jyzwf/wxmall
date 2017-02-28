<!--收货信息-->
<template>
    <div id="receive_msg">
        <p class="add_t">收货信息</p>
        <div>
            <p><span>{{receivemsg.name}}</span><span>{{receivemsg.mobile}}</span></p>
            <p>{{receivemsg.address}}</p>
        </div>
    </div>
</template>


<style lang="sass">
    #receive_msg{
        margin-top: 0.12rem;
        background:#fff;
        font-size: 0.13rem;
        border:1px solid #e0e0e0;
        border-width:1px 0;

        .add_t{
            padding:0.09rem 0.17rem;
            border-bottom:1px solid #e0e0e0;
            font-size:0.15rem;
        }
        div{
            padding:0.12rem 0.17rem;
            p:first-child{
                margin-bottom: 0.04rem;
                span:first-child{
                    margin-right: 0.16rem;
                }
            }
        }

    }
</style>

<script>
    export default {
        props:['receivemsg'],
        ready(){
    }
    }
</script>