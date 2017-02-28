webpackJsonp([12,37],{

/***/ 35:
/*!******************************!*\
  !*** ./src/asset/imgs/6.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/6.jpg";

/***/ },

/***/ 108:
/*!********************************************************!*\
  !*** ./src/js/page_vue/goods/today_more_recommend.vue ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./today_more_recommend.vue */ 109)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./today_more_recommend.vue */ 111)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\goods\\today_more_recommend.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./today_more_recommend.vue */ 112)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\goods\\today_more_recommend.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 109:
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/today_more_recommend.vue ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./today_more_recommend.vue */ 110);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./today_more_recommend.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./today_more_recommend.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 110:
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/goods/today_more_recommend.vue ***!
  \****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#more_recommend {\n  padding: 0 0.08rem;\n  background: #fff; }\n  #more_recommend .sell_item {\n    padding: 0.08rem 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-bottom: 0.01rem solid #e0e0e0; }\n    #more_recommend .sell_item:last-child {\n      border: none; }\n    #more_recommend .sell_item img {\n      width: 100%; }\n    #more_recommend .sell_item .title {\n      margin: 0.08rem 0 0.04rem;\n      font-size: 0.15rem;\n      font-weight: bold; }\n    #more_recommend .sell_item .intr {\n      color: rgba(0, 0, 0, 0.54);\n      font-size: 0.13rem; }\n", "", {"version":3,"sources":["/./src/js/page_vue/goods/today_more_recommend.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iBAAiB,EAAE;EACnB;IACE,mBAAmB;IACnB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;QAAvB,2BAAuB;YAAvB,uBAAuB;IACvB,qCAAqC,EAAE;IACvC;MACE,aAAa,EAAE;IACjB;MACE,YAAY,EAAE;IAChB;MACE,0BAA0B;MAC1B,mBAAmB;MACnB,kBAAkB,EAAE;IACtB;MACE,2BAA2B;MAC3B,mBAAmB,EAAE","file":"today_more_recommend.vue","sourcesContent":["#more_recommend {\n  padding: 0 0.08rem;\n  background: #fff; }\n  #more_recommend .sell_item {\n    padding: 0.08rem 0;\n    display: flex;\n    flex-direction: column;\n    border-bottom: 0.01rem solid #e0e0e0; }\n    #more_recommend .sell_item:last-child {\n      border: none; }\n    #more_recommend .sell_item img {\n      width: 100%; }\n    #more_recommend .sell_item .title {\n      margin: 0.08rem 0 0.04rem;\n      font-size: 0.15rem;\n      font-weight: bold; }\n    #more_recommend .sell_item .intr {\n      color: rgba(0, 0, 0, 0.54);\n      font-size: 0.13rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 111:
/*!****************************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/goods/today_more_recommend.vue ***!
  \****************************************************************************************************************************/
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
	
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/getRecommends', { "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                this.$set('new_brand_data', res.recommend);
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
	/* generated by vue-loader */
	// <template>
	//     <div id="more_recommend">
	//         <div class="sell_list">
	//             <a class="sell_item" v-link="{ name: 'brandMsg', params: { brandId: brand.brand_id}}"  v-for="brand in new_brand_data">
	//                 <img v-load_pic="brand.img" src="../../../asset/imgs/6.jpg"  alt=""/>
	//                 <p class="title">{{brand.name}}</p>
	//                 <p class="intr">{{brand.description}}</p>
	//             </a>
	//         </div>
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #more_recommend{
	//         padding:0 0.08rem;
	//         background:#fff;
	//         .sell_item{
	//             padding:0.08rem 0;
	//             display: flex;
	//             flex-direction: column;
	//             border-bottom:0.01rem solid #e0e0e0;
	//             &:last-child{
	//                  border:none
	//              }
	//             img{
	//                 width: 100%;
	//             }
	//             .title{
	//                 margin:0.08rem 0 0.04rem;
	//                 font-size: 0.15rem;
	//                 font-weight: bold;
	//             }
	//
	//             .intr{
	//                 color: rgba(0,0,0,.54);
	//                 font-size: 0.13rem;
	//             }
	//
	//         }
	//     }
	// </style>
	//
	// <script>

/***/ },

/***/ 112:
/*!*********************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/goods/today_more_recommend.vue ***!
  \*********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"more_recommend\">\n    <div class=\"sell_list\">\n        <a class=\"sell_item\" v-link=\"{ name: 'brandMsg', params: { brandId: brand.brand_id}}\"  v-for=\"brand in new_brand_data\">\n            <img v-load_pic=\"brand.img\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/6.jpg */ 35) + "\"  alt=\"\"/>\n            <p class=\"title\">{{brand.name}}</p>\n            <p class=\"intr\">{{brand.description}}</p>\n        </a>\n    </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=12.chunk.js.map