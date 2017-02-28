<!--Æ·ÅÆ¹Ý-->
<script>

    import storeData from '../../store/base_data.js';
    export default {
        props:['goods_number'],
        data(){
            return {
//                all_brands:{}
            }
        },
        methods:{
            get_brands:function(){
                this.$http.post(storeData.store.state.baseUrl+'Distribution/brandPage',{"token":"xtongtong","openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse(res.data);
                    if(res.resp_code == 100){
                        this.$set('all_brands',res);
                        this.goods_number = res.shopping_cart_num;
                    }


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
                };

            }
        }
    },
        ready(){
            this.get_brands();


        }
    }
</script>


<template>
    <div id="brands">
        <section v-for="type in all_brands.brands">
            <header>
                <span>{{ type.brand_name }}</span>
            </header>
            
            <div class="show_brand">
                <a v-link="{ name: 'brandMsg', params: { brandId: detail.brand_id}}" v-for="detail in type.brand_list">
                    <img v-load_pic="detail.brand_show_img"  src="../../../asset/imgs/9.jpg" alt=""/>
                </a>
            </div>
        </section>

    </div>
</template>

<style lang="sass">
    #brands{
        margin-bottom: 0.7rem;

        header{
            margin:0.16rem 0 0.24rem;
            text-align: center;
            font-size: 0.17rem;

            span{
                position: relative;

                &:before,&:after{
                    content: '';
                    width:100%;

                    position: absolute;
                    left:0;
                 }

                &:before{
                    height:3px;
                    background: #000;
                    bottom:-0.04rem;
                 }

                 &:after{
                    height:1px;
                    background: rgba(0, 0, 0, 0.54);
                    bottom:-0.07rem;
                  }
            }
        }

    .show_brand{
        padding:0 0.1rem;
        font-size:0;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;

        a{
            width:1.65rem;
            height: 0.88rem;
            margin-bottom: 0.1rem;
        }

        img{
            width:inherit;
            height:inherit;
        }

        a:nth-of-type(odd){
            margin-right:0.1rem;
        }


    }
    }
</style>