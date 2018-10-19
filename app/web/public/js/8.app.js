(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/vue-loader/lib/index.js?!./web/src/views/AdminLogs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/AdminLogs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/api */ \"./web/src/common/api.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AdminLogs',\n  data: () => {\n    return {\n      logs: [],\n      isLoading: false,\n      reloader: null\n    }\n  },\n  methods: {\n    loadLogs () {\n      var self = this\n      this.isLoading = true\n      _common_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('admin', 'logs').then((res) => {\n        var data = '[' + res.data.trim().replace(/(?:\\r\\n|\\r|\\n)/g, ',') + ']'\n        this.logs = JSON.parse(data).reverse()\n        self.isLoading = false\n      })\n    },\n    prettyHTML(html) {\n      return html.replace(/\\n/g, \"<br />\")\n    }\n  },\n  computed: {\n    category() {\n      return this.$route.params.category || null\n    }\n  },\n  beforeMount() {\n    this.loadLogs()\n    this.reloader = setInterval(this.loadLogs, 5000)\n  },\n  beforeDestroy() {\n    clearInterval(this.reloader)\n  }\n});\n\n\n//# sourceURL=webpack:///./web/src/views/AdminLogs.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/views/AdminLogs.vue?vue&type=template&id=3e435b19&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/AdminLogs.vue?vue&type=template&id=3e435b19& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"row\" }, [\n    _c(\"div\", { staticClass: \"col-xs-12\" }, [\n      _c(\"div\", { staticClass: \"widget\" }, [\n        _c(\"div\", { staticClass: \"widget-body no-padding\" }, [\n          _c(\"div\", { staticClass: \"table-responsive\" }, [\n            _c(\"table\", { staticClass: \"table table-hover table-filters\" }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\n                \"tbody\",\n                _vm._l(_vm.logs, function(log) {\n                  return _c(\n                    \"tr\",\n                    [\n                      _vm.category === null || _vm.category == log.module\n                        ? [\n                            _c(\"td\", [_vm._v(_vm._s(log.timestamp))]),\n                            _vm._v(\" \"),\n                            _c(\"td\", [_vm._v(_vm._s(log.module || \"default\"))]),\n                            _vm._v(\" \"),\n                            _c(\"td\", [_vm._v(_vm._s(log.level))]),\n                            _vm._v(\" \"),\n                            _c(\"td\", {\n                              domProps: {\n                                innerHTML: _vm._s(_vm.prettyHTML(log.message))\n                              }\n                            })\n                          ]\n                        : _vm._e()\n                    ],\n                    2\n                  )\n                })\n              )\n            ])\n          ])\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [\n        _c(\"th\", [_vm._v(\"Datum\")]),\n        _vm._v(\" \"),\n        _c(\"th\", [_vm._v(\"Module\")]),\n        _vm._v(\" \"),\n        _c(\"th\", [_vm._v(\"Level\")]),\n        _vm._v(\" \"),\n        _c(\"th\", [_vm._v(\"Nachricht\")])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./web/src/views/AdminLogs.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./web/src/views/AdminLogs.vue":
/*!*************************************!*\
  !*** ./web/src/views/AdminLogs.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AdminLogs_vue_vue_type_template_id_3e435b19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLogs.vue?vue&type=template&id=3e435b19& */ \"./web/src/views/AdminLogs.vue?vue&type=template&id=3e435b19&\");\n/* harmony import */ var _AdminLogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLogs.vue?vue&type=script&lang=js& */ \"./web/src/views/AdminLogs.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AdminLogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AdminLogs_vue_vue_type_template_id_3e435b19___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AdminLogs_vue_vue_type_template_id_3e435b19___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"web/src/views/AdminLogs.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./web/src/views/AdminLogs.vue?");

/***/ }),

/***/ "./web/src/views/AdminLogs.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./web/src/views/AdminLogs.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLogs.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./web/src/views/AdminLogs.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./web/src/views/AdminLogs.vue?");

/***/ }),

/***/ "./web/src/views/AdminLogs.vue?vue&type=template&id=3e435b19&":
/*!********************************************************************!*\
  !*** ./web/src/views/AdminLogs.vue?vue&type=template&id=3e435b19& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLogs_vue_vue_type_template_id_3e435b19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLogs.vue?vue&type=template&id=3e435b19& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/views/AdminLogs.vue?vue&type=template&id=3e435b19&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLogs_vue_vue_type_template_id_3e435b19___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLogs_vue_vue_type_template_id_3e435b19___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./web/src/views/AdminLogs.vue?");

/***/ })

}]);