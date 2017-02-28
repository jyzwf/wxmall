<template>
    <div class="no_withdrawal">
        <img src="../../asset/imgs/no-order.svg" alt=""/>
        <p>还没有提现记录</p>
    </div>
</template>

<style lang="sass">
    .no_withdrawal{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

    img{
        display: block;
        width:0.96rem;
        height:0.96rem;
        margin-top:1.7rem;
    }

    p{
        font-size: 0.13rem;
        color:rgba(0,0,0,.54);
        margin-top: 0.16rem;
    }

    }
</style>