webpackJsonp([2,37],{

/***/ 36:
/*!**********************************************!*\
  !*** ./src/js/page_vue/goods/brand_hall.vue ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./brand_hall.vue */ 37)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./brand_hall.vue */ 39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\goods\\brand_hall.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./brand_hall.vue */ 40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\goods\\brand_hall.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 37:
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/brand_hall.vue ***!
  \***************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./brand_hall.vue */ 38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./brand_hall.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./brand_hall.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 38:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/brand_hall.vue ***!
  \******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#brands {\n  margin-bottom: 0.7rem; }\n  #brands header {\n    margin: 0.16rem 0 0.24rem;\n    text-align: center;\n    font-size: 0.17rem; }\n    #brands header span {\n      position: relative; }\n      #brands header span:before, #brands header span:after {\n        content: '';\n        width: 100%;\n        position: absolute;\n        left: 0; }\n      #brands header span:before {\n        height: 3px;\n        background: #000;\n        bottom: -0.04rem; }\n      #brands header span:after {\n        height: 1px;\n        background: rgba(0, 0, 0, 0.54);\n        bottom: -0.07rem; }\n  #brands .show_brand {\n    padding: 0 0.1rem;\n    font-size: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    #brands .show_brand a {\n      width: 1.65rem;\n      height: 0.88rem;\n      margin-bottom: 0.1rem; }\n    #brands .show_brand img {\n      width: inherit;\n      height: inherit; }\n    #brands .show_brand a:nth-of-type(odd) {\n      margin-right: 0.1rem; }\n", "", {"version":3,"sources":["/./src/js/page_vue/goods/brand_hall.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAE;EACxB;IACE,0BAA0B;IAC1B,mBAAmB;IACnB,mBAAmB,EAAE;IACrB;MACE,mBAAmB,EAAE;MACrB;QACE,YAAY;QACZ,YAAY;QACZ,mBAAmB;QACnB,QAAQ,EAAE;MACZ;QACE,YAAY;QACZ,iBAAiB;QACjB,iBAAiB,EAAE;MACrB;QACE,YAAY;QACZ,gCAAgC;QAChC,iBAAiB,EAAE;EACzB;IACE,kBAAkB;IAClB,aAAa;IACb,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAA+B;QAA/B,uBAA+B;YAA/B,+BAA+B;IAC/B,oBAAgB;QAAhB,gBAAgB,EAAE;IAClB;MACE,eAAe;MACf,gBAAgB;MAChB,sBAAsB,EAAE;IAC1B;MACE,eAAe;MACf,gBAAgB,EAAE;IACpB;MACE,qBAAqB,EAAE","file":"brand_hall.vue","sourcesContent":["#brands {\n  margin-bottom: 0.7rem; }\n  #brands header {\n    margin: 0.16rem 0 0.24rem;\n    text-align: center;\n    font-size: 0.17rem; }\n    #brands header span {\n      position: relative; }\n      #brands header span:before, #brands header span:after {\n        content: '';\n        width: 100%;\n        position: absolute;\n        left: 0; }\n      #brands header span:before {\n        height: 3px;\n        background: #000;\n        bottom: -0.04rem; }\n      #brands header span:after {\n        height: 1px;\n        background: rgba(0, 0, 0, 0.54);\n        bottom: -0.07rem; }\n  #brands .show_brand {\n    padding: 0 0.1rem;\n    font-size: 0;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap; }\n    #brands .show_brand a {\n      width: 1.65rem;\n      height: 0.88rem;\n      margin-bottom: 0.1rem; }\n    #brands .show_brand img {\n      width: inherit;\n      height: inherit; }\n    #brands .show_brand a:nth-of-type(odd) {\n      margin-right: 0.1rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 39:
/*!******************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/goods/brand_hall.vue ***!
  \******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _base_data = __webpack_require__(/*! ../../store/base_data.js */ 12);
	
	var _base_data2 = _interopRequireDefault(_base_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['goods_number'],
	    data: function data() {
	        return {
	            //                all_brands:{}
	        };
	    },
	
	    methods: {
	        get_brands: function get_brands() {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/brandPage', { "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                if (res.resp_code == 100) {
	                    this.$set('all_brands', res);
	                    this.goods_number = res.shopping_cart_num;
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
	        this.get_brands();
	    }
	};
	// </script>
	//
	//
	// <template>
	//     <div id="brands">
	//         <section v-for="type in all_brands.brands">
	//             <header>
	//                 <span>{{ type.brand_name }}</span>
	//             </header>
	//
	//             <div class="show_brand">
	//                 <a v-link="{ name: 'brandMsg', params: { brandId: detail.brand_id}}" v-for="detail in type.brand_list">
	//                     <img v-load_pic="detail.brand_show_img"  src="../../../asset/imgs/9.jpg" alt=""/>
	//                 </a>
	//             </div>
	//         </section>
	//
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #brands{
	//         margin-bottom: 0.7rem;
	//
	//         header{
	//             margin:0.16rem 0 0.24rem;
	//             text-align: center;
	//             font-size: 0.17rem;
	//
	//             span{
	//                 position: relative;
	//
	//                 &:before,&:after{
	//                     content: '';
	//                     width:100%;
	//
	//                     position: absolute;
	//                     left:0;
	//                  }
	//
	//                 &:before{
	//                     height:3px;
	//                     background: #000;
	//                     bottom:-0.04rem;
	//                  }
	//
	//                  &:after{
	//                     height:1px;
	//                     background: rgba(0, 0, 0, 0.54);
	//                     bottom:-0.07rem;
	//                   }
	//             }
	//         }
	//
	//     .show_brand{
	//         padding:0 0.1rem;
	//         font-size:0;
	//         display:flex;
	//         justify-content:space-between;
	//         flex-wrap:wrap;
	//
	//         a{
	//             width:1.65rem;
	//             height: 0.88rem;
	//             margin-bottom: 0.1rem;
	//         }
	//
	//         img{
	//             width:inherit;
	//             height:inherit;
	//         }
	//
	//         a:nth-of-type(odd){
	//             margin-right:0.1rem;
	//         }
	//
	//
	//     }
	//     }
	// </style>
	/* generated by vue-loader */
	// <!--Ʒ�ƹ�-->
	// <script>

/***/ },

/***/ 40:
/*!***********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/goods/brand_hall.vue ***!
  \***********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"brands\">\n    <section v-for=\"type in all_brands.brands\">\n        <header>\n            <span>{{ type.brand_name }}</span>\n        </header>\n        \n        <div class=\"show_brand\">\n            <a v-link=\"{ name: 'brandMsg', params: { brandId: detail.brand_id}}\" v-for=\"detail in type.brand_list\">\n                <img v-load_pic=\"detail.brand_show_img\"  src=\"" + __webpack_require__(/*! ../../../asset/imgs/9.jpg */ 41) + "\" alt=\"\"/>\n            </a>\n        </div>\n    </section>\n\n</div>\n";

/***/ },

/***/ 41:
/*!******************************!*\
  !*** ./src/asset/imgs/9.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/9.jpg";

/***/ }

});
//# sourceMappingURL=2.chunk.js.map