<!--我的粉丝-->

<script>
    import storeData from '../../../store/base_data.js';
    import noFans from '../../../components/no_fans.vue';
    import fansList from '../../../components/myfans_list.vue';


    export default {
        data(){
            return {
                bar_width : 0,
                bar_left : 0,
                currentView : 'fans_list',
                search_fans:'',
                search_show:true,
                fans:{},
                time : null
            }
        },
        components:{
            fans_list : fansList,
            no_fans: noFans
        },
        methods:{
            setbar_width:function(){
                this.bar_width = document.querySelector('.myf').offsetWidth;
                return this;
            },

            move_bar : function(num){
                this.bar_left = num;
            },

            get_fans:function(num){
                clearTimeout(this.time);
                num = num+1;

                if(this.fans[num]){
                    this.$set('fans_count',this.fans[num].fans_count);
                    if(this.fans[num].resp_code == 100){
                        this.$set('fansList',this.fans[num]);
                        this.currentView = 'fans_list'
                    }else{
                        this.$set('set_err',this.fans[num].resp_desc)
                        this.currentView = 'no_fans'
                    }
                    var _this = this;
                   this.time = setTimeout(function(){
                       _this.fans = {}
                        clearTimeout(this.time);
                    },5000)

                    return false;
                }


                    this.$http.post(storeData.store.state.baseUrl+'Wechat/exhibitionFansPage',{"openid":storeData.store.state.openId,"level":num},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse(res.data);
                        this.fans[num] = res;
                        this.$set('fans_count',res.fans_count);

                        if(res.resp_code == 100){

                            if(res.fans){
                                this.$set('fansList',res);
                                this.currentView = 'fans_list';
                            }else{
                                this.$set('set_err',res.resp_desc)
                                this.currentView = 'no_fans'
                            }
                        }
                    },function(err){
                        console.log(err)
                    })


            },
            choose_fans:function(num){
                this.move_bar(num*this.bar_width);
                this.get_fans(num);
            },

            search:function(fan){
                if(fan == ''){
                    alert('请输入粉丝ID');
                    return false;
                }

                console.log(fan);
                this.$http.post(storeData.store.state.baseUrl+'Wechat/searchFans',{"openid":storeData.store.state.openId,"fans_id":fan},{"emulateJSON":true,"emulateHTTP":true}).then(function(res){
                    var res = JSON.parse(res.data);

                    if(res.resp_code == 100){
                        if(res.fans){
                            this.$set('fansList',res);
                            this.currentView = 'fans_list';
                        }else{
                            this.$set('set_err',res.resp_desc)
                            this.currentView = 'no_fans'
                        }
                    }

                    this.search_show = false

                })
            }
        },
        ready(){
        this.setbar_width();
            this.get_fans(0);
        }
    }
</script>

<template>
    <div id="myFans">

        <section class="search">
            <!--<span><img src="../../asset/imgs/ic-search.svg" alt=""/></span>-->
            <input type="text" placeholder="输入粉丝 ID" v-model = 'search_fans'/>
            <span @click="search(search_fans)">搜索</span>
        </section>

        <section class="fans" v-show = 'search_show'>
            <div class="myf" @click = "choose_fans(0)">我的粉丝 ({{fans_count.fans_num1}})</div>
            <div class="fans_c"  @click = "choose_fans(1)">粉丝圈 ({{fans_count.fans_num2}})</div>
            <span class="slide_bar" :style="{width:bar_width +'px',left:bar_left + 'px' }"></span>
        </section>

        <!--<fans_list></fans_list>-->
        <!--<no_fans></no_fans>-->

        <component :is="currentView" :fan_list.sync = "fansList.fans" :fan_des.sync="set_err">

        </component>
    </div>
</template>


<style lang="sass">
#myFans{

    .search{
        padding:0.16rem;
        display: flex;
        justify-content: center;
        height:0.70rem;
        background: #fff;
        font-size: 0;


    input{
        font-size: 0.16rem;
        border:none;
        outline: none;
        border:0.01rem solid #393a3f;
        border-right:none;
        padding:0.08rem;
        height:0.4rem;
        border-radius:0;
    }


    span{
        height:0.4rem;
        padding: 0.09rem 0.2rem;
        background: #393a3f;
        color:#fff;
        cursor: pointer;
        font-size: 0.16rem;
    }

    }

    /*顶部粉丝*/
    .fans{
        display: flex;
        align-items: center;
        border-bottom:1px solid rgba(0,0,0,.12);
        background:#fff;
        position:relative;
        /*transition: all .2s linear;*/
        div{
            flex:1;
            padding:0.12rem 0;
            font-size: 0.13rem;
            color:rgba(0, 0, 0, 0.87);
            text-align: center;
            cursor: pointer;
        }

        span{
            position: absolute;
            bottom:0;
            left:0;
            background:#202020;
            height:0.03rem;
            transition: all .35s linear;
        }
    }

}
</style>