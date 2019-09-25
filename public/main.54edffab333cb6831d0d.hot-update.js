webpackHotUpdate("main",{

/***/ "./client/App.js":
false,

/***/ "./client/app/app.css":
/*!****************************!*\
  !*** ./client/app/app.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./client/app/app.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./client/app/app.scss\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./client/app/app.scss\");\n\n        if (typeof newContent === 'string') {\n          newContent = [[module.i, newContent, '']];\n        }\n        \n        update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\n//# sourceURL=webpack:///./client/app/app.scss?");

/***/ }),

/***/ "./client/app/app.js":
/*!***************************!*\
  !*** ./client/app/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ \"./client/app/app.scss\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction app() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"app\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"app-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Edit \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, \"src/App.js\"), \" and save to reload. No you didnt\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"app-link\",\n    href: \"https://reactjs.org\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, \"Learn React\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./client/app/app.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./client/index.scss\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app */ \"./client/app/app.js\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"app\", null), document.getElementById('root'));\nmodule.hot.accept();\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/app/app.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/app/app.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".app {\\n  text-align: center;\\n}\\n\\n.app-logo {\\n  height: 40vmin;\\n}\\n\\n.app-header {\\n  background-color: #282c34;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.app-link {\\n  color: #09d3ac;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/app/app.scss?./node_modules/css-loader/dist/cjs.js");

/***/ })

})
