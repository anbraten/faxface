(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/vue-loader/lib/index.js?!./web/src/components/Header.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./web/src/components/Header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/actions.type */ \"./web/src/store/actions.type.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'sidebar',\n  methods: {\n    logout() {\n      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_1__[\"LOGOUT\"])\n      this.$router.push({ name: 'login' })\n    }\n  },\n  computed: {\n    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])([\n      'isAdmin'\n    ])\n  }\n});\n\n\n//# sourceURL=webpack:///./web/src/components/Header.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./web/src/components/Sidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./web/src/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/actions.type */ \"./web/src/store/actions.type.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'sidebar',\n  methods: {\n    logout() {\n      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_1__[\"LOGOUT\"])\n      this.$router.push({ name: 'login' })\n    }\n  },\n  computed: {\n    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])([\n      'isAdmin'\n    ])\n  }\n});\n\n\n//# sourceURL=webpack:///./web/src/components/Sidebar.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./web/src/views/Wrapper.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/Wrapper.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Sidebar */ \"./web/src/components/Sidebar.vue\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./web/src/components/Header.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Wrapper',\n  components: {\n    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Header: _components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data: () => {\n    return {\n      isSidebarOpen: true,\n      isLoading: true,\n    }\n  },\n  computed: {\n    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])([\n      'isAuthenticated'\n    ])\n  },\n  watch: {\n    isAuthenticated: function (val) {\n      if (!this.isAuthenticated) {\n        this.$router.push({ name: 'login' })\n      }\n    }\n  },\n  methods: {\n    toggleSidebar() {\n      this.isSidebarOpen = !this.isSidebarOpen\n    }\n  },\n  beforeMount(){\n    this.isLoading = false\n\n    var width = window.innerWidth\n      || document.documentElement.clientWidth\n      || document.body.clientWidth\n    if (width < 560) {\n      // close sidebar on mobile devices\n      this.isSidebarOpen = false\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./web/src/views/Wrapper.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/components/Header.vue?vue&type=template&id=638bd242&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/src/components/Header.vue?vue&type=template&id=638bd242& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"row header\" }, [\n    _c(\"div\", { staticClass: \"col-xs-12\" }, [\n      _c(\"div\", { staticClass: \"user pull-right\" }, [\n        _c(\"div\", { staticClass: \"item\" }, [\n          _c(\"a\", { attrs: { href: \"#\" }, on: { click: _vm.logout } }, [\n            _c(\"i\", { staticClass: \"fa fa-sign-out-alt\" })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _vm._m(0)\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"meta\" }, [\n      _c(\"div\", { staticClass: \"page\" }, [_vm._v(\"\\n        Faxface\\n      \")]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"breadcrumb-links\" }, [\n        _vm._v(\"\\n        Home / ...\\n      \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./web/src/components/Header.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/components/Sidebar.vue?vue&type=template&id=9d025012&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/src/components/Sidebar.vue?vue&type=template&id=9d025012& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"sidebar-wrapper\" } }, [\n    _c(\"ul\", { staticClass: \"sidebar\" }, [\n      _c(\"li\", { staticClass: \"sidebar-main\" }, [\n        _c(\n          \"a\",\n          {\n            attrs: { href: \"#\" },\n            on: {\n              click: function($event) {\n                _vm.$emit(\"toggleSidebar\")\n              }\n            }\n          },\n          [\n            _vm._v(\"\\n        Faxface\\n        \"),\n            _c(\"span\", {\n              staticClass: \"menu-icon glyphicon glyphicon-transfer\"\n            })\n          ]\n        )\n      ]),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"li\",\n        { staticClass: \"sidebar-list\" },\n        [\n          _c(\"router-link\", { attrs: { to: { name: \"home\" } } }, [\n            _vm._v(\"Dashboard \"),\n            _c(\"span\", { staticClass: \"menu-icon fa fa-tachometer-alt\" })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"router-link\",\n            { attrs: { to: { name: \"faxes\", params: { list: \"received\" } } } },\n            [\n              _vm._v(\"Empfangen \"),\n              _c(\"span\", { staticClass: \"menu-icon fa fa-download\" })\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"router-link\",\n            { attrs: { to: { name: \"faxes\", params: { list: \"sent\" } } } },\n            [\n              _vm._v(\"Gesendet \"),\n              _c(\"span\", { staticClass: \"menu-icon fa fa-upload\" })\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\"router-link\", { attrs: { to: { name: \"send\" } } }, [\n            _vm._v(\"Fax senden \"),\n            _c(\"span\", { staticClass: \"menu-icon fa fa-pen\" })\n          ]),\n          _vm._v(\" \"),\n          _c(\"router-link\", { attrs: { to: { name: \"settings\" } } }, [\n            _vm._v(\"Einstellungen \"),\n            _c(\"span\", { staticClass: \"menu-icon fa fa-cog\" })\n          ]),\n          _vm._v(\" \"),\n          _vm.isAdmin\n            ? _c(\"router-link\", { attrs: { to: { name: \"adminLogs\" } } }, [\n                _vm._v(\"Logs \"),\n                _c(\"span\", { staticClass: \"menu-icon fa fa-bug\" })\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _c(\"a\", { attrs: { href: \"#\" }, on: { click: _vm.logout } }, [\n            _vm._v(\"Logout \"),\n            _c(\"span\", { staticClass: \"menu-icon fa fa-times\" })\n          ])\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"li\", { staticClass: \"sidebar-title\" }, [\n      _c(\"span\", [_vm._v(\"NAVIGATION\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"sidebar-footer\" }, [\n      _c(\"div\", { staticClass: \"col-xs-4\" }, [\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href: \"https://github.com/garogat/faxface\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"\\n        Github\\n      \")]\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-xs-4\" }, [\n        _c(\"a\", { attrs: { href: \"#\", target: \"_blank\" } }, [\n          _vm._v(\"\\n        About\\n      \")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-xs-4\" }, [\n        _c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"\\n        Support\\n      \")])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./web/src/components/Sidebar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/views/Wrapper.vue?vue&type=template&id=46b37c4e&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/Wrapper.vue?vue&type=template&id=46b37c4e& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      class: { open: _vm.isSidebarOpen, loading: _vm.isLoading },\n      attrs: { id: \"page-wrapper\" }\n    },\n    [\n      _c(\"Sidebar\", { on: { toggleSidebar: _vm.toggleSidebar } }),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"content-wrapper\" } }, [\n        _c(\n          \"div\",\n          { staticClass: \"page-content\" },\n          [_c(\"Header\"), _vm._v(\" \"), _c(\"router-view\")],\n          1\n        )\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./web/src/views/Wrapper.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

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

/***/ "./web/src/components/Header.vue":
/*!***************************************!*\
  !*** ./web/src/components/Header.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header_vue_vue_type_template_id_638bd242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=638bd242& */ \"./web/src/components/Header.vue?vue&type=template&id=638bd242&\");\n/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ \"./web/src/components/Header.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Header_vue_vue_type_template_id_638bd242___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Header_vue_vue_type_template_id_638bd242___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"web/src/components/Header.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./web/src/components/Header.vue?");

/***/ }),

/***/ "./web/src/components/Header.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./web/src/components/Header.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./web/src/components/Header.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./web/src/components/Header.vue?");

/***/ }),

/***/ "./web/src/components/Header.vue?vue&type=template&id=638bd242&":
/*!**********************************************************************!*\
  !*** ./web/src/components/Header.vue?vue&type=template&id=638bd242& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_638bd242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=638bd242& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/components/Header.vue?vue&type=template&id=638bd242&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_638bd242___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_638bd242___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./web/src/components/Header.vue?");

/***/ }),

/***/ "./web/src/components/Sidebar.vue":
/*!****************************************!*\
  !*** ./web/src/components/Sidebar.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sidebar_vue_vue_type_template_id_9d025012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=9d025012& */ \"./web/src/components/Sidebar.vue?vue&type=template&id=9d025012&\");\n/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ \"./web/src/components/Sidebar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Sidebar_vue_vue_type_template_id_9d025012___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Sidebar_vue_vue_type_template_id_9d025012___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"web/src/components/Sidebar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./web/src/components/Sidebar.vue?");

/***/ }),

/***/ "./web/src/components/Sidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./web/src/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./web/src/components/Sidebar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./web/src/components/Sidebar.vue?");

/***/ }),

/***/ "./web/src/components/Sidebar.vue?vue&type=template&id=9d025012&":
/*!***********************************************************************!*\
  !*** ./web/src/components/Sidebar.vue?vue&type=template&id=9d025012& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_9d025012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=9d025012& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/components/Sidebar.vue?vue&type=template&id=9d025012&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_9d025012___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_9d025012___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./web/src/components/Sidebar.vue?");

/***/ }),

/***/ "./web/src/views/Wrapper.vue":
/*!***********************************!*\
  !*** ./web/src/views/Wrapper.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wrapper_vue_vue_type_template_id_46b37c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrapper.vue?vue&type=template&id=46b37c4e& */ \"./web/src/views/Wrapper.vue?vue&type=template&id=46b37c4e&\");\n/* harmony import */ var _Wrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper.vue?vue&type=script&lang=js& */ \"./web/src/views/Wrapper.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Wrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Wrapper_vue_vue_type_template_id_46b37c4e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Wrapper_vue_vue_type_template_id_46b37c4e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"web/src/views/Wrapper.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./web/src/views/Wrapper.vue?");

/***/ }),

/***/ "./web/src/views/Wrapper.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./web/src/views/Wrapper.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Wrapper.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./web/src/views/Wrapper.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./web/src/views/Wrapper.vue?");

/***/ }),

/***/ "./web/src/views/Wrapper.vue?vue&type=template&id=46b37c4e&":
/*!******************************************************************!*\
  !*** ./web/src/views/Wrapper.vue?vue&type=template&id=46b37c4e& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_template_id_46b37c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Wrapper.vue?vue&type=template&id=46b37c4e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/src/views/Wrapper.vue?vue&type=template&id=46b37c4e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_template_id_46b37c4e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wrapper_vue_vue_type_template_id_46b37c4e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./web/src/views/Wrapper.vue?");

/***/ })

}]);