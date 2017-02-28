<!--首页-->

<script>
    import storeData from '../../store/base_data.js'
    import carousel from '../../components/carousel';


    export default {
        props:['goods_number'],
        data(){
            return {
                bar_width:0,
                crazy_active:true,
                bar_left:0,
                move:null,
                fourteen:null,
                eight:null,
                time_rob:{
                    word:'开始',
                    time:{
                        h:'00',
                        m:'00',
                        s:'00'
                    }
                },
                rob:null,
                lazy_pic:null,
                time_btn:null
            }
        },
        components:{carousel},
        methods:{
//            获取数据
            get_msg:function(){
                var _this = this;
                this.$http.post(storeData.store.state.baseUrl+'Distribution/homePage',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data );
                    if(res.resp_code == 100){
                        this.$set('index_data',res);
                        this.fourteen =res.rob[14];
                        this.rob = res.rob[14];
                        this.eight =res.rob[8];
                        this.goods_number = res.shopping_cart_num;
                        _this.default_djs();
                    }

                },function(err){
                    console.log(err)
                })
            },

            setbar_width:function(){
                this.bar_width = this.$el.querySelector('nav a').offsetWidth;
            },

            night_eight(){
                this.crazy_active = false;
                this.rob = this.eight;
                var now_date = new Date();
                var y = now_date.getFullYear(),
                    m = now_date.getMonth(),
                    d = now_date.getDate();

                var up_four = new Date(y+'/' +(m+1)+'/'+d+' 14:00'),
                        up_eight = new Date(y+'/' +(m+1)+'/'+d+' 20:00');

                var t_end = up_four.getTime() - now_date.getTime(),

                     t_start = up_eight.getTime() - now_date.getTime(),

                     t_tmorrow = up_four.getTime()+24*60*60*1000 - now_date.getTime();


//                alert(t_end+'*****' + t_start);
                if(t_end>0){
                    this.change_date('结束',t_end);
                }

                if(t_start<=0){
                    this.change_date('结束',t_tmorrow);
                }

                if(t_start>0 && t_end<0){

                    this.change_date('开始',t_start);

                }

            },


            noon_four(){
                this.crazy_active = true;
                this.rob = this.fourteen;
                var now_date = new Date();
                var y = now_date.getFullYear(),
                        m = now_date.getMonth(),
                        d = now_date.getDate();

                var up_four = new Date(y+'/' +(m+1)+'/'+d+' 14:00'),
                        up_twe = new Date(y+'/' +(m+1)+'/'+d+' 23:59:59');

                var t_end = up_four.getTime() - now_date.getTime(),

                        t_start = up_twe.getTime() - now_date.getTime(),

                        t_tmorrow = up_four.getTime()+24*60*60*1000 - now_date.getTime();

//                alert(t_end + '&&&&&' + t_start + '**********'+up_twe);
                if(t_end>0){
//                    alert(798789798798798798787)
                    this.change_date('开始',t_end);
                }

                if(t_end<0 && t_start>=0){
//                    alert(79+'4545555512222222++++++++++++++++++++++++++++++'+87)
                    this.change_date('结束',t_start);
                }

            },

            add_zero(str){
                return str<10?'0'+str:str;
            },

            change_date(word,during){
                this.time_rob.word = word;
                this.time_rob.time = {
                    h : this.add_zero( Math.floor(during/1000/60/60%24) ),
                    m : this.add_zero( Math.floor(during/1000/60%60) ),
                    s : this.add_zero( Math.floor(during/1000%60) )
                }
            },

            begin_djs(fn){
                clearInterval(this.time_btn);
                this.time_btn = null;
                var _this = this;
                this.time_btn = setInterval( function(){
//                    console.log(4);
                    fn.call(_this);
                },0);
            },

            default_djs(){
                var now_date = new Date();
                var y = now_date.getFullYear(),
                        m = now_date.getMonth(),
                        d = now_date.getDate();

                var up_four = new Date(y+'/' +(m+1)+'/'+d+' 14:00');
                var t = now_date.getTime() - up_four.getTime();
                if(t>0){
                    this.begin_djs(this.noon_four);
                }else{
                    this.begin_djs(this.night_eight);
                }
            },

            scroll_part(){
                let t = document.documentElement.scrollTop || document.body.scrollTop,
                        n = 0;

                    if( t < (this.$el.querySelector('#crazy_buy').offsetTop - 90) )
                    {
                        this.bar_width = 0;
                    }

                    if( t > (this.$el.querySelector('#crazy_buy').offsetTop - 90) )
                    {
                        this.setbar_width();
                        n=0;
                    }

                    if( t > (this.$el.querySelector('#today_new').offsetTop - 90) )
                    {
                        n = 1
                    }

                    if( t > (this.$el.querySelector('#edit_recommend').offsetTop - 90) )
                    {
                        n = 2
                    }

                    if( t > (this.$el.querySelector('#hot_sell').offsetTop - 90) )
                    {
                        n = 3
                    }


                this.bar_left = n * this.bar_width;
            },
            get_part(ev){
                document.documentElement.scrollTop = document.body.scrollTop =this.$el.querySelector( ev.target.getAttribute('data-tar')).offsetTop-80;
            },

            go_brand(item){
                this.$route.router.go({ name: 'brandMsg', params: { brandId: item.brand_id}})
            },

            go_good(item){
                this.$route.router.go({ name: 'goodMsg', params: { commodityId: item.commodity_id}})
            },

            hot_sell(item){
                if(item.type == 'B'){
                    this.go_brand(item)
                }else if(item.type == 'C'){
                    this.go_good(item)
                }
            },

            lazy_load(){
                var imgs =this.$el.querySelectorAll('#mall_index .lazyload_img img');
                if(!imgs[0]) return false;

                let t = document.documentElement.scrollTop || document.body.scrollTop;
//                console.log(imgs[0].offsetTop)
                for(var i= 0,k;k=imgs[i++];){
                    if(t>(k.offsetTop - window.screen.height - 400)){

                        k.setAttribute('src', k.getAttribute('pic'));
                    }
                }
            }
        },

        ready(){
        let _this = this;
            this.get_msg();
            window.addEventListener('scroll',this.scroll_part,false)
            window.addEventListener('scroll',this.lazy_load,false)
        },
        beforeDestroy(){
            window.removeEventListener('scroll',this.scroll_part,false);
            window.removeEventListener('scroll',this.lazy_load,false);
            clearInterval(this.time_btn);
        }
    }
</script>

<template>
    <div id="mall_index">
        <nav>
            <a href="javascript:void(0)" @click="get_part($event)"  data-tar="#crazy_buy">每日疯抢</a>
            <a href="javascript:void(0)" @click="get_part($event)"  data-tar="#today_new">今日新品</a>
            <a href="javascript:void(0)" @click="get_part($event)"  data-tar="#edit_recommend">编辑推荐</a>
            <a href="javascript:void(0)" @click="get_part($event)"  data-tar="#hot_sell">超值热卖</a>
            <!--<div>-->
                <!--<img src="../../../asset/imgs/ic-search.svg" alt=""/>-->
            <!--</div>-->

            <span class="move_bar" :style="{width:bar_width +'px',left:bar_left + 'px' }"></span>

        </nav>
        <div class="blank"></div>
        <!-- 轮播图-->
        <carousel :top_stories.sync="index_data.titles"></carousel>
        <!-- 超值礼包-->
        <div id="value_package">

            <a v-link="{ name: 'brandMsg', params: { brandId: index_data.package.package_id}}"><img :src="index_data.package.package_title_img" alt=""/></a>
        </div>

        <section class="lazyload_img">
        <!--每日疯抢-->
        <div id="crazy_buy" class="tab_cell">
            <header>
                <p class="time_slot">
                    <span @click="begin_djs(noon_four)" :class="{active:crazy_active}">14点团</span>
                    <span @click="begin_djs(night_eight)":class="{active:!crazy_active}">晚8疯抢</span>
                </p>

                <p class="surplus_time">
                    <span>距离{{time_rob.word}}还剩 {{time_rob.time.h}} : {{time_rob.time.m}} : {{time_rob.time.s}}</span>
                </p>
            </header>

            <div class="sell_list">
                <div class="sell_item" @click="go_good(rob_good)" v-for = 'rob_good in rob'>
                    <img src="../../../asset/imgs/6.jpg" :pic='rob_good.img' alt=""/>
                    <p class="title">{{rob_good.name}}</p>
                    <p class="intr">{{rob_good.description}}</p>
                    <p class="crazy_price"><span>疯抢价</span><span>{{rob_good.cost_price}} 元</span></p>
                </div>
            </div>
        </div>
        <!--今日新品-->
        <div id="today_new" >
            <header>
                <p><span>今日新品</span></p>
                <p>每天十点更新</p>
            </header>

            <section>
                <div class="new_1" @click="go_good(new_good)" v-for="new_good in index_data.new">
                    <img  src="../../../asset/imgs/6.jpg" :pic="new_good.img" alt=""/>
                    <p>{{new_good.commodity_name}}</p>
                    <p>售价: {{new_good.commodity_sale_price}}元</p>
                </div>
            </section>
            <footer>
                <a v-link="{name:'new_more'}">更多</a>
            </footer>
        </div>
        <!-- 编辑推荐-->
        <div id="edit_recommend" class="tab_cell">
            <header>
                编辑推荐
            </header>

            <div class="sell_list">
                <div class="sell_item" @click="go_brand(recommend_good)"  v-for="recommend_good in index_data.recommend">
                    <img  src="../../../asset/imgs/6.jpg" :pic="recommend_good.img"   alt=""/>
                    <p class="title">{{recommend_good.name}}</p>
                    <p class="intr">{{recommend_good.description}}</p>
                </div>
            </div>
            <footer>
                <a v-link="{name:'new_recommend'}">更多</a>
            </footer>
        </div>
        <!-- 超值热卖-->
        <div id="hot_sell" class="tab_cell" >
            <header>
                超值热卖
            </header>

            <div class="sell_list">
                <div class="sell_item" @click="hot_sell(hot_good)"  v-for="hot_good in index_data.hot">
                    <img src="../../../asset/imgs/6.jpg" :pic='hot_good.img' alt=""/>
                    <p class="title">{{hot_good.name}}</p>
                    <p class="intr">{{hot_good.description}}</p>
                </div>
            </div>
        </div>
        </section>

    </div>
</template>

<style lang="sass">
#mall_index{

    %span{
         border:0.01rem solid #fff;
         padding:0.02rem 0.1rem;
         color:#fff;
     }

     @mixin foot($color:#fff){
         text-align: center;
         padding:0.16rem 0 0;
         a{
             border:0.01rem solid $color;
             padding:0.02rem 0.1rem;
             color:$color;
         }
     }

/*  顶部导航*/
    nav{
        width:100%;
        position: fixed;
        display: flex;
        max-width: 5.4rem;
        align-items: center;
        font-size:0.13rem;
        background: #fff;
        height:0.48rem;
        box-shadow:0 0.01rem 0.02rem rgba(0,0,0,.38);
        z-index:9999;
        img{
            width:0.24rem;
            height:0.24rem;

        }
        div{
            padding: 0 0.07rem;
            font-size: 0;
            border-left:0.01rem solid #000;
        }
        a{
            flex:1;
            text-align: center;
            padding: 0.1rem 0 .13rem;


            &.active{
                 color:#000;
             };
        }

        span{
            display: inline-block;
            position: absolute;
            height:0.03rem;
            background: #000;
            bottom:0px;
            left:0px;
            transition:all .5s cubic-bezier(0.35,0,0.25,1);
        }
    }

/*填充空白*/
    .blank{
        height:0.48rem;
    }

    /*超值热卖*/
    #value_package{
        a{
            display: block;
        }
        img{
            width:100%;
        }
    }

/*每日疯抢*/
#crazy_buy{
    background: #fff;
    padding-bottom:0.2rem;

.time_slot{
    font-size:0;
    span{
        display: inline-block;
        width:0.76rem;
        margin-bottom:0.13rem;
        text-align: center;
        padding:0.06rem 0;
        border:0.01rem solid #000;
        font-size:0.15rem;
        &:first-child{
            border-right:none;
         }

         &.active{
            background: #000;
            color:#fff;
          }
    }
}
    .crazy_price{
        margin-top:0.08rem;
        font-size:.13rem;
        color:red;
        span:first-child{
            background:red;
            color:#fff;
            padding:0.02rem;
            margin-right:0.1rem;
        }
    }
}

/*每日更新*/
    #today_new{
        color:#fff;
        background: rgba(0, 0, 0, 0.87);
        padding:0.2rem 0.12rem ;
        header{
            text-align: center;
            span{
                font-size: 0.17rem;
                font-weight: bold;
                padding-bottom: 0.04rem;
                border-bottom:0.03rem solid #fff;
            }

            p:last-child{
                margin-top:0.08rem;
                color:#f8f8f8;
                font-size: .13rem;
            }
        }

        section{
            margin-top:0.16rem;
            display: flex;
            div{
                flex:1;
                overflow: hidden;
                img{
                    width:100%;
                    /*max-height: 1.62rem;*/
                }

                &:first-child{
                    margin-right:0.12rem;
                 }
                p{
                    margin: 0.08rem 0 0.04rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 0.13rem;
                }
            }
          }

        footer{
            @include foot;
        }
    }

/*编辑推荐*/
    #edit_recommend{
        background: #fff;
        padding-bottom:0.2rem;
    }

    /*超值热卖*/
    #hot_sell{
        margin-bottom: 1rem;

    }


/*商品display的公共样式*/
   .tab_cell{
        padding:0rem 0.08rem;
        header{
            margin:0 0 .08rem;
            text-align: center;
            font-size: 0.17rem;
            padding-top:0.2rem;
        }
        .sell_item{
            padding:0.08rem 0;
            display: flex;
            flex-direction: column;
            border-bottom:0.01rem solid #e0e0e0;
            &:last-child{
                border:none
             }
            img{
                width: 100%;
            }
            .title{
                margin:0.08rem 0 0.04rem;
                font-size: 0.15rem;
                font-weight: bold;
            }

            .intr{
                color: rgba(0,0,0,.54);
                font-size: 0.13rem;
            }

        }

        footer{
            @include foot(#000)
        }
    }
}
</style>