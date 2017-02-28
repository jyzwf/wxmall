<template>
    <div id="more_recommend">
        <div class="sell_list">
            <a class="sell_item" v-link="{ name: 'brandMsg', params: { brandId: brand.brand_id}}"  v-for="brand in new_brand_data">
                <img v-load_pic="brand.img" src="../../../asset/imgs/6.jpg"  alt=""/>
                <p class="title">{{brand.name}}</p>
                <p class="intr">{{brand.description}}</p>
            </a>
        </div>
    </div>
</template>

<style lang="sass">
    #more_recommend{
        padding:0 0.08rem;
        background:#fff;
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
    }
</style>

<script>

    import storeData from '../../store/base_data.js';


    export default {
        methods:{
            get_data:function(){

                this.$http.post(storeData.store.state.baseUrl+'Distribution/getRecommends',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data )
                    this.$set('new_brand_data',res.recommend);

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