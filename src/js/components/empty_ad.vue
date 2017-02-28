<!--空的收货地址-->
<template>
    <div id="empty_ad">
        <img src="../../asset/imgs/ic-no-address-copy.svg" alt=""/>
        <p>收货地址为空</p>
        <a v-link="{name:'addAd'}" role="button">新增地址</a>
    </div>
</template>

<style lang="sass">
    #empty_ad{
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