webpackJsonp([22,37],{

/***/ 52:
/*!*********************************************!*\
  !*** ./src/asset/imgs/ic_query_builder.svg ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic_query_builder.svg";

/***/ },

/***/ 189:
/*!***************************************************!*\
  !*** ./src/js/page_vue/settlement/settlement.vue ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./settlement.vue */ 190)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./settlement.vue */ 192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\settlement\\settlement.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./settlement.vue */ 193)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\settlement\\settlement.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 190:
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/settlement/settlement.vue ***!
  \********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./settlement.vue */ 191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./settlement.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./settlement.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 191:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/settlement/settlement.vue ***!
  \***********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#to_settlement {\n  margin-bottom: 0.7rem; }\n  #to_settlement .warning {\n    padding: .1rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 0.12rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    #to_settlement .warning img {\n      width: 0.144rem;\n      margin-right: 0.08rem; }\n    #to_settlement .warning span {\n      vertical-align: inherit; }\n      #to_settlement .warning span .deadline {\n        color: red; }\n  #to_settlement .adress {\n    background: #393a3f;\n    padding: 0.12rem 0.16rem;\n    color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 0.15rem; }\n    #to_settlement .adress .ad_icon {\n      width: 0.24rem; }\n    #to_settlement .adress .receiver {\n      margin: 0 0.12rem;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; }\n      #to_settlement .adress .receiver p:first-child {\n        margin-bottom: 0.04rem; }\n        #to_settlement .adress .receiver p:first-child span {\n          vertical-align: inherit; }\n        #to_settlement .adress .receiver p:first-child .tel {\n          margin-left: 0.16rem;\n          font-size: 0.13rem; }\n      #to_settlement .adress .receiver .adre, #to_settlement .adress .receiver .id_num {\n        font-size: 0.123rem; }\n  #to_settlement .order_item {\n    background: #fff;\n    margin-bottom: 0.16rem; }\n    #to_settlement .order_item header {\n      padding: 0.12rem 0.16rem 0.04rem; }\n      #to_settlement .order_item header span {\n        vertical-align: inherit; }\n    #to_settlement .order_item .cell {\n      padding: 0rem 0.12rem 0rem 0.16rem;\n      font-size: 0.15rem;\n      border-bottom: 1px solid #e0e0e0; }\n      #to_settlement .order_item .cell a {\n        margin-top: 0.14rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 0.14rem;\n        border-bottom: 1px solid #e0e0e0; }\n        #to_settlement .order_item .cell a:last-child {\n          border: none; }\n        #to_settlement .order_item .cell a p span {\n          color: rgba(0, 0, 0, 0.54); }\n  #to_settlement .wash_cell #pay_msg, #to_settlement .pay_word {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 0.14rem; }\n  #to_settlement .wash_cell {\n    background: #fff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    font-family: NotoSansCJKsc; }\n    #to_settlement .wash_cell.pay_method {\n      border-top: 1px solid rgba(0, 0, 0, 0.12);\n      margin-bottom: 0.7rem; }\n    #to_settlement .wash_cell .layout {\n      font-size: 0.16rem;\n      padding: 0.1rem 0.16rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      #to_settlement .wash_cell .layout .left, #to_settlement .wash_cell .layout .right {\n        font-size: 0; }\n      #to_settlement .wash_cell .layout .left img {\n        width: 0.24rem;\n        height: 0.24rem;\n        margin-right: 0.16rem; }\n      #to_settlement .wash_cell .layout span, #to_settlement .wash_cell .layout img {\n        display: inline-block;\n        vertical-align: middle; }\n      #to_settlement .wash_cell .layout .right {\n        cursor: pointer;\n        margin-right: 0.28rem; }\n        #to_settlement .wash_cell .layout .right input {\n          position: absolute;\n          left: -9999px;\n          opacity: 0; }\n          #to_settlement .wash_cell .layout .right input:not(:checked) + label:after {\n            -webkit-transform: scale(0) translateY(-100%);\n                    transform: scale(0) translateY(-100%); }\n          #to_settlement .wash_cell .layout .right input:checked + label:after {\n            -webkit-transform: scale(0.5) translateY(-100%);\n                    transform: scale(0.5) translateY(-100%); }\n        #to_settlement .wash_cell .layout .right label {\n          position: relative;\n          -webkit-transition: all .28s ease;\n          transition: all .28s ease;\n          -webkit-user-select: none; }\n          #to_settlement .wash_cell .layout .right label:before, #to_settlement .wash_cell .layout .right label:after {\n            content: \"\";\n            width: 0.16rem;\n            height: 0.16rem;\n            box-sizing: border-box;\n            position: absolute;\n            right: -0.28rem;\n            top: 50%;\n            -webkit-transform: translateY(-50%);\n                    transform: translateY(-50%);\n            border: 2px solid rgba(0, 0, 0, 0.54);\n            border-radius: 50%; }\n          #to_settlement .wash_cell .layout .right label:after {\n            border: none;\n            background: rgba(0, 0, 0, 0.54); }\n    #to_settlement .wash_cell #pay_msg {\n      margin: 0.16rem 0.16rem 0.08rem; }\n  #to_settlement #billing {\n    width: 100%;\n    max-width: 5.4rem;\n    position: fixed;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 0.14rem 0.12rem 0.14rem 0.16rem;\n    font-size: 0.15rem;\n    bottom: 0rem;\n    border-top: 1px solid #e0e0e0;\n    background: #F8F8F8; }\n    #to_settlement #billing .to_billing {\n      padding: 0.04rem 0.27rem;\n      background: #000;\n      border-radius: 0.04rem;\n      color: #fff;\n      cursor: pointer;\n      border: none;\n      outline: none;\n      font-size: 0.15rem; }\n    #to_settlement #billing span {\n      color: red; }\n", "", {"version":3,"sources":["/./src/js/page_vue/settlement/settlement.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAE;EACxB;IACE,eAAe;IACf,6CAA6C;IAC7C,mBAAmB;IACnB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB,EAAE;IACtB;MACE,gBAAgB;MAChB,sBAAsB,EAAE;IAC1B;MACE,wBAAwB,EAAE;MAC1B;QACE,WAAW,EAAE;EACnB;IACE,oBAAoB;IACpB,yBAAyB;IACzB,YAAY;IACZ,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,mBAAmB,EAAE;IACrB;MACE,eAAe,EAAE;IACnB;MACE,kBAAkB;MAClB,oBAAW;UAAX,eAAW;cAAX,WAAW,EAAE;MACb;QACE,uBAAuB,EAAE;QACzB;UACE,wBAAwB,EAAE;QAC5B;UACE,qBAAqB;UACrB,mBAAmB,EAAE;MACzB;QACE,oBAAoB,EAAE;EAC5B;IACE,iBAAiB;IACjB,uBAAuB,EAAE;IACzB;MACE,iCAAiC,EAAE;MACnC;QACE,wBAAwB,EAAE;IAC9B;MACE,mCAAmC;MACnC,mBAAmB;MACnB,iCAAiC,EAAE;MACnC;QACE,oBAAoB;QACpB,qBAAc;QAAd,qBAAc;QAAd,cAAc;QACd,0BAA+B;YAA/B,uBAA+B;gBAA/B,+BAA+B;QAC/B,0BAAoB;YAApB,uBAAoB;gBAApB,oBAAoB;QACpB,wBAAwB;QACxB,iCAAiC,EAAE;QACnC;UACE,aAAa,EAAE;QACjB;UACE,2BAA2B,EAAE;EACrC;IACE,2BAA2B;IAC3B,mBAAmB,EAAE;EACvB;IACE,iBAAiB;IACjB,6CAA6C;IAC7C,2BAA2B,EAAE;IAC7B;MACE,0CAA0C;MAC1C,sBAAsB,EAAE;IAC1B;MACE,mBAAmB;MACnB,wBAAwB;MACxB,qBAAc;MAAd,qBAAc;MAAd,cAAc;MACd,0BAA+B;UAA/B,uBAA+B;cAA/B,+BAA+B;MAC/B,0BAAoB;UAApB,uBAAoB;cAApB,oBAAoB,EAAE;MACtB;QACE,aAAa,EAAE;MACjB;QACE,eAAe;QACf,gBAAgB;QAChB,sBAAsB,EAAE;MAC1B;QACE,sBAAsB;QACtB,uBAAuB,EAAE;MAC3B;QACE,gBAAgB;QAChB,sBAAsB,EAAE;QACxB;UACE,mBAAmB;UACnB,cAAc;UACd,WAAW,EAAE;UACb;YACE,8CAAsC;oBAAtC,sCAAsC,EAAE;UAC1C;YACE,gDAAwC;oBAAxC,wCAAwC,EAAE;QAC9C;UACE,mBAAmB;UACnB,kCAA0B;UAA1B,0BAA0B;UAC1B,0BAA0B,EAAE;UAC5B;YACE,YAAY;YACZ,eAAe;YACf,gBAAgB;YAChB,uBAAuB;YACvB,mBAAmB;YACnB,gBAAgB;YAChB,SAAS;YACT,oCAA4B;oBAA5B,4BAA4B;YAC5B,sCAAsC;YACtC,mBAAmB,EAAE;UACvB;YACE,aAAa;YACb,gCAAgC,EAAE;IAC1C;MACE,gCAAgC,EAAE;EACtC;IACE,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,0BAA+B;QAA/B,uBAA+B;YAA/B,+BAA+B;IAC/B,yCAAyC;IACzC,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,oBAAoB,EAAE;IACtB;MACE,yBAAyB;MACzB,iBAAiB;MACjB,uBAAuB;MACvB,YAAY;MACZ,gBAAgB;MAChB,aAAa;MACb,cAAc;MACd,mBAAmB,EAAE;IACvB;MACE,WAAW,EAAE","file":"settlement.vue","sourcesContent":["#to_settlement {\n  margin-bottom: 0.7rem; }\n  #to_settlement .warning {\n    padding: .1rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 0.12rem;\n    display: flex;\n    align-items: center; }\n    #to_settlement .warning img {\n      width: 0.144rem;\n      margin-right: 0.08rem; }\n    #to_settlement .warning span {\n      vertical-align: inherit; }\n      #to_settlement .warning span .deadline {\n        color: red; }\n  #to_settlement .adress {\n    background: #393a3f;\n    padding: 0.12rem 0.16rem;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    font-size: 0.15rem; }\n    #to_settlement .adress .ad_icon {\n      width: 0.24rem; }\n    #to_settlement .adress .receiver {\n      margin: 0 0.12rem;\n      flex: auto; }\n      #to_settlement .adress .receiver p:first-child {\n        margin-bottom: 0.04rem; }\n        #to_settlement .adress .receiver p:first-child span {\n          vertical-align: inherit; }\n        #to_settlement .adress .receiver p:first-child .tel {\n          margin-left: 0.16rem;\n          font-size: 0.13rem; }\n      #to_settlement .adress .receiver .adre, #to_settlement .adress .receiver .id_num {\n        font-size: 0.123rem; }\n  #to_settlement .order_item {\n    background: #fff;\n    margin-bottom: 0.16rem; }\n    #to_settlement .order_item header {\n      padding: 0.12rem 0.16rem 0.04rem; }\n      #to_settlement .order_item header span {\n        vertical-align: inherit; }\n    #to_settlement .order_item .cell {\n      padding: 0rem 0.12rem 0rem 0.16rem;\n      font-size: 0.15rem;\n      border-bottom: 1px solid #e0e0e0; }\n      #to_settlement .order_item .cell a {\n        margin-top: 0.14rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 0.14rem;\n        border-bottom: 1px solid #e0e0e0; }\n        #to_settlement .order_item .cell a:last-child {\n          border: none; }\n        #to_settlement .order_item .cell a p span {\n          color: rgba(0, 0, 0, 0.54); }\n  #to_settlement .wash_cell #pay_msg, #to_settlement .pay_word {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 0.14rem; }\n  #to_settlement .wash_cell {\n    background: #fff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    font-family: NotoSansCJKsc; }\n    #to_settlement .wash_cell.pay_method {\n      border-top: 1px solid rgba(0, 0, 0, 0.12);\n      margin-bottom: 0.7rem; }\n    #to_settlement .wash_cell .layout {\n      font-size: 0.16rem;\n      padding: 0.1rem 0.16rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n      #to_settlement .wash_cell .layout .left, #to_settlement .wash_cell .layout .right {\n        font-size: 0; }\n      #to_settlement .wash_cell .layout .left img {\n        width: 0.24rem;\n        height: 0.24rem;\n        margin-right: 0.16rem; }\n      #to_settlement .wash_cell .layout span, #to_settlement .wash_cell .layout img {\n        display: inline-block;\n        vertical-align: middle; }\n      #to_settlement .wash_cell .layout .right {\n        cursor: pointer;\n        margin-right: 0.28rem; }\n        #to_settlement .wash_cell .layout .right input {\n          position: absolute;\n          left: -9999px;\n          opacity: 0; }\n          #to_settlement .wash_cell .layout .right input:not(:checked) + label:after {\n            transform: scale(0) translateY(-100%); }\n          #to_settlement .wash_cell .layout .right input:checked + label:after {\n            transform: scale(0.5) translateY(-100%); }\n        #to_settlement .wash_cell .layout .right label {\n          position: relative;\n          transition: all .28s ease;\n          -webkit-user-select: none; }\n          #to_settlement .wash_cell .layout .right label:before, #to_settlement .wash_cell .layout .right label:after {\n            content: \"\";\n            width: 0.16rem;\n            height: 0.16rem;\n            box-sizing: border-box;\n            position: absolute;\n            right: -0.28rem;\n            top: 50%;\n            transform: translateY(-50%);\n            border: 2px solid rgba(0, 0, 0, 0.54);\n            border-radius: 50%; }\n          #to_settlement .wash_cell .layout .right label:after {\n            border: none;\n            background: rgba(0, 0, 0, 0.54); }\n    #to_settlement .wash_cell #pay_msg {\n      margin: 0.16rem 0.16rem 0.08rem; }\n  #to_settlement #billing {\n    width: 100%;\n    max-width: 5.4rem;\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.14rem 0.12rem 0.14rem 0.16rem;\n    font-size: 0.15rem;\n    bottom: 0rem;\n    border-top: 1px solid #e0e0e0;\n    background: #F8F8F8; }\n    #to_settlement #billing .to_billing {\n      padding: 0.04rem 0.27rem;\n      background: #000;\n      border-radius: 0.04rem;\n      color: #fff;\n      cursor: pointer;\n      border: none;\n      outline: none;\n      font-size: 0.15rem; }\n    #to_settlement #billing span {\n      color: red; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 192:
/*!***********************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/settlement/settlement.vue ***!
  \***********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            default_ad: null
	        };
	    },
	
	    methods: {
	        getSettle: function getSettle() {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/balance', { "token": "xtongtong", "openid": _base_data2.default.store.state.openId, "address_id": _base_data2.default.store.state.first_address }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                if (res.resp_code == 100) {
	                    if (!res.shopping_cart) {
	                        this.$route.router.go({ name: "shopCar" });
	                        return false;
	                    }
	                    _base_data2.default.store.changeSettleAddress(res.address.address_id);
	                    window.sessionStorage.now_address = res.address.address_id;
	                    this.default_ad = res.address.address_id;
	                    this.$set('get_settle', res);
	                }
	                console.log(res);
	            }, function (err) {
	                console.log(err);
	            });
	        },
	
	        jsApiCall: function jsApiCall(param) {
	            var _this = this;
	            //                alert(JSON.stringify(param));
	            WeixinJSBridge.invoke('getBrandWCPayRequest', param, function (res) {
	                //                            WeixinJSBridge.log(res.err_msg);
	                // alert(res.err_code+res.err_desc+res.err_msg);
	
	                _this.$http.post(_base_data2.default.store.state.baseUrl + 'WechatPay/notify', { "openid": openid2, "address_id": _this.get_settle.address.address_id, "out_trade_no": param.out_trade_no }, { "emulateJSON": true, "emulateHTTP": true }).then(function (str) {
	                    //                                alert(str.data+'*************');
	                    var str = JSON.parse(str.data);
	                    if (str.resp_code == 100) {
	                        //                                    alert('niahoooooooo');
	                        _this.$route.router.go({ 'name': 'toBeShipped' });
	                    } else {
	                        //                                    alert(JSON.stringify(str));
	                        _this.$route.router.go({ 'name': 'payfail', params: {
	                                "orderN": str.order.order_id,
	                                "time": str.order.time,
	                                "allPrice": str.order.all_price
	                            } });
	                    }
	                }, function (err) {
	                    alert('出错了' + err);
	                    console.log(err);
	                });
	            });
	        },
	        callpay: function callpay(param) {
	            if (typeof WeixinJSBridge == "undefined") {
	                if (document.addEventListener) {
	                    document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
	                } else if (document.attachEvent) {
	                    document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
	                    document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
	                }
	            } else {
	                this.jsApiCall(param);
	            }
	        },
	        go_pay: function go_pay() {
	            //去付款
	            if (!this.get_settle.address.address_id) {
	                alert('请选择地址');
	                return false;
	            }
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'WechatPay/getParam', { "openid": openid2 }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                //                    alert(res.data);
	                var res = JSON.parse(res.data);
	                if (res.resp_code) {
	                    alert('出错了，请稍后再试');
	                    return false;
	                }
	                this.callpay(res);
	            }, function (err) {
	                console.log(err);
	            });
	        }
	    },
	    ready: function ready() {
	        this.getSettle();
	    }
	};
	// </script>
	// <template>
	//     <div id="to_settlement" v-cloak>
	//         <div class="warning">
	//             <img src="../../../asset/imgs/ic_query_builder.svg" alt=""/>
	//             <span>请在 <span class="deadline">20:00</span> 内提交订单，时间结束后商品可能被抢完哦</span>
	//         </div>
	//
	//         <a v-link="{name:'chooseAd'}" class="adress">
	//             <div class="ad_icon">
	//                 <img class="s_icon" src="../../../asset/imgs/ic-loc.svg" alt=""/>
	//             </div>
	//
	//             <div v-if="default_ad"  class="receiver">
	//                 <p>
	//                     <span class="user">收货人: {{get_settle.address.name}}</span>
	//                     <span class="tel">{{get_settle.address.mobile}}</span>
	//                 </p>
	//
	//                 <p class="adre">
	//                     收货地址: {{get_settle.address.address_province+get_settle.address.address_city+get_settle.address.address_part+get_settle.address.address}}
	//                 </p>
	//
	//                <!-- <p class="id_num" v-if="get_settle.address.id_number">
	//                     身份证：{{get_settle.address.id_number}}
	//                 </p>-->
	//
	//             </div>
	//
	//             <div v-else class="receiver">
	//                     增加收货地址
	//             </div>
	//
	//             <div class="ad_icon">
	//                 <img class="s_icon" src="../../../asset/imgs/ic-chevron-right.svg" alt=""/>
	//             </div>
	//
	//         </a>
	//
	//         <div class="orders">
	//             <div class="order_item" v-for="orderItem in get_settle.shopping_cart">
	//                 <header>订单{{$index+1 }}: <span>时光传媒 杭州 发货 (包邮)</span></header>
	//                 <div class="sg_cells">
	//                     <div class="cell_g" v-for="item in orderItem.commodity">
	//                         <img v-cloak :src="item.commodity_title_img" alt=""/>
	//                         <div class="cell_g_m">
	//                             {{item.commodity_name}}
	//                         </div>
	//                         <div class="cell_g_r">
	//                             <p>￥ {{item.commodity_sale_price}}</p>
	//                             <p>x {{item.commodity_num}}</p>
	//                         </div>
	//                     </div>
	//                 </div>
	//                 <div class="cell">
	//                     <a href="javascript:void(0)">
	//                         <span>发货方式</span>
	//                         <p>
	//                             <span>快递 {{orderItem.express}}元</span>
	//                         </p>
	//                     </a>
	//
	//                     <a href="javascript:void(0)">
	//                         <span>订单总价</span>
	//                         <p>
	//                             <span>￥ {{orderItem.all_price}}</span>
	//                         </p>
	//                     </a>
	//
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div class="pay_method wash_cell">
	//             <p id="pay_msg">支付信息</p>
	//             <ul>
	//
	//                 <li class="layout">
	//                     <div class="left">
	//                         <img src="../../../asset/imgs/wechat-pay-copy.svg" alt=""/>
	//                         <span class="word pay_word">微信支付</span>
	//
	//                     </div>
	//
	//                     <div class="right">
	//                         <input type="radio" name="pay" checked value="1" id="wxpay"/>
	//                         <label for="wxpay">
	//                         </label>
	//                     </div>
	//                 </li>
	//             </ul>
	//         </div>
	//
	//         <div id="billing">
	//             <span class="total">总计 ￥ {{get_settle.all_price}}</span>
	//             <button class="to_billing" @click="go_pay">去付款</button>
	//         </div>
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #to_settlement{
	//         margin-bottom:0.7rem;
	//         .warning{
	//             padding:.1rem;
	//             border-bottom:1px solid rgba(0, 0, 0, 0.12);
	//             font-size:0.12rem;
	//             display: flex;
	//             align-items: center;
	//             img{
	//                 width:0.144rem;
	//                 margin-right: 0.08rem;
	//             }
	//
	//             span{
	//                 vertical-align: inherit;
	//                 .deadline{
	//                     color:red
	//                 }
	//             }
	//         }
	//
	//         .adress{
	//             background: #393a3f;
	//             padding: 0.12rem 0.16rem;
	//             color:#fff;
	//             display: flex;
	//             align-items: center;
	//             font-size:0.15rem;
	//             .ad_icon{
	//                 width:0.24rem;
	//             }
	//             .receiver{
	//                 margin:0 0.12rem;
	//                 flex:auto;
	//                 p:first-child{
	//                     margin-bottom: 0.04rem;
	//
	//                     span{
	//                         vertical-align:inherit;
	//                     }
	//                     .tel{
	//                         margin-left: 0.16rem;
	//                         font-size: 0.13rem;
	//                     }
	//                 }
	//
	//                 .adre,.id_num{
	//                     font-size: 0.123rem;
	//                 }
	//
	//             }
	//         }
	//
	//         .order_item{
	//             background:#fff;
	//             margin-bottom:0.16rem;
	//             header{
	//                 padding: 0.12rem 0.16rem 0.04rem;
	//                 span{
	//                     vertical-align: inherit;
	//                 }
	//             }
	//             .cell{
	//                 padding:0rem 0.12rem 0rem 0.16rem;
	//                 font-size:0.15rem;
	//                 border-bottom:1px solid #e0e0e0;
	//                 a{
	//                     margin-top: 0.14rem;
	//                     display: flex;
	//                     justify-content: space-between;
	//                     align-items: center;
	//                     padding-bottom:0.14rem;
	//                     border-bottom:1px solid #e0e0e0;
	//                     &:last-child{
	//                          border:none
	//                      }
	//                     p{
	//                         span{
	//                             color:rgba(0, 0, 0, 0.54)
	//                         }
	//                     }
	//                 }
	//             }
	//         }
	//
	//
	//
	//
	//
	//
	//     $radio_color:(1,#ff5777), (2,#FFAC16), (3,#7ED321) ,(4,#5ECEE3);
	//
	//
	//     %word{
	//          color:rgba(0, 0, 0, 0.54);
	//          font-size: 0.14rem;
	//      }
	//
	//     .wash_cell{
	//         background: #fff;
	//         border-bottom:1px solid rgba(0, 0, 0, 0.12);
	//         font-family:NotoSansCJKsc;
	//
	//     &.pay_method{
	//          border-top:1px solid  rgba(0, 0, 0, 0.12);
	//         margin-bottom: 0.7rem;
	//      }
	//
	//     .layout{
	//         font-size: 0.16rem;
	//         padding:0.1rem 0.16rem;
	//         display: flex;
	//         justify-content:space-between;
	//         align-items:center;
	//
	//     .left,.right{
	//         font-size:0;
	//     }
	//
	//     .left{
	//     img{
	//         width:0.24rem;
	//         height:0.24rem;
	//         margin-right: 0.16rem;
	//     }
	//     }
	//
	//     span,img{
	//         display:inline-block;
	//         vertical-align: middle;
	//     }
	//
	//     .right{
	//         cursor:pointer;
	//         margin-right:0.28rem;
	//     input{
	//         position:absolute;
	//         left: -9999px;
	//         opacity: 0;
	//
	//     &:not(:checked) + label:after{
	//          transform: scale(0) translateY(-100%);
	//      }
	//
	//     &:checked + label:after{
	//          transform: scale(0.5) translateY(-100%);
	//      }
	//     }
	//
	//     label{
	//         position: relative;
	//         transition:all .28s ease;
	//         -webkit-user-select: none;
	//
	//     &:before,&:after{
	//                   content: "";
	//                   width:0.16rem;
	//                   height:0.16rem;
	//                   box-sizing: border-box;
	//                   position: absolute;
	//                   right:-0.28rem;
	//                   top:50%;
	//                   transform: translateY(-50%);
	//                   border:2px solid rgba(0, 0, 0, 0.54);
	//                   border-radius: 50%;
	//               }
	//     &:after{
	//
	//          border:none;
	//          background: rgba(0, 0, 0, 0.54);
	//      }
	//     }
	//     }
	//
	//     }
	//
	//     #pay_msg{
	//     @extend %word;
	//         margin:0.16rem 0.16rem 0.08rem;
	//     }
	//     }
	//
	//
	//
	//     .pay_word{
	//     @extend %word;
	//     }
	//
	//     #billing{
	//         width:100%;
	//         max-width: 5.4rem;
	//         position: fixed;
	//         display: flex;
	//         align-items: center;
	//         justify-content: space-between;
	//         padding: 0.14rem 0.12rem 0.14rem 0.16rem;
	//         font-size:0.15rem;
	//         bottom:0rem;
	//         border-top:1px solid #e0e0e0;
	//         background:#F8F8F8;
	//     .to_billing{
	//         padding: 0.04rem 0.27rem;
	//         background: #000;
	//         border-radius: 0.04rem;
	//         color: #fff;
	//         cursor: pointer;
	//         border:none;
	//         outline:none;
	//         font-size: 0.15rem;
	//     }
	//
	//     span{
	//         color: red;
	//     }
	//
	//     }
	//
	//     }
	// </style>
	/* generated by vue-loader */
	// <!--购物车结算页面-->
	//
	// <script>

/***/ },

/***/ 193:
/*!****************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/settlement/settlement.vue ***!
  \****************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"to_settlement\" v-cloak>\n    <div class=\"warning\">\n        <img src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic_query_builder.svg */ 52) + "\" alt=\"\"/>\n        <span>请在 <span class=\"deadline\">20:00</span> 内提交订单，时间结束后商品可能被抢完哦</span>\n    </div>\n\n    <a v-link=\"{name:'chooseAd'}\" class=\"adress\">\n        <div class=\"ad_icon\">\n            <img class=\"s_icon\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic-loc.svg */ 194) + "\" alt=\"\"/>\n        </div>\n\n        <div v-if=\"default_ad\"  class=\"receiver\">\n            <p>\n                <span class=\"user\">收货人: {{get_settle.address.name}}</span>\n                <span class=\"tel\">{{get_settle.address.mobile}}</span>\n            </p>\n\n            <p class=\"adre\">\n                收货地址: {{get_settle.address.address_province+get_settle.address.address_city+get_settle.address.address_part+get_settle.address.address}}\n            </p>\n\n           <!-- <p class=\"id_num\" v-if=\"get_settle.address.id_number\">\n                身份证：{{get_settle.address.id_number}}\n            </p>-->\n\n        </div>\n\n        <div v-else class=\"receiver\">\n                增加收货地址\n        </div>\n\n        <div class=\"ad_icon\">\n            <img class=\"s_icon\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic-chevron-right.svg */ 195) + "\" alt=\"\"/>\n        </div>\n        \n    </a>\n\n    <div class=\"orders\">\n        <div class=\"order_item\" v-for=\"orderItem in get_settle.shopping_cart\">\n            <header>订单{{$index+1 }}: <span>时光传媒 杭州 发货 (包邮)</span></header>\n            <div class=\"sg_cells\">\n                <div class=\"cell_g\" v-for=\"item in orderItem.commodity\">\n                    <img v-cloak :src=\"item.commodity_title_img\" alt=\"\"/>\n                    <div class=\"cell_g_m\">\n                        {{item.commodity_name}}\n                    </div>\n                    <div class=\"cell_g_r\">\n                        <p>￥ {{item.commodity_sale_price}}</p>\n                        <p>x {{item.commodity_num}}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"cell\">\n                <a href=\"javascript:void(0)\">\n                    <span>发货方式</span>\n                    <p>\n                        <span>快递 {{orderItem.express}}元</span>\n                    </p>\n                </a>\n\n                <a href=\"javascript:void(0)\">\n                    <span>订单总价</span>\n                    <p>\n                        <span>￥ {{orderItem.all_price}}</span>\n                    </p>\n                </a>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"pay_method wash_cell\">\n        <p id=\"pay_msg\">支付信息</p>\n        <ul>\n\n            <li class=\"layout\">\n                <div class=\"left\">\n                    <img src=\"" + __webpack_require__(/*! ../../../asset/imgs/wechat-pay-copy.svg */ 196) + "\" alt=\"\"/>\n                    <span class=\"word pay_word\">微信支付</span>\n\n                </div>\n\n                <div class=\"right\">\n                    <input type=\"radio\" name=\"pay\" checked value=\"1\" id=\"wxpay\"/>\n                    <label for=\"wxpay\">\n                    </label>\n                </div>\n            </li>\n        </ul>\n    </div>\n\n    <div id=\"billing\">\n        <span class=\"total\">总计 ￥ {{get_settle.all_price}}</span>\n        <button class=\"to_billing\" @click=\"go_pay\">去付款</button>\n    </div>\n</div>\n";

/***/ },

/***/ 194:
/*!***********************************!*\
  !*** ./src/asset/imgs/ic-loc.svg ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic-loc.svg";

/***/ },

/***/ 195:
/*!*********************************************!*\
  !*** ./src/asset/imgs/ic-chevron-right.svg ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic-chevron-right.svg";

/***/ },

/***/ 196:
/*!********************************************!*\
  !*** ./src/asset/imgs/wechat-pay-copy.svg ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/wechat-pay-copy.svg";

/***/ }

});
//# sourceMappingURL=22.chunk.js.map