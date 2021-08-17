/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
var $ = window.jQuery;
var _icons = {
  solidIcons: __webpack_require__(/*! ./solid.json */ "./src/assets/solid.json"),
  regularIcons: __webpack_require__(/*! ./regular.json */ "./src/assets/regular.json"),
  lightIcons: __webpack_require__(/*! ./light.json */ "./src/assets/light.json"),
  duotoneIcons: __webpack_require__(/*! ./duotone.json */ "./src/assets/duotone.json"),
  brandsIcons: __webpack_require__(/*! ./brands.json */ "./src/assets/brands.json")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      iconsPerPage: 60,
      // Amount of icons to display.
      allIcons: true,
      search: null,
      selectedIcon: null,
      selectedOption: '1',
      selectedPage: 1,
      recentIcons: []
    };
  },
  computed: {
    icons: function icons() {
      var _this = this;

      var displayIcons = [];
      /**
       * If seach bar is empty push all icons in display icon array
       */

      if (this.search === null) {
        if (_icons.solidIcons && this.selectedOption === 'fas') _icons.solidIcons.forEach(function (icon) {
          return displayIcons.push(icon);
        });
        if (_icons.regularIcons && this.selectedOption === 'far') _icons.regularIcons.forEach(function (icon) {
          return displayIcons.push(icon);
        });
        if (_icons.lightIcons && this.selectedOption === 'fal') _icons.lightIcons.forEach(function (icon) {
          return displayIcons.push(icon);
        });
        if (_icons.duotoneIcons && this.selectedOption === 'fad') _icons.duotoneIcons.forEach(function (icon) {
          return displayIcons.push(icon);
        });
        if (_icons.brandsIcons && this.selectedOption === 'fab') _icons.brandsIcons.forEach(function (icon) {
          return displayIcons.push(icon);
        }); // Display all icons

        if (_icons.brandsIcons && _icons.solidIcons && _icons.duotoneIcons && _icons.regularIcons && _icons.lightIcons && this.selectedOption === '1') {
          _icons.solidIcons.forEach(function (icon) {
            return displayIcons.push(icon);
          });

          _icons.regularIcons.forEach(function (icon) {
            return displayIcons.push(icon);
          });

          _icons.lightIcons.forEach(function (icon) {
            return displayIcons.push(icon);
          });

          _icons.duotoneIcons.forEach(function (icon) {
            return displayIcons.push(icon);
          });

          _icons.brandsIcons.forEach(function (icon) {
            return displayIcons.push(icon);
          });
        }

        return displayIcons;
      }

      this.resetIndex();

      if (_icons.solidIcons && this.selectedOption === 'fas') {
        _icons.solidIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });
      }

      if (_icons.regularIcons && this.selectedOption === 'far') {
        _icons.regularIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });
      }

      if (_icons.lightIcons && this.selectedOption === 'fal') {
        _icons.lightIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });
      }

      if (_icons.duotoneIcons && this.selectedOption === 'fad') {
        _icons.duotoneIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });
      }

      if (_icons.brandsIcons && this.selectedOption === 'fab') {
        _icons.brandsIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });
      } // Display all icons


      if (_icons.brandsIcons && _icons.solidIcons && _icons.duotoneIcons && _icons.regularIcons && _icons.lightIcons && this.selectedOption === '1') {
        _icons.solidIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });

        _icons.regularIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });

        _icons.lightIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });

        _icons.duotoneIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });

        _icons.brandsIcons.forEach(function (icon) {
          var fullIcon = icon.prefix + ' ' + icon["class"];
          if (fullIcon.includes(_this.search.toLowerCase())) displayIcons.push(icon);
        });
      }

      return displayIcons;
    },
    pages: function pages() {
      return Math.ceil(this.icons.length / this.iconsPerPage);
    }
  },
  created: function created() {
    if (window.localStorage.getItem('janes-wordpress-theme-recent-icons')) {
      this.recentIcons = JSON.parse(window.localStorage.getItem('janes-wordpress-theme-recent-icons'));
    }
  },
  methods: {
    cancel: function cancel() {
      this.close();
    },
    close: function close() {
      this.$destroy();
      jQuery('#iconpicker').remove();
    },
    setIcon: function setIcon(icon) {
      this.selectedIcon = icon;
    },
    resetSelectedIcon: function resetSelectedIcon() {
      this.selectedIcon = null;
    },
    useIcon: function useIcon() {
      var _this2 = this;

      window.WordplateFontawesomePicker.inputElement.value = "".concat(this.selectedIcon.prefix, " ").concat(this.selectedIcon["class"]);
      this.$nextTick(function () {
        jQuery(window.WordplateFontawesomePicker.inputElement).trigger('change');
      });
      var tempRecent = this.recentIcons.filter(function (icon) {
        return JSON.stringify(icon) !== JSON.stringify(_this2.selectedIcon);
      });
      tempRecent.unshift(this.selectedIcon);
      this.recentIcons = tempRecent;
      window.localStorage.setItem('janes-wordpress-theme-recent-icons', JSON.stringify(tempRecent));
      this.selectedIcon = null;
      this.close();
    },
    fetchLightIcons: function fetchLightIcons() {
      var _this3 = this;

      if (this.selectedOption === '1' || this.selectedOption === 'fal') {
        fetch('/light.json').then(function (response) {
          return response.json();
        }).then(function (data) {
          _icons.lightIcons = data;
          _this3.allIcons = true;
        });
      } else _icons.lightIcons = null;
    },
    fetchRegularIcons: function fetchRegularIcons() {
      var _this4 = this;

      if (this.selectedOption === '1' || this.selectedOption === 'far') {
        fetch('/regular.json').then(function (response) {
          return response.json();
        }).then(function (data) {
          _icons.regularIcons = data;
          _this4.allIcons = true;
        });
      } else _icons.regularIcons = null;
    },
    fetchSolidIcons: function fetchSolidIcons() {
      var _this5 = this;

      if (this.selectedOption === '1' || this.selectedOption === 'fas') {
        fetch('/solid.json').then(function (response) {
          return response.json();
        }).then(function (data) {
          _icons.solidIcons = data;
          _this5.allIcons = true;
        });
      } else _icons.solidIcons = null;
    },
    fetchDuotoneIcons: function fetchDuotoneIcons() {
      var _this6 = this;

      if (this.selectedOption === '1' || this.selectedOption === 'fad') {
        fetch('/duotone.json').then(function (response) {
          return response.json();
        }).then(function (data) {
          _icons.duotoneIcons = data;
          _this6.allIcons = true;
        });
      } else _icons.duotoneIcons = null;
    },
    fetchBrandIcons: function fetchBrandIcons() {
      var _this7 = this;

      if (this.selectedOption === '1' || this.selectedOption === 'fab') {
        fetch('/brands.json').then(function (response) {
          return response.json();
        }).then(function (data) {
          _icons.brandsIcons = data;
          _this7.allIcons = true;
        });
      } else _icons.brandsIcons = null;
    },
    prevPage: function prevPage() {
      if (this.selectedPage > 0) {
        this.selectedPage--;
      }
    },
    nextPage: function nextPage() {
      if (this.selectedPage < this.pages) {
        this.selectedPage++;
      }
    },
    resetIndex: function resetIndex() {
      this.selectedPage = 1;
    },
    resetSearch: function resetSearch() {
      this.search = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://pro.fontawesome.com/releases/v5.15.3/css/all.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[href][data-v-e60c5eec],\nbutton[data-v-e60c5eec] {\n    cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_style_index_0_id_e60c5eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_style_index_0_id_e60c5eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_style_index_0_id_e60c5eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/IconPicker.vue":
/*!***********************************!*\
  !*** ./src/assets/IconPicker.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconPicker_vue_vue_type_template_id_e60c5eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true& */ "./src/assets/IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true&");
/* harmony import */ var _IconPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconPicker.vue?vue&type=script&lang=js& */ "./src/assets/IconPicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _IconPicker_vue_vue_type_style_index_0_id_e60c5eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css& */ "./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _IconPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _IconPicker_vue_vue_type_template_id_e60c5eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IconPicker_vue_vue_type_template_id_e60c5eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e60c5eec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assets/IconPicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/assets/IconPicker.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/assets/IconPicker.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IconPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_style_index_0_id_e60c5eec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=style&index=0&id=e60c5eec&scoped=true&lang=css&");


/***/ }),

/***/ "./src/assets/IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/assets/IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_template_id_e60c5eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_template_id_e60c5eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconPicker_vue_vue_type_template_id_e60c5eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/assets/IconPicker.vue?vue&type=template&id=e60c5eec&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "sjwfp-fixed sjwfp-z-10 sjwfp-inset-0 sjwfp-overflow-y-auto sjwfp-bg-gray-500 sjwfp-bg-opacity-75 sjwfp-transition-opacity",
      attrs: {
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "sjwfp-flex sjwfp-items-center sjwfp-justify-center sjwfp-min-h-screen sjwfp-pt-4 sjwfp-px-4 sjwfp-pb-20 sjwfp-text-center"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "sjwfp-inline-block sjwfp-align-bottom sjwfp-bg-white sjwfp-rounded-lg sjwfp-text-left sjwfp-overflow-hidden sjwfp-shadow-xl sjwfp-transform sjwfp-transition-all sm:sjwfp-my-8 sm:sjwfp-align-middle sm:sjwfp-max-w-screen-md sm:sjwfp-w-full"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "sjwfp-bg-white sjwfp-px-4 sjwfp-pt-5 sjwfp-pb-4 sm:sjwfp-p-6 sm:sjwfp-pb-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "sm:sjwfp-flex sm:sjwfp-items-start" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "sjwfp-mt-3 sjwfp-text-center sm:sjwfp-text-left sjwfp-w-full"
                        },
                        [
                          _c("h3", { staticClass: "sjwfp-mt-0" }, [
                            _vm._v(
                              "\n                            Keywords icon:\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "sjwfp-relative sjwfp-flex sjwfp-items-center"
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "far fa-search sjwfp-absolute sjwfp-text-lg sjwfp-left-4 sjwfp-pointer-events-none"
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.search,
                                    expression: "search"
                                  }
                                ],
                                staticClass:
                                  "sjwfp-bg-gray-50 sjwfp-rounded sjwfp-p-3 sjwfp-pl-10 sjwfp-w-full sjwfp-border sjwfp-border-gray-400 focus-within:sjwfp-outline-none",
                                domProps: { value: _vm.search },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.search = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.search
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "sjwfp-absolute sjwfp-text-lg sjwfp-right-2 !sjwfp-bg-transparent",
                                      on: { click: _vm.resetSearch }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-times-circle"
                                      })
                                    ]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "sjwfp-flex sjwfp-items-center sjwfp-my-3"
                            },
                            [
                              _c("p", { staticClass: "sjwfp-w-1/2" }, [
                                _vm._v(
                                  "\n                                Select icon category:\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.selectedOption,
                                      expression: "selectedOption"
                                    }
                                  ],
                                  staticClass:
                                    "sjwfp-block sjwfp-appearance-none sjwfp-w-1/2 sjwfp-bg-grey-lighter sjwfp-border sjwfp-border-grey-lighter sjwfp-text-grey-darker sjwfp-py-3 sjwfp-px-4 sjwfp-pr-8 sjwfp-rounded sjwfp-leading-tight sjwfp-focus:outline-none sjwfp-focus:bg-white sjwfp-focus:border-grey",
                                  attrs: { id: "grid-state" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.selectedOption = $event.target
                                        .multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v(
                                      "\n                                    All\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "fas" } }, [
                                    _vm._v(
                                      "\n                                    Solid\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "far" } }, [
                                    _vm._v(
                                      "\n                                    Regular\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "fal" } }, [
                                    _vm._v(
                                      "\n                                    Light\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "fad" } }, [
                                    _vm._v(
                                      "\n                                    Duotone\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "fab" } }, [
                                    _vm._v(
                                      "\n                                    Brands\n                                "
                                    )
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "sjwfp-grid sjwfp-grid-cols-6 md:sjwfp-grid-cols-8 xl:sjwfp-grid-cols-12 sjwfp-mt-2 sjwfp-text-center"
                            },
                            _vm._l(
                              _vm.icons.slice(
                                (_vm.selectedPage - 1) * _vm.iconsPerPage,
                                _vm.selectedPage * _vm.iconsPerPage
                              ),
                              function(icon, key) {
                                return _c("div", { key: key }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "sjwfp-p-4 sjwfp-text-2xl sjwfp-text-gray-700 sjwfp-rounded !sjwfp-bg-transparent hover:sjwfp-text-white hover:!sjwfp-bg-primary-500 sjwfp-transition-colors",
                                      on: {
                                        click: function($event) {
                                          return _vm.setIcon(icon)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        class:
                                          icon.prefix +
                                          " " +
                                          icon.class +
                                          " fa-fw"
                                      })
                                    ]
                                  )
                                ])
                              }
                            ),
                            0
                          ),
                          _vm._v(" "),
                          _vm.icons.length === 0
                            ? _c(
                                "p",
                                { staticClass: "sjwfp-text-orange sjwfp-mt-4" },
                                [
                                  _vm._v(
                                    "\n                            Geen icons gevonden\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.icons.length > _vm.iconsPerPage
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "sjwfp-flex sjwfp-justify-center sjwfp-items-center sjwfp-mt-4"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "sjwfp-bg-transparent",
                                      on: { click: _vm.prevPage }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "far fa-chevron-left sjwfp-text-2xl",
                                        class:
                                          _vm.selectedPage > 1
                                            ? "sjwfp-visible"
                                            : "sjwfp-invisible"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "px-4" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm.selectedPage +
                                            "/" +
                                            parseInt(_vm.pages)
                                        ) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "sjwfp-bg-transparent",
                                      on: { click: _vm.nextPage }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "far fa-chevron-right sjwfp-text-2xl",
                                        class:
                                          _vm.selectedPage !==
                                          parseInt(_vm.pages)
                                            ? "sjwfp-visible"
                                            : "sjwfp-invisible"
                                      })
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.recentIcons.length > 0
                            ? _c("div", [
                                _c("p", [_vm._v("Recent icons:")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "sjwfp-grid sjwfp-grid-cols-10 sjwfp-w-full sjwfp-mt-2 sjwfp-text-center"
                                  },
                                  _vm._l(_vm.recentIcons.slice(0, 10), function(
                                    icon,
                                    key
                                  ) {
                                    return _c(
                                      "button",
                                      {
                                        key: key,
                                        staticClass:
                                          "sjwfp-p-2 sjwfp-text-xl sjwfp-text-gray-700 sjwfp-rounded !sjwfp-bg-transparent hover:sjwfp-text-white hover:!sjwfp-bg-primary-500 sjwfp-transition-colors",
                                        on: {
                                          click: function($event) {
                                            return _vm.setIcon(icon)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          class:
                                            icon.prefix +
                                            " " +
                                            icon.class +
                                            " fa-fw"
                                        })
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            : _vm._e()
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "sjwfp-bg-white sjwfp-px-4 sjwfp-py-3 sm:sjwfp-px-6 sm:sjwfp-flex"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "sjwfp-mt-3 sjwfp-items-center sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-bg-gray-50 sjwfp-border sjwfp-border-gray-500 sjwfp-text-base sjwfp-font-medium sjwfp-text-gray-700 hover:sjwfp-bg-gray-100 sm:sjwfp-mt-0 sm:sjwfp-w-auto sm:sjwfp-text-sm",
                      attrs: { id: "cancelButton", type: "button" },
                      on: { click: _vm.cancel }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _vm.selectedIcon
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "sjwfp-mt-3 sjwfp-items-center sjwfp-w-full sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-bg-primary-500 sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-text-base sjwfp-font-medium sjwfp-text-white hover:sjwfp-bg-blue-500 sm:sjwfp-mt-0 sm:sjwfp-ml-3 sm:sjwfp-text-sm",
                          attrs: { type: "button" },
                          on: { click: _vm.useIcon }
                        },
                        [
                          _c("span", [_vm._v("Use")]),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "sjwfp-px-2 sjwfp-text-lg",
                            class:
                              _vm.selectedIcon.prefix +
                              " " +
                              _vm.selectedIcon.class
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("as icon")])
                        ]
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : 0
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : 0;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
     true && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ( true && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ( true && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if ( true && options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ( true &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /[ \f\t\r\n]+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!(
    el.component ||
    el.attrsMap[':is'] ||
    el.attrsMap['v-bind:is'] ||
    !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
  ); };
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        if (true) {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else if (true) {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (true) {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
         true && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        if (true) {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if ( true && options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if ( true && options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if ( true && options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (true) {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ( true && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if ( true && slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if ( true && el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        if (true) {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        if (true) {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else if (true) {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ( true && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
           true &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if ( true && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
       true &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + ".apply(null, arguments)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ").apply(null, arguments)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ( true && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  // fix #11483, Root level <script> tags should not be rendered.
  var code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
       true && state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ( true &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ( true && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? (",function(){return " + children + "}") : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if ( true && options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      if (true) {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
     true && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ( true && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue);


/***/ }),

/***/ "./src/assets/brands.json":
/*!********************************!*\
  !*** ./src/assets/brands.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"prefix":"fab","class":"fa-500px"},{"prefix":"fab","class":"fa-accessible-icon"},{"prefix":"fab","class":"fa-accusoft"},{"prefix":"fab","class":"fa-acquisitions-incorporated"},{"prefix":"fab","class":"fa-adn"},{"prefix":"fab","class":"fa-adversal"},{"prefix":"fab","class":"fa-affiliatetheme"},{"prefix":"fab","class":"fa-airbnb"},{"prefix":"fab","class":"fa-algolia"},{"prefix":"fab","class":"fa-alipay"},{"prefix":"fab","class":"fa-amazon"},{"prefix":"fab","class":"fa-amazon-pay"},{"prefix":"fab","class":"fa-amilia"},{"prefix":"fab","class":"fa-android"},{"prefix":"fab","class":"fa-angellist"},{"prefix":"fab","class":"fa-angrycreative"},{"prefix":"fab","class":"fa-angular"},{"prefix":"fab","class":"fa-app-store"},{"prefix":"fab","class":"fa-app-store-ios"},{"prefix":"fab","class":"fa-apper"},{"prefix":"fab","class":"fa-apple"},{"prefix":"fab","class":"fa-apple-pay"},{"prefix":"fab","class":"fa-artstation"},{"prefix":"fab","class":"fa-asymmetrik"},{"prefix":"fab","class":"fa-atlassian"},{"prefix":"fab","class":"fa-audible"},{"prefix":"fab","class":"fa-autoprefixer"},{"prefix":"fab","class":"fa-avianex"},{"prefix":"fab","class":"fa-aviato"},{"prefix":"fab","class":"fa-aws"},{"prefix":"fab","class":"fa-bandcamp"},{"prefix":"fab","class":"fa-battle-net"},{"prefix":"fab","class":"fa-behance"},{"prefix":"fab","class":"fa-behance-square"},{"prefix":"fab","class":"fa-bimobject"},{"prefix":"fab","class":"fa-bitbucket"},{"prefix":"fab","class":"fa-bitcoin"},{"prefix":"fab","class":"fa-bity"},{"prefix":"fab","class":"fa-black-tie"},{"prefix":"fab","class":"fa-blackberry"},{"prefix":"fab","class":"fa-blogger"},{"prefix":"fab","class":"fa-blogger-b"},{"prefix":"fab","class":"fa-bluetooth"},{"prefix":"fab","class":"fa-bluetooth-b"},{"prefix":"fab","class":"fa-bootstrap"},{"prefix":"fab","class":"fa-btc"},{"prefix":"fab","class":"fa-buffer"},{"prefix":"fab","class":"fa-buromobelexperte"},{"prefix":"fab","class":"fa-buy-n-large"},{"prefix":"fab","class":"fa-buysellads"},{"prefix":"fab","class":"fa-canadian-maple-leaf"},{"prefix":"fab","class":"fa-cc-amazon-pay"},{"prefix":"fab","class":"fa-cc-amex"},{"prefix":"fab","class":"fa-cc-apple-pay"},{"prefix":"fab","class":"fa-cc-diners-club"},{"prefix":"fab","class":"fa-cc-discover"},{"prefix":"fab","class":"fa-cc-jcb"},{"prefix":"fab","class":"fa-cc-mastercard"},{"prefix":"fab","class":"fa-cc-paypal"},{"prefix":"fab","class":"fa-cc-stripe"},{"prefix":"fab","class":"fa-cc-visa"},{"prefix":"fab","class":"fa-centercode"},{"prefix":"fab","class":"fa-centos"},{"prefix":"fab","class":"fa-chrome"},{"prefix":"fab","class":"fa-chromecast"},{"prefix":"fab","class":"fa-cloudflare"},{"prefix":"fab","class":"fa-cloudscale"},{"prefix":"fab","class":"fa-cloudsmith"},{"prefix":"fab","class":"fa-cloudversify"},{"prefix":"fab","class":"fa-codepen"},{"prefix":"fab","class":"fa-codiepie"},{"prefix":"fab","class":"fa-confluence"},{"prefix":"fab","class":"fa-connectdevelop"},{"prefix":"fab","class":"fa-contao"},{"prefix":"fab","class":"fa-cotton-bureau"},{"prefix":"fab","class":"fa-cpanel"},{"prefix":"fab","class":"fa-creative-commons"},{"prefix":"fab","class":"fa-creative-commons-by"},{"prefix":"fab","class":"fa-creative-commons-nc"},{"prefix":"fab","class":"fa-creative-commons-nc-eu"},{"prefix":"fab","class":"fa-creative-commons-nc-jp"},{"prefix":"fab","class":"fa-creative-commons-nd"},{"prefix":"fab","class":"fa-creative-commons-pd"},{"prefix":"fab","class":"fa-creative-commons-pd-alt"},{"prefix":"fab","class":"fa-creative-commons-remix"},{"prefix":"fab","class":"fa-creative-commons-sa"},{"prefix":"fab","class":"fa-creative-commons-sampling"},{"prefix":"fab","class":"fa-creative-commons-sampling-plus"},{"prefix":"fab","class":"fa-creative-commons-share"},{"prefix":"fab","class":"fa-creative-commons-zero"},{"prefix":"fab","class":"fa-critical-role"},{"prefix":"fab","class":"fa-css3"},{"prefix":"fab","class":"fa-css3-alt"},{"prefix":"fab","class":"fa-cuttlefish"},{"prefix":"fab","class":"fa-d-and-d"},{"prefix":"fab","class":"fa-d-and-d-beyond"},{"prefix":"fab","class":"fa-dailymotion"},{"prefix":"fab","class":"fa-dashcube"},{"prefix":"fab","class":"fa-deezer"},{"prefix":"fab","class":"fa-delicious"},{"prefix":"fab","class":"fa-deploydog"},{"prefix":"fab","class":"fa-deskpro"},{"prefix":"fab","class":"fa-dev"},{"prefix":"fab","class":"fa-deviantart"},{"prefix":"fab","class":"fa-dhl"},{"prefix":"fab","class":"fa-diaspora"},{"prefix":"fab","class":"fa-digg"},{"prefix":"fab","class":"fa-digital-ocean"},{"prefix":"fab","class":"fa-discord"},{"prefix":"fab","class":"fa-discourse"},{"prefix":"fab","class":"fa-dochub"},{"prefix":"fab","class":"fa-docker"},{"prefix":"fab","class":"fa-draft2digital"},{"prefix":"fab","class":"fa-dribbble"},{"prefix":"fab","class":"fa-dribbble-square"},{"prefix":"fab","class":"fa-dropbox"},{"prefix":"fab","class":"fa-drupal"},{"prefix":"fab","class":"fa-dyalog"},{"prefix":"fab","class":"fa-earlybirds"},{"prefix":"fab","class":"fa-ebay"},{"prefix":"fab","class":"fa-edge"},{"prefix":"fab","class":"fa-edge-legacy"},{"prefix":"fab","class":"fa-elementor"},{"prefix":"fab","class":"fa-ello"},{"prefix":"fab","class":"fa-ember"},{"prefix":"fab","class":"fa-empire"},{"prefix":"fab","class":"fa-envira"},{"prefix":"fab","class":"fa-erlang"},{"prefix":"fab","class":"fa-ethereum"},{"prefix":"fab","class":"fa-etsy"},{"prefix":"fab","class":"fa-evernote"},{"prefix":"fab","class":"fa-expeditedssl"},{"prefix":"fab","class":"fa-facebook"},{"prefix":"fab","class":"fa-facebook-f"},{"prefix":"fab","class":"fa-facebook-messenger"},{"prefix":"fab","class":"fa-facebook-square"},{"prefix":"fab","class":"fa-fantasy-flight-games"},{"prefix":"fab","class":"fa-fedex"},{"prefix":"fab","class":"fa-fedora"},{"prefix":"fab","class":"fa-figma"},{"prefix":"fab","class":"fa-firefox"},{"prefix":"fab","class":"fa-firefox-browser"},{"prefix":"fab","class":"fa-first-order"},{"prefix":"fab","class":"fa-first-order-alt"},{"prefix":"fab","class":"fa-firstdraft"},{"prefix":"fab","class":"fa-flickr"},{"prefix":"fab","class":"fa-flipboard"},{"prefix":"fab","class":"fa-fly"},{"prefix":"fab","class":"fa-font-awesome"},{"prefix":"fab","class":"fa-font-awesome-alt"},{"prefix":"fab","class":"fa-font-awesome-flag"},{"prefix":"fab","class":"fa-font-awesome-logo-full"},{"prefix":"fab","class":"fa-fonticons"},{"prefix":"fab","class":"fa-fonticons-fi"},{"prefix":"fab","class":"fa-fort-awesome"},{"prefix":"fab","class":"fa-fort-awesome-alt"},{"prefix":"fab","class":"fa-forumbee"},{"prefix":"fab","class":"fa-foursquare"},{"prefix":"fab","class":"fa-free-code-camp"},{"prefix":"fab","class":"fa-freebsd"},{"prefix":"fab","class":"fa-fulcrum"},{"prefix":"fab","class":"fa-galactic-republic"},{"prefix":"fab","class":"fa-galactic-senate"},{"prefix":"fab","class":"fa-get-pocket"},{"prefix":"fab","class":"fa-gg"},{"prefix":"fab","class":"fa-gg-circle"},{"prefix":"fab","class":"fa-git"},{"prefix":"fab","class":"fa-git-alt"},{"prefix":"fab","class":"fa-git-square"},{"prefix":"fab","class":"fa-github"},{"prefix":"fab","class":"fa-github-alt"},{"prefix":"fab","class":"fa-github-square"},{"prefix":"fab","class":"fa-gitkraken"},{"prefix":"fab","class":"fa-gitlab"},{"prefix":"fab","class":"fa-gitter"},{"prefix":"fab","class":"fa-glide"},{"prefix":"fab","class":"fa-glide-g"},{"prefix":"fab","class":"fa-gofore"},{"prefix":"fab","class":"fa-goodreads"},{"prefix":"fab","class":"fa-goodreads-g"},{"prefix":"fab","class":"fa-google"},{"prefix":"fab","class":"fa-google-drive"},{"prefix":"fab","class":"fa-google-pay"},{"prefix":"fab","class":"fa-google-play"},{"prefix":"fab","class":"fa-google-plus"},{"prefix":"fab","class":"fa-google-plus-g"},{"prefix":"fab","class":"fa-google-plus-square"},{"prefix":"fab","class":"fa-google-wallet"},{"prefix":"fab","class":"fa-gratipay"},{"prefix":"fab","class":"fa-grav"},{"prefix":"fab","class":"fa-gripfire"},{"prefix":"fab","class":"fa-grunt"},{"prefix":"fab","class":"fa-guilded"},{"prefix":"fab","class":"fa-gulp"},{"prefix":"fab","class":"fa-hacker-news"},{"prefix":"fab","class":"fa-hacker-news-square"},{"prefix":"fab","class":"fa-hackerrank"},{"prefix":"fab","class":"fa-hips"},{"prefix":"fab","class":"fa-hire-a-helper"},{"prefix":"fab","class":"fa-hive"},{"prefix":"fab","class":"fa-hooli"},{"prefix":"fab","class":"fa-hornbill"},{"prefix":"fab","class":"fa-hotjar"},{"prefix":"fab","class":"fa-houzz"},{"prefix":"fab","class":"fa-html5"},{"prefix":"fab","class":"fa-hubspot"},{"prefix":"fab","class":"fa-ideal"},{"prefix":"fab","class":"fa-imdb"},{"prefix":"fab","class":"fa-innosoft"},{"prefix":"fab","class":"fa-instagram"},{"prefix":"fab","class":"fa-instagram-square"},{"prefix":"fab","class":"fa-instalod"},{"prefix":"fab","class":"fa-intercom"},{"prefix":"fab","class":"fa-internet-explorer"},{"prefix":"fab","class":"fa-invision"},{"prefix":"fab","class":"fa-ioxhost"},{"prefix":"fab","class":"fa-itch-io"},{"prefix":"fab","class":"fa-itunes"},{"prefix":"fab","class":"fa-itunes-note"},{"prefix":"fab","class":"fa-java"},{"prefix":"fab","class":"fa-jedi-order"},{"prefix":"fab","class":"fa-jenkins"},{"prefix":"fab","class":"fa-jira"},{"prefix":"fab","class":"fa-joget"},{"prefix":"fab","class":"fa-joomla"},{"prefix":"fab","class":"fa-js"},{"prefix":"fab","class":"fa-js-square"},{"prefix":"fab","class":"fa-jsfiddle"},{"prefix":"fab","class":"fa-kaggle"},{"prefix":"fab","class":"fa-keybase"},{"prefix":"fab","class":"fa-keycdn"},{"prefix":"fab","class":"fa-kickstarter"},{"prefix":"fab","class":"fa-kickstarter-k"},{"prefix":"fab","class":"fa-korvue"},{"prefix":"fab","class":"fa-laravel"},{"prefix":"fab","class":"fa-lastfm"},{"prefix":"fab","class":"fa-lastfm-square"},{"prefix":"fab","class":"fa-leanpub"},{"prefix":"fab","class":"fa-less"},{"prefix":"fab","class":"fa-line"},{"prefix":"fab","class":"fa-linkedin"},{"prefix":"fab","class":"fa-linkedin-in"},{"prefix":"fab","class":"fa-linode"},{"prefix":"fab","class":"fa-linux"},{"prefix":"fab","class":"fa-lyft"},{"prefix":"fab","class":"fa-magento"},{"prefix":"fab","class":"fa-mailchimp"},{"prefix":"fab","class":"fa-mandalorian"},{"prefix":"fab","class":"fa-markdown"},{"prefix":"fab","class":"fa-mastodon"},{"prefix":"fab","class":"fa-maxcdn"},{"prefix":"fab","class":"fa-mdb"},{"prefix":"fab","class":"fa-medapps"},{"prefix":"fab","class":"fa-medium"},{"prefix":"fab","class":"fa-medium-m"},{"prefix":"fab","class":"fa-medrt"},{"prefix":"fab","class":"fa-meetup"},{"prefix":"fab","class":"fa-megaport"},{"prefix":"fab","class":"fa-mendeley"},{"prefix":"fab","class":"fa-microblog"},{"prefix":"fab","class":"fa-microsoft"},{"prefix":"fab","class":"fa-mix"},{"prefix":"fab","class":"fa-mixcloud"},{"prefix":"fab","class":"fa-mixer"},{"prefix":"fab","class":"fa-mizuni"},{"prefix":"fab","class":"fa-modx"},{"prefix":"fab","class":"fa-monero"},{"prefix":"fab","class":"fa-napster"},{"prefix":"fab","class":"fa-neos"},{"prefix":"fab","class":"fa-nimblr"},{"prefix":"fab","class":"fa-node"},{"prefix":"fab","class":"fa-node-js"},{"prefix":"fab","class":"fa-npm"},{"prefix":"fab","class":"fa-ns8"},{"prefix":"fab","class":"fa-nutritionix"},{"prefix":"fab","class":"fa-octopus-deploy"},{"prefix":"fab","class":"fa-odnoklassniki"},{"prefix":"fab","class":"fa-odnoklassniki-square"},{"prefix":"fab","class":"fa-old-republic"},{"prefix":"fab","class":"fa-opencart"},{"prefix":"fab","class":"fa-openid"},{"prefix":"fab","class":"fa-opera"},{"prefix":"fab","class":"fa-optin-monster"},{"prefix":"fab","class":"fa-orcid"},{"prefix":"fab","class":"fa-osi"},{"prefix":"fab","class":"fa-page4"},{"prefix":"fab","class":"fa-pagelines"},{"prefix":"fab","class":"fa-palfed"},{"prefix":"fab","class":"fa-patreon"},{"prefix":"fab","class":"fa-paypal"},{"prefix":"fab","class":"fa-penny-arcade"},{"prefix":"fab","class":"fa-perbyte"},{"prefix":"fab","class":"fa-periscope"},{"prefix":"fab","class":"fa-phabricator"},{"prefix":"fab","class":"fa-phoenix-framework"},{"prefix":"fab","class":"fa-phoenix-squadron"},{"prefix":"fab","class":"fa-php"},{"prefix":"fab","class":"fa-pied-piper"},{"prefix":"fab","class":"fa-pied-piper-alt"},{"prefix":"fab","class":"fa-pied-piper-hat"},{"prefix":"fab","class":"fa-pied-piper-pp"},{"prefix":"fab","class":"fa-pied-piper-square"},{"prefix":"fab","class":"fa-pinterest"},{"prefix":"fab","class":"fa-pinterest-p"},{"prefix":"fab","class":"fa-pinterest-square"},{"prefix":"fab","class":"fa-playstation"},{"prefix":"fab","class":"fa-product-hunt"},{"prefix":"fab","class":"fa-pushed"},{"prefix":"fab","class":"fa-python"},{"prefix":"fab","class":"fa-qq"},{"prefix":"fab","class":"fa-quinscape"},{"prefix":"fab","class":"fa-quora"},{"prefix":"fab","class":"fa-r-project"},{"prefix":"fab","class":"fa-raspberry-pi"},{"prefix":"fab","class":"fa-ravelry"},{"prefix":"fab","class":"fa-react"},{"prefix":"fab","class":"fa-reacteurope"},{"prefix":"fab","class":"fa-readme"},{"prefix":"fab","class":"fa-rebel"},{"prefix":"fab","class":"fa-red-river"},{"prefix":"fab","class":"fa-reddit"},{"prefix":"fab","class":"fa-reddit-alien"},{"prefix":"fab","class":"fa-reddit-square"},{"prefix":"fab","class":"fa-redhat"},{"prefix":"fab","class":"fa-renren"},{"prefix":"fab","class":"fa-replyd"},{"prefix":"fab","class":"fa-researchgate"},{"prefix":"fab","class":"fa-resolving"},{"prefix":"fab","class":"fa-rev"},{"prefix":"fab","class":"fa-rocketchat"},{"prefix":"fab","class":"fa-rockrms"},{"prefix":"fab","class":"fa-rust"},{"prefix":"fab","class":"fa-safari"},{"prefix":"fab","class":"fa-salesforce"},{"prefix":"fab","class":"fa-sass"},{"prefix":"fab","class":"fa-schlix"},{"prefix":"fab","class":"fa-scribd"},{"prefix":"fab","class":"fa-searchengin"},{"prefix":"fab","class":"fa-sellcast"},{"prefix":"fab","class":"fa-sellsy"},{"prefix":"fab","class":"fa-servicestack"},{"prefix":"fab","class":"fa-shirtsinbulk"},{"prefix":"fab","class":"fa-shopify"},{"prefix":"fab","class":"fa-shopware"},{"prefix":"fab","class":"fa-simplybuilt"},{"prefix":"fab","class":"fa-sistrix"},{"prefix":"fab","class":"fa-sith"},{"prefix":"fab","class":"fa-sketch"},{"prefix":"fab","class":"fa-skyatlas"},{"prefix":"fab","class":"fa-skype"},{"prefix":"fab","class":"fa-slack"},{"prefix":"fab","class":"fa-slack-hash"},{"prefix":"fab","class":"fa-slideshare"},{"prefix":"fab","class":"fa-snapchat"},{"prefix":"fab","class":"fa-snapchat-ghost"},{"prefix":"fab","class":"fa-snapchat-square"},{"prefix":"fab","class":"fa-soundcloud"},{"prefix":"fab","class":"fa-sourcetree"},{"prefix":"fab","class":"fa-speakap"},{"prefix":"fab","class":"fa-speaker-deck"},{"prefix":"fab","class":"fa-spotify"},{"prefix":"fab","class":"fa-squarespace"},{"prefix":"fab","class":"fa-stack-exchange"},{"prefix":"fab","class":"fa-stack-overflow"},{"prefix":"fab","class":"fa-stackpath"},{"prefix":"fab","class":"fa-staylinked"},{"prefix":"fab","class":"fa-steam"},{"prefix":"fab","class":"fa-steam-square"},{"prefix":"fab","class":"fa-steam-symbol"},{"prefix":"fab","class":"fa-sticker-mule"},{"prefix":"fab","class":"fa-strava"},{"prefix":"fab","class":"fa-stripe"},{"prefix":"fab","class":"fa-stripe-s"},{"prefix":"fab","class":"fa-studiovinari"},{"prefix":"fab","class":"fa-stumbleupon"},{"prefix":"fab","class":"fa-stumbleupon-circle"},{"prefix":"fab","class":"fa-superpowers"},{"prefix":"fab","class":"fa-supple"},{"prefix":"fab","class":"fa-suse"},{"prefix":"fab","class":"fa-swift"},{"prefix":"fab","class":"fa-symfony"},{"prefix":"fab","class":"fa-teamspeak"},{"prefix":"fab","class":"fa-telegram"},{"prefix":"fab","class":"fa-telegram-plane"},{"prefix":"fab","class":"fa-tencent-weibo"},{"prefix":"fab","class":"fa-the-red-yeti"},{"prefix":"fab","class":"fa-themeco"},{"prefix":"fab","class":"fa-themeisle"},{"prefix":"fab","class":"fa-think-peaks"},{"prefix":"fab","class":"fa-tiktok"},{"prefix":"fab","class":"fa-trade-federation"},{"prefix":"fab","class":"fa-trello"},{"prefix":"fab","class":"fa-tripadvisor"},{"prefix":"fab","class":"fa-tumblr"},{"prefix":"fab","class":"fa-tumblr-square"},{"prefix":"fab","class":"fa-twitch"},{"prefix":"fab","class":"fa-twitter"},{"prefix":"fab","class":"fa-twitter-square"},{"prefix":"fab","class":"fa-typo3"},{"prefix":"fab","class":"fa-uber"},{"prefix":"fab","class":"fa-ubuntu"},{"prefix":"fab","class":"fa-uikit"},{"prefix":"fab","class":"fa-umbraco"},{"prefix":"fab","class":"fa-uncharted"},{"prefix":"fab","class":"fa-uniregistry"},{"prefix":"fab","class":"fa-unity"},{"prefix":"fab","class":"fa-unsplash"},{"prefix":"fab","class":"fa-untappd"},{"prefix":"fab","class":"fa-ups"},{"prefix":"fab","class":"fa-usb"},{"prefix":"fab","class":"fa-usps"},{"prefix":"fab","class":"fa-ussunnah"},{"prefix":"fab","class":"fa-vaadin"},{"prefix":"fab","class":"fa-viacoin"},{"prefix":"fab","class":"fa-viadeo"},{"prefix":"fab","class":"fa-viadeo-square"},{"prefix":"fab","class":"fa-viber"},{"prefix":"fab","class":"fa-vimeo"},{"prefix":"fab","class":"fa-vimeo-square"},{"prefix":"fab","class":"fa-vimeo-v"},{"prefix":"fab","class":"fa-vine"},{"prefix":"fab","class":"fa-vk"},{"prefix":"fab","class":"fa-vnv"},{"prefix":"fab","class":"fa-vuejs"},{"prefix":"fab","class":"fa-watchman-monitoring"},{"prefix":"fab","class":"fa-waze"},{"prefix":"fab","class":"fa-weebly"},{"prefix":"fab","class":"fa-weibo"},{"prefix":"fab","class":"fa-weixin"},{"prefix":"fab","class":"fa-whatsapp"},{"prefix":"fab","class":"fa-whatsapp-square"},{"prefix":"fab","class":"fa-whmcs"},{"prefix":"fab","class":"fa-wikipedia-w"},{"prefix":"fab","class":"fa-windows"},{"prefix":"fab","class":"fa-wix"},{"prefix":"fab","class":"fa-wizards-of-the-coast"},{"prefix":"fab","class":"fa-wodu"},{"prefix":"fab","class":"fa-wolf-pack-battalion"},{"prefix":"fab","class":"fa-wordpress"},{"prefix":"fab","class":"fa-wordpress-simple"},{"prefix":"fab","class":"fa-wpbeginner"},{"prefix":"fab","class":"fa-wpexplorer"},{"prefix":"fab","class":"fa-wpforms"},{"prefix":"fab","class":"fa-wpressr"},{"prefix":"fab","class":"fa-xbox"},{"prefix":"fab","class":"fa-xing"},{"prefix":"fab","class":"fa-xing-square"},{"prefix":"fab","class":"fa-y-combinator"},{"prefix":"fab","class":"fa-yahoo"},{"prefix":"fab","class":"fa-yammer"},{"prefix":"fab","class":"fa-yandex"},{"prefix":"fab","class":"fa-yandex-international"},{"prefix":"fab","class":"fa-yarn"},{"prefix":"fab","class":"fa-yelp"},{"prefix":"fab","class":"fa-yoast"},{"prefix":"fab","class":"fa-youtube"},{"prefix":"fab","class":"fa-youtube-square"},{"prefix":"fab","class":"zhihu"}]');

/***/ }),

/***/ "./src/assets/duotone.json":
/*!*********************************!*\
  !*** ./src/assets/duotone.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"prefix":"fad","class":"fa-abacus"},{"prefix":"fad","class":"fa-acorn"},{"prefix":"fad","class":"fa-ad"},{"prefix":"fad","class":"fa-address-book"},{"prefix":"fad","class":"fa-address-card"},{"prefix":"fad","class":"fa-adjust"},{"prefix":"fad","class":"fa-air-conditioner"},{"prefix":"fad","class":"fa-air-freshener"},{"prefix":"fad","class":"fa-alarm-clock"},{"prefix":"fad","class":"fa-alarm-exclamation"},{"prefix":"fad","class":"fa-alarm-plus"},{"prefix":"fad","class":"fa-alarm-snooze"},{"prefix":"fad","class":"fa-album"},{"prefix":"fad","class":"fa-album-collection"},{"prefix":"fad","class":"fa-alicorn"},{"prefix":"fad","class":"fa-alien"},{"prefix":"fad","class":"fa-alien-monster"},{"prefix":"fad","class":"fa-align-center"},{"prefix":"fad","class":"fa-align-justify"},{"prefix":"fad","class":"fa-align-left"},{"prefix":"fad","class":"fa-align-right"},{"prefix":"fad","class":"fa-align-slash"},{"prefix":"fad","class":"fa-allergies"},{"prefix":"fad","class":"fa-ambulance"},{"prefix":"fad","class":"fa-american-sign-language-interpreting"},{"prefix":"fad","class":"fa-amp-guitar"},{"prefix":"fad","class":"fa-analytics"},{"prefix":"fad","class":"fa-anchor"},{"prefix":"fad","class":"fa-angel"},{"prefix":"fad","class":"fa-angle-double-down"},{"prefix":"fad","class":"fa-angle-double-left"},{"prefix":"fad","class":"fa-angle-double-right"},{"prefix":"fad","class":"fa-angle-double-up"},{"prefix":"fad","class":"fa-angle-down"},{"prefix":"fad","class":"fa-angle-left"},{"prefix":"fad","class":"fa-angle-right"},{"prefix":"fad","class":"fa-angle-up"},{"prefix":"fad","class":"fa-angry"},{"prefix":"fad","class":"fa-ankh"},{"prefix":"fad","class":"fa-apple-alt"},{"prefix":"fad","class":"fa-apple-crate"},{"prefix":"fad","class":"fa-archive"},{"prefix":"fad","class":"fa-archway"},{"prefix":"fad","class":"fa-arrow-alt-circle-down"},{"prefix":"fad","class":"fa-arrow-alt-circle-left"},{"prefix":"fad","class":"fa-arrow-alt-circle-right"},{"prefix":"fad","class":"fa-arrow-alt-circle-up"},{"prefix":"fad","class":"fa-arrow-alt-down"},{"prefix":"fad","class":"fa-arrow-alt-from-bottom"},{"prefix":"fad","class":"fa-arrow-alt-from-left"},{"prefix":"fad","class":"fa-arrow-alt-from-right"},{"prefix":"fad","class":"fa-arrow-alt-from-top"},{"prefix":"fad","class":"fa-arrow-alt-left"},{"prefix":"fad","class":"fa-arrow-alt-right"},{"prefix":"fad","class":"fa-arrow-alt-square-down"},{"prefix":"fad","class":"fa-arrow-alt-square-left"},{"prefix":"fad","class":"fa-arrow-alt-square-right"},{"prefix":"fad","class":"fa-arrow-alt-square-up"},{"prefix":"fad","class":"fa-arrow-alt-to-bottom"},{"prefix":"fad","class":"fa-arrow-alt-to-left"},{"prefix":"fad","class":"fa-arrow-alt-to-right"},{"prefix":"fad","class":"fa-arrow-alt-to-top"},{"prefix":"fad","class":"fa-arrow-alt-up"},{"prefix":"fad","class":"fa-arrow-circle-down"},{"prefix":"fad","class":"fa-arrow-circle-left"},{"prefix":"fad","class":"fa-arrow-circle-right"},{"prefix":"fad","class":"fa-arrow-circle-up"},{"prefix":"fad","class":"fa-arrow-down"},{"prefix":"fad","class":"fa-arrow-from-bottom"},{"prefix":"fad","class":"fa-arrow-from-left"},{"prefix":"fad","class":"fa-arrow-from-right"},{"prefix":"fad","class":"fa-arrow-from-top"},{"prefix":"fad","class":"fa-arrow-left"},{"prefix":"fad","class":"fa-arrow-right"},{"prefix":"fad","class":"fa-arrow-square-down"},{"prefix":"fad","class":"fa-arrow-square-left"},{"prefix":"fad","class":"fa-arrow-square-right"},{"prefix":"fad","class":"fa-arrow-square-up"},{"prefix":"fad","class":"fa-arrow-to-bottom"},{"prefix":"fad","class":"fa-arrow-to-left"},{"prefix":"fad","class":"fa-arrow-to-right"},{"prefix":"fad","class":"fa-arrow-to-top"},{"prefix":"fad","class":"fa-arrow-up"},{"prefix":"fad","class":"fa-arrows"},{"prefix":"fad","class":"fa-arrows-alt"},{"prefix":"fad","class":"fa-arrows-alt-h"},{"prefix":"fad","class":"fa-arrows-alt-v"},{"prefix":"fad","class":"fa-arrows-h"},{"prefix":"fad","class":"fa-arrows-v"},{"prefix":"fad","class":"fa-assistive-listening-systems"},{"prefix":"fad","class":"fa-asterisk"},{"prefix":"fad","class":"fa-at"},{"prefix":"fad","class":"fa-atlas"},{"prefix":"fad","class":"fa-atom"},{"prefix":"fad","class":"fa-atom-alt"},{"prefix":"fad","class":"fa-audio-description"},{"prefix":"fad","class":"fa-award"},{"prefix":"fad","class":"fa-axe"},{"prefix":"fad","class":"fa-axe-battle"},{"prefix":"fad","class":"fa-baby"},{"prefix":"fad","class":"fa-baby-carriage"},{"prefix":"fad","class":"fa-backpack"},{"prefix":"fad","class":"fa-backspace"},{"prefix":"fad","class":"fa-backward"},{"prefix":"fad","class":"fa-bacon"},{"prefix":"fad","class":"fa-bacteria"},{"prefix":"fad","class":"fa-bacterium"},{"prefix":"fad","class":"fa-badge"},{"prefix":"fad","class":"fa-badge-check"},{"prefix":"fad","class":"fa-badge-dollar"},{"prefix":"fad","class":"fa-badge-percent"},{"prefix":"fad","class":"fa-badge-sheriff"},{"prefix":"fad","class":"fa-badger-honey"},{"prefix":"fad","class":"fa-bags-shopping"},{"prefix":"fad","class":"fa-bahai"},{"prefix":"fad","class":"fa-balance-scale"},{"prefix":"fad","class":"fa-balance-scale-left"},{"prefix":"fad","class":"fa-balance-scale-right"},{"prefix":"fad","class":"fa-ball-pile"},{"prefix":"fad","class":"fa-ballot"},{"prefix":"fad","class":"fa-ballot-check"},{"prefix":"fad","class":"fa-ban"},{"prefix":"fad","class":"fa-band-aid"},{"prefix":"fad","class":"fa-banjo"},{"prefix":"fad","class":"fa-barcode"},{"prefix":"fad","class":"fa-barcode-alt"},{"prefix":"fad","class":"fa-barcode-read"},{"prefix":"fad","class":"fa-barcode-scan"},{"prefix":"fad","class":"fa-bars"},{"prefix":"fad","class":"fa-baseball"},{"prefix":"fad","class":"fa-baseball-ball"},{"prefix":"fad","class":"fa-basketball-ball"},{"prefix":"fad","class":"fa-basketball-hoop"},{"prefix":"fad","class":"fa-bat"},{"prefix":"fad","class":"fa-bath"},{"prefix":"fad","class":"fa-battery-bolt"},{"prefix":"fad","class":"fa-battery-empty"},{"prefix":"fad","class":"fa-battery-full"},{"prefix":"fad","class":"fa-battery-half"},{"prefix":"fad","class":"fa-battery-quarter"},{"prefix":"fad","class":"fa-battery-slash"},{"prefix":"fad","class":"fa-battery-three-quarters"},{"prefix":"fad","class":"fa-bed"},{"prefix":"fad","class":"fa-bed-alt"},{"prefix":"fad","class":"fa-bed-bunk"},{"prefix":"fad","class":"fa-bed-empty"},{"prefix":"fad","class":"fa-beer"},{"prefix":"fad","class":"fa-bell"},{"prefix":"fad","class":"fa-bell-exclamation"},{"prefix":"fad","class":"fa-bell-on"},{"prefix":"fad","class":"fa-bell-plus"},{"prefix":"fad","class":"fa-bell-school"},{"prefix":"fad","class":"fa-bell-school-slash"},{"prefix":"fad","class":"fa-bell-slash"},{"prefix":"fad","class":"fa-bells"},{"prefix":"fad","class":"fa-betamax"},{"prefix":"fad","class":"fa-bezier-curve"},{"prefix":"fad","class":"fa-bible"},{"prefix":"fad","class":"fa-bicycle"},{"prefix":"fad","class":"fa-biking"},{"prefix":"fad","class":"fa-biking-mountain"},{"prefix":"fad","class":"fa-binoculars"},{"prefix":"fad","class":"fa-biohazard"},{"prefix":"fad","class":"fa-birthday-cake"},{"prefix":"fad","class":"fa-blanket"},{"prefix":"fad","class":"fa-blender"},{"prefix":"fad","class":"fa-blender-phone"},{"prefix":"fad","class":"fa-blind"},{"prefix":"fad","class":"fa-blinds"},{"prefix":"fad","class":"fa-blinds-open"},{"prefix":"fad","class":"fa-blinds-raised"},{"prefix":"fad","class":"fa-blog"},{"prefix":"fad","class":"fa-bold"},{"prefix":"fad","class":"fa-bolt"},{"prefix":"fad","class":"fa-bomb"},{"prefix":"fad","class":"fa-bone"},{"prefix":"fad","class":"fa-bone-break"},{"prefix":"fad","class":"fa-bong"},{"prefix":"fad","class":"fa-book"},{"prefix":"fad","class":"fa-book-alt"},{"prefix":"fad","class":"fa-book-dead"},{"prefix":"fad","class":"fa-book-heart"},{"prefix":"fad","class":"fa-book-medical"},{"prefix":"fad","class":"fa-book-open"},{"prefix":"fad","class":"fa-book-reader"},{"prefix":"fad","class":"fa-book-spells"},{"prefix":"fad","class":"fa-book-user"},{"prefix":"fad","class":"fa-bookmark"},{"prefix":"fad","class":"fa-books"},{"prefix":"fad","class":"fa-books-medical"},{"prefix":"fad","class":"fa-boombox"},{"prefix":"fad","class":"fa-boot"},{"prefix":"fad","class":"fa-booth-curtain"},{"prefix":"fad","class":"fa-border-all"},{"prefix":"fad","class":"fa-border-bottom"},{"prefix":"fad","class":"fa-border-center-h"},{"prefix":"fad","class":"fa-border-center-v"},{"prefix":"fad","class":"fa-border-inner"},{"prefix":"fad","class":"fa-border-left"},{"prefix":"fad","class":"fa-border-none"},{"prefix":"fad","class":"fa-border-outer"},{"prefix":"fad","class":"fa-border-right"},{"prefix":"fad","class":"fa-border-style"},{"prefix":"fad","class":"fa-border-style-alt"},{"prefix":"fad","class":"fa-border-top"},{"prefix":"fad","class":"fa-bow-arrow"},{"prefix":"fad","class":"fa-bowling-ball"},{"prefix":"fad","class":"fa-bowling-pins"},{"prefix":"fad","class":"fa-box"},{"prefix":"fad","class":"fa-box-alt"},{"prefix":"fad","class":"fa-box-ballot"},{"prefix":"fad","class":"fa-box-check"},{"prefix":"fad","class":"fa-box-fragile"},{"prefix":"fad","class":"fa-box-full"},{"prefix":"fad","class":"fa-box-heart"},{"prefix":"fad","class":"fa-box-open"},{"prefix":"fad","class":"fa-box-tissue"},{"prefix":"fad","class":"fa-box-up"},{"prefix":"fad","class":"fa-box-usd"},{"prefix":"fad","class":"fa-boxes"},{"prefix":"fad","class":"fa-boxes-alt"},{"prefix":"fad","class":"fa-boxing-glove"},{"prefix":"fad","class":"fa-brackets"},{"prefix":"fad","class":"fa-brackets-curly"},{"prefix":"fad","class":"fa-braille"},{"prefix":"fad","class":"fa-brain"},{"prefix":"fad","class":"fa-bread-loaf"},{"prefix":"fad","class":"fa-bread-slice"},{"prefix":"fad","class":"fa-briefcase"},{"prefix":"fad","class":"fa-briefcase-medical"},{"prefix":"fad","class":"fa-bring-forward"},{"prefix":"fad","class":"fa-bring-front"},{"prefix":"fad","class":"fa-broadcast-tower"},{"prefix":"fad","class":"fa-broom"},{"prefix":"fad","class":"fa-browser"},{"prefix":"fad","class":"fa-brush"},{"prefix":"fad","class":"fa-bug"},{"prefix":"fad","class":"fa-building"},{"prefix":"fad","class":"fa-bullhorn"},{"prefix":"fad","class":"fa-bullseye"},{"prefix":"fad","class":"fa-bullseye-arrow"},{"prefix":"fad","class":"fa-bullseye-pointer"},{"prefix":"fad","class":"fa-burger-soda"},{"prefix":"fad","class":"fa-burn"},{"prefix":"fad","class":"fa-burrito"},{"prefix":"fad","class":"fa-bus"},{"prefix":"fad","class":"fa-bus-alt"},{"prefix":"fad","class":"fa-bus-school"},{"prefix":"fad","class":"fa-business-time"},{"prefix":"fad","class":"fa-cabinet-filing"},{"prefix":"fad","class":"fa-cactus"},{"prefix":"fad","class":"fa-calculator"},{"prefix":"fad","class":"fa-calculator-alt"},{"prefix":"fad","class":"fa-calendar"},{"prefix":"fad","class":"fa-calendar-alt"},{"prefix":"fad","class":"fa-calendar-check"},{"prefix":"fad","class":"fa-calendar-day"},{"prefix":"fad","class":"fa-calendar-edit"},{"prefix":"fad","class":"fa-calendar-exclamation"},{"prefix":"fad","class":"fa-calendar-minus"},{"prefix":"fad","class":"fa-calendar-plus"},{"prefix":"fad","class":"fa-calendar-star"},{"prefix":"fad","class":"fa-calendar-times"},{"prefix":"fad","class":"fa-calendar-week"},{"prefix":"fad","class":"fa-camcorder"},{"prefix":"fad","class":"fa-camera"},{"prefix":"fad","class":"fa-camera-alt"},{"prefix":"fad","class":"fa-camera-home"},{"prefix":"fad","class":"fa-camera-movie"},{"prefix":"fad","class":"fa-camera-polaroid"},{"prefix":"fad","class":"fa-camera-retro"},{"prefix":"fad","class":"fa-campfire"},{"prefix":"fad","class":"fa-campground"},{"prefix":"fad","class":"fa-candle-holder"},{"prefix":"fad","class":"fa-candy-cane"},{"prefix":"fad","class":"fa-candy-corn"},{"prefix":"fad","class":"fa-cannabis"},{"prefix":"fad","class":"fa-capsules"},{"prefix":"fad","class":"fa-car"},{"prefix":"fad","class":"fa-car-alt"},{"prefix":"fad","class":"fa-car-battery"},{"prefix":"fad","class":"fa-car-building"},{"prefix":"fad","class":"fa-car-bump"},{"prefix":"fad","class":"fa-car-bus"},{"prefix":"fad","class":"fa-car-crash"},{"prefix":"fad","class":"fa-car-garage"},{"prefix":"fad","class":"fa-car-mechanic"},{"prefix":"fad","class":"fa-car-side"},{"prefix":"fad","class":"fa-car-tilt"},{"prefix":"fad","class":"fa-car-wash"},{"prefix":"fad","class":"fa-caravan"},{"prefix":"fad","class":"fa-caravan-alt"},{"prefix":"fad","class":"fa-caret-circle-down"},{"prefix":"fad","class":"fa-caret-circle-left"},{"prefix":"fad","class":"fa-caret-circle-right"},{"prefix":"fad","class":"fa-caret-circle-up"},{"prefix":"fad","class":"fa-caret-down"},{"prefix":"fad","class":"fa-caret-left"},{"prefix":"fad","class":"fa-caret-right"},{"prefix":"fad","class":"fa-caret-square-down"},{"prefix":"fad","class":"fa-caret-square-left"},{"prefix":"fad","class":"fa-caret-square-right"},{"prefix":"fad","class":"fa-caret-square-up"},{"prefix":"fad","class":"fa-caret-up"},{"prefix":"fad","class":"fa-carrot"},{"prefix":"fad","class":"fa-cars"},{"prefix":"fad","class":"fa-cart-arrow-down"},{"prefix":"fad","class":"fa-cart-plus"},{"prefix":"fad","class":"fa-cash-register"},{"prefix":"fad","class":"fa-cassette-tape"},{"prefix":"fad","class":"fa-cat"},{"prefix":"fad","class":"fa-cat-space"},{"prefix":"fad","class":"fa-cauldron"},{"prefix":"fad","class":"fa-cctv"},{"prefix":"fad","class":"fa-certificate"},{"prefix":"fad","class":"fa-chair"},{"prefix":"fad","class":"fa-chair-office"},{"prefix":"fad","class":"fa-chalkboard"},{"prefix":"fad","class":"fa-chalkboard-teacher"},{"prefix":"fad","class":"fa-charging-station"},{"prefix":"fad","class":"fa-chart-area"},{"prefix":"fad","class":"fa-chart-bar"},{"prefix":"fad","class":"fa-chart-line"},{"prefix":"fad","class":"fa-chart-line-down"},{"prefix":"fad","class":"fa-chart-network"},{"prefix":"fad","class":"fa-chart-pie"},{"prefix":"fad","class":"fa-chart-pie-alt"},{"prefix":"fad","class":"fa-chart-scatter"},{"prefix":"fad","class":"fa-check"},{"prefix":"fad","class":"fa-check-circle"},{"prefix":"fad","class":"fa-check-double"},{"prefix":"fad","class":"fa-check-square"},{"prefix":"fad","class":"fa-cheese"},{"prefix":"fad","class":"fa-cheese-swiss"},{"prefix":"fad","class":"fa-cheeseburger"},{"prefix":"fad","class":"fa-chess"},{"prefix":"fad","class":"fa-chess-bishop"},{"prefix":"fad","class":"fa-chess-bishop-alt"},{"prefix":"fad","class":"fa-chess-board"},{"prefix":"fad","class":"fa-chess-clock"},{"prefix":"fad","class":"fa-chess-clock-alt"},{"prefix":"fad","class":"fa-chess-king"},{"prefix":"fad","class":"fa-chess-king-alt"},{"prefix":"fad","class":"fa-chess-knight"},{"prefix":"fad","class":"fa-chess-knight-alt"},{"prefix":"fad","class":"fa-chess-pawn"},{"prefix":"fad","class":"fa-chess-pawn-alt"},{"prefix":"fad","class":"fa-chess-queen"},{"prefix":"fad","class":"fa-chess-queen-alt"},{"prefix":"fad","class":"fa-chess-rook"},{"prefix":"fad","class":"fa-chess-rook-alt"},{"prefix":"fad","class":"fa-chevron-circle-down"},{"prefix":"fad","class":"fa-chevron-circle-left"},{"prefix":"fad","class":"fa-chevron-circle-right"},{"prefix":"fad","class":"fa-chevron-circle-up"},{"prefix":"fad","class":"fa-chevron-double-down"},{"prefix":"fad","class":"fa-chevron-double-left"},{"prefix":"fad","class":"fa-chevron-double-right"},{"prefix":"fad","class":"fa-chevron-double-up"},{"prefix":"fad","class":"fa-chevron-down"},{"prefix":"fad","class":"fa-chevron-left"},{"prefix":"fad","class":"fa-chevron-right"},{"prefix":"fad","class":"fa-chevron-square-down"},{"prefix":"fad","class":"fa-chevron-square-left"},{"prefix":"fad","class":"fa-chevron-square-right"},{"prefix":"fad","class":"fa-chevron-square-up"},{"prefix":"fad","class":"fa-chevron-up"},{"prefix":"fad","class":"fa-child"},{"prefix":"fad","class":"fa-chimney"},{"prefix":"fad","class":"fa-church"},{"prefix":"fad","class":"fa-circle"},{"prefix":"fad","class":"fa-circle-notch"},{"prefix":"fad","class":"fa-city"},{"prefix":"fad","class":"fa-clarinet"},{"prefix":"fad","class":"fa-claw-marks"},{"prefix":"fad","class":"fa-clinic-medical"},{"prefix":"fad","class":"fa-clipboard"},{"prefix":"fad","class":"fa-clipboard-check"},{"prefix":"fad","class":"fa-clipboard-list"},{"prefix":"fad","class":"fa-clipboard-list-check"},{"prefix":"fad","class":"fa-clipboard-prescription"},{"prefix":"fad","class":"fa-clipboard-user"},{"prefix":"fad","class":"fa-clock"},{"prefix":"fad","class":"fa-clone"},{"prefix":"fad","class":"fa-closed-captioning"},{"prefix":"fad","class":"fa-cloud"},{"prefix":"fad","class":"fa-cloud-download"},{"prefix":"fad","class":"fa-cloud-download-alt"},{"prefix":"fad","class":"fa-cloud-drizzle"},{"prefix":"fad","class":"fa-cloud-hail"},{"prefix":"fad","class":"fa-cloud-hail-mixed"},{"prefix":"fad","class":"fa-cloud-meatball"},{"prefix":"fad","class":"fa-cloud-moon"},{"prefix":"fad","class":"fa-cloud-moon-rain"},{"prefix":"fad","class":"fa-cloud-music"},{"prefix":"fad","class":"fa-cloud-rain"},{"prefix":"fad","class":"fa-cloud-rainbow"},{"prefix":"fad","class":"fa-cloud-showers"},{"prefix":"fad","class":"fa-cloud-showers-heavy"},{"prefix":"fad","class":"fa-cloud-sleet"},{"prefix":"fad","class":"fa-cloud-snow"},{"prefix":"fad","class":"fa-cloud-sun"},{"prefix":"fad","class":"fa-cloud-sun-rain"},{"prefix":"fad","class":"fa-cloud-upload"},{"prefix":"fad","class":"fa-cloud-upload-alt"},{"prefix":"fad","class":"fa-clouds"},{"prefix":"fad","class":"fa-clouds-moon"},{"prefix":"fad","class":"fa-clouds-sun"},{"prefix":"fad","class":"fa-club"},{"prefix":"fad","class":"fa-cocktail"},{"prefix":"fad","class":"fa-code"},{"prefix":"fad","class":"fa-code-branch"},{"prefix":"fad","class":"fa-code-commit"},{"prefix":"fad","class":"fa-code-merge"},{"prefix":"fad","class":"fa-coffee"},{"prefix":"fad","class":"fa-coffee-pot"},{"prefix":"fad","class":"fa-coffee-togo"},{"prefix":"fad","class":"fa-coffin"},{"prefix":"fad","class":"fa-coffin-cross"},{"prefix":"fad","class":"fa-cog"},{"prefix":"fad","class":"fa-cogs"},{"prefix":"fad","class":"fa-coin"},{"prefix":"fad","class":"fa-coins"},{"prefix":"fad","class":"fa-columns"},{"prefix":"fad","class":"fa-comet"},{"prefix":"fad","class":"fa-comment"},{"prefix":"fad","class":"fa-comment-alt"},{"prefix":"fad","class":"fa-comment-alt-check"},{"prefix":"fad","class":"fa-comment-alt-dollar"},{"prefix":"fad","class":"fa-comment-alt-dots"},{"prefix":"fad","class":"fa-comment-alt-edit"},{"prefix":"fad","class":"fa-comment-alt-exclamation"},{"prefix":"fad","class":"fa-comment-alt-lines"},{"prefix":"fad","class":"fa-comment-alt-medical"},{"prefix":"fad","class":"fa-comment-alt-minus"},{"prefix":"fad","class":"fa-comment-alt-music"},{"prefix":"fad","class":"fa-comment-alt-plus"},{"prefix":"fad","class":"fa-comment-alt-slash"},{"prefix":"fad","class":"fa-comment-alt-smile"},{"prefix":"fad","class":"fa-comment-alt-times"},{"prefix":"fad","class":"fa-comment-check"},{"prefix":"fad","class":"fa-comment-dollar"},{"prefix":"fad","class":"fa-comment-dots"},{"prefix":"fad","class":"fa-comment-edit"},{"prefix":"fad","class":"fa-comment-exclamation"},{"prefix":"fad","class":"fa-comment-lines"},{"prefix":"fad","class":"fa-comment-medical"},{"prefix":"fad","class":"fa-comment-minus"},{"prefix":"fad","class":"fa-comment-music"},{"prefix":"fad","class":"fa-comment-plus"},{"prefix":"fad","class":"fa-comment-slash"},{"prefix":"fad","class":"fa-comment-smile"},{"prefix":"fad","class":"fa-comment-times"},{"prefix":"fad","class":"fa-comments"},{"prefix":"fad","class":"fa-comments-alt"},{"prefix":"fad","class":"fa-comments-alt-dollar"},{"prefix":"fad","class":"fa-comments-dollar"},{"prefix":"fad","class":"fa-compact-disc"},{"prefix":"fad","class":"fa-compass"},{"prefix":"fad","class":"fa-compass-slash"},{"prefix":"fad","class":"fa-compress"},{"prefix":"fad","class":"fa-compress-alt"},{"prefix":"fad","class":"fa-compress-arrows-alt"},{"prefix":"fad","class":"fa-compress-wide"},{"prefix":"fad","class":"fa-computer-classic"},{"prefix":"fad","class":"fa-computer-speaker"},{"prefix":"fad","class":"fa-concierge-bell"},{"prefix":"fad","class":"fa-construction"},{"prefix":"fad","class":"fa-container-storage"},{"prefix":"fad","class":"fa-conveyor-belt"},{"prefix":"fad","class":"fa-conveyor-belt-alt"},{"prefix":"fad","class":"fa-cookie"},{"prefix":"fad","class":"fa-cookie-bite"},{"prefix":"fad","class":"fa-copy"},{"prefix":"fad","class":"fa-copyright"},{"prefix":"fad","class":"fa-corn"},{"prefix":"fad","class":"fa-couch"},{"prefix":"fad","class":"fa-cow"},{"prefix":"fad","class":"fa-cowbell"},{"prefix":"fad","class":"fa-cowbell-more"},{"prefix":"fad","class":"fa-credit-card"},{"prefix":"fad","class":"fa-credit-card-blank"},{"prefix":"fad","class":"fa-credit-card-front"},{"prefix":"fad","class":"fa-cricket"},{"prefix":"fad","class":"fa-croissant"},{"prefix":"fad","class":"fa-crop"},{"prefix":"fad","class":"fa-crop-alt"},{"prefix":"fad","class":"fa-cross"},{"prefix":"fad","class":"fa-crosshairs"},{"prefix":"fad","class":"fa-crow"},{"prefix":"fad","class":"fa-crown"},{"prefix":"fad","class":"fa-crutch"},{"prefix":"fad","class":"fa-crutches"},{"prefix":"fad","class":"fa-cube"},{"prefix":"fad","class":"fa-cubes"},{"prefix":"fad","class":"fa-curling"},{"prefix":"fad","class":"fa-cut"},{"prefix":"fad","class":"fa-dagger"},{"prefix":"fad","class":"fa-database"},{"prefix":"fad","class":"fa-deaf"},{"prefix":"fad","class":"fa-debug"},{"prefix":"fad","class":"fa-deer"},{"prefix":"fad","class":"fa-deer-rudolph"},{"prefix":"fad","class":"fa-democrat"},{"prefix":"fad","class":"fa-desktop"},{"prefix":"fad","class":"fa-desktop-alt"},{"prefix":"fad","class":"fa-dewpoint"},{"prefix":"fad","class":"fa-dharmachakra"},{"prefix":"fad","class":"fa-diagnoses"},{"prefix":"fad","class":"fa-diamond"},{"prefix":"fad","class":"fa-dice"},{"prefix":"fad","class":"fa-dice-d10"},{"prefix":"fad","class":"fa-dice-d12"},{"prefix":"fad","class":"fa-dice-d20"},{"prefix":"fad","class":"fa-dice-d4"},{"prefix":"fad","class":"fa-dice-d6"},{"prefix":"fad","class":"fa-dice-d8"},{"prefix":"fad","class":"fa-dice-five"},{"prefix":"fad","class":"fa-dice-four"},{"prefix":"fad","class":"fa-dice-one"},{"prefix":"fad","class":"fa-dice-six"},{"prefix":"fad","class":"fa-dice-three"},{"prefix":"fad","class":"fa-dice-two"},{"prefix":"fad","class":"fa-digging"},{"prefix":"fad","class":"fa-digital-tachograph"},{"prefix":"fad","class":"fa-diploma"},{"prefix":"fad","class":"fa-directions"},{"prefix":"fad","class":"fa-disc-drive"},{"prefix":"fad","class":"fa-disease"},{"prefix":"fad","class":"fa-divide"},{"prefix":"fad","class":"fa-dizzy"},{"prefix":"fad","class":"fa-dna"},{"prefix":"fad","class":"fa-do-not-enter"},{"prefix":"fad","class":"fa-dog"},{"prefix":"fad","class":"fa-dog-leashed"},{"prefix":"fad","class":"fa-dollar-sign"},{"prefix":"fad","class":"fa-dolly"},{"prefix":"fad","class":"fa-dolly-empty"},{"prefix":"fad","class":"fa-dolly-flatbed"},{"prefix":"fad","class":"fa-dolly-flatbed-alt"},{"prefix":"fad","class":"fa-dolly-flatbed-empty"},{"prefix":"fad","class":"fa-donate"},{"prefix":"fad","class":"fa-door-closed"},{"prefix":"fad","class":"fa-door-open"},{"prefix":"fad","class":"fa-dot-circle"},{"prefix":"fad","class":"fa-dove"},{"prefix":"fad","class":"fa-download"},{"prefix":"fad","class":"fa-drafting-compass"},{"prefix":"fad","class":"fa-dragon"},{"prefix":"fad","class":"fa-draw-circle"},{"prefix":"fad","class":"fa-draw-polygon"},{"prefix":"fad","class":"fa-draw-square"},{"prefix":"fad","class":"fa-dreidel"},{"prefix":"fad","class":"fa-drone"},{"prefix":"fad","class":"fa-drone-alt"},{"prefix":"fad","class":"fa-drum"},{"prefix":"fad","class":"fa-drum-steelpan"},{"prefix":"fad","class":"fa-drumstick"},{"prefix":"fad","class":"fa-drumstick-bite"},{"prefix":"fad","class":"fa-dryer"},{"prefix":"fad","class":"fa-dryer-alt"},{"prefix":"fad","class":"fa-duck"},{"prefix":"fad","class":"fa-dumbbell"},{"prefix":"fad","class":"fa-dumpster"},{"prefix":"fad","class":"fa-dumpster-fire"},{"prefix":"fad","class":"fa-dungeon"},{"prefix":"fad","class":"fa-ear"},{"prefix":"fad","class":"fa-ear-muffs"},{"prefix":"fad","class":"fa-eclipse"},{"prefix":"fad","class":"fa-eclipse-alt"},{"prefix":"fad","class":"fa-edit"},{"prefix":"fad","class":"fa-egg"},{"prefix":"fad","class":"fa-egg-fried"},{"prefix":"fad","class":"fa-eject"},{"prefix":"fad","class":"fa-elephant"},{"prefix":"fad","class":"fa-ellipsis-h"},{"prefix":"fad","class":"fa-ellipsis-h-alt"},{"prefix":"fad","class":"fa-ellipsis-v"},{"prefix":"fad","class":"fa-ellipsis-v-alt"},{"prefix":"fad","class":"fa-empty-set"},{"prefix":"fad","class":"fa-engine-warning"},{"prefix":"fad","class":"fa-envelope"},{"prefix":"fad","class":"fa-envelope-open"},{"prefix":"fad","class":"fa-envelope-open-dollar"},{"prefix":"fad","class":"fa-envelope-open-text"},{"prefix":"fad","class":"fa-envelope-square"},{"prefix":"fad","class":"fa-equals"},{"prefix":"fad","class":"fa-eraser"},{"prefix":"fad","class":"fa-ethernet"},{"prefix":"fad","class":"fa-euro-sign"},{"prefix":"fad","class":"fa-exchange"},{"prefix":"fad","class":"fa-exchange-alt"},{"prefix":"fad","class":"fa-exclamation"},{"prefix":"fad","class":"fa-exclamation-circle"},{"prefix":"fad","class":"fa-exclamation-square"},{"prefix":"fad","class":"fa-exclamation-triangle"},{"prefix":"fad","class":"fa-expand"},{"prefix":"fad","class":"fa-expand-alt"},{"prefix":"fad","class":"fa-expand-arrows"},{"prefix":"fad","class":"fa-expand-arrows-alt"},{"prefix":"fad","class":"fa-expand-wide"},{"prefix":"fad","class":"fa-external-link"},{"prefix":"fad","class":"fa-external-link-alt"},{"prefix":"fad","class":"fa-external-link-square"},{"prefix":"fad","class":"fa-external-link-square-alt"},{"prefix":"fad","class":"fa-eye"},{"prefix":"fad","class":"fa-eye-dropper"},{"prefix":"fad","class":"fa-eye-evil"},{"prefix":"fad","class":"fa-eye-slash"},{"prefix":"fad","class":"fa-fan"},{"prefix":"fad","class":"fa-fan-table"},{"prefix":"fad","class":"fa-farm"},{"prefix":"fad","class":"fa-fast-backward"},{"prefix":"fad","class":"fa-fast-forward"},{"prefix":"fad","class":"fa-faucet"},{"prefix":"fad","class":"fa-faucet-drip"},{"prefix":"fad","class":"fa-fax"},{"prefix":"fad","class":"fa-feather"},{"prefix":"fad","class":"fa-feather-alt"},{"prefix":"fad","class":"fa-female"},{"prefix":"fad","class":"fa-field-hockey"},{"prefix":"fad","class":"fa-fighter-jet"},{"prefix":"fad","class":"fa-file"},{"prefix":"fad","class":"fa-file-alt"},{"prefix":"fad","class":"fa-file-archive"},{"prefix":"fad","class":"fa-file-audio"},{"prefix":"fad","class":"fa-file-certificate"},{"prefix":"fad","class":"fa-file-chart-line"},{"prefix":"fad","class":"fa-file-chart-pie"},{"prefix":"fad","class":"fa-file-check"},{"prefix":"fad","class":"fa-file-code"},{"prefix":"fad","class":"fa-file-contract"},{"prefix":"fad","class":"fa-file-csv"},{"prefix":"fad","class":"fa-file-download"},{"prefix":"fad","class":"fa-file-edit"},{"prefix":"fad","class":"fa-file-excel"},{"prefix":"fad","class":"fa-file-exclamation"},{"prefix":"fad","class":"fa-file-export"},{"prefix":"fad","class":"fa-file-image"},{"prefix":"fad","class":"fa-file-import"},{"prefix":"fad","class":"fa-file-invoice"},{"prefix":"fad","class":"fa-file-invoice-dollar"},{"prefix":"fad","class":"fa-file-medical"},{"prefix":"fad","class":"fa-file-medical-alt"},{"prefix":"fad","class":"fa-file-minus"},{"prefix":"fad","class":"fa-file-music"},{"prefix":"fad","class":"fa-file-pdf"},{"prefix":"fad","class":"fa-file-plus"},{"prefix":"fad","class":"fa-file-powerpoint"},{"prefix":"fad","class":"fa-file-prescription"},{"prefix":"fad","class":"fa-file-search"},{"prefix":"fad","class":"fa-file-signature"},{"prefix":"fad","class":"fa-file-spreadsheet"},{"prefix":"fad","class":"fa-file-times"},{"prefix":"fad","class":"fa-file-upload"},{"prefix":"fad","class":"fa-file-user"},{"prefix":"fad","class":"fa-file-video"},{"prefix":"fad","class":"fa-file-word"},{"prefix":"fad","class":"fa-files-medical"},{"prefix":"fad","class":"fa-fill"},{"prefix":"fad","class":"fa-fill-drip"},{"prefix":"fad","class":"fa-film"},{"prefix":"fad","class":"fa-film-alt"},{"prefix":"fad","class":"fa-film-canister"},{"prefix":"fad","class":"fa-filter"},{"prefix":"fad","class":"fa-fingerprint"},{"prefix":"fad","class":"fa-fire"},{"prefix":"fad","class":"fa-fire-alt"},{"prefix":"fad","class":"fa-fire-extinguisher"},{"prefix":"fad","class":"fa-fire-smoke"},{"prefix":"fad","class":"fa-fireplace"},{"prefix":"fad","class":"fa-first-aid"},{"prefix":"fad","class":"fa-fish"},{"prefix":"fad","class":"fa-fish-cooked"},{"prefix":"fad","class":"fa-fist-raised"},{"prefix":"fad","class":"fa-flag"},{"prefix":"fad","class":"fa-flag-alt"},{"prefix":"fad","class":"fa-flag-checkered"},{"prefix":"fad","class":"fa-flag-usa"},{"prefix":"fad","class":"fa-flame"},{"prefix":"fad","class":"fa-flashlight"},{"prefix":"fad","class":"fa-flask"},{"prefix":"fad","class":"fa-flask-poison"},{"prefix":"fad","class":"fa-flask-potion"},{"prefix":"fad","class":"fa-flower"},{"prefix":"fad","class":"fa-flower-daffodil"},{"prefix":"fad","class":"fa-flower-tulip"},{"prefix":"fad","class":"fa-flushed"},{"prefix":"fad","class":"fa-flute"},{"prefix":"fad","class":"fa-flux-capacitor"},{"prefix":"fad","class":"fa-fog"},{"prefix":"fad","class":"fa-folder"},{"prefix":"fad","class":"fa-folder-download"},{"prefix":"fad","class":"fa-folder-minus"},{"prefix":"fad","class":"fa-folder-open"},{"prefix":"fad","class":"fa-folder-plus"},{"prefix":"fad","class":"fa-folder-times"},{"prefix":"fad","class":"fa-folder-tree"},{"prefix":"fad","class":"fa-folder-upload"},{"prefix":"fad","class":"fa-folders"},{"prefix":"fad","class":"fa-font"},{"prefix":"fad","class":"fa-font-awesome-logo-full"},{"prefix":"fad","class":"fa-font-case"},{"prefix":"fad","class":"fa-football-ball"},{"prefix":"fad","class":"fa-football-helmet"},{"prefix":"fad","class":"fa-forklift"},{"prefix":"fad","class":"fa-forward"},{"prefix":"fad","class":"fa-fragile"},{"prefix":"fad","class":"fa-french-fries"},{"prefix":"fad","class":"fa-frog"},{"prefix":"fad","class":"fa-frosty-head"},{"prefix":"fad","class":"fa-frown"},{"prefix":"fad","class":"fa-frown-open"},{"prefix":"fad","class":"fa-function"},{"prefix":"fad","class":"fa-funnel-dollar"},{"prefix":"fad","class":"fa-futbol"},{"prefix":"fad","class":"fa-galaxy"},{"prefix":"fad","class":"fa-game-board"},{"prefix":"fad","class":"fa-game-board-alt"},{"prefix":"fad","class":"fa-game-console-handheld"},{"prefix":"fad","class":"fa-gamepad"},{"prefix":"fad","class":"fa-gamepad-alt"},{"prefix":"fad","class":"fa-garage"},{"prefix":"fad","class":"fa-garage-car"},{"prefix":"fad","class":"fa-garage-open"},{"prefix":"fad","class":"fa-gas-pump"},{"prefix":"fad","class":"fa-gas-pump-slash"},{"prefix":"fad","class":"fa-gavel"},{"prefix":"fad","class":"fa-gem"},{"prefix":"fad","class":"fa-genderless"},{"prefix":"fad","class":"fa-ghost"},{"prefix":"fad","class":"fa-gift"},{"prefix":"fad","class":"fa-gift-card"},{"prefix":"fad","class":"fa-gifts"},{"prefix":"fad","class":"fa-gingerbread-man"},{"prefix":"fad","class":"fa-glass"},{"prefix":"fad","class":"fa-glass-champagne"},{"prefix":"fad","class":"fa-glass-cheers"},{"prefix":"fad","class":"fa-glass-citrus"},{"prefix":"fad","class":"fa-glass-martini"},{"prefix":"fad","class":"fa-glass-martini-alt"},{"prefix":"fad","class":"fa-glass-whiskey"},{"prefix":"fad","class":"fa-glass-whiskey-rocks"},{"prefix":"fad","class":"fa-glasses"},{"prefix":"fad","class":"fa-glasses-alt"},{"prefix":"fad","class":"fa-globe"},{"prefix":"fad","class":"fa-globe-africa"},{"prefix":"fad","class":"fa-globe-americas"},{"prefix":"fad","class":"fa-globe-asia"},{"prefix":"fad","class":"fa-globe-europe"},{"prefix":"fad","class":"fa-globe-snow"},{"prefix":"fad","class":"fa-globe-stand"},{"prefix":"fad","class":"fa-golf-ball"},{"prefix":"fad","class":"fa-golf-club"},{"prefix":"fad","class":"fa-gopuram"},{"prefix":"fad","class":"fa-graduation-cap"},{"prefix":"fad","class":"fa-gramophone"},{"prefix":"fad","class":"fa-greater-than"},{"prefix":"fad","class":"fa-greater-than-equal"},{"prefix":"fad","class":"fa-grimace"},{"prefix":"fad","class":"fa-grin"},{"prefix":"fad","class":"fa-grin-alt"},{"prefix":"fad","class":"fa-grin-beam"},{"prefix":"fad","class":"fa-grin-beam-sweat"},{"prefix":"fad","class":"fa-grin-hearts"},{"prefix":"fad","class":"fa-grin-squint"},{"prefix":"fad","class":"fa-grin-squint-tears"},{"prefix":"fad","class":"fa-grin-stars"},{"prefix":"fad","class":"fa-grin-tears"},{"prefix":"fad","class":"fa-grin-tongue"},{"prefix":"fad","class":"fa-grin-tongue-squint"},{"prefix":"fad","class":"fa-grin-tongue-wink"},{"prefix":"fad","class":"fa-grin-wink"},{"prefix":"fad","class":"fa-grip-horizontal"},{"prefix":"fad","class":"fa-grip-lines"},{"prefix":"fad","class":"fa-grip-lines-vertical"},{"prefix":"fad","class":"fa-grip-vertical"},{"prefix":"fad","class":"fa-guitar"},{"prefix":"fad","class":"fa-guitar-electric"},{"prefix":"fad","class":"fa-guitars"},{"prefix":"fad","class":"fa-h-square"},{"prefix":"fad","class":"fa-h1"},{"prefix":"fad","class":"fa-h2"},{"prefix":"fad","class":"fa-h3"},{"prefix":"fad","class":"fa-h4"},{"prefix":"fad","class":"fa-hamburger"},{"prefix":"fad","class":"fa-hammer"},{"prefix":"fad","class":"fa-hammer-war"},{"prefix":"fad","class":"fa-hamsa"},{"prefix":"fad","class":"fa-hand-heart"},{"prefix":"fad","class":"fa-hand-holding"},{"prefix":"fad","class":"fa-hand-holding-box"},{"prefix":"fad","class":"fa-hand-holding-heart"},{"prefix":"fad","class":"fa-hand-holding-magic"},{"prefix":"fad","class":"fa-hand-holding-medical"},{"prefix":"fad","class":"fa-hand-holding-seedling"},{"prefix":"fad","class":"fa-hand-holding-usd"},{"prefix":"fad","class":"fa-hand-holding-water"},{"prefix":"fad","class":"fa-hand-lizard"},{"prefix":"fad","class":"fa-hand-middle-finger"},{"prefix":"fad","class":"fa-hand-paper"},{"prefix":"fad","class":"fa-hand-peace"},{"prefix":"fad","class":"fa-hand-point-down"},{"prefix":"fad","class":"fa-hand-point-left"},{"prefix":"fad","class":"fa-hand-point-right"},{"prefix":"fad","class":"fa-hand-point-up"},{"prefix":"fad","class":"fa-hand-pointer"},{"prefix":"fad","class":"fa-hand-receiving"},{"prefix":"fad","class":"fa-hand-rock"},{"prefix":"fad","class":"fa-hand-scissors"},{"prefix":"fad","class":"fa-hand-sparkles"},{"prefix":"fad","class":"fa-hand-spock"},{"prefix":"fad","class":"fa-hands"},{"prefix":"fad","class":"fa-hands-heart"},{"prefix":"fad","class":"fa-hands-helping"},{"prefix":"fad","class":"fa-hands-usd"},{"prefix":"fad","class":"fa-hands-wash"},{"prefix":"fad","class":"fa-handshake"},{"prefix":"fad","class":"fa-handshake-alt"},{"prefix":"fad","class":"fa-handshake-alt-slash"},{"prefix":"fad","class":"fa-handshake-slash"},{"prefix":"fad","class":"fa-hanukiah"},{"prefix":"fad","class":"fa-hard-hat"},{"prefix":"fad","class":"fa-hashtag"},{"prefix":"fad","class":"fa-hat-chef"},{"prefix":"fad","class":"fa-hat-cowboy"},{"prefix":"fad","class":"fa-hat-cowboy-side"},{"prefix":"fad","class":"fa-hat-santa"},{"prefix":"fad","class":"fa-hat-winter"},{"prefix":"fad","class":"fa-hat-witch"},{"prefix":"fad","class":"fa-hat-wizard"},{"prefix":"fad","class":"fa-hdd"},{"prefix":"fad","class":"fa-head-side"},{"prefix":"fad","class":"fa-head-side-brain"},{"prefix":"fad","class":"fa-head-side-cough"},{"prefix":"fad","class":"fa-head-side-cough-slash"},{"prefix":"fad","class":"fa-head-side-headphones"},{"prefix":"fad","class":"fa-head-side-mask"},{"prefix":"fad","class":"fa-head-side-medical"},{"prefix":"fad","class":"fa-head-side-virus"},{"prefix":"fad","class":"fa-head-vr"},{"prefix":"fad","class":"fa-heading"},{"prefix":"fad","class":"fa-headphones"},{"prefix":"fad","class":"fa-headphones-alt"},{"prefix":"fad","class":"fa-headset"},{"prefix":"fad","class":"fa-heart"},{"prefix":"fad","class":"fa-heart-broken"},{"prefix":"fad","class":"fa-heart-circle"},{"prefix":"fad","class":"fa-heart-rate"},{"prefix":"fad","class":"fa-heart-square"},{"prefix":"fad","class":"fa-heartbeat"},{"prefix":"fad","class":"fa-heat"},{"prefix":"fad","class":"fa-helicopter"},{"prefix":"fad","class":"fa-helmet-battle"},{"prefix":"fad","class":"fa-hexagon"},{"prefix":"fad","class":"fa-highlighter"},{"prefix":"fad","class":"fa-hiking"},{"prefix":"fad","class":"fa-hippo"},{"prefix":"fad","class":"fa-history"},{"prefix":"fad","class":"fa-hockey-mask"},{"prefix":"fad","class":"fa-hockey-puck"},{"prefix":"fad","class":"fa-hockey-sticks"},{"prefix":"fad","class":"fa-holly-berry"},{"prefix":"fad","class":"fa-home"},{"prefix":"fad","class":"fa-home-alt"},{"prefix":"fad","class":"fa-home-heart"},{"prefix":"fad","class":"fa-home-lg"},{"prefix":"fad","class":"fa-home-lg-alt"},{"prefix":"fad","class":"fa-hood-cloak"},{"prefix":"fad","class":"fa-horizontal-rule"},{"prefix":"fad","class":"fa-horse"},{"prefix":"fad","class":"fa-horse-head"},{"prefix":"fad","class":"fa-horse-saddle"},{"prefix":"fad","class":"fa-hospital"},{"prefix":"fad","class":"fa-hospital-alt"},{"prefix":"fad","class":"fa-hospital-symbol"},{"prefix":"fad","class":"fa-hospital-user"},{"prefix":"fad","class":"fa-hospitals"},{"prefix":"fad","class":"fa-hot-tub"},{"prefix":"fad","class":"fa-hotdog"},{"prefix":"fad","class":"fa-hotel"},{"prefix":"fad","class":"fa-hourglass"},{"prefix":"fad","class":"fa-hourglass-end"},{"prefix":"fad","class":"fa-hourglass-half"},{"prefix":"fad","class":"fa-hourglass-start"},{"prefix":"fad","class":"fa-house"},{"prefix":"fad","class":"fa-house-damage"},{"prefix":"fad","class":"fa-house-day"},{"prefix":"fad","class":"fa-house-flood"},{"prefix":"fad","class":"fa-house-leave"},{"prefix":"fad","class":"fa-house-night"},{"prefix":"fad","class":"fa-house-return"},{"prefix":"fad","class":"fa-house-signal"},{"prefix":"fad","class":"fa-house-user"},{"prefix":"fad","class":"fa-hryvnia"},{"prefix":"fad","class":"fa-humidity"},{"prefix":"fad","class":"fa-hurricane"},{"prefix":"fad","class":"fa-i-cursor"},{"prefix":"fad","class":"fa-ice-cream"},{"prefix":"fad","class":"fa-ice-skate"},{"prefix":"fad","class":"fa-icicles"},{"prefix":"fad","class":"fa-icons"},{"prefix":"fad","class":"fa-icons-alt"},{"prefix":"fad","class":"fa-id-badge"},{"prefix":"fad","class":"fa-id-card"},{"prefix":"fad","class":"fa-id-card-alt"},{"prefix":"fad","class":"fa-igloo"},{"prefix":"fad","class":"fa-image"},{"prefix":"fad","class":"fa-image-polaroid"},{"prefix":"fad","class":"fa-images"},{"prefix":"fad","class":"fa-inbox"},{"prefix":"fad","class":"fa-inbox-in"},{"prefix":"fad","class":"fa-inbox-out"},{"prefix":"fad","class":"fa-indent"},{"prefix":"fad","class":"fa-industry"},{"prefix":"fad","class":"fa-industry-alt"},{"prefix":"fad","class":"fa-infinity"},{"prefix":"fad","class":"fa-info"},{"prefix":"fad","class":"fa-info-circle"},{"prefix":"fad","class":"fa-info-square"},{"prefix":"fad","class":"fa-inhaler"},{"prefix":"fad","class":"fa-integral"},{"prefix":"fad","class":"fa-intersection"},{"prefix":"fad","class":"fa-inventory"},{"prefix":"fad","class":"fa-island-tropical"},{"prefix":"fad","class":"fa-italic"},{"prefix":"fad","class":"fa-jack-o-lantern"},{"prefix":"fad","class":"fa-jedi"},{"prefix":"fad","class":"fa-joint"},{"prefix":"fad","class":"fa-journal-whills"},{"prefix":"fad","class":"fa-joystick"},{"prefix":"fad","class":"fa-jug"},{"prefix":"fad","class":"fa-kaaba"},{"prefix":"fad","class":"fa-kazoo"},{"prefix":"fad","class":"fa-kerning"},{"prefix":"fad","class":"fa-key"},{"prefix":"fad","class":"fa-key-skeleton"},{"prefix":"fad","class":"fa-keyboard"},{"prefix":"fad","class":"fa-keynote"},{"prefix":"fad","class":"fa-khanda"},{"prefix":"fad","class":"fa-kidneys"},{"prefix":"fad","class":"fa-kiss"},{"prefix":"fad","class":"fa-kiss-beam"},{"prefix":"fad","class":"fa-kiss-wink-heart"},{"prefix":"fad","class":"fa-kite"},{"prefix":"fad","class":"fa-kiwi-bird"},{"prefix":"fad","class":"fa-knife-kitchen"},{"prefix":"fad","class":"fa-lambda"},{"prefix":"fad","class":"fa-lamp"},{"prefix":"fad","class":"fa-lamp-desk"},{"prefix":"fad","class":"fa-lamp-floor"},{"prefix":"fad","class":"fa-landmark"},{"prefix":"fad","class":"fa-landmark-alt"},{"prefix":"fad","class":"fa-language"},{"prefix":"fad","class":"fa-laptop"},{"prefix":"fad","class":"fa-laptop-code"},{"prefix":"fad","class":"fa-laptop-house"},{"prefix":"fad","class":"fa-laptop-medical"},{"prefix":"fad","class":"fa-lasso"},{"prefix":"fad","class":"fa-laugh"},{"prefix":"fad","class":"fa-laugh-beam"},{"prefix":"fad","class":"fa-laugh-squint"},{"prefix":"fad","class":"fa-laugh-wink"},{"prefix":"fad","class":"fa-layer-group"},{"prefix":"fad","class":"fa-layer-minus"},{"prefix":"fad","class":"fa-layer-plus"},{"prefix":"fad","class":"fa-leaf"},{"prefix":"fad","class":"fa-leaf-heart"},{"prefix":"fad","class":"fa-leaf-maple"},{"prefix":"fad","class":"fa-leaf-oak"},{"prefix":"fad","class":"fa-lemon"},{"prefix":"fad","class":"fa-less-than"},{"prefix":"fad","class":"fa-less-than-equal"},{"prefix":"fad","class":"fa-level-down"},{"prefix":"fad","class":"fa-level-down-alt"},{"prefix":"fad","class":"fa-level-up"},{"prefix":"fad","class":"fa-level-up-alt"},{"prefix":"fad","class":"fa-life-ring"},{"prefix":"fad","class":"fa-light-ceiling"},{"prefix":"fad","class":"fa-light-switch"},{"prefix":"fad","class":"fa-light-switch-off"},{"prefix":"fad","class":"fa-light-switch-on"},{"prefix":"fad","class":"fa-lightbulb"},{"prefix":"fad","class":"fa-lightbulb-dollar"},{"prefix":"fad","class":"fa-lightbulb-exclamation"},{"prefix":"fad","class":"fa-lightbulb-on"},{"prefix":"fad","class":"fa-lightbulb-slash"},{"prefix":"fad","class":"fa-lights-holiday"},{"prefix":"fad","class":"fa-line-columns"},{"prefix":"fad","class":"fa-line-height"},{"prefix":"fad","class":"fa-link"},{"prefix":"fad","class":"fa-lips"},{"prefix":"fad","class":"fa-lira-sign"},{"prefix":"fad","class":"fa-list"},{"prefix":"fad","class":"fa-list-alt"},{"prefix":"fad","class":"fa-list-music"},{"prefix":"fad","class":"fa-list-ol"},{"prefix":"fad","class":"fa-list-ul"},{"prefix":"fad","class":"fa-location"},{"prefix":"fad","class":"fa-location-arrow"},{"prefix":"fad","class":"fa-location-circle"},{"prefix":"fad","class":"fa-location-slash"},{"prefix":"fad","class":"fa-lock"},{"prefix":"fad","class":"fa-lock-alt"},{"prefix":"fad","class":"fa-lock-open"},{"prefix":"fad","class":"fa-lock-open-alt"},{"prefix":"fad","class":"fa-long-arrow-alt-down"},{"prefix":"fad","class":"fa-long-arrow-alt-left"},{"prefix":"fad","class":"fa-long-arrow-alt-right"},{"prefix":"fad","class":"fa-long-arrow-alt-up"},{"prefix":"fad","class":"fa-long-arrow-down"},{"prefix":"fad","class":"fa-long-arrow-left"},{"prefix":"fad","class":"fa-long-arrow-right"},{"prefix":"fad","class":"fa-long-arrow-up"},{"prefix":"fad","class":"fa-loveseat"},{"prefix":"fad","class":"fa-low-vision"},{"prefix":"fad","class":"fa-luchador"},{"prefix":"fad","class":"fa-luggage-cart"},{"prefix":"fad","class":"fa-lungs"},{"prefix":"fad","class":"fa-lungs-virus"},{"prefix":"fad","class":"fa-mace"},{"prefix":"fad","class":"fa-magic"},{"prefix":"fad","class":"fa-magnet"},{"prefix":"fad","class":"fa-mail-bulk"},{"prefix":"fad","class":"fa-mailbox"},{"prefix":"fad","class":"fa-male"},{"prefix":"fad","class":"fa-mandolin"},{"prefix":"fad","class":"fa-map"},{"prefix":"fad","class":"fa-map-marked"},{"prefix":"fad","class":"fa-map-marked-alt"},{"prefix":"fad","class":"fa-map-marker"},{"prefix":"fad","class":"fa-map-marker-alt"},{"prefix":"fad","class":"fa-map-marker-alt-slash"},{"prefix":"fad","class":"fa-map-marker-check"},{"prefix":"fad","class":"fa-map-marker-edit"},{"prefix":"fad","class":"fa-map-marker-exclamation"},{"prefix":"fad","class":"fa-map-marker-minus"},{"prefix":"fad","class":"fa-map-marker-plus"},{"prefix":"fad","class":"fa-map-marker-question"},{"prefix":"fad","class":"fa-map-marker-slash"},{"prefix":"fad","class":"fa-map-marker-smile"},{"prefix":"fad","class":"fa-map-marker-times"},{"prefix":"fad","class":"fa-map-pin"},{"prefix":"fad","class":"fa-map-signs"},{"prefix":"fad","class":"fa-marker"},{"prefix":"fad","class":"fa-mars"},{"prefix":"fad","class":"fa-mars-double"},{"prefix":"fad","class":"fa-mars-stroke"},{"prefix":"fad","class":"fa-mars-stroke-h"},{"prefix":"fad","class":"fa-mars-stroke-v"},{"prefix":"fad","class":"fa-mask"},{"prefix":"fad","class":"fa-meat"},{"prefix":"fad","class":"fa-medal"},{"prefix":"fad","class":"fa-medkit"},{"prefix":"fad","class":"fa-megaphone"},{"prefix":"fad","class":"fa-meh"},{"prefix":"fad","class":"fa-meh-blank"},{"prefix":"fad","class":"fa-meh-rolling-eyes"},{"prefix":"fad","class":"fa-memory"},{"prefix":"fad","class":"fa-menorah"},{"prefix":"fad","class":"fa-mercury"},{"prefix":"fad","class":"fa-meteor"},{"prefix":"fad","class":"fa-microchip"},{"prefix":"fad","class":"fa-microphone"},{"prefix":"fad","class":"fa-microphone-alt"},{"prefix":"fad","class":"fa-microphone-alt-slash"},{"prefix":"fad","class":"fa-microphone-slash"},{"prefix":"fad","class":"fa-microphone-stand"},{"prefix":"fad","class":"fa-microscope"},{"prefix":"fad","class":"fa-microwave"},{"prefix":"fad","class":"fa-mind-share"},{"prefix":"fad","class":"fa-minus"},{"prefix":"fad","class":"fa-minus-circle"},{"prefix":"fad","class":"fa-minus-hexagon"},{"prefix":"fad","class":"fa-minus-octagon"},{"prefix":"fad","class":"fa-minus-square"},{"prefix":"fad","class":"fa-mistletoe"},{"prefix":"fad","class":"fa-mitten"},{"prefix":"fad","class":"fa-mobile"},{"prefix":"fad","class":"fa-mobile-alt"},{"prefix":"fad","class":"fa-mobile-android"},{"prefix":"fad","class":"fa-mobile-android-alt"},{"prefix":"fad","class":"fa-money-bill"},{"prefix":"fad","class":"fa-money-bill-alt"},{"prefix":"fad","class":"fa-money-bill-wave"},{"prefix":"fad","class":"fa-money-bill-wave-alt"},{"prefix":"fad","class":"fa-money-check"},{"prefix":"fad","class":"fa-money-check-alt"},{"prefix":"fad","class":"fa-money-check-edit"},{"prefix":"fad","class":"fa-money-check-edit-alt"},{"prefix":"fad","class":"fa-monitor-heart-rate"},{"prefix":"fad","class":"fa-monkey"},{"prefix":"fad","class":"fa-monument"},{"prefix":"fad","class":"fa-moon"},{"prefix":"fad","class":"fa-moon-cloud"},{"prefix":"fad","class":"fa-moon-stars"},{"prefix":"fad","class":"fa-mortar-pestle"},{"prefix":"fad","class":"fa-mosque"},{"prefix":"fad","class":"fa-motorcycle"},{"prefix":"fad","class":"fa-mountain"},{"prefix":"fad","class":"fa-mountains"},{"prefix":"fad","class":"fa-mouse"},{"prefix":"fad","class":"fa-mouse-alt"},{"prefix":"fad","class":"fa-mouse-pointer"},{"prefix":"fad","class":"fa-mp3-player"},{"prefix":"fad","class":"fa-mug"},{"prefix":"fad","class":"fa-mug-hot"},{"prefix":"fad","class":"fa-mug-marshmallows"},{"prefix":"fad","class":"fa-mug-tea"},{"prefix":"fad","class":"fa-music"},{"prefix":"fad","class":"fa-music-alt"},{"prefix":"fad","class":"fa-music-alt-slash"},{"prefix":"fad","class":"fa-music-slash"},{"prefix":"fad","class":"fa-narwhal"},{"prefix":"fad","class":"fa-network-wired"},{"prefix":"fad","class":"fa-neuter"},{"prefix":"fad","class":"fa-newspaper"},{"prefix":"fad","class":"fa-not-equal"},{"prefix":"fad","class":"fa-notes-medical"},{"prefix":"fad","class":"fa-object-group"},{"prefix":"fad","class":"fa-object-ungroup"},{"prefix":"fad","class":"fa-octagon"},{"prefix":"fad","class":"fa-oil-can"},{"prefix":"fad","class":"fa-oil-temp"},{"prefix":"fad","class":"fa-om"},{"prefix":"fad","class":"fa-omega"},{"prefix":"fad","class":"fa-ornament"},{"prefix":"fad","class":"fa-otter"},{"prefix":"fad","class":"fa-outdent"},{"prefix":"fad","class":"fa-outlet"},{"prefix":"fad","class":"fa-oven"},{"prefix":"fad","class":"fa-overline"},{"prefix":"fad","class":"fa-page-break"},{"prefix":"fad","class":"fa-pager"},{"prefix":"fad","class":"fa-paint-brush"},{"prefix":"fad","class":"fa-paint-brush-alt"},{"prefix":"fad","class":"fa-paint-roller"},{"prefix":"fad","class":"fa-palette"},{"prefix":"fad","class":"fa-pallet"},{"prefix":"fad","class":"fa-pallet-alt"},{"prefix":"fad","class":"fa-paper-plane"},{"prefix":"fad","class":"fa-paperclip"},{"prefix":"fad","class":"fa-parachute-box"},{"prefix":"fad","class":"fa-paragraph"},{"prefix":"fad","class":"fa-paragraph-rtl"},{"prefix":"fad","class":"fa-parking"},{"prefix":"fad","class":"fa-parking-circle"},{"prefix":"fad","class":"fa-parking-circle-slash"},{"prefix":"fad","class":"fa-parking-slash"},{"prefix":"fad","class":"fa-passport"},{"prefix":"fad","class":"fa-pastafarianism"},{"prefix":"fad","class":"fa-paste"},{"prefix":"fad","class":"fa-pause"},{"prefix":"fad","class":"fa-pause-circle"},{"prefix":"fad","class":"fa-paw"},{"prefix":"fad","class":"fa-paw-alt"},{"prefix":"fad","class":"fa-paw-claws"},{"prefix":"fad","class":"fa-peace"},{"prefix":"fad","class":"fa-pegasus"},{"prefix":"fad","class":"fa-pen"},{"prefix":"fad","class":"fa-pen-alt"},{"prefix":"fad","class":"fa-pen-fancy"},{"prefix":"fad","class":"fa-pen-nib"},{"prefix":"fad","class":"fa-pen-square"},{"prefix":"fad","class":"fa-pencil"},{"prefix":"fad","class":"fa-pencil-alt"},{"prefix":"fad","class":"fa-pencil-paintbrush"},{"prefix":"fad","class":"fa-pencil-ruler"},{"prefix":"fad","class":"fa-pennant"},{"prefix":"fad","class":"fa-people-arrows"},{"prefix":"fad","class":"fa-people-carry"},{"prefix":"fad","class":"fa-pepper-hot"},{"prefix":"fad","class":"fa-percent"},{"prefix":"fad","class":"fa-percentage"},{"prefix":"fad","class":"fa-person-booth"},{"prefix":"fad","class":"fa-person-carry"},{"prefix":"fad","class":"fa-person-dolly"},{"prefix":"fad","class":"fa-person-dolly-empty"},{"prefix":"fad","class":"fa-person-sign"},{"prefix":"fad","class":"fa-phone"},{"prefix":"fad","class":"fa-phone-alt"},{"prefix":"fad","class":"fa-phone-laptop"},{"prefix":"fad","class":"fa-phone-office"},{"prefix":"fad","class":"fa-phone-plus"},{"prefix":"fad","class":"fa-phone-rotary"},{"prefix":"fad","class":"fa-phone-slash"},{"prefix":"fad","class":"fa-phone-square"},{"prefix":"fad","class":"fa-phone-square-alt"},{"prefix":"fad","class":"fa-phone-volume"},{"prefix":"fad","class":"fa-photo-video"},{"prefix":"fad","class":"fa-pi"},{"prefix":"fad","class":"fa-piano"},{"prefix":"fad","class":"fa-piano-keyboard"},{"prefix":"fad","class":"fa-pie"},{"prefix":"fad","class":"fa-pig"},{"prefix":"fad","class":"fa-piggy-bank"},{"prefix":"fad","class":"fa-pills"},{"prefix":"fad","class":"fa-pizza"},{"prefix":"fad","class":"fa-pizza-slice"},{"prefix":"fad","class":"fa-place-of-worship"},{"prefix":"fad","class":"fa-plane"},{"prefix":"fad","class":"fa-plane-alt"},{"prefix":"fad","class":"fa-plane-arrival"},{"prefix":"fad","class":"fa-plane-departure"},{"prefix":"fad","class":"fa-plane-slash"},{"prefix":"fad","class":"fa-planet-moon"},{"prefix":"fad","class":"fa-planet-ringed"},{"prefix":"fad","class":"fa-play"},{"prefix":"fad","class":"fa-play-circle"},{"prefix":"fad","class":"fa-plug"},{"prefix":"fad","class":"fa-plus"},{"prefix":"fad","class":"fa-plus-circle"},{"prefix":"fad","class":"fa-plus-hexagon"},{"prefix":"fad","class":"fa-plus-octagon"},{"prefix":"fad","class":"fa-plus-square"},{"prefix":"fad","class":"fa-podcast"},{"prefix":"fad","class":"fa-podium"},{"prefix":"fad","class":"fa-podium-star"},{"prefix":"fad","class":"fa-police-box"},{"prefix":"fad","class":"fa-poll"},{"prefix":"fad","class":"fa-poll-h"},{"prefix":"fad","class":"fa-poll-people"},{"prefix":"fad","class":"fa-poo"},{"prefix":"fad","class":"fa-poo-storm"},{"prefix":"fad","class":"fa-poop"},{"prefix":"fad","class":"fa-popcorn"},{"prefix":"fad","class":"fa-portal-enter"},{"prefix":"fad","class":"fa-portal-exit"},{"prefix":"fad","class":"fa-portrait"},{"prefix":"fad","class":"fa-pound-sign"},{"prefix":"fad","class":"fa-power-off"},{"prefix":"fad","class":"fa-pray"},{"prefix":"fad","class":"fa-praying-hands"},{"prefix":"fad","class":"fa-prescription"},{"prefix":"fad","class":"fa-prescription-bottle"},{"prefix":"fad","class":"fa-prescription-bottle-alt"},{"prefix":"fad","class":"fa-presentation"},{"prefix":"fad","class":"fa-print"},{"prefix":"fad","class":"fa-print-search"},{"prefix":"fad","class":"fa-print-slash"},{"prefix":"fad","class":"fa-procedures"},{"prefix":"fad","class":"fa-project-diagram"},{"prefix":"fad","class":"fa-projector"},{"prefix":"fad","class":"fa-pump-medical"},{"prefix":"fad","class":"fa-pump-soap"},{"prefix":"fad","class":"fa-pumpkin"},{"prefix":"fad","class":"fa-puzzle-piece"},{"prefix":"fad","class":"fa-qrcode"},{"prefix":"fad","class":"fa-question"},{"prefix":"fad","class":"fa-question-circle"},{"prefix":"fad","class":"fa-question-square"},{"prefix":"fad","class":"fa-quidditch"},{"prefix":"fad","class":"fa-quote-left"},{"prefix":"fad","class":"fa-quote-right"},{"prefix":"fad","class":"fa-quran"},{"prefix":"fad","class":"fa-rabbit"},{"prefix":"fad","class":"fa-rabbit-fast"},{"prefix":"fad","class":"fa-racquet"},{"prefix":"fad","class":"fa-radar"},{"prefix":"fad","class":"fa-radiation"},{"prefix":"fad","class":"fa-radiation-alt"},{"prefix":"fad","class":"fa-radio"},{"prefix":"fad","class":"fa-radio-alt"},{"prefix":"fad","class":"fa-rainbow"},{"prefix":"fad","class":"fa-raindrops"},{"prefix":"fad","class":"fa-ram"},{"prefix":"fad","class":"fa-ramp-loading"},{"prefix":"fad","class":"fa-random"},{"prefix":"fad","class":"fa-raygun"},{"prefix":"fad","class":"fa-receipt"},{"prefix":"fad","class":"fa-record-vinyl"},{"prefix":"fad","class":"fa-rectangle-landscape"},{"prefix":"fad","class":"fa-rectangle-portrait"},{"prefix":"fad","class":"fa-rectangle-wide"},{"prefix":"fad","class":"fa-recycle"},{"prefix":"fad","class":"fa-redo"},{"prefix":"fad","class":"fa-redo-alt"},{"prefix":"fad","class":"fa-refrigerator"},{"prefix":"fad","class":"fa-registered"},{"prefix":"fad","class":"fa-remove-format"},{"prefix":"fad","class":"fa-repeat"},{"prefix":"fad","class":"fa-repeat-1"},{"prefix":"fad","class":"fa-repeat-1-alt"},{"prefix":"fad","class":"fa-repeat-alt"},{"prefix":"fad","class":"fa-reply"},{"prefix":"fad","class":"fa-reply-all"},{"prefix":"fad","class":"fa-republican"},{"prefix":"fad","class":"fa-restroom"},{"prefix":"fad","class":"fa-retweet"},{"prefix":"fad","class":"fa-retweet-alt"},{"prefix":"fad","class":"fa-ribbon"},{"prefix":"fad","class":"fa-ring"},{"prefix":"fad","class":"fa-rings-wedding"},{"prefix":"fad","class":"fa-road"},{"prefix":"fad","class":"fa-robot"},{"prefix":"fad","class":"fa-rocket"},{"prefix":"fad","class":"fa-rocket-launch"},{"prefix":"fad","class":"fa-route"},{"prefix":"fad","class":"fa-route-highway"},{"prefix":"fad","class":"fa-route-interstate"},{"prefix":"fad","class":"fa-router"},{"prefix":"fad","class":"fa-rss"},{"prefix":"fad","class":"fa-rss-square"},{"prefix":"fad","class":"fa-ruble-sign"},{"prefix":"fad","class":"fa-ruler"},{"prefix":"fad","class":"fa-ruler-combined"},{"prefix":"fad","class":"fa-ruler-horizontal"},{"prefix":"fad","class":"fa-ruler-triangle"},{"prefix":"fad","class":"fa-ruler-vertical"},{"prefix":"fad","class":"fa-running"},{"prefix":"fad","class":"fa-rupee-sign"},{"prefix":"fad","class":"fa-rv"},{"prefix":"fad","class":"fa-sack"},{"prefix":"fad","class":"fa-sack-dollar"},{"prefix":"fad","class":"fa-sad-cry"},{"prefix":"fad","class":"fa-sad-tear"},{"prefix":"fad","class":"fa-salad"},{"prefix":"fad","class":"fa-sandwich"},{"prefix":"fad","class":"fa-satellite"},{"prefix":"fad","class":"fa-satellite-dish"},{"prefix":"fad","class":"fa-sausage"},{"prefix":"fad","class":"fa-save"},{"prefix":"fad","class":"fa-sax-hot"},{"prefix":"fad","class":"fa-saxophone"},{"prefix":"fad","class":"fa-scalpel"},{"prefix":"fad","class":"fa-scalpel-path"},{"prefix":"fad","class":"fa-scanner"},{"prefix":"fad","class":"fa-scanner-image"},{"prefix":"fad","class":"fa-scanner-keyboard"},{"prefix":"fad","class":"fa-scanner-touchscreen"},{"prefix":"fad","class":"fa-scarecrow"},{"prefix":"fad","class":"fa-scarf"},{"prefix":"fad","class":"fa-school"},{"prefix":"fad","class":"fa-screwdriver"},{"prefix":"fad","class":"fa-scroll"},{"prefix":"fad","class":"fa-scroll-old"},{"prefix":"fad","class":"fa-scrubber"},{"prefix":"fad","class":"fa-scythe"},{"prefix":"fad","class":"fa-sd-card"},{"prefix":"fad","class":"fa-search"},{"prefix":"fad","class":"fa-search-dollar"},{"prefix":"fad","class":"fa-search-location"},{"prefix":"fad","class":"fa-search-minus"},{"prefix":"fad","class":"fa-search-plus"},{"prefix":"fad","class":"fa-seedling"},{"prefix":"fad","class":"fa-send-back"},{"prefix":"fad","class":"fa-send-backward"},{"prefix":"fad","class":"fa-sensor"},{"prefix":"fad","class":"fa-sensor-alert"},{"prefix":"fad","class":"fa-sensor-fire"},{"prefix":"fad","class":"fa-sensor-on"},{"prefix":"fad","class":"fa-sensor-smoke"},{"prefix":"fad","class":"fa-server"},{"prefix":"fad","class":"fa-shapes"},{"prefix":"fad","class":"fa-share"},{"prefix":"fad","class":"fa-share-all"},{"prefix":"fad","class":"fa-share-alt"},{"prefix":"fad","class":"fa-share-alt-square"},{"prefix":"fad","class":"fa-share-square"},{"prefix":"fad","class":"fa-sheep"},{"prefix":"fad","class":"fa-shekel-sign"},{"prefix":"fad","class":"fa-shield"},{"prefix":"fad","class":"fa-shield-alt"},{"prefix":"fad","class":"fa-shield-check"},{"prefix":"fad","class":"fa-shield-cross"},{"prefix":"fad","class":"fa-shield-virus"},{"prefix":"fad","class":"fa-ship"},{"prefix":"fad","class":"fa-shipping-fast"},{"prefix":"fad","class":"fa-shipping-timed"},{"prefix":"fad","class":"fa-shish-kebab"},{"prefix":"fad","class":"fa-shoe-prints"},{"prefix":"fad","class":"fa-shopping-bag"},{"prefix":"fad","class":"fa-shopping-basket"},{"prefix":"fad","class":"fa-shopping-cart"},{"prefix":"fad","class":"fa-shovel"},{"prefix":"fad","class":"fa-shovel-snow"},{"prefix":"fad","class":"fa-shower"},{"prefix":"fad","class":"fa-shredder"},{"prefix":"fad","class":"fa-shuttle-van"},{"prefix":"fad","class":"fa-shuttlecock"},{"prefix":"fad","class":"fa-sickle"},{"prefix":"fad","class":"fa-sigma"},{"prefix":"fad","class":"fa-sign"},{"prefix":"fad","class":"fa-sign-in"},{"prefix":"fad","class":"fa-sign-in-alt"},{"prefix":"fad","class":"fa-sign-language"},{"prefix":"fad","class":"fa-sign-out"},{"prefix":"fad","class":"fa-sign-out-alt"},{"prefix":"fad","class":"fa-signal"},{"prefix":"fad","class":"fa-signal-1"},{"prefix":"fad","class":"fa-signal-2"},{"prefix":"fad","class":"fa-signal-3"},{"prefix":"fad","class":"fa-signal-4"},{"prefix":"fad","class":"fa-signal-alt"},{"prefix":"fad","class":"fa-signal-alt-1"},{"prefix":"fad","class":"fa-signal-alt-2"},{"prefix":"fad","class":"fa-signal-alt-3"},{"prefix":"fad","class":"fa-signal-alt-slash"},{"prefix":"fad","class":"fa-signal-slash"},{"prefix":"fad","class":"fa-signal-stream"},{"prefix":"fad","class":"fa-signature"},{"prefix":"fad","class":"fa-sim-card"},{"prefix":"fad","class":"fa-sink"},{"prefix":"fad","class":"fa-siren"},{"prefix":"fad","class":"fa-siren-on"},{"prefix":"fad","class":"fa-sitemap"},{"prefix":"fad","class":"fa-skating"},{"prefix":"fad","class":"fa-skeleton"},{"prefix":"fad","class":"fa-ski-jump"},{"prefix":"fad","class":"fa-ski-lift"},{"prefix":"fad","class":"fa-skiing"},{"prefix":"fad","class":"fa-skiing-nordic"},{"prefix":"fad","class":"fa-skull"},{"prefix":"fad","class":"fa-skull-cow"},{"prefix":"fad","class":"fa-skull-crossbones"},{"prefix":"fad","class":"fa-slash"},{"prefix":"fad","class":"fa-sledding"},{"prefix":"fad","class":"fa-sleigh"},{"prefix":"fad","class":"fa-sliders-h"},{"prefix":"fad","class":"fa-sliders-h-square"},{"prefix":"fad","class":"fa-sliders-v"},{"prefix":"fad","class":"fa-sliders-v-square"},{"prefix":"fad","class":"fa-smile"},{"prefix":"fad","class":"fa-smile-beam"},{"prefix":"fad","class":"fa-smile-plus"},{"prefix":"fad","class":"fa-smile-wink"},{"prefix":"fad","class":"fa-smog"},{"prefix":"fad","class":"fa-smoke"},{"prefix":"fad","class":"fa-smoking"},{"prefix":"fad","class":"fa-smoking-ban"},{"prefix":"fad","class":"fa-sms"},{"prefix":"fad","class":"fa-snake"},{"prefix":"fad","class":"fa-snooze"},{"prefix":"fad","class":"fa-snow-blowing"},{"prefix":"fad","class":"fa-snowboarding"},{"prefix":"fad","class":"fa-snowflake"},{"prefix":"fad","class":"fa-snowflakes"},{"prefix":"fad","class":"fa-snowman"},{"prefix":"fad","class":"fa-snowmobile"},{"prefix":"fad","class":"fa-snowplow"},{"prefix":"fad","class":"fa-soap"},{"prefix":"fad","class":"fa-socks"},{"prefix":"fad","class":"fa-solar-panel"},{"prefix":"fad","class":"fa-solar-system"},{"prefix":"fad","class":"fa-sort"},{"prefix":"fad","class":"fa-sort-alpha-down"},{"prefix":"fad","class":"fa-sort-alpha-down-alt"},{"prefix":"fad","class":"fa-sort-alpha-up"},{"prefix":"fad","class":"fa-sort-alpha-up-alt"},{"prefix":"fad","class":"fa-sort-alt"},{"prefix":"fad","class":"fa-sort-amount-down"},{"prefix":"fad","class":"fa-sort-amount-down-alt"},{"prefix":"fad","class":"fa-sort-amount-up"},{"prefix":"fad","class":"fa-sort-amount-up-alt"},{"prefix":"fad","class":"fa-sort-circle"},{"prefix":"fad","class":"fa-sort-circle-down"},{"prefix":"fad","class":"fa-sort-circle-up"},{"prefix":"fad","class":"fa-sort-down"},{"prefix":"fad","class":"fa-sort-numeric-down"},{"prefix":"fad","class":"fa-sort-numeric-down-alt"},{"prefix":"fad","class":"fa-sort-numeric-up"},{"prefix":"fad","class":"fa-sort-numeric-up-alt"},{"prefix":"fad","class":"fa-sort-shapes-down"},{"prefix":"fad","class":"fa-sort-shapes-down-alt"},{"prefix":"fad","class":"fa-sort-shapes-up"},{"prefix":"fad","class":"fa-sort-shapes-up-alt"},{"prefix":"fad","class":"fa-sort-size-down"},{"prefix":"fad","class":"fa-sort-size-down-alt"},{"prefix":"fad","class":"fa-sort-size-up"},{"prefix":"fad","class":"fa-sort-size-up-alt"},{"prefix":"fad","class":"fa-sort-up"},{"prefix":"fad","class":"fa-soup"},{"prefix":"fad","class":"fa-spa"},{"prefix":"fad","class":"fa-space-shuttle"},{"prefix":"fad","class":"fa-space-station-moon"},{"prefix":"fad","class":"fa-space-station-moon-alt"},{"prefix":"fad","class":"fa-spade"},{"prefix":"fad","class":"fa-sparkles"},{"prefix":"fad","class":"fa-speaker"},{"prefix":"fad","class":"fa-speakers"},{"prefix":"fad","class":"fa-spell-check"},{"prefix":"fad","class":"fa-spider"},{"prefix":"fad","class":"fa-spider-black-widow"},{"prefix":"fad","class":"fa-spider-web"},{"prefix":"fad","class":"fa-spinner"},{"prefix":"fad","class":"fa-spinner-third"},{"prefix":"fad","class":"fa-splotch"},{"prefix":"fad","class":"fa-spray-can"},{"prefix":"fad","class":"fa-sprinkler"},{"prefix":"fad","class":"fa-square"},{"prefix":"fad","class":"fa-square-full"},{"prefix":"fad","class":"fa-square-root"},{"prefix":"fad","class":"fa-square-root-alt"},{"prefix":"fad","class":"fa-squirrel"},{"prefix":"fad","class":"fa-staff"},{"prefix":"fad","class":"fa-stamp"},{"prefix":"fad","class":"fa-star"},{"prefix":"fad","class":"fa-star-and-crescent"},{"prefix":"fad","class":"fa-star-christmas"},{"prefix":"fad","class":"fa-star-exclamation"},{"prefix":"fad","class":"fa-star-half"},{"prefix":"fad","class":"fa-star-half-alt"},{"prefix":"fad","class":"fa-star-of-david"},{"prefix":"fad","class":"fa-star-of-life"},{"prefix":"fad","class":"fa-star-shooting"},{"prefix":"fad","class":"fa-starfighter"},{"prefix":"fad","class":"fa-starfighter-alt"},{"prefix":"fad","class":"fa-stars"},{"prefix":"fad","class":"fa-starship"},{"prefix":"fad","class":"fa-starship-freighter"},{"prefix":"fad","class":"fa-steak"},{"prefix":"fad","class":"fa-steering-wheel"},{"prefix":"fad","class":"fa-step-backward"},{"prefix":"fad","class":"fa-step-forward"},{"prefix":"fad","class":"fa-stethoscope"},{"prefix":"fad","class":"fa-sticky-note"},{"prefix":"fad","class":"fa-stocking"},{"prefix":"fad","class":"fa-stomach"},{"prefix":"fad","class":"fa-stop"},{"prefix":"fad","class":"fa-stop-circle"},{"prefix":"fad","class":"fa-stopwatch"},{"prefix":"fad","class":"fa-stopwatch-20"},{"prefix":"fad","class":"fa-store"},{"prefix":"fad","class":"fa-store-alt"},{"prefix":"fad","class":"fa-store-alt-slash"},{"prefix":"fad","class":"fa-store-slash"},{"prefix":"fad","class":"fa-stream"},{"prefix":"fad","class":"fa-street-view"},{"prefix":"fad","class":"fa-stretcher"},{"prefix":"fad","class":"fa-strikethrough"},{"prefix":"fad","class":"fa-stroopwafel"},{"prefix":"fad","class":"fa-subscript"},{"prefix":"fad","class":"fa-subway"},{"prefix":"fad","class":"fa-suitcase"},{"prefix":"fad","class":"fa-suitcase-rolling"},{"prefix":"fad","class":"fa-sun"},{"prefix":"fad","class":"fa-sun-cloud"},{"prefix":"fad","class":"fa-sun-dust"},{"prefix":"fad","class":"fa-sun-haze"},{"prefix":"fad","class":"fa-sunglasses"},{"prefix":"fad","class":"fa-sunrise"},{"prefix":"fad","class":"fa-sunset"},{"prefix":"fad","class":"fa-superscript"},{"prefix":"fad","class":"fa-surprise"},{"prefix":"fad","class":"fa-swatchbook"},{"prefix":"fad","class":"fa-swimmer"},{"prefix":"fad","class":"fa-swimming-pool"},{"prefix":"fad","class":"fa-sword"},{"prefix":"fad","class":"fa-sword-laser"},{"prefix":"fad","class":"fa-sword-laser-alt"},{"prefix":"fad","class":"fa-swords"},{"prefix":"fad","class":"fa-swords-laser"},{"prefix":"fad","class":"fa-synagogue"},{"prefix":"fad","class":"fa-sync"},{"prefix":"fad","class":"fa-sync-alt"},{"prefix":"fad","class":"fa-syringe"},{"prefix":"fad","class":"fa-table"},{"prefix":"fad","class":"fa-table-tennis"},{"prefix":"fad","class":"fa-tablet"},{"prefix":"fad","class":"fa-tablet-alt"},{"prefix":"fad","class":"fa-tablet-android"},{"prefix":"fad","class":"fa-tablet-android-alt"},{"prefix":"fad","class":"fa-tablet-rugged"},{"prefix":"fad","class":"fa-tablets"},{"prefix":"fad","class":"fa-tachometer"},{"prefix":"fad","class":"fa-tachometer-alt"},{"prefix":"fad","class":"fa-tachometer-alt-average"},{"prefix":"fad","class":"fa-tachometer-alt-fast"},{"prefix":"fad","class":"fa-tachometer-alt-fastest"},{"prefix":"fad","class":"fa-tachometer-alt-slow"},{"prefix":"fad","class":"fa-tachometer-alt-slowest"},{"prefix":"fad","class":"fa-tachometer-average"},{"prefix":"fad","class":"fa-tachometer-fast"},{"prefix":"fad","class":"fa-tachometer-fastest"},{"prefix":"fad","class":"fa-tachometer-slow"},{"prefix":"fad","class":"fa-tachometer-slowest"},{"prefix":"fad","class":"fa-taco"},{"prefix":"fad","class":"fa-tag"},{"prefix":"fad","class":"fa-tags"},{"prefix":"fad","class":"fa-tally"},{"prefix":"fad","class":"fa-tanakh"},{"prefix":"fad","class":"fa-tape"},{"prefix":"fad","class":"fa-tasks"},{"prefix":"fad","class":"fa-tasks-alt"},{"prefix":"fad","class":"fa-taxi"},{"prefix":"fad","class":"fa-teeth"},{"prefix":"fad","class":"fa-teeth-open"},{"prefix":"fad","class":"fa-telescope"},{"prefix":"fad","class":"fa-temperature-down"},{"prefix":"fad","class":"fa-temperature-frigid"},{"prefix":"fad","class":"fa-temperature-high"},{"prefix":"fad","class":"fa-temperature-hot"},{"prefix":"fad","class":"fa-temperature-low"},{"prefix":"fad","class":"fa-temperature-up"},{"prefix":"fad","class":"fa-tenge"},{"prefix":"fad","class":"fa-tennis-ball"},{"prefix":"fad","class":"fa-terminal"},{"prefix":"fad","class":"fa-text"},{"prefix":"fad","class":"fa-text-height"},{"prefix":"fad","class":"fa-text-size"},{"prefix":"fad","class":"fa-text-width"},{"prefix":"fad","class":"fa-th"},{"prefix":"fad","class":"fa-th-large"},{"prefix":"fad","class":"fa-th-list"},{"prefix":"fad","class":"fa-theater-masks"},{"prefix":"fad","class":"fa-thermometer"},{"prefix":"fad","class":"fa-thermometer-empty"},{"prefix":"fad","class":"fa-thermometer-full"},{"prefix":"fad","class":"fa-thermometer-half"},{"prefix":"fad","class":"fa-thermometer-quarter"},{"prefix":"fad","class":"fa-thermometer-three-quarters"},{"prefix":"fad","class":"fa-theta"},{"prefix":"fad","class":"fa-thumbs-down"},{"prefix":"fad","class":"fa-thumbs-up"},{"prefix":"fad","class":"fa-thumbtack"},{"prefix":"fad","class":"fa-thunderstorm"},{"prefix":"fad","class":"fa-thunderstorm-moon"},{"prefix":"fad","class":"fa-thunderstorm-sun"},{"prefix":"fad","class":"fa-ticket"},{"prefix":"fad","class":"fa-ticket-alt"},{"prefix":"fad","class":"fa-tilde"},{"prefix":"fad","class":"fa-times"},{"prefix":"fad","class":"fa-times-circle"},{"prefix":"fad","class":"fa-times-hexagon"},{"prefix":"fad","class":"fa-times-octagon"},{"prefix":"fad","class":"fa-times-square"},{"prefix":"fad","class":"fa-tint"},{"prefix":"fad","class":"fa-tint-slash"},{"prefix":"fad","class":"fa-tire"},{"prefix":"fad","class":"fa-tire-flat"},{"prefix":"fad","class":"fa-tire-pressure-warning"},{"prefix":"fad","class":"fa-tire-rugged"},{"prefix":"fad","class":"fa-tired"},{"prefix":"fad","class":"fa-toggle-off"},{"prefix":"fad","class":"fa-toggle-on"},{"prefix":"fad","class":"fa-toilet"},{"prefix":"fad","class":"fa-toilet-paper"},{"prefix":"fad","class":"fa-toilet-paper-alt"},{"prefix":"fad","class":"fa-toilet-paper-slash"},{"prefix":"fad","class":"fa-tombstone"},{"prefix":"fad","class":"fa-tombstone-alt"},{"prefix":"fad","class":"fa-toolbox"},{"prefix":"fad","class":"fa-tools"},{"prefix":"fad","class":"fa-tooth"},{"prefix":"fad","class":"fa-toothbrush"},{"prefix":"fad","class":"fa-torah"},{"prefix":"fad","class":"fa-torii-gate"},{"prefix":"fad","class":"fa-tornado"},{"prefix":"fad","class":"fa-tractor"},{"prefix":"fad","class":"fa-trademark"},{"prefix":"fad","class":"fa-traffic-cone"},{"prefix":"fad","class":"fa-traffic-light"},{"prefix":"fad","class":"fa-traffic-light-go"},{"prefix":"fad","class":"fa-traffic-light-slow"},{"prefix":"fad","class":"fa-traffic-light-stop"},{"prefix":"fad","class":"fa-trailer"},{"prefix":"fad","class":"fa-train"},{"prefix":"fad","class":"fa-tram"},{"prefix":"fad","class":"fa-transgender"},{"prefix":"fad","class":"fa-transgender-alt"},{"prefix":"fad","class":"fa-transporter"},{"prefix":"fad","class":"fa-transporter-1"},{"prefix":"fad","class":"fa-transporter-2"},{"prefix":"fad","class":"fa-transporter-3"},{"prefix":"fad","class":"fa-transporter-empty"},{"prefix":"fad","class":"fa-trash"},{"prefix":"fad","class":"fa-trash-alt"},{"prefix":"fad","class":"fa-trash-restore"},{"prefix":"fad","class":"fa-trash-restore-alt"},{"prefix":"fad","class":"fa-trash-undo"},{"prefix":"fad","class":"fa-trash-undo-alt"},{"prefix":"fad","class":"fa-treasure-chest"},{"prefix":"fad","class":"fa-tree"},{"prefix":"fad","class":"fa-tree-alt"},{"prefix":"fad","class":"fa-tree-christmas"},{"prefix":"fad","class":"fa-tree-decorated"},{"prefix":"fad","class":"fa-tree-large"},{"prefix":"fad","class":"fa-tree-palm"},{"prefix":"fad","class":"fa-trees"},{"prefix":"fad","class":"fa-triangle"},{"prefix":"fad","class":"fa-triangle-music"},{"prefix":"fad","class":"fa-trophy"},{"prefix":"fad","class":"fa-trophy-alt"},{"prefix":"fad","class":"fa-truck"},{"prefix":"fad","class":"fa-truck-container"},{"prefix":"fad","class":"fa-truck-couch"},{"prefix":"fad","class":"fa-truck-loading"},{"prefix":"fad","class":"fa-truck-monster"},{"prefix":"fad","class":"fa-truck-moving"},{"prefix":"fad","class":"fa-truck-pickup"},{"prefix":"fad","class":"fa-truck-plow"},{"prefix":"fad","class":"fa-truck-ramp"},{"prefix":"fad","class":"fa-trumpet"},{"prefix":"fad","class":"fa-tshirt"},{"prefix":"fad","class":"fa-tty"},{"prefix":"fad","class":"fa-turkey"},{"prefix":"fad","class":"fa-turntable"},{"prefix":"fad","class":"fa-turtle"},{"prefix":"fad","class":"fa-tv"},{"prefix":"fad","class":"fa-tv-alt"},{"prefix":"fad","class":"fa-tv-music"},{"prefix":"fad","class":"fa-tv-retro"},{"prefix":"fad","class":"fa-typewriter"},{"prefix":"fad","class":"fa-ufo"},{"prefix":"fad","class":"fa-ufo-beam"},{"prefix":"fad","class":"fa-umbrella"},{"prefix":"fad","class":"fa-umbrella-beach"},{"prefix":"fad","class":"fa-underline"},{"prefix":"fad","class":"fa-undo"},{"prefix":"fad","class":"fa-undo-alt"},{"prefix":"fad","class":"fa-unicorn"},{"prefix":"fad","class":"fa-union"},{"prefix":"fad","class":"fa-universal-access"},{"prefix":"fad","class":"fa-university"},{"prefix":"fad","class":"fa-unlink"},{"prefix":"fad","class":"fa-unlock"},{"prefix":"fad","class":"fa-unlock-alt"},{"prefix":"fad","class":"fa-upload"},{"prefix":"fad","class":"fa-usb-drive"},{"prefix":"fad","class":"fa-usd-circle"},{"prefix":"fad","class":"fa-usd-square"},{"prefix":"fad","class":"fa-user"},{"prefix":"fad","class":"fa-user-alien"},{"prefix":"fad","class":"fa-user-alt"},{"prefix":"fad","class":"fa-user-alt-slash"},{"prefix":"fad","class":"fa-user-astronaut"},{"prefix":"fad","class":"fa-user-chart"},{"prefix":"fad","class":"fa-user-check"},{"prefix":"fad","class":"fa-user-circle"},{"prefix":"fad","class":"fa-user-clock"},{"prefix":"fad","class":"fa-user-cog"},{"prefix":"fad","class":"fa-user-cowboy"},{"prefix":"fad","class":"fa-user-crown"},{"prefix":"fad","class":"fa-user-edit"},{"prefix":"fad","class":"fa-user-friends"},{"prefix":"fad","class":"fa-user-graduate"},{"prefix":"fad","class":"fa-user-hard-hat"},{"prefix":"fad","class":"fa-user-headset"},{"prefix":"fad","class":"fa-user-injured"},{"prefix":"fad","class":"fa-user-lock"},{"prefix":"fad","class":"fa-user-md"},{"prefix":"fad","class":"fa-user-md-chat"},{"prefix":"fad","class":"fa-user-minus"},{"prefix":"fad","class":"fa-user-music"},{"prefix":"fad","class":"fa-user-ninja"},{"prefix":"fad","class":"fa-user-nurse"},{"prefix":"fad","class":"fa-user-plus"},{"prefix":"fad","class":"fa-user-robot"},{"prefix":"fad","class":"fa-user-secret"},{"prefix":"fad","class":"fa-user-shield"},{"prefix":"fad","class":"fa-user-slash"},{"prefix":"fad","class":"fa-user-tag"},{"prefix":"fad","class":"fa-user-tie"},{"prefix":"fad","class":"fa-user-times"},{"prefix":"fad","class":"fa-user-unlock"},{"prefix":"fad","class":"fa-user-visor"},{"prefix":"fad","class":"fa-users"},{"prefix":"fad","class":"fa-users-class"},{"prefix":"fad","class":"fa-users-cog"},{"prefix":"fad","class":"fa-users-crown"},{"prefix":"fad","class":"fa-users-medical"},{"prefix":"fad","class":"fa-users-slash"},{"prefix":"fad","class":"fa-utensil-fork"},{"prefix":"fad","class":"fa-utensil-knife"},{"prefix":"fad","class":"fa-utensil-spoon"},{"prefix":"fad","class":"fa-utensils"},{"prefix":"fad","class":"fa-utensils-alt"},{"prefix":"fad","class":"fa-vacuum"},{"prefix":"fad","class":"fa-vacuum-robot"},{"prefix":"fad","class":"fa-value-absolute"},{"prefix":"fad","class":"fa-vector-square"},{"prefix":"fad","class":"fa-venus"},{"prefix":"fad","class":"fa-venus-double"},{"prefix":"fad","class":"fa-venus-mars"},{"prefix":"fad","class":"fa-vest"},{"prefix":"fad","class":"fa-vest-patches"},{"prefix":"fad","class":"fa-vhs"},{"prefix":"fad","class":"fa-vial"},{"prefix":"fad","class":"fa-vials"},{"prefix":"fad","class":"fa-video"},{"prefix":"fad","class":"fa-video-plus"},{"prefix":"fad","class":"fa-video-slash"},{"prefix":"fad","class":"fa-vihara"},{"prefix":"fad","class":"fa-violin"},{"prefix":"fad","class":"fa-virus"},{"prefix":"fad","class":"fa-virus-slash"},{"prefix":"fad","class":"fa-viruses"},{"prefix":"fad","class":"fa-voicemail"},{"prefix":"fad","class":"fa-volcano"},{"prefix":"fad","class":"fa-volleyball-ball"},{"prefix":"fad","class":"fa-volume"},{"prefix":"fad","class":"fa-volume-down"},{"prefix":"fad","class":"fa-volume-mute"},{"prefix":"fad","class":"fa-volume-off"},{"prefix":"fad","class":"fa-volume-slash"},{"prefix":"fad","class":"fa-volume-up"},{"prefix":"fad","class":"fa-vote-nay"},{"prefix":"fad","class":"fa-vote-yea"},{"prefix":"fad","class":"fa-vr-cardboard"},{"prefix":"fad","class":"fa-wagon-covered"},{"prefix":"fad","class":"fa-walker"},{"prefix":"fad","class":"fa-walkie-talkie"},{"prefix":"fad","class":"fa-walking"},{"prefix":"fad","class":"fa-wallet"},{"prefix":"fad","class":"fa-wand"},{"prefix":"fad","class":"fa-wand-magic"},{"prefix":"fad","class":"fa-warehouse"},{"prefix":"fad","class":"fa-warehouse-alt"},{"prefix":"fad","class":"fa-washer"},{"prefix":"fad","class":"fa-watch"},{"prefix":"fad","class":"fa-watch-calculator"},{"prefix":"fad","class":"fa-watch-fitness"},{"prefix":"fad","class":"fa-water"},{"prefix":"fad","class":"fa-water-lower"},{"prefix":"fad","class":"fa-water-rise"},{"prefix":"fad","class":"fa-wave-sine"},{"prefix":"fad","class":"fa-wave-square"},{"prefix":"fad","class":"fa-wave-triangle"},{"prefix":"fad","class":"fa-waveform"},{"prefix":"fad","class":"fa-waveform-path"},{"prefix":"fad","class":"fa-webcam"},{"prefix":"fad","class":"fa-webcam-slash"},{"prefix":"fad","class":"fa-weight"},{"prefix":"fad","class":"fa-weight-hanging"},{"prefix":"fad","class":"fa-whale"},{"prefix":"fad","class":"fa-wheat"},{"prefix":"fad","class":"fa-wheelchair"},{"prefix":"fad","class":"fa-whistle"},{"prefix":"fad","class":"fa-wifi"},{"prefix":"fad","class":"fa-wifi-1"},{"prefix":"fad","class":"fa-wifi-2"},{"prefix":"fad","class":"fa-wifi-slash"},{"prefix":"fad","class":"fa-wind"},{"prefix":"fad","class":"fa-wind-turbine"},{"prefix":"fad","class":"fa-wind-warning"},{"prefix":"fad","class":"fa-window"},{"prefix":"fad","class":"fa-window-alt"},{"prefix":"fad","class":"fa-window-close"},{"prefix":"fad","class":"fa-window-frame"},{"prefix":"fad","class":"fa-window-frame-open"},{"prefix":"fad","class":"fa-window-maximize"},{"prefix":"fad","class":"fa-window-minimize"},{"prefix":"fad","class":"fa-window-restore"},{"prefix":"fad","class":"fa-windsock"},{"prefix":"fad","class":"fa-wine-bottle"},{"prefix":"fad","class":"fa-wine-glass"},{"prefix":"fad","class":"fa-wine-glass-alt"},{"prefix":"fad","class":"fa-won-sign"},{"prefix":"fad","class":"fa-wreath"},{"prefix":"fad","class":"fa-wrench"},{"prefix":"fad","class":"fa-x-ray"},{"prefix":"fad","class":"fa-yen-sign"},{"prefix":"fad","class":"fa-yin-yang"}]');

/***/ }),

/***/ "./src/assets/light.json":
/*!*******************************!*\
  !*** ./src/assets/light.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"prefix":"fal","class":"fa-abacus"},{"prefix":"fal","class":"fa-acorn"},{"prefix":"fal","class":"fa-ad"},{"prefix":"fal","class":"fa-address-book"},{"prefix":"fal","class":"fa-address-card"},{"prefix":"fal","class":"fa-adjust"},{"prefix":"fal","class":"fa-air-conditioner"},{"prefix":"fal","class":"fa-air-freshener"},{"prefix":"fal","class":"fa-alarm-clock"},{"prefix":"fal","class":"fa-alarm-exclamation"},{"prefix":"fal","class":"fa-alarm-plus"},{"prefix":"fal","class":"fa-alarm-snooze"},{"prefix":"fal","class":"fa-album"},{"prefix":"fal","class":"fa-album-collection"},{"prefix":"fal","class":"fa-alicorn"},{"prefix":"fal","class":"fa-alien"},{"prefix":"fal","class":"fa-alien-monster"},{"prefix":"fal","class":"fa-align-center"},{"prefix":"fal","class":"fa-align-justify"},{"prefix":"fal","class":"fa-align-left"},{"prefix":"fal","class":"fa-align-right"},{"prefix":"fal","class":"fa-align-slash"},{"prefix":"fal","class":"fa-allergies"},{"prefix":"fal","class":"fa-ambulance"},{"prefix":"fal","class":"fa-american-sign-language-interpreting"},{"prefix":"fal","class":"fa-amp-guitar"},{"prefix":"fal","class":"fa-analytics"},{"prefix":"fal","class":"fa-anchor"},{"prefix":"fal","class":"fa-angel"},{"prefix":"fal","class":"fa-angle-double-down"},{"prefix":"fal","class":"fa-angle-double-left"},{"prefix":"fal","class":"fa-angle-double-right"},{"prefix":"fal","class":"fa-angle-double-up"},{"prefix":"fal","class":"fa-angle-down"},{"prefix":"fal","class":"fa-angle-left"},{"prefix":"fal","class":"fa-angle-right"},{"prefix":"fal","class":"fa-angle-up"},{"prefix":"fal","class":"fa-angry"},{"prefix":"fal","class":"fa-ankh"},{"prefix":"fal","class":"fa-apple-alt"},{"prefix":"fal","class":"fa-apple-crate"},{"prefix":"fal","class":"fa-archive"},{"prefix":"fal","class":"fa-archway"},{"prefix":"fal","class":"fa-arrow-alt-circle-down"},{"prefix":"fal","class":"fa-arrow-alt-circle-left"},{"prefix":"fal","class":"fa-arrow-alt-circle-right"},{"prefix":"fal","class":"fa-arrow-alt-circle-up"},{"prefix":"fal","class":"fa-arrow-alt-down"},{"prefix":"fal","class":"fa-arrow-alt-from-bottom"},{"prefix":"fal","class":"fa-arrow-alt-from-left"},{"prefix":"fal","class":"fa-arrow-alt-from-right"},{"prefix":"fal","class":"fa-arrow-alt-from-top"},{"prefix":"fal","class":"fa-arrow-alt-left"},{"prefix":"fal","class":"fa-arrow-alt-right"},{"prefix":"fal","class":"fa-arrow-alt-square-down"},{"prefix":"fal","class":"fa-arrow-alt-square-left"},{"prefix":"fal","class":"fa-arrow-alt-square-right"},{"prefix":"fal","class":"fa-arrow-alt-square-up"},{"prefix":"fal","class":"fa-arrow-alt-to-bottom"},{"prefix":"fal","class":"fa-arrow-alt-to-left"},{"prefix":"fal","class":"fa-arrow-alt-to-right"},{"prefix":"fal","class":"fa-arrow-alt-to-top"},{"prefix":"fal","class":"fa-arrow-alt-up"},{"prefix":"fal","class":"fa-arrow-circle-down"},{"prefix":"fal","class":"fa-arrow-circle-left"},{"prefix":"fal","class":"fa-arrow-circle-right"},{"prefix":"fal","class":"fa-arrow-circle-up"},{"prefix":"fal","class":"fa-arrow-down"},{"prefix":"fal","class":"fa-arrow-from-bottom"},{"prefix":"fal","class":"fa-arrow-from-left"},{"prefix":"fal","class":"fa-arrow-from-right"},{"prefix":"fal","class":"fa-arrow-from-top"},{"prefix":"fal","class":"fa-arrow-left"},{"prefix":"fal","class":"fa-arrow-right"},{"prefix":"fal","class":"fa-arrow-square-down"},{"prefix":"fal","class":"fa-arrow-square-left"},{"prefix":"fal","class":"fa-arrow-square-right"},{"prefix":"fal","class":"fa-arrow-square-up"},{"prefix":"fal","class":"fa-arrow-to-bottom"},{"prefix":"fal","class":"fa-arrow-to-left"},{"prefix":"fal","class":"fa-arrow-to-right"},{"prefix":"fal","class":"fa-arrow-to-top"},{"prefix":"fal","class":"fa-arrow-up"},{"prefix":"fal","class":"fa-arrows"},{"prefix":"fal","class":"fa-arrows-alt"},{"prefix":"fal","class":"fa-arrows-alt-h"},{"prefix":"fal","class":"fa-arrows-alt-v"},{"prefix":"fal","class":"fa-arrows-h"},{"prefix":"fal","class":"fa-arrows-v"},{"prefix":"fal","class":"fa-assistive-listening-systems"},{"prefix":"fal","class":"fa-asterisk"},{"prefix":"fal","class":"fa-at"},{"prefix":"fal","class":"fa-atlas"},{"prefix":"fal","class":"fa-atom"},{"prefix":"fal","class":"fa-atom-alt"},{"prefix":"fal","class":"fa-audio-description"},{"prefix":"fal","class":"fa-award"},{"prefix":"fal","class":"fa-axe"},{"prefix":"fal","class":"fa-axe-battle"},{"prefix":"fal","class":"fa-baby"},{"prefix":"fal","class":"fa-baby-carriage"},{"prefix":"fal","class":"fa-backpack"},{"prefix":"fal","class":"fa-backspace"},{"prefix":"fal","class":"fa-backward"},{"prefix":"fal","class":"fa-bacon"},{"prefix":"fal","class":"fa-bacteria"},{"prefix":"fal","class":"fa-bacterium"},{"prefix":"fal","class":"fa-badge"},{"prefix":"fal","class":"fa-badge-check"},{"prefix":"fal","class":"fa-badge-dollar"},{"prefix":"fal","class":"fa-badge-percent"},{"prefix":"fal","class":"fa-badge-sheriff"},{"prefix":"fal","class":"fa-badger-honey"},{"prefix":"fal","class":"fa-bags-shopping"},{"prefix":"fal","class":"fa-bahai"},{"prefix":"fal","class":"fa-balance-scale"},{"prefix":"fal","class":"fa-balance-scale-left"},{"prefix":"fal","class":"fa-balance-scale-right"},{"prefix":"fal","class":"fa-ball-pile"},{"prefix":"fal","class":"fa-ballot"},{"prefix":"fal","class":"fa-ballot-check"},{"prefix":"fal","class":"fa-ban"},{"prefix":"fal","class":"fa-band-aid"},{"prefix":"fal","class":"fa-banjo"},{"prefix":"fal","class":"fa-barcode"},{"prefix":"fal","class":"fa-barcode-alt"},{"prefix":"fal","class":"fa-barcode-read"},{"prefix":"fal","class":"fa-barcode-scan"},{"prefix":"fal","class":"fa-bars"},{"prefix":"fal","class":"fa-baseball"},{"prefix":"fal","class":"fa-baseball-ball"},{"prefix":"fal","class":"fa-basketball-ball"},{"prefix":"fal","class":"fa-basketball-hoop"},{"prefix":"fal","class":"fa-bat"},{"prefix":"fal","class":"fa-bath"},{"prefix":"fal","class":"fa-battery-bolt"},{"prefix":"fal","class":"fa-battery-empty"},{"prefix":"fal","class":"fa-battery-full"},{"prefix":"fal","class":"fa-battery-half"},{"prefix":"fal","class":"fa-battery-quarter"},{"prefix":"fal","class":"fa-battery-slash"},{"prefix":"fal","class":"fa-battery-three-quarters"},{"prefix":"fal","class":"fa-bed"},{"prefix":"fal","class":"fa-bed-alt"},{"prefix":"fal","class":"fa-bed-bunk"},{"prefix":"fal","class":"fa-bed-empty"},{"prefix":"fal","class":"fa-beer"},{"prefix":"fal","class":"fa-bell"},{"prefix":"fal","class":"fa-bell-exclamation"},{"prefix":"fal","class":"fa-bell-on"},{"prefix":"fal","class":"fa-bell-plus"},{"prefix":"fal","class":"fa-bell-school"},{"prefix":"fal","class":"fa-bell-school-slash"},{"prefix":"fal","class":"fa-bell-slash"},{"prefix":"fal","class":"fa-bells"},{"prefix":"fal","class":"fa-betamax"},{"prefix":"fal","class":"fa-bezier-curve"},{"prefix":"fal","class":"fa-bible"},{"prefix":"fal","class":"fa-bicycle"},{"prefix":"fal","class":"fa-biking"},{"prefix":"fal","class":"fa-biking-mountain"},{"prefix":"fal","class":"fa-binoculars"},{"prefix":"fal","class":"fa-biohazard"},{"prefix":"fal","class":"fa-birthday-cake"},{"prefix":"fal","class":"fa-blanket"},{"prefix":"fal","class":"fa-blender"},{"prefix":"fal","class":"fa-blender-phone"},{"prefix":"fal","class":"fa-blind"},{"prefix":"fal","class":"fa-blinds"},{"prefix":"fal","class":"fa-blinds-open"},{"prefix":"fal","class":"fa-blinds-raised"},{"prefix":"fal","class":"fa-blog"},{"prefix":"fal","class":"fa-bold"},{"prefix":"fal","class":"fa-bolt"},{"prefix":"fal","class":"fa-bomb"},{"prefix":"fal","class":"fa-bone"},{"prefix":"fal","class":"fa-bone-break"},{"prefix":"fal","class":"fa-bong"},{"prefix":"fal","class":"fa-book"},{"prefix":"fal","class":"fa-book-alt"},{"prefix":"fal","class":"fa-book-dead"},{"prefix":"fal","class":"fa-book-heart"},{"prefix":"fal","class":"fa-book-medical"},{"prefix":"fal","class":"fa-book-open"},{"prefix":"fal","class":"fa-book-reader"},{"prefix":"fal","class":"fa-book-spells"},{"prefix":"fal","class":"fa-book-user"},{"prefix":"fal","class":"fa-bookmark"},{"prefix":"fal","class":"fa-books"},{"prefix":"fal","class":"fa-books-medical"},{"prefix":"fal","class":"fa-boombox"},{"prefix":"fal","class":"fa-boot"},{"prefix":"fal","class":"fa-booth-curtain"},{"prefix":"fal","class":"fa-border-all"},{"prefix":"fal","class":"fa-border-bottom"},{"prefix":"fal","class":"fa-border-center-h"},{"prefix":"fal","class":"fa-border-center-v"},{"prefix":"fal","class":"fa-border-inner"},{"prefix":"fal","class":"fa-border-left"},{"prefix":"fal","class":"fa-border-none"},{"prefix":"fal","class":"fa-border-outer"},{"prefix":"fal","class":"fa-border-right"},{"prefix":"fal","class":"fa-border-style"},{"prefix":"fal","class":"fa-border-style-alt"},{"prefix":"fal","class":"fa-border-top"},{"prefix":"fal","class":"fa-bow-arrow"},{"prefix":"fal","class":"fa-bowling-ball"},{"prefix":"fal","class":"fa-bowling-pins"},{"prefix":"fal","class":"fa-box"},{"prefix":"fal","class":"fa-box-alt"},{"prefix":"fal","class":"fa-box-ballot"},{"prefix":"fal","class":"fa-box-check"},{"prefix":"fal","class":"fa-box-fragile"},{"prefix":"fal","class":"fa-box-full"},{"prefix":"fal","class":"fa-box-heart"},{"prefix":"fal","class":"fa-box-open"},{"prefix":"fal","class":"fa-box-tissue"},{"prefix":"fal","class":"fa-box-up"},{"prefix":"fal","class":"fa-box-usd"},{"prefix":"fal","class":"fa-boxes"},{"prefix":"fal","class":"fa-boxes-alt"},{"prefix":"fal","class":"fa-boxing-glove"},{"prefix":"fal","class":"fa-brackets"},{"prefix":"fal","class":"fa-brackets-curly"},{"prefix":"fal","class":"fa-braille"},{"prefix":"fal","class":"fa-brain"},{"prefix":"fal","class":"fa-bread-loaf"},{"prefix":"fal","class":"fa-bread-slice"},{"prefix":"fal","class":"fa-briefcase"},{"prefix":"fal","class":"fa-briefcase-medical"},{"prefix":"fal","class":"fa-bring-forward"},{"prefix":"fal","class":"fa-bring-front"},{"prefix":"fal","class":"fa-broadcast-tower"},{"prefix":"fal","class":"fa-broom"},{"prefix":"fal","class":"fa-browser"},{"prefix":"fal","class":"fa-brush"},{"prefix":"fal","class":"fa-bug"},{"prefix":"fal","class":"fa-building"},{"prefix":"fal","class":"fa-bullhorn"},{"prefix":"fal","class":"fa-bullseye"},{"prefix":"fal","class":"fa-bullseye-arrow"},{"prefix":"fal","class":"fa-bullseye-pointer"},{"prefix":"fal","class":"fa-burger-soda"},{"prefix":"fal","class":"fa-burn"},{"prefix":"fal","class":"fa-burrito"},{"prefix":"fal","class":"fa-bus"},{"prefix":"fal","class":"fa-bus-alt"},{"prefix":"fal","class":"fa-bus-school"},{"prefix":"fal","class":"fa-business-time"},{"prefix":"fal","class":"fa-cabinet-filing"},{"prefix":"fal","class":"fa-cactus"},{"prefix":"fal","class":"fa-calculator"},{"prefix":"fal","class":"fa-calculator-alt"},{"prefix":"fal","class":"fa-calendar"},{"prefix":"fal","class":"fa-calendar-alt"},{"prefix":"fal","class":"fa-calendar-check"},{"prefix":"fal","class":"fa-calendar-day"},{"prefix":"fal","class":"fa-calendar-edit"},{"prefix":"fal","class":"fa-calendar-exclamation"},{"prefix":"fal","class":"fa-calendar-minus"},{"prefix":"fal","class":"fa-calendar-plus"},{"prefix":"fal","class":"fa-calendar-star"},{"prefix":"fal","class":"fa-calendar-times"},{"prefix":"fal","class":"fa-calendar-week"},{"prefix":"fal","class":"fa-camcorder"},{"prefix":"fal","class":"fa-camera"},{"prefix":"fal","class":"fa-camera-alt"},{"prefix":"fal","class":"fa-camera-home"},{"prefix":"fal","class":"fa-camera-movie"},{"prefix":"fal","class":"fa-camera-polaroid"},{"prefix":"fal","class":"fa-camera-retro"},{"prefix":"fal","class":"fa-campfire"},{"prefix":"fal","class":"fa-campground"},{"prefix":"fal","class":"fa-candle-holder"},{"prefix":"fal","class":"fa-candy-cane"},{"prefix":"fal","class":"fa-candy-corn"},{"prefix":"fal","class":"fa-cannabis"},{"prefix":"fal","class":"fa-capsules"},{"prefix":"fal","class":"fa-car"},{"prefix":"fal","class":"fa-car-alt"},{"prefix":"fal","class":"fa-car-battery"},{"prefix":"fal","class":"fa-car-building"},{"prefix":"fal","class":"fa-car-bump"},{"prefix":"fal","class":"fa-car-bus"},{"prefix":"fal","class":"fa-car-crash"},{"prefix":"fal","class":"fa-car-garage"},{"prefix":"fal","class":"fa-car-mechanic"},{"prefix":"fal","class":"fa-car-side"},{"prefix":"fal","class":"fa-car-tilt"},{"prefix":"fal","class":"fa-car-wash"},{"prefix":"fal","class":"fa-caravan"},{"prefix":"fal","class":"fa-caravan-alt"},{"prefix":"fal","class":"fa-caret-circle-down"},{"prefix":"fal","class":"fa-caret-circle-left"},{"prefix":"fal","class":"fa-caret-circle-right"},{"prefix":"fal","class":"fa-caret-circle-up"},{"prefix":"fal","class":"fa-caret-down"},{"prefix":"fal","class":"fa-caret-left"},{"prefix":"fal","class":"fa-caret-right"},{"prefix":"fal","class":"fa-caret-square-down"},{"prefix":"fal","class":"fa-caret-square-left"},{"prefix":"fal","class":"fa-caret-square-right"},{"prefix":"fal","class":"fa-caret-square-up"},{"prefix":"fal","class":"fa-caret-up"},{"prefix":"fal","class":"fa-carrot"},{"prefix":"fal","class":"fa-cars"},{"prefix":"fal","class":"fa-cart-arrow-down"},{"prefix":"fal","class":"fa-cart-plus"},{"prefix":"fal","class":"fa-cash-register"},{"prefix":"fal","class":"fa-cassette-tape"},{"prefix":"fal","class":"fa-cat"},{"prefix":"fal","class":"fa-cat-space"},{"prefix":"fal","class":"fa-cauldron"},{"prefix":"fal","class":"fa-cctv"},{"prefix":"fal","class":"fa-certificate"},{"prefix":"fal","class":"fa-chair"},{"prefix":"fal","class":"fa-chair-office"},{"prefix":"fal","class":"fa-chalkboard"},{"prefix":"fal","class":"fa-chalkboard-teacher"},{"prefix":"fal","class":"fa-charging-station"},{"prefix":"fal","class":"fa-chart-area"},{"prefix":"fal","class":"fa-chart-bar"},{"prefix":"fal","class":"fa-chart-line"},{"prefix":"fal","class":"fa-chart-line-down"},{"prefix":"fal","class":"fa-chart-network"},{"prefix":"fal","class":"fa-chart-pie"},{"prefix":"fal","class":"fa-chart-pie-alt"},{"prefix":"fal","class":"fa-chart-scatter"},{"prefix":"fal","class":"fa-check"},{"prefix":"fal","class":"fa-check-circle"},{"prefix":"fal","class":"fa-check-double"},{"prefix":"fal","class":"fa-check-square"},{"prefix":"fal","class":"fa-cheese"},{"prefix":"fal","class":"fa-cheese-swiss"},{"prefix":"fal","class":"fa-cheeseburger"},{"prefix":"fal","class":"fa-chess"},{"prefix":"fal","class":"fa-chess-bishop"},{"prefix":"fal","class":"fa-chess-bishop-alt"},{"prefix":"fal","class":"fa-chess-board"},{"prefix":"fal","class":"fa-chess-clock"},{"prefix":"fal","class":"fa-chess-clock-alt"},{"prefix":"fal","class":"fa-chess-king"},{"prefix":"fal","class":"fa-chess-king-alt"},{"prefix":"fal","class":"fa-chess-knight"},{"prefix":"fal","class":"fa-chess-knight-alt"},{"prefix":"fal","class":"fa-chess-pawn"},{"prefix":"fal","class":"fa-chess-pawn-alt"},{"prefix":"fal","class":"fa-chess-queen"},{"prefix":"fal","class":"fa-chess-queen-alt"},{"prefix":"fal","class":"fa-chess-rook"},{"prefix":"fal","class":"fa-chess-rook-alt"},{"prefix":"fal","class":"fa-chevron-circle-down"},{"prefix":"fal","class":"fa-chevron-circle-left"},{"prefix":"fal","class":"fa-chevron-circle-right"},{"prefix":"fal","class":"fa-chevron-circle-up"},{"prefix":"fal","class":"fa-chevron-double-down"},{"prefix":"fal","class":"fa-chevron-double-left"},{"prefix":"fal","class":"fa-chevron-double-right"},{"prefix":"fal","class":"fa-chevron-double-up"},{"prefix":"fal","class":"fa-chevron-down"},{"prefix":"fal","class":"fa-chevron-left"},{"prefix":"fal","class":"fa-chevron-right"},{"prefix":"fal","class":"fa-chevron-square-down"},{"prefix":"fal","class":"fa-chevron-square-left"},{"prefix":"fal","class":"fa-chevron-square-right"},{"prefix":"fal","class":"fa-chevron-square-up"},{"prefix":"fal","class":"fa-chevron-up"},{"prefix":"fal","class":"fa-child"},{"prefix":"fal","class":"fa-chimney"},{"prefix":"fal","class":"fa-church"},{"prefix":"fal","class":"fa-circle"},{"prefix":"fal","class":"fa-circle-notch"},{"prefix":"fal","class":"fa-city"},{"prefix":"fal","class":"fa-clarinet"},{"prefix":"fal","class":"fa-claw-marks"},{"prefix":"fal","class":"fa-clinic-medical"},{"prefix":"fal","class":"fa-clipboard"},{"prefix":"fal","class":"fa-clipboard-check"},{"prefix":"fal","class":"fa-clipboard-list"},{"prefix":"fal","class":"fa-clipboard-list-check"},{"prefix":"fal","class":"fa-clipboard-prescription"},{"prefix":"fal","class":"fa-clipboard-user"},{"prefix":"fal","class":"fa-clock"},{"prefix":"fal","class":"fa-clone"},{"prefix":"fal","class":"fa-closed-captioning"},{"prefix":"fal","class":"fa-cloud"},{"prefix":"fal","class":"fa-cloud-download"},{"prefix":"fal","class":"fa-cloud-download-alt"},{"prefix":"fal","class":"fa-cloud-drizzle"},{"prefix":"fal","class":"fa-cloud-hail"},{"prefix":"fal","class":"fa-cloud-hail-mixed"},{"prefix":"fal","class":"fa-cloud-meatball"},{"prefix":"fal","class":"fa-cloud-moon"},{"prefix":"fal","class":"fa-cloud-moon-rain"},{"prefix":"fal","class":"fa-cloud-music"},{"prefix":"fal","class":"fa-cloud-rain"},{"prefix":"fal","class":"fa-cloud-rainbow"},{"prefix":"fal","class":"fa-cloud-showers"},{"prefix":"fal","class":"fa-cloud-showers-heavy"},{"prefix":"fal","class":"fa-cloud-sleet"},{"prefix":"fal","class":"fa-cloud-snow"},{"prefix":"fal","class":"fa-cloud-sun"},{"prefix":"fal","class":"fa-cloud-sun-rain"},{"prefix":"fal","class":"fa-cloud-upload"},{"prefix":"fal","class":"fa-cloud-upload-alt"},{"prefix":"fal","class":"fa-clouds"},{"prefix":"fal","class":"fa-clouds-moon"},{"prefix":"fal","class":"fa-clouds-sun"},{"prefix":"fal","class":"fa-club"},{"prefix":"fal","class":"fa-cocktail"},{"prefix":"fal","class":"fa-code"},{"prefix":"fal","class":"fa-code-branch"},{"prefix":"fal","class":"fa-code-commit"},{"prefix":"fal","class":"fa-code-merge"},{"prefix":"fal","class":"fa-coffee"},{"prefix":"fal","class":"fa-coffee-pot"},{"prefix":"fal","class":"fa-coffee-togo"},{"prefix":"fal","class":"fa-coffin"},{"prefix":"fal","class":"fa-coffin-cross"},{"prefix":"fal","class":"fa-cog"},{"prefix":"fal","class":"fa-cogs"},{"prefix":"fal","class":"fa-coin"},{"prefix":"fal","class":"fa-coins"},{"prefix":"fal","class":"fa-columns"},{"prefix":"fal","class":"fa-comet"},{"prefix":"fal","class":"fa-comment"},{"prefix":"fal","class":"fa-comment-alt"},{"prefix":"fal","class":"fa-comment-alt-check"},{"prefix":"fal","class":"fa-comment-alt-dollar"},{"prefix":"fal","class":"fa-comment-alt-dots"},{"prefix":"fal","class":"fa-comment-alt-edit"},{"prefix":"fal","class":"fa-comment-alt-exclamation"},{"prefix":"fal","class":"fa-comment-alt-lines"},{"prefix":"fal","class":"fa-comment-alt-medical"},{"prefix":"fal","class":"fa-comment-alt-minus"},{"prefix":"fal","class":"fa-comment-alt-music"},{"prefix":"fal","class":"fa-comment-alt-plus"},{"prefix":"fal","class":"fa-comment-alt-slash"},{"prefix":"fal","class":"fa-comment-alt-smile"},{"prefix":"fal","class":"fa-comment-alt-times"},{"prefix":"fal","class":"fa-comment-check"},{"prefix":"fal","class":"fa-comment-dollar"},{"prefix":"fal","class":"fa-comment-dots"},{"prefix":"fal","class":"fa-comment-edit"},{"prefix":"fal","class":"fa-comment-exclamation"},{"prefix":"fal","class":"fa-comment-lines"},{"prefix":"fal","class":"fa-comment-medical"},{"prefix":"fal","class":"fa-comment-minus"},{"prefix":"fal","class":"fa-comment-music"},{"prefix":"fal","class":"fa-comment-plus"},{"prefix":"fal","class":"fa-comment-slash"},{"prefix":"fal","class":"fa-comment-smile"},{"prefix":"fal","class":"fa-comment-times"},{"prefix":"fal","class":"fa-comments"},{"prefix":"fal","class":"fa-comments-alt"},{"prefix":"fal","class":"fa-comments-alt-dollar"},{"prefix":"fal","class":"fa-comments-dollar"},{"prefix":"fal","class":"fa-compact-disc"},{"prefix":"fal","class":"fa-compass"},{"prefix":"fal","class":"fa-compass-slash"},{"prefix":"fal","class":"fa-compress"},{"prefix":"fal","class":"fa-compress-alt"},{"prefix":"fal","class":"fa-compress-arrows-alt"},{"prefix":"fal","class":"fa-compress-wide"},{"prefix":"fal","class":"fa-computer-classic"},{"prefix":"fal","class":"fa-computer-speaker"},{"prefix":"fal","class":"fa-concierge-bell"},{"prefix":"fal","class":"fa-construction"},{"prefix":"fal","class":"fa-container-storage"},{"prefix":"fal","class":"fa-conveyor-belt"},{"prefix":"fal","class":"fa-conveyor-belt-alt"},{"prefix":"fal","class":"fa-cookie"},{"prefix":"fal","class":"fa-cookie-bite"},{"prefix":"fal","class":"fa-copy"},{"prefix":"fal","class":"fa-copyright"},{"prefix":"fal","class":"fa-corn"},{"prefix":"fal","class":"fa-couch"},{"prefix":"fal","class":"fa-cow"},{"prefix":"fal","class":"fa-cowbell"},{"prefix":"fal","class":"fa-cowbell-more"},{"prefix":"fal","class":"fa-credit-card"},{"prefix":"fal","class":"fa-credit-card-blank"},{"prefix":"fal","class":"fa-credit-card-front"},{"prefix":"fal","class":"fa-cricket"},{"prefix":"fal","class":"fa-croissant"},{"prefix":"fal","class":"fa-crop"},{"prefix":"fal","class":"fa-crop-alt"},{"prefix":"fal","class":"fa-cross"},{"prefix":"fal","class":"fa-crosshairs"},{"prefix":"fal","class":"fa-crow"},{"prefix":"fal","class":"fa-crown"},{"prefix":"fal","class":"fa-crutch"},{"prefix":"fal","class":"fa-crutches"},{"prefix":"fal","class":"fa-cube"},{"prefix":"fal","class":"fa-cubes"},{"prefix":"fal","class":"fa-curling"},{"prefix":"fal","class":"fa-cut"},{"prefix":"fal","class":"fa-dagger"},{"prefix":"fal","class":"fa-database"},{"prefix":"fal","class":"fa-deaf"},{"prefix":"fal","class":"fa-debug"},{"prefix":"fal","class":"fa-deer"},{"prefix":"fal","class":"fa-deer-rudolph"},{"prefix":"fal","class":"fa-democrat"},{"prefix":"fal","class":"fa-desktop"},{"prefix":"fal","class":"fa-desktop-alt"},{"prefix":"fal","class":"fa-dewpoint"},{"prefix":"fal","class":"fa-dharmachakra"},{"prefix":"fal","class":"fa-diagnoses"},{"prefix":"fal","class":"fa-diamond"},{"prefix":"fal","class":"fa-dice"},{"prefix":"fal","class":"fa-dice-d10"},{"prefix":"fal","class":"fa-dice-d12"},{"prefix":"fal","class":"fa-dice-d20"},{"prefix":"fal","class":"fa-dice-d4"},{"prefix":"fal","class":"fa-dice-d6"},{"prefix":"fal","class":"fa-dice-d8"},{"prefix":"fal","class":"fa-dice-five"},{"prefix":"fal","class":"fa-dice-four"},{"prefix":"fal","class":"fa-dice-one"},{"prefix":"fal","class":"fa-dice-six"},{"prefix":"fal","class":"fa-dice-three"},{"prefix":"fal","class":"fa-dice-two"},{"prefix":"fal","class":"fa-digging"},{"prefix":"fal","class":"fa-digital-tachograph"},{"prefix":"fal","class":"fa-diploma"},{"prefix":"fal","class":"fa-directions"},{"prefix":"fal","class":"fa-disc-drive"},{"prefix":"fal","class":"fa-disease"},{"prefix":"fal","class":"fa-divide"},{"prefix":"fal","class":"fa-dizzy"},{"prefix":"fal","class":"fa-dna"},{"prefix":"fal","class":"fa-do-not-enter"},{"prefix":"fal","class":"fa-dog"},{"prefix":"fal","class":"fa-dog-leashed"},{"prefix":"fal","class":"fa-dollar-sign"},{"prefix":"fal","class":"fa-dolly"},{"prefix":"fal","class":"fa-dolly-empty"},{"prefix":"fal","class":"fa-dolly-flatbed"},{"prefix":"fal","class":"fa-dolly-flatbed-alt"},{"prefix":"fal","class":"fa-dolly-flatbed-empty"},{"prefix":"fal","class":"fa-donate"},{"prefix":"fal","class":"fa-door-closed"},{"prefix":"fal","class":"fa-door-open"},{"prefix":"fal","class":"fa-dot-circle"},{"prefix":"fal","class":"fa-dove"},{"prefix":"fal","class":"fa-download"},{"prefix":"fal","class":"fa-drafting-compass"},{"prefix":"fal","class":"fa-dragon"},{"prefix":"fal","class":"fa-draw-circle"},{"prefix":"fal","class":"fa-draw-polygon"},{"prefix":"fal","class":"fa-draw-square"},{"prefix":"fal","class":"fa-dreidel"},{"prefix":"fal","class":"fa-drone"},{"prefix":"fal","class":"fa-drone-alt"},{"prefix":"fal","class":"fa-drum"},{"prefix":"fal","class":"fa-drum-steelpan"},{"prefix":"fal","class":"fa-drumstick"},{"prefix":"fal","class":"fa-drumstick-bite"},{"prefix":"fal","class":"fa-dryer"},{"prefix":"fal","class":"fa-dryer-alt"},{"prefix":"fal","class":"fa-duck"},{"prefix":"fal","class":"fa-dumbbell"},{"prefix":"fal","class":"fa-dumpster"},{"prefix":"fal","class":"fa-dumpster-fire"},{"prefix":"fal","class":"fa-dungeon"},{"prefix":"fal","class":"fa-ear"},{"prefix":"fal","class":"fa-ear-muffs"},{"prefix":"fal","class":"fa-eclipse"},{"prefix":"fal","class":"fa-eclipse-alt"},{"prefix":"fal","class":"fa-edit"},{"prefix":"fal","class":"fa-egg"},{"prefix":"fal","class":"fa-egg-fried"},{"prefix":"fal","class":"fa-eject"},{"prefix":"fal","class":"fa-elephant"},{"prefix":"fal","class":"fa-ellipsis-h"},{"prefix":"fal","class":"fa-ellipsis-h-alt"},{"prefix":"fal","class":"fa-ellipsis-v"},{"prefix":"fal","class":"fa-ellipsis-v-alt"},{"prefix":"fal","class":"fa-empty-set"},{"prefix":"fal","class":"fa-engine-warning"},{"prefix":"fal","class":"fa-envelope"},{"prefix":"fal","class":"fa-envelope-open"},{"prefix":"fal","class":"fa-envelope-open-dollar"},{"prefix":"fal","class":"fa-envelope-open-text"},{"prefix":"fal","class":"fa-envelope-square"},{"prefix":"fal","class":"fa-equals"},{"prefix":"fal","class":"fa-eraser"},{"prefix":"fal","class":"fa-ethernet"},{"prefix":"fal","class":"fa-euro-sign"},{"prefix":"fal","class":"fa-exchange"},{"prefix":"fal","class":"fa-exchange-alt"},{"prefix":"fal","class":"fa-exclamation"},{"prefix":"fal","class":"fa-exclamation-circle"},{"prefix":"fal","class":"fa-exclamation-square"},{"prefix":"fal","class":"fa-exclamation-triangle"},{"prefix":"fal","class":"fa-expand"},{"prefix":"fal","class":"fa-expand-alt"},{"prefix":"fal","class":"fa-expand-arrows"},{"prefix":"fal","class":"fa-expand-arrows-alt"},{"prefix":"fal","class":"fa-expand-wide"},{"prefix":"fal","class":"fa-external-link"},{"prefix":"fal","class":"fa-external-link-alt"},{"prefix":"fal","class":"fa-external-link-square"},{"prefix":"fal","class":"fa-external-link-square-alt"},{"prefix":"fal","class":"fa-eye"},{"prefix":"fal","class":"fa-eye-dropper"},{"prefix":"fal","class":"fa-eye-evil"},{"prefix":"fal","class":"fa-eye-slash"},{"prefix":"fal","class":"fa-fan"},{"prefix":"fal","class":"fa-fan-table"},{"prefix":"fal","class":"fa-farm"},{"prefix":"fal","class":"fa-fast-backward"},{"prefix":"fal","class":"fa-fast-forward"},{"prefix":"fal","class":"fa-faucet"},{"prefix":"fal","class":"fa-faucet-drip"},{"prefix":"fal","class":"fa-fax"},{"prefix":"fal","class":"fa-feather"},{"prefix":"fal","class":"fa-feather-alt"},{"prefix":"fal","class":"fa-female"},{"prefix":"fal","class":"fa-field-hockey"},{"prefix":"fal","class":"fa-fighter-jet"},{"prefix":"fal","class":"fa-file"},{"prefix":"fal","class":"fa-file-alt"},{"prefix":"fal","class":"fa-file-archive"},{"prefix":"fal","class":"fa-file-audio"},{"prefix":"fal","class":"fa-file-certificate"},{"prefix":"fal","class":"fa-file-chart-line"},{"prefix":"fal","class":"fa-file-chart-pie"},{"prefix":"fal","class":"fa-file-check"},{"prefix":"fal","class":"fa-file-code"},{"prefix":"fal","class":"fa-file-contract"},{"prefix":"fal","class":"fa-file-csv"},{"prefix":"fal","class":"fa-file-download"},{"prefix":"fal","class":"fa-file-edit"},{"prefix":"fal","class":"fa-file-excel"},{"prefix":"fal","class":"fa-file-exclamation"},{"prefix":"fal","class":"fa-file-export"},{"prefix":"fal","class":"fa-file-image"},{"prefix":"fal","class":"fa-file-import"},{"prefix":"fal","class":"fa-file-invoice"},{"prefix":"fal","class":"fa-file-invoice-dollar"},{"prefix":"fal","class":"fa-file-medical"},{"prefix":"fal","class":"fa-file-medical-alt"},{"prefix":"fal","class":"fa-file-minus"},{"prefix":"fal","class":"fa-file-music"},{"prefix":"fal","class":"fa-file-pdf"},{"prefix":"fal","class":"fa-file-plus"},{"prefix":"fal","class":"fa-file-powerpoint"},{"prefix":"fal","class":"fa-file-prescription"},{"prefix":"fal","class":"fa-file-search"},{"prefix":"fal","class":"fa-file-signature"},{"prefix":"fal","class":"fa-file-spreadsheet"},{"prefix":"fal","class":"fa-file-times"},{"prefix":"fal","class":"fa-file-upload"},{"prefix":"fal","class":"fa-file-user"},{"prefix":"fal","class":"fa-file-video"},{"prefix":"fal","class":"fa-file-word"},{"prefix":"fal","class":"fa-files-medical"},{"prefix":"fal","class":"fa-fill"},{"prefix":"fal","class":"fa-fill-drip"},{"prefix":"fal","class":"fa-film"},{"prefix":"fal","class":"fa-film-alt"},{"prefix":"fal","class":"fa-film-canister"},{"prefix":"fal","class":"fa-filter"},{"prefix":"fal","class":"fa-fingerprint"},{"prefix":"fal","class":"fa-fire"},{"prefix":"fal","class":"fa-fire-alt"},{"prefix":"fal","class":"fa-fire-extinguisher"},{"prefix":"fal","class":"fa-fire-smoke"},{"prefix":"fal","class":"fa-fireplace"},{"prefix":"fal","class":"fa-first-aid"},{"prefix":"fal","class":"fa-fish"},{"prefix":"fal","class":"fa-fish-cooked"},{"prefix":"fal","class":"fa-fist-raised"},{"prefix":"fal","class":"fa-flag"},{"prefix":"fal","class":"fa-flag-alt"},{"prefix":"fal","class":"fa-flag-checkered"},{"prefix":"fal","class":"fa-flag-usa"},{"prefix":"fal","class":"fa-flame"},{"prefix":"fal","class":"fa-flashlight"},{"prefix":"fal","class":"fa-flask"},{"prefix":"fal","class":"fa-flask-poison"},{"prefix":"fal","class":"fa-flask-potion"},{"prefix":"fal","class":"fa-flower"},{"prefix":"fal","class":"fa-flower-daffodil"},{"prefix":"fal","class":"fa-flower-tulip"},{"prefix":"fal","class":"fa-flushed"},{"prefix":"fal","class":"fa-flute"},{"prefix":"fal","class":"fa-flux-capacitor"},{"prefix":"fal","class":"fa-fog"},{"prefix":"fal","class":"fa-folder"},{"prefix":"fal","class":"fa-folder-download"},{"prefix":"fal","class":"fa-folder-minus"},{"prefix":"fal","class":"fa-folder-open"},{"prefix":"fal","class":"fa-folder-plus"},{"prefix":"fal","class":"fa-folder-times"},{"prefix":"fal","class":"fa-folder-tree"},{"prefix":"fal","class":"fa-folder-upload"},{"prefix":"fal","class":"fa-folders"},{"prefix":"fal","class":"fa-font"},{"prefix":"fal","class":"fa-font-awesome-logo-full"},{"prefix":"fal","class":"fa-font-case"},{"prefix":"fal","class":"fa-football-ball"},{"prefix":"fal","class":"fa-football-helmet"},{"prefix":"fal","class":"fa-forklift"},{"prefix":"fal","class":"fa-forward"},{"prefix":"fal","class":"fa-fragile"},{"prefix":"fal","class":"fa-french-fries"},{"prefix":"fal","class":"fa-frog"},{"prefix":"fal","class":"fa-frosty-head"},{"prefix":"fal","class":"fa-frown"},{"prefix":"fal","class":"fa-frown-open"},{"prefix":"fal","class":"fa-function"},{"prefix":"fal","class":"fa-funnel-dollar"},{"prefix":"fal","class":"fa-futbol"},{"prefix":"fal","class":"fa-galaxy"},{"prefix":"fal","class":"fa-game-board"},{"prefix":"fal","class":"fa-game-board-alt"},{"prefix":"fal","class":"fa-game-console-handheld"},{"prefix":"fal","class":"fa-gamepad"},{"prefix":"fal","class":"fa-gamepad-alt"},{"prefix":"fal","class":"fa-garage"},{"prefix":"fal","class":"fa-garage-car"},{"prefix":"fal","class":"fa-garage-open"},{"prefix":"fal","class":"fa-gas-pump"},{"prefix":"fal","class":"fa-gas-pump-slash"},{"prefix":"fal","class":"fa-gavel"},{"prefix":"fal","class":"fa-gem"},{"prefix":"fal","class":"fa-genderless"},{"prefix":"fal","class":"fa-ghost"},{"prefix":"fal","class":"fa-gift"},{"prefix":"fal","class":"fa-gift-card"},{"prefix":"fal","class":"fa-gifts"},{"prefix":"fal","class":"fa-gingerbread-man"},{"prefix":"fal","class":"fa-glass"},{"prefix":"fal","class":"fa-glass-champagne"},{"prefix":"fal","class":"fa-glass-cheers"},{"prefix":"fal","class":"fa-glass-citrus"},{"prefix":"fal","class":"fa-glass-martini"},{"prefix":"fal","class":"fa-glass-martini-alt"},{"prefix":"fal","class":"fa-glass-whiskey"},{"prefix":"fal","class":"fa-glass-whiskey-rocks"},{"prefix":"fal","class":"fa-glasses"},{"prefix":"fal","class":"fa-glasses-alt"},{"prefix":"fal","class":"fa-globe"},{"prefix":"fal","class":"fa-globe-africa"},{"prefix":"fal","class":"fa-globe-americas"},{"prefix":"fal","class":"fa-globe-asia"},{"prefix":"fal","class":"fa-globe-europe"},{"prefix":"fal","class":"fa-globe-snow"},{"prefix":"fal","class":"fa-globe-stand"},{"prefix":"fal","class":"fa-golf-ball"},{"prefix":"fal","class":"fa-golf-club"},{"prefix":"fal","class":"fa-gopuram"},{"prefix":"fal","class":"fa-graduation-cap"},{"prefix":"fal","class":"fa-gramophone"},{"prefix":"fal","class":"fa-greater-than"},{"prefix":"fal","class":"fa-greater-than-equal"},{"prefix":"fal","class":"fa-grimace"},{"prefix":"fal","class":"fa-grin"},{"prefix":"fal","class":"fa-grin-alt"},{"prefix":"fal","class":"fa-grin-beam"},{"prefix":"fal","class":"fa-grin-beam-sweat"},{"prefix":"fal","class":"fa-grin-hearts"},{"prefix":"fal","class":"fa-grin-squint"},{"prefix":"fal","class":"fa-grin-squint-tears"},{"prefix":"fal","class":"fa-grin-stars"},{"prefix":"fal","class":"fa-grin-tears"},{"prefix":"fal","class":"fa-grin-tongue"},{"prefix":"fal","class":"fa-grin-tongue-squint"},{"prefix":"fal","class":"fa-grin-tongue-wink"},{"prefix":"fal","class":"fa-grin-wink"},{"prefix":"fal","class":"fa-grip-horizontal"},{"prefix":"fal","class":"fa-grip-lines"},{"prefix":"fal","class":"fa-grip-lines-vertical"},{"prefix":"fal","class":"fa-grip-vertical"},{"prefix":"fal","class":"fa-guitar"},{"prefix":"fal","class":"fa-guitar-electric"},{"prefix":"fal","class":"fa-guitars"},{"prefix":"fal","class":"fa-h-square"},{"prefix":"fal","class":"fa-h1"},{"prefix":"fal","class":"fa-h2"},{"prefix":"fal","class":"fa-h3"},{"prefix":"fal","class":"fa-h4"},{"prefix":"fal","class":"fa-hamburger"},{"prefix":"fal","class":"fa-hammer"},{"prefix":"fal","class":"fa-hammer-war"},{"prefix":"fal","class":"fa-hamsa"},{"prefix":"fal","class":"fa-hand-heart"},{"prefix":"fal","class":"fa-hand-holding"},{"prefix":"fal","class":"fa-hand-holding-box"},{"prefix":"fal","class":"fa-hand-holding-heart"},{"prefix":"fal","class":"fa-hand-holding-magic"},{"prefix":"fal","class":"fa-hand-holding-medical"},{"prefix":"fal","class":"fa-hand-holding-seedling"},{"prefix":"fal","class":"fa-hand-holding-usd"},{"prefix":"fal","class":"fa-hand-holding-water"},{"prefix":"fal","class":"fa-hand-lizard"},{"prefix":"fal","class":"fa-hand-middle-finger"},{"prefix":"fal","class":"fa-hand-paper"},{"prefix":"fal","class":"fa-hand-peace"},{"prefix":"fal","class":"fa-hand-point-down"},{"prefix":"fal","class":"fa-hand-point-left"},{"prefix":"fal","class":"fa-hand-point-right"},{"prefix":"fal","class":"fa-hand-point-up"},{"prefix":"fal","class":"fa-hand-pointer"},{"prefix":"fal","class":"fa-hand-receiving"},{"prefix":"fal","class":"fa-hand-rock"},{"prefix":"fal","class":"fa-hand-scissors"},{"prefix":"fal","class":"fa-hand-sparkles"},{"prefix":"fal","class":"fa-hand-spock"},{"prefix":"fal","class":"fa-hands"},{"prefix":"fal","class":"fa-hands-heart"},{"prefix":"fal","class":"fa-hands-helping"},{"prefix":"fal","class":"fa-hands-usd"},{"prefix":"fal","class":"fa-hands-wash"},{"prefix":"fal","class":"fa-handshake"},{"prefix":"fal","class":"fa-handshake-alt"},{"prefix":"fal","class":"fa-handshake-alt-slash"},{"prefix":"fal","class":"fa-handshake-slash"},{"prefix":"fal","class":"fa-hanukiah"},{"prefix":"fal","class":"fa-hard-hat"},{"prefix":"fal","class":"fa-hashtag"},{"prefix":"fal","class":"fa-hat-chef"},{"prefix":"fal","class":"fa-hat-cowboy"},{"prefix":"fal","class":"fa-hat-cowboy-side"},{"prefix":"fal","class":"fa-hat-santa"},{"prefix":"fal","class":"fa-hat-winter"},{"prefix":"fal","class":"fa-hat-witch"},{"prefix":"fal","class":"fa-hat-wizard"},{"prefix":"fal","class":"fa-hdd"},{"prefix":"fal","class":"fa-head-side"},{"prefix":"fal","class":"fa-head-side-brain"},{"prefix":"fal","class":"fa-head-side-cough"},{"prefix":"fal","class":"fa-head-side-cough-slash"},{"prefix":"fal","class":"fa-head-side-headphones"},{"prefix":"fal","class":"fa-head-side-mask"},{"prefix":"fal","class":"fa-head-side-medical"},{"prefix":"fal","class":"fa-head-side-virus"},{"prefix":"fal","class":"fa-head-vr"},{"prefix":"fal","class":"fa-heading"},{"prefix":"fal","class":"fa-headphones"},{"prefix":"fal","class":"fa-headphones-alt"},{"prefix":"fal","class":"fa-headset"},{"prefix":"fal","class":"fa-heart"},{"prefix":"fal","class":"fa-heart-broken"},{"prefix":"fal","class":"fa-heart-circle"},{"prefix":"fal","class":"fa-heart-rate"},{"prefix":"fal","class":"fa-heart-square"},{"prefix":"fal","class":"fa-heartbeat"},{"prefix":"fal","class":"fa-heat"},{"prefix":"fal","class":"fa-helicopter"},{"prefix":"fal","class":"fa-helmet-battle"},{"prefix":"fal","class":"fa-hexagon"},{"prefix":"fal","class":"fa-highlighter"},{"prefix":"fal","class":"fa-hiking"},{"prefix":"fal","class":"fa-hippo"},{"prefix":"fal","class":"fa-history"},{"prefix":"fal","class":"fa-hockey-mask"},{"prefix":"fal","class":"fa-hockey-puck"},{"prefix":"fal","class":"fa-hockey-sticks"},{"prefix":"fal","class":"fa-holly-berry"},{"prefix":"fal","class":"fa-home"},{"prefix":"fal","class":"fa-home-alt"},{"prefix":"fal","class":"fa-home-heart"},{"prefix":"fal","class":"fa-home-lg"},{"prefix":"fal","class":"fa-home-lg-alt"},{"prefix":"fal","class":"fa-hood-cloak"},{"prefix":"fal","class":"fa-horizontal-rule"},{"prefix":"fal","class":"fa-horse"},{"prefix":"fal","class":"fa-horse-head"},{"prefix":"fal","class":"fa-horse-saddle"},{"prefix":"fal","class":"fa-hospital"},{"prefix":"fal","class":"fa-hospital-alt"},{"prefix":"fal","class":"fa-hospital-symbol"},{"prefix":"fal","class":"fa-hospital-user"},{"prefix":"fal","class":"fa-hospitals"},{"prefix":"fal","class":"fa-hot-tub"},{"prefix":"fal","class":"fa-hotdog"},{"prefix":"fal","class":"fa-hotel"},{"prefix":"fal","class":"fa-hourglass"},{"prefix":"fal","class":"fa-hourglass-end"},{"prefix":"fal","class":"fa-hourglass-half"},{"prefix":"fal","class":"fa-hourglass-start"},{"prefix":"fal","class":"fa-house"},{"prefix":"fal","class":"fa-house-damage"},{"prefix":"fal","class":"fa-house-day"},{"prefix":"fal","class":"fa-house-flood"},{"prefix":"fal","class":"fa-house-leave"},{"prefix":"fal","class":"fa-house-night"},{"prefix":"fal","class":"fa-house-return"},{"prefix":"fal","class":"fa-house-signal"},{"prefix":"fal","class":"fa-house-user"},{"prefix":"fal","class":"fa-hryvnia"},{"prefix":"fal","class":"fa-humidity"},{"prefix":"fal","class":"fa-hurricane"},{"prefix":"fal","class":"fa-i-cursor"},{"prefix":"fal","class":"fa-ice-cream"},{"prefix":"fal","class":"fa-ice-skate"},{"prefix":"fal","class":"fa-icicles"},{"prefix":"fal","class":"fa-icons"},{"prefix":"fal","class":"fa-icons-alt"},{"prefix":"fal","class":"fa-id-badge"},{"prefix":"fal","class":"fa-id-card"},{"prefix":"fal","class":"fa-id-card-alt"},{"prefix":"fal","class":"fa-igloo"},{"prefix":"fal","class":"fa-image"},{"prefix":"fal","class":"fa-image-polaroid"},{"prefix":"fal","class":"fa-images"},{"prefix":"fal","class":"fa-inbox"},{"prefix":"fal","class":"fa-inbox-in"},{"prefix":"fal","class":"fa-inbox-out"},{"prefix":"fal","class":"fa-indent"},{"prefix":"fal","class":"fa-industry"},{"prefix":"fal","class":"fa-industry-alt"},{"prefix":"fal","class":"fa-infinity"},{"prefix":"fal","class":"fa-info"},{"prefix":"fal","class":"fa-info-circle"},{"prefix":"fal","class":"fa-info-square"},{"prefix":"fal","class":"fa-inhaler"},{"prefix":"fal","class":"fa-integral"},{"prefix":"fal","class":"fa-intersection"},{"prefix":"fal","class":"fa-inventory"},{"prefix":"fal","class":"fa-island-tropical"},{"prefix":"fal","class":"fa-italic"},{"prefix":"fal","class":"fa-jack-o-lantern"},{"prefix":"fal","class":"fa-jedi"},{"prefix":"fal","class":"fa-joint"},{"prefix":"fal","class":"fa-journal-whills"},{"prefix":"fal","class":"fa-joystick"},{"prefix":"fal","class":"fa-jug"},{"prefix":"fal","class":"fa-kaaba"},{"prefix":"fal","class":"fa-kazoo"},{"prefix":"fal","class":"fa-kerning"},{"prefix":"fal","class":"fa-key"},{"prefix":"fal","class":"fa-key-skeleton"},{"prefix":"fal","class":"fa-keyboard"},{"prefix":"fal","class":"fa-keynote"},{"prefix":"fal","class":"fa-khanda"},{"prefix":"fal","class":"fa-kidneys"},{"prefix":"fal","class":"fa-kiss"},{"prefix":"fal","class":"fa-kiss-beam"},{"prefix":"fal","class":"fa-kiss-wink-heart"},{"prefix":"fal","class":"fa-kite"},{"prefix":"fal","class":"fa-kiwi-bird"},{"prefix":"fal","class":"fa-knife-kitchen"},{"prefix":"fal","class":"fa-lambda"},{"prefix":"fal","class":"fa-lamp"},{"prefix":"fal","class":"fa-lamp-desk"},{"prefix":"fal","class":"fa-lamp-floor"},{"prefix":"fal","class":"fa-landmark"},{"prefix":"fal","class":"fa-landmark-alt"},{"prefix":"fal","class":"fa-language"},{"prefix":"fal","class":"fa-laptop"},{"prefix":"fal","class":"fa-laptop-code"},{"prefix":"fal","class":"fa-laptop-house"},{"prefix":"fal","class":"fa-laptop-medical"},{"prefix":"fal","class":"fa-lasso"},{"prefix":"fal","class":"fa-laugh"},{"prefix":"fal","class":"fa-laugh-beam"},{"prefix":"fal","class":"fa-laugh-squint"},{"prefix":"fal","class":"fa-laugh-wink"},{"prefix":"fal","class":"fa-layer-group"},{"prefix":"fal","class":"fa-layer-minus"},{"prefix":"fal","class":"fa-layer-plus"},{"prefix":"fal","class":"fa-leaf"},{"prefix":"fal","class":"fa-leaf-heart"},{"prefix":"fal","class":"fa-leaf-maple"},{"prefix":"fal","class":"fa-leaf-oak"},{"prefix":"fal","class":"fa-lemon"},{"prefix":"fal","class":"fa-less-than"},{"prefix":"fal","class":"fa-less-than-equal"},{"prefix":"fal","class":"fa-level-down"},{"prefix":"fal","class":"fa-level-down-alt"},{"prefix":"fal","class":"fa-level-up"},{"prefix":"fal","class":"fa-level-up-alt"},{"prefix":"fal","class":"fa-life-ring"},{"prefix":"fal","class":"fa-light-ceiling"},{"prefix":"fal","class":"fa-light-switch"},{"prefix":"fal","class":"fa-light-switch-off"},{"prefix":"fal","class":"fa-light-switch-on"},{"prefix":"fal","class":"fa-lightbulb"},{"prefix":"fal","class":"fa-lightbulb-dollar"},{"prefix":"fal","class":"fa-lightbulb-exclamation"},{"prefix":"fal","class":"fa-lightbulb-on"},{"prefix":"fal","class":"fa-lightbulb-slash"},{"prefix":"fal","class":"fa-lights-holiday"},{"prefix":"fal","class":"fa-line-columns"},{"prefix":"fal","class":"fa-line-height"},{"prefix":"fal","class":"fa-link"},{"prefix":"fal","class":"fa-lips"},{"prefix":"fal","class":"fa-lira-sign"},{"prefix":"fal","class":"fa-list"},{"prefix":"fal","class":"fa-list-alt"},{"prefix":"fal","class":"fa-list-music"},{"prefix":"fal","class":"fa-list-ol"},{"prefix":"fal","class":"fa-list-ul"},{"prefix":"fal","class":"fa-location"},{"prefix":"fal","class":"fa-location-arrow"},{"prefix":"fal","class":"fa-location-circle"},{"prefix":"fal","class":"fa-location-slash"},{"prefix":"fal","class":"fa-lock"},{"prefix":"fal","class":"fa-lock-alt"},{"prefix":"fal","class":"fa-lock-open"},{"prefix":"fal","class":"fa-lock-open-alt"},{"prefix":"fal","class":"fa-long-arrow-alt-down"},{"prefix":"fal","class":"fa-long-arrow-alt-left"},{"prefix":"fal","class":"fa-long-arrow-alt-right"},{"prefix":"fal","class":"fa-long-arrow-alt-up"},{"prefix":"fal","class":"fa-long-arrow-down"},{"prefix":"fal","class":"fa-long-arrow-left"},{"prefix":"fal","class":"fa-long-arrow-right"},{"prefix":"fal","class":"fa-long-arrow-up"},{"prefix":"fal","class":"fa-loveseat"},{"prefix":"fal","class":"fa-low-vision"},{"prefix":"fal","class":"fa-luchador"},{"prefix":"fal","class":"fa-luggage-cart"},{"prefix":"fal","class":"fa-lungs"},{"prefix":"fal","class":"fa-lungs-virus"},{"prefix":"fal","class":"fa-mace"},{"prefix":"fal","class":"fa-magic"},{"prefix":"fal","class":"fa-magnet"},{"prefix":"fal","class":"fa-mail-bulk"},{"prefix":"fal","class":"fa-mailbox"},{"prefix":"fal","class":"fa-male"},{"prefix":"fal","class":"fa-mandolin"},{"prefix":"fal","class":"fa-map"},{"prefix":"fal","class":"fa-map-marked"},{"prefix":"fal","class":"fa-map-marked-alt"},{"prefix":"fal","class":"fa-map-marker"},{"prefix":"fal","class":"fa-map-marker-alt"},{"prefix":"fal","class":"fa-map-marker-alt-slash"},{"prefix":"fal","class":"fa-map-marker-check"},{"prefix":"fal","class":"fa-map-marker-edit"},{"prefix":"fal","class":"fa-map-marker-exclamation"},{"prefix":"fal","class":"fa-map-marker-minus"},{"prefix":"fal","class":"fa-map-marker-plus"},{"prefix":"fal","class":"fa-map-marker-question"},{"prefix":"fal","class":"fa-map-marker-slash"},{"prefix":"fal","class":"fa-map-marker-smile"},{"prefix":"fal","class":"fa-map-marker-times"},{"prefix":"fal","class":"fa-map-pin"},{"prefix":"fal","class":"fa-map-signs"},{"prefix":"fal","class":"fa-marker"},{"prefix":"fal","class":"fa-mars"},{"prefix":"fal","class":"fa-mars-double"},{"prefix":"fal","class":"fa-mars-stroke"},{"prefix":"fal","class":"fa-mars-stroke-h"},{"prefix":"fal","class":"fa-mars-stroke-v"},{"prefix":"fal","class":"fa-mask"},{"prefix":"fal","class":"fa-meat"},{"prefix":"fal","class":"fa-medal"},{"prefix":"fal","class":"fa-medkit"},{"prefix":"fal","class":"fa-megaphone"},{"prefix":"fal","class":"fa-meh"},{"prefix":"fal","class":"fa-meh-blank"},{"prefix":"fal","class":"fa-meh-rolling-eyes"},{"prefix":"fal","class":"fa-memory"},{"prefix":"fal","class":"fa-menorah"},{"prefix":"fal","class":"fa-mercury"},{"prefix":"fal","class":"fa-meteor"},{"prefix":"fal","class":"fa-microchip"},{"prefix":"fal","class":"fa-microphone"},{"prefix":"fal","class":"fa-microphone-alt"},{"prefix":"fal","class":"fa-microphone-alt-slash"},{"prefix":"fal","class":"fa-microphone-slash"},{"prefix":"fal","class":"fa-microphone-stand"},{"prefix":"fal","class":"fa-microscope"},{"prefix":"fal","class":"fa-microwave"},{"prefix":"fal","class":"fa-mind-share"},{"prefix":"fal","class":"fa-minus"},{"prefix":"fal","class":"fa-minus-circle"},{"prefix":"fal","class":"fa-minus-hexagon"},{"prefix":"fal","class":"fa-minus-octagon"},{"prefix":"fal","class":"fa-minus-square"},{"prefix":"fal","class":"fa-mistletoe"},{"prefix":"fal","class":"fa-mitten"},{"prefix":"fal","class":"fa-mobile"},{"prefix":"fal","class":"fa-mobile-alt"},{"prefix":"fal","class":"fa-mobile-android"},{"prefix":"fal","class":"fa-mobile-android-alt"},{"prefix":"fal","class":"fa-money-bill"},{"prefix":"fal","class":"fa-money-bill-alt"},{"prefix":"fal","class":"fa-money-bill-wave"},{"prefix":"fal","class":"fa-money-bill-wave-alt"},{"prefix":"fal","class":"fa-money-check"},{"prefix":"fal","class":"fa-money-check-alt"},{"prefix":"fal","class":"fa-money-check-edit"},{"prefix":"fal","class":"fa-money-check-edit-alt"},{"prefix":"fal","class":"fa-monitor-heart-rate"},{"prefix":"fal","class":"fa-monkey"},{"prefix":"fal","class":"fa-monument"},{"prefix":"fal","class":"fa-moon"},{"prefix":"fal","class":"fa-moon-cloud"},{"prefix":"fal","class":"fa-moon-stars"},{"prefix":"fal","class":"fa-mortar-pestle"},{"prefix":"fal","class":"fa-mosque"},{"prefix":"fal","class":"fa-motorcycle"},{"prefix":"fal","class":"fa-mountain"},{"prefix":"fal","class":"fa-mountains"},{"prefix":"fal","class":"fa-mouse"},{"prefix":"fal","class":"fa-mouse-alt"},{"prefix":"fal","class":"fa-mouse-pointer"},{"prefix":"fal","class":"fa-mp3-player"},{"prefix":"fal","class":"fa-mug"},{"prefix":"fal","class":"fa-mug-hot"},{"prefix":"fal","class":"fa-mug-marshmallows"},{"prefix":"fal","class":"fa-mug-tea"},{"prefix":"fal","class":"fa-music"},{"prefix":"fal","class":"fa-music-alt"},{"prefix":"fal","class":"fa-music-alt-slash"},{"prefix":"fal","class":"fa-music-slash"},{"prefix":"fal","class":"fa-narwhal"},{"prefix":"fal","class":"fa-network-wired"},{"prefix":"fal","class":"fa-neuter"},{"prefix":"fal","class":"fa-newspaper"},{"prefix":"fal","class":"fa-not-equal"},{"prefix":"fal","class":"fa-notes-medical"},{"prefix":"fal","class":"fa-object-group"},{"prefix":"fal","class":"fa-object-ungroup"},{"prefix":"fal","class":"fa-octagon"},{"prefix":"fal","class":"fa-oil-can"},{"prefix":"fal","class":"fa-oil-temp"},{"prefix":"fal","class":"fa-om"},{"prefix":"fal","class":"fa-omega"},{"prefix":"fal","class":"fa-ornament"},{"prefix":"fal","class":"fa-otter"},{"prefix":"fal","class":"fa-outdent"},{"prefix":"fal","class":"fa-outlet"},{"prefix":"fal","class":"fa-oven"},{"prefix":"fal","class":"fa-overline"},{"prefix":"fal","class":"fa-page-break"},{"prefix":"fal","class":"fa-pager"},{"prefix":"fal","class":"fa-paint-brush"},{"prefix":"fal","class":"fa-paint-brush-alt"},{"prefix":"fal","class":"fa-paint-roller"},{"prefix":"fal","class":"fa-palette"},{"prefix":"fal","class":"fa-pallet"},{"prefix":"fal","class":"fa-pallet-alt"},{"prefix":"fal","class":"fa-paper-plane"},{"prefix":"fal","class":"fa-paperclip"},{"prefix":"fal","class":"fa-parachute-box"},{"prefix":"fal","class":"fa-paragraph"},{"prefix":"fal","class":"fa-paragraph-rtl"},{"prefix":"fal","class":"fa-parking"},{"prefix":"fal","class":"fa-parking-circle"},{"prefix":"fal","class":"fa-parking-circle-slash"},{"prefix":"fal","class":"fa-parking-slash"},{"prefix":"fal","class":"fa-passport"},{"prefix":"fal","class":"fa-pastafarianism"},{"prefix":"fal","class":"fa-paste"},{"prefix":"fal","class":"fa-pause"},{"prefix":"fal","class":"fa-pause-circle"},{"prefix":"fal","class":"fa-paw"},{"prefix":"fal","class":"fa-paw-alt"},{"prefix":"fal","class":"fa-paw-claws"},{"prefix":"fal","class":"fa-peace"},{"prefix":"fal","class":"fa-pegasus"},{"prefix":"fal","class":"fa-pen"},{"prefix":"fal","class":"fa-pen-alt"},{"prefix":"fal","class":"fa-pen-fancy"},{"prefix":"fal","class":"fa-pen-nib"},{"prefix":"fal","class":"fa-pen-square"},{"prefix":"fal","class":"fa-pencil"},{"prefix":"fal","class":"fa-pencil-alt"},{"prefix":"fal","class":"fa-pencil-paintbrush"},{"prefix":"fal","class":"fa-pencil-ruler"},{"prefix":"fal","class":"fa-pennant"},{"prefix":"fal","class":"fa-people-arrows"},{"prefix":"fal","class":"fa-people-carry"},{"prefix":"fal","class":"fa-pepper-hot"},{"prefix":"fal","class":"fa-percent"},{"prefix":"fal","class":"fa-percentage"},{"prefix":"fal","class":"fa-person-booth"},{"prefix":"fal","class":"fa-person-carry"},{"prefix":"fal","class":"fa-person-dolly"},{"prefix":"fal","class":"fa-person-dolly-empty"},{"prefix":"fal","class":"fa-person-sign"},{"prefix":"fal","class":"fa-phone"},{"prefix":"fal","class":"fa-phone-alt"},{"prefix":"fal","class":"fa-phone-laptop"},{"prefix":"fal","class":"fa-phone-office"},{"prefix":"fal","class":"fa-phone-plus"},{"prefix":"fal","class":"fa-phone-rotary"},{"prefix":"fal","class":"fa-phone-slash"},{"prefix":"fal","class":"fa-phone-square"},{"prefix":"fal","class":"fa-phone-square-alt"},{"prefix":"fal","class":"fa-phone-volume"},{"prefix":"fal","class":"fa-photo-video"},{"prefix":"fal","class":"fa-pi"},{"prefix":"fal","class":"fa-piano"},{"prefix":"fal","class":"fa-piano-keyboard"},{"prefix":"fal","class":"fa-pie"},{"prefix":"fal","class":"fa-pig"},{"prefix":"fal","class":"fa-piggy-bank"},{"prefix":"fal","class":"fa-pills"},{"prefix":"fal","class":"fa-pizza"},{"prefix":"fal","class":"fa-pizza-slice"},{"prefix":"fal","class":"fa-place-of-worship"},{"prefix":"fal","class":"fa-plane"},{"prefix":"fal","class":"fa-plane-alt"},{"prefix":"fal","class":"fa-plane-arrival"},{"prefix":"fal","class":"fa-plane-departure"},{"prefix":"fal","class":"fa-plane-slash"},{"prefix":"fal","class":"fa-planet-moon"},{"prefix":"fal","class":"fa-planet-ringed"},{"prefix":"fal","class":"fa-play"},{"prefix":"fal","class":"fa-play-circle"},{"prefix":"fal","class":"fa-plug"},{"prefix":"fal","class":"fa-plus"},{"prefix":"fal","class":"fa-plus-circle"},{"prefix":"fal","class":"fa-plus-hexagon"},{"prefix":"fal","class":"fa-plus-octagon"},{"prefix":"fal","class":"fa-plus-square"},{"prefix":"fal","class":"fa-podcast"},{"prefix":"fal","class":"fa-podium"},{"prefix":"fal","class":"fa-podium-star"},{"prefix":"fal","class":"fa-police-box"},{"prefix":"fal","class":"fa-poll"},{"prefix":"fal","class":"fa-poll-h"},{"prefix":"fal","class":"fa-poll-people"},{"prefix":"fal","class":"fa-poo"},{"prefix":"fal","class":"fa-poo-storm"},{"prefix":"fal","class":"fa-poop"},{"prefix":"fal","class":"fa-popcorn"},{"prefix":"fal","class":"fa-portal-enter"},{"prefix":"fal","class":"fa-portal-exit"},{"prefix":"fal","class":"fa-portrait"},{"prefix":"fal","class":"fa-pound-sign"},{"prefix":"fal","class":"fa-power-off"},{"prefix":"fal","class":"fa-pray"},{"prefix":"fal","class":"fa-praying-hands"},{"prefix":"fal","class":"fa-prescription"},{"prefix":"fal","class":"fa-prescription-bottle"},{"prefix":"fal","class":"fa-prescription-bottle-alt"},{"prefix":"fal","class":"fa-presentation"},{"prefix":"fal","class":"fa-print"},{"prefix":"fal","class":"fa-print-search"},{"prefix":"fal","class":"fa-print-slash"},{"prefix":"fal","class":"fa-procedures"},{"prefix":"fal","class":"fa-project-diagram"},{"prefix":"fal","class":"fa-projector"},{"prefix":"fal","class":"fa-pump-medical"},{"prefix":"fal","class":"fa-pump-soap"},{"prefix":"fal","class":"fa-pumpkin"},{"prefix":"fal","class":"fa-puzzle-piece"},{"prefix":"fal","class":"fa-qrcode"},{"prefix":"fal","class":"fa-question"},{"prefix":"fal","class":"fa-question-circle"},{"prefix":"fal","class":"fa-question-square"},{"prefix":"fal","class":"fa-quidditch"},{"prefix":"fal","class":"fa-quote-left"},{"prefix":"fal","class":"fa-quote-right"},{"prefix":"fal","class":"fa-quran"},{"prefix":"fal","class":"fa-rabbit"},{"prefix":"fal","class":"fa-rabbit-fast"},{"prefix":"fal","class":"fa-racquet"},{"prefix":"fal","class":"fa-radar"},{"prefix":"fal","class":"fa-radiation"},{"prefix":"fal","class":"fa-radiation-alt"},{"prefix":"fal","class":"fa-radio"},{"prefix":"fal","class":"fa-radio-alt"},{"prefix":"fal","class":"fa-rainbow"},{"prefix":"fal","class":"fa-raindrops"},{"prefix":"fal","class":"fa-ram"},{"prefix":"fal","class":"fa-ramp-loading"},{"prefix":"fal","class":"fa-random"},{"prefix":"fal","class":"fa-raygun"},{"prefix":"fal","class":"fa-receipt"},{"prefix":"fal","class":"fa-record-vinyl"},{"prefix":"fal","class":"fa-rectangle-landscape"},{"prefix":"fal","class":"fa-rectangle-portrait"},{"prefix":"fal","class":"fa-rectangle-wide"},{"prefix":"fal","class":"fa-recycle"},{"prefix":"fal","class":"fa-redo"},{"prefix":"fal","class":"fa-redo-alt"},{"prefix":"fal","class":"fa-refrigerator"},{"prefix":"fal","class":"fa-registered"},{"prefix":"fal","class":"fa-remove-format"},{"prefix":"fal","class":"fa-repeat"},{"prefix":"fal","class":"fa-repeat-1"},{"prefix":"fal","class":"fa-repeat-1-alt"},{"prefix":"fal","class":"fa-repeat-alt"},{"prefix":"fal","class":"fa-reply"},{"prefix":"fal","class":"fa-reply-all"},{"prefix":"fal","class":"fa-republican"},{"prefix":"fal","class":"fa-restroom"},{"prefix":"fal","class":"fa-retweet"},{"prefix":"fal","class":"fa-retweet-alt"},{"prefix":"fal","class":"fa-ribbon"},{"prefix":"fal","class":"fa-ring"},{"prefix":"fal","class":"fa-rings-wedding"},{"prefix":"fal","class":"fa-road"},{"prefix":"fal","class":"fa-robot"},{"prefix":"fal","class":"fa-rocket"},{"prefix":"fal","class":"fa-rocket-launch"},{"prefix":"fal","class":"fa-route"},{"prefix":"fal","class":"fa-route-highway"},{"prefix":"fal","class":"fa-route-interstate"},{"prefix":"fal","class":"fa-router"},{"prefix":"fal","class":"fa-rss"},{"prefix":"fal","class":"fa-rss-square"},{"prefix":"fal","class":"fa-ruble-sign"},{"prefix":"fal","class":"fa-ruler"},{"prefix":"fal","class":"fa-ruler-combined"},{"prefix":"fal","class":"fa-ruler-horizontal"},{"prefix":"fal","class":"fa-ruler-triangle"},{"prefix":"fal","class":"fa-ruler-vertical"},{"prefix":"fal","class":"fa-running"},{"prefix":"fal","class":"fa-rupee-sign"},{"prefix":"fal","class":"fa-rv"},{"prefix":"fal","class":"fa-sack"},{"prefix":"fal","class":"fa-sack-dollar"},{"prefix":"fal","class":"fa-sad-cry"},{"prefix":"fal","class":"fa-sad-tear"},{"prefix":"fal","class":"fa-salad"},{"prefix":"fal","class":"fa-sandwich"},{"prefix":"fal","class":"fa-satellite"},{"prefix":"fal","class":"fa-satellite-dish"},{"prefix":"fal","class":"fa-sausage"},{"prefix":"fal","class":"fa-save"},{"prefix":"fal","class":"fa-sax-hot"},{"prefix":"fal","class":"fa-saxophone"},{"prefix":"fal","class":"fa-scalpel"},{"prefix":"fal","class":"fa-scalpel-path"},{"prefix":"fal","class":"fa-scanner"},{"prefix":"fal","class":"fa-scanner-image"},{"prefix":"fal","class":"fa-scanner-keyboard"},{"prefix":"fal","class":"fa-scanner-touchscreen"},{"prefix":"fal","class":"fa-scarecrow"},{"prefix":"fal","class":"fa-scarf"},{"prefix":"fal","class":"fa-school"},{"prefix":"fal","class":"fa-screwdriver"},{"prefix":"fal","class":"fa-scroll"},{"prefix":"fal","class":"fa-scroll-old"},{"prefix":"fal","class":"fa-scrubber"},{"prefix":"fal","class":"fa-scythe"},{"prefix":"fal","class":"fa-sd-card"},{"prefix":"fal","class":"fa-search"},{"prefix":"fal","class":"fa-search-dollar"},{"prefix":"fal","class":"fa-search-location"},{"prefix":"fal","class":"fa-search-minus"},{"prefix":"fal","class":"fa-search-plus"},{"prefix":"fal","class":"fa-seedling"},{"prefix":"fal","class":"fa-send-back"},{"prefix":"fal","class":"fa-send-backward"},{"prefix":"fal","class":"fa-sensor"},{"prefix":"fal","class":"fa-sensor-alert"},{"prefix":"fal","class":"fa-sensor-fire"},{"prefix":"fal","class":"fa-sensor-on"},{"prefix":"fal","class":"fa-sensor-smoke"},{"prefix":"fal","class":"fa-server"},{"prefix":"fal","class":"fa-shapes"},{"prefix":"fal","class":"fa-share"},{"prefix":"fal","class":"fa-share-all"},{"prefix":"fal","class":"fa-share-alt"},{"prefix":"fal","class":"fa-share-alt-square"},{"prefix":"fal","class":"fa-share-square"},{"prefix":"fal","class":"fa-sheep"},{"prefix":"fal","class":"fa-shekel-sign"},{"prefix":"fal","class":"fa-shield"},{"prefix":"fal","class":"fa-shield-alt"},{"prefix":"fal","class":"fa-shield-check"},{"prefix":"fal","class":"fa-shield-cross"},{"prefix":"fal","class":"fa-shield-virus"},{"prefix":"fal","class":"fa-ship"},{"prefix":"fal","class":"fa-shipping-fast"},{"prefix":"fal","class":"fa-shipping-timed"},{"prefix":"fal","class":"fa-shish-kebab"},{"prefix":"fal","class":"fa-shoe-prints"},{"prefix":"fal","class":"fa-shopping-bag"},{"prefix":"fal","class":"fa-shopping-basket"},{"prefix":"fal","class":"fa-shopping-cart"},{"prefix":"fal","class":"fa-shovel"},{"prefix":"fal","class":"fa-shovel-snow"},{"prefix":"fal","class":"fa-shower"},{"prefix":"fal","class":"fa-shredder"},{"prefix":"fal","class":"fa-shuttle-van"},{"prefix":"fal","class":"fa-shuttlecock"},{"prefix":"fal","class":"fa-sickle"},{"prefix":"fal","class":"fa-sigma"},{"prefix":"fal","class":"fa-sign"},{"prefix":"fal","class":"fa-sign-in"},{"prefix":"fal","class":"fa-sign-in-alt"},{"prefix":"fal","class":"fa-sign-language"},{"prefix":"fal","class":"fa-sign-out"},{"prefix":"fal","class":"fa-sign-out-alt"},{"prefix":"fal","class":"fa-signal"},{"prefix":"fal","class":"fa-signal-1"},{"prefix":"fal","class":"fa-signal-2"},{"prefix":"fal","class":"fa-signal-3"},{"prefix":"fal","class":"fa-signal-4"},{"prefix":"fal","class":"fa-signal-alt"},{"prefix":"fal","class":"fa-signal-alt-1"},{"prefix":"fal","class":"fa-signal-alt-2"},{"prefix":"fal","class":"fa-signal-alt-3"},{"prefix":"fal","class":"fa-signal-alt-slash"},{"prefix":"fal","class":"fa-signal-slash"},{"prefix":"fal","class":"fa-signal-stream"},{"prefix":"fal","class":"fa-signature"},{"prefix":"fal","class":"fa-sim-card"},{"prefix":"fal","class":"fa-sink"},{"prefix":"fal","class":"fa-siren"},{"prefix":"fal","class":"fa-siren-on"},{"prefix":"fal","class":"fa-sitemap"},{"prefix":"fal","class":"fa-skating"},{"prefix":"fal","class":"fa-skeleton"},{"prefix":"fal","class":"fa-ski-jump"},{"prefix":"fal","class":"fa-ski-lift"},{"prefix":"fal","class":"fa-skiing"},{"prefix":"fal","class":"fa-skiing-nordic"},{"prefix":"fal","class":"fa-skull"},{"prefix":"fal","class":"fa-skull-cow"},{"prefix":"fal","class":"fa-skull-crossbones"},{"prefix":"fal","class":"fa-slash"},{"prefix":"fal","class":"fa-sledding"},{"prefix":"fal","class":"fa-sleigh"},{"prefix":"fal","class":"fa-sliders-h"},{"prefix":"fal","class":"fa-sliders-h-square"},{"prefix":"fal","class":"fa-sliders-v"},{"prefix":"fal","class":"fa-sliders-v-square"},{"prefix":"fal","class":"fa-smile"},{"prefix":"fal","class":"fa-smile-beam"},{"prefix":"fal","class":"fa-smile-plus"},{"prefix":"fal","class":"fa-smile-wink"},{"prefix":"fal","class":"fa-smog"},{"prefix":"fal","class":"fa-smoke"},{"prefix":"fal","class":"fa-smoking"},{"prefix":"fal","class":"fa-smoking-ban"},{"prefix":"fal","class":"fa-sms"},{"prefix":"fal","class":"fa-snake"},{"prefix":"fal","class":"fa-snooze"},{"prefix":"fal","class":"fa-snow-blowing"},{"prefix":"fal","class":"fa-snowboarding"},{"prefix":"fal","class":"fa-snowflake"},{"prefix":"fal","class":"fa-snowflakes"},{"prefix":"fal","class":"fa-snowman"},{"prefix":"fal","class":"fa-snowmobile"},{"prefix":"fal","class":"fa-snowplow"},{"prefix":"fal","class":"fa-soap"},{"prefix":"fal","class":"fa-socks"},{"prefix":"fal","class":"fa-solar-panel"},{"prefix":"fal","class":"fa-solar-system"},{"prefix":"fal","class":"fa-sort"},{"prefix":"fal","class":"fa-sort-alpha-down"},{"prefix":"fal","class":"fa-sort-alpha-down-alt"},{"prefix":"fal","class":"fa-sort-alpha-up"},{"prefix":"fal","class":"fa-sort-alpha-up-alt"},{"prefix":"fal","class":"fa-sort-alt"},{"prefix":"fal","class":"fa-sort-amount-down"},{"prefix":"fal","class":"fa-sort-amount-down-alt"},{"prefix":"fal","class":"fa-sort-amount-up"},{"prefix":"fal","class":"fa-sort-amount-up-alt"},{"prefix":"fal","class":"fa-sort-circle"},{"prefix":"fal","class":"fa-sort-circle-down"},{"prefix":"fal","class":"fa-sort-circle-up"},{"prefix":"fal","class":"fa-sort-down"},{"prefix":"fal","class":"fa-sort-numeric-down"},{"prefix":"fal","class":"fa-sort-numeric-down-alt"},{"prefix":"fal","class":"fa-sort-numeric-up"},{"prefix":"fal","class":"fa-sort-numeric-up-alt"},{"prefix":"fal","class":"fa-sort-shapes-down"},{"prefix":"fal","class":"fa-sort-shapes-down-alt"},{"prefix":"fal","class":"fa-sort-shapes-up"},{"prefix":"fal","class":"fa-sort-shapes-up-alt"},{"prefix":"fal","class":"fa-sort-size-down"},{"prefix":"fal","class":"fa-sort-size-down-alt"},{"prefix":"fal","class":"fa-sort-size-up"},{"prefix":"fal","class":"fa-sort-size-up-alt"},{"prefix":"fal","class":"fa-sort-up"},{"prefix":"fal","class":"fa-soup"},{"prefix":"fal","class":"fa-spa"},{"prefix":"fal","class":"fa-space-shuttle"},{"prefix":"fal","class":"fa-space-station-moon"},{"prefix":"fal","class":"fa-space-station-moon-alt"},{"prefix":"fal","class":"fa-spade"},{"prefix":"fal","class":"fa-sparkles"},{"prefix":"fal","class":"fa-speaker"},{"prefix":"fal","class":"fa-speakers"},{"prefix":"fal","class":"fa-spell-check"},{"prefix":"fal","class":"fa-spider"},{"prefix":"fal","class":"fa-spider-black-widow"},{"prefix":"fal","class":"fa-spider-web"},{"prefix":"fal","class":"fa-spinner"},{"prefix":"fal","class":"fa-spinner-third"},{"prefix":"fal","class":"fa-splotch"},{"prefix":"fal","class":"fa-spray-can"},{"prefix":"fal","class":"fa-sprinkler"},{"prefix":"fal","class":"fa-square"},{"prefix":"fal","class":"fa-square-full"},{"prefix":"fal","class":"fa-square-root"},{"prefix":"fal","class":"fa-square-root-alt"},{"prefix":"fal","class":"fa-squirrel"},{"prefix":"fal","class":"fa-staff"},{"prefix":"fal","class":"fa-stamp"},{"prefix":"fal","class":"fa-star"},{"prefix":"fal","class":"fa-star-and-crescent"},{"prefix":"fal","class":"fa-star-christmas"},{"prefix":"fal","class":"fa-star-exclamation"},{"prefix":"fal","class":"fa-star-half"},{"prefix":"fal","class":"fa-star-half-alt"},{"prefix":"fal","class":"fa-star-of-david"},{"prefix":"fal","class":"fa-star-of-life"},{"prefix":"fal","class":"fa-star-shooting"},{"prefix":"fal","class":"fa-starfighter"},{"prefix":"fal","class":"fa-starfighter-alt"},{"prefix":"fal","class":"fa-stars"},{"prefix":"fal","class":"fa-starship"},{"prefix":"fal","class":"fa-starship-freighter"},{"prefix":"fal","class":"fa-steak"},{"prefix":"fal","class":"fa-steering-wheel"},{"prefix":"fal","class":"fa-step-backward"},{"prefix":"fal","class":"fa-step-forward"},{"prefix":"fal","class":"fa-stethoscope"},{"prefix":"fal","class":"fa-sticky-note"},{"prefix":"fal","class":"fa-stocking"},{"prefix":"fal","class":"fa-stomach"},{"prefix":"fal","class":"fa-stop"},{"prefix":"fal","class":"fa-stop-circle"},{"prefix":"fal","class":"fa-stopwatch"},{"prefix":"fal","class":"fa-stopwatch-20"},{"prefix":"fal","class":"fa-store"},{"prefix":"fal","class":"fa-store-alt"},{"prefix":"fal","class":"fa-store-alt-slash"},{"prefix":"fal","class":"fa-store-slash"},{"prefix":"fal","class":"fa-stream"},{"prefix":"fal","class":"fa-street-view"},{"prefix":"fal","class":"fa-stretcher"},{"prefix":"fal","class":"fa-strikethrough"},{"prefix":"fal","class":"fa-stroopwafel"},{"prefix":"fal","class":"fa-subscript"},{"prefix":"fal","class":"fa-subway"},{"prefix":"fal","class":"fa-suitcase"},{"prefix":"fal","class":"fa-suitcase-rolling"},{"prefix":"fal","class":"fa-sun"},{"prefix":"fal","class":"fa-sun-cloud"},{"prefix":"fal","class":"fa-sun-dust"},{"prefix":"fal","class":"fa-sun-haze"},{"prefix":"fal","class":"fa-sunglasses"},{"prefix":"fal","class":"fa-sunrise"},{"prefix":"fal","class":"fa-sunset"},{"prefix":"fal","class":"fa-superscript"},{"prefix":"fal","class":"fa-surprise"},{"prefix":"fal","class":"fa-swatchbook"},{"prefix":"fal","class":"fa-swimmer"},{"prefix":"fal","class":"fa-swimming-pool"},{"prefix":"fal","class":"fa-sword"},{"prefix":"fal","class":"fa-sword-laser"},{"prefix":"fal","class":"fa-sword-laser-alt"},{"prefix":"fal","class":"fa-swords"},{"prefix":"fal","class":"fa-swords-laser"},{"prefix":"fal","class":"fa-synagogue"},{"prefix":"fal","class":"fa-sync"},{"prefix":"fal","class":"fa-sync-alt"},{"prefix":"fal","class":"fa-syringe"},{"prefix":"fal","class":"fa-table"},{"prefix":"fal","class":"fa-table-tennis"},{"prefix":"fal","class":"fa-tablet"},{"prefix":"fal","class":"fa-tablet-alt"},{"prefix":"fal","class":"fa-tablet-android"},{"prefix":"fal","class":"fa-tablet-android-alt"},{"prefix":"fal","class":"fa-tablet-rugged"},{"prefix":"fal","class":"fa-tablets"},{"prefix":"fal","class":"fa-tachometer"},{"prefix":"fal","class":"fa-tachometer-alt"},{"prefix":"fal","class":"fa-tachometer-alt-average"},{"prefix":"fal","class":"fa-tachometer-alt-fast"},{"prefix":"fal","class":"fa-tachometer-alt-fastest"},{"prefix":"fal","class":"fa-tachometer-alt-slow"},{"prefix":"fal","class":"fa-tachometer-alt-slowest"},{"prefix":"fal","class":"fa-tachometer-average"},{"prefix":"fal","class":"fa-tachometer-fast"},{"prefix":"fal","class":"fa-tachometer-fastest"},{"prefix":"fal","class":"fa-tachometer-slow"},{"prefix":"fal","class":"fa-tachometer-slowest"},{"prefix":"fal","class":"fa-taco"},{"prefix":"fal","class":"fa-tag"},{"prefix":"fal","class":"fa-tags"},{"prefix":"fal","class":"fa-tally"},{"prefix":"fal","class":"fa-tanakh"},{"prefix":"fal","class":"fa-tape"},{"prefix":"fal","class":"fa-tasks"},{"prefix":"fal","class":"fa-tasks-alt"},{"prefix":"fal","class":"fa-taxi"},{"prefix":"fal","class":"fa-teeth"},{"prefix":"fal","class":"fa-teeth-open"},{"prefix":"fal","class":"fa-telescope"},{"prefix":"fal","class":"fa-temperature-down"},{"prefix":"fal","class":"fa-temperature-frigid"},{"prefix":"fal","class":"fa-temperature-high"},{"prefix":"fal","class":"fa-temperature-hot"},{"prefix":"fal","class":"fa-temperature-low"},{"prefix":"fal","class":"fa-temperature-up"},{"prefix":"fal","class":"fa-tenge"},{"prefix":"fal","class":"fa-tennis-ball"},{"prefix":"fal","class":"fa-terminal"},{"prefix":"fal","class":"fa-text"},{"prefix":"fal","class":"fa-text-height"},{"prefix":"fal","class":"fa-text-size"},{"prefix":"fal","class":"fa-text-width"},{"prefix":"fal","class":"fa-th"},{"prefix":"fal","class":"fa-th-large"},{"prefix":"fal","class":"fa-th-list"},{"prefix":"fal","class":"fa-theater-masks"},{"prefix":"fal","class":"fa-thermometer"},{"prefix":"fal","class":"fa-thermometer-empty"},{"prefix":"fal","class":"fa-thermometer-full"},{"prefix":"fal","class":"fa-thermometer-half"},{"prefix":"fal","class":"fa-thermometer-quarter"},{"prefix":"fal","class":"fa-thermometer-three-quarters"},{"prefix":"fal","class":"fa-theta"},{"prefix":"fal","class":"fa-thumbs-down"},{"prefix":"fal","class":"fa-thumbs-up"},{"prefix":"fal","class":"fa-thumbtack"},{"prefix":"fal","class":"fa-thunderstorm"},{"prefix":"fal","class":"fa-thunderstorm-moon"},{"prefix":"fal","class":"fa-thunderstorm-sun"},{"prefix":"fal","class":"fa-ticket"},{"prefix":"fal","class":"fa-ticket-alt"},{"prefix":"fal","class":"fa-tilde"},{"prefix":"fal","class":"fa-times"},{"prefix":"fal","class":"fa-times-circle"},{"prefix":"fal","class":"fa-times-hexagon"},{"prefix":"fal","class":"fa-times-octagon"},{"prefix":"fal","class":"fa-times-square"},{"prefix":"fal","class":"fa-tint"},{"prefix":"fal","class":"fa-tint-slash"},{"prefix":"fal","class":"fa-tire"},{"prefix":"fal","class":"fa-tire-flat"},{"prefix":"fal","class":"fa-tire-pressure-warning"},{"prefix":"fal","class":"fa-tire-rugged"},{"prefix":"fal","class":"fa-tired"},{"prefix":"fal","class":"fa-toggle-off"},{"prefix":"fal","class":"fa-toggle-on"},{"prefix":"fal","class":"fa-toilet"},{"prefix":"fal","class":"fa-toilet-paper"},{"prefix":"fal","class":"fa-toilet-paper-alt"},{"prefix":"fal","class":"fa-toilet-paper-slash"},{"prefix":"fal","class":"fa-tombstone"},{"prefix":"fal","class":"fa-tombstone-alt"},{"prefix":"fal","class":"fa-toolbox"},{"prefix":"fal","class":"fa-tools"},{"prefix":"fal","class":"fa-tooth"},{"prefix":"fal","class":"fa-toothbrush"},{"prefix":"fal","class":"fa-torah"},{"prefix":"fal","class":"fa-torii-gate"},{"prefix":"fal","class":"fa-tornado"},{"prefix":"fal","class":"fa-tractor"},{"prefix":"fal","class":"fa-trademark"},{"prefix":"fal","class":"fa-traffic-cone"},{"prefix":"fal","class":"fa-traffic-light"},{"prefix":"fal","class":"fa-traffic-light-go"},{"prefix":"fal","class":"fa-traffic-light-slow"},{"prefix":"fal","class":"fa-traffic-light-stop"},{"prefix":"fal","class":"fa-trailer"},{"prefix":"fal","class":"fa-train"},{"prefix":"fal","class":"fa-tram"},{"prefix":"fal","class":"fa-transgender"},{"prefix":"fal","class":"fa-transgender-alt"},{"prefix":"fal","class":"fa-transporter"},{"prefix":"fal","class":"fa-transporter-1"},{"prefix":"fal","class":"fa-transporter-2"},{"prefix":"fal","class":"fa-transporter-3"},{"prefix":"fal","class":"fa-transporter-empty"},{"prefix":"fal","class":"fa-trash"},{"prefix":"fal","class":"fa-trash-alt"},{"prefix":"fal","class":"fa-trash-restore"},{"prefix":"fal","class":"fa-trash-restore-alt"},{"prefix":"fal","class":"fa-trash-undo"},{"prefix":"fal","class":"fa-trash-undo-alt"},{"prefix":"fal","class":"fa-treasure-chest"},{"prefix":"fal","class":"fa-tree"},{"prefix":"fal","class":"fa-tree-alt"},{"prefix":"fal","class":"fa-tree-christmas"},{"prefix":"fal","class":"fa-tree-decorated"},{"prefix":"fal","class":"fa-tree-large"},{"prefix":"fal","class":"fa-tree-palm"},{"prefix":"fal","class":"fa-trees"},{"prefix":"fal","class":"fa-triangle"},{"prefix":"fal","class":"fa-triangle-music"},{"prefix":"fal","class":"fa-trophy"},{"prefix":"fal","class":"fa-trophy-alt"},{"prefix":"fal","class":"fa-truck"},{"prefix":"fal","class":"fa-truck-container"},{"prefix":"fal","class":"fa-truck-couch"},{"prefix":"fal","class":"fa-truck-loading"},{"prefix":"fal","class":"fa-truck-monster"},{"prefix":"fal","class":"fa-truck-moving"},{"prefix":"fal","class":"fa-truck-pickup"},{"prefix":"fal","class":"fa-truck-plow"},{"prefix":"fal","class":"fa-truck-ramp"},{"prefix":"fal","class":"fa-trumpet"},{"prefix":"fal","class":"fa-tshirt"},{"prefix":"fal","class":"fa-tty"},{"prefix":"fal","class":"fa-turkey"},{"prefix":"fal","class":"fa-turntable"},{"prefix":"fal","class":"fa-turtle"},{"prefix":"fal","class":"fa-tv"},{"prefix":"fal","class":"fa-tv-alt"},{"prefix":"fal","class":"fa-tv-music"},{"prefix":"fal","class":"fa-tv-retro"},{"prefix":"fal","class":"fa-typewriter"},{"prefix":"fal","class":"fa-ufo"},{"prefix":"fal","class":"fa-ufo-beam"},{"prefix":"fal","class":"fa-umbrella"},{"prefix":"fal","class":"fa-umbrella-beach"},{"prefix":"fal","class":"fa-underline"},{"prefix":"fal","class":"fa-undo"},{"prefix":"fal","class":"fa-undo-alt"},{"prefix":"fal","class":"fa-unicorn"},{"prefix":"fal","class":"fa-union"},{"prefix":"fal","class":"fa-universal-access"},{"prefix":"fal","class":"fa-university"},{"prefix":"fal","class":"fa-unlink"},{"prefix":"fal","class":"fa-unlock"},{"prefix":"fal","class":"fa-unlock-alt"},{"prefix":"fal","class":"fa-upload"},{"prefix":"fal","class":"fa-usb-drive"},{"prefix":"fal","class":"fa-usd-circle"},{"prefix":"fal","class":"fa-usd-square"},{"prefix":"fal","class":"fa-user"},{"prefix":"fal","class":"fa-user-alien"},{"prefix":"fal","class":"fa-user-alt"},{"prefix":"fal","class":"fa-user-alt-slash"},{"prefix":"fal","class":"fa-user-astronaut"},{"prefix":"fal","class":"fa-user-chart"},{"prefix":"fal","class":"fa-user-check"},{"prefix":"fal","class":"fa-user-circle"},{"prefix":"fal","class":"fa-user-clock"},{"prefix":"fal","class":"fa-user-cog"},{"prefix":"fal","class":"fa-user-cowboy"},{"prefix":"fal","class":"fa-user-crown"},{"prefix":"fal","class":"fa-user-edit"},{"prefix":"fal","class":"fa-user-friends"},{"prefix":"fal","class":"fa-user-graduate"},{"prefix":"fal","class":"fa-user-hard-hat"},{"prefix":"fal","class":"fa-user-headset"},{"prefix":"fal","class":"fa-user-injured"},{"prefix":"fal","class":"fa-user-lock"},{"prefix":"fal","class":"fa-user-md"},{"prefix":"fal","class":"fa-user-md-chat"},{"prefix":"fal","class":"fa-user-minus"},{"prefix":"fal","class":"fa-user-music"},{"prefix":"fal","class":"fa-user-ninja"},{"prefix":"fal","class":"fa-user-nurse"},{"prefix":"fal","class":"fa-user-plus"},{"prefix":"fal","class":"fa-user-robot"},{"prefix":"fal","class":"fa-user-secret"},{"prefix":"fal","class":"fa-user-shield"},{"prefix":"fal","class":"fa-user-slash"},{"prefix":"fal","class":"fa-user-tag"},{"prefix":"fal","class":"fa-user-tie"},{"prefix":"fal","class":"fa-user-times"},{"prefix":"fal","class":"fa-user-unlock"},{"prefix":"fal","class":"fa-user-visor"},{"prefix":"fal","class":"fa-users"},{"prefix":"fal","class":"fa-users-class"},{"prefix":"fal","class":"fa-users-cog"},{"prefix":"fal","class":"fa-users-crown"},{"prefix":"fal","class":"fa-users-medical"},{"prefix":"fal","class":"fa-users-slash"},{"prefix":"fal","class":"fa-utensil-fork"},{"prefix":"fal","class":"fa-utensil-knife"},{"prefix":"fal","class":"fa-utensil-spoon"},{"prefix":"fal","class":"fa-utensils"},{"prefix":"fal","class":"fa-utensils-alt"},{"prefix":"fal","class":"fa-vacuum"},{"prefix":"fal","class":"fa-vacuum-robot"},{"prefix":"fal","class":"fa-value-absolute"},{"prefix":"fal","class":"fa-vector-square"},{"prefix":"fal","class":"fa-venus"},{"prefix":"fal","class":"fa-venus-double"},{"prefix":"fal","class":"fa-venus-mars"},{"prefix":"fal","class":"fa-vest"},{"prefix":"fal","class":"fa-vest-patches"},{"prefix":"fal","class":"fa-vhs"},{"prefix":"fal","class":"fa-vial"},{"prefix":"fal","class":"fa-vials"},{"prefix":"fal","class":"fa-video"},{"prefix":"fal","class":"fa-video-plus"},{"prefix":"fal","class":"fa-video-slash"},{"prefix":"fal","class":"fa-vihara"},{"prefix":"fal","class":"fa-violin"},{"prefix":"fal","class":"fa-virus"},{"prefix":"fal","class":"fa-virus-slash"},{"prefix":"fal","class":"fa-viruses"},{"prefix":"fal","class":"fa-voicemail"},{"prefix":"fal","class":"fa-volcano"},{"prefix":"fal","class":"fa-volleyball-ball"},{"prefix":"fal","class":"fa-volume"},{"prefix":"fal","class":"fa-volume-down"},{"prefix":"fal","class":"fa-volume-mute"},{"prefix":"fal","class":"fa-volume-off"},{"prefix":"fal","class":"fa-volume-slash"},{"prefix":"fal","class":"fa-volume-up"},{"prefix":"fal","class":"fa-vote-nay"},{"prefix":"fal","class":"fa-vote-yea"},{"prefix":"fal","class":"fa-vr-cardboard"},{"prefix":"fal","class":"fa-wagon-covered"},{"prefix":"fal","class":"fa-walker"},{"prefix":"fal","class":"fa-walkie-talkie"},{"prefix":"fal","class":"fa-walking"},{"prefix":"fal","class":"fa-wallet"},{"prefix":"fal","class":"fa-wand"},{"prefix":"fal","class":"fa-wand-magic"},{"prefix":"fal","class":"fa-warehouse"},{"prefix":"fal","class":"fa-warehouse-alt"},{"prefix":"fal","class":"fa-washer"},{"prefix":"fal","class":"fa-watch"},{"prefix":"fal","class":"fa-watch-calculator"},{"prefix":"fal","class":"fa-watch-fitness"},{"prefix":"fal","class":"fa-water"},{"prefix":"fal","class":"fa-water-lower"},{"prefix":"fal","class":"fa-water-rise"},{"prefix":"fal","class":"fa-wave-sine"},{"prefix":"fal","class":"fa-wave-square"},{"prefix":"fal","class":"fa-wave-triangle"},{"prefix":"fal","class":"fa-waveform"},{"prefix":"fal","class":"fa-waveform-path"},{"prefix":"fal","class":"fa-webcam"},{"prefix":"fal","class":"fa-webcam-slash"},{"prefix":"fal","class":"fa-weight"},{"prefix":"fal","class":"fa-weight-hanging"},{"prefix":"fal","class":"fa-whale"},{"prefix":"fal","class":"fa-wheat"},{"prefix":"fal","class":"fa-wheelchair"},{"prefix":"fal","class":"fa-whistle"},{"prefix":"fal","class":"fa-wifi"},{"prefix":"fal","class":"fa-wifi-1"},{"prefix":"fal","class":"fa-wifi-2"},{"prefix":"fal","class":"fa-wifi-slash"},{"prefix":"fal","class":"fa-wind"},{"prefix":"fal","class":"fa-wind-turbine"},{"prefix":"fal","class":"fa-wind-warning"},{"prefix":"fal","class":"fa-window"},{"prefix":"fal","class":"fa-window-alt"},{"prefix":"fal","class":"fa-window-close"},{"prefix":"fal","class":"fa-window-frame"},{"prefix":"fal","class":"fa-window-frame-open"},{"prefix":"fal","class":"fa-window-maximize"},{"prefix":"fal","class":"fa-window-minimize"},{"prefix":"fal","class":"fa-window-restore"},{"prefix":"fal","class":"fa-windsock"},{"prefix":"fal","class":"fa-wine-bottle"},{"prefix":"fal","class":"fa-wine-glass"},{"prefix":"fal","class":"fa-wine-glass-alt"},{"prefix":"fal","class":"fa-won-sign"},{"prefix":"fal","class":"fa-wreath"},{"prefix":"fal","class":"fa-wrench"},{"prefix":"fal","class":"fa-x-ray"},{"prefix":"fal","class":"fa-yen-sign"},{"prefix":"fal","class":"fa-yin-yang"}]');

/***/ }),

/***/ "./src/assets/regular.json":
/*!*********************************!*\
  !*** ./src/assets/regular.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"prefix":"far","class":"fa-abacus"},{"prefix":"far","class":"fa-acorn"},{"prefix":"far","class":"fa-ad"},{"prefix":"far","class":"fa-address-book"},{"prefix":"far","class":"fa-address-card"},{"prefix":"far","class":"fa-adjust"},{"prefix":"far","class":"fa-air-conditioner"},{"prefix":"far","class":"fa-air-freshener"},{"prefix":"far","class":"fa-alarm-clock"},{"prefix":"far","class":"fa-alarm-exclamation"},{"prefix":"far","class":"fa-alarm-plus"},{"prefix":"far","class":"fa-alarm-snooze"},{"prefix":"far","class":"fa-album"},{"prefix":"far","class":"fa-album-collection"},{"prefix":"far","class":"fa-alicorn"},{"prefix":"far","class":"fa-alien"},{"prefix":"far","class":"fa-alien-monster"},{"prefix":"far","class":"fa-align-center"},{"prefix":"far","class":"fa-align-justify"},{"prefix":"far","class":"fa-align-left"},{"prefix":"far","class":"fa-align-right"},{"prefix":"far","class":"fa-align-slash"},{"prefix":"far","class":"fa-allergies"},{"prefix":"far","class":"fa-ambulance"},{"prefix":"far","class":"fa-american-sign-language-interpreting"},{"prefix":"far","class":"fa-amp-guitar"},{"prefix":"far","class":"fa-analytics"},{"prefix":"far","class":"fa-anchor"},{"prefix":"far","class":"fa-angel"},{"prefix":"far","class":"fa-angle-double-down"},{"prefix":"far","class":"fa-angle-double-left"},{"prefix":"far","class":"fa-angle-double-right"},{"prefix":"far","class":"fa-angle-double-up"},{"prefix":"far","class":"fa-angle-down"},{"prefix":"far","class":"fa-angle-left"},{"prefix":"far","class":"fa-angle-right"},{"prefix":"far","class":"fa-angle-up"},{"prefix":"far","class":"fa-angry"},{"prefix":"far","class":"fa-ankh"},{"prefix":"far","class":"fa-apple-alt"},{"prefix":"far","class":"fa-apple-crate"},{"prefix":"far","class":"fa-archive"},{"prefix":"far","class":"fa-archway"},{"prefix":"far","class":"fa-arrow-alt-circle-down"},{"prefix":"far","class":"fa-arrow-alt-circle-left"},{"prefix":"far","class":"fa-arrow-alt-circle-right"},{"prefix":"far","class":"fa-arrow-alt-circle-up"},{"prefix":"far","class":"fa-arrow-alt-down"},{"prefix":"far","class":"fa-arrow-alt-from-bottom"},{"prefix":"far","class":"fa-arrow-alt-from-left"},{"prefix":"far","class":"fa-arrow-alt-from-right"},{"prefix":"far","class":"fa-arrow-alt-from-top"},{"prefix":"far","class":"fa-arrow-alt-left"},{"prefix":"far","class":"fa-arrow-alt-right"},{"prefix":"far","class":"fa-arrow-alt-square-down"},{"prefix":"far","class":"fa-arrow-alt-square-left"},{"prefix":"far","class":"fa-arrow-alt-square-right"},{"prefix":"far","class":"fa-arrow-alt-square-up"},{"prefix":"far","class":"fa-arrow-alt-to-bottom"},{"prefix":"far","class":"fa-arrow-alt-to-left"},{"prefix":"far","class":"fa-arrow-alt-to-right"},{"prefix":"far","class":"fa-arrow-alt-to-top"},{"prefix":"far","class":"fa-arrow-alt-up"},{"prefix":"far","class":"fa-arrow-circle-down"},{"prefix":"far","class":"fa-arrow-circle-left"},{"prefix":"far","class":"fa-arrow-circle-right"},{"prefix":"far","class":"fa-arrow-circle-up"},{"prefix":"far","class":"fa-arrow-down"},{"prefix":"far","class":"fa-arrow-from-bottom"},{"prefix":"far","class":"fa-arrow-from-left"},{"prefix":"far","class":"fa-arrow-from-right"},{"prefix":"far","class":"fa-arrow-from-top"},{"prefix":"far","class":"fa-arrow-left"},{"prefix":"far","class":"fa-arrow-right"},{"prefix":"far","class":"fa-arrow-square-down"},{"prefix":"far","class":"fa-arrow-square-left"},{"prefix":"far","class":"fa-arrow-square-right"},{"prefix":"far","class":"fa-arrow-square-up"},{"prefix":"far","class":"fa-arrow-to-bottom"},{"prefix":"far","class":"fa-arrow-to-left"},{"prefix":"far","class":"fa-arrow-to-right"},{"prefix":"far","class":"fa-arrow-to-top"},{"prefix":"far","class":"fa-arrow-up"},{"prefix":"far","class":"fa-arrows"},{"prefix":"far","class":"fa-arrows-alt"},{"prefix":"far","class":"fa-arrows-alt-h"},{"prefix":"far","class":"fa-arrows-alt-v"},{"prefix":"far","class":"fa-arrows-h"},{"prefix":"far","class":"fa-arrows-v"},{"prefix":"far","class":"fa-assistive-listening-systems"},{"prefix":"far","class":"fa-asterisk"},{"prefix":"far","class":"fa-at"},{"prefix":"far","class":"fa-atlas"},{"prefix":"far","class":"fa-atom"},{"prefix":"far","class":"fa-atom-alt"},{"prefix":"far","class":"fa-audio-description"},{"prefix":"far","class":"fa-award"},{"prefix":"far","class":"fa-axe"},{"prefix":"far","class":"fa-axe-battle"},{"prefix":"far","class":"fa-baby"},{"prefix":"far","class":"fa-baby-carriage"},{"prefix":"far","class":"fa-backpack"},{"prefix":"far","class":"fa-backspace"},{"prefix":"far","class":"fa-backward"},{"prefix":"far","class":"fa-bacon"},{"prefix":"far","class":"fa-bacteria"},{"prefix":"far","class":"fa-bacterium"},{"prefix":"far","class":"fa-badge"},{"prefix":"far","class":"fa-badge-check"},{"prefix":"far","class":"fa-badge-dollar"},{"prefix":"far","class":"fa-badge-percent"},{"prefix":"far","class":"fa-badge-sheriff"},{"prefix":"far","class":"fa-badger-honey"},{"prefix":"far","class":"fa-bags-shopping"},{"prefix":"far","class":"fa-bahai"},{"prefix":"far","class":"fa-balance-scale"},{"prefix":"far","class":"fa-balance-scale-left"},{"prefix":"far","class":"fa-balance-scale-right"},{"prefix":"far","class":"fa-ball-pile"},{"prefix":"far","class":"fa-ballot"},{"prefix":"far","class":"fa-ballot-check"},{"prefix":"far","class":"fa-ban"},{"prefix":"far","class":"fa-band-aid"},{"prefix":"far","class":"fa-banjo"},{"prefix":"far","class":"fa-barcode"},{"prefix":"far","class":"fa-barcode-alt"},{"prefix":"far","class":"fa-barcode-read"},{"prefix":"far","class":"fa-barcode-scan"},{"prefix":"far","class":"fa-bars"},{"prefix":"far","class":"fa-baseball"},{"prefix":"far","class":"fa-baseball-ball"},{"prefix":"far","class":"fa-basketball-ball"},{"prefix":"far","class":"fa-basketball-hoop"},{"prefix":"far","class":"fa-bat"},{"prefix":"far","class":"fa-bath"},{"prefix":"far","class":"fa-battery-bolt"},{"prefix":"far","class":"fa-battery-empty"},{"prefix":"far","class":"fa-battery-full"},{"prefix":"far","class":"fa-battery-half"},{"prefix":"far","class":"fa-battery-quarter"},{"prefix":"far","class":"fa-battery-slash"},{"prefix":"far","class":"fa-battery-three-quarters"},{"prefix":"far","class":"fa-bed"},{"prefix":"far","class":"fa-bed-alt"},{"prefix":"far","class":"fa-bed-bunk"},{"prefix":"far","class":"fa-bed-empty"},{"prefix":"far","class":"fa-beer"},{"prefix":"far","class":"fa-bell"},{"prefix":"far","class":"fa-bell-exclamation"},{"prefix":"far","class":"fa-bell-on"},{"prefix":"far","class":"fa-bell-plus"},{"prefix":"far","class":"fa-bell-school"},{"prefix":"far","class":"fa-bell-school-slash"},{"prefix":"far","class":"fa-bell-slash"},{"prefix":"far","class":"fa-bells"},{"prefix":"far","class":"fa-betamax"},{"prefix":"far","class":"fa-bezier-curve"},{"prefix":"far","class":"fa-bible"},{"prefix":"far","class":"fa-bicycle"},{"prefix":"far","class":"fa-biking"},{"prefix":"far","class":"fa-biking-mountain"},{"prefix":"far","class":"fa-binoculars"},{"prefix":"far","class":"fa-biohazard"},{"prefix":"far","class":"fa-birthday-cake"},{"prefix":"far","class":"fa-blanket"},{"prefix":"far","class":"fa-blender"},{"prefix":"far","class":"fa-blender-phone"},{"prefix":"far","class":"fa-blind"},{"prefix":"far","class":"fa-blinds"},{"prefix":"far","class":"fa-blinds-open"},{"prefix":"far","class":"fa-blinds-raised"},{"prefix":"far","class":"fa-blog"},{"prefix":"far","class":"fa-bold"},{"prefix":"far","class":"fa-bolt"},{"prefix":"far","class":"fa-bomb"},{"prefix":"far","class":"fa-bone"},{"prefix":"far","class":"fa-bone-break"},{"prefix":"far","class":"fa-bong"},{"prefix":"far","class":"fa-book"},{"prefix":"far","class":"fa-book-alt"},{"prefix":"far","class":"fa-book-dead"},{"prefix":"far","class":"fa-book-heart"},{"prefix":"far","class":"fa-book-medical"},{"prefix":"far","class":"fa-book-open"},{"prefix":"far","class":"fa-book-reader"},{"prefix":"far","class":"fa-book-spells"},{"prefix":"far","class":"fa-book-user"},{"prefix":"far","class":"fa-bookmark"},{"prefix":"far","class":"fa-books"},{"prefix":"far","class":"fa-books-medical"},{"prefix":"far","class":"fa-boombox"},{"prefix":"far","class":"fa-boot"},{"prefix":"far","class":"fa-booth-curtain"},{"prefix":"far","class":"fa-border-all"},{"prefix":"far","class":"fa-border-bottom"},{"prefix":"far","class":"fa-border-center-h"},{"prefix":"far","class":"fa-border-center-v"},{"prefix":"far","class":"fa-border-inner"},{"prefix":"far","class":"fa-border-left"},{"prefix":"far","class":"fa-border-none"},{"prefix":"far","class":"fa-border-outer"},{"prefix":"far","class":"fa-border-right"},{"prefix":"far","class":"fa-border-style"},{"prefix":"far","class":"fa-border-style-alt"},{"prefix":"far","class":"fa-border-top"},{"prefix":"far","class":"fa-bow-arrow"},{"prefix":"far","class":"fa-bowling-ball"},{"prefix":"far","class":"fa-bowling-pins"},{"prefix":"far","class":"fa-box"},{"prefix":"far","class":"fa-box-alt"},{"prefix":"far","class":"fa-box-ballot"},{"prefix":"far","class":"fa-box-check"},{"prefix":"far","class":"fa-box-fragile"},{"prefix":"far","class":"fa-box-full"},{"prefix":"far","class":"fa-box-heart"},{"prefix":"far","class":"fa-box-open"},{"prefix":"far","class":"fa-box-tissue"},{"prefix":"far","class":"fa-box-up"},{"prefix":"far","class":"fa-box-usd"},{"prefix":"far","class":"fa-boxes"},{"prefix":"far","class":"fa-boxes-alt"},{"prefix":"far","class":"fa-boxing-glove"},{"prefix":"far","class":"fa-brackets"},{"prefix":"far","class":"fa-brackets-curly"},{"prefix":"far","class":"fa-braille"},{"prefix":"far","class":"fa-brain"},{"prefix":"far","class":"fa-bread-loaf"},{"prefix":"far","class":"fa-bread-slice"},{"prefix":"far","class":"fa-briefcase"},{"prefix":"far","class":"fa-briefcase-medical"},{"prefix":"far","class":"fa-bring-forward"},{"prefix":"far","class":"fa-bring-front"},{"prefix":"far","class":"fa-broadcast-tower"},{"prefix":"far","class":"fa-broom"},{"prefix":"far","class":"fa-browser"},{"prefix":"far","class":"fa-brush"},{"prefix":"far","class":"fa-bug"},{"prefix":"far","class":"fa-building"},{"prefix":"far","class":"fa-bullhorn"},{"prefix":"far","class":"fa-bullseye"},{"prefix":"far","class":"fa-bullseye-arrow"},{"prefix":"far","class":"fa-bullseye-pointer"},{"prefix":"far","class":"fa-burger-soda"},{"prefix":"far","class":"fa-burn"},{"prefix":"far","class":"fa-burrito"},{"prefix":"far","class":"fa-bus"},{"prefix":"far","class":"fa-bus-alt"},{"prefix":"far","class":"fa-bus-school"},{"prefix":"far","class":"fa-business-time"},{"prefix":"far","class":"fa-cabinet-filing"},{"prefix":"far","class":"fa-cactus"},{"prefix":"far","class":"fa-calculator"},{"prefix":"far","class":"fa-calculator-alt"},{"prefix":"far","class":"fa-calendar"},{"prefix":"far","class":"fa-calendar-alt"},{"prefix":"far","class":"fa-calendar-check"},{"prefix":"far","class":"fa-calendar-day"},{"prefix":"far","class":"fa-calendar-edit"},{"prefix":"far","class":"fa-calendar-exclamation"},{"prefix":"far","class":"fa-calendar-minus"},{"prefix":"far","class":"fa-calendar-plus"},{"prefix":"far","class":"fa-calendar-star"},{"prefix":"far","class":"fa-calendar-times"},{"prefix":"far","class":"fa-calendar-week"},{"prefix":"far","class":"fa-camcorder"},{"prefix":"far","class":"fa-camera"},{"prefix":"far","class":"fa-camera-alt"},{"prefix":"far","class":"fa-camera-home"},{"prefix":"far","class":"fa-camera-movie"},{"prefix":"far","class":"fa-camera-polaroid"},{"prefix":"far","class":"fa-camera-retro"},{"prefix":"far","class":"fa-campfire"},{"prefix":"far","class":"fa-campground"},{"prefix":"far","class":"fa-candle-holder"},{"prefix":"far","class":"fa-candy-cane"},{"prefix":"far","class":"fa-candy-corn"},{"prefix":"far","class":"fa-cannabis"},{"prefix":"far","class":"fa-capsules"},{"prefix":"far","class":"fa-car"},{"prefix":"far","class":"fa-car-alt"},{"prefix":"far","class":"fa-car-battery"},{"prefix":"far","class":"fa-car-building"},{"prefix":"far","class":"fa-car-bump"},{"prefix":"far","class":"fa-car-bus"},{"prefix":"far","class":"fa-car-crash"},{"prefix":"far","class":"fa-car-garage"},{"prefix":"far","class":"fa-car-mechanic"},{"prefix":"far","class":"fa-car-side"},{"prefix":"far","class":"fa-car-tilt"},{"prefix":"far","class":"fa-car-wash"},{"prefix":"far","class":"fa-caravan"},{"prefix":"far","class":"fa-caravan-alt"},{"prefix":"far","class":"fa-caret-circle-down"},{"prefix":"far","class":"fa-caret-circle-left"},{"prefix":"far","class":"fa-caret-circle-right"},{"prefix":"far","class":"fa-caret-circle-up"},{"prefix":"far","class":"fa-caret-down"},{"prefix":"far","class":"fa-caret-left"},{"prefix":"far","class":"fa-caret-right"},{"prefix":"far","class":"fa-caret-square-down"},{"prefix":"far","class":"fa-caret-square-left"},{"prefix":"far","class":"fa-caret-square-right"},{"prefix":"far","class":"fa-caret-square-up"},{"prefix":"far","class":"fa-caret-up"},{"prefix":"far","class":"fa-carrot"},{"prefix":"far","class":"fa-cars"},{"prefix":"far","class":"fa-cart-arrow-down"},{"prefix":"far","class":"fa-cart-plus"},{"prefix":"far","class":"fa-cash-register"},{"prefix":"far","class":"fa-cassette-tape"},{"prefix":"far","class":"fa-cat"},{"prefix":"far","class":"fa-cat-space"},{"prefix":"far","class":"fa-cauldron"},{"prefix":"far","class":"fa-cctv"},{"prefix":"far","class":"fa-certificate"},{"prefix":"far","class":"fa-chair"},{"prefix":"far","class":"fa-chair-office"},{"prefix":"far","class":"fa-chalkboard"},{"prefix":"far","class":"fa-chalkboard-teacher"},{"prefix":"far","class":"fa-charging-station"},{"prefix":"far","class":"fa-chart-area"},{"prefix":"far","class":"fa-chart-bar"},{"prefix":"far","class":"fa-chart-line"},{"prefix":"far","class":"fa-chart-line-down"},{"prefix":"far","class":"fa-chart-network"},{"prefix":"far","class":"fa-chart-pie"},{"prefix":"far","class":"fa-chart-pie-alt"},{"prefix":"far","class":"fa-chart-scatter"},{"prefix":"far","class":"fa-check"},{"prefix":"far","class":"fa-check-circle"},{"prefix":"far","class":"fa-check-double"},{"prefix":"far","class":"fa-check-square"},{"prefix":"far","class":"fa-cheese"},{"prefix":"far","class":"fa-cheese-swiss"},{"prefix":"far","class":"fa-cheeseburger"},{"prefix":"far","class":"fa-chess"},{"prefix":"far","class":"fa-chess-bishop"},{"prefix":"far","class":"fa-chess-bishop-alt"},{"prefix":"far","class":"fa-chess-board"},{"prefix":"far","class":"fa-chess-clock"},{"prefix":"far","class":"fa-chess-clock-alt"},{"prefix":"far","class":"fa-chess-king"},{"prefix":"far","class":"fa-chess-king-alt"},{"prefix":"far","class":"fa-chess-knight"},{"prefix":"far","class":"fa-chess-knight-alt"},{"prefix":"far","class":"fa-chess-pawn"},{"prefix":"far","class":"fa-chess-pawn-alt"},{"prefix":"far","class":"fa-chess-queen"},{"prefix":"far","class":"fa-chess-queen-alt"},{"prefix":"far","class":"fa-chess-rook"},{"prefix":"far","class":"fa-chess-rook-alt"},{"prefix":"far","class":"fa-chevron-circle-down"},{"prefix":"far","class":"fa-chevron-circle-left"},{"prefix":"far","class":"fa-chevron-circle-right"},{"prefix":"far","class":"fa-chevron-circle-up"},{"prefix":"far","class":"fa-chevron-double-down"},{"prefix":"far","class":"fa-chevron-double-left"},{"prefix":"far","class":"fa-chevron-double-right"},{"prefix":"far","class":"fa-chevron-double-up"},{"prefix":"far","class":"fa-chevron-down"},{"prefix":"far","class":"fa-chevron-left"},{"prefix":"far","class":"fa-chevron-right"},{"prefix":"far","class":"fa-chevron-square-down"},{"prefix":"far","class":"fa-chevron-square-left"},{"prefix":"far","class":"fa-chevron-square-right"},{"prefix":"far","class":"fa-chevron-square-up"},{"prefix":"far","class":"fa-chevron-up"},{"prefix":"far","class":"fa-child"},{"prefix":"far","class":"fa-chimney"},{"prefix":"far","class":"fa-church"},{"prefix":"far","class":"fa-circle"},{"prefix":"far","class":"fa-circle-notch"},{"prefix":"far","class":"fa-city"},{"prefix":"far","class":"fa-clarinet"},{"prefix":"far","class":"fa-claw-marks"},{"prefix":"far","class":"fa-clinic-medical"},{"prefix":"far","class":"fa-clipboard"},{"prefix":"far","class":"fa-clipboard-check"},{"prefix":"far","class":"fa-clipboard-list"},{"prefix":"far","class":"fa-clipboard-list-check"},{"prefix":"far","class":"fa-clipboard-prescription"},{"prefix":"far","class":"fa-clipboard-user"},{"prefix":"far","class":"fa-clock"},{"prefix":"far","class":"fa-clone"},{"prefix":"far","class":"fa-closed-captioning"},{"prefix":"far","class":"fa-cloud"},{"prefix":"far","class":"fa-cloud-download"},{"prefix":"far","class":"fa-cloud-download-alt"},{"prefix":"far","class":"fa-cloud-drizzle"},{"prefix":"far","class":"fa-cloud-hail"},{"prefix":"far","class":"fa-cloud-hail-mixed"},{"prefix":"far","class":"fa-cloud-meatball"},{"prefix":"far","class":"fa-cloud-moon"},{"prefix":"far","class":"fa-cloud-moon-rain"},{"prefix":"far","class":"fa-cloud-music"},{"prefix":"far","class":"fa-cloud-rain"},{"prefix":"far","class":"fa-cloud-rainbow"},{"prefix":"far","class":"fa-cloud-showers"},{"prefix":"far","class":"fa-cloud-showers-heavy"},{"prefix":"far","class":"fa-cloud-sleet"},{"prefix":"far","class":"fa-cloud-snow"},{"prefix":"far","class":"fa-cloud-sun"},{"prefix":"far","class":"fa-cloud-sun-rain"},{"prefix":"far","class":"fa-cloud-upload"},{"prefix":"far","class":"fa-cloud-upload-alt"},{"prefix":"far","class":"fa-clouds"},{"prefix":"far","class":"fa-clouds-moon"},{"prefix":"far","class":"fa-clouds-sun"},{"prefix":"far","class":"fa-club"},{"prefix":"far","class":"fa-cocktail"},{"prefix":"far","class":"fa-code"},{"prefix":"far","class":"fa-code-branch"},{"prefix":"far","class":"fa-code-commit"},{"prefix":"far","class":"fa-code-merge"},{"prefix":"far","class":"fa-coffee"},{"prefix":"far","class":"fa-coffee-pot"},{"prefix":"far","class":"fa-coffee-togo"},{"prefix":"far","class":"fa-coffin"},{"prefix":"far","class":"fa-coffin-cross"},{"prefix":"far","class":"fa-cog"},{"prefix":"far","class":"fa-cogs"},{"prefix":"far","class":"fa-coin"},{"prefix":"far","class":"fa-coins"},{"prefix":"far","class":"fa-columns"},{"prefix":"far","class":"fa-comet"},{"prefix":"far","class":"fa-comment"},{"prefix":"far","class":"fa-comment-alt"},{"prefix":"far","class":"fa-comment-alt-check"},{"prefix":"far","class":"fa-comment-alt-dollar"},{"prefix":"far","class":"fa-comment-alt-dots"},{"prefix":"far","class":"fa-comment-alt-edit"},{"prefix":"far","class":"fa-comment-alt-exclamation"},{"prefix":"far","class":"fa-comment-alt-lines"},{"prefix":"far","class":"fa-comment-alt-medical"},{"prefix":"far","class":"fa-comment-alt-minus"},{"prefix":"far","class":"fa-comment-alt-music"},{"prefix":"far","class":"fa-comment-alt-plus"},{"prefix":"far","class":"fa-comment-alt-slash"},{"prefix":"far","class":"fa-comment-alt-smile"},{"prefix":"far","class":"fa-comment-alt-times"},{"prefix":"far","class":"fa-comment-check"},{"prefix":"far","class":"fa-comment-dollar"},{"prefix":"far","class":"fa-comment-dots"},{"prefix":"far","class":"fa-comment-edit"},{"prefix":"far","class":"fa-comment-exclamation"},{"prefix":"far","class":"fa-comment-lines"},{"prefix":"far","class":"fa-comment-medical"},{"prefix":"far","class":"fa-comment-minus"},{"prefix":"far","class":"fa-comment-music"},{"prefix":"far","class":"fa-comment-plus"},{"prefix":"far","class":"fa-comment-slash"},{"prefix":"far","class":"fa-comment-smile"},{"prefix":"far","class":"fa-comment-times"},{"prefix":"far","class":"fa-comments"},{"prefix":"far","class":"fa-comments-alt"},{"prefix":"far","class":"fa-comments-alt-dollar"},{"prefix":"far","class":"fa-comments-dollar"},{"prefix":"far","class":"fa-compact-disc"},{"prefix":"far","class":"fa-compass"},{"prefix":"far","class":"fa-compass-slash"},{"prefix":"far","class":"fa-compress"},{"prefix":"far","class":"fa-compress-alt"},{"prefix":"far","class":"fa-compress-arrows-alt"},{"prefix":"far","class":"fa-compress-wide"},{"prefix":"far","class":"fa-computer-classic"},{"prefix":"far","class":"fa-computer-speaker"},{"prefix":"far","class":"fa-concierge-bell"},{"prefix":"far","class":"fa-construction"},{"prefix":"far","class":"fa-container-storage"},{"prefix":"far","class":"fa-conveyor-belt"},{"prefix":"far","class":"fa-conveyor-belt-alt"},{"prefix":"far","class":"fa-cookie"},{"prefix":"far","class":"fa-cookie-bite"},{"prefix":"far","class":"fa-copy"},{"prefix":"far","class":"fa-copyright"},{"prefix":"far","class":"fa-corn"},{"prefix":"far","class":"fa-couch"},{"prefix":"far","class":"fa-cow"},{"prefix":"far","class":"fa-cowbell"},{"prefix":"far","class":"fa-cowbell-more"},{"prefix":"far","class":"fa-credit-card"},{"prefix":"far","class":"fa-credit-card-blank"},{"prefix":"far","class":"fa-credit-card-front"},{"prefix":"far","class":"fa-cricket"},{"prefix":"far","class":"fa-croissant"},{"prefix":"far","class":"fa-crop"},{"prefix":"far","class":"fa-crop-alt"},{"prefix":"far","class":"fa-cross"},{"prefix":"far","class":"fa-crosshairs"},{"prefix":"far","class":"fa-crow"},{"prefix":"far","class":"fa-crown"},{"prefix":"far","class":"fa-crutch"},{"prefix":"far","class":"fa-crutches"},{"prefix":"far","class":"fa-cube"},{"prefix":"far","class":"fa-cubes"},{"prefix":"far","class":"fa-curling"},{"prefix":"far","class":"fa-cut"},{"prefix":"far","class":"fa-dagger"},{"prefix":"far","class":"fa-database"},{"prefix":"far","class":"fa-deaf"},{"prefix":"far","class":"fa-debug"},{"prefix":"far","class":"fa-deer"},{"prefix":"far","class":"fa-deer-rudolph"},{"prefix":"far","class":"fa-democrat"},{"prefix":"far","class":"fa-desktop"},{"prefix":"far","class":"fa-desktop-alt"},{"prefix":"far","class":"fa-dewpoint"},{"prefix":"far","class":"fa-dharmachakra"},{"prefix":"far","class":"fa-diagnoses"},{"prefix":"far","class":"fa-diamond"},{"prefix":"far","class":"fa-dice"},{"prefix":"far","class":"fa-dice-d10"},{"prefix":"far","class":"fa-dice-d12"},{"prefix":"far","class":"fa-dice-d20"},{"prefix":"far","class":"fa-dice-d4"},{"prefix":"far","class":"fa-dice-d6"},{"prefix":"far","class":"fa-dice-d8"},{"prefix":"far","class":"fa-dice-five"},{"prefix":"far","class":"fa-dice-four"},{"prefix":"far","class":"fa-dice-one"},{"prefix":"far","class":"fa-dice-six"},{"prefix":"far","class":"fa-dice-three"},{"prefix":"far","class":"fa-dice-two"},{"prefix":"far","class":"fa-digging"},{"prefix":"far","class":"fa-digital-tachograph"},{"prefix":"far","class":"fa-diploma"},{"prefix":"far","class":"fa-directions"},{"prefix":"far","class":"fa-disc-drive"},{"prefix":"far","class":"fa-disease"},{"prefix":"far","class":"fa-divide"},{"prefix":"far","class":"fa-dizzy"},{"prefix":"far","class":"fa-dna"},{"prefix":"far","class":"fa-do-not-enter"},{"prefix":"far","class":"fa-dog"},{"prefix":"far","class":"fa-dog-leashed"},{"prefix":"far","class":"fa-dollar-sign"},{"prefix":"far","class":"fa-dolly"},{"prefix":"far","class":"fa-dolly-empty"},{"prefix":"far","class":"fa-dolly-flatbed"},{"prefix":"far","class":"fa-dolly-flatbed-alt"},{"prefix":"far","class":"fa-dolly-flatbed-empty"},{"prefix":"far","class":"fa-donate"},{"prefix":"far","class":"fa-door-closed"},{"prefix":"far","class":"fa-door-open"},{"prefix":"far","class":"fa-dot-circle"},{"prefix":"far","class":"fa-dove"},{"prefix":"far","class":"fa-download"},{"prefix":"far","class":"fa-drafting-compass"},{"prefix":"far","class":"fa-dragon"},{"prefix":"far","class":"fa-draw-circle"},{"prefix":"far","class":"fa-draw-polygon"},{"prefix":"far","class":"fa-draw-square"},{"prefix":"far","class":"fa-dreidel"},{"prefix":"far","class":"fa-drone"},{"prefix":"far","class":"fa-drone-alt"},{"prefix":"far","class":"fa-drum"},{"prefix":"far","class":"fa-drum-steelpan"},{"prefix":"far","class":"fa-drumstick"},{"prefix":"far","class":"fa-drumstick-bite"},{"prefix":"far","class":"fa-dryer"},{"prefix":"far","class":"fa-dryer-alt"},{"prefix":"far","class":"fa-duck"},{"prefix":"far","class":"fa-dumbbell"},{"prefix":"far","class":"fa-dumpster"},{"prefix":"far","class":"fa-dumpster-fire"},{"prefix":"far","class":"fa-dungeon"},{"prefix":"far","class":"fa-ear"},{"prefix":"far","class":"fa-ear-muffs"},{"prefix":"far","class":"fa-eclipse"},{"prefix":"far","class":"fa-eclipse-alt"},{"prefix":"far","class":"fa-edit"},{"prefix":"far","class":"fa-egg"},{"prefix":"far","class":"fa-egg-fried"},{"prefix":"far","class":"fa-eject"},{"prefix":"far","class":"fa-elephant"},{"prefix":"far","class":"fa-ellipsis-h"},{"prefix":"far","class":"fa-ellipsis-h-alt"},{"prefix":"far","class":"fa-ellipsis-v"},{"prefix":"far","class":"fa-ellipsis-v-alt"},{"prefix":"far","class":"fa-empty-set"},{"prefix":"far","class":"fa-engine-warning"},{"prefix":"far","class":"fa-envelope"},{"prefix":"far","class":"fa-envelope-open"},{"prefix":"far","class":"fa-envelope-open-dollar"},{"prefix":"far","class":"fa-envelope-open-text"},{"prefix":"far","class":"fa-envelope-square"},{"prefix":"far","class":"fa-equals"},{"prefix":"far","class":"fa-eraser"},{"prefix":"far","class":"fa-ethernet"},{"prefix":"far","class":"fa-euro-sign"},{"prefix":"far","class":"fa-exchange"},{"prefix":"far","class":"fa-exchange-alt"},{"prefix":"far","class":"fa-exclamation"},{"prefix":"far","class":"fa-exclamation-circle"},{"prefix":"far","class":"fa-exclamation-square"},{"prefix":"far","class":"fa-exclamation-triangle"},{"prefix":"far","class":"fa-expand"},{"prefix":"far","class":"fa-expand-alt"},{"prefix":"far","class":"fa-expand-arrows"},{"prefix":"far","class":"fa-expand-arrows-alt"},{"prefix":"far","class":"fa-expand-wide"},{"prefix":"far","class":"fa-external-link"},{"prefix":"far","class":"fa-external-link-alt"},{"prefix":"far","class":"fa-external-link-square"},{"prefix":"far","class":"fa-external-link-square-alt"},{"prefix":"far","class":"fa-eye"},{"prefix":"far","class":"fa-eye-dropper"},{"prefix":"far","class":"fa-eye-evil"},{"prefix":"far","class":"fa-eye-slash"},{"prefix":"far","class":"fa-fan"},{"prefix":"far","class":"fa-fan-table"},{"prefix":"far","class":"fa-farm"},{"prefix":"far","class":"fa-fast-backward"},{"prefix":"far","class":"fa-fast-forward"},{"prefix":"far","class":"fa-faucet"},{"prefix":"far","class":"fa-faucet-drip"},{"prefix":"far","class":"fa-fax"},{"prefix":"far","class":"fa-feather"},{"prefix":"far","class":"fa-feather-alt"},{"prefix":"far","class":"fa-female"},{"prefix":"far","class":"fa-field-hockey"},{"prefix":"far","class":"fa-fighter-jet"},{"prefix":"far","class":"fa-file"},{"prefix":"far","class":"fa-file-alt"},{"prefix":"far","class":"fa-file-archive"},{"prefix":"far","class":"fa-file-audio"},{"prefix":"far","class":"fa-file-certificate"},{"prefix":"far","class":"fa-file-chart-line"},{"prefix":"far","class":"fa-file-chart-pie"},{"prefix":"far","class":"fa-file-check"},{"prefix":"far","class":"fa-file-code"},{"prefix":"far","class":"fa-file-contract"},{"prefix":"far","class":"fa-file-csv"},{"prefix":"far","class":"fa-file-download"},{"prefix":"far","class":"fa-file-edit"},{"prefix":"far","class":"fa-file-excel"},{"prefix":"far","class":"fa-file-exclamation"},{"prefix":"far","class":"fa-file-export"},{"prefix":"far","class":"fa-file-image"},{"prefix":"far","class":"fa-file-import"},{"prefix":"far","class":"fa-file-invoice"},{"prefix":"far","class":"fa-file-invoice-dollar"},{"prefix":"far","class":"fa-file-medical"},{"prefix":"far","class":"fa-file-medical-alt"},{"prefix":"far","class":"fa-file-minus"},{"prefix":"far","class":"fa-file-music"},{"prefix":"far","class":"fa-file-pdf"},{"prefix":"far","class":"fa-file-plus"},{"prefix":"far","class":"fa-file-powerpoint"},{"prefix":"far","class":"fa-file-prescription"},{"prefix":"far","class":"fa-file-search"},{"prefix":"far","class":"fa-file-signature"},{"prefix":"far","class":"fa-file-spreadsheet"},{"prefix":"far","class":"fa-file-times"},{"prefix":"far","class":"fa-file-upload"},{"prefix":"far","class":"fa-file-user"},{"prefix":"far","class":"fa-file-video"},{"prefix":"far","class":"fa-file-word"},{"prefix":"far","class":"fa-files-medical"},{"prefix":"far","class":"fa-fill"},{"prefix":"far","class":"fa-fill-drip"},{"prefix":"far","class":"fa-film"},{"prefix":"far","class":"fa-film-alt"},{"prefix":"far","class":"fa-film-canister"},{"prefix":"far","class":"fa-filter"},{"prefix":"far","class":"fa-fingerprint"},{"prefix":"far","class":"fa-fire"},{"prefix":"far","class":"fa-fire-alt"},{"prefix":"far","class":"fa-fire-extinguisher"},{"prefix":"far","class":"fa-fire-smoke"},{"prefix":"far","class":"fa-fireplace"},{"prefix":"far","class":"fa-first-aid"},{"prefix":"far","class":"fa-fish"},{"prefix":"far","class":"fa-fish-cooked"},{"prefix":"far","class":"fa-fist-raised"},{"prefix":"far","class":"fa-flag"},{"prefix":"far","class":"fa-flag-alt"},{"prefix":"far","class":"fa-flag-checkered"},{"prefix":"far","class":"fa-flag-usa"},{"prefix":"far","class":"fa-flame"},{"prefix":"far","class":"fa-flashlight"},{"prefix":"far","class":"fa-flask"},{"prefix":"far","class":"fa-flask-poison"},{"prefix":"far","class":"fa-flask-potion"},{"prefix":"far","class":"fa-flower"},{"prefix":"far","class":"fa-flower-daffodil"},{"prefix":"far","class":"fa-flower-tulip"},{"prefix":"far","class":"fa-flushed"},{"prefix":"far","class":"fa-flute"},{"prefix":"far","class":"fa-flux-capacitor"},{"prefix":"far","class":"fa-fog"},{"prefix":"far","class":"fa-folder"},{"prefix":"far","class":"fa-folder-download"},{"prefix":"far","class":"fa-folder-minus"},{"prefix":"far","class":"fa-folder-open"},{"prefix":"far","class":"fa-folder-plus"},{"prefix":"far","class":"fa-folder-times"},{"prefix":"far","class":"fa-folder-tree"},{"prefix":"far","class":"fa-folder-upload"},{"prefix":"far","class":"fa-folders"},{"prefix":"far","class":"fa-font"},{"prefix":"far","class":"fa-font-awesome-logo-full"},{"prefix":"far","class":"fa-font-case"},{"prefix":"far","class":"fa-football-ball"},{"prefix":"far","class":"fa-football-helmet"},{"prefix":"far","class":"fa-forklift"},{"prefix":"far","class":"fa-forward"},{"prefix":"far","class":"fa-fragile"},{"prefix":"far","class":"fa-french-fries"},{"prefix":"far","class":"fa-frog"},{"prefix":"far","class":"fa-frosty-head"},{"prefix":"far","class":"fa-frown"},{"prefix":"far","class":"fa-frown-open"},{"prefix":"far","class":"fa-function"},{"prefix":"far","class":"fa-funnel-dollar"},{"prefix":"far","class":"fa-futbol"},{"prefix":"far","class":"fa-galaxy"},{"prefix":"far","class":"fa-game-board"},{"prefix":"far","class":"fa-game-board-alt"},{"prefix":"far","class":"fa-game-console-handheld"},{"prefix":"far","class":"fa-gamepad"},{"prefix":"far","class":"fa-gamepad-alt"},{"prefix":"far","class":"fa-garage"},{"prefix":"far","class":"fa-garage-car"},{"prefix":"far","class":"fa-garage-open"},{"prefix":"far","class":"fa-gas-pump"},{"prefix":"far","class":"fa-gas-pump-slash"},{"prefix":"far","class":"fa-gavel"},{"prefix":"far","class":"fa-gem"},{"prefix":"far","class":"fa-genderless"},{"prefix":"far","class":"fa-ghost"},{"prefix":"far","class":"fa-gift"},{"prefix":"far","class":"fa-gift-card"},{"prefix":"far","class":"fa-gifts"},{"prefix":"far","class":"fa-gingerbread-man"},{"prefix":"far","class":"fa-glass"},{"prefix":"far","class":"fa-glass-champagne"},{"prefix":"far","class":"fa-glass-cheers"},{"prefix":"far","class":"fa-glass-citrus"},{"prefix":"far","class":"fa-glass-martini"},{"prefix":"far","class":"fa-glass-martini-alt"},{"prefix":"far","class":"fa-glass-whiskey"},{"prefix":"far","class":"fa-glass-whiskey-rocks"},{"prefix":"far","class":"fa-glasses"},{"prefix":"far","class":"fa-glasses-alt"},{"prefix":"far","class":"fa-globe"},{"prefix":"far","class":"fa-globe-africa"},{"prefix":"far","class":"fa-globe-americas"},{"prefix":"far","class":"fa-globe-asia"},{"prefix":"far","class":"fa-globe-europe"},{"prefix":"far","class":"fa-globe-snow"},{"prefix":"far","class":"fa-globe-stand"},{"prefix":"far","class":"fa-golf-ball"},{"prefix":"far","class":"fa-golf-club"},{"prefix":"far","class":"fa-gopuram"},{"prefix":"far","class":"fa-graduation-cap"},{"prefix":"far","class":"fa-gramophone"},{"prefix":"far","class":"fa-greater-than"},{"prefix":"far","class":"fa-greater-than-equal"},{"prefix":"far","class":"fa-grimace"},{"prefix":"far","class":"fa-grin"},{"prefix":"far","class":"fa-grin-alt"},{"prefix":"far","class":"fa-grin-beam"},{"prefix":"far","class":"fa-grin-beam-sweat"},{"prefix":"far","class":"fa-grin-hearts"},{"prefix":"far","class":"fa-grin-squint"},{"prefix":"far","class":"fa-grin-squint-tears"},{"prefix":"far","class":"fa-grin-stars"},{"prefix":"far","class":"fa-grin-tears"},{"prefix":"far","class":"fa-grin-tongue"},{"prefix":"far","class":"fa-grin-tongue-squint"},{"prefix":"far","class":"fa-grin-tongue-wink"},{"prefix":"far","class":"fa-grin-wink"},{"prefix":"far","class":"fa-grip-horizontal"},{"prefix":"far","class":"fa-grip-lines"},{"prefix":"far","class":"fa-grip-lines-vertical"},{"prefix":"far","class":"fa-grip-vertical"},{"prefix":"far","class":"fa-guitar"},{"prefix":"far","class":"fa-guitar-electric"},{"prefix":"far","class":"fa-guitars"},{"prefix":"far","class":"fa-h-square"},{"prefix":"far","class":"fa-h1"},{"prefix":"far","class":"fa-h2"},{"prefix":"far","class":"fa-h3"},{"prefix":"far","class":"fa-h4"},{"prefix":"far","class":"fa-hamburger"},{"prefix":"far","class":"fa-hammer"},{"prefix":"far","class":"fa-hammer-war"},{"prefix":"far","class":"fa-hamsa"},{"prefix":"far","class":"fa-hand-heart"},{"prefix":"far","class":"fa-hand-holding"},{"prefix":"far","class":"fa-hand-holding-box"},{"prefix":"far","class":"fa-hand-holding-heart"},{"prefix":"far","class":"fa-hand-holding-magic"},{"prefix":"far","class":"fa-hand-holding-medical"},{"prefix":"far","class":"fa-hand-holding-seedling"},{"prefix":"far","class":"fa-hand-holding-usd"},{"prefix":"far","class":"fa-hand-holding-water"},{"prefix":"far","class":"fa-hand-lizard"},{"prefix":"far","class":"fa-hand-middle-finger"},{"prefix":"far","class":"fa-hand-paper"},{"prefix":"far","class":"fa-hand-peace"},{"prefix":"far","class":"fa-hand-point-down"},{"prefix":"far","class":"fa-hand-point-left"},{"prefix":"far","class":"fa-hand-point-right"},{"prefix":"far","class":"fa-hand-point-up"},{"prefix":"far","class":"fa-hand-pointer"},{"prefix":"far","class":"fa-hand-receiving"},{"prefix":"far","class":"fa-hand-rock"},{"prefix":"far","class":"fa-hand-scissors"},{"prefix":"far","class":"fa-hand-sparkles"},{"prefix":"far","class":"fa-hand-spock"},{"prefix":"far","class":"fa-hands"},{"prefix":"far","class":"fa-hands-heart"},{"prefix":"far","class":"fa-hands-helping"},{"prefix":"far","class":"fa-hands-usd"},{"prefix":"far","class":"fa-hands-wash"},{"prefix":"far","class":"fa-handshake"},{"prefix":"far","class":"fa-handshake-alt"},{"prefix":"far","class":"fa-handshake-alt-slash"},{"prefix":"far","class":"fa-handshake-slash"},{"prefix":"far","class":"fa-hanukiah"},{"prefix":"far","class":"fa-hard-hat"},{"prefix":"far","class":"fa-hashtag"},{"prefix":"far","class":"fa-hat-chef"},{"prefix":"far","class":"fa-hat-cowboy"},{"prefix":"far","class":"fa-hat-cowboy-side"},{"prefix":"far","class":"fa-hat-santa"},{"prefix":"far","class":"fa-hat-winter"},{"prefix":"far","class":"fa-hat-witch"},{"prefix":"far","class":"fa-hat-wizard"},{"prefix":"far","class":"fa-hdd"},{"prefix":"far","class":"fa-head-side"},{"prefix":"far","class":"fa-head-side-brain"},{"prefix":"far","class":"fa-head-side-cough"},{"prefix":"far","class":"fa-head-side-cough-slash"},{"prefix":"far","class":"fa-head-side-headphones"},{"prefix":"far","class":"fa-head-side-mask"},{"prefix":"far","class":"fa-head-side-medical"},{"prefix":"far","class":"fa-head-side-virus"},{"prefix":"far","class":"fa-head-vr"},{"prefix":"far","class":"fa-heading"},{"prefix":"far","class":"fa-headphones"},{"prefix":"far","class":"fa-headphones-alt"},{"prefix":"far","class":"fa-headset"},{"prefix":"far","class":"fa-heart"},{"prefix":"far","class":"fa-heart-broken"},{"prefix":"far","class":"fa-heart-circle"},{"prefix":"far","class":"fa-heart-rate"},{"prefix":"far","class":"fa-heart-square"},{"prefix":"far","class":"fa-heartbeat"},{"prefix":"far","class":"fa-heat"},{"prefix":"far","class":"fa-helicopter"},{"prefix":"far","class":"fa-helmet-battle"},{"prefix":"far","class":"fa-hexagon"},{"prefix":"far","class":"fa-highlighter"},{"prefix":"far","class":"fa-hiking"},{"prefix":"far","class":"fa-hippo"},{"prefix":"far","class":"fa-history"},{"prefix":"far","class":"fa-hockey-mask"},{"prefix":"far","class":"fa-hockey-puck"},{"prefix":"far","class":"fa-hockey-sticks"},{"prefix":"far","class":"fa-holly-berry"},{"prefix":"far","class":"fa-home"},{"prefix":"far","class":"fa-home-alt"},{"prefix":"far","class":"fa-home-heart"},{"prefix":"far","class":"fa-home-lg"},{"prefix":"far","class":"fa-home-lg-alt"},{"prefix":"far","class":"fa-hood-cloak"},{"prefix":"far","class":"fa-horizontal-rule"},{"prefix":"far","class":"fa-horse"},{"prefix":"far","class":"fa-horse-head"},{"prefix":"far","class":"fa-horse-saddle"},{"prefix":"far","class":"fa-hospital"},{"prefix":"far","class":"fa-hospital-alt"},{"prefix":"far","class":"fa-hospital-symbol"},{"prefix":"far","class":"fa-hospital-user"},{"prefix":"far","class":"fa-hospitals"},{"prefix":"far","class":"fa-hot-tub"},{"prefix":"far","class":"fa-hotdog"},{"prefix":"far","class":"fa-hotel"},{"prefix":"far","class":"fa-hourglass"},{"prefix":"far","class":"fa-hourglass-end"},{"prefix":"far","class":"fa-hourglass-half"},{"prefix":"far","class":"fa-hourglass-start"},{"prefix":"far","class":"fa-house"},{"prefix":"far","class":"fa-house-damage"},{"prefix":"far","class":"fa-house-day"},{"prefix":"far","class":"fa-house-flood"},{"prefix":"far","class":"fa-house-leave"},{"prefix":"far","class":"fa-house-night"},{"prefix":"far","class":"fa-house-return"},{"prefix":"far","class":"fa-house-signal"},{"prefix":"far","class":"fa-house-user"},{"prefix":"far","class":"fa-hryvnia"},{"prefix":"far","class":"fa-humidity"},{"prefix":"far","class":"fa-hurricane"},{"prefix":"far","class":"fa-i-cursor"},{"prefix":"far","class":"fa-ice-cream"},{"prefix":"far","class":"fa-ice-skate"},{"prefix":"far","class":"fa-icicles"},{"prefix":"far","class":"fa-icons"},{"prefix":"far","class":"fa-icons-alt"},{"prefix":"far","class":"fa-id-badge"},{"prefix":"far","class":"fa-id-card"},{"prefix":"far","class":"fa-id-card-alt"},{"prefix":"far","class":"fa-igloo"},{"prefix":"far","class":"fa-image"},{"prefix":"far","class":"fa-image-polaroid"},{"prefix":"far","class":"fa-images"},{"prefix":"far","class":"fa-inbox"},{"prefix":"far","class":"fa-inbox-in"},{"prefix":"far","class":"fa-inbox-out"},{"prefix":"far","class":"fa-indent"},{"prefix":"far","class":"fa-industry"},{"prefix":"far","class":"fa-industry-alt"},{"prefix":"far","class":"fa-infinity"},{"prefix":"far","class":"fa-info"},{"prefix":"far","class":"fa-info-circle"},{"prefix":"far","class":"fa-info-square"},{"prefix":"far","class":"fa-inhaler"},{"prefix":"far","class":"fa-integral"},{"prefix":"far","class":"fa-intersection"},{"prefix":"far","class":"fa-inventory"},{"prefix":"far","class":"fa-island-tropical"},{"prefix":"far","class":"fa-italic"},{"prefix":"far","class":"fa-jack-o-lantern"},{"prefix":"far","class":"fa-jedi"},{"prefix":"far","class":"fa-joint"},{"prefix":"far","class":"fa-journal-whills"},{"prefix":"far","class":"fa-joystick"},{"prefix":"far","class":"fa-jug"},{"prefix":"far","class":"fa-kaaba"},{"prefix":"far","class":"fa-kazoo"},{"prefix":"far","class":"fa-kerning"},{"prefix":"far","class":"fa-key"},{"prefix":"far","class":"fa-key-skeleton"},{"prefix":"far","class":"fa-keyboard"},{"prefix":"far","class":"fa-keynote"},{"prefix":"far","class":"fa-khanda"},{"prefix":"far","class":"fa-kidneys"},{"prefix":"far","class":"fa-kiss"},{"prefix":"far","class":"fa-kiss-beam"},{"prefix":"far","class":"fa-kiss-wink-heart"},{"prefix":"far","class":"fa-kite"},{"prefix":"far","class":"fa-kiwi-bird"},{"prefix":"far","class":"fa-knife-kitchen"},{"prefix":"far","class":"fa-lambda"},{"prefix":"far","class":"fa-lamp"},{"prefix":"far","class":"fa-lamp-desk"},{"prefix":"far","class":"fa-lamp-floor"},{"prefix":"far","class":"fa-landmark"},{"prefix":"far","class":"fa-landmark-alt"},{"prefix":"far","class":"fa-language"},{"prefix":"far","class":"fa-laptop"},{"prefix":"far","class":"fa-laptop-code"},{"prefix":"far","class":"fa-laptop-house"},{"prefix":"far","class":"fa-laptop-medical"},{"prefix":"far","class":"fa-lasso"},{"prefix":"far","class":"fa-laugh"},{"prefix":"far","class":"fa-laugh-beam"},{"prefix":"far","class":"fa-laugh-squint"},{"prefix":"far","class":"fa-laugh-wink"},{"prefix":"far","class":"fa-layer-group"},{"prefix":"far","class":"fa-layer-minus"},{"prefix":"far","class":"fa-layer-plus"},{"prefix":"far","class":"fa-leaf"},{"prefix":"far","class":"fa-leaf-heart"},{"prefix":"far","class":"fa-leaf-maple"},{"prefix":"far","class":"fa-leaf-oak"},{"prefix":"far","class":"fa-lemon"},{"prefix":"far","class":"fa-less-than"},{"prefix":"far","class":"fa-less-than-equal"},{"prefix":"far","class":"fa-level-down"},{"prefix":"far","class":"fa-level-down-alt"},{"prefix":"far","class":"fa-level-up"},{"prefix":"far","class":"fa-level-up-alt"},{"prefix":"far","class":"fa-life-ring"},{"prefix":"far","class":"fa-light-ceiling"},{"prefix":"far","class":"fa-light-switch"},{"prefix":"far","class":"fa-light-switch-off"},{"prefix":"far","class":"fa-light-switch-on"},{"prefix":"far","class":"fa-lightbulb"},{"prefix":"far","class":"fa-lightbulb-dollar"},{"prefix":"far","class":"fa-lightbulb-exclamation"},{"prefix":"far","class":"fa-lightbulb-on"},{"prefix":"far","class":"fa-lightbulb-slash"},{"prefix":"far","class":"fa-lights-holiday"},{"prefix":"far","class":"fa-line-columns"},{"prefix":"far","class":"fa-line-height"},{"prefix":"far","class":"fa-link"},{"prefix":"far","class":"fa-lips"},{"prefix":"far","class":"fa-lira-sign"},{"prefix":"far","class":"fa-list"},{"prefix":"far","class":"fa-list-alt"},{"prefix":"far","class":"fa-list-music"},{"prefix":"far","class":"fa-list-ol"},{"prefix":"far","class":"fa-list-ul"},{"prefix":"far","class":"fa-location"},{"prefix":"far","class":"fa-location-arrow"},{"prefix":"far","class":"fa-location-circle"},{"prefix":"far","class":"fa-location-slash"},{"prefix":"far","class":"fa-lock"},{"prefix":"far","class":"fa-lock-alt"},{"prefix":"far","class":"fa-lock-open"},{"prefix":"far","class":"fa-lock-open-alt"},{"prefix":"far","class":"fa-long-arrow-alt-down"},{"prefix":"far","class":"fa-long-arrow-alt-left"},{"prefix":"far","class":"fa-long-arrow-alt-right"},{"prefix":"far","class":"fa-long-arrow-alt-up"},{"prefix":"far","class":"fa-long-arrow-down"},{"prefix":"far","class":"fa-long-arrow-left"},{"prefix":"far","class":"fa-long-arrow-right"},{"prefix":"far","class":"fa-long-arrow-up"},{"prefix":"far","class":"fa-loveseat"},{"prefix":"far","class":"fa-low-vision"},{"prefix":"far","class":"fa-luchador"},{"prefix":"far","class":"fa-luggage-cart"},{"prefix":"far","class":"fa-lungs"},{"prefix":"far","class":"fa-lungs-virus"},{"prefix":"far","class":"fa-mace"},{"prefix":"far","class":"fa-magic"},{"prefix":"far","class":"fa-magnet"},{"prefix":"far","class":"fa-mail-bulk"},{"prefix":"far","class":"fa-mailbox"},{"prefix":"far","class":"fa-male"},{"prefix":"far","class":"fa-mandolin"},{"prefix":"far","class":"fa-map"},{"prefix":"far","class":"fa-map-marked"},{"prefix":"far","class":"fa-map-marked-alt"},{"prefix":"far","class":"fa-map-marker"},{"prefix":"far","class":"fa-map-marker-alt"},{"prefix":"far","class":"fa-map-marker-alt-slash"},{"prefix":"far","class":"fa-map-marker-check"},{"prefix":"far","class":"fa-map-marker-edit"},{"prefix":"far","class":"fa-map-marker-exclamation"},{"prefix":"far","class":"fa-map-marker-minus"},{"prefix":"far","class":"fa-map-marker-plus"},{"prefix":"far","class":"fa-map-marker-question"},{"prefix":"far","class":"fa-map-marker-slash"},{"prefix":"far","class":"fa-map-marker-smile"},{"prefix":"far","class":"fa-map-marker-times"},{"prefix":"far","class":"fa-map-pin"},{"prefix":"far","class":"fa-map-signs"},{"prefix":"far","class":"fa-marker"},{"prefix":"far","class":"fa-mars"},{"prefix":"far","class":"fa-mars-double"},{"prefix":"far","class":"fa-mars-stroke"},{"prefix":"far","class":"fa-mars-stroke-h"},{"prefix":"far","class":"fa-mars-stroke-v"},{"prefix":"far","class":"fa-mask"},{"prefix":"far","class":"fa-meat"},{"prefix":"far","class":"fa-medal"},{"prefix":"far","class":"fa-medkit"},{"prefix":"far","class":"fa-megaphone"},{"prefix":"far","class":"fa-meh"},{"prefix":"far","class":"fa-meh-blank"},{"prefix":"far","class":"fa-meh-rolling-eyes"},{"prefix":"far","class":"fa-memory"},{"prefix":"far","class":"fa-menorah"},{"prefix":"far","class":"fa-mercury"},{"prefix":"far","class":"fa-meteor"},{"prefix":"far","class":"fa-microchip"},{"prefix":"far","class":"fa-microphone"},{"prefix":"far","class":"fa-microphone-alt"},{"prefix":"far","class":"fa-microphone-alt-slash"},{"prefix":"far","class":"fa-microphone-slash"},{"prefix":"far","class":"fa-microphone-stand"},{"prefix":"far","class":"fa-microscope"},{"prefix":"far","class":"fa-microwave"},{"prefix":"far","class":"fa-mind-share"},{"prefix":"far","class":"fa-minus"},{"prefix":"far","class":"fa-minus-circle"},{"prefix":"far","class":"fa-minus-hexagon"},{"prefix":"far","class":"fa-minus-octagon"},{"prefix":"far","class":"fa-minus-square"},{"prefix":"far","class":"fa-mistletoe"},{"prefix":"far","class":"fa-mitten"},{"prefix":"far","class":"fa-mobile"},{"prefix":"far","class":"fa-mobile-alt"},{"prefix":"far","class":"fa-mobile-android"},{"prefix":"far","class":"fa-mobile-android-alt"},{"prefix":"far","class":"fa-money-bill"},{"prefix":"far","class":"fa-money-bill-alt"},{"prefix":"far","class":"fa-money-bill-wave"},{"prefix":"far","class":"fa-money-bill-wave-alt"},{"prefix":"far","class":"fa-money-check"},{"prefix":"far","class":"fa-money-check-alt"},{"prefix":"far","class":"fa-money-check-edit"},{"prefix":"far","class":"fa-money-check-edit-alt"},{"prefix":"far","class":"fa-monitor-heart-rate"},{"prefix":"far","class":"fa-monkey"},{"prefix":"far","class":"fa-monument"},{"prefix":"far","class":"fa-moon"},{"prefix":"far","class":"fa-moon-cloud"},{"prefix":"far","class":"fa-moon-stars"},{"prefix":"far","class":"fa-mortar-pestle"},{"prefix":"far","class":"fa-mosque"},{"prefix":"far","class":"fa-motorcycle"},{"prefix":"far","class":"fa-mountain"},{"prefix":"far","class":"fa-mountains"},{"prefix":"far","class":"fa-mouse"},{"prefix":"far","class":"fa-mouse-alt"},{"prefix":"far","class":"fa-mouse-pointer"},{"prefix":"far","class":"fa-mp3-player"},{"prefix":"far","class":"fa-mug"},{"prefix":"far","class":"fa-mug-hot"},{"prefix":"far","class":"fa-mug-marshmallows"},{"prefix":"far","class":"fa-mug-tea"},{"prefix":"far","class":"fa-music"},{"prefix":"far","class":"fa-music-alt"},{"prefix":"far","class":"fa-music-alt-slash"},{"prefix":"far","class":"fa-music-slash"},{"prefix":"far","class":"fa-narwhal"},{"prefix":"far","class":"fa-network-wired"},{"prefix":"far","class":"fa-neuter"},{"prefix":"far","class":"fa-newspaper"},{"prefix":"far","class":"fa-not-equal"},{"prefix":"far","class":"fa-notes-medical"},{"prefix":"far","class":"fa-object-group"},{"prefix":"far","class":"fa-object-ungroup"},{"prefix":"far","class":"fa-octagon"},{"prefix":"far","class":"fa-oil-can"},{"prefix":"far","class":"fa-oil-temp"},{"prefix":"far","class":"fa-om"},{"prefix":"far","class":"fa-omega"},{"prefix":"far","class":"fa-ornament"},{"prefix":"far","class":"fa-otter"},{"prefix":"far","class":"fa-outdent"},{"prefix":"far","class":"fa-outlet"},{"prefix":"far","class":"fa-oven"},{"prefix":"far","class":"fa-overline"},{"prefix":"far","class":"fa-page-break"},{"prefix":"far","class":"fa-pager"},{"prefix":"far","class":"fa-paint-brush"},{"prefix":"far","class":"fa-paint-brush-alt"},{"prefix":"far","class":"fa-paint-roller"},{"prefix":"far","class":"fa-palette"},{"prefix":"far","class":"fa-pallet"},{"prefix":"far","class":"fa-pallet-alt"},{"prefix":"far","class":"fa-paper-plane"},{"prefix":"far","class":"fa-paperclip"},{"prefix":"far","class":"fa-parachute-box"},{"prefix":"far","class":"fa-paragraph"},{"prefix":"far","class":"fa-paragraph-rtl"},{"prefix":"far","class":"fa-parking"},{"prefix":"far","class":"fa-parking-circle"},{"prefix":"far","class":"fa-parking-circle-slash"},{"prefix":"far","class":"fa-parking-slash"},{"prefix":"far","class":"fa-passport"},{"prefix":"far","class":"fa-pastafarianism"},{"prefix":"far","class":"fa-paste"},{"prefix":"far","class":"fa-pause"},{"prefix":"far","class":"fa-pause-circle"},{"prefix":"far","class":"fa-paw"},{"prefix":"far","class":"fa-paw-alt"},{"prefix":"far","class":"fa-paw-claws"},{"prefix":"far","class":"fa-peace"},{"prefix":"far","class":"fa-pegasus"},{"prefix":"far","class":"fa-pen"},{"prefix":"far","class":"fa-pen-alt"},{"prefix":"far","class":"fa-pen-fancy"},{"prefix":"far","class":"fa-pen-nib"},{"prefix":"far","class":"fa-pen-square"},{"prefix":"far","class":"fa-pencil"},{"prefix":"far","class":"fa-pencil-alt"},{"prefix":"far","class":"fa-pencil-paintbrush"},{"prefix":"far","class":"fa-pencil-ruler"},{"prefix":"far","class":"fa-pennant"},{"prefix":"far","class":"fa-people-arrows"},{"prefix":"far","class":"fa-people-carry"},{"prefix":"far","class":"fa-pepper-hot"},{"prefix":"far","class":"fa-percent"},{"prefix":"far","class":"fa-percentage"},{"prefix":"far","class":"fa-person-booth"},{"prefix":"far","class":"fa-person-carry"},{"prefix":"far","class":"fa-person-dolly"},{"prefix":"far","class":"fa-person-dolly-empty"},{"prefix":"far","class":"fa-person-sign"},{"prefix":"far","class":"fa-phone"},{"prefix":"far","class":"fa-phone-alt"},{"prefix":"far","class":"fa-phone-laptop"},{"prefix":"far","class":"fa-phone-office"},{"prefix":"far","class":"fa-phone-plus"},{"prefix":"far","class":"fa-phone-rotary"},{"prefix":"far","class":"fa-phone-slash"},{"prefix":"far","class":"fa-phone-square"},{"prefix":"far","class":"fa-phone-square-alt"},{"prefix":"far","class":"fa-phone-volume"},{"prefix":"far","class":"fa-photo-video"},{"prefix":"far","class":"fa-pi"},{"prefix":"far","class":"fa-piano"},{"prefix":"far","class":"fa-piano-keyboard"},{"prefix":"far","class":"fa-pie"},{"prefix":"far","class":"fa-pig"},{"prefix":"far","class":"fa-piggy-bank"},{"prefix":"far","class":"fa-pills"},{"prefix":"far","class":"fa-pizza"},{"prefix":"far","class":"fa-pizza-slice"},{"prefix":"far","class":"fa-place-of-worship"},{"prefix":"far","class":"fa-plane"},{"prefix":"far","class":"fa-plane-alt"},{"prefix":"far","class":"fa-plane-arrival"},{"prefix":"far","class":"fa-plane-departure"},{"prefix":"far","class":"fa-plane-slash"},{"prefix":"far","class":"fa-planet-moon"},{"prefix":"far","class":"fa-planet-ringed"},{"prefix":"far","class":"fa-play"},{"prefix":"far","class":"fa-play-circle"},{"prefix":"far","class":"fa-plug"},{"prefix":"far","class":"fa-plus"},{"prefix":"far","class":"fa-plus-circle"},{"prefix":"far","class":"fa-plus-hexagon"},{"prefix":"far","class":"fa-plus-octagon"},{"prefix":"far","class":"fa-plus-square"},{"prefix":"far","class":"fa-podcast"},{"prefix":"far","class":"fa-podium"},{"prefix":"far","class":"fa-podium-star"},{"prefix":"far","class":"fa-police-box"},{"prefix":"far","class":"fa-poll"},{"prefix":"far","class":"fa-poll-h"},{"prefix":"far","class":"fa-poll-people"},{"prefix":"far","class":"fa-poo"},{"prefix":"far","class":"fa-poo-storm"},{"prefix":"far","class":"fa-poop"},{"prefix":"far","class":"fa-popcorn"},{"prefix":"far","class":"fa-portal-enter"},{"prefix":"far","class":"fa-portal-exit"},{"prefix":"far","class":"fa-portrait"},{"prefix":"far","class":"fa-pound-sign"},{"prefix":"far","class":"fa-power-off"},{"prefix":"far","class":"fa-pray"},{"prefix":"far","class":"fa-praying-hands"},{"prefix":"far","class":"fa-prescription"},{"prefix":"far","class":"fa-prescription-bottle"},{"prefix":"far","class":"fa-prescription-bottle-alt"},{"prefix":"far","class":"fa-presentation"},{"prefix":"far","class":"fa-print"},{"prefix":"far","class":"fa-print-search"},{"prefix":"far","class":"fa-print-slash"},{"prefix":"far","class":"fa-procedures"},{"prefix":"far","class":"fa-project-diagram"},{"prefix":"far","class":"fa-projector"},{"prefix":"far","class":"fa-pump-medical"},{"prefix":"far","class":"fa-pump-soap"},{"prefix":"far","class":"fa-pumpkin"},{"prefix":"far","class":"fa-puzzle-piece"},{"prefix":"far","class":"fa-qrcode"},{"prefix":"far","class":"fa-question"},{"prefix":"far","class":"fa-question-circle"},{"prefix":"far","class":"fa-question-square"},{"prefix":"far","class":"fa-quidditch"},{"prefix":"far","class":"fa-quote-left"},{"prefix":"far","class":"fa-quote-right"},{"prefix":"far","class":"fa-quran"},{"prefix":"far","class":"fa-rabbit"},{"prefix":"far","class":"fa-rabbit-fast"},{"prefix":"far","class":"fa-racquet"},{"prefix":"far","class":"fa-radar"},{"prefix":"far","class":"fa-radiation"},{"prefix":"far","class":"fa-radiation-alt"},{"prefix":"far","class":"fa-radio"},{"prefix":"far","class":"fa-radio-alt"},{"prefix":"far","class":"fa-rainbow"},{"prefix":"far","class":"fa-raindrops"},{"prefix":"far","class":"fa-ram"},{"prefix":"far","class":"fa-ramp-loading"},{"prefix":"far","class":"fa-random"},{"prefix":"far","class":"fa-raygun"},{"prefix":"far","class":"fa-receipt"},{"prefix":"far","class":"fa-record-vinyl"},{"prefix":"far","class":"fa-rectangle-landscape"},{"prefix":"far","class":"fa-rectangle-portrait"},{"prefix":"far","class":"fa-rectangle-wide"},{"prefix":"far","class":"fa-recycle"},{"prefix":"far","class":"fa-redo"},{"prefix":"far","class":"fa-redo-alt"},{"prefix":"far","class":"fa-refrigerator"},{"prefix":"far","class":"fa-registered"},{"prefix":"far","class":"fa-remove-format"},{"prefix":"far","class":"fa-repeat"},{"prefix":"far","class":"fa-repeat-1"},{"prefix":"far","class":"fa-repeat-1-alt"},{"prefix":"far","class":"fa-repeat-alt"},{"prefix":"far","class":"fa-reply"},{"prefix":"far","class":"fa-reply-all"},{"prefix":"far","class":"fa-republican"},{"prefix":"far","class":"fa-restroom"},{"prefix":"far","class":"fa-retweet"},{"prefix":"far","class":"fa-retweet-alt"},{"prefix":"far","class":"fa-ribbon"},{"prefix":"far","class":"fa-ring"},{"prefix":"far","class":"fa-rings-wedding"},{"prefix":"far","class":"fa-road"},{"prefix":"far","class":"fa-robot"},{"prefix":"far","class":"fa-rocket"},{"prefix":"far","class":"fa-rocket-launch"},{"prefix":"far","class":"fa-route"},{"prefix":"far","class":"fa-route-highway"},{"prefix":"far","class":"fa-route-interstate"},{"prefix":"far","class":"fa-router"},{"prefix":"far","class":"fa-rss"},{"prefix":"far","class":"fa-rss-square"},{"prefix":"far","class":"fa-ruble-sign"},{"prefix":"far","class":"fa-ruler"},{"prefix":"far","class":"fa-ruler-combined"},{"prefix":"far","class":"fa-ruler-horizontal"},{"prefix":"far","class":"fa-ruler-triangle"},{"prefix":"far","class":"fa-ruler-vertical"},{"prefix":"far","class":"fa-running"},{"prefix":"far","class":"fa-rupee-sign"},{"prefix":"far","class":"fa-rv"},{"prefix":"far","class":"fa-sack"},{"prefix":"far","class":"fa-sack-dollar"},{"prefix":"far","class":"fa-sad-cry"},{"prefix":"far","class":"fa-sad-tear"},{"prefix":"far","class":"fa-salad"},{"prefix":"far","class":"fa-sandwich"},{"prefix":"far","class":"fa-satellite"},{"prefix":"far","class":"fa-satellite-dish"},{"prefix":"far","class":"fa-sausage"},{"prefix":"far","class":"fa-save"},{"prefix":"far","class":"fa-sax-hot"},{"prefix":"far","class":"fa-saxophone"},{"prefix":"far","class":"fa-scalpel"},{"prefix":"far","class":"fa-scalpel-path"},{"prefix":"far","class":"fa-scanner"},{"prefix":"far","class":"fa-scanner-image"},{"prefix":"far","class":"fa-scanner-keyboard"},{"prefix":"far","class":"fa-scanner-touchscreen"},{"prefix":"far","class":"fa-scarecrow"},{"prefix":"far","class":"fa-scarf"},{"prefix":"far","class":"fa-school"},{"prefix":"far","class":"fa-screwdriver"},{"prefix":"far","class":"fa-scroll"},{"prefix":"far","class":"fa-scroll-old"},{"prefix":"far","class":"fa-scrubber"},{"prefix":"far","class":"fa-scythe"},{"prefix":"far","class":"fa-sd-card"},{"prefix":"far","class":"fa-search"},{"prefix":"far","class":"fa-search-dollar"},{"prefix":"far","class":"fa-search-location"},{"prefix":"far","class":"fa-search-minus"},{"prefix":"far","class":"fa-search-plus"},{"prefix":"far","class":"fa-seedling"},{"prefix":"far","class":"fa-send-back"},{"prefix":"far","class":"fa-send-backward"},{"prefix":"far","class":"fa-sensor"},{"prefix":"far","class":"fa-sensor-alert"},{"prefix":"far","class":"fa-sensor-fire"},{"prefix":"far","class":"fa-sensor-on"},{"prefix":"far","class":"fa-sensor-smoke"},{"prefix":"far","class":"fa-server"},{"prefix":"far","class":"fa-shapes"},{"prefix":"far","class":"fa-share"},{"prefix":"far","class":"fa-share-all"},{"prefix":"far","class":"fa-share-alt"},{"prefix":"far","class":"fa-share-alt-square"},{"prefix":"far","class":"fa-share-square"},{"prefix":"far","class":"fa-sheep"},{"prefix":"far","class":"fa-shekel-sign"},{"prefix":"far","class":"fa-shield"},{"prefix":"far","class":"fa-shield-alt"},{"prefix":"far","class":"fa-shield-check"},{"prefix":"far","class":"fa-shield-cross"},{"prefix":"far","class":"fa-shield-virus"},{"prefix":"far","class":"fa-ship"},{"prefix":"far","class":"fa-shipping-fast"},{"prefix":"far","class":"fa-shipping-timed"},{"prefix":"far","class":"fa-shish-kebab"},{"prefix":"far","class":"fa-shoe-prints"},{"prefix":"far","class":"fa-shopping-bag"},{"prefix":"far","class":"fa-shopping-basket"},{"prefix":"far","class":"fa-shopping-cart"},{"prefix":"far","class":"fa-shovel"},{"prefix":"far","class":"fa-shovel-snow"},{"prefix":"far","class":"fa-shower"},{"prefix":"far","class":"fa-shredder"},{"prefix":"far","class":"fa-shuttle-van"},{"prefix":"far","class":"fa-shuttlecock"},{"prefix":"far","class":"fa-sickle"},{"prefix":"far","class":"fa-sigma"},{"prefix":"far","class":"fa-sign"},{"prefix":"far","class":"fa-sign-in"},{"prefix":"far","class":"fa-sign-in-alt"},{"prefix":"far","class":"fa-sign-language"},{"prefix":"far","class":"fa-sign-out"},{"prefix":"far","class":"fa-sign-out-alt"},{"prefix":"far","class":"fa-signal"},{"prefix":"far","class":"fa-signal-1"},{"prefix":"far","class":"fa-signal-2"},{"prefix":"far","class":"fa-signal-3"},{"prefix":"far","class":"fa-signal-4"},{"prefix":"far","class":"fa-signal-alt"},{"prefix":"far","class":"fa-signal-alt-1"},{"prefix":"far","class":"fa-signal-alt-2"},{"prefix":"far","class":"fa-signal-alt-3"},{"prefix":"far","class":"fa-signal-alt-slash"},{"prefix":"far","class":"fa-signal-slash"},{"prefix":"far","class":"fa-signal-stream"},{"prefix":"far","class":"fa-signature"},{"prefix":"far","class":"fa-sim-card"},{"prefix":"far","class":"fa-sink"},{"prefix":"far","class":"fa-siren"},{"prefix":"far","class":"fa-siren-on"},{"prefix":"far","class":"fa-sitemap"},{"prefix":"far","class":"fa-skating"},{"prefix":"far","class":"fa-skeleton"},{"prefix":"far","class":"fa-ski-jump"},{"prefix":"far","class":"fa-ski-lift"},{"prefix":"far","class":"fa-skiing"},{"prefix":"far","class":"fa-skiing-nordic"},{"prefix":"far","class":"fa-skull"},{"prefix":"far","class":"fa-skull-cow"},{"prefix":"far","class":"fa-skull-crossbones"},{"prefix":"far","class":"fa-slash"},{"prefix":"far","class":"fa-sledding"},{"prefix":"far","class":"fa-sleigh"},{"prefix":"far","class":"fa-sliders-h"},{"prefix":"far","class":"fa-sliders-h-square"},{"prefix":"far","class":"fa-sliders-v"},{"prefix":"far","class":"fa-sliders-v-square"},{"prefix":"far","class":"fa-smile"},{"prefix":"far","class":"fa-smile-beam"},{"prefix":"far","class":"fa-smile-plus"},{"prefix":"far","class":"fa-smile-wink"},{"prefix":"far","class":"fa-smog"},{"prefix":"far","class":"fa-smoke"},{"prefix":"far","class":"fa-smoking"},{"prefix":"far","class":"fa-smoking-ban"},{"prefix":"far","class":"fa-sms"},{"prefix":"far","class":"fa-snake"},{"prefix":"far","class":"fa-snooze"},{"prefix":"far","class":"fa-snow-blowing"},{"prefix":"far","class":"fa-snowboarding"},{"prefix":"far","class":"fa-snowflake"},{"prefix":"far","class":"fa-snowflakes"},{"prefix":"far","class":"fa-snowman"},{"prefix":"far","class":"fa-snowmobile"},{"prefix":"far","class":"fa-snowplow"},{"prefix":"far","class":"fa-soap"},{"prefix":"far","class":"fa-socks"},{"prefix":"far","class":"fa-solar-panel"},{"prefix":"far","class":"fa-solar-system"},{"prefix":"far","class":"fa-sort"},{"prefix":"far","class":"fa-sort-alpha-down"},{"prefix":"far","class":"fa-sort-alpha-down-alt"},{"prefix":"far","class":"fa-sort-alpha-up"},{"prefix":"far","class":"fa-sort-alpha-up-alt"},{"prefix":"far","class":"fa-sort-alt"},{"prefix":"far","class":"fa-sort-amount-down"},{"prefix":"far","class":"fa-sort-amount-down-alt"},{"prefix":"far","class":"fa-sort-amount-up"},{"prefix":"far","class":"fa-sort-amount-up-alt"},{"prefix":"far","class":"fa-sort-circle"},{"prefix":"far","class":"fa-sort-circle-down"},{"prefix":"far","class":"fa-sort-circle-up"},{"prefix":"far","class":"fa-sort-down"},{"prefix":"far","class":"fa-sort-numeric-down"},{"prefix":"far","class":"fa-sort-numeric-down-alt"},{"prefix":"far","class":"fa-sort-numeric-up"},{"prefix":"far","class":"fa-sort-numeric-up-alt"},{"prefix":"far","class":"fa-sort-shapes-down"},{"prefix":"far","class":"fa-sort-shapes-down-alt"},{"prefix":"far","class":"fa-sort-shapes-up"},{"prefix":"far","class":"fa-sort-shapes-up-alt"},{"prefix":"far","class":"fa-sort-size-down"},{"prefix":"far","class":"fa-sort-size-down-alt"},{"prefix":"far","class":"fa-sort-size-up"},{"prefix":"far","class":"fa-sort-size-up-alt"},{"prefix":"far","class":"fa-sort-up"},{"prefix":"far","class":"fa-soup"},{"prefix":"far","class":"fa-spa"},{"prefix":"far","class":"fa-space-shuttle"},{"prefix":"far","class":"fa-space-station-moon"},{"prefix":"far","class":"fa-space-station-moon-alt"},{"prefix":"far","class":"fa-spade"},{"prefix":"far","class":"fa-sparkles"},{"prefix":"far","class":"fa-speaker"},{"prefix":"far","class":"fa-speakers"},{"prefix":"far","class":"fa-spell-check"},{"prefix":"far","class":"fa-spider"},{"prefix":"far","class":"fa-spider-black-widow"},{"prefix":"far","class":"fa-spider-web"},{"prefix":"far","class":"fa-spinner"},{"prefix":"far","class":"fa-spinner-third"},{"prefix":"far","class":"fa-splotch"},{"prefix":"far","class":"fa-spray-can"},{"prefix":"far","class":"fa-sprinkler"},{"prefix":"far","class":"fa-square"},{"prefix":"far","class":"fa-square-full"},{"prefix":"far","class":"fa-square-root"},{"prefix":"far","class":"fa-square-root-alt"},{"prefix":"far","class":"fa-squirrel"},{"prefix":"far","class":"fa-staff"},{"prefix":"far","class":"fa-stamp"},{"prefix":"far","class":"fa-star"},{"prefix":"far","class":"fa-star-and-crescent"},{"prefix":"far","class":"fa-star-christmas"},{"prefix":"far","class":"fa-star-exclamation"},{"prefix":"far","class":"fa-star-half"},{"prefix":"far","class":"fa-star-half-alt"},{"prefix":"far","class":"fa-star-of-david"},{"prefix":"far","class":"fa-star-of-life"},{"prefix":"far","class":"fa-star-shooting"},{"prefix":"far","class":"fa-starfighter"},{"prefix":"far","class":"fa-starfighter-alt"},{"prefix":"far","class":"fa-stars"},{"prefix":"far","class":"fa-starship"},{"prefix":"far","class":"fa-starship-freighter"},{"prefix":"far","class":"fa-steak"},{"prefix":"far","class":"fa-steering-wheel"},{"prefix":"far","class":"fa-step-backward"},{"prefix":"far","class":"fa-step-forward"},{"prefix":"far","class":"fa-stethoscope"},{"prefix":"far","class":"fa-sticky-note"},{"prefix":"far","class":"fa-stocking"},{"prefix":"far","class":"fa-stomach"},{"prefix":"far","class":"fa-stop"},{"prefix":"far","class":"fa-stop-circle"},{"prefix":"far","class":"fa-stopwatch"},{"prefix":"far","class":"fa-stopwatch-20"},{"prefix":"far","class":"fa-store"},{"prefix":"far","class":"fa-store-alt"},{"prefix":"far","class":"fa-store-alt-slash"},{"prefix":"far","class":"fa-store-slash"},{"prefix":"far","class":"fa-stream"},{"prefix":"far","class":"fa-street-view"},{"prefix":"far","class":"fa-stretcher"},{"prefix":"far","class":"fa-strikethrough"},{"prefix":"far","class":"fa-stroopwafel"},{"prefix":"far","class":"fa-subscript"},{"prefix":"far","class":"fa-subway"},{"prefix":"far","class":"fa-suitcase"},{"prefix":"far","class":"fa-suitcase-rolling"},{"prefix":"far","class":"fa-sun"},{"prefix":"far","class":"fa-sun-cloud"},{"prefix":"far","class":"fa-sun-dust"},{"prefix":"far","class":"fa-sun-haze"},{"prefix":"far","class":"fa-sunglasses"},{"prefix":"far","class":"fa-sunrise"},{"prefix":"far","class":"fa-sunset"},{"prefix":"far","class":"fa-superscript"},{"prefix":"far","class":"fa-surprise"},{"prefix":"far","class":"fa-swatchbook"},{"prefix":"far","class":"fa-swimmer"},{"prefix":"far","class":"fa-swimming-pool"},{"prefix":"far","class":"fa-sword"},{"prefix":"far","class":"fa-sword-laser"},{"prefix":"far","class":"fa-sword-laser-alt"},{"prefix":"far","class":"fa-swords"},{"prefix":"far","class":"fa-swords-laser"},{"prefix":"far","class":"fa-synagogue"},{"prefix":"far","class":"fa-sync"},{"prefix":"far","class":"fa-sync-alt"},{"prefix":"far","class":"fa-syringe"},{"prefix":"far","class":"fa-table"},{"prefix":"far","class":"fa-table-tennis"},{"prefix":"far","class":"fa-tablet"},{"prefix":"far","class":"fa-tablet-alt"},{"prefix":"far","class":"fa-tablet-android"},{"prefix":"far","class":"fa-tablet-android-alt"},{"prefix":"far","class":"fa-tablet-rugged"},{"prefix":"far","class":"fa-tablets"},{"prefix":"far","class":"fa-tachometer"},{"prefix":"far","class":"fa-tachometer-alt"},{"prefix":"far","class":"fa-tachometer-alt-average"},{"prefix":"far","class":"fa-tachometer-alt-fast"},{"prefix":"far","class":"fa-tachometer-alt-fastest"},{"prefix":"far","class":"fa-tachometer-alt-slow"},{"prefix":"far","class":"fa-tachometer-alt-slowest"},{"prefix":"far","class":"fa-tachometer-average"},{"prefix":"far","class":"fa-tachometer-fast"},{"prefix":"far","class":"fa-tachometer-fastest"},{"prefix":"far","class":"fa-tachometer-slow"},{"prefix":"far","class":"fa-tachometer-slowest"},{"prefix":"far","class":"fa-taco"},{"prefix":"far","class":"fa-tag"},{"prefix":"far","class":"fa-tags"},{"prefix":"far","class":"fa-tally"},{"prefix":"far","class":"fa-tanakh"},{"prefix":"far","class":"fa-tape"},{"prefix":"far","class":"fa-tasks"},{"prefix":"far","class":"fa-tasks-alt"},{"prefix":"far","class":"fa-taxi"},{"prefix":"far","class":"fa-teeth"},{"prefix":"far","class":"fa-teeth-open"},{"prefix":"far","class":"fa-telescope"},{"prefix":"far","class":"fa-temperature-down"},{"prefix":"far","class":"fa-temperature-frigid"},{"prefix":"far","class":"fa-temperature-high"},{"prefix":"far","class":"fa-temperature-hot"},{"prefix":"far","class":"fa-temperature-low"},{"prefix":"far","class":"fa-temperature-up"},{"prefix":"far","class":"fa-tenge"},{"prefix":"far","class":"fa-tennis-ball"},{"prefix":"far","class":"fa-terminal"},{"prefix":"far","class":"fa-text"},{"prefix":"far","class":"fa-text-height"},{"prefix":"far","class":"fa-text-size"},{"prefix":"far","class":"fa-text-width"},{"prefix":"far","class":"fa-th"},{"prefix":"far","class":"fa-th-large"},{"prefix":"far","class":"fa-th-list"},{"prefix":"far","class":"fa-theater-masks"},{"prefix":"far","class":"fa-thermometer"},{"prefix":"far","class":"fa-thermometer-empty"},{"prefix":"far","class":"fa-thermometer-full"},{"prefix":"far","class":"fa-thermometer-half"},{"prefix":"far","class":"fa-thermometer-quarter"},{"prefix":"far","class":"fa-thermometer-three-quarters"},{"prefix":"far","class":"fa-theta"},{"prefix":"far","class":"fa-thumbs-down"},{"prefix":"far","class":"fa-thumbs-up"},{"prefix":"far","class":"fa-thumbtack"},{"prefix":"far","class":"fa-thunderstorm"},{"prefix":"far","class":"fa-thunderstorm-moon"},{"prefix":"far","class":"fa-thunderstorm-sun"},{"prefix":"far","class":"fa-ticket"},{"prefix":"far","class":"fa-ticket-alt"},{"prefix":"far","class":"fa-tilde"},{"prefix":"far","class":"fa-times"},{"prefix":"far","class":"fa-times-circle"},{"prefix":"far","class":"fa-times-hexagon"},{"prefix":"far","class":"fa-times-octagon"},{"prefix":"far","class":"fa-times-square"},{"prefix":"far","class":"fa-tint"},{"prefix":"far","class":"fa-tint-slash"},{"prefix":"far","class":"fa-tire"},{"prefix":"far","class":"fa-tire-flat"},{"prefix":"far","class":"fa-tire-pressure-warning"},{"prefix":"far","class":"fa-tire-rugged"},{"prefix":"far","class":"fa-tired"},{"prefix":"far","class":"fa-toggle-off"},{"prefix":"far","class":"fa-toggle-on"},{"prefix":"far","class":"fa-toilet"},{"prefix":"far","class":"fa-toilet-paper"},{"prefix":"far","class":"fa-toilet-paper-alt"},{"prefix":"far","class":"fa-toilet-paper-slash"},{"prefix":"far","class":"fa-tombstone"},{"prefix":"far","class":"fa-tombstone-alt"},{"prefix":"far","class":"fa-toolbox"},{"prefix":"far","class":"fa-tools"},{"prefix":"far","class":"fa-tooth"},{"prefix":"far","class":"fa-toothbrush"},{"prefix":"far","class":"fa-torah"},{"prefix":"far","class":"fa-torii-gate"},{"prefix":"far","class":"fa-tornado"},{"prefix":"far","class":"fa-tractor"},{"prefix":"far","class":"fa-trademark"},{"prefix":"far","class":"fa-traffic-cone"},{"prefix":"far","class":"fa-traffic-light"},{"prefix":"far","class":"fa-traffic-light-go"},{"prefix":"far","class":"fa-traffic-light-slow"},{"prefix":"far","class":"fa-traffic-light-stop"},{"prefix":"far","class":"fa-trailer"},{"prefix":"far","class":"fa-train"},{"prefix":"far","class":"fa-tram"},{"prefix":"far","class":"fa-transgender"},{"prefix":"far","class":"fa-transgender-alt"},{"prefix":"far","class":"fa-transporter"},{"prefix":"far","class":"fa-transporter-1"},{"prefix":"far","class":"fa-transporter-2"},{"prefix":"far","class":"fa-transporter-3"},{"prefix":"far","class":"fa-transporter-empty"},{"prefix":"far","class":"fa-trash"},{"prefix":"far","class":"fa-trash-alt"},{"prefix":"far","class":"fa-trash-restore"},{"prefix":"far","class":"fa-trash-restore-alt"},{"prefix":"far","class":"fa-trash-undo"},{"prefix":"far","class":"fa-trash-undo-alt"},{"prefix":"far","class":"fa-treasure-chest"},{"prefix":"far","class":"fa-tree"},{"prefix":"far","class":"fa-tree-alt"},{"prefix":"far","class":"fa-tree-christmas"},{"prefix":"far","class":"fa-tree-decorated"},{"prefix":"far","class":"fa-tree-large"},{"prefix":"far","class":"fa-tree-palm"},{"prefix":"far","class":"fa-trees"},{"prefix":"far","class":"fa-triangle"},{"prefix":"far","class":"fa-triangle-music"},{"prefix":"far","class":"fa-trophy"},{"prefix":"far","class":"fa-trophy-alt"},{"prefix":"far","class":"fa-truck"},{"prefix":"far","class":"fa-truck-container"},{"prefix":"far","class":"fa-truck-couch"},{"prefix":"far","class":"fa-truck-loading"},{"prefix":"far","class":"fa-truck-monster"},{"prefix":"far","class":"fa-truck-moving"},{"prefix":"far","class":"fa-truck-pickup"},{"prefix":"far","class":"fa-truck-plow"},{"prefix":"far","class":"fa-truck-ramp"},{"prefix":"far","class":"fa-trumpet"},{"prefix":"far","class":"fa-tshirt"},{"prefix":"far","class":"fa-tty"},{"prefix":"far","class":"fa-turkey"},{"prefix":"far","class":"fa-turntable"},{"prefix":"far","class":"fa-turtle"},{"prefix":"far","class":"fa-tv"},{"prefix":"far","class":"fa-tv-alt"},{"prefix":"far","class":"fa-tv-music"},{"prefix":"far","class":"fa-tv-retro"},{"prefix":"far","class":"fa-typewriter"},{"prefix":"far","class":"fa-ufo"},{"prefix":"far","class":"fa-ufo-beam"},{"prefix":"far","class":"fa-umbrella"},{"prefix":"far","class":"fa-umbrella-beach"},{"prefix":"far","class":"fa-underline"},{"prefix":"far","class":"fa-undo"},{"prefix":"far","class":"fa-undo-alt"},{"prefix":"far","class":"fa-unicorn"},{"prefix":"far","class":"fa-union"},{"prefix":"far","class":"fa-universal-access"},{"prefix":"far","class":"fa-university"},{"prefix":"far","class":"fa-unlink"},{"prefix":"far","class":"fa-unlock"},{"prefix":"far","class":"fa-unlock-alt"},{"prefix":"far","class":"fa-upload"},{"prefix":"far","class":"fa-usb-drive"},{"prefix":"far","class":"fa-usd-circle"},{"prefix":"far","class":"fa-usd-square"},{"prefix":"far","class":"fa-user"},{"prefix":"far","class":"fa-user-alien"},{"prefix":"far","class":"fa-user-alt"},{"prefix":"far","class":"fa-user-alt-slash"},{"prefix":"far","class":"fa-user-astronaut"},{"prefix":"far","class":"fa-user-chart"},{"prefix":"far","class":"fa-user-check"},{"prefix":"far","class":"fa-user-circle"},{"prefix":"far","class":"fa-user-clock"},{"prefix":"far","class":"fa-user-cog"},{"prefix":"far","class":"fa-user-cowboy"},{"prefix":"far","class":"fa-user-crown"},{"prefix":"far","class":"fa-user-edit"},{"prefix":"far","class":"fa-user-friends"},{"prefix":"far","class":"fa-user-graduate"},{"prefix":"far","class":"fa-user-hard-hat"},{"prefix":"far","class":"fa-user-headset"},{"prefix":"far","class":"fa-user-injured"},{"prefix":"far","class":"fa-user-lock"},{"prefix":"far","class":"fa-user-md"},{"prefix":"far","class":"fa-user-md-chat"},{"prefix":"far","class":"fa-user-minus"},{"prefix":"far","class":"fa-user-music"},{"prefix":"far","class":"fa-user-ninja"},{"prefix":"far","class":"fa-user-nurse"},{"prefix":"far","class":"fa-user-plus"},{"prefix":"far","class":"fa-user-robot"},{"prefix":"far","class":"fa-user-secret"},{"prefix":"far","class":"fa-user-shield"},{"prefix":"far","class":"fa-user-slash"},{"prefix":"far","class":"fa-user-tag"},{"prefix":"far","class":"fa-user-tie"},{"prefix":"far","class":"fa-user-times"},{"prefix":"far","class":"fa-user-unlock"},{"prefix":"far","class":"fa-user-visor"},{"prefix":"far","class":"fa-users"},{"prefix":"far","class":"fa-users-class"},{"prefix":"far","class":"fa-users-cog"},{"prefix":"far","class":"fa-users-crown"},{"prefix":"far","class":"fa-users-medical"},{"prefix":"far","class":"fa-users-slash"},{"prefix":"far","class":"fa-utensil-fork"},{"prefix":"far","class":"fa-utensil-knife"},{"prefix":"far","class":"fa-utensil-spoon"},{"prefix":"far","class":"fa-utensils"},{"prefix":"far","class":"fa-utensils-alt"},{"prefix":"far","class":"fa-vacuum"},{"prefix":"far","class":"fa-vacuum-robot"},{"prefix":"far","class":"fa-value-absolute"},{"prefix":"far","class":"fa-vector-square"},{"prefix":"far","class":"fa-venus"},{"prefix":"far","class":"fa-venus-double"},{"prefix":"far","class":"fa-venus-mars"},{"prefix":"far","class":"fa-vest"},{"prefix":"far","class":"fa-vest-patches"},{"prefix":"far","class":"fa-vhs"},{"prefix":"far","class":"fa-vial"},{"prefix":"far","class":"fa-vials"},{"prefix":"far","class":"fa-video"},{"prefix":"far","class":"fa-video-plus"},{"prefix":"far","class":"fa-video-slash"},{"prefix":"far","class":"fa-vihara"},{"prefix":"far","class":"fa-violin"},{"prefix":"far","class":"fa-virus"},{"prefix":"far","class":"fa-virus-slash"},{"prefix":"far","class":"fa-viruses"},{"prefix":"far","class":"fa-voicemail"},{"prefix":"far","class":"fa-volcano"},{"prefix":"far","class":"fa-volleyball-ball"},{"prefix":"far","class":"fa-volume"},{"prefix":"far","class":"fa-volume-down"},{"prefix":"far","class":"fa-volume-mute"},{"prefix":"far","class":"fa-volume-off"},{"prefix":"far","class":"fa-volume-slash"},{"prefix":"far","class":"fa-volume-up"},{"prefix":"far","class":"fa-vote-nay"},{"prefix":"far","class":"fa-vote-yea"},{"prefix":"far","class":"fa-vr-cardboard"},{"prefix":"far","class":"fa-wagon-covered"},{"prefix":"far","class":"fa-walker"},{"prefix":"far","class":"fa-walkie-talkie"},{"prefix":"far","class":"fa-walking"},{"prefix":"far","class":"fa-wallet"},{"prefix":"far","class":"fa-wand"},{"prefix":"far","class":"fa-wand-magic"},{"prefix":"far","class":"fa-warehouse"},{"prefix":"far","class":"fa-warehouse-alt"},{"prefix":"far","class":"fa-washer"},{"prefix":"far","class":"fa-watch"},{"prefix":"far","class":"fa-watch-calculator"},{"prefix":"far","class":"fa-watch-fitness"},{"prefix":"far","class":"fa-water"},{"prefix":"far","class":"fa-water-lower"},{"prefix":"far","class":"fa-water-rise"},{"prefix":"far","class":"fa-wave-sine"},{"prefix":"far","class":"fa-wave-square"},{"prefix":"far","class":"fa-wave-triangle"},{"prefix":"far","class":"fa-waveform"},{"prefix":"far","class":"fa-waveform-path"},{"prefix":"far","class":"fa-webcam"},{"prefix":"far","class":"fa-webcam-slash"},{"prefix":"far","class":"fa-weight"},{"prefix":"far","class":"fa-weight-hanging"},{"prefix":"far","class":"fa-whale"},{"prefix":"far","class":"fa-wheat"},{"prefix":"far","class":"fa-wheelchair"},{"prefix":"far","class":"fa-whistle"},{"prefix":"far","class":"fa-wifi"},{"prefix":"far","class":"fa-wifi-1"},{"prefix":"far","class":"fa-wifi-2"},{"prefix":"far","class":"fa-wifi-slash"},{"prefix":"far","class":"fa-wind"},{"prefix":"far","class":"fa-wind-turbine"},{"prefix":"far","class":"fa-wind-warning"},{"prefix":"far","class":"fa-window"},{"prefix":"far","class":"fa-window-alt"},{"prefix":"far","class":"fa-window-close"},{"prefix":"far","class":"fa-window-frame"},{"prefix":"far","class":"fa-window-frame-open"},{"prefix":"far","class":"fa-window-maximize"},{"prefix":"far","class":"fa-window-minimize"},{"prefix":"far","class":"fa-window-restore"},{"prefix":"far","class":"fa-windsock"},{"prefix":"far","class":"fa-wine-bottle"},{"prefix":"far","class":"fa-wine-glass"},{"prefix":"far","class":"fa-wine-glass-alt"},{"prefix":"far","class":"fa-won-sign"},{"prefix":"far","class":"fa-wreath"},{"prefix":"far","class":"fa-wrench"},{"prefix":"far","class":"fa-x-ray"},{"prefix":"far","class":"fa-yen-sign"},{"prefix":"far","class":"fa-yin-yang"}]');

/***/ }),

/***/ "./src/assets/solid.json":
/*!*******************************!*\
  !*** ./src/assets/solid.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"prefix":"fas","class":"fa-abacus"},{"prefix":"fas","class":"fa-acorn"},{"prefix":"fas","class":"fa-ad"},{"prefix":"fas","class":"fa-address-book"},{"prefix":"fas","class":"fa-address-card"},{"prefix":"fas","class":"fa-adjust"},{"prefix":"fas","class":"fa-air-conditioner"},{"prefix":"fas","class":"fa-air-freshener"},{"prefix":"fas","class":"fa-alarm-clock"},{"prefix":"fas","class":"fa-alarm-exclamation"},{"prefix":"fas","class":"fa-alarm-plus"},{"prefix":"fas","class":"fa-alarm-snooze"},{"prefix":"fas","class":"fa-album"},{"prefix":"fas","class":"fa-album-collection"},{"prefix":"fas","class":"fa-alicorn"},{"prefix":"fas","class":"fa-alien"},{"prefix":"fas","class":"fa-alien-monster"},{"prefix":"fas","class":"fa-align-center"},{"prefix":"fas","class":"fa-align-justify"},{"prefix":"fas","class":"fa-align-left"},{"prefix":"fas","class":"fa-align-right"},{"prefix":"fas","class":"fa-align-slash"},{"prefix":"fas","class":"fa-allergies"},{"prefix":"fas","class":"fa-ambulance"},{"prefix":"fas","class":"fa-american-sign-language-interpreting"},{"prefix":"fas","class":"fa-amp-guitar"},{"prefix":"fas","class":"fa-analytics"},{"prefix":"fas","class":"fa-anchor"},{"prefix":"fas","class":"fa-angel"},{"prefix":"fas","class":"fa-angle-double-down"},{"prefix":"fas","class":"fa-angle-double-left"},{"prefix":"fas","class":"fa-angle-double-right"},{"prefix":"fas","class":"fa-angle-double-up"},{"prefix":"fas","class":"fa-angle-down"},{"prefix":"fas","class":"fa-angle-left"},{"prefix":"fas","class":"fa-angle-right"},{"prefix":"fas","class":"fa-angle-up"},{"prefix":"fas","class":"fa-angry"},{"prefix":"fas","class":"fa-ankh"},{"prefix":"fas","class":"fa-apple-alt"},{"prefix":"fas","class":"fa-apple-crate"},{"prefix":"fas","class":"fa-archive"},{"prefix":"fas","class":"fa-archway"},{"prefix":"fas","class":"fa-arrow-alt-circle-down"},{"prefix":"fas","class":"fa-arrow-alt-circle-left"},{"prefix":"fas","class":"fa-arrow-alt-circle-right"},{"prefix":"fas","class":"fa-arrow-alt-circle-up"},{"prefix":"fas","class":"fa-arrow-alt-down"},{"prefix":"fas","class":"fa-arrow-alt-from-bottom"},{"prefix":"fas","class":"fa-arrow-alt-from-left"},{"prefix":"fas","class":"fa-arrow-alt-from-right"},{"prefix":"fas","class":"fa-arrow-alt-from-top"},{"prefix":"fas","class":"fa-arrow-alt-left"},{"prefix":"fas","class":"fa-arrow-alt-right"},{"prefix":"fas","class":"fa-arrow-alt-square-down"},{"prefix":"fas","class":"fa-arrow-alt-square-left"},{"prefix":"fas","class":"fa-arrow-alt-square-right"},{"prefix":"fas","class":"fa-arrow-alt-square-up"},{"prefix":"fas","class":"fa-arrow-alt-to-bottom"},{"prefix":"fas","class":"fa-arrow-alt-to-left"},{"prefix":"fas","class":"fa-arrow-alt-to-right"},{"prefix":"fas","class":"fa-arrow-alt-to-top"},{"prefix":"fas","class":"fa-arrow-alt-up"},{"prefix":"fas","class":"fa-arrow-circle-down"},{"prefix":"fas","class":"fa-arrow-circle-left"},{"prefix":"fas","class":"fa-arrow-circle-right"},{"prefix":"fas","class":"fa-arrow-circle-up"},{"prefix":"fas","class":"fa-arrow-down"},{"prefix":"fas","class":"fa-arrow-from-bottom"},{"prefix":"fas","class":"fa-arrow-from-left"},{"prefix":"fas","class":"fa-arrow-from-right"},{"prefix":"fas","class":"fa-arrow-from-top"},{"prefix":"fas","class":"fa-arrow-left"},{"prefix":"fas","class":"fa-arrow-right"},{"prefix":"fas","class":"fa-arrow-square-down"},{"prefix":"fas","class":"fa-arrow-square-left"},{"prefix":"fas","class":"fa-arrow-square-right"},{"prefix":"fas","class":"fa-arrow-square-up"},{"prefix":"fas","class":"fa-arrow-to-bottom"},{"prefix":"fas","class":"fa-arrow-to-left"},{"prefix":"fas","class":"fa-arrow-to-right"},{"prefix":"fas","class":"fa-arrow-to-top"},{"prefix":"fas","class":"fa-arrow-up"},{"prefix":"fas","class":"fa-arrows"},{"prefix":"fas","class":"fa-arrows-alt"},{"prefix":"fas","class":"fa-arrows-alt-h"},{"prefix":"fas","class":"fa-arrows-alt-v"},{"prefix":"fas","class":"fa-arrows-h"},{"prefix":"fas","class":"fa-arrows-v"},{"prefix":"fas","class":"fa-assistive-listening-systems"},{"prefix":"fas","class":"fa-asterisk"},{"prefix":"fas","class":"fa-at"},{"prefix":"fas","class":"fa-atlas"},{"prefix":"fas","class":"fa-atom"},{"prefix":"fas","class":"fa-atom-alt"},{"prefix":"fas","class":"fa-audio-description"},{"prefix":"fas","class":"fa-award"},{"prefix":"fas","class":"fa-axe"},{"prefix":"fas","class":"fa-axe-battle"},{"prefix":"fas","class":"fa-baby"},{"prefix":"fas","class":"fa-baby-carriage"},{"prefix":"fas","class":"fa-backpack"},{"prefix":"fas","class":"fa-backspace"},{"prefix":"fas","class":"fa-backward"},{"prefix":"fas","class":"fa-bacon"},{"prefix":"fas","class":"fa-bacteria"},{"prefix":"fas","class":"fa-bacterium"},{"prefix":"fas","class":"fa-badge"},{"prefix":"fas","class":"fa-badge-check"},{"prefix":"fas","class":"fa-badge-dollar"},{"prefix":"fas","class":"fa-badge-percent"},{"prefix":"fas","class":"fa-badge-sheriff"},{"prefix":"fas","class":"fa-badger-honey"},{"prefix":"fas","class":"fa-bags-shopping"},{"prefix":"fas","class":"fa-bahai"},{"prefix":"fas","class":"fa-balance-scale"},{"prefix":"fas","class":"fa-balance-scale-left"},{"prefix":"fas","class":"fa-balance-scale-right"},{"prefix":"fas","class":"fa-ball-pile"},{"prefix":"fas","class":"fa-ballot"},{"prefix":"fas","class":"fa-ballot-check"},{"prefix":"fas","class":"fa-ban"},{"prefix":"fas","class":"fa-band-aid"},{"prefix":"fas","class":"fa-banjo"},{"prefix":"fas","class":"fa-barcode"},{"prefix":"fas","class":"fa-barcode-alt"},{"prefix":"fas","class":"fa-barcode-read"},{"prefix":"fas","class":"fa-barcode-scan"},{"prefix":"fas","class":"fa-bars"},{"prefix":"fas","class":"fa-baseball"},{"prefix":"fas","class":"fa-baseball-ball"},{"prefix":"fas","class":"fa-basketball-ball"},{"prefix":"fas","class":"fa-basketball-hoop"},{"prefix":"fas","class":"fa-bat"},{"prefix":"fas","class":"fa-bath"},{"prefix":"fas","class":"fa-battery-bolt"},{"prefix":"fas","class":"fa-battery-empty"},{"prefix":"fas","class":"fa-battery-full"},{"prefix":"fas","class":"fa-battery-half"},{"prefix":"fas","class":"fa-battery-quarter"},{"prefix":"fas","class":"fa-battery-slash"},{"prefix":"fas","class":"fa-battery-three-quarters"},{"prefix":"fas","class":"fa-bed"},{"prefix":"fas","class":"fa-bed-alt"},{"prefix":"fas","class":"fa-bed-bunk"},{"prefix":"fas","class":"fa-bed-empty"},{"prefix":"fas","class":"fa-beer"},{"prefix":"fas","class":"fa-bell"},{"prefix":"fas","class":"fa-bell-exclamation"},{"prefix":"fas","class":"fa-bell-on"},{"prefix":"fas","class":"fa-bell-plus"},{"prefix":"fas","class":"fa-bell-school"},{"prefix":"fas","class":"fa-bell-school-slash"},{"prefix":"fas","class":"fa-bell-slash"},{"prefix":"fas","class":"fa-bells"},{"prefix":"fas","class":"fa-betamax"},{"prefix":"fas","class":"fa-bezier-curve"},{"prefix":"fas","class":"fa-bible"},{"prefix":"fas","class":"fa-bicycle"},{"prefix":"fas","class":"fa-biking"},{"prefix":"fas","class":"fa-biking-mountain"},{"prefix":"fas","class":"fa-binoculars"},{"prefix":"fas","class":"fa-biohazard"},{"prefix":"fas","class":"fa-birthday-cake"},{"prefix":"fas","class":"fa-blanket"},{"prefix":"fas","class":"fa-blender"},{"prefix":"fas","class":"fa-blender-phone"},{"prefix":"fas","class":"fa-blind"},{"prefix":"fas","class":"fa-blinds"},{"prefix":"fas","class":"fa-blinds-open"},{"prefix":"fas","class":"fa-blinds-raised"},{"prefix":"fas","class":"fa-blog"},{"prefix":"fas","class":"fa-bold"},{"prefix":"fas","class":"fa-bolt"},{"prefix":"fas","class":"fa-bomb"},{"prefix":"fas","class":"fa-bone"},{"prefix":"fas","class":"fa-bone-break"},{"prefix":"fas","class":"fa-bong"},{"prefix":"fas","class":"fa-book"},{"prefix":"fas","class":"fa-book-alt"},{"prefix":"fas","class":"fa-book-dead"},{"prefix":"fas","class":"fa-book-heart"},{"prefix":"fas","class":"fa-book-medical"},{"prefix":"fas","class":"fa-book-open"},{"prefix":"fas","class":"fa-book-reader"},{"prefix":"fas","class":"fa-book-spells"},{"prefix":"fas","class":"fa-book-user"},{"prefix":"fas","class":"fa-bookmark"},{"prefix":"fas","class":"fa-books"},{"prefix":"fas","class":"fa-books-medical"},{"prefix":"fas","class":"fa-boombox"},{"prefix":"fas","class":"fa-boot"},{"prefix":"fas","class":"fa-booth-curtain"},{"prefix":"fas","class":"fa-border-all"},{"prefix":"fas","class":"fa-border-bottom"},{"prefix":"fas","class":"fa-border-center-h"},{"prefix":"fas","class":"fa-border-center-v"},{"prefix":"fas","class":"fa-border-inner"},{"prefix":"fas","class":"fa-border-left"},{"prefix":"fas","class":"fa-border-none"},{"prefix":"fas","class":"fa-border-outer"},{"prefix":"fas","class":"fa-border-right"},{"prefix":"fas","class":"fa-border-style"},{"prefix":"fas","class":"fa-border-style-alt"},{"prefix":"fas","class":"fa-border-top"},{"prefix":"fas","class":"fa-bow-arrow"},{"prefix":"fas","class":"fa-bowling-ball"},{"prefix":"fas","class":"fa-bowling-pins"},{"prefix":"fas","class":"fa-box"},{"prefix":"fas","class":"fa-box-alt"},{"prefix":"fas","class":"fa-box-ballot"},{"prefix":"fas","class":"fa-box-check"},{"prefix":"fas","class":"fa-box-fragile"},{"prefix":"fas","class":"fa-box-full"},{"prefix":"fas","class":"fa-box-heart"},{"prefix":"fas","class":"fa-box-open"},{"prefix":"fas","class":"fa-box-tissue"},{"prefix":"fas","class":"fa-box-up"},{"prefix":"fas","class":"fa-box-usd"},{"prefix":"fas","class":"fa-boxes"},{"prefix":"fas","class":"fa-boxes-alt"},{"prefix":"fas","class":"fa-boxing-glove"},{"prefix":"fas","class":"fa-brackets"},{"prefix":"fas","class":"fa-brackets-curly"},{"prefix":"fas","class":"fa-braille"},{"prefix":"fas","class":"fa-brain"},{"prefix":"fas","class":"fa-bread-loaf"},{"prefix":"fas","class":"fa-bread-slice"},{"prefix":"fas","class":"fa-briefcase"},{"prefix":"fas","class":"fa-briefcase-medical"},{"prefix":"fas","class":"fa-bring-forward"},{"prefix":"fas","class":"fa-bring-front"},{"prefix":"fas","class":"fa-broadcast-tower"},{"prefix":"fas","class":"fa-broom"},{"prefix":"fas","class":"fa-browser"},{"prefix":"fas","class":"fa-brush"},{"prefix":"fas","class":"fa-bug"},{"prefix":"fas","class":"fa-building"},{"prefix":"fas","class":"fa-bullhorn"},{"prefix":"fas","class":"fa-bullseye"},{"prefix":"fas","class":"fa-bullseye-arrow"},{"prefix":"fas","class":"fa-bullseye-pointer"},{"prefix":"fas","class":"fa-burger-soda"},{"prefix":"fas","class":"fa-burn"},{"prefix":"fas","class":"fa-burrito"},{"prefix":"fas","class":"fa-bus"},{"prefix":"fas","class":"fa-bus-alt"},{"prefix":"fas","class":"fa-bus-school"},{"prefix":"fas","class":"fa-business-time"},{"prefix":"fas","class":"fa-cabinet-filing"},{"prefix":"fas","class":"fa-cactus"},{"prefix":"fas","class":"fa-calculator"},{"prefix":"fas","class":"fa-calculator-alt"},{"prefix":"fas","class":"fa-calendar"},{"prefix":"fas","class":"fa-calendar-alt"},{"prefix":"fas","class":"fa-calendar-check"},{"prefix":"fas","class":"fa-calendar-day"},{"prefix":"fas","class":"fa-calendar-edit"},{"prefix":"fas","class":"fa-calendar-exclamation"},{"prefix":"fas","class":"fa-calendar-minus"},{"prefix":"fas","class":"fa-calendar-plus"},{"prefix":"fas","class":"fa-calendar-star"},{"prefix":"fas","class":"fa-calendar-times"},{"prefix":"fas","class":"fa-calendar-week"},{"prefix":"fas","class":"fa-camcorder"},{"prefix":"fas","class":"fa-camera"},{"prefix":"fas","class":"fa-camera-alt"},{"prefix":"fas","class":"fa-camera-home"},{"prefix":"fas","class":"fa-camera-movie"},{"prefix":"fas","class":"fa-camera-polaroid"},{"prefix":"fas","class":"fa-camera-retro"},{"prefix":"fas","class":"fa-campfire"},{"prefix":"fas","class":"fa-campground"},{"prefix":"fas","class":"fa-candle-holder"},{"prefix":"fas","class":"fa-candy-cane"},{"prefix":"fas","class":"fa-candy-corn"},{"prefix":"fas","class":"fa-cannabis"},{"prefix":"fas","class":"fa-capsules"},{"prefix":"fas","class":"fa-car"},{"prefix":"fas","class":"fa-car-alt"},{"prefix":"fas","class":"fa-car-battery"},{"prefix":"fas","class":"fa-car-building"},{"prefix":"fas","class":"fa-car-bump"},{"prefix":"fas","class":"fa-car-bus"},{"prefix":"fas","class":"fa-car-crash"},{"prefix":"fas","class":"fa-car-garage"},{"prefix":"fas","class":"fa-car-mechanic"},{"prefix":"fas","class":"fa-car-side"},{"prefix":"fas","class":"fa-car-tilt"},{"prefix":"fas","class":"fa-car-wash"},{"prefix":"fas","class":"fa-caravan"},{"prefix":"fas","class":"fa-caravan-alt"},{"prefix":"fas","class":"fa-caret-circle-down"},{"prefix":"fas","class":"fa-caret-circle-left"},{"prefix":"fas","class":"fa-caret-circle-right"},{"prefix":"fas","class":"fa-caret-circle-up"},{"prefix":"fas","class":"fa-caret-down"},{"prefix":"fas","class":"fa-caret-left"},{"prefix":"fas","class":"fa-caret-right"},{"prefix":"fas","class":"fa-caret-square-down"},{"prefix":"fas","class":"fa-caret-square-left"},{"prefix":"fas","class":"fa-caret-square-right"},{"prefix":"fas","class":"fa-caret-square-up"},{"prefix":"fas","class":"fa-caret-up"},{"prefix":"fas","class":"fa-carrot"},{"prefix":"fas","class":"fa-cars"},{"prefix":"fas","class":"fa-cart-arrow-down"},{"prefix":"fas","class":"fa-cart-plus"},{"prefix":"fas","class":"fa-cash-register"},{"prefix":"fas","class":"fa-cassette-tape"},{"prefix":"fas","class":"fa-cat"},{"prefix":"fas","class":"fa-cat-space"},{"prefix":"fas","class":"fa-cauldron"},{"prefix":"fas","class":"fa-cctv"},{"prefix":"fas","class":"fa-certificate"},{"prefix":"fas","class":"fa-chair"},{"prefix":"fas","class":"fa-chair-office"},{"prefix":"fas","class":"fa-chalkboard"},{"prefix":"fas","class":"fa-chalkboard-teacher"},{"prefix":"fas","class":"fa-charging-station"},{"prefix":"fas","class":"fa-chart-area"},{"prefix":"fas","class":"fa-chart-bar"},{"prefix":"fas","class":"fa-chart-line"},{"prefix":"fas","class":"fa-chart-line-down"},{"prefix":"fas","class":"fa-chart-network"},{"prefix":"fas","class":"fa-chart-pie"},{"prefix":"fas","class":"fa-chart-pie-alt"},{"prefix":"fas","class":"fa-chart-scatter"},{"prefix":"fas","class":"fa-check"},{"prefix":"fas","class":"fa-check-circle"},{"prefix":"fas","class":"fa-check-double"},{"prefix":"fas","class":"fa-check-square"},{"prefix":"fas","class":"fa-cheese"},{"prefix":"fas","class":"fa-cheese-swiss"},{"prefix":"fas","class":"fa-cheeseburger"},{"prefix":"fas","class":"fa-chess"},{"prefix":"fas","class":"fa-chess-bishop"},{"prefix":"fas","class":"fa-chess-bishop-alt"},{"prefix":"fas","class":"fa-chess-board"},{"prefix":"fas","class":"fa-chess-clock"},{"prefix":"fas","class":"fa-chess-clock-alt"},{"prefix":"fas","class":"fa-chess-king"},{"prefix":"fas","class":"fa-chess-king-alt"},{"prefix":"fas","class":"fa-chess-knight"},{"prefix":"fas","class":"fa-chess-knight-alt"},{"prefix":"fas","class":"fa-chess-pawn"},{"prefix":"fas","class":"fa-chess-pawn-alt"},{"prefix":"fas","class":"fa-chess-queen"},{"prefix":"fas","class":"fa-chess-queen-alt"},{"prefix":"fas","class":"fa-chess-rook"},{"prefix":"fas","class":"fa-chess-rook-alt"},{"prefix":"fas","class":"fa-chevron-circle-down"},{"prefix":"fas","class":"fa-chevron-circle-left"},{"prefix":"fas","class":"fa-chevron-circle-right"},{"prefix":"fas","class":"fa-chevron-circle-up"},{"prefix":"fas","class":"fa-chevron-double-down"},{"prefix":"fas","class":"fa-chevron-double-left"},{"prefix":"fas","class":"fa-chevron-double-right"},{"prefix":"fas","class":"fa-chevron-double-up"},{"prefix":"fas","class":"fa-chevron-down"},{"prefix":"fas","class":"fa-chevron-left"},{"prefix":"fas","class":"fa-chevron-right"},{"prefix":"fas","class":"fa-chevron-square-down"},{"prefix":"fas","class":"fa-chevron-square-left"},{"prefix":"fas","class":"fa-chevron-square-right"},{"prefix":"fas","class":"fa-chevron-square-up"},{"prefix":"fas","class":"fa-chevron-up"},{"prefix":"fas","class":"fa-child"},{"prefix":"fas","class":"fa-chimney"},{"prefix":"fas","class":"fa-church"},{"prefix":"fas","class":"fa-circle"},{"prefix":"fas","class":"fa-circle-notch"},{"prefix":"fas","class":"fa-city"},{"prefix":"fas","class":"fa-clarinet"},{"prefix":"fas","class":"fa-claw-marks"},{"prefix":"fas","class":"fa-clinic-medical"},{"prefix":"fas","class":"fa-clipboard"},{"prefix":"fas","class":"fa-clipboard-check"},{"prefix":"fas","class":"fa-clipboard-list"},{"prefix":"fas","class":"fa-clipboard-list-check"},{"prefix":"fas","class":"fa-clipboard-prescription"},{"prefix":"fas","class":"fa-clipboard-user"},{"prefix":"fas","class":"fa-clock"},{"prefix":"fas","class":"fa-clone"},{"prefix":"fas","class":"fa-closed-captioning"},{"prefix":"fas","class":"fa-cloud"},{"prefix":"fas","class":"fa-cloud-download"},{"prefix":"fas","class":"fa-cloud-download-alt"},{"prefix":"fas","class":"fa-cloud-drizzle"},{"prefix":"fas","class":"fa-cloud-hail"},{"prefix":"fas","class":"fa-cloud-hail-mixed"},{"prefix":"fas","class":"fa-cloud-meatball"},{"prefix":"fas","class":"fa-cloud-moon"},{"prefix":"fas","class":"fa-cloud-moon-rain"},{"prefix":"fas","class":"fa-cloud-music"},{"prefix":"fas","class":"fa-cloud-rain"},{"prefix":"fas","class":"fa-cloud-rainbow"},{"prefix":"fas","class":"fa-cloud-showers"},{"prefix":"fas","class":"fa-cloud-showers-heavy"},{"prefix":"fas","class":"fa-cloud-sleet"},{"prefix":"fas","class":"fa-cloud-snow"},{"prefix":"fas","class":"fa-cloud-sun"},{"prefix":"fas","class":"fa-cloud-sun-rain"},{"prefix":"fas","class":"fa-cloud-upload"},{"prefix":"fas","class":"fa-cloud-upload-alt"},{"prefix":"fas","class":"fa-clouds"},{"prefix":"fas","class":"fa-clouds-moon"},{"prefix":"fas","class":"fa-clouds-sun"},{"prefix":"fas","class":"fa-club"},{"prefix":"fas","class":"fa-cocktail"},{"prefix":"fas","class":"fa-code"},{"prefix":"fas","class":"fa-code-branch"},{"prefix":"fas","class":"fa-code-commit"},{"prefix":"fas","class":"fa-code-merge"},{"prefix":"fas","class":"fa-coffee"},{"prefix":"fas","class":"fa-coffee-pot"},{"prefix":"fas","class":"fa-coffee-togo"},{"prefix":"fas","class":"fa-coffin"},{"prefix":"fas","class":"fa-coffin-cross"},{"prefix":"fas","class":"fa-cog"},{"prefix":"fas","class":"fa-cogs"},{"prefix":"fas","class":"fa-coin"},{"prefix":"fas","class":"fa-coins"},{"prefix":"fas","class":"fa-columns"},{"prefix":"fas","class":"fa-comet"},{"prefix":"fas","class":"fa-comment"},{"prefix":"fas","class":"fa-comment-alt"},{"prefix":"fas","class":"fa-comment-alt-check"},{"prefix":"fas","class":"fa-comment-alt-dollar"},{"prefix":"fas","class":"fa-comment-alt-dots"},{"prefix":"fas","class":"fa-comment-alt-edit"},{"prefix":"fas","class":"fa-comment-alt-exclamation"},{"prefix":"fas","class":"fa-comment-alt-lines"},{"prefix":"fas","class":"fa-comment-alt-medical"},{"prefix":"fas","class":"fa-comment-alt-minus"},{"prefix":"fas","class":"fa-comment-alt-music"},{"prefix":"fas","class":"fa-comment-alt-plus"},{"prefix":"fas","class":"fa-comment-alt-slash"},{"prefix":"fas","class":"fa-comment-alt-smile"},{"prefix":"fas","class":"fa-comment-alt-times"},{"prefix":"fas","class":"fa-comment-check"},{"prefix":"fas","class":"fa-comment-dollar"},{"prefix":"fas","class":"fa-comment-dots"},{"prefix":"fas","class":"fa-comment-edit"},{"prefix":"fas","class":"fa-comment-exclamation"},{"prefix":"fas","class":"fa-comment-lines"},{"prefix":"fas","class":"fa-comment-medical"},{"prefix":"fas","class":"fa-comment-minus"},{"prefix":"fas","class":"fa-comment-music"},{"prefix":"fas","class":"fa-comment-plus"},{"prefix":"fas","class":"fa-comment-slash"},{"prefix":"fas","class":"fa-comment-smile"},{"prefix":"fas","class":"fa-comment-times"},{"prefix":"fas","class":"fa-comments"},{"prefix":"fas","class":"fa-comments-alt"},{"prefix":"fas","class":"fa-comments-alt-dollar"},{"prefix":"fas","class":"fa-comments-dollar"},{"prefix":"fas","class":"fa-compact-disc"},{"prefix":"fas","class":"fa-compass"},{"prefix":"fas","class":"fa-compass-slash"},{"prefix":"fas","class":"fa-compress"},{"prefix":"fas","class":"fa-compress-alt"},{"prefix":"fas","class":"fa-compress-arrows-alt"},{"prefix":"fas","class":"fa-compress-wide"},{"prefix":"fas","class":"fa-computer-classic"},{"prefix":"fas","class":"fa-computer-speaker"},{"prefix":"fas","class":"fa-concierge-bell"},{"prefix":"fas","class":"fa-construction"},{"prefix":"fas","class":"fa-container-storage"},{"prefix":"fas","class":"fa-conveyor-belt"},{"prefix":"fas","class":"fa-conveyor-belt-alt"},{"prefix":"fas","class":"fa-cookie"},{"prefix":"fas","class":"fa-cookie-bite"},{"prefix":"fas","class":"fa-copy"},{"prefix":"fas","class":"fa-copyright"},{"prefix":"fas","class":"fa-corn"},{"prefix":"fas","class":"fa-couch"},{"prefix":"fas","class":"fa-cow"},{"prefix":"fas","class":"fa-cowbell"},{"prefix":"fas","class":"fa-cowbell-more"},{"prefix":"fas","class":"fa-credit-card"},{"prefix":"fas","class":"fa-credit-card-blank"},{"prefix":"fas","class":"fa-credit-card-front"},{"prefix":"fas","class":"fa-cricket"},{"prefix":"fas","class":"fa-croissant"},{"prefix":"fas","class":"fa-crop"},{"prefix":"fas","class":"fa-crop-alt"},{"prefix":"fas","class":"fa-cross"},{"prefix":"fas","class":"fa-crosshairs"},{"prefix":"fas","class":"fa-crow"},{"prefix":"fas","class":"fa-crown"},{"prefix":"fas","class":"fa-crutch"},{"prefix":"fas","class":"fa-crutches"},{"prefix":"fas","class":"fa-cube"},{"prefix":"fas","class":"fa-cubes"},{"prefix":"fas","class":"fa-curling"},{"prefix":"fas","class":"fa-cut"},{"prefix":"fas","class":"fa-dagger"},{"prefix":"fas","class":"fa-database"},{"prefix":"fas","class":"fa-deaf"},{"prefix":"fas","class":"fa-debug"},{"prefix":"fas","class":"fa-deer"},{"prefix":"fas","class":"fa-deer-rudolph"},{"prefix":"fas","class":"fa-democrat"},{"prefix":"fas","class":"fa-desktop"},{"prefix":"fas","class":"fa-desktop-alt"},{"prefix":"fas","class":"fa-dewpoint"},{"prefix":"fas","class":"fa-dharmachakra"},{"prefix":"fas","class":"fa-diagnoses"},{"prefix":"fas","class":"fa-diamond"},{"prefix":"fas","class":"fa-dice"},{"prefix":"fas","class":"fa-dice-d10"},{"prefix":"fas","class":"fa-dice-d12"},{"prefix":"fas","class":"fa-dice-d20"},{"prefix":"fas","class":"fa-dice-d4"},{"prefix":"fas","class":"fa-dice-d6"},{"prefix":"fas","class":"fa-dice-d8"},{"prefix":"fas","class":"fa-dice-five"},{"prefix":"fas","class":"fa-dice-four"},{"prefix":"fas","class":"fa-dice-one"},{"prefix":"fas","class":"fa-dice-six"},{"prefix":"fas","class":"fa-dice-three"},{"prefix":"fas","class":"fa-dice-two"},{"prefix":"fas","class":"fa-digging"},{"prefix":"fas","class":"fa-digital-tachograph"},{"prefix":"fas","class":"fa-diploma"},{"prefix":"fas","class":"fa-directions"},{"prefix":"fas","class":"fa-disc-drive"},{"prefix":"fas","class":"fa-disease"},{"prefix":"fas","class":"fa-divide"},{"prefix":"fas","class":"fa-dizzy"},{"prefix":"fas","class":"fa-dna"},{"prefix":"fas","class":"fa-do-not-enter"},{"prefix":"fas","class":"fa-dog"},{"prefix":"fas","class":"fa-dog-leashed"},{"prefix":"fas","class":"fa-dollar-sign"},{"prefix":"fas","class":"fa-dolly"},{"prefix":"fas","class":"fa-dolly-empty"},{"prefix":"fas","class":"fa-dolly-flatbed"},{"prefix":"fas","class":"fa-dolly-flatbed-alt"},{"prefix":"fas","class":"fa-dolly-flatbed-empty"},{"prefix":"fas","class":"fa-donate"},{"prefix":"fas","class":"fa-door-closed"},{"prefix":"fas","class":"fa-door-open"},{"prefix":"fas","class":"fa-dot-circle"},{"prefix":"fas","class":"fa-dove"},{"prefix":"fas","class":"fa-download"},{"prefix":"fas","class":"fa-drafting-compass"},{"prefix":"fas","class":"fa-dragon"},{"prefix":"fas","class":"fa-draw-circle"},{"prefix":"fas","class":"fa-draw-polygon"},{"prefix":"fas","class":"fa-draw-square"},{"prefix":"fas","class":"fa-dreidel"},{"prefix":"fas","class":"fa-drone"},{"prefix":"fas","class":"fa-drone-alt"},{"prefix":"fas","class":"fa-drum"},{"prefix":"fas","class":"fa-drum-steelpan"},{"prefix":"fas","class":"fa-drumstick"},{"prefix":"fas","class":"fa-drumstick-bite"},{"prefix":"fas","class":"fa-dryer"},{"prefix":"fas","class":"fa-dryer-alt"},{"prefix":"fas","class":"fa-duck"},{"prefix":"fas","class":"fa-dumbbell"},{"prefix":"fas","class":"fa-dumpster"},{"prefix":"fas","class":"fa-dumpster-fire"},{"prefix":"fas","class":"fa-dungeon"},{"prefix":"fas","class":"fa-ear"},{"prefix":"fas","class":"fa-ear-muffs"},{"prefix":"fas","class":"fa-eclipse"},{"prefix":"fas","class":"fa-eclipse-alt"},{"prefix":"fas","class":"fa-edit"},{"prefix":"fas","class":"fa-egg"},{"prefix":"fas","class":"fa-egg-fried"},{"prefix":"fas","class":"fa-eject"},{"prefix":"fas","class":"fa-elephant"},{"prefix":"fas","class":"fa-ellipsis-h"},{"prefix":"fas","class":"fa-ellipsis-h-alt"},{"prefix":"fas","class":"fa-ellipsis-v"},{"prefix":"fas","class":"fa-ellipsis-v-alt"},{"prefix":"fas","class":"fa-empty-set"},{"prefix":"fas","class":"fa-engine-warning"},{"prefix":"fas","class":"fa-envelope"},{"prefix":"fas","class":"fa-envelope-open"},{"prefix":"fas","class":"fa-envelope-open-dollar"},{"prefix":"fas","class":"fa-envelope-open-text"},{"prefix":"fas","class":"fa-envelope-square"},{"prefix":"fas","class":"fa-equals"},{"prefix":"fas","class":"fa-eraser"},{"prefix":"fas","class":"fa-ethernet"},{"prefix":"fas","class":"fa-euro-sign"},{"prefix":"fas","class":"fa-exchange"},{"prefix":"fas","class":"fa-exchange-alt"},{"prefix":"fas","class":"fa-exclamation"},{"prefix":"fas","class":"fa-exclamation-circle"},{"prefix":"fas","class":"fa-exclamation-square"},{"prefix":"fas","class":"fa-exclamation-triangle"},{"prefix":"fas","class":"fa-expand"},{"prefix":"fas","class":"fa-expand-alt"},{"prefix":"fas","class":"fa-expand-arrows"},{"prefix":"fas","class":"fa-expand-arrows-alt"},{"prefix":"fas","class":"fa-expand-wide"},{"prefix":"fas","class":"fa-external-link"},{"prefix":"fas","class":"fa-external-link-alt"},{"prefix":"fas","class":"fa-external-link-square"},{"prefix":"fas","class":"fa-external-link-square-alt"},{"prefix":"fas","class":"fa-eye"},{"prefix":"fas","class":"fa-eye-dropper"},{"prefix":"fas","class":"fa-eye-evil"},{"prefix":"fas","class":"fa-eye-slash"},{"prefix":"fas","class":"fa-fan"},{"prefix":"fas","class":"fa-fan-table"},{"prefix":"fas","class":"fa-farm"},{"prefix":"fas","class":"fa-fast-backward"},{"prefix":"fas","class":"fa-fast-forward"},{"prefix":"fas","class":"fa-faucet"},{"prefix":"fas","class":"fa-faucet-drip"},{"prefix":"fas","class":"fa-fax"},{"prefix":"fas","class":"fa-feather"},{"prefix":"fas","class":"fa-feather-alt"},{"prefix":"fas","class":"fa-female"},{"prefix":"fas","class":"fa-field-hockey"},{"prefix":"fas","class":"fa-fighter-jet"},{"prefix":"fas","class":"fa-file"},{"prefix":"fas","class":"fa-file-alt"},{"prefix":"fas","class":"fa-file-archive"},{"prefix":"fas","class":"fa-file-audio"},{"prefix":"fas","class":"fa-file-certificate"},{"prefix":"fas","class":"fa-file-chart-line"},{"prefix":"fas","class":"fa-file-chart-pie"},{"prefix":"fas","class":"fa-file-check"},{"prefix":"fas","class":"fa-file-code"},{"prefix":"fas","class":"fa-file-contract"},{"prefix":"fas","class":"fa-file-csv"},{"prefix":"fas","class":"fa-file-download"},{"prefix":"fas","class":"fa-file-edit"},{"prefix":"fas","class":"fa-file-excel"},{"prefix":"fas","class":"fa-file-exclamation"},{"prefix":"fas","class":"fa-file-export"},{"prefix":"fas","class":"fa-file-image"},{"prefix":"fas","class":"fa-file-import"},{"prefix":"fas","class":"fa-file-invoice"},{"prefix":"fas","class":"fa-file-invoice-dollar"},{"prefix":"fas","class":"fa-file-medical"},{"prefix":"fas","class":"fa-file-medical-alt"},{"prefix":"fas","class":"fa-file-minus"},{"prefix":"fas","class":"fa-file-music"},{"prefix":"fas","class":"fa-file-pdf"},{"prefix":"fas","class":"fa-file-plus"},{"prefix":"fas","class":"fa-file-powerpoint"},{"prefix":"fas","class":"fa-file-prescription"},{"prefix":"fas","class":"fa-file-search"},{"prefix":"fas","class":"fa-file-signature"},{"prefix":"fas","class":"fa-file-spreadsheet"},{"prefix":"fas","class":"fa-file-times"},{"prefix":"fas","class":"fa-file-upload"},{"prefix":"fas","class":"fa-file-user"},{"prefix":"fas","class":"fa-file-video"},{"prefix":"fas","class":"fa-file-word"},{"prefix":"fas","class":"fa-files-medical"},{"prefix":"fas","class":"fa-fill"},{"prefix":"fas","class":"fa-fill-drip"},{"prefix":"fas","class":"fa-film"},{"prefix":"fas","class":"fa-film-alt"},{"prefix":"fas","class":"fa-film-canister"},{"prefix":"fas","class":"fa-filter"},{"prefix":"fas","class":"fa-fingerprint"},{"prefix":"fas","class":"fa-fire"},{"prefix":"fas","class":"fa-fire-alt"},{"prefix":"fas","class":"fa-fire-extinguisher"},{"prefix":"fas","class":"fa-fire-smoke"},{"prefix":"fas","class":"fa-fireplace"},{"prefix":"fas","class":"fa-first-aid"},{"prefix":"fas","class":"fa-fish"},{"prefix":"fas","class":"fa-fish-cooked"},{"prefix":"fas","class":"fa-fist-raised"},{"prefix":"fas","class":"fa-flag"},{"prefix":"fas","class":"fa-flag-alt"},{"prefix":"fas","class":"fa-flag-checkered"},{"prefix":"fas","class":"fa-flag-usa"},{"prefix":"fas","class":"fa-flame"},{"prefix":"fas","class":"fa-flashlight"},{"prefix":"fas","class":"fa-flask"},{"prefix":"fas","class":"fa-flask-poison"},{"prefix":"fas","class":"fa-flask-potion"},{"prefix":"fas","class":"fa-flower"},{"prefix":"fas","class":"fa-flower-daffodil"},{"prefix":"fas","class":"fa-flower-tulip"},{"prefix":"fas","class":"fa-flushed"},{"prefix":"fas","class":"fa-flute"},{"prefix":"fas","class":"fa-flux-capacitor"},{"prefix":"fas","class":"fa-fog"},{"prefix":"fas","class":"fa-folder"},{"prefix":"fas","class":"fa-folder-download"},{"prefix":"fas","class":"fa-folder-minus"},{"prefix":"fas","class":"fa-folder-open"},{"prefix":"fas","class":"fa-folder-plus"},{"prefix":"fas","class":"fa-folder-times"},{"prefix":"fas","class":"fa-folder-tree"},{"prefix":"fas","class":"fa-folder-upload"},{"prefix":"fas","class":"fa-folders"},{"prefix":"fas","class":"fa-font"},{"prefix":"fas","class":"fa-font-awesome-logo-full"},{"prefix":"fas","class":"fa-font-case"},{"prefix":"fas","class":"fa-football-ball"},{"prefix":"fas","class":"fa-football-helmet"},{"prefix":"fas","class":"fa-forklift"},{"prefix":"fas","class":"fa-forward"},{"prefix":"fas","class":"fa-fragile"},{"prefix":"fas","class":"fa-french-fries"},{"prefix":"fas","class":"fa-frog"},{"prefix":"fas","class":"fa-frosty-head"},{"prefix":"fas","class":"fa-frown"},{"prefix":"fas","class":"fa-frown-open"},{"prefix":"fas","class":"fa-function"},{"prefix":"fas","class":"fa-funnel-dollar"},{"prefix":"fas","class":"fa-futbol"},{"prefix":"fas","class":"fa-galaxy"},{"prefix":"fas","class":"fa-game-board"},{"prefix":"fas","class":"fa-game-board-alt"},{"prefix":"fas","class":"fa-game-console-handheld"},{"prefix":"fas","class":"fa-gamepad"},{"prefix":"fas","class":"fa-gamepad-alt"},{"prefix":"fas","class":"fa-garage"},{"prefix":"fas","class":"fa-garage-car"},{"prefix":"fas","class":"fa-garage-open"},{"prefix":"fas","class":"fa-gas-pump"},{"prefix":"fas","class":"fa-gas-pump-slash"},{"prefix":"fas","class":"fa-gavel"},{"prefix":"fas","class":"fa-gem"},{"prefix":"fas","class":"fa-genderless"},{"prefix":"fas","class":"fa-ghost"},{"prefix":"fas","class":"fa-gift"},{"prefix":"fas","class":"fa-gift-card"},{"prefix":"fas","class":"fa-gifts"},{"prefix":"fas","class":"fa-gingerbread-man"},{"prefix":"fas","class":"fa-glass"},{"prefix":"fas","class":"fa-glass-champagne"},{"prefix":"fas","class":"fa-glass-cheers"},{"prefix":"fas","class":"fa-glass-citrus"},{"prefix":"fas","class":"fa-glass-martini"},{"prefix":"fas","class":"fa-glass-martini-alt"},{"prefix":"fas","class":"fa-glass-whiskey"},{"prefix":"fas","class":"fa-glass-whiskey-rocks"},{"prefix":"fas","class":"fa-glasses"},{"prefix":"fas","class":"fa-glasses-alt"},{"prefix":"fas","class":"fa-globe"},{"prefix":"fas","class":"fa-globe-africa"},{"prefix":"fas","class":"fa-globe-americas"},{"prefix":"fas","class":"fa-globe-asia"},{"prefix":"fas","class":"fa-globe-europe"},{"prefix":"fas","class":"fa-globe-snow"},{"prefix":"fas","class":"fa-globe-stand"},{"prefix":"fas","class":"fa-golf-ball"},{"prefix":"fas","class":"fa-golf-club"},{"prefix":"fas","class":"fa-gopuram"},{"prefix":"fas","class":"fa-graduation-cap"},{"prefix":"fas","class":"fa-gramophone"},{"prefix":"fas","class":"fa-greater-than"},{"prefix":"fas","class":"fa-greater-than-equal"},{"prefix":"fas","class":"fa-grimace"},{"prefix":"fas","class":"fa-grin"},{"prefix":"fas","class":"fa-grin-alt"},{"prefix":"fas","class":"fa-grin-beam"},{"prefix":"fas","class":"fa-grin-beam-sweat"},{"prefix":"fas","class":"fa-grin-hearts"},{"prefix":"fas","class":"fa-grin-squint"},{"prefix":"fas","class":"fa-grin-squint-tears"},{"prefix":"fas","class":"fa-grin-stars"},{"prefix":"fas","class":"fa-grin-tears"},{"prefix":"fas","class":"fa-grin-tongue"},{"prefix":"fas","class":"fa-grin-tongue-squint"},{"prefix":"fas","class":"fa-grin-tongue-wink"},{"prefix":"fas","class":"fa-grin-wink"},{"prefix":"fas","class":"fa-grip-horizontal"},{"prefix":"fas","class":"fa-grip-lines"},{"prefix":"fas","class":"fa-grip-lines-vertical"},{"prefix":"fas","class":"fa-grip-vertical"},{"prefix":"fas","class":"fa-guitar"},{"prefix":"fas","class":"fa-guitar-electric"},{"prefix":"fas","class":"fa-guitars"},{"prefix":"fas","class":"fa-h-square"},{"prefix":"fas","class":"fa-h1"},{"prefix":"fas","class":"fa-h2"},{"prefix":"fas","class":"fa-h3"},{"prefix":"fas","class":"fa-h4"},{"prefix":"fas","class":"fa-hamburger"},{"prefix":"fas","class":"fa-hammer"},{"prefix":"fas","class":"fa-hammer-war"},{"prefix":"fas","class":"fa-hamsa"},{"prefix":"fas","class":"fa-hand-heart"},{"prefix":"fas","class":"fa-hand-holding"},{"prefix":"fas","class":"fa-hand-holding-box"},{"prefix":"fas","class":"fa-hand-holding-heart"},{"prefix":"fas","class":"fa-hand-holding-magic"},{"prefix":"fas","class":"fa-hand-holding-medical"},{"prefix":"fas","class":"fa-hand-holding-seedling"},{"prefix":"fas","class":"fa-hand-holding-usd"},{"prefix":"fas","class":"fa-hand-holding-water"},{"prefix":"fas","class":"fa-hand-lizard"},{"prefix":"fas","class":"fa-hand-middle-finger"},{"prefix":"fas","class":"fa-hand-paper"},{"prefix":"fas","class":"fa-hand-peace"},{"prefix":"fas","class":"fa-hand-point-down"},{"prefix":"fas","class":"fa-hand-point-left"},{"prefix":"fas","class":"fa-hand-point-right"},{"prefix":"fas","class":"fa-hand-point-up"},{"prefix":"fas","class":"fa-hand-pointer"},{"prefix":"fas","class":"fa-hand-receiving"},{"prefix":"fas","class":"fa-hand-rock"},{"prefix":"fas","class":"fa-hand-scissors"},{"prefix":"fas","class":"fa-hand-sparkles"},{"prefix":"fas","class":"fa-hand-spock"},{"prefix":"fas","class":"fa-hands"},{"prefix":"fas","class":"fa-hands-heart"},{"prefix":"fas","class":"fa-hands-helping"},{"prefix":"fas","class":"fa-hands-usd"},{"prefix":"fas","class":"fa-hands-wash"},{"prefix":"fas","class":"fa-handshake"},{"prefix":"fas","class":"fa-handshake-alt"},{"prefix":"fas","class":"fa-handshake-alt-slash"},{"prefix":"fas","class":"fa-handshake-slash"},{"prefix":"fas","class":"fa-hanukiah"},{"prefix":"fas","class":"fa-hard-hat"},{"prefix":"fas","class":"fa-hashtag"},{"prefix":"fas","class":"fa-hat-chef"},{"prefix":"fas","class":"fa-hat-cowboy"},{"prefix":"fas","class":"fa-hat-cowboy-side"},{"prefix":"fas","class":"fa-hat-santa"},{"prefix":"fas","class":"fa-hat-winter"},{"prefix":"fas","class":"fa-hat-witch"},{"prefix":"fas","class":"fa-hat-wizard"},{"prefix":"fas","class":"fa-hdd"},{"prefix":"fas","class":"fa-head-side"},{"prefix":"fas","class":"fa-head-side-brain"},{"prefix":"fas","class":"fa-head-side-cough"},{"prefix":"fas","class":"fa-head-side-cough-slash"},{"prefix":"fas","class":"fa-head-side-headphones"},{"prefix":"fas","class":"fa-head-side-mask"},{"prefix":"fas","class":"fa-head-side-medical"},{"prefix":"fas","class":"fa-head-side-virus"},{"prefix":"fas","class":"fa-head-vr"},{"prefix":"fas","class":"fa-heading"},{"prefix":"fas","class":"fa-headphones"},{"prefix":"fas","class":"fa-headphones-alt"},{"prefix":"fas","class":"fa-headset"},{"prefix":"fas","class":"fa-heart"},{"prefix":"fas","class":"fa-heart-broken"},{"prefix":"fas","class":"fa-heart-circle"},{"prefix":"fas","class":"fa-heart-rate"},{"prefix":"fas","class":"fa-heart-square"},{"prefix":"fas","class":"fa-heartbeat"},{"prefix":"fas","class":"fa-heat"},{"prefix":"fas","class":"fa-helicopter"},{"prefix":"fas","class":"fa-helmet-battle"},{"prefix":"fas","class":"fa-hexagon"},{"prefix":"fas","class":"fa-highlighter"},{"prefix":"fas","class":"fa-hiking"},{"prefix":"fas","class":"fa-hippo"},{"prefix":"fas","class":"fa-history"},{"prefix":"fas","class":"fa-hockey-mask"},{"prefix":"fas","class":"fa-hockey-puck"},{"prefix":"fas","class":"fa-hockey-sticks"},{"prefix":"fas","class":"fa-holly-berry"},{"prefix":"fas","class":"fa-home"},{"prefix":"fas","class":"fa-home-alt"},{"prefix":"fas","class":"fa-home-heart"},{"prefix":"fas","class":"fa-home-lg"},{"prefix":"fas","class":"fa-home-lg-alt"},{"prefix":"fas","class":"fa-hood-cloak"},{"prefix":"fas","class":"fa-horizontal-rule"},{"prefix":"fas","class":"fa-horse"},{"prefix":"fas","class":"fa-horse-head"},{"prefix":"fas","class":"fa-horse-saddle"},{"prefix":"fas","class":"fa-hospital"},{"prefix":"fas","class":"fa-hospital-alt"},{"prefix":"fas","class":"fa-hospital-symbol"},{"prefix":"fas","class":"fa-hospital-user"},{"prefix":"fas","class":"fa-hospitals"},{"prefix":"fas","class":"fa-hot-tub"},{"prefix":"fas","class":"fa-hotdog"},{"prefix":"fas","class":"fa-hotel"},{"prefix":"fas","class":"fa-hourglass"},{"prefix":"fas","class":"fa-hourglass-end"},{"prefix":"fas","class":"fa-hourglass-half"},{"prefix":"fas","class":"fa-hourglass-start"},{"prefix":"fas","class":"fa-house"},{"prefix":"fas","class":"fa-house-damage"},{"prefix":"fas","class":"fa-house-day"},{"prefix":"fas","class":"fa-house-flood"},{"prefix":"fas","class":"fa-house-leave"},{"prefix":"fas","class":"fa-house-night"},{"prefix":"fas","class":"fa-house-return"},{"prefix":"fas","class":"fa-house-signal"},{"prefix":"fas","class":"fa-house-user"},{"prefix":"fas","class":"fa-hryvnia"},{"prefix":"fas","class":"fa-humidity"},{"prefix":"fas","class":"fa-hurricane"},{"prefix":"fas","class":"fa-i-cursor"},{"prefix":"fas","class":"fa-ice-cream"},{"prefix":"fas","class":"fa-ice-skate"},{"prefix":"fas","class":"fa-icicles"},{"prefix":"fas","class":"fa-icons"},{"prefix":"fas","class":"fa-icons-alt"},{"prefix":"fas","class":"fa-id-badge"},{"prefix":"fas","class":"fa-id-card"},{"prefix":"fas","class":"fa-id-card-alt"},{"prefix":"fas","class":"fa-igloo"},{"prefix":"fas","class":"fa-image"},{"prefix":"fas","class":"fa-image-polaroid"},{"prefix":"fas","class":"fa-images"},{"prefix":"fas","class":"fa-inbox"},{"prefix":"fas","class":"fa-inbox-in"},{"prefix":"fas","class":"fa-inbox-out"},{"prefix":"fas","class":"fa-indent"},{"prefix":"fas","class":"fa-industry"},{"prefix":"fas","class":"fa-industry-alt"},{"prefix":"fas","class":"fa-infinity"},{"prefix":"fas","class":"fa-info"},{"prefix":"fas","class":"fa-info-circle"},{"prefix":"fas","class":"fa-info-square"},{"prefix":"fas","class":"fa-inhaler"},{"prefix":"fas","class":"fa-integral"},{"prefix":"fas","class":"fa-intersection"},{"prefix":"fas","class":"fa-inventory"},{"prefix":"fas","class":"fa-island-tropical"},{"prefix":"fas","class":"fa-italic"},{"prefix":"fas","class":"fa-jack-o-lantern"},{"prefix":"fas","class":"fa-jedi"},{"prefix":"fas","class":"fa-joint"},{"prefix":"fas","class":"fa-journal-whills"},{"prefix":"fas","class":"fa-joystick"},{"prefix":"fas","class":"fa-jug"},{"prefix":"fas","class":"fa-kaaba"},{"prefix":"fas","class":"fa-kazoo"},{"prefix":"fas","class":"fa-kerning"},{"prefix":"fas","class":"fa-key"},{"prefix":"fas","class":"fa-key-skeleton"},{"prefix":"fas","class":"fa-keyboard"},{"prefix":"fas","class":"fa-keynote"},{"prefix":"fas","class":"fa-khanda"},{"prefix":"fas","class":"fa-kidneys"},{"prefix":"fas","class":"fa-kiss"},{"prefix":"fas","class":"fa-kiss-beam"},{"prefix":"fas","class":"fa-kiss-wink-heart"},{"prefix":"fas","class":"fa-kite"},{"prefix":"fas","class":"fa-kiwi-bird"},{"prefix":"fas","class":"fa-knife-kitchen"},{"prefix":"fas","class":"fa-lambda"},{"prefix":"fas","class":"fa-lamp"},{"prefix":"fas","class":"fa-lamp-desk"},{"prefix":"fas","class":"fa-lamp-floor"},{"prefix":"fas","class":"fa-landmark"},{"prefix":"fas","class":"fa-landmark-alt"},{"prefix":"fas","class":"fa-language"},{"prefix":"fas","class":"fa-laptop"},{"prefix":"fas","class":"fa-laptop-code"},{"prefix":"fas","class":"fa-laptop-house"},{"prefix":"fas","class":"fa-laptop-medical"},{"prefix":"fas","class":"fa-lasso"},{"prefix":"fas","class":"fa-laugh"},{"prefix":"fas","class":"fa-laugh-beam"},{"prefix":"fas","class":"fa-laugh-squint"},{"prefix":"fas","class":"fa-laugh-wink"},{"prefix":"fas","class":"fa-layer-group"},{"prefix":"fas","class":"fa-layer-minus"},{"prefix":"fas","class":"fa-layer-plus"},{"prefix":"fas","class":"fa-leaf"},{"prefix":"fas","class":"fa-leaf-heart"},{"prefix":"fas","class":"fa-leaf-maple"},{"prefix":"fas","class":"fa-leaf-oak"},{"prefix":"fas","class":"fa-lemon"},{"prefix":"fas","class":"fa-less-than"},{"prefix":"fas","class":"fa-less-than-equal"},{"prefix":"fas","class":"fa-level-down"},{"prefix":"fas","class":"fa-level-down-alt"},{"prefix":"fas","class":"fa-level-up"},{"prefix":"fas","class":"fa-level-up-alt"},{"prefix":"fas","class":"fa-life-ring"},{"prefix":"fas","class":"fa-light-ceiling"},{"prefix":"fas","class":"fa-light-switch"},{"prefix":"fas","class":"fa-light-switch-off"},{"prefix":"fas","class":"fa-light-switch-on"},{"prefix":"fas","class":"fa-lightbulb"},{"prefix":"fas","class":"fa-lightbulb-dollar"},{"prefix":"fas","class":"fa-lightbulb-exclamation"},{"prefix":"fas","class":"fa-lightbulb-on"},{"prefix":"fas","class":"fa-lightbulb-slash"},{"prefix":"fas","class":"fa-lights-holiday"},{"prefix":"fas","class":"fa-line-columns"},{"prefix":"fas","class":"fa-line-height"},{"prefix":"fas","class":"fa-link"},{"prefix":"fas","class":"fa-lips"},{"prefix":"fas","class":"fa-lira-sign"},{"prefix":"fas","class":"fa-list"},{"prefix":"fas","class":"fa-list-alt"},{"prefix":"fas","class":"fa-list-music"},{"prefix":"fas","class":"fa-list-ol"},{"prefix":"fas","class":"fa-list-ul"},{"prefix":"fas","class":"fa-location"},{"prefix":"fas","class":"fa-location-arrow"},{"prefix":"fas","class":"fa-location-circle"},{"prefix":"fas","class":"fa-location-slash"},{"prefix":"fas","class":"fa-lock"},{"prefix":"fas","class":"fa-lock-alt"},{"prefix":"fas","class":"fa-lock-open"},{"prefix":"fas","class":"fa-lock-open-alt"},{"prefix":"fas","class":"fa-long-arrow-alt-down"},{"prefix":"fas","class":"fa-long-arrow-alt-left"},{"prefix":"fas","class":"fa-long-arrow-alt-right"},{"prefix":"fas","class":"fa-long-arrow-alt-up"},{"prefix":"fas","class":"fa-long-arrow-down"},{"prefix":"fas","class":"fa-long-arrow-left"},{"prefix":"fas","class":"fa-long-arrow-right"},{"prefix":"fas","class":"fa-long-arrow-up"},{"prefix":"fas","class":"fa-loveseat"},{"prefix":"fas","class":"fa-low-vision"},{"prefix":"fas","class":"fa-luchador"},{"prefix":"fas","class":"fa-luggage-cart"},{"prefix":"fas","class":"fa-lungs"},{"prefix":"fas","class":"fa-lungs-virus"},{"prefix":"fas","class":"fa-mace"},{"prefix":"fas","class":"fa-magic"},{"prefix":"fas","class":"fa-magnet"},{"prefix":"fas","class":"fa-mail-bulk"},{"prefix":"fas","class":"fa-mailbox"},{"prefix":"fas","class":"fa-male"},{"prefix":"fas","class":"fa-mandolin"},{"prefix":"fas","class":"fa-map"},{"prefix":"fas","class":"fa-map-marked"},{"prefix":"fas","class":"fa-map-marked-alt"},{"prefix":"fas","class":"fa-map-marker"},{"prefix":"fas","class":"fa-map-marker-alt"},{"prefix":"fas","class":"fa-map-marker-alt-slash"},{"prefix":"fas","class":"fa-map-marker-check"},{"prefix":"fas","class":"fa-map-marker-edit"},{"prefix":"fas","class":"fa-map-marker-exclamation"},{"prefix":"fas","class":"fa-map-marker-minus"},{"prefix":"fas","class":"fa-map-marker-plus"},{"prefix":"fas","class":"fa-map-marker-question"},{"prefix":"fas","class":"fa-map-marker-slash"},{"prefix":"fas","class":"fa-map-marker-smile"},{"prefix":"fas","class":"fa-map-marker-times"},{"prefix":"fas","class":"fa-map-pin"},{"prefix":"fas","class":"fa-map-signs"},{"prefix":"fas","class":"fa-marker"},{"prefix":"fas","class":"fa-mars"},{"prefix":"fas","class":"fa-mars-double"},{"prefix":"fas","class":"fa-mars-stroke"},{"prefix":"fas","class":"fa-mars-stroke-h"},{"prefix":"fas","class":"fa-mars-stroke-v"},{"prefix":"fas","class":"fa-mask"},{"prefix":"fas","class":"fa-meat"},{"prefix":"fas","class":"fa-medal"},{"prefix":"fas","class":"fa-medkit"},{"prefix":"fas","class":"fa-megaphone"},{"prefix":"fas","class":"fa-meh"},{"prefix":"fas","class":"fa-meh-blank"},{"prefix":"fas","class":"fa-meh-rolling-eyes"},{"prefix":"fas","class":"fa-memory"},{"prefix":"fas","class":"fa-menorah"},{"prefix":"fas","class":"fa-mercury"},{"prefix":"fas","class":"fa-meteor"},{"prefix":"fas","class":"fa-microchip"},{"prefix":"fas","class":"fa-microphone"},{"prefix":"fas","class":"fa-microphone-alt"},{"prefix":"fas","class":"fa-microphone-alt-slash"},{"prefix":"fas","class":"fa-microphone-slash"},{"prefix":"fas","class":"fa-microphone-stand"},{"prefix":"fas","class":"fa-microscope"},{"prefix":"fas","class":"fa-microwave"},{"prefix":"fas","class":"fa-mind-share"},{"prefix":"fas","class":"fa-minus"},{"prefix":"fas","class":"fa-minus-circle"},{"prefix":"fas","class":"fa-minus-hexagon"},{"prefix":"fas","class":"fa-minus-octagon"},{"prefix":"fas","class":"fa-minus-square"},{"prefix":"fas","class":"fa-mistletoe"},{"prefix":"fas","class":"fa-mitten"},{"prefix":"fas","class":"fa-mobile"},{"prefix":"fas","class":"fa-mobile-alt"},{"prefix":"fas","class":"fa-mobile-android"},{"prefix":"fas","class":"fa-mobile-android-alt"},{"prefix":"fas","class":"fa-money-bill"},{"prefix":"fas","class":"fa-money-bill-alt"},{"prefix":"fas","class":"fa-money-bill-wave"},{"prefix":"fas","class":"fa-money-bill-wave-alt"},{"prefix":"fas","class":"fa-money-check"},{"prefix":"fas","class":"fa-money-check-alt"},{"prefix":"fas","class":"fa-money-check-edit"},{"prefix":"fas","class":"fa-money-check-edit-alt"},{"prefix":"fas","class":"fa-monitor-heart-rate"},{"prefix":"fas","class":"fa-monkey"},{"prefix":"fas","class":"fa-monument"},{"prefix":"fas","class":"fa-moon"},{"prefix":"fas","class":"fa-moon-cloud"},{"prefix":"fas","class":"fa-moon-stars"},{"prefix":"fas","class":"fa-mortar-pestle"},{"prefix":"fas","class":"fa-mosque"},{"prefix":"fas","class":"fa-motorcycle"},{"prefix":"fas","class":"fa-mountain"},{"prefix":"fas","class":"fa-mountains"},{"prefix":"fas","class":"fa-mouse"},{"prefix":"fas","class":"fa-mouse-alt"},{"prefix":"fas","class":"fa-mouse-pointer"},{"prefix":"fas","class":"fa-mp3-player"},{"prefix":"fas","class":"fa-mug"},{"prefix":"fas","class":"fa-mug-hot"},{"prefix":"fas","class":"fa-mug-marshmallows"},{"prefix":"fas","class":"fa-mug-tea"},{"prefix":"fas","class":"fa-music"},{"prefix":"fas","class":"fa-music-alt"},{"prefix":"fas","class":"fa-music-alt-slash"},{"prefix":"fas","class":"fa-music-slash"},{"prefix":"fas","class":"fa-narwhal"},{"prefix":"fas","class":"fa-network-wired"},{"prefix":"fas","class":"fa-neuter"},{"prefix":"fas","class":"fa-newspaper"},{"prefix":"fas","class":"fa-not-equal"},{"prefix":"fas","class":"fa-notes-medical"},{"prefix":"fas","class":"fa-object-group"},{"prefix":"fas","class":"fa-object-ungroup"},{"prefix":"fas","class":"fa-octagon"},{"prefix":"fas","class":"fa-oil-can"},{"prefix":"fas","class":"fa-oil-temp"},{"prefix":"fas","class":"fa-om"},{"prefix":"fas","class":"fa-omega"},{"prefix":"fas","class":"fa-ornament"},{"prefix":"fas","class":"fa-otter"},{"prefix":"fas","class":"fa-outdent"},{"prefix":"fas","class":"fa-outlet"},{"prefix":"fas","class":"fa-oven"},{"prefix":"fas","class":"fa-overline"},{"prefix":"fas","class":"fa-page-break"},{"prefix":"fas","class":"fa-pager"},{"prefix":"fas","class":"fa-paint-brush"},{"prefix":"fas","class":"fa-paint-brush-alt"},{"prefix":"fas","class":"fa-paint-roller"},{"prefix":"fas","class":"fa-palette"},{"prefix":"fas","class":"fa-pallet"},{"prefix":"fas","class":"fa-pallet-alt"},{"prefix":"fas","class":"fa-paper-plane"},{"prefix":"fas","class":"fa-paperclip"},{"prefix":"fas","class":"fa-parachute-box"},{"prefix":"fas","class":"fa-paragraph"},{"prefix":"fas","class":"fa-paragraph-rtl"},{"prefix":"fas","class":"fa-parking"},{"prefix":"fas","class":"fa-parking-circle"},{"prefix":"fas","class":"fa-parking-circle-slash"},{"prefix":"fas","class":"fa-parking-slash"},{"prefix":"fas","class":"fa-passport"},{"prefix":"fas","class":"fa-pastafarianism"},{"prefix":"fas","class":"fa-paste"},{"prefix":"fas","class":"fa-pause"},{"prefix":"fas","class":"fa-pause-circle"},{"prefix":"fas","class":"fa-paw"},{"prefix":"fas","class":"fa-paw-alt"},{"prefix":"fas","class":"fa-paw-claws"},{"prefix":"fas","class":"fa-peace"},{"prefix":"fas","class":"fa-pegasus"},{"prefix":"fas","class":"fa-pen"},{"prefix":"fas","class":"fa-pen-alt"},{"prefix":"fas","class":"fa-pen-fancy"},{"prefix":"fas","class":"fa-pen-nib"},{"prefix":"fas","class":"fa-pen-square"},{"prefix":"fas","class":"fa-pencil"},{"prefix":"fas","class":"fa-pencil-alt"},{"prefix":"fas","class":"fa-pencil-paintbrush"},{"prefix":"fas","class":"fa-pencil-ruler"},{"prefix":"fas","class":"fa-pennant"},{"prefix":"fas","class":"fa-people-arrows"},{"prefix":"fas","class":"fa-people-carry"},{"prefix":"fas","class":"fa-pepper-hot"},{"prefix":"fas","class":"fa-percent"},{"prefix":"fas","class":"fa-percentage"},{"prefix":"fas","class":"fa-person-booth"},{"prefix":"fas","class":"fa-person-carry"},{"prefix":"fas","class":"fa-person-dolly"},{"prefix":"fas","class":"fa-person-dolly-empty"},{"prefix":"fas","class":"fa-person-sign"},{"prefix":"fas","class":"fa-phone"},{"prefix":"fas","class":"fa-phone-alt"},{"prefix":"fas","class":"fa-phone-laptop"},{"prefix":"fas","class":"fa-phone-office"},{"prefix":"fas","class":"fa-phone-plus"},{"prefix":"fas","class":"fa-phone-rotary"},{"prefix":"fas","class":"fa-phone-slash"},{"prefix":"fas","class":"fa-phone-square"},{"prefix":"fas","class":"fa-phone-square-alt"},{"prefix":"fas","class":"fa-phone-volume"},{"prefix":"fas","class":"fa-photo-video"},{"prefix":"fas","class":"fa-pi"},{"prefix":"fas","class":"fa-piano"},{"prefix":"fas","class":"fa-piano-keyboard"},{"prefix":"fas","class":"fa-pie"},{"prefix":"fas","class":"fa-pig"},{"prefix":"fas","class":"fa-piggy-bank"},{"prefix":"fas","class":"fa-pills"},{"prefix":"fas","class":"fa-pizza"},{"prefix":"fas","class":"fa-pizza-slice"},{"prefix":"fas","class":"fa-place-of-worship"},{"prefix":"fas","class":"fa-plane"},{"prefix":"fas","class":"fa-plane-alt"},{"prefix":"fas","class":"fa-plane-arrival"},{"prefix":"fas","class":"fa-plane-departure"},{"prefix":"fas","class":"fa-plane-slash"},{"prefix":"fas","class":"fa-planet-moon"},{"prefix":"fas","class":"fa-planet-ringed"},{"prefix":"fas","class":"fa-play"},{"prefix":"fas","class":"fa-play-circle"},{"prefix":"fas","class":"fa-plug"},{"prefix":"fas","class":"fa-plus"},{"prefix":"fas","class":"fa-plus-circle"},{"prefix":"fas","class":"fa-plus-hexagon"},{"prefix":"fas","class":"fa-plus-octagon"},{"prefix":"fas","class":"fa-plus-square"},{"prefix":"fas","class":"fa-podcast"},{"prefix":"fas","class":"fa-podium"},{"prefix":"fas","class":"fa-podium-star"},{"prefix":"fas","class":"fa-police-box"},{"prefix":"fas","class":"fa-poll"},{"prefix":"fas","class":"fa-poll-h"},{"prefix":"fas","class":"fa-poll-people"},{"prefix":"fas","class":"fa-poo"},{"prefix":"fas","class":"fa-poo-storm"},{"prefix":"fas","class":"fa-poop"},{"prefix":"fas","class":"fa-popcorn"},{"prefix":"fas","class":"fa-portal-enter"},{"prefix":"fas","class":"fa-portal-exit"},{"prefix":"fas","class":"fa-portrait"},{"prefix":"fas","class":"fa-pound-sign"},{"prefix":"fas","class":"fa-power-off"},{"prefix":"fas","class":"fa-pray"},{"prefix":"fas","class":"fa-praying-hands"},{"prefix":"fas","class":"fa-prescription"},{"prefix":"fas","class":"fa-prescription-bottle"},{"prefix":"fas","class":"fa-prescription-bottle-alt"},{"prefix":"fas","class":"fa-presentation"},{"prefix":"fas","class":"fa-print"},{"prefix":"fas","class":"fa-print-search"},{"prefix":"fas","class":"fa-print-slash"},{"prefix":"fas","class":"fa-procedures"},{"prefix":"fas","class":"fa-project-diagram"},{"prefix":"fas","class":"fa-projector"},{"prefix":"fas","class":"fa-pump-medical"},{"prefix":"fas","class":"fa-pump-soap"},{"prefix":"fas","class":"fa-pumpkin"},{"prefix":"fas","class":"fa-puzzle-piece"},{"prefix":"fas","class":"fa-qrcode"},{"prefix":"fas","class":"fa-question"},{"prefix":"fas","class":"fa-question-circle"},{"prefix":"fas","class":"fa-question-square"},{"prefix":"fas","class":"fa-quidditch"},{"prefix":"fas","class":"fa-quote-left"},{"prefix":"fas","class":"fa-quote-right"},{"prefix":"fas","class":"fa-quran"},{"prefix":"fas","class":"fa-rabbit"},{"prefix":"fas","class":"fa-rabbit-fast"},{"prefix":"fas","class":"fa-racquet"},{"prefix":"fas","class":"fa-radar"},{"prefix":"fas","class":"fa-radiation"},{"prefix":"fas","class":"fa-radiation-alt"},{"prefix":"fas","class":"fa-radio"},{"prefix":"fas","class":"fa-radio-alt"},{"prefix":"fas","class":"fa-rainbow"},{"prefix":"fas","class":"fa-raindrops"},{"prefix":"fas","class":"fa-ram"},{"prefix":"fas","class":"fa-ramp-loading"},{"prefix":"fas","class":"fa-random"},{"prefix":"fas","class":"fa-raygun"},{"prefix":"fas","class":"fa-receipt"},{"prefix":"fas","class":"fa-record-vinyl"},{"prefix":"fas","class":"fa-rectangle-landscape"},{"prefix":"fas","class":"fa-rectangle-portrait"},{"prefix":"fas","class":"fa-rectangle-wide"},{"prefix":"fas","class":"fa-recycle"},{"prefix":"fas","class":"fa-redo"},{"prefix":"fas","class":"fa-redo-alt"},{"prefix":"fas","class":"fa-refrigerator"},{"prefix":"fas","class":"fa-registered"},{"prefix":"fas","class":"fa-remove-format"},{"prefix":"fas","class":"fa-repeat"},{"prefix":"fas","class":"fa-repeat-1"},{"prefix":"fas","class":"fa-repeat-1-alt"},{"prefix":"fas","class":"fa-repeat-alt"},{"prefix":"fas","class":"fa-reply"},{"prefix":"fas","class":"fa-reply-all"},{"prefix":"fas","class":"fa-republican"},{"prefix":"fas","class":"fa-restroom"},{"prefix":"fas","class":"fa-retweet"},{"prefix":"fas","class":"fa-retweet-alt"},{"prefix":"fas","class":"fa-ribbon"},{"prefix":"fas","class":"fa-ring"},{"prefix":"fas","class":"fa-rings-wedding"},{"prefix":"fas","class":"fa-road"},{"prefix":"fas","class":"fa-robot"},{"prefix":"fas","class":"fa-rocket"},{"prefix":"fas","class":"fa-rocket-launch"},{"prefix":"fas","class":"fa-route"},{"prefix":"fas","class":"fa-route-highway"},{"prefix":"fas","class":"fa-route-interstate"},{"prefix":"fas","class":"fa-router"},{"prefix":"fas","class":"fa-rss"},{"prefix":"fas","class":"fa-rss-square"},{"prefix":"fas","class":"fa-ruble-sign"},{"prefix":"fas","class":"fa-ruler"},{"prefix":"fas","class":"fa-ruler-combined"},{"prefix":"fas","class":"fa-ruler-horizontal"},{"prefix":"fas","class":"fa-ruler-triangle"},{"prefix":"fas","class":"fa-ruler-vertical"},{"prefix":"fas","class":"fa-running"},{"prefix":"fas","class":"fa-rupee-sign"},{"prefix":"fas","class":"fa-rv"},{"prefix":"fas","class":"fa-sack"},{"prefix":"fas","class":"fa-sack-dollar"},{"prefix":"fas","class":"fa-sad-cry"},{"prefix":"fas","class":"fa-sad-tear"},{"prefix":"fas","class":"fa-salad"},{"prefix":"fas","class":"fa-sandwich"},{"prefix":"fas","class":"fa-satellite"},{"prefix":"fas","class":"fa-satellite-dish"},{"prefix":"fas","class":"fa-sausage"},{"prefix":"fas","class":"fa-save"},{"prefix":"fas","class":"fa-sax-hot"},{"prefix":"fas","class":"fa-saxophone"},{"prefix":"fas","class":"fa-scalpel"},{"prefix":"fas","class":"fa-scalpel-path"},{"prefix":"fas","class":"fa-scanner"},{"prefix":"fas","class":"fa-scanner-image"},{"prefix":"fas","class":"fa-scanner-keyboard"},{"prefix":"fas","class":"fa-scanner-touchscreen"},{"prefix":"fas","class":"fa-scarecrow"},{"prefix":"fas","class":"fa-scarf"},{"prefix":"fas","class":"fa-school"},{"prefix":"fas","class":"fa-screwdriver"},{"prefix":"fas","class":"fa-scroll"},{"prefix":"fas","class":"fa-scroll-old"},{"prefix":"fas","class":"fa-scrubber"},{"prefix":"fas","class":"fa-scythe"},{"prefix":"fas","class":"fa-sd-card"},{"prefix":"fas","class":"fa-search"},{"prefix":"fas","class":"fa-search-dollar"},{"prefix":"fas","class":"fa-search-location"},{"prefix":"fas","class":"fa-search-minus"},{"prefix":"fas","class":"fa-search-plus"},{"prefix":"fas","class":"fa-seedling"},{"prefix":"fas","class":"fa-send-back"},{"prefix":"fas","class":"fa-send-backward"},{"prefix":"fas","class":"fa-sensor"},{"prefix":"fas","class":"fa-sensor-alert"},{"prefix":"fas","class":"fa-sensor-fire"},{"prefix":"fas","class":"fa-sensor-on"},{"prefix":"fas","class":"fa-sensor-smoke"},{"prefix":"fas","class":"fa-server"},{"prefix":"fas","class":"fa-shapes"},{"prefix":"fas","class":"fa-share"},{"prefix":"fas","class":"fa-share-all"},{"prefix":"fas","class":"fa-share-alt"},{"prefix":"fas","class":"fa-share-alt-square"},{"prefix":"fas","class":"fa-share-square"},{"prefix":"fas","class":"fa-sheep"},{"prefix":"fas","class":"fa-shekel-sign"},{"prefix":"fas","class":"fa-shield"},{"prefix":"fas","class":"fa-shield-alt"},{"prefix":"fas","class":"fa-shield-check"},{"prefix":"fas","class":"fa-shield-cross"},{"prefix":"fas","class":"fa-shield-virus"},{"prefix":"fas","class":"fa-ship"},{"prefix":"fas","class":"fa-shipping-fast"},{"prefix":"fas","class":"fa-shipping-timed"},{"prefix":"fas","class":"fa-shish-kebab"},{"prefix":"fas","class":"fa-shoe-prints"},{"prefix":"fas","class":"fa-shopping-bag"},{"prefix":"fas","class":"fa-shopping-basket"},{"prefix":"fas","class":"fa-shopping-cart"},{"prefix":"fas","class":"fa-shovel"},{"prefix":"fas","class":"fa-shovel-snow"},{"prefix":"fas","class":"fa-shower"},{"prefix":"fas","class":"fa-shredder"},{"prefix":"fas","class":"fa-shuttle-van"},{"prefix":"fas","class":"fa-shuttlecock"},{"prefix":"fas","class":"fa-sickle"},{"prefix":"fas","class":"fa-sigma"},{"prefix":"fas","class":"fa-sign"},{"prefix":"fas","class":"fa-sign-in"},{"prefix":"fas","class":"fa-sign-in-alt"},{"prefix":"fas","class":"fa-sign-language"},{"prefix":"fas","class":"fa-sign-out"},{"prefix":"fas","class":"fa-sign-out-alt"},{"prefix":"fas","class":"fa-signal"},{"prefix":"fas","class":"fa-signal-1"},{"prefix":"fas","class":"fa-signal-2"},{"prefix":"fas","class":"fa-signal-3"},{"prefix":"fas","class":"fa-signal-4"},{"prefix":"fas","class":"fa-signal-alt"},{"prefix":"fas","class":"fa-signal-alt-1"},{"prefix":"fas","class":"fa-signal-alt-2"},{"prefix":"fas","class":"fa-signal-alt-3"},{"prefix":"fas","class":"fa-signal-alt-slash"},{"prefix":"fas","class":"fa-signal-slash"},{"prefix":"fas","class":"fa-signal-stream"},{"prefix":"fas","class":"fa-signature"},{"prefix":"fas","class":"fa-sim-card"},{"prefix":"fas","class":"fa-sink"},{"prefix":"fas","class":"fa-siren"},{"prefix":"fas","class":"fa-siren-on"},{"prefix":"fas","class":"fa-sitemap"},{"prefix":"fas","class":"fa-skating"},{"prefix":"fas","class":"fa-skeleton"},{"prefix":"fas","class":"fa-ski-jump"},{"prefix":"fas","class":"fa-ski-lift"},{"prefix":"fas","class":"fa-skiing"},{"prefix":"fas","class":"fa-skiing-nordic"},{"prefix":"fas","class":"fa-skull"},{"prefix":"fas","class":"fa-skull-cow"},{"prefix":"fas","class":"fa-skull-crossbones"},{"prefix":"fas","class":"fa-slash"},{"prefix":"fas","class":"fa-sledding"},{"prefix":"fas","class":"fa-sleigh"},{"prefix":"fas","class":"fa-sliders-h"},{"prefix":"fas","class":"fa-sliders-h-square"},{"prefix":"fas","class":"fa-sliders-v"},{"prefix":"fas","class":"fa-sliders-v-square"},{"prefix":"fas","class":"fa-smile"},{"prefix":"fas","class":"fa-smile-beam"},{"prefix":"fas","class":"fa-smile-plus"},{"prefix":"fas","class":"fa-smile-wink"},{"prefix":"fas","class":"fa-smog"},{"prefix":"fas","class":"fa-smoke"},{"prefix":"fas","class":"fa-smoking"},{"prefix":"fas","class":"fa-smoking-ban"},{"prefix":"fas","class":"fa-sms"},{"prefix":"fas","class":"fa-snake"},{"prefix":"fas","class":"fa-snooze"},{"prefix":"fas","class":"fa-snow-blowing"},{"prefix":"fas","class":"fa-snowboarding"},{"prefix":"fas","class":"fa-snowflake"},{"prefix":"fas","class":"fa-snowflakes"},{"prefix":"fas","class":"fa-snowman"},{"prefix":"fas","class":"fa-snowmobile"},{"prefix":"fas","class":"fa-snowplow"},{"prefix":"fas","class":"fa-soap"},{"prefix":"fas","class":"fa-socks"},{"prefix":"fas","class":"fa-solar-panel"},{"prefix":"fas","class":"fa-solar-system"},{"prefix":"fas","class":"fa-sort"},{"prefix":"fas","class":"fa-sort-alpha-down"},{"prefix":"fas","class":"fa-sort-alpha-down-alt"},{"prefix":"fas","class":"fa-sort-alpha-up"},{"prefix":"fas","class":"fa-sort-alpha-up-alt"},{"prefix":"fas","class":"fa-sort-alt"},{"prefix":"fas","class":"fa-sort-amount-down"},{"prefix":"fas","class":"fa-sort-amount-down-alt"},{"prefix":"fas","class":"fa-sort-amount-up"},{"prefix":"fas","class":"fa-sort-amount-up-alt"},{"prefix":"fas","class":"fa-sort-circle"},{"prefix":"fas","class":"fa-sort-circle-down"},{"prefix":"fas","class":"fa-sort-circle-up"},{"prefix":"fas","class":"fa-sort-down"},{"prefix":"fas","class":"fa-sort-numeric-down"},{"prefix":"fas","class":"fa-sort-numeric-down-alt"},{"prefix":"fas","class":"fa-sort-numeric-up"},{"prefix":"fas","class":"fa-sort-numeric-up-alt"},{"prefix":"fas","class":"fa-sort-shapes-down"},{"prefix":"fas","class":"fa-sort-shapes-down-alt"},{"prefix":"fas","class":"fa-sort-shapes-up"},{"prefix":"fas","class":"fa-sort-shapes-up-alt"},{"prefix":"fas","class":"fa-sort-size-down"},{"prefix":"fas","class":"fa-sort-size-down-alt"},{"prefix":"fas","class":"fa-sort-size-up"},{"prefix":"fas","class":"fa-sort-size-up-alt"},{"prefix":"fas","class":"fa-sort-up"},{"prefix":"fas","class":"fa-soup"},{"prefix":"fas","class":"fa-spa"},{"prefix":"fas","class":"fa-space-shuttle"},{"prefix":"fas","class":"fa-space-station-moon"},{"prefix":"fas","class":"fa-space-station-moon-alt"},{"prefix":"fas","class":"fa-spade"},{"prefix":"fas","class":"fa-sparkles"},{"prefix":"fas","class":"fa-speaker"},{"prefix":"fas","class":"fa-speakers"},{"prefix":"fas","class":"fa-spell-check"},{"prefix":"fas","class":"fa-spider"},{"prefix":"fas","class":"fa-spider-black-widow"},{"prefix":"fas","class":"fa-spider-web"},{"prefix":"fas","class":"fa-spinner"},{"prefix":"fas","class":"fa-spinner-third"},{"prefix":"fas","class":"fa-splotch"},{"prefix":"fas","class":"fa-spray-can"},{"prefix":"fas","class":"fa-sprinkler"},{"prefix":"fas","class":"fa-square"},{"prefix":"fas","class":"fa-square-full"},{"prefix":"fas","class":"fa-square-root"},{"prefix":"fas","class":"fa-square-root-alt"},{"prefix":"fas","class":"fa-squirrel"},{"prefix":"fas","class":"fa-staff"},{"prefix":"fas","class":"fa-stamp"},{"prefix":"fas","class":"fa-star"},{"prefix":"fas","class":"fa-star-and-crescent"},{"prefix":"fas","class":"fa-star-christmas"},{"prefix":"fas","class":"fa-star-exclamation"},{"prefix":"fas","class":"fa-star-half"},{"prefix":"fas","class":"fa-star-half-alt"},{"prefix":"fas","class":"fa-star-of-david"},{"prefix":"fas","class":"fa-star-of-life"},{"prefix":"fas","class":"fa-star-shooting"},{"prefix":"fas","class":"fa-starfighter"},{"prefix":"fas","class":"fa-starfighter-alt"},{"prefix":"fas","class":"fa-stars"},{"prefix":"fas","class":"fa-starship"},{"prefix":"fas","class":"fa-starship-freighter"},{"prefix":"fas","class":"fa-steak"},{"prefix":"fas","class":"fa-steering-wheel"},{"prefix":"fas","class":"fa-step-backward"},{"prefix":"fas","class":"fa-step-forward"},{"prefix":"fas","class":"fa-stethoscope"},{"prefix":"fas","class":"fa-sticky-note"},{"prefix":"fas","class":"fa-stocking"},{"prefix":"fas","class":"fa-stomach"},{"prefix":"fas","class":"fa-stop"},{"prefix":"fas","class":"fa-stop-circle"},{"prefix":"fas","class":"fa-stopwatch"},{"prefix":"fas","class":"fa-stopwatch-20"},{"prefix":"fas","class":"fa-store"},{"prefix":"fas","class":"fa-store-alt"},{"prefix":"fas","class":"fa-store-alt-slash"},{"prefix":"fas","class":"fa-store-slash"},{"prefix":"fas","class":"fa-stream"},{"prefix":"fas","class":"fa-street-view"},{"prefix":"fas","class":"fa-stretcher"},{"prefix":"fas","class":"fa-strikethrough"},{"prefix":"fas","class":"fa-stroopwafel"},{"prefix":"fas","class":"fa-subscript"},{"prefix":"fas","class":"fa-subway"},{"prefix":"fas","class":"fa-suitcase"},{"prefix":"fas","class":"fa-suitcase-rolling"},{"prefix":"fas","class":"fa-sun"},{"prefix":"fas","class":"fa-sun-cloud"},{"prefix":"fas","class":"fa-sun-dust"},{"prefix":"fas","class":"fa-sun-haze"},{"prefix":"fas","class":"fa-sunglasses"},{"prefix":"fas","class":"fa-sunrise"},{"prefix":"fas","class":"fa-sunset"},{"prefix":"fas","class":"fa-superscript"},{"prefix":"fas","class":"fa-surprise"},{"prefix":"fas","class":"fa-swatchbook"},{"prefix":"fas","class":"fa-swimmer"},{"prefix":"fas","class":"fa-swimming-pool"},{"prefix":"fas","class":"fa-sword"},{"prefix":"fas","class":"fa-sword-laser"},{"prefix":"fas","class":"fa-sword-laser-alt"},{"prefix":"fas","class":"fa-swords"},{"prefix":"fas","class":"fa-swords-laser"},{"prefix":"fas","class":"fa-synagogue"},{"prefix":"fas","class":"fa-sync"},{"prefix":"fas","class":"fa-sync-alt"},{"prefix":"fas","class":"fa-syringe"},{"prefix":"fas","class":"fa-table"},{"prefix":"fas","class":"fa-table-tennis"},{"prefix":"fas","class":"fa-tablet"},{"prefix":"fas","class":"fa-tablet-alt"},{"prefix":"fas","class":"fa-tablet-android"},{"prefix":"fas","class":"fa-tablet-android-alt"},{"prefix":"fas","class":"fa-tablet-rugged"},{"prefix":"fas","class":"fa-tablets"},{"prefix":"fas","class":"fa-tachometer"},{"prefix":"fas","class":"fa-tachometer-alt"},{"prefix":"fas","class":"fa-tachometer-alt-average"},{"prefix":"fas","class":"fa-tachometer-alt-fast"},{"prefix":"fas","class":"fa-tachometer-alt-fastest"},{"prefix":"fas","class":"fa-tachometer-alt-slow"},{"prefix":"fas","class":"fa-tachometer-alt-slowest"},{"prefix":"fas","class":"fa-tachometer-average"},{"prefix":"fas","class":"fa-tachometer-fast"},{"prefix":"fas","class":"fa-tachometer-fastest"},{"prefix":"fas","class":"fa-tachometer-slow"},{"prefix":"fas","class":"fa-tachometer-slowest"},{"prefix":"fas","class":"fa-taco"},{"prefix":"fas","class":"fa-tag"},{"prefix":"fas","class":"fa-tags"},{"prefix":"fas","class":"fa-tally"},{"prefix":"fas","class":"fa-tanakh"},{"prefix":"fas","class":"fa-tape"},{"prefix":"fas","class":"fa-tasks"},{"prefix":"fas","class":"fa-tasks-alt"},{"prefix":"fas","class":"fa-taxi"},{"prefix":"fas","class":"fa-teeth"},{"prefix":"fas","class":"fa-teeth-open"},{"prefix":"fas","class":"fa-telescope"},{"prefix":"fas","class":"fa-temperature-down"},{"prefix":"fas","class":"fa-temperature-frigid"},{"prefix":"fas","class":"fa-temperature-high"},{"prefix":"fas","class":"fa-temperature-hot"},{"prefix":"fas","class":"fa-temperature-low"},{"prefix":"fas","class":"fa-temperature-up"},{"prefix":"fas","class":"fa-tenge"},{"prefix":"fas","class":"fa-tennis-ball"},{"prefix":"fas","class":"fa-terminal"},{"prefix":"fas","class":"fa-text"},{"prefix":"fas","class":"fa-text-height"},{"prefix":"fas","class":"fa-text-size"},{"prefix":"fas","class":"fa-text-width"},{"prefix":"fas","class":"fa-th"},{"prefix":"fas","class":"fa-th-large"},{"prefix":"fas","class":"fa-th-list"},{"prefix":"fas","class":"fa-theater-masks"},{"prefix":"fas","class":"fa-thermometer"},{"prefix":"fas","class":"fa-thermometer-empty"},{"prefix":"fas","class":"fa-thermometer-full"},{"prefix":"fas","class":"fa-thermometer-half"},{"prefix":"fas","class":"fa-thermometer-quarter"},{"prefix":"fas","class":"fa-thermometer-three-quarters"},{"prefix":"fas","class":"fa-theta"},{"prefix":"fas","class":"fa-thumbs-down"},{"prefix":"fas","class":"fa-thumbs-up"},{"prefix":"fas","class":"fa-thumbtack"},{"prefix":"fas","class":"fa-thunderstorm"},{"prefix":"fas","class":"fa-thunderstorm-moon"},{"prefix":"fas","class":"fa-thunderstorm-sun"},{"prefix":"fas","class":"fa-ticket"},{"prefix":"fas","class":"fa-ticket-alt"},{"prefix":"fas","class":"fa-tilde"},{"prefix":"fas","class":"fa-times"},{"prefix":"fas","class":"fa-times-circle"},{"prefix":"fas","class":"fa-times-hexagon"},{"prefix":"fas","class":"fa-times-octagon"},{"prefix":"fas","class":"fa-times-square"},{"prefix":"fas","class":"fa-tint"},{"prefix":"fas","class":"fa-tint-slash"},{"prefix":"fas","class":"fa-tire"},{"prefix":"fas","class":"fa-tire-flat"},{"prefix":"fas","class":"fa-tire-pressure-warning"},{"prefix":"fas","class":"fa-tire-rugged"},{"prefix":"fas","class":"fa-tired"},{"prefix":"fas","class":"fa-toggle-off"},{"prefix":"fas","class":"fa-toggle-on"},{"prefix":"fas","class":"fa-toilet"},{"prefix":"fas","class":"fa-toilet-paper"},{"prefix":"fas","class":"fa-toilet-paper-alt"},{"prefix":"fas","class":"fa-toilet-paper-slash"},{"prefix":"fas","class":"fa-tombstone"},{"prefix":"fas","class":"fa-tombstone-alt"},{"prefix":"fas","class":"fa-toolbox"},{"prefix":"fas","class":"fa-tools"},{"prefix":"fas","class":"fa-tooth"},{"prefix":"fas","class":"fa-toothbrush"},{"prefix":"fas","class":"fa-torah"},{"prefix":"fas","class":"fa-torii-gate"},{"prefix":"fas","class":"fa-tornado"},{"prefix":"fas","class":"fa-tractor"},{"prefix":"fas","class":"fa-trademark"},{"prefix":"fas","class":"fa-traffic-cone"},{"prefix":"fas","class":"fa-traffic-light"},{"prefix":"fas","class":"fa-traffic-light-go"},{"prefix":"fas","class":"fa-traffic-light-slow"},{"prefix":"fas","class":"fa-traffic-light-stop"},{"prefix":"fas","class":"fa-trailer"},{"prefix":"fas","class":"fa-train"},{"prefix":"fas","class":"fa-tram"},{"prefix":"fas","class":"fa-transgender"},{"prefix":"fas","class":"fa-transgender-alt"},{"prefix":"fas","class":"fa-transporter"},{"prefix":"fas","class":"fa-transporter-1"},{"prefix":"fas","class":"fa-transporter-2"},{"prefix":"fas","class":"fa-transporter-3"},{"prefix":"fas","class":"fa-transporter-empty"},{"prefix":"fas","class":"fa-trash"},{"prefix":"fas","class":"fa-trash-alt"},{"prefix":"fas","class":"fa-trash-restore"},{"prefix":"fas","class":"fa-trash-restore-alt"},{"prefix":"fas","class":"fa-trash-undo"},{"prefix":"fas","class":"fa-trash-undo-alt"},{"prefix":"fas","class":"fa-treasure-chest"},{"prefix":"fas","class":"fa-tree"},{"prefix":"fas","class":"fa-tree-alt"},{"prefix":"fas","class":"fa-tree-christmas"},{"prefix":"fas","class":"fa-tree-decorated"},{"prefix":"fas","class":"fa-tree-large"},{"prefix":"fas","class":"fa-tree-palm"},{"prefix":"fas","class":"fa-trees"},{"prefix":"fas","class":"fa-triangle"},{"prefix":"fas","class":"fa-triangle-music"},{"prefix":"fas","class":"fa-trophy"},{"prefix":"fas","class":"fa-trophy-alt"},{"prefix":"fas","class":"fa-truck"},{"prefix":"fas","class":"fa-truck-container"},{"prefix":"fas","class":"fa-truck-couch"},{"prefix":"fas","class":"fa-truck-loading"},{"prefix":"fas","class":"fa-truck-monster"},{"prefix":"fas","class":"fa-truck-moving"},{"prefix":"fas","class":"fa-truck-pickup"},{"prefix":"fas","class":"fa-truck-plow"},{"prefix":"fas","class":"fa-truck-ramp"},{"prefix":"fas","class":"fa-trumpet"},{"prefix":"fas","class":"fa-tshirt"},{"prefix":"fas","class":"fa-tty"},{"prefix":"fas","class":"fa-turkey"},{"prefix":"fas","class":"fa-turntable"},{"prefix":"fas","class":"fa-turtle"},{"prefix":"fas","class":"fa-tv"},{"prefix":"fas","class":"fa-tv-alt"},{"prefix":"fas","class":"fa-tv-music"},{"prefix":"fas","class":"fa-tv-retro"},{"prefix":"fas","class":"fa-typewriter"},{"prefix":"fas","class":"fa-ufo"},{"prefix":"fas","class":"fa-ufo-beam"},{"prefix":"fas","class":"fa-umbrella"},{"prefix":"fas","class":"fa-umbrella-beach"},{"prefix":"fas","class":"fa-underline"},{"prefix":"fas","class":"fa-undo"},{"prefix":"fas","class":"fa-undo-alt"},{"prefix":"fas","class":"fa-unicorn"},{"prefix":"fas","class":"fa-union"},{"prefix":"fas","class":"fa-universal-access"},{"prefix":"fas","class":"fa-university"},{"prefix":"fas","class":"fa-unlink"},{"prefix":"fas","class":"fa-unlock"},{"prefix":"fas","class":"fa-unlock-alt"},{"prefix":"fas","class":"fa-upload"},{"prefix":"fas","class":"fa-usb-drive"},{"prefix":"fas","class":"fa-usd-circle"},{"prefix":"fas","class":"fa-usd-square"},{"prefix":"fas","class":"fa-user"},{"prefix":"fas","class":"fa-user-alien"},{"prefix":"fas","class":"fa-user-alt"},{"prefix":"fas","class":"fa-user-alt-slash"},{"prefix":"fas","class":"fa-user-astronaut"},{"prefix":"fas","class":"fa-user-chart"},{"prefix":"fas","class":"fa-user-check"},{"prefix":"fas","class":"fa-user-circle"},{"prefix":"fas","class":"fa-user-clock"},{"prefix":"fas","class":"fa-user-cog"},{"prefix":"fas","class":"fa-user-cowboy"},{"prefix":"fas","class":"fa-user-crown"},{"prefix":"fas","class":"fa-user-edit"},{"prefix":"fas","class":"fa-user-friends"},{"prefix":"fas","class":"fa-user-graduate"},{"prefix":"fas","class":"fa-user-hard-hat"},{"prefix":"fas","class":"fa-user-headset"},{"prefix":"fas","class":"fa-user-injured"},{"prefix":"fas","class":"fa-user-lock"},{"prefix":"fas","class":"fa-user-md"},{"prefix":"fas","class":"fa-user-md-chat"},{"prefix":"fas","class":"fa-user-minus"},{"prefix":"fas","class":"fa-user-music"},{"prefix":"fas","class":"fa-user-ninja"},{"prefix":"fas","class":"fa-user-nurse"},{"prefix":"fas","class":"fa-user-plus"},{"prefix":"fas","class":"fa-user-robot"},{"prefix":"fas","class":"fa-user-secret"},{"prefix":"fas","class":"fa-user-shield"},{"prefix":"fas","class":"fa-user-slash"},{"prefix":"fas","class":"fa-user-tag"},{"prefix":"fas","class":"fa-user-tie"},{"prefix":"fas","class":"fa-user-times"},{"prefix":"fas","class":"fa-user-unlock"},{"prefix":"fas","class":"fa-user-visor"},{"prefix":"fas","class":"fa-users"},{"prefix":"fas","class":"fa-users-class"},{"prefix":"fas","class":"fa-users-cog"},{"prefix":"fas","class":"fa-users-crown"},{"prefix":"fas","class":"fa-users-medical"},{"prefix":"fas","class":"fa-users-slash"},{"prefix":"fas","class":"fa-utensil-fork"},{"prefix":"fas","class":"fa-utensil-knife"},{"prefix":"fas","class":"fa-utensil-spoon"},{"prefix":"fas","class":"fa-utensils"},{"prefix":"fas","class":"fa-utensils-alt"},{"prefix":"fas","class":"fa-vacuum"},{"prefix":"fas","class":"fa-vacuum-robot"},{"prefix":"fas","class":"fa-value-absolute"},{"prefix":"fas","class":"fa-vector-square"},{"prefix":"fas","class":"fa-venus"},{"prefix":"fas","class":"fa-venus-double"},{"prefix":"fas","class":"fa-venus-mars"},{"prefix":"fas","class":"fa-vest"},{"prefix":"fas","class":"fa-vest-patches"},{"prefix":"fas","class":"fa-vhs"},{"prefix":"fas","class":"fa-vial"},{"prefix":"fas","class":"fa-vials"},{"prefix":"fas","class":"fa-video"},{"prefix":"fas","class":"fa-video-plus"},{"prefix":"fas","class":"fa-video-slash"},{"prefix":"fas","class":"fa-vihara"},{"prefix":"fas","class":"fa-violin"},{"prefix":"fas","class":"fa-virus"},{"prefix":"fas","class":"fa-virus-slash"},{"prefix":"fas","class":"fa-viruses"},{"prefix":"fas","class":"fa-voicemail"},{"prefix":"fas","class":"fa-volcano"},{"prefix":"fas","class":"fa-volleyball-ball"},{"prefix":"fas","class":"fa-volume"},{"prefix":"fas","class":"fa-volume-down"},{"prefix":"fas","class":"fa-volume-mute"},{"prefix":"fas","class":"fa-volume-off"},{"prefix":"fas","class":"fa-volume-slash"},{"prefix":"fas","class":"fa-volume-up"},{"prefix":"fas","class":"fa-vote-nay"},{"prefix":"fas","class":"fa-vote-yea"},{"prefix":"fas","class":"fa-vr-cardboard"},{"prefix":"fas","class":"fa-wagon-covered"},{"prefix":"fas","class":"fa-walker"},{"prefix":"fas","class":"fa-walkie-talkie"},{"prefix":"fas","class":"fa-walking"},{"prefix":"fas","class":"fa-wallet"},{"prefix":"fas","class":"fa-wand"},{"prefix":"fas","class":"fa-wand-magic"},{"prefix":"fas","class":"fa-warehouse"},{"prefix":"fas","class":"fa-warehouse-alt"},{"prefix":"fas","class":"fa-washer"},{"prefix":"fas","class":"fa-watch"},{"prefix":"fas","class":"fa-watch-calculator"},{"prefix":"fas","class":"fa-watch-fitness"},{"prefix":"fas","class":"fa-water"},{"prefix":"fas","class":"fa-water-lower"},{"prefix":"fas","class":"fa-water-rise"},{"prefix":"fas","class":"fa-wave-sine"},{"prefix":"fas","class":"fa-wave-square"},{"prefix":"fas","class":"fa-wave-triangle"},{"prefix":"fas","class":"fa-waveform"},{"prefix":"fas","class":"fa-waveform-path"},{"prefix":"fas","class":"fa-webcam"},{"prefix":"fas","class":"fa-webcam-slash"},{"prefix":"fas","class":"fa-weight"},{"prefix":"fas","class":"fa-weight-hanging"},{"prefix":"fas","class":"fa-whale"},{"prefix":"fas","class":"fa-wheat"},{"prefix":"fas","class":"fa-wheelchair"},{"prefix":"fas","class":"fa-whistle"},{"prefix":"fas","class":"fa-wifi"},{"prefix":"fas","class":"fa-wifi-1"},{"prefix":"fas","class":"fa-wifi-2"},{"prefix":"fas","class":"fa-wifi-slash"},{"prefix":"fas","class":"fa-wind"},{"prefix":"fas","class":"fa-wind-turbine"},{"prefix":"fas","class":"fa-wind-warning"},{"prefix":"fas","class":"fa-window"},{"prefix":"fas","class":"fa-window-alt"},{"prefix":"fas","class":"fa-window-close"},{"prefix":"fas","class":"fa-window-frame"},{"prefix":"fas","class":"fa-window-frame-open"},{"prefix":"fas","class":"fa-window-maximize"},{"prefix":"fas","class":"fa-window-minimize"},{"prefix":"fas","class":"fa-window-restore"},{"prefix":"fas","class":"fa-windsock"},{"prefix":"fas","class":"fa-wine-bottle"},{"prefix":"fas","class":"fa-wine-glass"},{"prefix":"fas","class":"fa-wine-glass-alt"},{"prefix":"fas","class":"fa-won-sign"},{"prefix":"fas","class":"fa-wreath"},{"prefix":"fas","class":"fa-wrench"},{"prefix":"fas","class":"fa-x-ray"},{"prefix":"fas","class":"fa-yen-sign"},{"prefix":"fas","class":"fa-yin-yang"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/assets/icon-picker.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _IconPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconPicker */ "./src/assets/IconPicker.vue");


var $ = window.jQuery;
window.WordplateFontawesomePicker = {
  inputElement: null,
  open: function open(inputElement) {
    this.inputElement = inputElement;
    $('body').append('<div id="iconpicker"><icon-picker></icon-picker></div>');
    this.createVueApp(vue__WEBPACK_IMPORTED_MODULE_1__.default, {
      el: '#iconpicker',
      components: {
        IconPicker: _IconPicker__WEBPACK_IMPORTED_MODULE_0__.default
      }
    });
  },
  createVueApp: function createVueApp(Vue, options) {
    return new Vue(options);
  }
};
})();

/******/ })()
;