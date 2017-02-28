webpackJsonp([17,37],{

/***/ 151:
/*!**********************************************************!*\
  !*** ./src/js/page_vue/user/fans_sell/forder_detail.vue ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../../~/vue-loader/lib/selector.js?type=style&index=0!./forder_detail.vue */ 152)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../../~/vue-loader/lib/selector.js?type=script&index=0!./forder_detail.vue */ 154)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\user\\fans_sell\\forder_detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../../~/vue-loader/lib/selector.js?type=template&index=0!./forder_detail.vue */ 155)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\user\\fans_sell\\forder_detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 152:
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/user/fans_sell/forder_detail.vue ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../../~/css-loader?sourceMap!./../../../../../~/vue-loader/lib/style-rewriter.js!./../../../../../~/sass-loader!./../../../../../~/vue-loader/lib/selector.js?type=style&index=0!./forder_detail.vue */ 153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./forder_detail.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./forder_detail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 153:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/user/fans_sell/forder_detail.vue ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#order_detail {\n  padding: 0 0.16rem .08rem;\n  font-size: 0.12rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background: #fff; }\n  #order_detail p:first-child {\n    padding: 0.2rem 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    margin-bottom: 0.08rem; }\n    #order_detail p:first-child .l {\n      font-size: 0.15rem; }\n    #order_detail p:first-child .r {\n      font-size: 0.2rem;\n      color: #4caf50;\n      float: right; }\n  #order_detail p:nth-of-type(n+2) {\n    padding: 0.08rem 0; }\n    #order_detail p:nth-of-type(n+2) .r {\n      float: right; }\n", "", {"version":3,"sources":["/./src/js/page_vue/user/fans_sell/forder_detail.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,6CAA6C;EAC7C,iBAAiB,EAAE;EACnB;IACE,kBAAkB;IAClB,6CAA6C;IAC7C,uBAAuB,EAAE;IACzB;MACE,mBAAmB,EAAE;IACvB;MACE,kBAAkB;MAClB,eAAe;MACf,aAAa,EAAE;EACnB;IACE,mBAAmB,EAAE;IACrB;MACE,aAAa,EAAE","file":"forder_detail.vue","sourcesContent":["#order_detail {\n  padding: 0 0.16rem .08rem;\n  font-size: 0.12rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background: #fff; }\n  #order_detail p:first-child {\n    padding: 0.2rem 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    margin-bottom: 0.08rem; }\n    #order_detail p:first-child .l {\n      font-size: 0.15rem; }\n    #order_detail p:first-child .r {\n      font-size: 0.2rem;\n      color: #4caf50;\n      float: right; }\n  #order_detail p:nth-of-type(n+2) {\n    padding: 0.08rem 0; }\n    #order_detail p:nth-of-type(n+2) .r {\n      float: right; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 154:
/*!******************************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/user/fans_sell/forder_detail.vue ***!
  \******************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../../../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    methods: {
	        getOrderMsg: function getOrderMsg() {
	
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/fansOrderInfo', { "order_id": this.$route.params.orderId, "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                console.log(res);
	                var res = JSON.parse(res.data);
	
	                if (res.resp_code == '100') {
	                    this.$set('orderMsg', res.orders);
	                }
	            }, function (err) {
	                console.log(err);
	            });
	        }
	    },
	    ready: function ready() {
	        this.getOrderMsg();
	    }
	};
	// </script>
	//
	//
	// <template>
	//     <div id="order_detail">
	//         <p>
	//             <span class="l">累计</span>
	//             <span class="r">￥ {{orderMsg.valuble_money}}</span>
	//         </p>
	//
	//         <p>
	//             <span class="l">订单号</span>
	//             <span class="r">{{orderMsg.order_number}}</span>
	//         </p>
	//
	//         <p>
	//             <span class="l">订单状态</span>
	//             <span class="r">{{orderMsg.state}}</span>
	//         </p>
	//
	//         <p>
	//             <span class="l">下单时间</span>
	//             <span class="r">{{orderMsg.time}}</span>
	//         </p>
	//
	//         <p>
	//             <span class="l">订单金额</span>
	//             <span class="r">￥{{orderMsg.money}}</span>
	//         </p>
	//
	//         <p>
	//             <span class="l">粉丝昵称</span>
	//             <span class="r">{{orderMsg.name}}</span>
	//         </p>
	//
	//         <p>
	//             <span class="l">粉丝 ID</span>
	//             <span class="r">{{orderMsg.id}}</span>
	//         </p>
	//
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #order_detail{
	//         padding:0 0.16rem .08rem;
	//         font-size:0.12rem;
	//         border-bottom:1px solid rgba(0,0,0,.12);
	//         background:#fff;
	//
	//     p:first-child{
	//         padding:0.2rem 0;
	//         border-bottom:1px solid rgba(0,0,0,.12);
	//         margin-bottom:0.08rem;
	//     .l{
	//         font-size: 0.15rem;
	//     }
	//     .r{
	//         font-size: 0.2rem;
	//         color: #4caf50;
	//         float: right;
	//     }
	//     }
	//
	//     p:nth-of-type(n+2){
	//         padding:0.08rem 0;
	//     .r{
	//         float:right
	//     }
	//     }
	//     }
	// </style>
	/* generated by vue-loader */
	// <!--粉丝销量详情-->
	// <script>

/***/ },

/***/ 155:
/*!***********************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/user/fans_sell/forder_detail.vue ***!
  \***********************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div id=\"order_detail\">\n    <p>\n        <span class=\"l\">累计</span>\n        <span class=\"r\">￥ {{orderMsg.valuble_money}}</span>\n    </p>\n\n    <p>\n        <span class=\"l\">订单号</span>\n        <span class=\"r\">{{orderMsg.order_number}}</span>\n    </p>\n\n    <p>\n        <span class=\"l\">订单状态</span>\n        <span class=\"r\">{{orderMsg.state}}</span>\n    </p>\n\n    <p>\n        <span class=\"l\">下单时间</span>\n        <span class=\"r\">{{orderMsg.time}}</span>\n    </p>\n\n    <p>\n        <span class=\"l\">订单金额</span>\n        <span class=\"r\">￥{{orderMsg.money}}</span>\n    </p>\n\n    <p>\n        <span class=\"l\">粉丝昵称</span>\n        <span class=\"r\">{{orderMsg.name}}</span>\n    </p>\n\n    <p>\n        <span class=\"l\">粉丝 ID</span>\n        <span class=\"r\">{{orderMsg.id}}</span>\n    </p>\n\n</div>\n";

/***/ }

});
//# sourceMappingURL=17.chunk.js.map