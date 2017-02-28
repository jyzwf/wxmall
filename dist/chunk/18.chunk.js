webpackJsonp([18,37],{

/***/ 156:
/*!******************************************!*\
  !*** ./src/js/page_vue/user/qr_code.vue ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./qr_code.vue */ 157)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./qr_code.vue */ 159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\user\\qr_code.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./qr_code.vue */ 160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\user\\qr_code.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 157:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/user/qr_code.vue ***!
  \***********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./qr_code.vue */ 158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./qr_code.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./qr_code.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 158:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/user/qr_code.vue ***!
  \**************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#qrCode {\n  margin: 0.12rem; }\n  #qrCode .top {\n    background: #393a3f;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 0.08rem; }\n    #qrCode .top .logo {\n      width: 0.4rem;\n      height: 0.4rem;\n      margin: 0.24rem 0; }\n    #qrCode .top .title {\n      font-size: 0.24rem;\n      color: #fff; }\n    #qrCode .top .code {\n      background: #fff;\n      margin: 0.2rem 0; }\n      #qrCode .top .code img {\n        width: 1.08rem;\n        height: 1.08rem; }\n    #qrCode .top .pic_show {\n      width: 2.92rem;\n      height: 1.727rem;\n      margin-bottom: 0.243rem; }\n  #qrCode .bottom {\n    border: solid 4px #393a3f;\n    font-size: 0.18rem;\n    position: relative;\n    color: #393a3f;\n    font-weight: bold;\n    padding: 0.17rem 0;\n    text-align: center; }\n    #qrCode .bottom img {\n      width: 0.4rem;\n      height: 0.4rem;\n      position: absolute;\n      left: 50%;\n      top: -0.27rem;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n", "", {"version":3,"sources":["/./src/js/page_vue/user/qr_code.vue"],"names":[],"mappings":"AAAA;EACE,gBAAgB,EAAE;EAClB;IACE,oBAAoB;IACpB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;QAAvB,2BAAuB;YAAvB,uBAAuB;IACvB,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,uBAAuB,EAAE;IACzB;MACE,cAAc;MACd,eAAe;MACf,kBAAkB,EAAE;IACtB;MACE,mBAAmB;MACnB,YAAY,EAAE;IAChB;MACE,iBAAiB;MACjB,iBAAiB,EAAE;MACnB;QACE,eAAe;QACf,gBAAgB,EAAE;IACtB;MACE,eAAe;MACf,iBAAiB;MACjB,wBAAwB,EAAE;EAC9B;IACE,0BAA0B;IAC1B,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB,EAAE;IACrB;MACE,cAAc;MACd,eAAe;MACf,mBAAmB;MACnB,UAAU;MACV,cAAc;MACd,oCAA4B;cAA5B,4BAA4B,EAAE","file":"qr_code.vue","sourcesContent":["#qrCode {\n  margin: 0.12rem; }\n  #qrCode .top {\n    background: #393a3f;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 0.08rem; }\n    #qrCode .top .logo {\n      width: 0.4rem;\n      height: 0.4rem;\n      margin: 0.24rem 0; }\n    #qrCode .top .title {\n      font-size: 0.24rem;\n      color: #fff; }\n    #qrCode .top .code {\n      background: #fff;\n      margin: 0.2rem 0; }\n      #qrCode .top .code img {\n        width: 1.08rem;\n        height: 1.08rem; }\n    #qrCode .top .pic_show {\n      width: 2.92rem;\n      height: 1.727rem;\n      margin-bottom: 0.243rem; }\n  #qrCode .bottom {\n    border: solid 4px #393a3f;\n    font-size: 0.18rem;\n    position: relative;\n    color: #393a3f;\n    font-weight: bold;\n    padding: 0.17rem 0;\n    text-align: center; }\n    #qrCode .bottom img {\n      width: 0.4rem;\n      height: 0.4rem;\n      position: absolute;\n      left: 50%;\n      top: -0.27rem;\n      transform: translateX(-50%); }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 159:
/*!**************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/user/qr_code.vue ***!
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
	            head_pic: '',
	            qr_pic: ''
	        };
	    },
	    ready: function ready() {
	        this.head_pic = _base_data2.default.store.state.userHeading;
	        this.qr_pic = _base_data2.default.store.state.user_qrCode;
	    }
	};
	// </script>
	//
	// <template>
	//     <div id="qrCode">
	//         <section class="top">
	//             <img class="logo" src="../../../asset/imgs/2.jpg" alt=""/>
	//             <p class="title">时光传媒</p>
	//             <div class="code">
	//                 <img src="{{qr_pic}}" alt=""/>
	//             </div>
	//             <img src="../../../asset/imgs/bitmap.svg" alt="" class="pic_show"/>
	//         </section>
	//
	//         <section class="bottom">
	//             <img class="heading" src="{{head_pic}}" alt=""/>
	//             XXXX 带你吃遍全球
	//         </section>
	//
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #qrCode{
	//         margin:0.12rem;
	//
	//     .top{
	//         background: #393a3f;
	//         display: flex;
	//         flex-direction: column;
	//         align-items: center;
	//         margin-bottom:0.08rem;
	//     .logo{
	//         width:0.4rem;
	//         height:0.4rem;
	//         margin: 0.24rem 0;
	//     }
	//
	//     .title{
	//         font-size: 0.24rem;
	//         color:#fff;
	//     }
	//
	//     .code{
	//         background:#fff;
	//         margin:0.2rem 0;
	//     img{
	//         width:1.08rem;
	//         height:1.08rem;
	//     }
	//     }
	//
	//     .pic_show{
	//         width:2.92rem;
	//         height:1.727rem;
	//         margin-bottom:0.243rem
	//     }
	//
	//
	//     }
	//
	//     .bottom{
	//         border:solid 4px #393a3f;
	//         font-size: 0.18rem;
	//         position: relative;
	//         color:#393a3f;
	//         font-weight: bold;
	//         padding:0.17rem 0;
	//         text-align:center;
	//
	//     img{
	//         width:0.4rem;
	//         height:0.4rem;
	//         position: absolute;
	//         left:50%;
	//         top:-0.27rem;
	//         transform: translateX(-50%);
	//     }
	//     }
	//     }
	// </style>
	/* generated by vue-loader */
	// <!--我的二维码-->
	//
	// <script>

/***/ },

/***/ 160:
/*!*******************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/user/qr_code.vue ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"qrCode\">\n    <section class=\"top\">\n        <img class=\"logo\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/2.jpg */ 161) + "\" alt=\"\"/>\n        <p class=\"title\">时光传媒</p>\n        <div class=\"code\">\n            <img src=\"{{qr_pic}}\" alt=\"\"/>\n        </div>\n        <img src=\"" + __webpack_require__(/*! ../../../asset/imgs/bitmap.svg */ 162) + "\" alt=\"\" class=\"pic_show\"/>\n    </section>\n\n    <section class=\"bottom\">\n        <img class=\"heading\" src=\"{{head_pic}}\" alt=\"\"/>\n        XXXX 带你吃遍全球\n    </section>\n\n</div>\n";

/***/ },

/***/ 161:
/*!******************************!*\
  !*** ./src/asset/imgs/2.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/2.jpg";

/***/ },

/***/ 162:
/*!***********************************!*\
  !*** ./src/asset/imgs/bitmap.svg ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/bitmap.svg";

/***/ }

});
//# sourceMappingURL=18.chunk.js.map