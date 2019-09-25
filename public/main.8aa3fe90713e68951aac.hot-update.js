webpackHotUpdate("main",{

/***/ "./client/header/header.js":
/*!*********************************!*\
  !*** ./client/header/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ \"./client/header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-default\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container-fluid\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navbar-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"navbar-toggle collapsed\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"sr-only\"\n  }, \"Toggle navigation\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"icon-bar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"icon-bar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"icon-bar\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"navbar-brand\",\n    href: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"header-image\",\n    src: \"/public/images/MTG_Logo_rev.png\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text\"\n  }, \"Magic Card Prices\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./client/header/header.js?");

/***/ }),

/***/ "./client/header/header.scss":
/*!***********************************!*\
  !*** ./client/header/header.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/header/header.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/header/header.scss\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/header/header.scss\");\n\n        if (typeof newContent === 'string') {\n          newContent = [[module.i, newContent, '']];\n        }\n        \n        update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\n//# sourceURL=webpack:///./client/header/header.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/header/header.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/header/header.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".navbar {\\n  border-radius: 0px; }\\n\\n.navbar-default {\\n  background-color: #0086C0;\\n  border-color: #008BFF;\\n  z-index: 1000; }\\n  .navbar-default .navbar-toggle {\\n    background-color: #fff; }\\n\\n.navbar-brand {\\n  color: #eee;\\n  font-size: 150%;\\n  line-height: 50px;\\n  padding: 0px 12px; }\\n\\n.navbar-header a, .nav a {\\n  color: #eee !important;\\n  font-size: 150%;\\n  cursor: pointer; }\\n\\n.nav a {\\n  box-shadow: inset 2px 0px 2px rgba(0, 0, 0, 0.25); }\\n\\n.nav a:hover {\\n  color: #fff;\\n  text-decoration: none; }\\n\\n.nav a:focus {\\n  outline: none;\\n  color: #eee; }\\n\\n.nav a.selected {\\n  color: #fff;\\n  background-color: #777; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/header/header.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ })

})