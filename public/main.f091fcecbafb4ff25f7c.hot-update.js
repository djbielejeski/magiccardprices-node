webpackHotUpdate("main",{

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./client/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_icons_iconfont_material_icons_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-icons/iconfont/material-icons.scss */ \"./node_modules/material-icons/iconfont/material-icons.scss\");\n/* harmony import */ var material_icons_iconfont_material_icons_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_icons_iconfont_material_icons_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app */ \"./client/app/app.js\");\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), document.getElementById('root'));\nmodule.hot.accept();\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./MaterialIcons-Regular.eot */ \"./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./MaterialIcons-Regular.woff2 */ \"./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./MaterialIcons-Regular.woff */ \"./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./MaterialIcons-Regular.ttf */ \"./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf\"));\n\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"Material Icons\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  /* For IE6-8 */\\n  src: local(\\\"Material Icons\\\"), local(\\\"MaterialIcons-Regular\\\"), url(\" + ___CSS_LOADER_URL___1___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL___2___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL___3___ + \") format(\\\"truetype\\\"); }\\n\\n.material-icons {\\n  font-family: \\\"Material Icons\\\";\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 24px;\\n  display: inline-block;\\n  line-height: 1;\\n  text-transform: none;\\n  letter-spacing: normal;\\n  word-wrap: normal;\\n  white-space: nowrap;\\n  direction: ltr;\\n  /* Support for all WebKit browsers. */\\n  -webkit-font-smoothing: antialiased;\\n  /* Support for Safari and Chrome. */\\n  text-rendering: optimizeLegibility;\\n  /* Support for Firefox. */\\n  -moz-osx-font-smoothing: grayscale;\\n  /* Support for IE. */\\n  font-feature-settings: 'liga'; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./node_modules/material-icons/iconfont/material-icons.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot":
/*!************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/MaterialIcons-Regular.eot\";\n\n//# sourceURL=webpack:///./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot?");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf":
/*!************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/MaterialIcons-Regular.ttf\";\n\n//# sourceURL=webpack:///./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf?");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff":
/*!*************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/MaterialIcons-Regular.woff\";\n\n//# sourceURL=webpack:///./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff?");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2":
/*!**************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2 ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/MaterialIcons-Regular.woff2\";\n\n//# sourceURL=webpack:///./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2?");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/material-icons.css":
false,

/***/ "./node_modules/material-icons/iconfont/material-icons.scss":
/*!******************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/material-icons.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./material-icons.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./material-icons.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.scss\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./material-icons.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.scss\");\n\n        if (typeof newContent === 'string') {\n          newContent = [[module.i, newContent, '']];\n        }\n        \n        update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/material-icons/iconfont/material-icons.scss?");

/***/ })

})