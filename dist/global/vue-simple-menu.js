window["VueSimpleMenu"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/lib/VueSimpleMenuItem.vue?vue&type=template&id=52a158e0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "vue-simple-menu" },
    _vm._l(_vm.menu, function(item) {
      return _c(
        "li",
        {
          key: item.id,
          staticClass: "vue-simple-menu__item",
          class: {
            "vue-simple-menu__item_expand": item.expand,
            expanded: item.expanded
          }
        },
        [
          item.vueRouter
            ? [
                _c(
                  "router-link",
                  {
                    staticClass: "vue-simple-menu__title vue-simple-menu__link",
                    attrs: { to: item.uri }
                  },
                  [_vm._v(_vm._s(item.name))]
                )
              ]
            : [
                item.uri
                  ? _c(
                      "a",
                      {
                        staticClass:
                          "vue-simple-menu__title vue-simple-menu__link",
                        attrs: { href: item.uri }
                      },
                      [_vm._v(_vm._s(item.name))]
                    )
                  : _c(
                      "span",
                      {
                        staticClass: "vue-simple-menu__title",
                        on: {
                          click: function($event) {
                            _vm.expandTrigger(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item.name))]
                    )
              ],
          _vm._v(" "),
          item.list
            ? _c(
                "div",
                { staticClass: "vue-simple-menu__child" },
                [_c("vue-simple-menu-item", { attrs: { menu: item.list } })],
                1
              )
            : _vm._e()
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/scripts/lib/VueSimpleMenuItem.vue?vue&type=template&id=52a158e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/lib/VueSimpleMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VueSimpleMenuItemvue_type_script_lang_js_ = ({
  name: 'VueSimpleMenuItem',
  props: {
    menu: {
      required: true,
      type: Array
    }
  },
  methods: {
    expandTrigger: function expandTrigger(item) {
      if (item.expand) item.expanded = !item.expanded;
    }
  }
});
// CONCATENATED MODULE: ./src/scripts/lib/VueSimpleMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_VueSimpleMenuItemvue_type_script_lang_js_ = (VueSimpleMenuItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/scripts/lib/VueSimpleMenuItem.vue





/* normalize component */

var component = normalizeComponent(
  lib_VueSimpleMenuItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/scripts/lib/VueSimpleMenuItem.vue"
/* harmony default export */ var VueSimpleMenuItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/lib/VueSimpleMenu.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var VueSimpleMenuvue_type_script_lang_js_ = ({
  name: 'VueSimpleMenu',
  components: {
    'vue-simple-menu-item': VueSimpleMenuItem
  },
  props: {
    rawMenuData: {
      type: Object,
      required: true
    },
    defaultName: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      list: []
    };
  },
  mounted: function mounted() {
    if (this.rawMenuData) {
      this.list = this.generateBranch(this.rawMenuData);
    }
  },
  watch: {
    rawMenuData: function rawMenuData() {
      this.list = this.generateBranch(this.rawMenuData);
    }
  },
  methods: {
    /**
     * generateBranch - recursive function for generate menu branch
     *
     * @param  {object} menuBranch branc menu for precessing
     * @return {array} complete menu data
     */
    generateBranch: function generateBranch(menuBranch) {
      var _this = this;

      return Object.keys(menuBranch).reduce(function (acc, item) {
        var menuItem = _objectSpread({}, menuBranch[item]); // If have child list items,
        // generate child branch


        if (menuItem.list) menuItem.list = _this.generateBranch(menuItem.list); // If item need expand behavoir
        // add property

        if (menuItem.list && !menuItem.uri) {
          menuItem.expand = true;
          menuItem.expanded = typeof menuItem.expanded === 'boolean' ? menuItem.expanded : true;
        }

        return acc.concat(menuItem);
      }, []);
    }
  },
  template: '<vue-simple-menu-item :menu="list" />'
});
// CONCATENATED MODULE: ./src/scripts/lib/VueSimpleMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_VueSimpleMenuvue_type_script_lang_js_ = (VueSimpleMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/scripts/lib/VueSimpleMenu.vue
var VueSimpleMenu_render, VueSimpleMenu_staticRenderFns




/* normalize component */

var VueSimpleMenu_component = normalizeComponent(
  lib_VueSimpleMenuvue_type_script_lang_js_,
  VueSimpleMenu_render,
  VueSimpleMenu_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var VueSimpleMenu_api; }
VueSimpleMenu_component.options.__file = "src/scripts/lib/VueSimpleMenu.vue"
/* harmony default export */ var VueSimpleMenu = (VueSimpleMenu_component.exports);
// CONCATENATED MODULE: ./src/scripts/plugin.js
/**
 * File use for create component for global element, include as script tag
 */

var VueSimpleMenuPlugin = {
  install: function install(Vue) {
    Vue.component('vue-simple-menu', VueSimpleMenu);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSimpleMenuPlugin);
}

/* harmony default export */ var scripts_plugin = __webpack_exports__["default"] = (VueSimpleMenuPlugin);

/***/ })
/******/ ])["default"];