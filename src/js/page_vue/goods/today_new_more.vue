
<script>

    import storeData from '../../store/base_data.js';


    export default {
    methods:{
        get_data:function(){

            this.$http.post(storeData.store.state.baseUrl+'Distribution/getNews',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                var res = JSON.parse( res.data )
                this.$set('new_goods_data',res);

            },function(err){
                console.log(err)
            })
        }
    },
    directives:{
        load_pic:{
            twoWay:true,
                    update(val){
                this.el.onload = ()=>{
                    if(this.el){
                        this.el.src = val;
                    }
                }

            }
        }
    },
    ready(){
        this.get_data();
    }
    }
</script>

<template>
    <div id="today_new_more">

        <section id="goods">
            <a v-link="{name:'goodMsg',params:{commodityId:item.commodity_id}}" v-for = 'item in new_goods_data.commodity'>
                <div class="first_view">
                    <img v-load_pic="item.img"  src="../../../asset/imgs/9.jpg" alt=""/>
                </div>
                <div class="des">
                    <p>{{item.commodity_name}}</p>
                    <p>{{'售价 '+item.commodity_sale_price+'元'}} </p>
                </div>
            </a>
        </section>

    </div>

</template>

<style lang="sass">


    #today_new_more{
        position:relative;

        background: #fff;

    #goods{
        padding:0.08rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;



    a{

        width:calc(50% - 0.04rem);
        background: #fff;
    }

    .first_view{
        width:100%;
    img{
        width:inherit;
        height:inherit;
    }
    }


    .des{
        padding:0.09rem .12rem;
        font-size:0.15rem;

    p:first-child{
        overflow : hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom:0.08rem;
        font-size: 0.13rem;

    }

    p:last-child{
        font-size: 0.11rem;
        color:rgba(0,0,0,.58);
    }
    }


    }
    }
</style>

