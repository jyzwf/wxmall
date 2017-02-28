<template>
    <section id="status" v-cloak >
        <p v-if="headermsg.state == '已取消'">
            <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
            <span>已取消</span>
        </p>

        <p v-if="headermsg.state == '待付款'">
            <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
            <span>待付款</span>
        </p>

        <p v-if="headermsg.state == '待发货'">
            <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
            <span>待发货</span>
        </p>

        <p v-if="headermsg.state == '已发货'">
            <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
            <span>待收货</span>
        </p>

        <p v-if="headermsg.state == '交易成功'">
            <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
            <span>交易成功</span>
        </p>


        <p class="order_num">
            <span>{{'订单编号: ' + headermsg.order_number}}</span>
        </p>

        <p class="time">
            {{headermsg.time}}
        </p>
    </section>
</template>

<style>
    #status{
        background:#393a3f;
        padding:0.12rem 0 0.12rem 0.17rem;
        display: flex;
        flex-direction: column;
        height:0.98rem;

        color:#fff;
        font-size:0.15rem;

    img{
        width:0.24rem;
        height:0.24rem;
        margin-right: 0.12rem;
    }

    p.order_num{
        font-size: 0.13rem;
    span{
        vertical-align: inherit;
    }
    }

    p.time{
        margin:0.08rem 0 0.04rem;
    }
    }
</style>

<script>
    export default {
        props:['headermsg'],
        ready(){
        console.log(this.headermsg)
    }
    }
</script>