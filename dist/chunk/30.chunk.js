webpackJsonp([30,37],{

/***/ 249:
/*!****************************************!*\
  !*** ./src/asset/imgs/ic-shipping.svg ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic-shipping.svg";

/***/ },

/***/ 256:
/*!***************************************************!*\
  !*** ./src/js/components/order_detail_header.vue ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !style!css!./../../../~/vue-loader/lib/style-rewriter.js!autoprefixer!sass!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./order_detail_header.vue */ 257)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../~/vue-loader/lib/selector.js?type=script&index=0!./order_detail_header.vue */ 259)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\order_detail_header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/vue-loader/lib/selector.js?type=template&index=0!./order_detail_header.vue */ 260)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\components\\order_detail_header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 257:
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js!./~/autoprefixer-loader!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/order_detail_header.vue ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/vue-loader/lib/style-rewriter.js!./../../../~/autoprefixer-loader!./../../../~/sass-loader!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./order_detail_header.vue */ 258);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./order_detail_header.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./order_detail_header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 258:
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/vue-loader/lib/style-rewriter.js!./~/autoprefixer-loader!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/order_detail_header.vue ***!
  \*************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#status {\n  background: #393a3f;\n  padding: 0.12rem 0 0.12rem 0.17rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 0.98rem;\n  color: #fff;\n  font-size: 0.15rem; }\n  #status img {\n    width: 0.24rem;\n    height: 0.24rem;\n    margin-right: 0.12rem; }\n  #status p.order_num {\n    font-size: 0.13rem; }\n    #status p.order_num span {\n      vertical-align: inherit; }\n  #status p.time {\n    margin: 0.08rem 0 0.04rem; }\n", ""]);
	
	// exports


/***/ },

/***/ 259:
/*!***********************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/order_detail_header.vue ***!
  \***********************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <section id="status" v-cloak >
	//         <p v-if="headermsg.state == '已取消'">
	//             <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
	//             <span>已取消</span>
	//         </p>
	//
	//         <p v-if="headermsg.state == '待付款'">
	//             <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
	//             <span>待付款</span>
	//         </p>
	//
	//         <p v-if="headermsg.state == '待发货'">
	//             <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
	//             <span>待发货</span>
	//         </p>
	//
	//         <p v-if="headermsg.state == '已发货'">
	//             <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
	//             <span>待收货</span>
	//         </p>
	//
	//         <p v-if="headermsg.state == '交易成功'">
	//             <img src="../../asset/imgs/ic-shipping.svg" alt=""/>
	//             <span>交易成功</span>
	//         </p>
	//
	//
	//         <p class="order_num">
	//             <span>{{'订单编号: ' + headermsg.order_number}}</span>
	//         </p>
	//
	//         <p class="time">
	//             {{headermsg.time}}
	//         </p>
	//     </section>
	// </template>
	//
	// <style>
	//     #status{
	//         background:#393a3f;
	//         padding:0.12rem 0 0.12rem 0.17rem;
	//         display: flex;
	//         flex-direction: column;
	//         height:0.98rem;
	//
	//         color:#fff;
	//         font-size:0.15rem;
	//
	//     img{
	//         width:0.24rem;
	//         height:0.24rem;
	//         margin-right: 0.12rem;
	//     }
	//
	//     p.order_num{
	//         font-size: 0.13rem;
	//     span{
	//         vertical-align: inherit;
	//     }
	//     }
	//
	//     p.time{
	//         margin:0.08rem 0 0.04rem;
	//     }
	//     }
	// </style>
	//
	// <script>
	exports.default = {
	    props: ['headermsg'],
	    ready: function ready() {
	        console.log(this.headermsg);
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },

/***/ 260:
/*!****************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/order_detail_header.vue ***!
  \****************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<section id=\"status\" v-cloak >\n    <p v-if=\"headermsg.state == '已取消'\">\n        <img src=\"" + __webpack_require__(/*! ../../asset/imgs/ic-shipping.svg */ 249) + "\" alt=\"\"/>\n        <span>已取消</span>\n    </p>\n\n    <p v-if=\"headermsg.state == '待付款'\">\n        <img src=\"" + __webpack_require__(/*! ../../asset/imgs/ic-shipping.svg */ 249) + "\" alt=\"\"/>\n        <span>待付款</span>\n    </p>\n\n    <p v-if=\"headermsg.state == '待发货'\">\n        <img src=\"" + __webpack_require__(/*! ../../asset/imgs/ic-shipping.svg */ 249) + "\" alt=\"\"/>\n        <span>待发货</span>\n    </p>\n\n    <p v-if=\"headermsg.state == '已发货'\">\n        <img src=\"" + __webpack_require__(/*! ../../asset/imgs/ic-shipping.svg */ 249) + "\" alt=\"\"/>\n        <span>待收货</span>\n    </p>\n\n    <p v-if=\"headermsg.state == '交易成功'\">\n        <img src=\"" + __webpack_require__(/*! ../../asset/imgs/ic-shipping.svg */ 249) + "\" alt=\"\"/>\n        <span>交易成功</span>\n    </p>\n\n\n    <p class=\"order_num\">\n        <span>{{'订单编号: ' + headermsg.order_number}}</span>\n    </p>\n\n    <p class=\"time\">\n        {{headermsg.time}}\n    </p>\n</section>\n";

/***/ },

/***/ 267:
/*!*******************************************!*\
  !*** ./src/js/components/receive_msg.vue ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./receive_msg.vue */ 268)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../~/vue-loader/lib/selector.js?type=script&index=0!./receive_msg.vue */ 270)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\receive_msg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/vue-loader/lib/selector.js?type=template&index=0!./receive_msg.vue */ 271)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\components\\receive_msg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 268:
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/receive_msg.vue ***!
  \************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!./../../../~/sass-loader!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./receive_msg.vue */ 269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./receive_msg.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./receive_msg.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 269:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/receive_msg.vue ***!
  \***************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#receive_msg {\n  margin-top: 0.12rem;\n  background: #fff;\n  font-size: 0.13rem;\n  border: 1px solid #e0e0e0;\n  border-width: 1px 0; }\n  #receive_msg .add_t {\n    padding: 0.09rem 0.17rem;\n    border-bottom: 1px solid #e0e0e0;\n    font-size: 0.15rem; }\n  #receive_msg div {\n    padding: 0.12rem 0.17rem; }\n    #receive_msg div p:first-child {\n      margin-bottom: 0.04rem; }\n      #receive_msg div p:first-child span:first-child {\n        margin-right: 0.16rem; }\n", "", {"version":3,"sources":["/./src/js/components/receive_msg.vue"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,0BAA0B;EAC1B,oBAAoB,EAAE;EACtB;IACE,yBAAyB;IACzB,iCAAiC;IACjC,mBAAmB,EAAE;EACvB;IACE,yBAAyB,EAAE;IAC3B;MACE,uBAAuB,EAAE;MACzB;QACE,sBAAsB,EAAE","file":"receive_msg.vue","sourcesContent":["#receive_msg {\n  margin-top: 0.12rem;\n  background: #fff;\n  font-size: 0.13rem;\n  border: 1px solid #e0e0e0;\n  border-width: 1px 0; }\n  #receive_msg .add_t {\n    padding: 0.09rem 0.17rem;\n    border-bottom: 1px solid #e0e0e0;\n    font-size: 0.15rem; }\n  #receive_msg div {\n    padding: 0.12rem 0.17rem; }\n    #receive_msg div p:first-child {\n      margin-bottom: 0.04rem; }\n      #receive_msg div p:first-child span:first-child {\n        margin-right: 0.16rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 270:
/*!***************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/receive_msg.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <!--收货信息-->
	// <template>
	//     <div id="receive_msg">
	//         <p class="add_t">收货信息</p>
	//         <div>
	//             <p><span>{{receivemsg.name}}</span><span>{{receivemsg.mobile}}</span></p>
	//             <p>{{receivemsg.address}}</p>
	//         </div>
	//     </div>
	// </template>
	//
	//
	// <style lang="sass">
	//     #receive_msg{
	//         margin-top: 0.12rem;
	//         background:#fff;
	//         font-size: 0.13rem;
	//         border:1px solid #e0e0e0;
	//         border-width:1px 0;
	//
	//         .add_t{
	//             padding:0.09rem 0.17rem;
	//             border-bottom:1px solid #e0e0e0;
	//             font-size:0.15rem;
	//         }
	//         div{
	//             padding:0.12rem 0.17rem;
	//             p:first-child{
	//                 margin-bottom: 0.04rem;
	//                 span:first-child{
	//                     margin-right: 0.16rem;
	//                 }
	//             }
	//         }
	//
	//     }
	// </style>
	//
	// <script>
	exports.default = {
	    props: ['receivemsg'],
	    ready: function ready() {}
	};
	// </script>
	/* generated by vue-loader */

/***/ },

/***/ 271:
/*!********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/receive_msg.vue ***!
  \********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div id=\"receive_msg\">\n    <p class=\"add_t\">收货信息</p>\n    <div>\n        <p><span>{{receivemsg.name}}</span><span>{{receivemsg.mobile}}</span></p>\n        <p>{{receivemsg.address}}</p>\n    </div>\n</div>\n";

/***/ },

/***/ 278:
/*!************************************************!*\
  !*** ./src/js/page_vue/orders/has_success.vue ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./has_success.vue */ 279)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\orders\\has_success.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./has_success.vue */ 290)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\orders\\has_success.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 279:
/*!********************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/orders/has_success.vue ***!
  \********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	var _order_detail_header = __webpack_require__(/*! ../../components/order_detail_header.vue */ 256);
	
	var _order_detail_header2 = _interopRequireDefault(_order_detail_header);
	
	var _receive_msg = __webpack_require__(/*! ../../components/receive_msg.vue */ 267);
	
	var _receive_msg2 = _interopRequireDefault(_receive_msg);
	
	var _order_goods_msg = __webpack_require__(/*! ../../components/order_goods_msg.vue */ 280);
	
	var _order_goods_msg2 = _interopRequireDefault(_order_goods_msg);
	
	var _logistics = __webpack_require__(/*! ../../components/logistics.vue */ 285);
	
	var _logistics2 = _interopRequireDefault(_logistics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            /*            order_header:{
	                            "order_id":"O00000057EAGPW4Q",
	                            "time": "2016-07-15 02:23:58",
	                            "state": "交易成功",
	                            "order_number": "2016071510151545",
	                            "address_id":"A00000057CXHNNWR"
	                        }*/
	        };
	    },
	
	    components: { orderHeaderTpl: _order_detail_header2.default, receiveMsg: _receive_msg2.default, orderGoodsMsg: _order_goods_msg2.default, logisticsPart: _logistics2.default },
	    methods: {
	        get_data: function get_data() {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/getOrderInfo', { "order_id": this.$route.params.orderId, "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                if (res.resp_code == 100) {
	                    res.delivery.list = res.delivery.list.reverse();
	                    this.$set('order_header', res);
	                }
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
	// <!--交易成功详情-->
	//
	// <template>
	//     <div id="success_del">
	//         <order-header-tpl :headermsg.sync="order_header.info"></order-header-tpl>
	//         <logistics-part :logistics_msg.sync="order_header.delivery"></logistics-part>
	//         <receive-msg :receivemsg.sync="order_header.address"></receive-msg>
	//         <order-goods-msg  :goods_msg.sync="order_header.order" :money_msg.sync="order_header.info"></order-goods-msg>
	//     </div>
	// </template>
	//
	// <script>

/***/ },

/***/ 280:
/*!***********************************************!*\
  !*** ./src/js/components/order_goods_msg.vue ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./order_goods_msg.vue */ 281)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../~/vue-loader/lib/selector.js?type=script&index=0!./order_goods_msg.vue */ 283)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\order_goods_msg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/vue-loader/lib/selector.js?type=template&index=0!./order_goods_msg.vue */ 284)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\components\\order_goods_msg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 281:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/order_goods_msg.vue ***!
  \****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!./../../../~/sass-loader!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./order_goods_msg.vue */ 282);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./order_goods_msg.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./order_goods_msg.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 282:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/order_goods_msg.vue ***!
  \*******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ".order_goods_msg {\n  margin-top: 0.12rem;\n  background: #fff;\n  font-size: 0.13rem;\n  border: 1px solid #e0e0e0;\n  border-width: 1px 0;\n  margin-bottom: 0.5rem; }\n  .order_goods_msg .msg_title {\n    font-size: 0.15rem;\n    padding: 0.07rem 0.12rem 0.07rem 0.17rem;\n    border-bottom: 1px solid #e0e0e0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    white-space: nowrap; }\n    .order_goods_msg .msg_title span {\n      font-size: 0.13rem;\n      margin-left: 0.04rem;\n      text-overflow: ellipsis;\n      width: calc(70%);\n      overflow: hidden; }\n  .order_goods_msg .sg_cells .re_cell {\n    margin: 0 0.12rem 0 0.17rem;\n    padding: 0.12rem 0;\n    border-bottom: 0.01rem solid #e0e0e0; }\n    .order_goods_msg .sg_cells .re_cell:last-child {\n      border: none; }\n    .order_goods_msg .sg_cells .re_cell .cell_g {\n      margin: 0;\n      padding: 0;\n      border: none; }\n  .order_goods_msg .sg_cells .refund_btn {\n    text-align: right; }\n    .order_goods_msg .sg_cells .refund_btn button {\n      background: transparent;\n      border: 0.01rem solid red;\n      font-size: 0.15rem;\n      color: red;\n      padding: 0.03rem .06rem; }\n  .order_goods_msg .cell {\n    background: #fff;\n    padding: 0rem 0.12rem 0rem 0.16rem;\n    font-size: 0.15rem; }\n    .order_goods_msg .cell a {\n      margin-top: 0.14rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding-bottom: 0.14rem;\n      border-bottom: 1px solid #e0e0e0; }\n      .order_goods_msg .cell a:last-child {\n        border: none; }\n      .order_goods_msg .cell a p span {\n        color: rgba(0, 0, 0, 0.54); }\n", "", {"version":3,"sources":["/./src/js/components/order_goods_msg.vue"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,0BAA0B;EAC1B,oBAAoB;EACpB,sBAAsB,EAAE;EACxB;IACE,mBAAmB;IACnB,yCAAyC;IACzC,iCAAiC;IACjC,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,oBAAoB,EAAE;IACtB;MACE,mBAAmB;MACnB,qBAAqB;MACrB,wBAAwB;MACxB,iBAAiB;MACjB,iBAAiB,EAAE;EACvB;IACE,4BAA4B;IAC5B,mBAAmB;IACnB,qCAAqC,EAAE;IACvC;MACE,aAAa,EAAE;IACjB;MACE,UAAU;MACV,WAAW;MACX,aAAa,EAAE;EACnB;IACE,kBAAkB,EAAE;IACpB;MACE,wBAAwB;MACxB,0BAA0B;MAC1B,mBAAmB;MACnB,WAAW;MACX,wBAAwB,EAAE;EAC9B;IACE,iBAAiB;IACjB,mCAAmC;IACnC,mBAAmB,EAAE;IACrB;MACE,oBAAoB;MACpB,qBAAc;MAAd,qBAAc;MAAd,cAAc;MACd,0BAA+B;UAA/B,uBAA+B;cAA/B,+BAA+B;MAC/B,0BAAoB;UAApB,uBAAoB;cAApB,oBAAoB;MACpB,wBAAwB;MACxB,iCAAiC,EAAE;MACnC;QACE,aAAa,EAAE;MACjB;QACE,2BAA2B,EAAE","file":"order_goods_msg.vue","sourcesContent":[".order_goods_msg {\n  margin-top: 0.12rem;\n  background: #fff;\n  font-size: 0.13rem;\n  border: 1px solid #e0e0e0;\n  border-width: 1px 0;\n  margin-bottom: 0.5rem; }\n  .order_goods_msg .msg_title {\n    font-size: 0.15rem;\n    padding: 0.07rem 0.12rem 0.07rem 0.17rem;\n    border-bottom: 1px solid #e0e0e0;\n    display: flex;\n    align-items: center;\n    white-space: nowrap; }\n    .order_goods_msg .msg_title span {\n      font-size: 0.13rem;\n      margin-left: 0.04rem;\n      text-overflow: ellipsis;\n      width: calc(70%);\n      overflow: hidden; }\n  .order_goods_msg .sg_cells .re_cell {\n    margin: 0 0.12rem 0 0.17rem;\n    padding: 0.12rem 0;\n    border-bottom: 0.01rem solid #e0e0e0; }\n    .order_goods_msg .sg_cells .re_cell:last-child {\n      border: none; }\n    .order_goods_msg .sg_cells .re_cell .cell_g {\n      margin: 0;\n      padding: 0;\n      border: none; }\n  .order_goods_msg .sg_cells .refund_btn {\n    text-align: right; }\n    .order_goods_msg .sg_cells .refund_btn button {\n      background: transparent;\n      border: 0.01rem solid red;\n      font-size: 0.15rem;\n      color: red;\n      padding: 0.03rem .06rem; }\n  .order_goods_msg .cell {\n    background: #fff;\n    padding: 0rem 0.12rem 0rem 0.16rem;\n    font-size: 0.15rem; }\n    .order_goods_msg .cell a {\n      margin-top: 0.14rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-bottom: 0.14rem;\n      border-bottom: 1px solid #e0e0e0; }\n      .order_goods_msg .cell a:last-child {\n        border: none; }\n      .order_goods_msg .cell a p span {\n        color: rgba(0, 0, 0, 0.54); }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 283:
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/order_goods_msg.vue ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['goods_msg', 'money_msg'],
	    methods: {
	        to_refuns: function to_refuns(order_id, item) {
	            this.$route.router.go({ 'name': 'refund', params: { 'orderId': order_id, 'commodityId': item.commodity_id } });
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <!--订单详情里的商品信息-->
	//
	// <template>
	//     <div class="order_goods_msg">
	//         <section class="goods_msg">
	//             <p class="msg_title">商品信息 <span>{{money_msg.delivery_company}}发货</span></p>
	//             <div class="sg_cells">
	//                 <div class="re_cell" v-for="goods in goods_msg.commodity">
	//                     <div  class="cell_g">
	//                         <img :src="goods.commodity_title_img" alt=""/>
	//                         <div class="cell_g_m">
	//                             {{goods.commodity_name}}
	//                         </div>
	//                         <div class="cell_g_r">
	//                             <p>￥ {{goods.commodity_sale_price}}</p>
	//                             <p>x {{goods.commodity_num}}</p>
	//                         </div>
	//                     </div>
	//                     <div class="refund_btn"><button @click="to_refuns(money_msg.order_id,goods)">申请退款</button></div>
	//                 </div>
	//             </div>
	//             <div class="cell">
	//                 <a href="javascript:void(0)">
	//                     <span>发货方式</span>
	//                     <p>
	//                         <span>{{money_msg.delivery_way}} {{money_msg.express}}元</span>
	//                     </p>
	//                 </a>
	//
	//                 <a href="javascript:void(0)">
	//                     <span>订单总价</span>
	//                     <p>
	//                         <span>￥ {{money_msg.all_price}}</span>
	//                     </p>
	//                 </a>
	//
	//             </div>
	//         </section>
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     .order_goods_msg{
	//         margin-top: 0.12rem;
	//         background:#fff;
	//         font-size: 0.13rem;
	//         border:1px solid #e0e0e0;
	//         border-width:1px 0;
	//         margin-bottom:0.5rem;
	//         .msg_title{
	//             font-size:0.15rem;
	//             padding:0.07rem 0.12rem 0.07rem 0.17rem;
	//             border-bottom:1px solid #e0e0e0;
	//             display: flex;
	//             align-items: center;
	//             white-space:nowrap;
	//
	//             span{
	//                 font-size: 0.13rem;
	//                 margin-left:0.04rem;
	//                 text-overflow:ellipsis;
	//                 width:calc(70%);
	//                 overflow: hidden;
	//             }
	//         }
	//
	//     .sg_cells{
	//         .re_cell{
	//             margin: 0 0.12rem 0 0.17rem;
	//             padding: 0.12rem 0;
	//             border-bottom: 0.01rem solid #e0e0e0;
	//
	//             &:last-child{
	//                 border:none;
	//              };
	//             .cell_g{
	//                 margin:0;
	//                 padding:0;
	//                 border:none;
	//             }
	//
	//
	//         }
	//         .refund_btn{
	//             text-align:right;
	//             button{
	//                 background: transparent;
	//                 border:0.01rem solid red;
	//                 font-size: 0.15rem;
	//                 color:red;
	//                 padding:0.03rem .06rem;
	//             }
	//         }
	//     }
	//
	//     .cell{
	//         background:#fff;
	//         padding:0rem 0.12rem 0rem 0.16rem;
	//         font-size:0.15rem;
	//         a{
	//             margin-top: 0.14rem;
	//             display: flex;
	//             justify-content: space-between;
	//             align-items: center;
	//             padding-bottom:0.14rem;
	//             border-bottom:1px solid #e0e0e0;
	//             &:last-child{
	//                  border:none
	//              }
	//             p{
	//                 span{
	//                     color:rgba(0, 0, 0, 0.54)
	//                 }
	//             }
	//         }
	//         }
	//     }
	// </style>
	//
	// <script>

/***/ },

/***/ 284:
/*!************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/order_goods_msg.vue ***!
  \************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div class=\"order_goods_msg\">\n    <section class=\"goods_msg\">\n        <p class=\"msg_title\">商品信息 <span>{{money_msg.delivery_company}}发货</span></p>\n        <div class=\"sg_cells\">\n            <div class=\"re_cell\" v-for=\"goods in goods_msg.commodity\">\n                <div  class=\"cell_g\">\n                    <img :src=\"goods.commodity_title_img\" alt=\"\"/>\n                    <div class=\"cell_g_m\">\n                        {{goods.commodity_name}}\n                    </div>\n                    <div class=\"cell_g_r\">\n                        <p>￥ {{goods.commodity_sale_price}}</p>\n                        <p>x {{goods.commodity_num}}</p>\n                    </div>\n                </div>\n                <div class=\"refund_btn\"><button @click=\"to_refuns(money_msg.order_id,goods)\">申请退款</button></div>\n            </div>\n        </div>\n        <div class=\"cell\">\n            <a href=\"javascript:void(0)\">\n                <span>发货方式</span>\n                <p>\n                    <span>{{money_msg.delivery_way}} {{money_msg.express}}元</span>\n                </p>\n            </a>\n\n            <a href=\"javascript:void(0)\">\n                <span>订单总价</span>\n                <p>\n                    <span>￥ {{money_msg.all_price}}</span>\n                </p>\n            </a>\n\n        </div>\n    </section>\n</div>\n";

/***/ },

/***/ 285:
/*!*****************************************!*\
  !*** ./src/js/components/logistics.vue ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./logistics.vue */ 286)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../~/vue-loader/lib/selector.js?type=script&index=0!./logistics.vue */ 288)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\logistics.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/vue-loader/lib/selector.js?type=template&index=0!./logistics.vue */ 289)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\components\\logistics.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 286:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/logistics.vue ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!./../../../~/sass-loader!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./logistics.vue */ 287);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./logistics.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./logistics.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 287:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/logistics.vue ***!
  \*************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#logistics_part .msg {\n  margin-top: 0.12rem;\n  background: #fff;\n  font-size: 0.13rem;\n  border: 1px solid #e0e0e0;\n  border-width: 1px 0; }\n\n#logistics_part .msg span {\n  vertical-align: inherit; }\n\n#logistics_part .msg .msg_title {\n  font-size: 0.15rem;\n  padding: 0.07rem 0.12rem 0.11rem 0.17rem;\n  border-bottom: 1px solid #e0e0e0; }\n  #logistics_part .msg .msg_title span {\n    font-size: 0.13rem;\n    float: right; }\n\n#logistics_part .msg div {\n  margin: 0.12rem 0.16rem 0.08rem;\n  padding-bottom: 0.08rem;\n  border-bottom: 1px solid #e0e0e0; }\n  #logistics_part .msg div li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    white-space: nowrap; }\n    #logistics_part .msg div li span:first-child {\n      margin-right: 0.12rem;\n      min-width: 1.2rem; }\n    #logistics_part .msg div li p {\n      white-space: normal; }\n\n#logistics_part .msg .more {\n  margin: 0.12rem;\n  text-align: center;\n  font-size: 0.15rem;\n  color: rgba(0, 0, 0, 0.54); }\n", "", {"version":3,"sources":["/./src/js/components/logistics.vue"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,0BAA0B;EAC1B,oBAAoB,EAAE;;AAExB;EACE,wBAAwB,EAAE;;AAE5B;EACE,mBAAmB;EACnB,yCAAyC;EACzC,iCAAiC,EAAE;EACnC;IACE,mBAAmB;IACnB,aAAa,EAAE;;AAEnB;EACE,gCAAgC;EAChC,wBAAwB;EACxB,iCAAiC,EAAE;EACnC;IACE,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,oBAAoB,EAAE;IACtB;MACE,sBAAsB;MACtB,kBAAkB,EAAE;IACtB;MACE,oBAAoB,EAAE;;AAE5B;EACE,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B,EAAE","file":"logistics.vue","sourcesContent":["#logistics_part .msg {\n  margin-top: 0.12rem;\n  background: #fff;\n  font-size: 0.13rem;\n  border: 1px solid #e0e0e0;\n  border-width: 1px 0; }\n\n#logistics_part .msg span {\n  vertical-align: inherit; }\n\n#logistics_part .msg .msg_title {\n  font-size: 0.15rem;\n  padding: 0.07rem 0.12rem 0.11rem 0.17rem;\n  border-bottom: 1px solid #e0e0e0; }\n  #logistics_part .msg .msg_title span {\n    font-size: 0.13rem;\n    float: right; }\n\n#logistics_part .msg div {\n  margin: 0.12rem 0.16rem 0.08rem;\n  padding-bottom: 0.08rem;\n  border-bottom: 1px solid #e0e0e0; }\n  #logistics_part .msg div li {\n    display: flex;\n    white-space: nowrap; }\n    #logistics_part .msg div li span:first-child {\n      margin-right: 0.12rem;\n      min-width: 1.2rem; }\n    #logistics_part .msg div li p {\n      white-space: normal; }\n\n#logistics_part .msg .more {\n  margin: 0.12rem;\n  text-align: center;\n  font-size: 0.15rem;\n  color: rgba(0, 0, 0, 0.54); }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 288:
/*!*************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/logistics.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div id="logistics_part">
	//         <section class="msg">
	//             <p class="msg_title">物流信息 <span>{{logistics_msg.company}} {{logistics_msg.no}}</span></p>
	//             <div>
	//                 <ul>
	//                     <li v-for="item in logistics_msg.list">
	//                         <span>{{item.datetime}}</span><p>{{item.remark}}</p>
	//                     </li>
	//
	//                 </ul>
	//
	//             </div>
	//
	//             <p @click="go_logistics" class="more">
	//                 查看更多信息...
	//             </p>
	//         </section>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    props: ['logistics_msg'],
	    methods: {
	        go_logistics: function go_logistics() {
	            this.$route.router.go({ 'name': 'watchLogistics', params: { "orderId": this.$route.params.orderId } });
	            //                console.log();
	        }
	    },
	    ready: function ready() {}
	};
	// </script>
	//
	// <style lang="sass">
	//     #logistics_part{
	//
	//     %s{
	//          margin-top: 0.12rem;
	//          background:#fff;
	//          font-size: 0.13rem;
	//          border:1px solid #e0e0e0;
	//          border-width:1px 0;
	//      }
	//
	//     .msg{
	//     @extend %s;
	//     span{
	//         vertical-align: inherit;
	//     }
	//
	//     .msg_title{
	//         font-size:0.15rem;
	//         padding:0.07rem 0.12rem 0.11rem 0.17rem;
	//         border-bottom:1px solid #e0e0e0;
	//     span{
	//         font-size: 0.13rem;
	//         float: right;
	//     }
	//     }
	//
	//     div{
	//         margin:0.12rem 0.16rem 0.08rem;
	//         padding-bottom:0.08rem;
	//         border-bottom:1px solid #e0e0e0;
	//     li{
	//         display: flex;
	//         white-space:nowrap;
	//
	//     span:first-child{
	//         margin-right: 0.12rem;
	//         min-width:1.2rem;
	//     }
	//     p{
	//         white-space: normal;
	//     }
	//     }
	//     }
	//
	//     .more{
	//         margin:0.12rem;
	//         text-align: center;
	//         font-size: 0.15rem;
	//         color:rgba(0, 0, 0, 0.54);
	//     }
	//     }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },

/***/ 289:
/*!******************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/logistics.vue ***!
  \******************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div id=\"logistics_part\">\n    <section class=\"msg\">\n        <p class=\"msg_title\">物流信息 <span>{{logistics_msg.company}} {{logistics_msg.no}}</span></p>\n        <div>\n            <ul>\n                <li v-for=\"item in logistics_msg.list\">\n                    <span>{{item.datetime}}</span><p>{{item.remark}}</p>\n                </li>\n\n            </ul>\n\n        </div>\n\n        <p @click=\"go_logistics\" class=\"more\">\n            查看更多信息...\n        </p>\n    </section>\n</div>\n";

/***/ },

/***/ 290:
/*!*************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/orders/has_success.vue ***!
  \*************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div id=\"success_del\">\n    <order-header-tpl :headermsg.sync=\"order_header.info\"></order-header-tpl>\n    <logistics-part :logistics_msg.sync=\"order_header.delivery\"></logistics-part>\n    <receive-msg :receivemsg.sync=\"order_header.address\"></receive-msg>\n    <order-goods-msg  :goods_msg.sync=\"order_header.order\" :money_msg.sync=\"order_header.info\"></order-goods-msg>\n</div>\n";

/***/ }

});
//# sourceMappingURL=30.chunk.js.map