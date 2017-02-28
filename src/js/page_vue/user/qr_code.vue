<!--我的二维码-->

<script>

    import storeData from '../../store/base_data.js';

    export default {
        data(){
            return {
                head_pic:'',
                qr_pic:''
            }
        },
        ready(){
            this.head_pic = storeData.store.state.userHeading;
            this.qr_pic = storeData.store.state.user_qrCode;
        }
    }
</script>

<template>
    <div id="qrCode">
        <section class="top">
            <img class="logo" src="../../../asset/imgs/2.jpg" alt=""/>
            <p class="title">味噌</p>
            <div class="code">
                <img src="{{qr_pic}}" alt=""/>
            </div>
            <img src="../../../asset/imgs/bitmap.svg" alt="" class="pic_show"/>
        </section>

        <section class="bottom">
            <img class="heading" src="{{head_pic}}" alt=""/>
            XXXX 带你吃遍全球
        </section>

    </div>
</template>

<style lang="sass">
    #qrCode{
        margin:0.12rem;

    .top{
        background: #393a3f;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom:0.08rem;
    .logo{
        width:0.4rem;
        height:0.4rem;
        margin: 0.24rem 0;
    }

    .title{
        font-size: 0.24rem;
        color:#fff;
    }

    .code{
        background:#fff;
        margin:0.2rem 0;
    img{
        width:1.08rem;
        height:1.08rem;
    }
    }

    .pic_show{
        width:2.92rem;
        height:1.727rem;
        margin-bottom:0.243rem
    }


    }

    .bottom{
        border:solid 4px #393a3f;
        font-size: 0.18rem;
        position: relative;
        color:#393a3f;
        font-weight: bold;
        padding:0.17rem 0;
        text-align:center;

    img{
        width:0.4rem;
        height:0.4rem;
        position: absolute;
        left:50%;
        top:-0.27rem;
        transform: translateX(-50%);
    }
    }
    }
</style>