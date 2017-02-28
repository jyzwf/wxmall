webpackJsonp([13,37],{

/***/ 35:
/*!******************************!*\
  !*** ./src/asset/imgs/6.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/6.jpg";

/***/ },

/***/ 41:
/*!******************************!*\
  !*** ./src/asset/imgs/9.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/9.jpg";

/***/ },

/***/ 113:
/*!******************************************!*\
  !*** ./src/js/page_vue/goods/active.vue ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./active.vue */ 114)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./active.vue */ 116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\goods\\active.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./active.vue */ 117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\goods\\active.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 114:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/active.vue ***!
  \***********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./active.vue */ 115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./active.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./active.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 115:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/active.vue ***!
  \**************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#mall_index {\n  position: relative; }\n  #mall_index .mask {\n    background: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    position: fixed;\n    padding: 0.2rem 0.4rem;\n    border-radius: 0.04rem;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    z-index: 999; }\n  #mall_index .brandPic img {\n    width: 100%; }\n  #mall_index .word_intr {\n    padding: 0.16rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    background: #fff;\n    font-size: 0.12rem; }\n    #mall_index .word_intr img {\n      /*display: inline-block;*/\n      width: 0.48rem;\n      min-width: 0.48rem;\n      height: 0.5rem;\n      margin-right: 0.16rem; }\n    #mall_index .word_intr span {\n      white-space: pre-wrap;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; }\n  #mall_index #goods {\n    padding: 0.08rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    /*img:first-child{*/\n    /*width:100%;*/\n    /*height:1.68rem;*/\n    /*border-top-left-radius: 0.08rem;*/\n    /*border-top-right-radius: 0.08rem;*/\n    /*}*/ }\n    #mall_index #goods a {\n      /*flex:1;*/\n      margin-bottom: 0.08rem;\n      width: calc(50% - 0.04rem);\n      background: #fff; }\n    #mall_index #goods .first_view {\n      width: 100%;\n      position: relative; }\n      #mall_index #goods .first_view img {\n        width: inherit;\n        height: inherit; }\n      #mall_index #goods .first_view p {\n        position: absolute;\n        width: 0.65rem;\n        height: 0.65rem;\n        text-align: center;\n        font-size: 0.15rem;\n        line-height: 0.65rem;\n        background: rgba(0, 0, 0, 0.54);\n        color: #fff;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0);\n        border-radius: 50%; }\n    #mall_index #goods .des {\n      padding: 0.09rem .12rem;\n      font-size: 0.15rem; }\n      #mall_index #goods .des del {\n        color: rgba(0, 0, 0, 0.38);\n        font-size: 0.11rem; }\n      #mall_index #goods .des p:first-child {\n        overflow: hidden;\n        /*text-overflow: ellipsis;*/\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        margin-bottom: 0.08rem;\n        font-size: 0.13rem;\n        color: rgba(0, 0, 0, 0.58); }\n      #mall_index #goods .des p:last-child {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n        #mall_index #goods .des p:last-child span {\n          color: red; }\n      #mall_index #goods .des img {\n        width: 0.24rem;\n        height: 0.24rem;\n        border-radius: 50%; }\n", "", {"version":3,"sources":["/./src/js/page_vue/goods/active.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB,EAAE;EACrB;IACE,+BAA+B;IAC/B,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;IACvB,UAAU;IACV,SAAS;IACT,8CAAsC;YAAtC,sCAAsC;IACtC,aAAa,EAAE;EACjB;IACE,YAAY,EAAE;EAChB;IACE,iBAAiB;IACjB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,wBAA4B;QAA5B,qBAA4B;YAA5B,4BAA4B;IAC5B,6CAA6C;IAC7C,iBAAiB;IACjB,mBAAmB,EAAE;IACrB;MACE,0BAA0B;MAC1B,eAAe;MACf,mBAAmB;MACnB,eAAe;MACf,sBAAsB,EAAE;IAC1B;MACE,sBAAsB;MACtB,oBAAW;UAAX,eAAW;cAAX,WAAW,EAAE;EACjB;IACE,iBAAiB;IACjB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,oBAAgB;QAAhB,gBAAgB;IAChB,0BAA+B;QAA/B,uBAA+B;YAA/B,+BAA+B;IAC/B,oBAAoB;IACpB,eAAe;IACf,mBAAmB;IACnB,oCAAoC;IACpC,qCAAqC;IACrC,KAAK,EAAE;IACP;MACE,WAAW;MACX,uBAAuB;MACvB,2BAA2B;MAC3B,iBAAiB,EAAE;IACrB;MACE,YAAY;MACZ,mBAAmB,EAAE;MACrB;QACE,eAAe;QACf,gBAAgB,EAAE;MACpB;QACE,mBAAmB;QACnB,eAAe;QACf,gBAAgB;QAChB,mBAAmB;QACnB,mBAAmB;QACnB,qBAAqB;QACrB,gCAAgC;QAChC,YAAY;QACZ,UAAU;QACV,SAAS;QACT,8CAAsC;gBAAtC,sCAAsC;QACtC,mBAAmB,EAAE;IACzB;MACE,wBAAwB;MACxB,mBAAmB,EAAE;MACrB;QACE,2BAA2B;QAC3B,mBAAmB,EAAE;MACvB;QACE,iBAAiB;QACjB,4BAA4B;QAC5B,qBAAqB;QACrB,sBAAsB;QACtB,6BAA6B;QAC7B,uBAAuB;QACvB,mBAAmB;QACnB,2BAA2B,EAAE;MAC/B;QACE,qBAAc;QAAd,qBAAc;QAAd,cAAc;QACd,0BAA+B;YAA/B,uBAA+B;gBAA/B,+BAA+B;QAC/B,uBAAsB;YAAtB,oBAAsB;gBAAtB,sBAAsB,EAAE;QACxB;UACE,WAAW,EAAE;MACjB;QACE,eAAe;QACf,gBAAgB;QAChB,mBAAmB,EAAE","file":"active.vue","sourcesContent":["#mall_index {\n  position: relative; }\n  #mall_index .mask {\n    background: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    position: fixed;\n    padding: 0.2rem 0.4rem;\n    border-radius: 0.04rem;\n    left: 50%;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    z-index: 999; }\n  #mall_index .brandPic img {\n    width: 100%; }\n  #mall_index .word_intr {\n    padding: 0.16rem;\n    display: flex;\n    justify-content: flex-start;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    background: #fff;\n    font-size: 0.12rem; }\n    #mall_index .word_intr img {\n      /*display: inline-block;*/\n      width: 0.48rem;\n      min-width: 0.48rem;\n      height: 0.5rem;\n      margin-right: 0.16rem; }\n    #mall_index .word_intr span {\n      white-space: pre-wrap;\n      flex: auto; }\n  #mall_index #goods {\n    padding: 0.08rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    /*img:first-child{*/\n    /*width:100%;*/\n    /*height:1.68rem;*/\n    /*border-top-left-radius: 0.08rem;*/\n    /*border-top-right-radius: 0.08rem;*/\n    /*}*/ }\n    #mall_index #goods a {\n      /*flex:1;*/\n      margin-bottom: 0.08rem;\n      width: calc(50% - 0.04rem);\n      background: #fff; }\n    #mall_index #goods .first_view {\n      width: 100%;\n      position: relative; }\n      #mall_index #goods .first_view img {\n        width: inherit;\n        height: inherit; }\n      #mall_index #goods .first_view p {\n        position: absolute;\n        width: 0.65rem;\n        height: 0.65rem;\n        text-align: center;\n        font-size: 0.15rem;\n        line-height: 0.65rem;\n        background: rgba(0, 0, 0, 0.54);\n        color: #fff;\n        left: 50%;\n        top: 50%;\n        transform: translate3d(-50%, -50%, 0);\n        border-radius: 50%; }\n    #mall_index #goods .des {\n      padding: 0.09rem .12rem;\n      font-size: 0.15rem; }\n      #mall_index #goods .des del {\n        color: rgba(0, 0, 0, 0.38);\n        font-size: 0.11rem; }\n      #mall_index #goods .des p:first-child {\n        overflow: hidden;\n        /*text-overflow: ellipsis;*/\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        margin-bottom: 0.08rem;\n        font-size: 0.13rem;\n        color: rgba(0, 0, 0, 0.58); }\n      #mall_index #goods .des p:last-child {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-end; }\n        #mall_index #goods .des p:last-child span {\n          color: red; }\n      #mall_index #goods .des img {\n        width: 0.24rem;\n        height: 0.24rem;\n        border-radius: 50%; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 116:
/*!**************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/goods/active.vue ***!
  \**************************************************************************************************************/
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
	            maskState: false
	        };
	    },
	
	    components: {},
	    methods: {
	        get_data: function get_data() {
	
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/brandInfo', { "brand_id": this.$route.params.brandId, "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                this.$set('active_data', res);
	            }, function (err) {
	                console.log(err);
	            });
	        },
	        add_goods: function add_goods(idNum) {
	            //                this.maskState = true;
	
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/addToShoppingCart', {
	                "openid": _base_data2.default.store.state.openId,
	                "token": "xtongtong",
	                "commodity_id": idNum,
	                "commodity_num": 1,
	                "change": 2
	            }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                if (res.resp_code == 100 && res.result) {
	                    this.maskState = true;
	                    //                        window.sessionStorage.show_goods_count++;
	                    var _this = this;
	                    var t = setTimeout(function () {
	                        _this.maskState = false;
	                        clearTimeout(t);
	                    }, 2000);
	                }
	            }, function (err) {
	                console.log(err);
	            });
	        }
	    },
	    directives: {
	        load_pic: {
	            twoWay: true,
	            update: function update(val) {
	                var _this2 = this;
	
	                this.el.onload = function () {
	                    if (_this2.el) {
	                        _this2.el.src = val;
	                    }
	                };
	            }
	        }
	    },
	    ready: function ready() {
	        this.get_data();
	    }
	};
	// </script>
	//
	// <template>
	//     <div id="mall_index">
	//         <div class="mask" v-if="maskState">已加入购物车</div>
	//         <div class="brandPic">
	//             <img src="{{active_data.brand_info.brand_title_img}}" alt=""/>
	//         </div>
	//
	//         <div class="word_intr">
	//             <img src="../../../asset/imgs/6.jpg" alt=""/>
	//             <span>{{active_data.brand_info.brand_desc}}</span>
	//         </div>
	//
	//         <section id="goods">
	//             <a v-link="{name:'goodMsg',params:{commodityId:item.commodity_id}}" v-for = 'item in active_data.commodities'>
	//                 <div class="first_view">
	//                     <p v-if="item.is_null == '1'">已抢完</p>
	//                     <img v-load_pic="item.commodity_show_img"  src="../../../asset/imgs/9.jpg" alt=""/>
	//                 </div>
	//                 <div class="des">
	//                     <p>{{item.commodity_name}}</p>
	//                     <p><span>￥{{item.commodity_sale_price}} <del>￥{{item.commodity_primitive_price}}</del></span><img v-if="item.is_null != '1'" @click.stop.prevent="add_goods(item.commodity_id)" src="../../../asset/imgs/ic-add-cart.svg" alt=""/></p>
	//                 </div>
	//             </a>
	//         </section>
	//
	//     </div>
	//
	// </template>
	//
	// <style lang="sass">
	//     #mall_index{
	//         position:relative;
	//
	//         .mask{
	//             background: rgba(0,0,0,.8);
	//             color:#fff;
	//             position: fixed;
	//             padding:0.2rem 0.4rem;
	//             border-radius: 0.04rem;
	//             left:50%;
	//             top:50%;
	//             transform: translate3d(-50%,-50%,0);
	//             z-index: 999;
	//         }
	//
	//         .brandPic{
	//             img{
	//                 width:100%;
	//             }
	//         }
	//         .word_intr{
	//             padding: 0.16rem;
	//             display: flex;
	//             justify-content: flex-start;
	//             border-bottom:1px solid rgba(0, 0, 0, 0.12);
	//             background:#fff;
	//             font-size:0.12rem;
	//
	//             img{
	//                 /*display: inline-block;*/
	//                 width:0.48rem;
	//                 min-width:0.48rem;
	//                 height: 0.5rem;
	//                 margin-right:0.16rem;
	//             }
	//
	//             span{
	//                 white-space: pre-wrap;
	//                 flex:auto;
	//             }
	//         }
	//     #goods{
	//         padding:0.08rem;
	//         display: flex;
	//         flex-wrap: wrap;
	//         justify-content:space-between;
	//
	//         a{
	//             /*flex:1;*/
	//             margin-bottom:0.08rem;
	//             width:calc(50% - 0.04rem);
	//             background: #fff;
	//         }
	//
	//         .first_view{
	//             width:100%;
	//             position:relative;
	//
	//             img{
	//                 width:inherit;
	//                 height:inherit;
	//             }
	//
	//             p{
	//                 position: absolute;
	//                 width:0.65rem;
	//                 height:0.65rem;
	//                 text-align: center;
	//                 font-size: 0.15rem;
	//                 line-height: 0.65rem;
	//                 background: rgba(0,0,0,.54);
	//                 color:#fff;
	//                 left:50%;
	//                 top:50%;
	//                 transform: translate3d(-50%,-50%,0);
	//                 border-radius: 50%;
	//             }
	//         }
	//
	//         /*img:first-child{*/
	//             /*width:100%;*/
	//             /*height:1.68rem;*/
	//             /*border-top-left-radius: 0.08rem;*/
	//             /*border-top-right-radius: 0.08rem;*/
	//         /*}*/
	//
	//         .des{
	//             padding:0.09rem .12rem;
	//             font-size:0.15rem;
	//
	//             del{
	//                 color:rgba(0, 0, 0, 0.38);
	//                 font-size: 0.11rem;
	//             }
	//
	//             p:first-child{
	//                 overflow : hidden;
	//                 /*text-overflow: ellipsis;*/
	//                 display: -webkit-box;
	//                 -webkit-line-clamp: 2;
	//                 -webkit-box-orient: vertical;
	//                 margin-bottom:0.08rem;
	//                 font-size: 0.13rem;
	//                 color:rgba(0,0,0,.58);
	//             }
	//
	//             p:last-child{
	//                 display: flex;
	//                 justify-content:space-between;
	//                 align-items: flex-end;
	//                 span{
	//                     color:red;
	//                 }
	//             }
	//
	//             img{
	//                 width:0.24rem;
	//                 height:0.24rem;
	//                 border-radius: 50%;
	//             }
	//         }
	//
	//
	//         }
	//     }
	// </style>
	//

	/* generated by vue-loader */
	// <!--品牌详情-->
	// <script>

/***/ },

/***/ 117:
/*!*******************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/goods/active.vue ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"mall_index\">\n    <div class=\"mask\" v-if=\"maskState\">已加入购物车</div>\n    <div class=\"brandPic\">\n        <img src=\"{{active_data.brand_info.brand_title_img}}\" alt=\"\"/>\n    </div>\n\n    <div class=\"word_intr\">\n        <img src=\"" + __webpack_require__(/*! ../../../asset/imgs/6.jpg */ 35) + "\" alt=\"\"/>\n        <span>{{active_data.brand_info.brand_desc}}</span>\n    </div>\n\n    <section id=\"goods\">\n        <a v-link=\"{name:'goodMsg',params:{commodityId:item.commodity_id}}\" v-for = 'item in active_data.commodities'>\n            <div class=\"first_view\">\n                <p v-if=\"item.is_null == '1'\">已抢完</p>\n                <img v-load_pic=\"item.commodity_show_img\"  src=\"" + __webpack_require__(/*! ../../../asset/imgs/9.jpg */ 41) + "\" alt=\"\"/>\n            </div>\n            <div class=\"des\">\n                <p>{{item.commodity_name}}</p>\n                <p><span>￥{{item.commodity_sale_price}} <del>￥{{item.commodity_primitive_price}}</del></span><img v-if=\"item.is_null != '1'\" @click.stop.prevent=\"add_goods(item.commodity_id)\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic-add-cart.svg */ 118) + "\" alt=\"\"/></p>\n            </div>\n        </a>\n    </section>\n\n</div>\n\n";

/***/ },

/***/ 118:
/*!****************************************!*\
  !*** ./src/asset/imgs/ic-add-cart.svg ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic-add-cart.svg";

/***/ }

});
//# sourceMappingURL=13.chunk.js.map