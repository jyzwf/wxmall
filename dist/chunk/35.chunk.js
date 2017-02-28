webpackJsonp([35,37],{

/***/ 310:
/*!******************************************************!*\
  !*** ./src/js/page_vue/logistics/watch_logistic.vue ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./watch_logistic.vue */ 311)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./watch_logistic.vue */ 313)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\logistics\\watch_logistic.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./watch_logistic.vue */ 314)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\logistics\\watch_logistic.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 311:
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/logistics/watch_logistic.vue ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./watch_logistic.vue */ 312);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./watch_logistic.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./watch_logistic.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 312:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/logistics/watch_logistic.vue ***!
  \**************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#watch_logistic .logistic_header {\n  padding: 0.13rem 0.16rem;\n  background-color: #393a3f;\n  color: #fff;\n  font-size: 0.13rem; }\n  #watch_logistic .logistic_header p:first-child {\n    font-size: 0.15rem; }\n  #watch_logistic .logistic_header p:nth-of-type(2) {\n    margin: 0.04rem 0; }\n\n#watch_logistic .logistic_tel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.13rem .16rem;\n  background: #fff;\n  font-size: 0.15rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0.12rem 0;\n  border-bottom: 0.01rem solid #e0e0e0;\n  border-top: 0.01rem solid #e0e0e0; }\n\n#watch_logistic .logistic_detail {\n  margin-bottom: 0.7rem; }\n  #watch_logistic .logistic_detail > p {\n    padding: 0.13rem .16rem;\n    font-size: 0.15rem;\n    background: #fff;\n    border-bottom: 0.01rem solid #e0e0e0;\n    border-top: 0.01rem solid #e0e0e0; }\n  #watch_logistic .logistic_detail .logistic_list {\n    padding: 0.12rem 0.16rem;\n    background: #fff; }\n    #watch_logistic .logistic_detail .logistic_list .log_l {\n      padding: 0.12rem 0.16rem 0.04rem;\n      border-left: 0.02rem solid #9e9e9e; }\n      #watch_logistic .logistic_detail .logistic_list .log_l .content {\n        position: relative;\n        font-size: 0.13rem; }\n      #watch_logistic .logistic_detail .logistic_list .log_l .radius {\n        position: absolute;\n        width: 0.1rem;\n        height: 0.1rem;\n        border: 0.02rem solid #9e9e9e;\n        border-radius: 50%;\n        left: -0.22rem;\n        background: #fff;\n        top: 0.05rem; }\n      #watch_logistic .logistic_detail .logistic_list .log_l:first-child {\n        color: #4caf50; }\n        #watch_logistic .logistic_detail .logistic_list .log_l:first-child .radius {\n          border-color: #4caf50;\n          background: #4caf50; }\n", "", {"version":3,"sources":["/./src/js/page_vue/logistics/watch_logistic.vue"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB,EAAE;EACrB;IACE,mBAAmB,EAAE;EACvB;IACE,kBAAkB,EAAE;;AAExB;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAAwB;EACxB,iBAAiB;EACjB,mBAAmB;EACnB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,kBAAkB;EAClB,qCAAqC;EACrC,kCAAkC,EAAE;;AAEtC;EACE,sBAAsB,EAAE;EACxB;IACE,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,qCAAqC;IACrC,kCAAkC,EAAE;EACtC;IACE,yBAAyB;IACzB,iBAAiB,EAAE;IACnB;MACE,iCAAiC;MACjC,mCAAmC,EAAE;MACrC;QACE,mBAAmB;QACnB,mBAAmB,EAAE;MACvB;QACE,mBAAmB;QACnB,cAAc;QACd,eAAe;QACf,8BAA8B;QAC9B,mBAAmB;QACnB,eAAe;QACf,iBAAiB;QACjB,aAAa,EAAE;MACjB;QACE,eAAe,EAAE;QACjB;UACE,sBAAsB;UACtB,oBAAoB,EAAE","file":"watch_logistic.vue","sourcesContent":["#watch_logistic .logistic_header {\n  padding: 0.13rem 0.16rem;\n  background-color: #393a3f;\n  color: #fff;\n  font-size: 0.13rem; }\n  #watch_logistic .logistic_header p:first-child {\n    font-size: 0.15rem; }\n  #watch_logistic .logistic_header p:nth-of-type(2) {\n    margin: 0.04rem 0; }\n\n#watch_logistic .logistic_tel {\n  display: flex;\n  padding: 0.13rem .16rem;\n  background: #fff;\n  font-size: 0.15rem;\n  justify-content: space-between;\n  margin: 0.12rem 0;\n  border-bottom: 0.01rem solid #e0e0e0;\n  border-top: 0.01rem solid #e0e0e0; }\n\n#watch_logistic .logistic_detail {\n  margin-bottom: 0.7rem; }\n  #watch_logistic .logistic_detail > p {\n    padding: 0.13rem .16rem;\n    font-size: 0.15rem;\n    background: #fff;\n    border-bottom: 0.01rem solid #e0e0e0;\n    border-top: 0.01rem solid #e0e0e0; }\n  #watch_logistic .logistic_detail .logistic_list {\n    padding: 0.12rem 0.16rem;\n    background: #fff; }\n    #watch_logistic .logistic_detail .logistic_list .log_l {\n      padding: 0.12rem 0.16rem 0.04rem;\n      border-left: 0.02rem solid #9e9e9e; }\n      #watch_logistic .logistic_detail .logistic_list .log_l .content {\n        position: relative;\n        font-size: 0.13rem; }\n      #watch_logistic .logistic_detail .logistic_list .log_l .radius {\n        position: absolute;\n        width: 0.1rem;\n        height: 0.1rem;\n        border: 0.02rem solid #9e9e9e;\n        border-radius: 50%;\n        left: -0.22rem;\n        background: #fff;\n        top: 0.05rem; }\n      #watch_logistic .logistic_detail .logistic_list .log_l:first-child {\n        color: #4caf50; }\n        #watch_logistic .logistic_detail .logistic_list .log_l:first-child .radius {\n          border-color: #4caf50;\n          background: #4caf50; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 313:
/*!**************************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/logistics/watch_logistic.vue ***!
  \**************************************************************************************************************************/
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
	        get_logistic_data: function get_logistic_data() {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Distribution/getDeliveryInfo', { "order_id": this.$route.params.orderId, "token": "xtongtong", "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	                res.delivery.list = res.delivery.list.reverse();
	                if (res.resp_code == 100) {
	                    this.$set('log_data', res.delivery);
	                }
	            }, function (err) {
	                console.log(err);
	            });
	        }
	    },
	
	    ready: function ready() {
	        this.get_logistic_data();
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div id="watch_logistic">
	//
	//         <!-- 物流状态-->
	//         <div class="logistic_header">
	//             <p>{{log_data.company}}</p>
	//             <p>订单编号：{{log_data.no}}</p>
	//             <p>物流状态：{{log_data.state}}</p>
	//         </div>
	//
	//         <!-- 物流电话-->
	//         <div class="logistic_tel">
	//             <span>物流电话：{{log_data.phone}}</span>
	//             <a href="tel:log_data.phone">拨打</a>
	//         </div>
	//
	//         <!-- 物流详情-->
	//         <div class="logistic_detail">
	//             <p>物流跟踪</p>
	//             <div class="logistic_list">
	//                 <div class="log_l" v-for="l in log_data.list">
	//                     <div class="content">
	//                         <span class="radius"></span>
	//                         <p class="log_pos">{{l.remark}}</p>
	//                         <p class="log_time">{{l.datetime}}</p>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <style lang="sass">
	//     #watch_logistic{
	//         .logistic_header{
	//             padding:0.13rem 0.16rem;
	//             background-color: #393a3f;
	//             color: #fff;
	//             font-size:0.13rem;
	//             p:first-child{
	//                 font-size: 0.15rem;
	//             }
	//
	//             p:nth-of-type(2){
	//                 margin:0.04rem 0;
	//             }
	//         }
	//
	//         .logistic_tel{
	//             display: flex;
	//             padding:0.13rem .16rem;
	//             background: #fff;
	//             font-size: 0.15rem;
	//             justify-content: space-between;
	//             margin:0.12rem 0;
	//             border-bottom:0.01rem solid #e0e0e0;
	//             border-top:0.01rem solid #e0e0e0;
	//         }
	//
	//         .logistic_detail{
	//             margin-bottom:0.7rem;
	//             &>p{
	//                 padding:0.13rem .16rem;
	//                 font-size: 0.15rem;
	//                   background: #fff;
	//                   border-bottom:0.01rem solid #e0e0e0;
	//                   border-top:0.01rem solid #e0e0e0;
	//               }
	//
	//               .logistic_list{
	//                   padding:0.12rem 0.16rem;
	//                   background: #fff;
	//
	//                   .log_l{
	//                       padding:0.12rem 0.16rem 0.04rem;
	//                       border-left:0.02rem solid #9e9e9e;
	//
	//                         .content{
	//                             position: relative;
	//                             font-size: 0.13rem;
	//
	//                         }
	//                       .radius{
	//                           position: absolute;
	//                           width:0.1rem;
	//                           height:0.1rem;
	//                           border:0.02rem solid #9e9e9e;
	//                           border-radius: 50%;
	//                           left:-0.22rem;
	//                           background: #fff;
	//                           top: 0.05rem;
	//                       }
	//
	//                     &:first-child{
	//                          color:#4caf50;
	//                         .radius{
	//                             border-color:#4caf50;
	//                             background:#4caf50;
	//                         }
	//                     }
	//                   }
	//               }
	//         }
	//     }
	// </style>
	//
	// <script>

/***/ },

/***/ 314:
/*!*******************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/logistics/watch_logistic.vue ***!
  \*******************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div id=\"watch_logistic\">\n\n    <!-- 物流状态-->\n    <div class=\"logistic_header\">\n        <p>{{log_data.company}}</p>\n        <p>订单编号：{{log_data.no}}</p>\n        <p>物流状态：{{log_data.state}}</p>\n    </div>\n\n    <!-- 物流电话-->\n    <div class=\"logistic_tel\">\n        <span>物流电话：{{log_data.phone}}</span>\n        <a href=\"tel:log_data.phone\">拨打</a>\n    </div>\n\n    <!-- 物流详情-->\n    <div class=\"logistic_detail\">\n        <p>物流跟踪</p>\n        <div class=\"logistic_list\">\n            <div class=\"log_l\" v-for=\"l in log_data.list\">\n                <div class=\"content\">\n                    <span class=\"radius\"></span>\n                    <p class=\"log_pos\">{{l.remark}}</p>\n                    <p class=\"log_time\">{{l.datetime}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=35.chunk.js.map