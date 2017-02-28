<!--用户中心-->

<script>
    import storeData from '../../store/base_data.js';

    export default {
        props:['goods_number'],
        data(){
        return {
//                user_data:{},
                open_id:{},
                heading_pic:'',
                qr_pic:''
            }
        },
        methods:{
            get_data:function(){
                    this.$http.post(storeData.store.state.baseUrl+'Wechat/exhibitionUserPage',{"openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse( res.data );

                        if(res.resp_code == 100){
                            this.$set('user_data',res);
                            this.goods_number = res.shoppingCart;
                            storeData.store.getUserHeading(res.user.img);
                            storeData.store.getUserQrcode(res.user.qr_code_url);
                        }else{
                            alert('请求失败，请稍后再试');
                            return false;
                        }




                    },function(err){
                        console.log(err)
                    })
            }
        },
        ready(){
            this.get_data();
        }
    }
</script>

<template>
    <div id="u_center">

        <section class="banner">
            <p><img src="{{user_data.user.img}}" alt=""/></p>
            <p>{{user_data.user.name}}</p>
            <p>ID: <span>{{user_data.user.user_id}}</span></p>
            <a href="javascript:void(0)">如何成为会员&gt;</a>
        </section>

        <a v-link="{ name: 'qrCode', params: { heading: 1,qrCode: 2}}" class="qr_code">
            <span>我的二维码</span>
            <p>
                <img class="qr_img" src="../../../asset/imgs/qrcode.svg" alt=""/>
                <img class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
            </p>
        </a>

        <a v-link="{ name: 'withdrawal'}" class="reward">
            <p>历史累计奖励 (元)</p>
            <p>
                <strong>{{user_data.money.cumulative}}</strong>
                <img  class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
            </p>

            <p>
                可提现金额 <span>{{user_data.money.avaliable}}</span>元
            </p>
        </a>
        
        <section class="my_fans">
            <a v-link="{ name: 'myFans'}">
                <span>我的粉丝</span>
                <p>
                    <span>{{user_data.fans.fans_num}}人</span>
                    <img  class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
                </p>
            </a>

            <a v-link="{ name: 'fansOrder'}">
                <span>粉丝销量</span>
                <p>
                    <span>{{user_data.fans.fans_sales}} 元</span>
                    <img class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
                </p>
            </a>
        </section>

        <p class="recommend">您是由【{{user_data.user.owner}}】推荐</p>
    </div>
</template>


<style lang="sass">
    #u_center{
        font-size: 0.15rem;
        .arrow{
            width:.24rem;
            height:.24rem;
        }

    .banner{
        height:1.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        /*background:url(/dist/imgs/banner.jpg) no-repeat;*/
        background:#000;
        /*background-size:cover;*/

        img{
            width:0.7rem;
            height:0.7rem;
            border:0.02rem solid #fff;
            border-radius: 50%;
        }

        p{
            color:#fff;

            &:nth-of-type(1){
                margin:0.16rem 0 0.08rem;

             };
            &:nth-of-type(2){
                 margin-bottom: 0.02rem;
             }

            &:nth-of-type(3){
                margin-bottom:0.08rem;
             font-size:0.13rem;
                span{
                    vertical-align: inherit;
                }
              };


        }

        a{

            color:rgba(255,255,255,.69);
            font-size: 0.13rem;
            &:hover{
                color:rgba(255,255,255,.69)
             }
        }
    }

    .qr_code{
        background: #fff;
        display: flex;
        padding:0.14rem 0.08rem 0.14rem 0.16rem;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #e0e0e0;
        span{
            font-weight: bold;
        }

        img:first-child{
            margin-right:0.08rem;
            width:0.2rem;
            height:0.2rem;
        }


    }

    .reward{
        background: #fff;
        display: flex;
        flex-direction: column;
        margin-top: 0.12rem;
        padding:0.12rem 0.08rem 0 0.16rem;
        border-bottom:1px solid #e0e0e0;
        border-top:1px solid #e0e0e0;

        strong{
            font-size:0.24rem;
        }

        p:nth-of-type(2){
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top:0.08rem;
            padding-bottom: 0.04rem;
            border-bottom:1px solid #e0e0e0;
        }

        p:nth-of-type(3){
            padding:0.08rem 0;
        font-size:0.12rem;
        color:rgba(0, 0, 0, 0.54);
            span{
                vertical-align: inherit;
            }

        }
    }

    .my_fans{
        margin-top:0.12rem;
        background:#fff;
        border-bottom:1px solid #e0e0e0;
        border-top:1px solid #e0e0e0;
        padding:0rem 0.08rem 0rem 0.16rem;
        a{
            margin-top: 0.14rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom:0.14rem;
            border-bottom:1px solid #e0e0e0;
            &:last-child{
                 border:none
             }
        }
    }

    .recommend{
        text-align: center;
        color: rgba(0, 0, 0, 0.54);
        margin-top: 0.08rem;
        margin-bottom:0.7rem;
    }
    }
</style>