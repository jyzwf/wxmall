<!--选择收货地址-->

<script>
        import storeData from '../../store/base_data.js';
    import emptyaddress from '../../components/empty_ad.vue';
    export default {
        data(){
        return {
            currentView :'',
            default_ad : ''
        }
    },
    components:{
        emptyAd : emptyaddress
    },
    methods:{
        get_allAd:function(){
            this.$http.post(storeData.store.state.baseUrl+'Address/getAllAddress',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse(res.data);
                if(res.resp_code == 100){
                    if(res.address[0]){
                        this.currentView = '';
                        this.$set('all_address',res);
                    }else{
                        this.currentView = 'emptyAd';
                    }
                }


            },function(err){
                console.log(err);
            })
        },
        gotoSettle:function(){
            this.$route.router.go({name:"settlement"});
        },

        choose_newAd:function(item){
            storeData.store.changeSettleAddress(item.address_id);
            this.$route.router.go({name:"settlement"});
        }
    },
    ready(){
        this.default_ad = window.sessionStorage.getItem('now_address');
        this.get_allAd();
    }
    }
</script>

<template>
    <div id="chooseAd">
        <header class="common_header">
            <img @click="gotoSettle" src="../../../asset/imgs/ic_arrow_back.svg" class="s_icon" alt=""/>
            <span>选择收货地址</span>
            <a v-link="{ name: 'manageAd'}">管理</a>
        </header>

        <component :is="currentView" >

        </component>

        <div @click="choose_newAd(address_item)"  class="item" v-for="address_item in all_address.address">
            <div class="ad_left">
                <p class="use_ad_msg">
                    <span class="ad_l">{{address_item.name}}</span>
                    <span class="ad_r">{{address_item.mobile}}</span>
                </p>
                <p>{{address_item.address}}</p>
            </div>


            <div class="choose_right_pic">
                <img v-if="address_item.address_id == default_ad" src="../../../asset/imgs/wechat-pay-copy.svg" class="s_icon" alt=""/>
            </div>
        </div>


    </div>
</template>

<style lang="sass">
    #chooseAd{

        .item{
            padding:0.12rem 0.16rem;
            display: flex;
            align-items:center;
            justify-content:space-between;
            background:#fff;
            border-bottom:1px solid rgba(0,0,0,.12);
            .choose_right_pic{
                margin-left: 0.16rem;
                width:0.24rem;
            }

            .ad_left{
                flex: auto;
            }

            .use_ad_msg{
                font-weight: bold;
                margin-bottom:0.06rem;
                .ad_r{
                    float: right;
                }
            }
        }
    }
</style>