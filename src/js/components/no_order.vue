<template>
    <div id="no_order">
        <img src="../../asset/imgs/no-order.svg" alt=""/>
        <span class="u_no_order">您还有没有相关的订单</span>
        <span>暂时没有相关数据</span>
    </div>
</template>

<style lang="sass">
    #no_order{
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items:center;
    img{
        width:0.96rem;
        height:0.96rem;
        margin: 1.7rem 0 0.16rem;
    }

    span.u_no_order{
        font-size: 0.15rem;
    }

    span:last-child{
        font-size: 0.13rem;
        color:rgba(0,0,0,.54)
    }
    }
</style>