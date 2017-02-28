<!--修改收货地址-->
<script>
    import storeData from '../../store/base_data.js';
    import areaData from '../../data/area.js';
    export default {
        data(){
        return {
//            oneAddress:{
//                receiver:'',
//                tel:'',
//                province:'',
//                city:'',
//                part:'',
//                detailAd:'',
//                idNum:''
//            },
            judge:0,
            addressId:'',
            Province:[],
        }
    },
    methods:{
      getOne_address:function(){

              this.$http.post(storeData.store.state.baseUrl+'Address/getAddress',{"token":"xtongtong","address_id":this.$route.params.addressId,"openid":storeData.store.state.openId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
//                  console.log(res);
//                  return ;

                  var res = JSON.parse( res.data );

                  this.$set('oneAddress', {
                      receiver : res.address.name,
                      tel : res.address.mobile,
                      province : res.address.address_province,
                      city : res.address.address_city,
                      part : res.address.address_part,
                      detailAd : res.address.address,
                      idNum : res.address.id_number,
                  });

                  this.addressId = res.address.address_id;
              },function(err){
                  console.log(err)
              })

      },


      del_address:function(){
          var c = confirm('你确定要删除该地址?');
          if(!c) return false;

          this.$http.post(storeData.store.state.baseUrl+'Address/deleteAddress',{"token":"xtongtong","address_id":this.$route.params.addressId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
              var res = JSON.parse( res.data );
              this.$route.router.go({name:"manageAd"});
          },function(err){
              console.log(err)
          })
      },

        save_address:function(){

            if(!this.start_validate()){
                return false;
            }

            this.$http.post(storeData.store.state.baseUrl+'Address/changeAddress',
                    {
                        "token":"xtongtong",
                        "address_id":this.$route.params.addressId,
                        "name":this.oneAddress.receiver,
                        "mobile":this.oneAddress.tel,
                        "address":this.oneAddress.detailAd,
                        "id_number":this.oneAddress.idNum,
                        "province":this.oneAddress.province,
                        "city":this.oneAddress.city,
                        "part":this.oneAddress.part
                    },
                    {"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                        var res = JSON.parse( res.data );
                        alert('修改成功');
                        this.$route.router.go({ name: 'manageAd'});
//                        console.log(res);
            },function(err){
                console.log(err)
            })
        },

        start_validate(){

            for(var key in this.oneAddress){
                if(!(storeData.store.init_validate())[key]) continue;
                if( !(storeData.store.init_validate())[key](this.oneAddress[key]) ){
                    return false;
                };
            }
            return true;
        }
    },

    computed:{
        City(){
            var arr = [];
            for(var k in areaData.select_area[this.oneAddress.province]){
                arr.push(k);
            }
            return arr;
        },

        Part(){
            return areaData.select_area[this.oneAddress.province][this.oneAddress.city]
        }
    },

    directives:{
        areap : {
            twoWay:true,
                update(newVal,oldVal){
                    this.vm.judge ++;
                if(newVal != oldVal && this.vm.judge >2){
                    if(this.el.id == 'c_select_p'){
                        this.vm.oneAddress.city = '';
                        this.vm.oneAddress.part = '';
                    }else if(this.el.id == 'c_select_c'){
                        this.vm.oneAddress.part = '';
                    }

                }
            }
        }
    },
    ready(){
        this.getOne_address();
        for(var k in areaData.select_area){
            this.Province.push(k);
        }
    }
    }
</script>


<template>
    <div id="changeAd">
        <header  class="common_header">
            <a v-link="{ name: 'manageAd'}">取消</a>
            <span>修改地址</span>
            <span @click="save_address">保存</span>
        </header>

        <div class="adForm">
            <form action="">
                <div>
                    <img src="../../../asset/imgs/ic_star.svg" />
                    <span>收货人</span>
                    <input class="s_input" type="text" v-model="oneAddress.receiver"/>
                </div>

                <div>
                    <img src="../../../asset/imgs/ic_star.svg" />
                    <span>手机号</span>
                    <input class="s_input" type="text" v-model="oneAddress.tel" />
                </div>

                <div class="textArea_part">
                    <img src="../../../asset/imgs/ic_star.svg" />
                    <span>省份</span>
                    <select name="" id="c_select_p" v-areap="oneAddress.province" v-model="oneAddress.province">
                        <option value="" disabled>-- 请选择 --</option>
                        <option value="{{p}}" v-for="p in Province">{{p}}</option>
                    </select>
                </div>

                <div class="textArea_part">
                    <img src="../../../asset/imgs/ic_star.svg" />
                    <span>城市</span>
                    <select name="" id="c_select_c" :disabled="oneAddress.province.trim()=='' "  v-model="oneAddress.city">
                        <option value="" disabled>-- 请选择 --</option>
                        <option value="{{c}}" v-for="c in City">{{c}}</option>
                    </select>
                </div>

                <div class="textArea_part">
                    <img src="../../../asset/imgs/ic_star.svg" />
                    <span>地区</span>
                    <select name="" id="" :disabled="oneAddress.city.trim()=='' "  v-model="oneAddress.part">
                        <option value="" disabled>-- 请选择 --</option>
                        <option value="{{t}}" v-for="t in Part">{{t}}</option>
                    </select>
                </div>

                <div class="textArea_part">
                    <img src="../../../asset/imgs/ic_star.svg" />
                    <span>详细地址</span>
                    <input class="s_input" type="text" v-model="oneAddress.detailAd" />
                </div>

                <div>
                    <img src="../../../asset/imgs/ic_star.svg" />
                    <span>身份证号</span>
                    <input class="s_input" v-model="oneAddress.idNum" type="text"/>
                </div>
            </form>

            <div class="del_ad" @click="del_address">删除地址</div>
            <button class="sg_btn be_vpn"  @click="save_address">保存地址</button>
        </div>
    </div>
</template>

<style lang="sass">
    #changeAd{
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

    &.textArea_part{
         /*align-items: flex-start;*/
     }

    img{
        width:0.12rem;
        height:0.12rem;
        margin-right:0.02rem;
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
        flex: auto;
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

    .del_ad{
        background: #fff;
        padding:0.12rem 0.26rem;
        color:red;
        margin-top: 0.2rem;
        cursor: pointer;
    }
    button{
        background: rgba(0, 0, 0, 0.87);
    }
    }
</style>