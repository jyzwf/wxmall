/*var open_id = (function(){
    var url=window.location.href;
    var openidReg=/openid=[^\&\#\!]+/g;
    var openid=url.match(openidReg);
    return openid[0].split('=')[1];
})();*/



var store = {
    state: {
        baseUrl: '***',
        openId: openid,
        userHeading: '',
        user_qrCode: '',
        first_address: 'A000000000000000',
        refund_orderId: '',
        refund_commodityId: '',
        refund_card: '',
        shop_count: 0
            /*       jsApiCall(){
                           WeixinJSBridge.invoke(
                               'getBrandWCPayRequest',
                           <?php echo $jsApiParameters; ?>,
                           function(res){
                               WeixinJSBridge.log(res.err_msg);
                               alert(res.err_code+res.err_desc+res.err_msg);
                           }
                       );
                   },*/
            /*callpay(){
                if (typeof WeixinJSBridge == "undefined"){
                    if( document.addEventListener ){
                        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
                    }else if (document.attachEvent){
                        document.attachEvent('WeixinJSBridgeReady', jsApiCall);
                        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
                    }
                }else{
                    jsApiCall();
                }
            }*/
    },

    init_validate() {
        return {
            require(str, errorMsg) {
                if (str.trim() == '') {
                    alert(errorMsg);
                    return false;
                }
                return true;
            },

            receiver(str) {
                return this.require(str, '收货人不能为空');
            },

            tel(str) {
                if (!this.require(str, '手机号码不能为空')) {
                    return false;
                }
                if (!(/^1[3|4|5|7|8]\d{9}$/).test(str)) {
                    alert('请输入正确的手机号');
                    return false;
                }
                return true;
            },

            detailAd(str) {
                if (!this.require(str, '详细地址不能为空')) {
                    return false;
                }
                if (str.split(' ').join('').length < 5 || str.split(' ').join('').length > 60) {
                    alert('详细地址必须在5-60个汉字之间');
                    return false;
                }
                return true;
            },

            province(str) {
                return this.require(str, '请选择省份');
            },

            city(str) {
                return this.require(str, '请选择城市');
            },

            part(str) {
                return this.require(str, '请选择地区');
            },

            idNum(str) {
                if (!this.require(str, '身份证号不能为空')) {
                    return false;
                }
                if (!(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/).test(str)) {
                    alert('请输入正确身份证号');
                    return false;
                }
                return true;
            }
        }
    },

    getUserHeading: function(str) {
        this.state.userHeading = str;
    },

    getUserQrcode: function(str) {
        this.state.user_qrCode = str;
    },

    changeSettleAddress: function(str) {
        this.state.first_address = str;
    },

    changeRefundGood: function(str1, str2) {
        console.log(str1)
        this.state.refund_orderId = str1;
        this.state.refund_commodityId = str2;
    },

    changeShopCarCount: function(str) {
        console.log(str)
        this.state.shop_count = +str;
    }

}

module.exports = {
    store: store
}