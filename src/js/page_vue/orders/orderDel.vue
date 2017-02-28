<!--订单详情-->

<template>
    <div id="order_detail">
        <section class="status">
            <p>
                <img src="../../../asset/imgs/ic-shipping.svg" alt=""/>
                <span>已发货</span>
            </p>

            <p>
                订单编号: <span>243238947893242</span>
            </p>

            <p class="time">
                2016-05-31 15:05:15
            </p>
        </section>
    </div>
</template>

<style lang="sass">
    #order_detail{

    .status{
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

    p:nth-of-type(n+2){
        font-size: 0.13rem;
    span{
        vertical-align: inherit;
    }
    }

    p:nth-of-type(2){
        margin:0.08rem 0 0.04rem;
    }
    }
    }
</style>