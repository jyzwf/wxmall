<!--增加收货地址-->

<script>
    import storeData from '../../store/base_data.js';
    import areaData from '../../data/area.js';
    export default {
        data(){
        return {
            addAddress:{
                receiver:'',
                tel:'',
                province:'',
                city:'',
                part:'',
                detailAd:'',
                idNum:''
            },
            addressId:'',
            Province:[],
        }
    },
    methods:{
        add_address(){

            if(!this.start_validate()){
                return false;
            }

            this.$http.post(storeData.store.state.baseUrl+'Address/addAddress',
                    {
                        "token":"xtongtong",
                        "openid":storeData.store.state.openId,
                        "name":this.addAddress.receiver,
                        "mobile":this.addAddress.tel,
                        "address":this.addAddress.detailAd,
                        "id_number":this.addAddress.idNum,
                        "province":this.addAddress.province,
                        "city":this.addAddress.city,
                        "part":this.addAddress.part
                    },
                    {"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse( res.data );
                        this.$route.router.go({name:"manageAd"});
//                        console.log(this.$route.router.go({name:"list"});res);
                        alert('添加成功');
                    },function(err){
                        console.log(err)
                    })
        },

        start_validate(){

            for(var key in this.addAddress){
                if(!(storeData.store.init_validate())[key]) continue;
                if( !(storeData.store.init_validate())[key](this.addAddress[key]) ){
                    return false;
                };
            }
            return true;
        }


    },

    computed:{
        City(){
            var arr = [];

            for(var k in areaData.select_area[this.addAddress.province]){
                arr.push(k);
            }

            return arr;
        },

        Part(){
            return areaData.select_area[this.addAddress.province][this.addAddress.city]
        }
    },

    directives:{
        areap : {
            twoWay:true,
            update(newVal,oldVal){

                if(newVal != oldVal){
                    if(this.el.id == 'p_select'){
                        this.vm.addAddress.city = '';
                        this.vm.addAddress.part = '';
                    }else if(this.el.id == 'c_select'){
                        this.vm.addAddress.part = '';
                    }

                }
            }
        }
    },

    ready(){
        for(var k in areaData.select_area){
            this.Province.push(k);
        }
    }
    }
</script>

<template>
    <div id="addAd">
        <header class="common_header">
            <a v-link="{ name: 'manageAd'}">取消</a>
            <span>新增地址</span>
            <span @click="add_address">保存</span>
        </header>

        <div class="adForm">
            <form action="">
                <div>
                    <img src="../../../asset/imgs/star.svg" />
                    <span>收货人</span>
                    <p></p>
                    <input class="s_input" type="text" v-model="addAddress.receiver" />
                </div>

                <div>
                    <img src="../../../asset/imgs/star.svg" />
                    <span>手机号</span>
                    <p></p>
                    <input class="s_input" type="text" v-model="addAddress.tel" />
                </div>

                <div class="textArea_part">
                    <p></p>
                    <img src="../../../asset/imgs/star.svg" />
                    <span>省份</span>
                    <select name="" id="p_select" v-areap="addAddress.province" v-model="addAddress.province">
                        <option value="" disabled>-- 请选择 --</option>
                        <option value="{{p}}" v-for="p in Province">{{p}}</option>
                    </select>
                </div>

                <div class="textArea_part">
                    <p></p>
                    <img src="../../../asset/imgs/star.svg" />
                    <span>城市</span>
                    <select name="" id="c_select" v-areap="addAddress.city" :disabled="addAddress.province.trim()=='' " v-model="addAddress.city">
                        <option value="" disabled>-- 请选择 --</option>
                        <option value="{{c}}" v-for="c in City">{{c}}</option>
                    </select>
                </div>

                <div class="textArea_part">
                    <p></p>
                    <img src="../../../asset/imgs/star.svg" />
                    <span>地区</span>
                    <select name="" id="" :disabled="addAddress.city.trim()=='' " v-model="addAddress.part">
                        <option value="" disabled>-- 请选择 --</option>
                        <option value="{{t}}" v-for="t in Part">{{t}}</option>
                    </select>
                </div>

                <div class="textArea_part">
                    <p></p>
                    <img src="../../../asset/imgs/star.svg" />
                    <span>详细地址</span>
                    <input class="s_input" type="text" v-model="addAddress.detailAd" />
                </div>

                <div>
                    <img src="../../../asset/imgs/star.svg" />
                    <span>身份证号</span>
                    <input class="s_input" type="text" v-model="addAddress.idNum" />
                </div>
            </form>

            <button class="sg_btn be_vpn" @click="add_address">保存地址</button>
        </div>
    </div>
</template>

<style lang="sass">
    #addAd{
        header{

            span:last-child{
                cursor: pointer;
            }

        }

        form{
            background:#fff;
            div{
                display: flex;
                padding:0.12rem 0.16rem;
                align-items: center;
                border-bottom:1px solid rgba(0,0,0,.12);
                position:relative;
                font-size:0.15rem;

                &.textArea_part{
                    /*align-items: flex-start;*/
                 }

                img{
                    width:0.08rem;
                    height:0.08rem;
                    margin-right:0.02rem;
                }

                p{
                    height: 0.01rem;
                    width:100%;
                    position: absolute;
                    bottom:0;
                    left:0;
                    transform: scale(0);
                    transform-origin: center;
                    transition: all 0.3s linear;
                    background: red;
                }

                span{
                    min-width: 0.8rem;
                    color:rgba(0,0,0,.22);
                }

                .s_input{
                    border:none;
                    outline: none;
                    color:#000;
                    font-size: 0.16rem;
                }

                textarea{
                    padding:0.01rem 0;
                    line-height: 0.8;
                    flex: auto;
                    resize: none;
                }

                select{
                    appearance: none;
                    border: 0;
                    outline: 0;
                    background-color: rgba(0, 0, 0, 0.3);
                    padding:0.02rem 0.2rem 0.02rem 0.02rem;
                    border-radius:0;
                    font-size:0.15rem;
                }
            }
        }

        button{
            background: rgba(0, 0, 0, 0.87);
        }
    }
</style>