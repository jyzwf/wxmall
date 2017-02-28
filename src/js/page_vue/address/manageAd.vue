
<!--管理收货地址-->

<script>
    import storeData from '../../store/base_data.js';
    import emptyad from '../../components/empty_ad.vue';
    export default {
        data(){
        return {
          currentView :''
        }
    },
    components:{
        emptyAd : emptyad
    },
    methods:{
        get_allAd:function(){
            this.$http.post(storeData.store.state.baseUrl+'Address/getAllAddress',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse(res.data);
                if(res.resp_code == 100){
                    if(res.address[0]){
                        this.currentView = '';
                        this.$set('manage_address',res);
                    }else{
                        this.currentView = 'emptyAd';
                    }
                }


            },function(err){
                console.log(err)
            })
        },
        goChooseAd:function(){
            this.$route.router.go({name:"chooseAd"});
        }
    },
    ready(){
        this.get_allAd();
    }
    }
</script>

<template>
    <div id="manageAd">
        <header class="common_header">
            <img @click="goChooseAd" src="../../../asset/imgs/ic_arrow_back.svg" class="s_icon" alt=""/>
            <span>收货地址管理</span>
            <a v-link="{ name: 'addAd'}">新增</a>
        </header>

        <component :is="currentView" >

        </component>

        <a v-link="{name:'changeAd',params:{addressId:address_item.address_id} }"  class="item" v-for="address_item in manage_address.address">
            <div class="ad_left">
                <p class="use_ad_msg">
                    <span class="ad_l">{{address_item.name}}</span>
                    <span class="ad_r">{{address_item.mobile}}</span>
                </p>
                <p>{{address_item.address}}</p>
            </div>

            <img src="../../../asset/imgs/ic_keyboard_arrow_right.svg" class="s_icon" alt=""/>
        </a>
    </div>
</template>

<style lang="sass">
    #manageAd{



        .item{
            padding:0.12rem 0.16rem;
            display: flex;
            align-items:center;
            justify-content:space-between;
            background:#fff;
            border-bottom:1px solid rgba(0,0,0,.12);
            img{
                margin-left: 0.16rem;
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