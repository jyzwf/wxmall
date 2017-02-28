webpackJsonp([10,37],{

/***/ 96:
/*!**********************************************!*\
  !*** ./src/js/page_vue/user/user_center.vue ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!sass!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./user_center.vue */ 97)
	__vue_script__ = __webpack_require__(/*! !babel-loader!./../../../../~/vue-loader/lib/selector.js?type=script&index=0!./user_center.vue */ 99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\page_vue\\user\\user_center.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../../../~/vue-loader/lib/selector.js?type=template&index=0!./user_center.vue */ 100)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\Angular\\waibao2\\src\\js\\page_vue\\user\\user_center.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 97:
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/user/user_center.vue ***!
  \***************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js!./../../../../~/sass-loader!./../../../../~/vue-loader/lib/selector.js?type=style&index=0!./user_center.vue */ 98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./user_center.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./user_center.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 98:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/sass-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/js/page_vue/user/user_center.vue ***!
  \******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "#u_center {\n  font-size: 0.15rem; }\n  #u_center .arrow {\n    width: .24rem;\n    height: .24rem; }\n  #u_center .banner {\n    height: 1.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    /*background:url(/dist/imgs/banner.jpg) no-repeat;*/\n    background: #000;\n    /*background-size:cover;*/ }\n    #u_center .banner img {\n      width: 0.7rem;\n      height: 0.7rem;\n      border: 0.02rem solid #fff;\n      border-radius: 50%; }\n    #u_center .banner p {\n      color: #fff; }\n      #u_center .banner p:nth-of-type(1) {\n        margin: 0.16rem 0 0.08rem; }\n      #u_center .banner p:nth-of-type(2) {\n        margin-bottom: 0.02rem; }\n      #u_center .banner p:nth-of-type(3) {\n        margin-bottom: 0.08rem;\n        font-size: 0.13rem; }\n        #u_center .banner p:nth-of-type(3) span {\n          vertical-align: inherit; }\n    #u_center .banner a {\n      color: rgba(255, 255, 255, 0.69);\n      font-size: 0.13rem; }\n      #u_center .banner a:hover {\n        color: rgba(255, 255, 255, 0.69); }\n  #u_center .qr_code {\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0.14rem 0.08rem 0.14rem 0.16rem;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #e0e0e0; }\n    #u_center .qr_code span {\n      font-weight: bold; }\n    #u_center .qr_code img:first-child {\n      margin-right: 0.08rem;\n      width: 0.2rem;\n      height: 0.2rem; }\n  #u_center .reward {\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 0.12rem;\n    padding: 0.12rem 0.08rem 0 0.16rem;\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 1px solid #e0e0e0; }\n    #u_center .reward strong {\n      font-size: 0.24rem; }\n    #u_center .reward p:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-top: 0.08rem;\n      padding-bottom: 0.04rem;\n      border-bottom: 1px solid #e0e0e0; }\n    #u_center .reward p:nth-of-type(3) {\n      padding: 0.08rem 0;\n      font-size: 0.12rem;\n      color: rgba(0, 0, 0, 0.54); }\n      #u_center .reward p:nth-of-type(3) span {\n        vertical-align: inherit; }\n  #u_center .my_fans {\n    margin-top: 0.12rem;\n    background: #fff;\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 1px solid #e0e0e0;\n    padding: 0rem 0.08rem 0rem 0.16rem; }\n    #u_center .my_fans a {\n      margin-top: 0.14rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding-bottom: 0.14rem;\n      border-bottom: 1px solid #e0e0e0; }\n      #u_center .my_fans a:last-child {\n        border: none; }\n  #u_center .recommend {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.54);\n    margin-top: 0.08rem;\n    margin-bottom: 0.7rem; }\n", "", {"version":3,"sources":["/./src/js/page_vue/user/user_center.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB,EAAE;EACrB;IACE,cAAc;IACd,eAAe,EAAE;EACnB;IACE,gBAAgB;IAChB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;QAAvB,2BAAuB;YAAvB,uBAAuB;IACvB,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,oDAAoD;IACpD,iBAAiB;IACjB,0BAA0B,EAAE;IAC5B;MACE,cAAc;MACd,eAAe;MACf,2BAA2B;MAC3B,mBAAmB,EAAE;IACvB;MACE,YAAY,EAAE;MACd;QACE,0BAA0B,EAAE;MAC9B;QACE,uBAAuB,EAAE;MAC3B;QACE,uBAAuB;QACvB,mBAAmB,EAAE;QACrB;UACE,wBAAwB,EAAE;IAChC;MACE,iCAAiC;MACjC,mBAAmB,EAAE;MACrB;QACE,iCAAiC,EAAE;EACzC;IACE,iBAAiB;IACjB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,yCAAyC;IACzC,0BAA+B;QAA/B,uBAA+B;YAA/B,+BAA+B;IAC/B,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,iCAAiC,EAAE;IACnC;MACE,kBAAkB,EAAE;IACtB;MACE,sBAAsB;MACtB,cAAc;MACd,eAAe,EAAE;EACrB;IACE,iBAAiB;IACjB,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;QAAvB,2BAAuB;YAAvB,uBAAuB;IACvB,oBAAoB;IACpB,mCAAmC;IACnC,iCAAiC;IACjC,8BAA8B,EAAE;IAChC;MACE,mBAAmB,EAAE;IACvB;MACE,qBAAc;MAAd,qBAAc;MAAd,cAAc;MACd,0BAA+B;UAA/B,uBAA+B;cAA/B,+BAA+B;MAC/B,0BAAoB;UAApB,uBAAoB;cAApB,oBAAoB;MACpB,oBAAoB;MACpB,wBAAwB;MACxB,iCAAiC,EAAE;IACrC;MACE,mBAAmB;MACnB,mBAAmB;MACnB,2BAA2B,EAAE;MAC7B;QACE,wBAAwB,EAAE;EAChC;IACE,oBAAoB;IACpB,iBAAiB;IACjB,iCAAiC;IACjC,8BAA8B;IAC9B,mCAAmC,EAAE;IACrC;MACE,oBAAoB;MACpB,qBAAc;MAAd,qBAAc;MAAd,cAAc;MACd,0BAA+B;UAA/B,uBAA+B;cAA/B,+BAA+B;MAC/B,0BAAoB;UAApB,uBAAoB;cAApB,oBAAoB;MACpB,wBAAwB;MACxB,iCAAiC,EAAE;MACnC;QACE,aAAa,EAAE;EACrB;IACE,mBAAmB;IACnB,2BAA2B;IAC3B,oBAAoB;IACpB,sBAAsB,EAAE","file":"user_center.vue","sourcesContent":["#u_center {\n  font-size: 0.15rem; }\n  #u_center .arrow {\n    width: .24rem;\n    height: .24rem; }\n  #u_center .banner {\n    height: 1.75rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /*background:url(/dist/imgs/banner.jpg) no-repeat;*/\n    background: #000;\n    /*background-size:cover;*/ }\n    #u_center .banner img {\n      width: 0.7rem;\n      height: 0.7rem;\n      border: 0.02rem solid #fff;\n      border-radius: 50%; }\n    #u_center .banner p {\n      color: #fff; }\n      #u_center .banner p:nth-of-type(1) {\n        margin: 0.16rem 0 0.08rem; }\n      #u_center .banner p:nth-of-type(2) {\n        margin-bottom: 0.02rem; }\n      #u_center .banner p:nth-of-type(3) {\n        margin-bottom: 0.08rem;\n        font-size: 0.13rem; }\n        #u_center .banner p:nth-of-type(3) span {\n          vertical-align: inherit; }\n    #u_center .banner a {\n      color: rgba(255, 255, 255, 0.69);\n      font-size: 0.13rem; }\n      #u_center .banner a:hover {\n        color: rgba(255, 255, 255, 0.69); }\n  #u_center .qr_code {\n    background: #fff;\n    display: flex;\n    padding: 0.14rem 0.08rem 0.14rem 0.16rem;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #e0e0e0; }\n    #u_center .qr_code span {\n      font-weight: bold; }\n    #u_center .qr_code img:first-child {\n      margin-right: 0.08rem;\n      width: 0.2rem;\n      height: 0.2rem; }\n  #u_center .reward {\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    margin-top: 0.12rem;\n    padding: 0.12rem 0.08rem 0 0.16rem;\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 1px solid #e0e0e0; }\n    #u_center .reward strong {\n      font-size: 0.24rem; }\n    #u_center .reward p:nth-of-type(2) {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 0.08rem;\n      padding-bottom: 0.04rem;\n      border-bottom: 1px solid #e0e0e0; }\n    #u_center .reward p:nth-of-type(3) {\n      padding: 0.08rem 0;\n      font-size: 0.12rem;\n      color: rgba(0, 0, 0, 0.54); }\n      #u_center .reward p:nth-of-type(3) span {\n        vertical-align: inherit; }\n  #u_center .my_fans {\n    margin-top: 0.12rem;\n    background: #fff;\n    border-bottom: 1px solid #e0e0e0;\n    border-top: 1px solid #e0e0e0;\n    padding: 0rem 0.08rem 0rem 0.16rem; }\n    #u_center .my_fans a {\n      margin-top: 0.14rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-bottom: 0.14rem;\n      border-bottom: 1px solid #e0e0e0; }\n      #u_center .my_fans a:last-child {\n        border: none; }\n  #u_center .recommend {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.54);\n    margin-top: 0.08rem;\n    margin-bottom: 0.7rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 99:
/*!******************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/page_vue/user/user_center.vue ***!
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
	            //                user_data:{},
	            open_id: {},
	            heading_pic: '',
	            qr_pic: ''
	        };
	    },
	
	    methods: {
	        get_data: function get_data() {
	            this.$http.post(_base_data2.default.store.state.baseUrl + 'Wechat/exhibitionUserPage', { "openid": _base_data2.default.store.state.openId }, { "emulateJSON": true, "emulateHTTP": true }).then(function (res) {
	                var res = JSON.parse(res.data);
	
	                if (res.resp_code == 100) {
	                    this.$set('user_data', res);
	                    this.goods_number = res.shoppingCart;
	                    _base_data2.default.store.getUserHeading(res.user.img);
	                    _base_data2.default.store.getUserQrcode(res.user.qr_code_url);
	                } else {
	                    alert('请求失败，请稍后再试');
	                    return false;
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
	//
	// <template>
	//     <div id="u_center">
	//
	//         <section class="banner">
	//             <p><img src="{{user_data.user.img}}" alt=""/></p>
	//             <p>{{user_data.user.name}}</p>
	//             <p>ID: <span>{{user_data.user.user_id}}</span></p>
	//             <a href="javascript:void(0)">如何成为会员&gt;</a>
	//         </section>
	//
	//         <a v-link="{ name: 'qrCode', params: { heading: 1,qrCode: 2}}" class="qr_code">
	//             <span>我的二维码</span>
	//             <p>
	//                 <img class="qr_img" src="../../../asset/imgs/qrcode.svg" alt=""/>
	//                 <img class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
	//             </p>
	//         </a>
	//
	//         <a v-link="{ name: 'withdrawal'}" class="reward">
	//             <p>历史累计奖励 (元)</p>
	//             <p>
	//                 <strong>{{user_data.money.cumulative}}</strong>
	//                 <img  class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
	//             </p>
	//
	//             <p>
	//                 可提现金额 <span>{{user_data.money.avaliable}}</span>元
	//             </p>
	//         </a>
	//
	//         <section class="my_fans">
	//             <a v-link="{ name: 'myFans'}">
	//                 <span>我的粉丝</span>
	//                 <p>
	//                     <span>{{user_data.fans.fans_num}}人</span>
	//                     <img  class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
	//                 </p>
	//             </a>
	//
	//             <a v-link="{ name: 'fansOrder'}">
	//                 <span>粉丝销量</span>
	//                 <p>
	//                     <span>{{user_data.fans.fans_sales}} 元</span>
	//                     <img class="arrow" src="../../../asset/imgs/ic_keyboard_arrow_right.svg" alt=""/>
	//                 </p>
	//             </a>
	//         </section>
	//
	//         <p class="recommend">您是由【{{user_data.user.owner}}】推荐</p>
	//     </div>
	// </template>
	//
	//
	// <style lang="sass">
	//     #u_center{
	//         font-size: 0.15rem;
	//         .arrow{
	//             width:.24rem;
	//             height:.24rem;
	//         }
	//
	//     .banner{
	//         height:1.75rem;
	//         display: flex;
	//         flex-direction: column;
	//         align-items: center;
	//         /*background:url(/dist/imgs/banner.jpg) no-repeat;*/
	//         background:#000;
	//         /*background-size:cover;*/
	//
	//         img{
	//             width:0.7rem;
	//             height:0.7rem;
	//             border:0.02rem solid #fff;
	//             border-radius: 50%;
	//         }
	//
	//         p{
	//             color:#fff;
	//
	//             &:nth-of-type(1){
	//                 margin:0.16rem 0 0.08rem;
	//
	//              };
	//             &:nth-of-type(2){
	//                  margin-bottom: 0.02rem;
	//              }
	//
	//             &:nth-of-type(3){
	//                 margin-bottom:0.08rem;
	//              font-size:0.13rem;
	//                 span{
	//                     vertical-align: inherit;
	//                 }
	//               };
	//
	//
	//         }
	//
	//         a{
	//
	//             color:rgba(255,255,255,.69);
	//             font-size: 0.13rem;
	//             &:hover{
	//                 color:rgba(255,255,255,.69)
	//              }
	//         }
	//     }
	//
	//     .qr_code{
	//         background: #fff;
	//         display: flex;
	//         padding:0.14rem 0.08rem 0.14rem 0.16rem;
	//         justify-content: space-between;
	//         align-items: center;
	//         border-bottom:1px solid #e0e0e0;
	//         span{
	//             font-weight: bold;
	//         }
	//
	//         img:first-child{
	//             margin-right:0.08rem;
	//             width:0.2rem;
	//             height:0.2rem;
	//         }
	//
	//
	//     }
	//
	//     .reward{
	//         background: #fff;
	//         display: flex;
	//         flex-direction: column;
	//         margin-top: 0.12rem;
	//         padding:0.12rem 0.08rem 0 0.16rem;
	//         border-bottom:1px solid #e0e0e0;
	//         border-top:1px solid #e0e0e0;
	//
	//         strong{
	//             font-size:0.24rem;
	//         }
	//
	//         p:nth-of-type(2){
	//             display: flex;
	//             justify-content: space-between;
	//             align-items: center;
	//             margin-top:0.08rem;
	//             padding-bottom: 0.04rem;
	//             border-bottom:1px solid #e0e0e0;
	//         }
	//
	//         p:nth-of-type(3){
	//             padding:0.08rem 0;
	//         font-size:0.12rem;
	//         color:rgba(0, 0, 0, 0.54);
	//             span{
	//                 vertical-align: inherit;
	//             }
	//
	//         }
	//     }
	//
	//     .my_fans{
	//         margin-top:0.12rem;
	//         background:#fff;
	//         border-bottom:1px solid #e0e0e0;
	//         border-top:1px solid #e0e0e0;
	//         padding:0rem 0.08rem 0rem 0.16rem;
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
	//         }
	//     }
	//
	//     .recommend{
	//         text-align: center;
	//         color: rgba(0, 0, 0, 0.54);
	//         margin-top: 0.08rem;
	//         margin-bottom:0.7rem;
	//     }
	//     }
	// </style>
	/* generated by vue-loader */
	// <!--用户中心-->
	//
	// <script>

/***/ },

/***/ 100:
/*!***********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/page_vue/user/user_center.vue ***!
  \***********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div id=\"u_center\">\n\n    <section class=\"banner\">\n        <p><img src=\"{{user_data.user.img}}\" alt=\"\"/></p>\n        <p>{{user_data.user.name}}</p>\n        <p>ID: <span>{{user_data.user.user_id}}</span></p>\n        <a href=\"javascript:void(0)\">如何成为会员&gt;</a>\n    </section>\n\n    <a v-link=\"{ name: 'qrCode', params: { heading: 1,qrCode: 2}}\" class=\"qr_code\">\n        <span>我的二维码</span>\n        <p>\n            <img class=\"qr_img\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/qrcode.svg */ 101) + "\" alt=\"\"/>\n            <img class=\"arrow\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic_keyboard_arrow_right.svg */ 102) + "\" alt=\"\"/>\n        </p>\n    </a>\n\n    <a v-link=\"{ name: 'withdrawal'}\" class=\"reward\">\n        <p>历史累计奖励 (元)</p>\n        <p>\n            <strong>{{user_data.money.cumulative}}</strong>\n            <img  class=\"arrow\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic_keyboard_arrow_right.svg */ 102) + "\" alt=\"\"/>\n        </p>\n\n        <p>\n            可提现金额 <span>{{user_data.money.avaliable}}</span>元\n        </p>\n    </a>\n    \n    <section class=\"my_fans\">\n        <a v-link=\"{ name: 'myFans'}\">\n            <span>我的粉丝</span>\n            <p>\n                <span>{{user_data.fans.fans_num}}人</span>\n                <img  class=\"arrow\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic_keyboard_arrow_right.svg */ 102) + "\" alt=\"\"/>\n            </p>\n        </a>\n\n        <a v-link=\"{ name: 'fansOrder'}\">\n            <span>粉丝销量</span>\n            <p>\n                <span>{{user_data.fans.fans_sales}} 元</span>\n                <img class=\"arrow\" src=\"" + __webpack_require__(/*! ../../../asset/imgs/ic_keyboard_arrow_right.svg */ 102) + "\" alt=\"\"/>\n            </p>\n        </a>\n    </section>\n\n    <p class=\"recommend\">您是由【{{user_data.user.owner}}】推荐</p>\n</div>\n";

/***/ },

/***/ 101:
/*!***********************************!*\
  !*** ./src/asset/imgs/qrcode.svg ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/qrcode.svg";

/***/ },

/***/ 102:
/*!****************************************************!*\
  !*** ./src/asset/imgs/ic_keyboard_arrow_right.svg ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/ic_keyboard_arrow_right.svg";

/***/ }

});
//# sourceMappingURL=10.chunk.js.map