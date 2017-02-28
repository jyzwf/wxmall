<!--申请退款-->
<script>

    import storeData from '../../store/base_data.js';
    import orderHeaderTpl from '../../components/order_detail_header.vue';
    export default {
        data(){
            return {
                picNum:[],
                pic_serverId:[],
                n : 8,
                pic_localIds:{},
                flag:true,
                refund_way:1,
                refund_msg:{
                    r_num:1,
                    r_money:'',
                    r_type:'',
                    r_reason:'',
                    r_intr:'',
                    r_account:''
                }
            }
        },
        components:{orderHeaderTpl},
        methods:{
            get_good_msg(){
                var _this = this;
                storeData.store.changeRefundGood(this.$route.params.orderId,this.$route.params.commodityId);

                this.$http.post(storeData.store.state.baseUrl+'Distribution/applyForRefundInfo',{"order_id":this.$route.params.orderId,"token":"xtongtong","openid":storeData.store.state.openId,"commodity_id":this.$route.params.commodityId},{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {
                    var res = JSON.parse( res.data );
                    window.sessionStorage.refund_orderId=_this.$route.params.orderId;
                    window.sessionStorage.refund_commodityId=_this.$route.params.commodityId;

                    if(res.resp_code == 100){
                        this.$set('refund',res);
                    }

                },function(err){
                    console.log(err)
                })
            },

            upload_img(ev,idx){
                var _this = this;
                wx.ready(function(){
                    wx.chooseImage({
                            count:1,
                            success(res){
                                _this.picNum.$set(idx,res.localIds[0]);
                            }
                    })
                })
            },

            to_add_pic(){
                var _this = this;
                wx.ready(function(){
                    wx.chooseImage({
                            count: 1,
                            success(res)
                                {
                                    _this.picNum.push(res.localIds[0]);
                                    if (_this.picNum.length == 3) {
                                        _this.flag = false;
//                                        return false;
                                    }
                                }
                    })
                })
            },

            remove_pic(idx){
                if(this.picNum.length==0){
                    this.flag = true;
                }
            },

            send_pic_req(){
//                alert(JSON.stringify(this.picNum));

                let _this = this;
                wx.ready(function(){
                    _this.pic_serverId = [];
                    let i= 0,len = _this.picNum.length;
                    if(len == 0){
                        _this.send_refundreq('|');
                        return false;
                    }
                    function upload() {
                        wx.uploadImage({
                            localId: _this.picNum[i],
                            success: function (res) {
                                i++;
                                _this.pic_serverId.push(res.serverId);
                                if (i < len) {
                                    upload();
                                }else{
                                    _this.send_refundreq(_this.pic_serverId.join('|'));
                                }
                            },
                            fail: function (res) {
                                alert(JSON.stringify(res));
                            }
                        });
                    }
                    upload();
                });
            },


            form_invalid(){
//                验证输入金额

                if(!(/^(([1-9]\d*)|0)(\.(\d){1,2})?$/).test(this.refund_msg.r_money)){
                    alert('请输入正确的退款金额');
                    return false;
                }

                if(this.refund_msg.r_reason.trim() == ''){
                    alert('请选择退款原因');
                    return false;
                }

                return true;
            },

            send_refundreq(server_id){
                if(!this.form_invalid()){
                    return false;
                }
                this.$http.post(storeData.store.state.baseUrl+'Distribution/applyForRefund',{
                    "order_id":this.refund.ids.order_id,
                    "token":"xtongtong",
                    "openid":storeData.store.state.openId,
                    "commodity_id":this.refund.ids.commodity_id,
                    "refund_count":(+this.refund_msg.r_money).toFixed(2),
                    "refund_type":this.refund_way,
                    "refund_reason":this.refund_msg.r_reason,
                    "refund_explain":this.refund_msg.r_intr,
                    "refund_account":'1',
                    "refund_num":this.refund_msg.r_num,
                    "refund_img":server_id
                },{"emulateJSON":true,"emulateHTTP":true}).then(function(res) {

                    var res = JSON.parse( res.data );

                    if(res.resp_code == 100){
                        alert('申请已提交，请耐心等待');
                        this.$route.router.go({'name':'allOrder'});
                    }else{
                        alert('申请提交失败，请稍后再试')
                    }

                },function(err){
                    alert('申请提交失败，请稍后再试')
                    console.log(err)
                });
            }
        },
        ready(){
            this.get_good_msg()
        }
    }
</script>


<template>
    <div id="refund">

        <order-header-tpl :headermsg.sync="refund.order"></order-header-tpl>

        <header>商品信息</header>

        <div class="refund_good">
            <img :src="refund.commodity.commodity_title_img" alt=""/>
            <div>
                <p>{{refund.commodity.commodity_name}}</p>
                <p>合计: {{(refund.commodity.commodity_sale_price * refund.commodity.commodity_num).toFixed(2)}} ({{refund.commodity.commodity_sale_price}} * {{refund.commodity.commodity_num}})</p>
            </div>
        </div>

        <div class="refund_operate">
            <div class="normal_input">
                <span>退款数量</span>
                <select name="" id="" v-model="refund_msg.r_num">
                    <option :value="i+1" v-for="i in +refund.commodity.commodity_num">{{i+1}}</option>
                </select>
            </div>

            <div class="normal_input" >
                <span>退款金额</span>
                <input type="number" v-model="refund_msg.r_money" placeholder="点击输入退款金额"/>
            </div>

            <div class="refund_need">
                <span>退款需求</span>
                <p>
                    <span class="just" @click="refund_way = 1" :class="{active:refund_way}">仅退款</span>
                    <span class="another" @click="refund_way = 0" :class="{active:!refund_way}">退货并退款</span>
                </p>
            </div>

            <div class="normal_input">
                <span>退款原因</span>
                <select name="" id="" v-model="refund_msg.r_reason">
                    <option value="" disabled>请选择退款原因</option>
                    <option value="1" >退税</option>
                    <option value="2" >退运费</option>
                    <option value="3" >退差价</option>
                    <option value="4" >物流不满意</option>
                    <option value="5" >未收到/无法收到商品</option>
                    <option value="6" >质量问题</option>
                    <option value="7" >个人信息填写错误</option>
                    <option value="8" >申请超时发货赔付</option>
                    <option value="9" >错发/漏发</option>
                    <option value="0" >多拍/拍错</option>
                </select>
            </div>

            <div class="refund_intr">
                <span>退款说明<br/>(非必填)</span>
                <textarea name="" id="" cols="30" rows="3" v-model="refund_msg.r_intr" placeholder="请输入退款说明"></textarea>
            </div>

            <div class="refund_pic">
                <span>上传照片</span>
                <section>
                    <div class="pseudoClass" v-if="flag" @click="to_add_pic">
                        <!--<p @click="upload_img($event)"></p>-->
                        <!--<span @click="remove_pic($event)"></span>-->
                    </div>

                    <div v-for="pic in picNum"  class="pseudoClass">
                        <p @click="upload_img($event,$index)" v-bind:style="{backgroundImage:'url('+pic+')'}"></p>
                        <img class="close" src="../../../asset/imgs/ic-remove.svg" @click="remove_pic($index)" />
                    </div>
                </section>
            </div>

            <div class="refund_account" >
                <span>退款账号</span>
                <span>微信账户</span>
                <!--<a v-link="{name:'chooseAccount'}">
                    <span>退款账号选择</span>
                    <img class="s_icon" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
                </a>-->
            </div>

            <div v-for="pic in aaa">{{pic}}</div>
        </div>

        <button @click="send_pic_req" class="sg_btn be_vpn">提交申请</button>
    </div>
</template>


<style lang="sass">
    #refund{
        header{
            padding:0.12rem 0.16rem 0.04rem;
            font-size: 0.13rem;
            background: #fff;
        }

        .refund_good{
            padding:0.12rem 0.16rem;
            display: flex;
            font-size: 0.13rem;
            background: #fff;
            img{
                width:0.56rem;
                min-width: 0.56rem;
                height:0.56rem;
            }

            div{
                margin-left:0.16rem;
                p:first-child{
                    color:rgba(0, 0, 0, 0.87)
                }

                p:last-child{
                    color:rgba(0, 0, 0, 0.54)
                }
            }
        }

        .refund_operate{
            padding-left:0.16rem;
            border-top:1px solid #e0e0e0;
            border-bottom:1px solid #e0e0e0;
            font-size: 0.15rem;
            color:rgba(0, 0, 0, 0.54);
            background: #fff;

            input,textarea,select{
                border:none;
                outline: none;
                font-size: 0.15rem;
                resize: none;
                -webkit-appearance: none;

            }

            select{
                direction: rtl;
            }

            textarea{
                text-align: right;
            }

            &>div{

                display:flex;
                align-items:center;
                justify-content:space-between;
                padding: 0.14rem 0.12rem 0.14rem 0;
                border-bottom:1px solid #e0e0e0;

                input{
                    text-align: right;
                }


                 span{
                     &:first-child{
                        min-width: 0.8rem;
                      }
                 }
            }

            .refund_account{
                border:none;
                a{
                    color:red
                }

                span:last-child{
                    margin-right: 0.16rem;
                }
            }

            .refund_need{
                /*padding:0.14rem 0.12rem 0.14rem 0;*/
                border-bottom:1px solid #e0e0e0;
                p{
                    border:1px solid #000;
                    border-radius: 0.04rem;
                    font-size: 0;

                    span{
                        min-width: 0.8rem;
                        text-align: center;
                        font-size: 0.15rem;
                        cursor:pointer;
                        &.active{
                            background: #000;
                            color:#fff;
                         }
                        &.just{
                            border-right: 1px solid #000;
                         }
                    }
                }
            }

            .refund_intr{
                align-items: flex-start;
            }

            .refund_pic{
                align-items: flex-start;
                section{
                    direction: rtl;
                    flex:auto;
                    div.pseudoClass{
                        width:0.64rem;
                        height:0.64rem;
                        position: relative;
                        border: 1px solid #D9D9D9;
                        display: inline-block;
                        margin-left:0.04rem;
                        cursor:pointer;

                        p{
                            background-size: cover;
                            background-repeat: no-repeat;
                            width:inherit;
                            height:inherit;
                            position: absolute;
                            left:0;
                            top:0;
                            cursor:pointer;
                            z-index: 99;
                            /*z-index:*/
                        }

                        img.close{
                            width:0.24rem;
                            height:0.24rem;
                            position: absolute;
                            top:-0.12rem;
                            right:-0.12rem;
                            /*background: #000;*/
                            border-radius: 50%;
                            z-index: 999;
                        }
                    }

                    /*input{
                        width:100%;
                        height:100%;
                        opacity: 0;
                    }*/
                }
                img{
                    width:0.64rem;
                    height:0.64rem;
                }
            }

        }
    
        button{
            background: #000;
            color: #fff;
        }
    }
</style>