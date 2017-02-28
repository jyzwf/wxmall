webpackJsonp([11,37],{

/***/ 41:
/*!******************************!*\
  !*** ./src/asset/imgs/9.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/9.jpg";

/***/ },

/***/ 103:
/*!**************************************************!*\
  !*** ./src/js/page_vue/goods/today_new_more.vue ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./today_new_more.vue */ 104)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./today_new_more.vue */ 106)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\goods\\today_new_more.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./today_new_more.vue */ 107)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\goods\\today_new_more.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 104:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/today_new_more.vue ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./today_new_more.vue */ 105);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./today_new_more.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./today_new_more.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 105:
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/today_new_more.vue ***!
  \**********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#today_new_more {\n  position: relative;\n  background: #fff; }\n  #today_new_more #goods {\n    padding: 0.08rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    #today_new_more #goods a {\n      width: calc(50% - 0.04rem);\n      background: #fff; }\n    #today_new_more #goods .first_view {\n      width: 100%; }\n      #today_new_more #goods .first_view img {\n        width: inherit;\n        height: inherit; }\n    #today_new_more #goods .des {\n      padding: 0.09rem .12rem;\n      font-size: 0.15rem; }\n      #today_new_more #goods .des p:first-child {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        margin-bottom: 0.08rem;\n        font-size: 0.13rem; }\n      #today_new_more #goods .des p:last-child {\n        font-size: 0.11rem;\n        color: rgba(0, 0, 0, 0.58); }\n", "", {"version":3,"sources":["/./src/js/page_vue/goods/today_new_more.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iBAAiB,EAAE;EACnB;IACE,iBAAiB;IACjB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,oBAAgB;QAAhB,gBAAgB;IAChB,0BAA+B;QAA/B,uBAA+B;YAA/B,+BAA+B,EAAE;IACjC;MACE,2BAA2B;MAC3B,iBAAiB,EAAE;IACrB;MACE,YAAY,EAAE;MACd;QACE,eAAe;QACf,gBAAgB,EAAE;IACtB;MACE,wBAAwB;MACxB,mBAAmB,EAAE;MACrB;QACE,iBAAiB;QACjB,wBAAwB;QACxB,oBAAoB;QACpB,uBAAuB;QACvB,mBAAmB,EAAE;MACvB;QACE,mBAAmB;QACnB,2BAA2B,EAAE","file":"today_new_more.vue","sourcesContent":["#today_new_more {\n  position: relative;\n  background: #fff; }\n  #today_new_more #goods {\n    padding: 0.08rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n    #today_new_more #goods a {\n      width: calc(50% - 0.04rem);\n      background: #fff; }\n    #today_new_more #goods .first_view {\n      width: 100%; }\n      #today_new_more #goods .first_view img {\n        width: inherit;\n        height: inherit; }\n    #today_new_more #goods .des {\n      padding: 0.09rem .12rem;\n      font-size: 0.15rem; }\n      #today_new_more #goods .des p:first-child {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        margin-bottom: 0.08rem;\n        font-size: 0.13rem; }\n      #today_new_more #goods .des p:last-child {\n        font-size: 0.11rem;\n        color: rgba(0, 0, 0, 0.58); }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 106:
/*!**********************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/goods/today_new_more.vue ***!
  \**********************************************************************************************************************/
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
	
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/getNews', { "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                this.$set('new_goods_data', res);
	            }, function (err) {
	                console.log(err);
	            });
	        }
	    },
	    directives: {
	        load_pic: {
	            twoWay: true,
	            update: function update(val) {
	                var _this = this;
	
	                this.el.onload = function () {
	                    if (_this.el) {
	                        _this.el.src = val;
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
	//     <div id="today_new_more">
	//
	//         <section id="goods">
	//             <a v-link="{name:'goodMsg',params:{commodityId:item.commodity_id}}" v-for = 'item in new_goods_data.commodity'>
	//                 <div class="first_view">
	//                     <img v-load_pic="item.img"  src="../../../asset/imgs/9.jpg" alt=""/>
	//                 </div>
	//                 <div class="des">
	//                     <p>{{item.commodity_name}}</p>
	//                     <p>{{'售价 '+item.commodity_sale_price+'元'}} </p>
	//                 </div>
	//             </a>
	//         </section>
	//
	//     </div>
	//
	// </template>
	//
	// <style lang="sass">
	//
	//
	//     #today_new_more{
	//         position:relative;
	//
	//         background: #fff;
	//
	//     #goods{
	//         padding:0.08rem;
	//         display: flex;
	//         flex-wrap: wrap;
	//         justify-content:space-between;
	//
	//
	//
	//     a{
	//
	//         width:calc(50% - 0.04rem);
	//         background: #fff;
	//     }
	//
	//     .first_view{
	//         width:100%;
	//     img{
	//         width:inherit;
	//         height:inherit;
	//     }
	//     }
	//
	//
	//     .des{
	//         padding:0.09rem .12rem;
	//         font-size:0.15rem;
	//
	//     p:first-child{
	//         overflow : hidden;
	//         text-overflow: ellipsis;
	//         white-space: nowrap;
	//         margin-bottom:0.08rem;
	//         font-size: 0.13rem;
	//
	//     }
	//
	//     p:last-child{
	//         font-size: 0.11rem;
	//         color:rgba(0,0,0,.58);
	//     }
	//     }
	//
	//
	//     }
	//     }
	// </style>
	//

	/* generated by vue-loader */
	//
	// <script>

/***/ },

/***/ 107:
/*!***************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/goods/today_new_more.vue ***!
  \***************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"today_new_more\">\n\n    <section id=\"goods\">\n        <a v-link=\"{name:'goodMsg',params:{commodityId:item.commodity_id}}\" v-for = 'item in new_goods_data.commodity'>\n            <div class=\"first_view\">\n                <img v-load_pic=\"item.img\"  src=\"" + __webpack_require__(/*! ../../../asset/imgs/9.jpg */ 41) + "\" alt=\"\"/>\n            </div>\n            <div class=\"des\">\n                <p>{{item.commodity_name}}</p>\n                <p>{{'售价 '+item.commodity_sale_price+'元'}} </p>\n            </div>\n        </a>\n    </section>\n\n</div>\n\n";

/***/ }

});
//# sourceMappingURL=11.chunk.js.map