<template>
    <div id="empty_car">
        <img src="../../asset/imgs/empty-cart.svg" alt=""/>
        <h5>你的购物车空空如也</h5>
        <p>快点挑点宝贝吧</p>
        <a href="#" role="button">去逛逛</a>
    </div>
</template>

<style lang="sass">
    #empty_car{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-top:1.7rem;

    img{
        display: block;
        width:0.96rem;
        height:0.96rem;
        /*margin-top*/
    }

    h5{
        margin:0.16rem 0 0.04rem;
        font-size: 0.15rem;
    }

    p{
        font-size: 0.13rem;
        color:rgba(0,0,0,.54);
        margin-bottom: 0.16rem;
    }

    a{
        /*display: block;*/
        font-size: 0.15rem;
        color:#ff6b00;
        padding:0.04rem .16rem;
        border:1px solid #ff6b00;
        border-radius: .04rem;
    }
    }
</style>