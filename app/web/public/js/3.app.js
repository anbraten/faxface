(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SendFax.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/SendFax.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/api */ \"./web/src/common/api.js\");\n/* harmony import */ var _common_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/jwt */ \"./web/src/common/jwt.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SendFax',\n  data: function () {\n    return {\n      loading: false,\n      file: '',\n      destination: ''\n    }\n  },\n  methods: {\n    onSubmit() {\n      var self = this\n      this.loading = true\n\n      var payload = new FormData()\n      payload.append('destination', this.destination)\n      payload.append('faxfile', this.file)\n\n      _common_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].upload('send', payload)\n        .then((response) => {\n          // TODO\n          console.log(response.data)\n          self.loading = false\n        })\n    },\n    handleFileUpload(){\n      this.file = this.$refs.file.files[0]\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=template&id=ffe625a0&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/SendFax.vue?vue&type=template&id=ffe625a0& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"row\" }, [\n    _c(\"div\", { staticClass: \"col-xs-12\" }, [\n      _c(\"div\", { staticClass: \"widget\" }, [\n        _c(\"div\", { staticClass: \"widget-body\" }, [\n          _c(\n            \"form\",\n            {\n              on: {\n                submit: function($event) {\n                  $event.preventDefault()\n                  _vm.onSubmit()\n                }\n              }\n            },\n            [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"form-group\" }, [\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.destination,\n                      expression: \"destination\"\n                    }\n                  ],\n                  staticClass: \"form-control\",\n                  attrs: {\n                    type: \"text\",\n                    name: \"destination\",\n                    placeholder: \"Empfänger (Nummer)\",\n                    required: \"\"\n                  },\n                  domProps: { value: _vm.destination },\n                  on: {\n                    input: function($event) {\n                      if ($event.target.composing) {\n                        return\n                      }\n                      _vm.destination = $event.target.value\n                    }\n                  }\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"form-group\" }, [\n                _c(\"input\", {\n                  ref: \"file\",\n                  attrs: {\n                    type: \"file\",\n                    id: \"file\",\n                    accept: \"application/pdf\",\n                    required: \"\"\n                  },\n                  on: {\n                    change: function($event) {\n                      _vm.handleFileUpload()\n                    }\n                  }\n                })\n              ]),\n              _vm._v(\" \"),\n              !_vm.loading\n                ? _c(\"input\", {\n                    staticClass: \"btn btn-dark\",\n                    attrs: { type: \"submit\", value: \"Senden\" }\n                  })\n                : _c(\"button\", { staticClass: \"btn btn-dark\" }, [\n                    _c(\"i\", { staticClass: \"fa fa-spinner fa-pulse fa-fw\" }),\n                    _vm._v(\" Wird gesendet ...\")\n                  ])\n            ]\n          )\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"select\", { staticClass: \"form-control\", attrs: { required: \"\" } }, [\n        _c(\"option\", { attrs: { value: \"\" } }),\n        _vm._v(\" \"),\n        _c(\"option\", { attrs: { value: \"+491234\" } }, [\n          _vm._v(\"+491293717239821739\")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./web/src/views/SendFax.vue":
/*!***********************************!*\
  !*** ./web/src/views/SendFax.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SendFax_vue_vue_type_template_id_ffe625a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SendFax.vue?vue&type=template&id=ffe625a0& */ \"./web/src/views/SendFax.vue?vue&type=template&id=ffe625a0&\");\n/* harmony import */ var _SendFax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendFax.vue?vue&type=script&lang=js& */ \"./web/src/views/SendFax.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SendFax_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SendFax.vue?vue&type=style&index=0&lang=css& */ \"./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SendFax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SendFax_vue_vue_type_template_id_ffe625a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SendFax_vue_vue_type_template_id_ffe625a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"web/src/views/SendFax.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?");

/***/ }),

/***/ "./web/src/views/SendFax.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./web/src/views/SendFax.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./SendFax.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?");

/***/ }),

/***/ "./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************!*\
  !*** ./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SendFax.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?");

/***/ }),

/***/ "./web/src/views/SendFax.vue?vue&type=template&id=ffe625a0&":
/*!******************************************************************!*\
  !*** ./web/src/views/SendFax.vue?vue&type=template&id=ffe625a0& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_template_id_ffe625a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SendFax.vue?vue&type=template&id=ffe625a0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/views/SendFax.vue?vue&type=template&id=ffe625a0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_template_id_ffe625a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendFax_vue_vue_type_template_id_ffe625a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./web/src/views/SendFax.vue?");

/***/ })

}]);