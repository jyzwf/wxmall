webpackJsonp([7,37],{

/***/ 65:
/*!*****************************************!*\
  !*** ./src/js/components/order_tpl.vue ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./order_tpl.vue */ 66)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../~/vue-loader/lib/selector.js?type=script&index=0!./order_tpl.vue */ 68)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\order_tpl.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/vue-loader/lib/selector.js?type=template&index=0!./order_tpl.vue */ 69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\components\\order_tpl.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 66:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/order_tpl.vue ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!./../../../~/sass-loader!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./order_tpl.vue */ 67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./order_tpl.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./order_tpl.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 67:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/order_tpl.vue ***!
  \*************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#order_tpl .header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 0.13rem; }\n  #order_tpl .header .order_state {\n    padding: 0.1rem 0.16rem;\n    border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n#order_tpl .order_list {\n  margin-bottom: 0.16rem;\n  background: #fff; }\n\n#order_tpl .order_time {\n  margin-left: 0.16rem; }\n\n#order_tpl .footer {\n  text-align: right;\n  padding: 0.1rem 0.12rem;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.15rem; }\n  #order_tpl .footer div {\n    display: inline-block; }\n  #order_tpl .footer button {\n    border: 1px solid rgba(0, 0, 0, 0.84);\n    background: transparent;\n    vertical-align: middle;\n    outline: none;\n    padding: 0.03rem 0.06rem;\n    border-radius: .02rem;\n    margin-left: .12rem;\n    font-size: 0.13rem; }\n    #order_tpl .footer button:last-child {\n      background: #000;\n      color: #fff; }\n", "", {"version":3,"sources":["/./src/js/components/order_tpl.vue"],"names":[],"mappings":"AAAA;EACE,6CAA6C;EAC7C,mBAAmB,EAAE;EACrB;IACE,wBAAwB;IACxB,4CAA4C,EAAE;;AAElD;EACE,uBAAuB;EACvB,iBAAiB,EAAE;;AAErB;EACE,qBAAqB,EAAE;;AAEzB;EACE,kBAAkB;EAClB,wBAAwB;EACxB,2BAA2B;EAC3B,mBAAmB,EAAE;EACrB;IACE,sBAAsB,EAAE;EAC1B;IACE,sCAAsC;IACtC,wBAAwB;IACxB,uBAAuB;IACvB,cAAc;IACd,yBAAyB;IACzB,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB,EAAE;IACrB;MACE,iBAAiB;MACjB,YAAY,EAAE","file":"order_tpl.vue","sourcesContent":["#order_tpl .header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 0.13rem; }\n  #order_tpl .header .order_state {\n    padding: 0.1rem 0.16rem;\n    border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n#order_tpl .order_list {\n  margin-bottom: 0.16rem;\n  background: #fff; }\n\n#order_tpl .order_time {\n  margin-left: 0.16rem; }\n\n#order_tpl .footer {\n  text-align: right;\n  padding: 0.1rem 0.12rem;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.15rem; }\n  #order_tpl .footer div {\n    display: inline-block; }\n  #order_tpl .footer button {\n    border: 1px solid rgba(0, 0, 0, 0.84);\n    background: transparent;\n    vertical-align: middle;\n    outline: none;\n    padding: 0.03rem 0.06rem;\n    border-radius: .02rem;\n    margin-left: .12rem;\n    font-size: 0.13rem; }\n    #order_tpl .footer button:last-child {\n      background: #000;\n      color: #fff; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 68:
/*!*************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/order_tpl.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            detail_type: null
	        };
	    },
	
	    props: ['orders'],
	
	    methods: {
	
	        //取消订单
	        cancel: function cancel(item) {
	            var t = confirm('你确认要取消此订单吗?');
	            console.log(item.order_id);
	            if (t) {
	                this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/cancelOrder', { "order_id": item.order_id, "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                    var res = JSON.parse(res.data);
	                    if (res.resp_code == 100) {
	                        this.$route.router.go({ 'name': 'allOrder' });
	                    }
	                }, function (err) {
	                    console.log(err);
	                });
	            }
	        },
	
	        //去付款
	        goPay: function goPay(item) {
	            this.$router.go({ name: 'directPay', params: { 'orderId': item.order_id } });
	        },
	
	        //确认收货
	        confirmReceipt: function confirmReceipt(item) {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/takeDelivery', { "order_id": item.order_id, "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                if (res.resp_code == 100) {
	                    this.$route.router.go({ 'name': 'allOrder' });
	                }
	            }, function (err) {
	                console.log(err);
	            });
	        },
	
	        //查看物流
	        viewLogistics: function viewLogistics(item) {
	            this.$router.go({ name: 'watchLogistics', params: { 'orderId': item.order_id } });
	        },
	
	        add_zero: function add_zero(str) {
	            return str < 10 ? '0' + str : str;
	        },
	
	
	        //查看各个订单的详情
	        watch_detail: function watch_detail(state, order_id) {
	            this.detail_type[state](order_id);
	        }
	    },
	    /*events:{
	      cut_time(str){
	        let time = +str;
	        let t = setInterval(function(){
	            str = this.add_zero( Math.floor(time/60) )+ " : " +this.add_zero( Math.floor(time%60) )
	            time--;
	            if(time<=0){
	                clearInterval(t);
	                return false;
	            }
	        },1000);
	      }
	    },*/
	
	    directives: {
	        cutdown: {
	            twoWay: true,
	            update: function update(val1) {
	
	                var _this = this;
	
	                this.set(this.vm.add_zero(Math.floor(val1 / 60)) + ':' + this.vm.add_zero(Math.floor(val1 % 60)));
	
	                this.t = setInterval(function () {
	
	                    val1--;
	                    if (val1 <= 1) {
	                        clearInterval(_this.t);
	                        _this.set("00:00");
	                        return false;
	                    }
	                    _this.set(_this.vm.add_zero(Math.floor(val1 / 60)) + ':' + _this.vm.add_zero(Math.floor(val1 % 60)));
	                    /* if(val1<=0){
	                          return false;
	                     }*/
	                }, 1000);
	            },
	            unbind: function unbind() {
	                clearInterval(this.t);
	            }
	        }
	    },
	
	    ready: function ready() {
	        var _this = this;
	        console.log(this.orders);
	        //            console.log(this.orders);
	        //            let i=0;
	        /*for(let i= 0;i<this.orders.length;i++){
	            let time = +(k.timeC);
	            let t = setInterval(function(){
	                k.timeC = _this.add_zero( Math.floor(time/60) )+ " : " +_this.add_zero( Math.floor(time%60) )
	                time--;
	                if(time<=0){
	                    clearInterval(t);
	                    return false;
	                }
	            },1000);
	        };*/
	
	        this.detail_type = {
	            "已取消": function _(str) {
	                _this.$route.router.go({ 'name': 'cancelOrder', params: { "orderId": str } });
	            },
	            "待发货": function _(str) {
	                _this.$route.router.go({ 'name': 'toShippeddel', params: { "orderId": str } });
	            },
	            "待付款": function _(str) {
	                _this.$route.router.go({ 'name': 'needpaydel', params: { "orderId": str } });
	            },
	            "交易成功": function _(str) {
	                _this.$route.router.go({ 'name': 'successOrder', params: { "orderId": str } });
	            },
	            "已发货": function _(str) {
	                _this.$route.router.go({ 'name': 'shippedOrder', params: { "orderId": str } });
	            }
	        };
	
	        //            setTimeout(function(){
	        //                console.log(_this.orders);
	        //            },2000)
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div id="order_tpl">
	//         <div class="order_list" v-for="order in orders">
	//
	//             <a href="javascript:void(0)" class="order_item" >
	//                 <div class="header">
	//                     <span class="order_state">{{order.state}}</span>
	//                     <span class="order_time">{{order.time}}</span>
	//                 </div>
	//
	//                 <div @click="watch_detail(order.state,order.order_id)" class="sg_cells">
	//                     <div class="cell_g" v-for="order_goods in order.commodity">
	//                         <img :src="order_goods.commodity_title_img" alt=""/>
	//                         <!--<img src="../../asset/imgs/five.jpg" alt=""/>-->
	//                         <div class="cell_g_m">
	//                             {{order_goods.commodity_name}}
	//                         </div>
	//                         <div class="cell_g_r">
	//                             <p>￥ {{order_goods.commodity_sale_price}}</p>
	//                             <p>x {{order_goods.commodity_num}}</p>
	//                         </div>
	//                     </div>
	//                 </div>
	//
	//                 <div class="footer">
	//                     <span>总计：￥{{order.all_price}}</span>
	//                     <!--待收货 -->
	//                     <div v-if="order.state == '已发货'">
	//                         <button @click="viewLogistics(order)">查看物流</button>
	//                         <button @click="confirmReceipt(order)">确认收货</button>
	//                     </div>
	//
	//                     <!-- 待付款-->
	//                     <div v-if="order.state == '待付款'">
	//                         <button @click="cancel(order)">取消</button>
	//                         <button  @click="goPay(order)">去付款 <span v-cutdown="order.timeC">{{order.timeC}}</span></button>
	//                     </div>
	//
	//                 </div>
	//             </a>
	//
	//         </div>
	//     </div>
	// </template>
	//
	//
	// <style lang="sass">
	//     #order_tpl{
	//
	//     .header{
	//         border-bottom:1px solid rgba(0,0,0,.12);
	//         font-size:0.13rem;
	//     .order_state{
	//         padding:0.1rem 0.16rem;
	//         border-right:1px solid rgba(0,0,0,.12);
	//     }
	//     }
	//     .order_list{
	//         margin-bottom: 0.16rem;
	//         background: #fff;
	//     }
	//
	//     .order_time{
	//         margin-left: 0.16rem;
	//     }
	//
	//     .footer{
	//         text-align: right;
	//         padding:0.1rem 0.12rem;
	//         color:rgba(0, 0, 0, 0.54);
	//         font-size: 0.15rem;
	//     div{
	//         display: inline-block;
	//     }
	//     button{
	//         border:1px solid rgba(0,0,0,.84);
	//         background: transparent;
	//         vertical-align: middle;
	//         outline:none;
	//         padding:0.03rem 0.06rem;
	//         border-radius:.02rem;
	//         margin-left:.12rem;
	//         font-size:0.13rem;
	//
	//     &:last-child{
	//          background:#000;
	//          color:#fff
	//      }
	//     }
	//     }
	//     }
	// </style>
	//
	// <script>

/***/ },

/***/ 69:
/*!******************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/order_tpl.vue ***!
  \******************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div id=\"order_tpl\">\n    <div class=\"order_list\" v-for=\"order in orders\">\n\n        <a href=\"javascript:void(0)\" class=\"order_item\" >\n            <div class=\"header\">\n                <span class=\"order_state\">{{order.state}}</span>\n                <span class=\"order_time\">{{order.time}}</span>\n            </div>\n\n            <div @click=\"watch_detail(order.state,order.order_id)\" class=\"sg_cells\">\n                <div class=\"cell_g\" v-for=\"order_goods in order.commodity\">\n                    <img :src=\"order_goods.commodity_title_img\" alt=\"\"/>\n                    <!--<img src=\"../../asset/imgs/five.jpg\" alt=\"\"/>-->\n                    <div class=\"cell_g_m\">\n                        {{order_goods.commodity_name}}\n                    </div>\n                    <div class=\"cell_g_r\">\n                        <p>￥ {{order_goods.commodity_sale_price}}</p>\n                        <p>x {{order_goods.commodity_num}}</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"footer\">\n                <span>总计：￥{{order.all_price}}</span>\n                <!--待收货 -->\n                <div v-if=\"order.state == '已发货'\">\n                    <button @click=\"viewLogistics(order)\">查看物流</button>\n                    <button @click=\"confirmReceipt(order)\">确认收货</button>\n                </div>\n\n                <!-- 待付款-->\n                <div v-if=\"order.state == '待付款'\">\n                    <button @click=\"cancel(order)\">取消</button>\n                    <button  @click=\"goPay(order)\">去付款 <span v-cutdown=\"order.timeC\">{{order.timeC}}</span></button>\n                </div>\n\n            </div>\n        </a>\n\n    </div>\n</div>\n";

/***/ },

/***/ 70:
/*!****************************************!*\
  !*** ./src/js/components/no_order.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./no_order.vue */ 71)
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../~/vue-loader/lib/selector.js?type=template&index=0!./no_order.vue */ 73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\components\\no_order.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 71:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/no_order.vue ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader?sourceMap!./../../../~/vue-loader/lib/style-rewriter.js!./../../../~/sass-loader!./../../../~/vue-loader/lib/selector.js?type=style&index=0!./no_order.vue */ 72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./no_order.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./no_order.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 72:
/*!************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/components/no_order.vue ***!
  \************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#no_order {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /*justify-content: center;*/\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  #no_order img {\n    width: 0.96rem;\n    height: 0.96rem;\n    margin: 1.7rem 0 0.16rem; }\n  #no_order span.u_no_order {\n    font-size: 0.15rem; }\n  #no_order span:last-child {\n    font-size: 0.13rem;\n    color: rgba(0, 0, 0, 0.54); }\n", "", {"version":3,"sources":["/./src/js/components/no_order.vue"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,4BAA4B;EAC5B,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB,EAAE;EACtB;IACE,eAAe;IACf,gBAAgB;IAChB,yBAAyB,EAAE;EAC7B;IACE,mBAAmB,EAAE;EACvB;IACE,mBAAmB;IACnB,2BAA2B,EAAE","file":"no_order.vue","sourcesContent":["#no_order {\n  display: flex;\n  flex-direction: column;\n  /*justify-content: center;*/\n  align-items: center; }\n  #no_order img {\n    width: 0.96rem;\n    height: 0.96rem;\n    margin: 1.7rem 0 0.16rem; }\n  #no_order span.u_no_order {\n    font-size: 0.15rem; }\n  #no_order span:last-child {\n    font-size: 0.13rem;\n    color: rgba(0, 0, 0, 0.54); }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 73:
/*!*****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/no_order.vue ***!
  \*****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"no_order\">\n    <img src=\"" + __webpack_require__(/*! ../../asset/imgs/no-order.svg */ 74) + "\" alt=\"\"/>\n    <span class=\"u_no_order\">您还有没有相关的订单</span>\n    <span>暂时没有相关数据</span>\n</div>\n";

/***/ },

/***/ 74:
/*!*************************************!*\
  !*** ./src/asset/imgs/no-order.svg ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/no-order.svg";

/***/ },

/***/ 81:
/*!**************************************************!*\
  !*** ./src/js/page_vue/orders/to_be_shipped.vue ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./to_be_shipped.vue */ 82)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./to_be_shipped.vue */ 84)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\orders\\to_be_shipped.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./to_be_shipped.vue */ 85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\orders\\to_be_shipped.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 82:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/orders/to_be_shipped.vue ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./to_be_shipped.vue */ 83);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./to_be_shipped.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./to_be_shipped.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 83:
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/orders/to_be_shipped.vue ***!
  \**********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#to_be_shipped {\n  padding-top: 0.5rem;\n  margin-bottom: 1rem; }\n", "", {"version":3,"sources":["/./src/js/page_vue/orders/to_be_shipped.vue"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,oBAAoB,EAAE","file":"to_be_shipped.vue","sourcesContent":["#to_be_shipped {\n  padding-top: 0.5rem;\n  margin-bottom: 1rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 84:
/*!**********************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/orders/to_be_shipped.vue ***!
  \**********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	var _order_tpl = __webpack_require__(/*! ../../components/order_tpl.vue */ 65);
	
	var _order_tpl2 = _interopRequireDefault(_order_tpl);
	
	var _no_order = __webpack_require__(/*! ../../components/no_order.vue */ 70);
	
	var _no_order2 = _interopRequireDefault(_no_order);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['num', 'order_goods_number'],
	    data: function data() {
	        return {
	            currentView: 'order'
	        };
	    },
	
	    components: {
	        order: _order_tpl2.default,
	        noorder: _no_order2.default
	    },
	    methods: {
	        to_be_shipped: function to_be_shipped() {
	            this.num = 2;
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/getOrders', { "openid": _base_data2.default.store.state.openId, "token": "xtongtong", "state": "1" }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	
	                var res = JSON.parse(res.data);
	
	                if (res.resp_code == '100') {
	                    this.$set('allToBeShipped', res.orders);
	                    this.order_goods_number = res.shopping_cart_num;
	                } else {
	                    this.currentView = 'noorder';
	                }
	            }, function (err) {
	                console.log(err);
	            });
	        }
	    },
	    ready: function ready() {
	        this.to_be_shipped();
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <!--待发货-->
	//
	// <template>
	//     <div id="to_be_shipped">
	//         <component :is="currentView"  :orders.sync="allToBeShipped" >
	//         </component>
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #to_be_shipped{
	//         padding-top:0.5rem;
	//         margin-bottom: 1rem;
	//     }
	// </style>
	//
	//
	// <script>

/***/ },

/***/ 85:
/*!***************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/orders/to_be_shipped.vue ***!
  \***************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div id=\"to_be_shipped\">\n    <component :is=\"currentView\"  :orders.sync=\"allToBeShipped\" >\n    </component>\n</div>\n";

/***/ }

});
//# sourceMappingURL=7.chunk.js.map