webpackJsonp([36,37],{

/***/ 196:
/*!********************************************!*\
  !*** ./src/asset/imgs/wechat-pay-copy.svg ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/wechat-pay-copy.svg";

/***/ },

/***/ 315:
/*!***********************************************!*\
  !*** ./src/js/page_vue/orders/direct_pay.vue ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./direct_pay.vue */ 316)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./direct_pay.vue */ 318)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\orders\\direct_pay.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./direct_pay.vue */ 319)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\orders\\direct_pay.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 316:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/orders/direct_pay.vue ***!
  \****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./direct_pay.vue */ 317);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./direct_pay.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./direct_pay.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 317:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/orders/direct_pay.vue ***!
  \*******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#direct_pay header {\n  background: #393a3f;\n  padding: 0.15rem 0.16rem;\n  color: #fff;\n  font-size: 0.15rem; }\n  #direct_pay header p {\n    text-align: center; }\n    #direct_pay header p:first-child {\n      margin-bottom: 0.1rem; }\n\n#direct_pay > p {\n  padding: 0.12rem 0.16rem; }\n\n#direct_pay .wx_pay {\n  padding: 0.14rem 0.16rem;\n  background: #fff;\n  font-size: 0.15rem;\n  color: rgba(0, 0, 0, 0.54); }\n  #direct_pay .wx_pay img {\n    margin-right: 0.16rem; }\n\n#direct_pay footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 0.17rem 0.16rem;\n  background: #fff;\n  width: 100%;\n  border-top: 0.01rem solid #e0e0e0;\n  font-size: 0.15rem; }\n  #direct_pay footer span:last-child {\n    float: right;\n    background: rgba(0, 0, 0, 0.87);\n    color: #fff;\n    padding: 0.04rem 0.2rem;\n    border-radius: 0.04rem; }\n", "", {"version":3,"sources":["/./src/js/page_vue/orders/direct_pay.vue"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,YAAY;EACZ,mBAAmB,EAAE;EACrB;IACE,mBAAmB,EAAE;IACrB;MACE,sBAAsB,EAAE;;AAE9B;EACE,yBAAyB,EAAE;;AAE7B;EACE,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,2BAA2B,EAAE;EAC7B;IACE,sBAAsB,EAAE;;AAE5B;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,kCAAkC;EAClC,mBAAmB,EAAE;EACrB;IACE,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,wBAAwB;IACxB,uBAAuB,EAAE","file":"direct_pay.vue","sourcesContent":["#direct_pay header {\n  background: #393a3f;\n  padding: 0.15rem 0.16rem;\n  color: #fff;\n  font-size: 0.15rem; }\n  #direct_pay header p {\n    text-align: center; }\n    #direct_pay header p:first-child {\n      margin-bottom: 0.1rem; }\n\n#direct_pay > p {\n  padding: 0.12rem 0.16rem; }\n\n#direct_pay .wx_pay {\n  padding: 0.14rem 0.16rem;\n  background: #fff;\n  font-size: 0.15rem;\n  color: rgba(0, 0, 0, 0.54); }\n  #direct_pay .wx_pay img {\n    margin-right: 0.16rem; }\n\n#direct_pay footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 0.17rem 0.16rem;\n  background: #fff;\n  width: 100%;\n  border-top: 0.01rem solid #e0e0e0;\n  font-size: 0.15rem; }\n  #direct_pay footer span:last-child {\n    float: right;\n    background: rgba(0, 0, 0, 0.87);\n    color: #fff;\n    padding: 0.04rem 0.2rem;\n    border-radius: 0.04rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 318:
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/orders/direct_pay.vue ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    methods: {
	        get_data: function get_data() {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/getOrderToBePaidPayPage', { "order_id": this.$route.params.orderId, "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                if (res.resp_code == 100) {
	                    this.$set('direct_pay_msg', res);
	                }
	            }, function (err) {
	                console.log(err);
	            });
	        },
	        jsApiCall: function jsApiCall(param) {
	            var _this = this;
	            //                alert(JSON.stringify(param));
	            WeixinJSBridge.invoke('getBrandWCPayRequest', param, function (res) {
	                //                            WeixinJSBridge.log(res.err_msg);
	                //                            alert(res.err_code+res.err_desc+res.err_msg);
	                //                            alert('么么哒');
	
	                _this.$http.post(_base_data2.default.store.state.baseUrl + 'WechatPay/orderNotify', { "openid": openid2, "order_id": _this.direct_pay_msg.order_id, "address_id": _this.direct_pay_msg.address_id, "out_trade_no": param.out_trade_no }, { "emulateJSON": true, "emulateHTTP": true }).then(function (str) {
	                    //                                alert(str.data+'/////////////');
	                    var str = JSON.parse(str.data);
	                    if (str.resp_code == 100) {
	                        //                                alert(7987987987897)
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
	        pay: function pay() {
	
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'WechatPay/getOrderParam', {
	                "order_id": this.direct_pay_msg.order_id,
	                "openid": openid2
	            }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	
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
	        this.get_data();
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <!--直接点击去付款的页面-->
	//
	// <template>
	//     <div id="direct_pay">
	//         <header>
	//             <p>订单总金额（含邮）</p>
	//             <p>￥ {{direct_pay_msg.all_price}}</p>
	//         </header>
	//
	//         <p>支付方式</p>
	//         <div class="wx_pay">
	//             <div>
	//                 <img src="../../../asset/imgs/wechat-pay-copy.svg" class="s_icon" alt=""/>
	//                 <span>微信支付</span>
	//             </div>
	//         </div>
	//
	//         <footer>
	//             <span>微信支付</span>
	//             <span @click="pay">去付款</span>
	//         </footer>
	//     </div>
	// </template>
	//
	//
	// <style lang="sass">
	//     #direct_pay{
	//         header{
	//             background:#393a3f ;
	//             padding:0.15rem 0.16rem;
	//             color:#fff;
	//             font-size:0.15rem;
	//
	//             p{
	//                 text-align: center;
	//                 &:first-child{
	//                     margin-bottom:0.1rem;
	//                  }
	//             }
	//         }
	//
	//     &>p{
	//         padding:0.12rem 0.16rem;
	//       }
	//
	//       .wx_pay{
	//           padding:0.14rem 0.16rem;
	//           background: #fff;
	//           font-size: 0.15rem;
	//             color:rgba(0, 0, 0, 0.54);
	//           img{
	//               margin-right:0.16rem;
	//           }
	//
	//       }
	//
	//         footer{
	//             position: fixed;
	//             bottom:0;
	//             left:0;
	//             padding:0.17rem 0.16rem;
	//             background: #fff;
	//             width:100%;
	//             border-top: 0.01rem solid #e0e0e0;
	//             font-size:0.15rem;
	//
	//             span:last-child{
	//                 float:right;
	//                 background:rgba(0, 0, 0, 0.87);
	//                 color:#fff;
	//                 padding:0.04rem 0.2rem;
	//                 border-radius:0.04rem;
	//             }
	//         }
	//
	//     }
	// </style>
	//
	//
	// <script>

/***/ },

/***/ 319:
/*!************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/orders/direct_pay.vue ***!
  \************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"direct_pay\">\n    <header>\n        <p>订单总金额（含邮）</p>\n        <p>￥ {{direct_pay_msg.all_price}}</p>\n    </header>\n\n    <p>支付方式</p>\n    <div class=\"wx_pay\">\n        <div>\n            <img src=\"" + __webpack_require__(/*! ../../../asset/imgs/wechat-pay-copy.svg */ 196) + "\" class=\"s_icon\" alt=\"\"/>\n            <span>微信支付</span>\n        </div>\n    </div>\n\n    <footer>\n        <span>微信支付</span>\n        <span @click=\"pay\">去付款</span>\n    </footer>\n</div>\n";

/***/ }

});
//# sourceMappingURL=36.chunk.js.map