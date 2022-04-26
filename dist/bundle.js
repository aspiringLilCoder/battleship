/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bomb.png */ "./img/bomb.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Fredoka', sans-serif;\n  height: 100vh;\n  background: #f0f8ff;\n  color: #4e4e4e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nbutton {\n  border-radius: 25px;\n  font-family: 'Fredoka', sans-serif;\n  border: none;\n  cursor: pointer;\n}\n\n#title {\n  text-align: center;\n  margin: 20px;\n  font-size: 70px;\n  font-weight: 500;\n}\n\n#home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 120px;\n}\n\n#home #setShipsGameboard {\n  width: 500px;\n  height: 500px;\n  margin-right: 100px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#home #setShipsGameboard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#home #setShipsGameboard .carrier {\n  background-color: #a8e6cf   !important;\n}\n\n#home #setShipsGameboard .battleship {\n  background-color: #dcedc1   !important;\n}\n\n#home #setShipsGameboard .destroyer {\n  background-color: #ffd3b6   !important;\n}\n\n#home #setShipsGameboard .submarine {\n  background-color: #ffaaa5   !important;\n}\n\n#home #setShipsGameboard .patrol-boat {\n  background-color: #ff8b94 !important;\n}\n\n#home #sideOptions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#home #sideOptions #instructionsDisplay {\n  color: #f0f8ff;\n  width: 250px;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #4e4e4e;\n  border-radius: 25px;\n  font-size: 20px;\n  padding: 5px;\n  font-weight: 500;\n}\n\n#home #sideOptions .start {\n  background-color: #ffdddd !important;\n  color: #000000 !important;\n}\n\n#home #sideOptions .start:hover {\n  background-color: #ffc2c2 !important;\n  cursor: pointer;\n}\n\n#home #sideOptions .start:active {\n  background-color: #ffaaaa !important;\n}\n\n#home #sideOptions .changingDisplay {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@-webkit-keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#home #sideOptions button {\n  width: 200px;\n  height: 50px;\n  margin-top: 25px;\n  background-color: #d1d1d1;\n  font-size: 20px;\n}\n\n#home #sideOptions button:hover {\n  background-color: #bfbfbf;\n}\n\n#home #sideOptions button:active {\n  background-color: #5d5d5d;\n}\n\n#game {\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #turnDisplay {\n  font-size: 35px;\n  font-weight: 600;\n  margin: 20px;\n  padding-top: 16px;\n  background-color: #cacaca;\n  border-radius: 25px;\n  width: 500px;\n  height: 70px;\n  text-align: center;\n}\n\n#game #turnText {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#game #gameBoards {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n\n#game #gameBoards #left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #left #myBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n  margin-right: 40px;\n}\n\n#game #gameBoards #left #myBoard .square {\n  border: 1px solid #4e4e4e;\n  position: relative;\n}\n\n#game #gameBoards #left #myBoard .square img {\n  position: absolute;\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .vertical {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .selected {\n  background-color: #c1c1c1 !important;\n}\n\n#game #gameBoards #left #myBoardTitle {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n#game #gameBoards #right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #right #AIBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  margin-left: 40px;\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#game #gameBoards #right #AIBoard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#game #gameBoards #right #AIBoard .hovered:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#game #gameBoards #right #AIBoardTitle {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n#game #restartGame {\n  font-size: 30px;\n  font-weight: 600;\n  margin: 20px;\n  background-color: #cacaca;\n  color: #4e4e4e;\n  border-radius: 25px;\n  width: 200px;\n  height: 70px;\n  text-align: center;\n}\n\n#game #restartGame:hover {\n  background-color: #bfbfbf;\n}\n\n#game #restartGame:active {\n  background-color: #5d5d5d;\n}\n\nfooter {\n  margin-top: auto;\n  height: 20px;\n  background-color: #4e4e4e;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a {\n  color: #f0f8ff;\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a:hover {\n  color: #cfcfcf;\n}\n\nfooter a:active {\n  color: #5d5d5d;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allAIShips": () => (/* binding */ allAIShips),
/* harmony export */   "allShips": () => (/* binding */ allShips)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_github_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/github-logo.png */ "./img/github-logo.png");
/* harmony import */ var _modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shipFactory */ "./src/modules/shipFactory.js");
/* harmony import */ var _modules_createBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var _modules_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/axis */ "./src/modules/axis.js");
/* harmony import */ var _modules_setShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setShips */ "./src/modules/setShips.js");
/* harmony import */ var _modules_instructionsDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/instructionsDisplay */ "./src/modules/instructionsDisplay.js");
/* harmony import */ var _modules_restartGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/restartGame */ "./src/modules/restartGame.js");
/* harmony import */ var _modules_placeAIships__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/placeAIships */ "./src/modules/placeAIships.js");
/* harmony import */ var _modules_attack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/attack */ "./src/modules/attack.js");











(document.getElementById('github-logo')).src = _img_github_logo_png__WEBPACK_IMPORTED_MODULE_1__;

let carrier = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier', 5);
let battleship = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship', 4);
let destroyer = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer', 3);
let submarine = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('submarine', 3);
let patrol_boat = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('patrol boat', 2);

let AIcarrier = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier', 5);
let AIbattleship = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship', 4);
let AIdestroyer = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer', 3);
let AIsubmarine = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('submarine', 3);
let AIpatrol_boat = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('patrol boat', 2);

let allShips = {
    carrier: carrier,
    battleship: battleship,
    destroyer: destroyer,
    submarine: submarine,
    'patrol boat': patrol_boat
}

let allAIShips = {
    AIcarrier: AIcarrier,
    AIbattleship: AIbattleship,
    AIdestroyer: AIdestroyer,
    AIsubmarine: AIsubmarine,
    'AI patrol boat': AIpatrol_boat
}

const Start = (function() {
    ;(0,_modules_createBoard__WEBPACK_IMPORTED_MODULE_3__.createBoard)(document.querySelector('#setShipsGameboard'));
    (0,_modules_createBoard__WEBPACK_IMPORTED_MODULE_3__.createBoard)(document.querySelector('#myBoard'));
    (0,_modules_createBoard__WEBPACK_IMPORTED_MODULE_3__.createBoard)(document.querySelector('#AIBoard'));
    (0,_modules_axis__WEBPACK_IMPORTED_MODULE_4__.axisChange)();
    (0,_modules_instructionsDisplay__WEBPACK_IMPORTED_MODULE_6__.instructionDisplay)(_modules_instructionsDisplay__WEBPACK_IMPORTED_MODULE_6__.currentShip);
    _modules_setShips__WEBPACK_IMPORTED_MODULE_5__.setShips.shipsHover(); 
    _modules_setShips__WEBPACK_IMPORTED_MODULE_5__.setShips.shipClick(); 
    _modules_setShips__WEBPACK_IMPORTED_MODULE_5__.setShips.shipResetListener();
    (0,_modules_placeAIships__WEBPACK_IMPORTED_MODULE_8__.placeAIShips)();
    (0,_modules_restartGame__WEBPACK_IMPORTED_MODULE_7__.restartGame)();
    _modules_attack__WEBPACK_IMPORTED_MODULE_9__.Attack.playerHover();
})();




/***/ }),

/***/ "./src/modules/attack.js":
/*!*******************************!*\
  !*** ./src/modules/attack.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attack": () => (/* binding */ Attack)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _img_explode_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/explode.png */ "./img/explode.png");
/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBoard */ "./src/modules/createBoard.js");




const Attack = (function () {
    let turn = 'player';

    // const getCurrentShipPlacements = () => {
    //     let object = {
    //         playerPlacement: {},
    //         AIPlacement: {}
    //     };
    //     for (const prop in allShips) {
    //         playerPlacement[prop] = allShips[prop][shipPlacement];
    //         AIPlacement[prop] = allAIShips[prop][shipPlacement];
    //     }
    //     return object;
    // }

    const changeTurn = () => {
        const turnText_p = document.querySelector('#turnText');
        if (turn == 'player') {
            resetHover();
            turn = 'AI';
            turnText_p.textContent = "Awaiting Opponent's Attack";
            AIAttack();
        } else {
            playerHover();
            turn = 'player';
            turnText_p.textContent = "It's your turn to attack!";
            playerAttack();
        }
    }

    const resetHover = () => {
        const allAISquares = document.querySelectorAll('#AIBoard .square');

        allAISquares.forEach(el => {
            el.classList.remove('hovered');
        })
    }

    const playerHover = () => {
        const allAISquares = document.querySelectorAll('#AIBoard .square');

        allAISquares.forEach(el => {
            el.classList.add('hovered');
        })
    }

    const playerAttack = () => {
        allAISquares.forEach(el => {
            el.addEventListener('click', e => {
                
                const img = document.createElement('img');
                img.src = _img_explode_png__WEBPACK_IMPORTED_MODULE_1__;
                el.appendChild(img);

                changeTurn();
            })
        })
    }

    const AIAttack = () => {

        changeTurn();
    }


    return { playerHover };
})();

/***/ }),

/***/ "./src/modules/axis.js":
/*!*****************************!*\
  !*** ./src/modules/axis.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axisChange": () => (/* binding */ axisChange),
/* harmony export */   "axisVar": () => (/* binding */ axisVar)
/* harmony export */ });
let axisVar = 'horizontal';

function axisChange() {
    let axis_button = document.getElementById('axis');
    axis_button.addEventListener('click', () => {
        console.log('clicked');
        if (axis_button.textContent == 'Horizontal') {
            axis_button.textContent = 'Vertical';
            axisVar = 'vertical';
        } else {
            axis_button.textContent = 'Horizontal';
            axisVar = 'horizontal';
        }
    });
}

/***/ }),

/***/ "./src/modules/createBoard.js":
/*!************************************!*\
  !*** ./src/modules/createBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "listOfSquareClasses": () => (/* binding */ listOfSquareClasses)
/* harmony export */ });
let listOfSquareClasses = [];

function createBoard(containerElement) {
    let letters = 'ABCDEFGHIJ';
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < 10; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.classList.add(`${letters[i]}${j+1}`);
            listOfSquareClasses.push(`${letters[i]}${j+1}`);
            containerElement.appendChild(div);
        }
    }
}

// createBoard(document.querySelector('#setShipsGameboard'));

/***/ }),

/***/ "./src/modules/generateOwnShips.js":
/*!*****************************************!*\
  !*** ./src/modules/generateOwnShips.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeImg": () => (/* binding */ placeImg)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _img_carrier_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../img/carrier.png */ "./img/carrier.png");
/* harmony import */ var _img_battleship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../img/battleship.png */ "./img/battleship.png");
/* harmony import */ var _img_destroyer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../img/destroyer.png */ "./img/destroyer.png");
/* harmony import */ var _img_submarine_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../img/submarine.png */ "./img/submarine.png");
/* harmony import */ var _img_patrol_boat_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../img/patrol_boat.png */ "./img/patrol_boat.png");







function placeImg(ship) {
    let img = '';
    ship == 'carrier' ? img = _img_carrier_png__WEBPACK_IMPORTED_MODULE_1__:false;
    ship == 'battleship' ? img = _img_battleship_png__WEBPACK_IMPORTED_MODULE_2__:false;
    ship == 'destroyer' ? img = _img_destroyer_png__WEBPACK_IMPORTED_MODULE_3__:false;
    ship == 'patrol boat' ? img = _img_patrol_boat_png__WEBPACK_IMPORTED_MODULE_5__:false;
    ship == 'submarine' ? img = _img_submarine_png__WEBPACK_IMPORTED_MODULE_4__:false;

    let imgEl = document.createElement('img');
    imgEl.src = img;
    if (ship == 'patrol boat') {
        imgEl.classList.add('patrol');
    }
    
    let squareName = ___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].shipPlacement[0];
    let mySquare = document.querySelector(`#myBoard .${squareName}`);
    const letters = 'ABCDEFGHIJ';
    let num = parseInt(squareName.slice(1, 3), 10);
    let letter = squareName[0];
    ___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].axis == 'vertical' ? document.querySelector(`#myBoard .${letter}${num}`).classList.add("vertical"): false;
    
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].length; i++) {
        if(___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].axis == 'horizontal') {
            document.querySelector(`#myBoard .${letter}${num+i}`).classList.add('selected');
        } else {
            document.querySelector(`#myBoard .${letters[letters.indexOf(letter)+i]}${num}`).classList.add('selected');
        } 
    }
    mySquare.appendChild(imgEl);
}


/***/ }),

/***/ "./src/modules/instructionsDisplay.js":
/*!********************************************!*\
  !*** ./src/modules/instructionsDisplay.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentShip": () => (/* binding */ currentShip),
/* harmony export */   "instructionDisplay": () => (/* binding */ instructionDisplay)
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./src/modules/startGame.js");


const instructionsText_p = document.getElementById('instructionsText');
const instructionsDisplay_div = document.getElementById('instructionsDisplay');

let currentShip = 'start';

function instructionDisplay(ship) {
    if (ship == 'Patrol Boat') {
        instructionsText_p.textContent = 'PRESS TO START';
        instructionsDisplay_div.classList.add('start');
        currentShip = 'finish';
        (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.startGame)();
        return;
    }
    const shipOrder = ['start', 'Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    instructionsText_p.textContent = `Place your ${shipOrder[shipOrder.indexOf(ship) + 1]}...`;
    instructionsText_p.classList.add('changingDisplay');
    currentShip = shipOrder[shipOrder.indexOf(ship) + 1];
    const removeAnimationCLass = () => {
        instructionsText_p.classList.remove('changingDisplay');
    }
    setTimeout(removeAnimationCLass, 3000);
}

// instructionDisplay('Submarine');

/***/ }),

/***/ "./src/modules/placeAIships.js":
/*!*************************************!*\
  !*** ./src/modules/placeAIships.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeAIShips": () => (/* binding */ placeAIShips)
/* harmony export */ });
/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");



function placeAIShips() {
    function getRandomCoord() {
        return _createBoard__WEBPACK_IMPORTED_MODULE_0__.listOfSquareClasses[Math.floor(Math.random() * (49 - 0 + 1)) + 0];
    }

    function getRandomAxis() {
        let axis = ['horizontal', 'vertical'];
        return axis[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
    }
    
    const ships = ['AIcarrier', 'AIbattleship', 'AIdestroyer', 'AIsubmarine', 'AI patrol boat'];
    let currentShip = 'AIcarrier';

    function changeShip() {
        if (currentShip == 'AI patrol boat') {
            return;
        } else {
            currentShip = ships[ships.indexOf(currentShip) + 1];
            setAIShips();
        }
    }

    function setAIShips() {
        let randomCoord = getRandomCoord();
        let axisVar = getRandomAxis();
        let currentShipObj = ___WEBPACK_IMPORTED_MODULE_1__.allAIShips[currentShip];
        let letter = randomCoord[0];
        let num = parseInt(randomCoord.slice(1, 3), 10);
        let valid = true;
        let letters = 'ABCDEFGHIJ';
        for (let i = 0; i < currentShipObj.length; i++) {
            if(axisVar == 'horizontal') {
                if (document.querySelector(`#AIBoard .${letter}${num+i}`) == null) {
                    for (let j = 0; j < currentShipObj.length; j++) {
                        valid = false;
                    }
                } else {
                    valid = true;
                }
            } else {
                if (document.querySelector(`#AIBoard .${letters[letters.indexOf(letter)+i]}${num}`) == null) {
                    for (let j = 0; j < currentShipObj.length; j++) {
                        valid = false;
                    }
                } else {
                    valid = true;
                }
            }
        }

        if (valid == false) {

        } else {
            for (let i = 0; i < currentShipObj.length; i++) {
                if(axisVar == 'horizontal' && document.querySelector(`#AIBoard .${letter}${num+i}`).classList.contains('selected')) {
                    valid = false;
                } else if(axisVar == 'vertical' && document.querySelector(`#AIBoard .${letters[letters.indexOf(letter)+i]}${num}`).classList.contains('selected')) {
                    valid = false;
                } 
            }

            for (let i = 0; i < currentShipObj.length; i++) {
                if(valid == true) {
                    if(axisVar == 'horizontal') {
                        (currentShipObj.shipPlacement).push(`${letter}${num+i}`);
                        currentShipObj.axis = axisVar;
                        let selectedSquare = document.querySelector(`#AIBoard .${letter}${num+i}`);
                        selectedSquare.classList.add('selected');
                         currentShipObj.name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                        : (currentShipObj.name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                        : (currentShipObj.name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                        : (currentShipObj.name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                        : (currentShipObj.name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                        : false))))
                        
                    } else {
                        currentShipObj.axis = axisVar;
                        (currentShipObj.shipPlacement).push(`${letters[letters.indexOf(letter)+i]}${num}`);
                        let selectedSquare = document.querySelector(`#AIBoard .${letters[letters.indexOf(letter)+i]}${num}`);
                        selectedSquare.classList.add('selected');
                        currentShipObj.name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                        : (currentShipObj.name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                        : (currentShipObj.name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                        : (currentShipObj.name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                        : (currentShipObj.name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                        : false))))
                    } 
                    
                }
            }
            if (valid == true) {
                changeShip();
            } else {
                setAIShips();
            }

        }

        /////////////////////////////////////////////
    }

    setAIShips();
}

/***/ }),

/***/ "./src/modules/restartGame.js":
/*!************************************!*\
  !*** ./src/modules/restartGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restartGame": () => (/* binding */ restartGame)
/* harmony export */ });

function restartGame() {
    document.querySelector('#restartGame').addEventListener('click', () => {
        location.reload();
        return false;
    });
}

/***/ }),

/***/ "./src/modules/setShips.js":
/*!*********************************!*\
  !*** ./src/modules/setShips.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setShips": () => (/* binding */ setShips)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axis */ "./src/modules/axis.js");
/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var _instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructionsDisplay */ "./src/modules/instructionsDisplay.js");





const letters = 'ABCDEFGHIJ';

let setShips = (function() {
    let valid = true;

    let shipsHover = () => {
        const squares_div = document.querySelectorAll('#setShipsGameboard .square');

        squares_div.forEach(el => {
            let resetColor = () => {
                _createBoard__WEBPACK_IMPORTED_MODULE_2__.listOfSquareClasses.forEach(el => {
                    document.querySelector(`#setShipsGameboard .${el}`).style.backgroundColor = '#f0f8ff';

                })
            };

            el.addEventListener('mouseover', (e) => {
                let currentShipObj = ___WEBPACK_IMPORTED_MODULE_0__.allShips[_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.currentShip.toLowerCase()];

                resetColor();

                let letter = e.target.classList[1][0];
                let num = parseInt(e.target.classList[1].slice(1, 3), 10);

                for (let i = 0; i < currentShipObj.length; i++) {
                    if(_axis__WEBPACK_IMPORTED_MODULE_1__.axisVar == 'horizontal') {
                        if (document.querySelector(`#setShipsGameboard .${letter}${num+i}`) == null) {
                            for (let j = 0; j < currentShipObj.length; j++) {
                                document.querySelector(`#setShipsGameboard .${letter}${num+j}`).style.backgroundColor = '#ff8080';
                                valid = false;
                            }
                        } else {
                            document.querySelector(`#setShipsGameboard .${letter}${num+i}`).style.backgroundColor = '#8b8b8b';
                            valid = true;
                        }
                    } else {
                        if (document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`) == null) {
                            for (let j = 0; j < currentShipObj.length; j++) {
                                valid = false;
                                document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+j]}${num}`).style.backgroundColor = '#ff8080';
                            }
                        } else {
                            valid = true;
                            document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`).style.backgroundColor = '#8b8b8b';
                        }
                    }
                }
            });

            el.addEventListener('mouseout', () => {
                resetColor();
            });
        });
    }


    let shipClick = function() {
        const squares_div = document.querySelectorAll('#setShipsGameboard .square');

        squares_div.forEach(el => {
            el.addEventListener('click', (e) => {
                let audio = document.querySelector("#splashAudio");

                let currentShipObj = ___WEBPACK_IMPORTED_MODULE_0__.allShips[_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.currentShip.toLowerCase()];
                if (valid == false || _instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.currentShip == 'finish') {

                } else {
                    let letter = e.target.classList[1][0];
                    let num = parseInt(e.target.classList[1].slice(1, 3), 10);
                    for (let i = 0; i < currentShipObj.length; i++) {
                        if(_axis__WEBPACK_IMPORTED_MODULE_1__.axisVar == 'horizontal' && document.querySelector(`#setShipsGameboard .${letter}${num+i}`).classList.contains('selected')) {
                            valid = false;
                        } else if(_axis__WEBPACK_IMPORTED_MODULE_1__.axisVar == 'vertical' && document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`).classList.contains('selected')) {
                            valid = false;
                        } 
                    }

                    for (let i = 0; i < currentShipObj.length; i++) {
                        if(valid == true) {
                            if(_axis__WEBPACK_IMPORTED_MODULE_1__.axisVar == 'horizontal') {
                                (currentShipObj.shipPlacement).push(`${letter}${num+i}`);
                                currentShipObj.axis = _axis__WEBPACK_IMPORTED_MODULE_1__.axisVar;
                                let selectedSquare = document.querySelector(`#setShipsGameboard .${letter}${num+i}`);
                                selectedSquare.classList.add('selected');
                                 currentShipObj.name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                                : (currentShipObj.name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                                : (currentShipObj.name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                                : (currentShipObj.name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                                : (currentShipObj.name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                                : false))))
                            } else {
                                currentShipObj.axis = _axis__WEBPACK_IMPORTED_MODULE_1__.axisVar;
                                (currentShipObj.shipPlacement).push(`${letters[letters.indexOf(letter)+i]}${num}`);
                                let selectedSquare = document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`);
                                selectedSquare.classList.add('selected');
                                currentShipObj.name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                                : (currentShipObj.name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                                : (currentShipObj.name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                                : (currentShipObj.name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                                : (currentShipObj.name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                                : false))))
                            } 
                            
                        }
                    }
                    if (valid == true) {
                        (0,_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.instructionDisplay)(_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.currentShip);
                        audio.currentTime= 0;
                        audio.play();
                    }

                }
            })
        })
    };

    let shipReset = () => {
        _createBoard__WEBPACK_IMPORTED_MODULE_2__.listOfSquareClasses.forEach(el => {
            document.querySelector(`#setShipsGameboard .${el}`).style.backgroundColor = '#f0f8ff';
            document.querySelector(`#setShipsGameboard .${el}`).classList.remove('carrier');
            document.querySelector(`#setShipsGameboard .${el}`).classList.remove('battleship');
            document.querySelector(`#setShipsGameboard .${el}`).classList.remove('destroyer');
            document.querySelector(`#setShipsGameboard .${el}`).classList.remove('submarine');
            document.querySelector(`#setShipsGameboard .${el}`).classList.remove('patrol-boat');
            document.querySelector(`#setShipsGameboard .${el}`).classList.remove('selected');
            for (const prop in ___WEBPACK_IMPORTED_MODULE_0__.allShips) {
                ___WEBPACK_IMPORTED_MODULE_0__.allShips[prop].shipPlacement = [];
            }
        })
    }

    let shipResetListener = () => {
        document.querySelector('#resetBoard').addEventListener('click', () => {
            shipReset();
            (0,_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.instructionDisplay)('start');
        })
    }

    return {
        shipsHover,
        shipClick,
        shipReset,
        shipResetListener
    }
})();


/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory)
/* harmony export */ });

function shipFactory(name, length) {
    let placesHit = [];
    for (let i = 0; i < length; i++) {
        placesHit.push(false);
    }

    const hit = (index, instanceName) => {
        let placesHit = instanceName.placesHit;
        placesHit[index] == undefined ? console.log('Hit is undefined') : placesHit[index] = true;
    } 

    const isSunk = (arr) => arr.every(el => el == true);

    let shipPlacement = [];

    let axis = '';

    return {name, length, placesHit, hit, isSunk, shipPlacement, axis};
}

/***/ }),

/***/ "./src/modules/startGame.js":
/*!**********************************!*\
  !*** ./src/modules/startGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var _generateOwnShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateOwnShips */ "./src/modules/generateOwnShips.js");



function startGame() {
    const startBtn = document.querySelector('.start');
    const homeDiv = document.querySelector('#home');
    const gameDiv = document.querySelector('#game');
    startBtn.addEventListener('click', () => {
        homeDiv.style.display = 'none';
        gameDiv.style.display = 'flex';
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_1__.placeImg)('carrier');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_1__.placeImg)('battleship');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_1__.placeImg)('destroyer');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_1__.placeImg)('submarine');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_1__.placeImg)('patrol boat');
    })
}

/***/ }),

/***/ "./img/battleship.png":
/*!****************************!*\
  !*** ./img/battleship.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c7782b59cebcd51cebf3.png";

/***/ }),

/***/ "./img/bomb.png":
/*!**********************!*\
  !*** ./img/bomb.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/00b36b1d8b0e9cd23d12.png";

/***/ }),

/***/ "./img/carrier.png":
/*!*************************!*\
  !*** ./img/carrier.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c114ae77c0f14d9a0895.png";

/***/ }),

/***/ "./img/destroyer.png":
/*!***************************!*\
  !*** ./img/destroyer.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/59a4b75fd60e5288e246.png";

/***/ }),

/***/ "./img/explode.png":
/*!*************************!*\
  !*** ./img/explode.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/eb0d11a13aa0c2ac8937.png";

/***/ }),

/***/ "./img/github-logo.png":
/*!*****************************!*\
  !*** ./img/github-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0035c307a36c17babb8d.png";

/***/ }),

/***/ "./img/patrol_boat.png":
/*!*****************************!*\
  !*** ./img/patrol_boat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c2de500ac3af6825fe2a.png";

/***/ }),

/***/ "./img/submarine.png":
/*!***************************!*\
  !*** ./img/submarine.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/222c5e34fbfc2a70579a.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFlBQVksWUFBWSxjQUFjLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFVBQVUsV0FBVyxZQUFZLGNBQWMsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLGFBQWEsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sYUFBYSxZQUFZLFlBQVksZUFBZSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsWUFBWSxZQUFZLGVBQWUsWUFBWSxZQUFZLFdBQVcsT0FBTyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxLQUFLLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLGFBQWEsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxjQUFjLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLE1BQU0sYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLFFBQVEsTUFBTSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxh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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2F0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY3JlYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlT3duU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luc3RydWN0aW9uc0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYWNlQUlzaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcmVzdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NldFNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYm9tYi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdGcmVkb2thJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmOGZmO1xcbiAgY29sb3I6ICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmb250LWZhbWlseTogJ0ZyZWRva2EnLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2hvbWUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgLW1zLWdyaWQtcm93czogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLmNhcnJpZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZTZjZiAgICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuYmF0dGxlc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlZGMxICAgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NldFNoaXBzR2FtZWJvYXJkIC5kZXN0cm95ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDNiNiAgICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuc3VibWFyaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhYTUgICAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLnBhdHJvbC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiOTQgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgI2luc3RydWN0aW9uc0Rpc3BsYXkge1xcbiAgY29sb3I6ICNmMGY4ZmY7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5zdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLnN0YXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMyYzIgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5zdGFydDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWFhYSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLmNoYW5naW5nRGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyNSwgZW5kKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjUsIGVuZCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIGJ1dHRvbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ1ZDVkO1xcbn1cXG5cXG4jZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjdHVybkRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lICN0dXJuVGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyNSwgZW5kKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjUsIGVuZCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIC1tcy1ncmlkLXJvd3M6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI2xlZnQgI215Qm9hcmQgLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCAuc3F1YXJlIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCAudmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkIC5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxICFpbXBvcnRhbnQ7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkVGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjcmlnaHQgI0FJQm9hcmQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIC1tcy1ncmlkLXJvd3M6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0ICNBSUJvYXJkIC5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0ICNBSUJvYXJkIC5ob3ZlcmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCAjQUlCb2FyZFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNnYW1lICNyZXN0YXJ0R2FtZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGNvbG9yOiAjNGU0ZTRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUgI3Jlc3RhcnRHYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XFxufVxcblxcbiNnYW1lICNyZXN0YXJ0R2FtZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNWQ1ZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiAjZjBmOGZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6ICNjZmNmY2Y7XFxufVxcblxcbmZvb3RlciBhOmFjdGl2ZSB7XFxuICBjb2xvcjogIzVkNWQ1ZDtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBVTtFQUNWLFNBQVM7QUNDYjs7QURXQTtFQUNJLGtDQUFrQztFQUNsQyxhQUFZO0VBQ1osbUJBWHlCO0VBWXpCLGNBYndCO0VBY3hCLG9CQUFZO0VBQ1osb0JBQWU7RUFDbEIsYUFBQTtFQ1JDLDRCQUE0QjtFRFU5Qiw2QkFBTztNQUNILDBCQUFtQjtVQUNuQixzQkFBYTtBQ1JqQjs7QUFFQTtFQUNFLG1CQUFtQjtFRFVyQixrQ0FBTztFQUNILFlBQVk7RUFDWixlQUFZO0FDUmhCOztBQUVBO0VBQ0Usa0JBQWtCO0VEVXBCLFlBQU07RUFDRixlQUFhO0VBQ2IsZ0JBQWU7QUNSbkI7O0FBRUE7RURJQSxvQkFLSTtFQUNJLG9CQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUFtQjtNQUNuQixxQkF6Q29CO1VBMENiLHVCQUFNO0VBQ2IsaUJBQUE7QUNQUjs7QUFFQTtFRE5BLFlBS0k7RUFTUSxhQUFZO0VBQ2YsbUJBQUE7RUNMUCx5QkFBeUI7RURWM0IsaUJBS0k7RUFZUSxhQUFBO0VBQ0gsMkJBQUE7TUNKSCxzQ0FBc0M7RURkNUMsd0JBbUJRO01BQ0ksbUNBQXNDO0FDSGxEOztBRGpCQTtFQXVCWSx5QkFBa0I7QUNGOUI7O0FEckJBO0VBMEJZLHNDQUFzQztBQ0RsRDs7QUR6QkE7RUE2Qlksc0NBQW9DO0FDQWhEOztBRDdCQTtFQWtD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c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSAnLi8uLi9pbWcvZ2l0aHViLWxvZ28ucG5nJztcclxuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL21vZHVsZXMvc2hpcEZhY3RvcnlcIjtcclxuaW1wb3J0IHtjcmVhdGVCb2FyZCwgbGlzdE9mU3F1YXJlQ2xhc3Nlc30gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZUJvYXJkJztcclxuaW1wb3J0IHtheGlzQ2hhbmdlLCBheGlzVmFyfSBmcm9tICcuL21vZHVsZXMvYXhpcyc7XHJcbmltcG9ydCB7IHNldFNoaXBzIH0gZnJvbSAnLi9tb2R1bGVzL3NldFNoaXBzJztcclxuaW1wb3J0IHtpbnN0cnVjdGlvbkRpc3BsYXksIGN1cnJlbnRTaGlwIH1mcm9tICcuL21vZHVsZXMvaW5zdHJ1Y3Rpb25zRGlzcGxheSc7XHJcbmltcG9ydCB7IHJlc3RhcnRHYW1lIH0gZnJvbSAnLi9tb2R1bGVzL3Jlc3RhcnRHYW1lJztcclxuaW1wb3J0IHsgcGxhY2VBSVNoaXBzIH0gZnJvbSAnLi9tb2R1bGVzL3BsYWNlQUlzaGlwcyc7XHJcbmltcG9ydCB7IEF0dGFjayB9IGZyb20gJy4vbW9kdWxlcy9hdHRhY2snO1xyXG5cclxuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItbG9nbycpKS5zcmMgPSBnaXRodWJMb2dvO1xyXG5cclxubGV0IGNhcnJpZXIgPSBzaGlwRmFjdG9yeSgnY2FycmllcicsIDUpO1xyXG5sZXQgYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJywgNCk7XHJcbmxldCBkZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgnZGVzdHJveWVyJywgMyk7XHJcbmxldCBzdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgnc3VibWFyaW5lJywgMyk7XHJcbmxldCBwYXRyb2xfYm9hdCA9IHNoaXBGYWN0b3J5KCdwYXRyb2wgYm9hdCcsIDIpO1xyXG5cclxubGV0IEFJY2FycmllciA9IHNoaXBGYWN0b3J5KCdjYXJyaWVyJywgNSk7XHJcbmxldCBBSWJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsIDQpO1xyXG5sZXQgQUlkZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgnZGVzdHJveWVyJywgMyk7XHJcbmxldCBBSXN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KCdzdWJtYXJpbmUnLCAzKTtcclxubGV0IEFJcGF0cm9sX2JvYXQgPSBzaGlwRmFjdG9yeSgncGF0cm9sIGJvYXQnLCAyKTtcclxuXHJcbmxldCBhbGxTaGlwcyA9IHtcclxuICAgIGNhcnJpZXI6IGNhcnJpZXIsXHJcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwLFxyXG4gICAgZGVzdHJveWVyOiBkZXN0cm95ZXIsXHJcbiAgICBzdWJtYXJpbmU6IHN1Ym1hcmluZSxcclxuICAgICdwYXRyb2wgYm9hdCc6IHBhdHJvbF9ib2F0XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYWxsQUlTaGlwcyA9IHtcclxuICAgIEFJY2FycmllcjogQUljYXJyaWVyLFxyXG4gICAgQUliYXR0bGVzaGlwOiBBSWJhdHRsZXNoaXAsXHJcbiAgICBBSWRlc3Ryb3llcjogQUlkZXN0cm95ZXIsXHJcbiAgICBBSXN1Ym1hcmluZTogQUlzdWJtYXJpbmUsXHJcbiAgICAnQUkgcGF0cm9sIGJvYXQnOiBBSXBhdHJvbF9ib2F0XHJcbn1cclxuXHJcbmNvbnN0IFN0YXJ0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY3JlYXRlQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldFNoaXBzR2FtZWJvYXJkJykpO1xyXG4gICAgY3JlYXRlQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Qm9hcmQnKSk7XHJcbiAgICBjcmVhdGVCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQUlCb2FyZCcpKTtcclxuICAgIGF4aXNDaGFuZ2UoKTtcclxuICAgIGluc3RydWN0aW9uRGlzcGxheShjdXJyZW50U2hpcCk7XHJcbiAgICBzZXRTaGlwcy5zaGlwc0hvdmVyKCk7IFxyXG4gICAgc2V0U2hpcHMuc2hpcENsaWNrKCk7IFxyXG4gICAgc2V0U2hpcHMuc2hpcFJlc2V0TGlzdGVuZXIoKTtcclxuICAgIHBsYWNlQUlTaGlwcygpO1xyXG4gICAgcmVzdGFydEdhbWUoKTtcclxuICAgIEF0dGFjay5wbGF5ZXJIb3ZlcigpO1xyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7YWxsU2hpcHN9OyIsImltcG9ydCB7IGFsbFNoaXBzLCBhbGxBSVNoaXBzfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IGV4cGxvZGVJbWcgZnJvbSAnLi4vLi4vaW1nL2V4cGxvZGUucG5nJztcclxuaW1wb3J0IHsgbGlzdE9mU3F1YXJlQ2xhc3NlcyB9IGZyb20gXCIuL2NyZWF0ZUJvYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXR0YWNrID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0dXJuID0gJ3BsYXllcic7XHJcblxyXG4gICAgLy8gY29uc3QgZ2V0Q3VycmVudFNoaXBQbGFjZW1lbnRzID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBvYmplY3QgPSB7XHJcbiAgICAvLyAgICAgICAgIHBsYXllclBsYWNlbWVudDoge30sXHJcbiAgICAvLyAgICAgICAgIEFJUGxhY2VtZW50OiB7fVxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgZm9yIChjb25zdCBwcm9wIGluIGFsbFNoaXBzKSB7XHJcbiAgICAvLyAgICAgICAgIHBsYXllclBsYWNlbWVudFtwcm9wXSA9IGFsbFNoaXBzW3Byb3BdW3NoaXBQbGFjZW1lbnRdO1xyXG4gICAgLy8gICAgICAgICBBSVBsYWNlbWVudFtwcm9wXSA9IGFsbEFJU2hpcHNbcHJvcF1bc2hpcFBsYWNlbWVudF07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0dXJuVGV4dF9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R1cm5UZXh0Jyk7XHJcbiAgICAgICAgaWYgKHR1cm4gPT0gJ3BsYXllcicpIHtcclxuICAgICAgICAgICAgcmVzZXRIb3ZlcigpO1xyXG4gICAgICAgICAgICB0dXJuID0gJ0FJJztcclxuICAgICAgICAgICAgdHVyblRleHRfcC50ZXh0Q29udGVudCA9IFwiQXdhaXRpbmcgT3Bwb25lbnQncyBBdHRhY2tcIjtcclxuICAgICAgICAgICAgQUlBdHRhY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXJIb3ZlcigpO1xyXG4gICAgICAgICAgICB0dXJuID0gJ3BsYXllcic7XHJcbiAgICAgICAgICAgIHR1cm5UZXh0X3AudGV4dENvbnRlbnQgPSBcIkl0J3MgeW91ciB0dXJuIHRvIGF0dGFjayFcIjtcclxuICAgICAgICAgICAgcGxheWVyQXR0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0SG92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxsQUlTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0FJQm9hcmQgLnNxdWFyZScpO1xyXG5cclxuICAgICAgICBhbGxBSVNxdWFyZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXllckhvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbEFJU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNBSUJvYXJkIC5zcXVhcmUnKTtcclxuXHJcbiAgICAgICAgYWxsQUlTcXVhcmVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgYWxsQUlTcXVhcmVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBleHBsb2RlSW1nO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VUdXJuKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBBSUF0dGFjayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY2hhbmdlVHVybigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJIb3ZlciB9O1xyXG59KSgpOyIsImV4cG9ydCBsZXQgYXhpc1ZhciA9ICdob3Jpem9udGFsJztcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gYXhpc0NoYW5nZSgpIHtcclxuICAgIGxldCBheGlzX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XHJcbiAgICBheGlzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gICAgICAgIGlmIChheGlzX2J1dHRvbi50ZXh0Q29udGVudCA9PSAnSG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgYXhpc19idXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xyXG4gICAgICAgICAgICBheGlzVmFyID0gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBheGlzX2J1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcclxuICAgICAgICAgICAgYXhpc1ZhciA9ICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBsZXQgbGlzdE9mU3F1YXJlQ2xhc3NlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGNvbnRhaW5lckVsZW1lbnQpIHtcclxuICAgIGxldCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtsZXR0ZXJzW2ldfSR7aisxfWApO1xyXG4gICAgICAgICAgICBsaXN0T2ZTcXVhcmVDbGFzc2VzLnB1c2goYCR7bGV0dGVyc1tpXX0ke2orMX1gKTtcclxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gY3JlYXRlQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldFNoaXBzR2FtZWJvYXJkJykpOyIsImltcG9ydCB7YWxsU2hpcHN9IGZyb20gJy4uJztcclxuaW1wb3J0IGNhcnJpZXJJbWcgZnJvbSAnLi8uLi8uLi9pbWcvY2Fycmllci5wbmcnO1xyXG5pbXBvcnQgYmF0dGxlc2hpcEltZyBmcm9tICcuLy4uLy4uL2ltZy9iYXR0bGVzaGlwLnBuZyc7XHJcbmltcG9ydCBkZXN0cm95ZXJJbWcgZnJvbSAnLi8uLi8uLi9pbWcvZGVzdHJveWVyLnBuZyc7XHJcbmltcG9ydCBzdWJtYXJpbmVJbWcgZnJvbSAnLi8uLi8uLi9pbWcvc3VibWFyaW5lLnBuZyc7XHJcbmltcG9ydCBwYXRyb2xib2F0SW1nIGZyb20gJy4vLi4vLi4vaW1nL3BhdHJvbF9ib2F0LnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VJbWcoc2hpcCkge1xyXG4gICAgbGV0IGltZyA9ICcnO1xyXG4gICAgc2hpcCA9PSAnY2FycmllcicgPyBpbWcgPSBjYXJyaWVySW1nOmZhbHNlO1xyXG4gICAgc2hpcCA9PSAnYmF0dGxlc2hpcCcgPyBpbWcgPSBiYXR0bGVzaGlwSW1nOmZhbHNlO1xyXG4gICAgc2hpcCA9PSAnZGVzdHJveWVyJyA/IGltZyA9IGRlc3Ryb3llckltZzpmYWxzZTtcclxuICAgIHNoaXAgPT0gJ3BhdHJvbCBib2F0JyA/IGltZyA9IHBhdHJvbGJvYXRJbWc6ZmFsc2U7XHJcbiAgICBzaGlwID09ICdzdWJtYXJpbmUnID8gaW1nID0gc3VibWFyaW5lSW1nOmZhbHNlO1xyXG5cclxuICAgIGxldCBpbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nRWwuc3JjID0gaW1nO1xyXG4gICAgaWYgKHNoaXAgPT0gJ3BhdHJvbCBib2F0Jykge1xyXG4gICAgICAgIGltZ0VsLmNsYXNzTGlzdC5hZGQoJ3BhdHJvbCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgc3F1YXJlTmFtZSA9IGFsbFNoaXBzW3NoaXBdLnNoaXBQbGFjZW1lbnRbMF07XHJcbiAgICBsZXQgbXlTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbXlCb2FyZCAuJHtzcXVhcmVOYW1lfWApO1xyXG4gICAgY29uc3QgbGV0dGVycyA9ICdBQkNERUZHSElKJztcclxuICAgIGxldCBudW0gPSBwYXJzZUludChzcXVhcmVOYW1lLnNsaWNlKDEsIDMpLCAxMCk7XHJcbiAgICBsZXQgbGV0dGVyID0gc3F1YXJlTmFtZVswXTtcclxuICAgIGFsbFNoaXBzW3NoaXBdLmF4aXMgPT0gJ3ZlcnRpY2FsJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNteUJvYXJkIC4ke2xldHRlcn0ke251bX1gKS5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik6IGZhbHNlO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzW3NoaXBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoYWxsU2hpcHNbc2hpcF0uYXhpcyA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI215Qm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbXlCb2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIG15U3F1YXJlLmFwcGVuZENoaWxkKGltZ0VsKTtcclxufVxyXG4iLCJpbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcclxuXHJcbmNvbnN0IGluc3RydWN0aW9uc1RleHRfcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbnNUZXh0Jyk7XHJcbmNvbnN0IGluc3RydWN0aW9uc0Rpc3BsYXlfZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9uc0Rpc3BsYXknKTtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFNoaXAgPSAnc3RhcnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RydWN0aW9uRGlzcGxheShzaGlwKSB7XHJcbiAgICBpZiAoc2hpcCA9PSAnUGF0cm9sIEJvYXQnKSB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLnRleHRDb250ZW50ID0gJ1BSRVNTIFRPIFNUQVJUJztcclxuICAgICAgICBpbnN0cnVjdGlvbnNEaXNwbGF5X2Rpdi5jbGFzc0xpc3QuYWRkKCdzdGFydCcpO1xyXG4gICAgICAgIGN1cnJlbnRTaGlwID0gJ2ZpbmlzaCc7XHJcbiAgICAgICAgc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hpcE9yZGVyID0gWydzdGFydCcsICdDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wgQm9hdCddO1xyXG4gICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtzaGlwT3JkZXJbc2hpcE9yZGVyLmluZGV4T2Yoc2hpcCkgKyAxXX0uLi5gO1xyXG4gICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLmNsYXNzTGlzdC5hZGQoJ2NoYW5naW5nRGlzcGxheScpO1xyXG4gICAgY3VycmVudFNoaXAgPSBzaGlwT3JkZXJbc2hpcE9yZGVyLmluZGV4T2Yoc2hpcCkgKyAxXTtcclxuICAgIGNvbnN0IHJlbW92ZUFuaW1hdGlvbkNMYXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGluc3RydWN0aW9uc1RleHRfcC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2luZ0Rpc3BsYXknKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQocmVtb3ZlQW5pbWF0aW9uQ0xhc3MsIDMwMDApO1xyXG59XHJcblxyXG4vLyBpbnN0cnVjdGlvbkRpc3BsYXkoJ1N1Ym1hcmluZScpOyIsImltcG9ydCB7IGxpc3RPZlNxdWFyZUNsYXNzZXMgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBhbGxBSVNoaXBzIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VBSVNoaXBzKCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RPZlNxdWFyZUNsYXNzZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQ5IC0gMCArIDEpKSArIDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUF4aXMoKSB7XHJcbiAgICAgICAgbGV0IGF4aXMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcclxuICAgICAgICByZXR1cm4gYXhpc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSAtIDAgKyAxKSkgKyAwXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2hpcHMgPSBbJ0FJY2FycmllcicsICdBSWJhdHRsZXNoaXAnLCAnQUlkZXN0cm95ZXInLCAnQUlzdWJtYXJpbmUnLCAnQUkgcGF0cm9sIGJvYXQnXTtcclxuICAgIGxldCBjdXJyZW50U2hpcCA9ICdBSWNhcnJpZXInO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVNoaXAoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwID09ICdBSSBwYXRyb2wgYm9hdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcHNbc2hpcHMuaW5kZXhPZihjdXJyZW50U2hpcCkgKyAxXTtcclxuICAgICAgICAgICAgc2V0QUlTaGlwcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBSVNoaXBzKCkge1xyXG4gICAgICAgIGxldCByYW5kb21Db29yZCA9IGdldFJhbmRvbUNvb3JkKCk7XHJcbiAgICAgICAgbGV0IGF4aXNWYXIgPSBnZXRSYW5kb21BeGlzKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsQUlTaGlwc1tjdXJyZW50U2hpcF07XHJcbiAgICAgICAgbGV0IGxldHRlciA9IHJhbmRvbUNvb3JkWzBdO1xyXG4gICAgICAgIGxldCBudW0gPSBwYXJzZUludChyYW5kb21Db29yZC5zbGljZSgxLCAzKSwgMTApO1xyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNBSUJvYXJkIC4ke2xldHRlcn0ke251bStpfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsaWQgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoYXhpc1ZhciA9PSAnaG9yaXpvbnRhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihheGlzVmFyID09ICd2ZXJ0aWNhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYodmFsaWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcn0ke251bStpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5heGlzID0gYXhpc1ZhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2JhdHRsZXNoaXAnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnZGVzdHJveWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAncGF0cm9sIGJvYXQnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLmF4aXMgPSBheGlzVmFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNoaXBPYmouc2hpcFBsYWNlbWVudCkucHVzaChgJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQUlCb2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2JhdHRsZXNoaXAnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnZGVzdHJveWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAncGF0cm9sIGJvYXQnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsaWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlU2hpcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0QUlTaGlwcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QUlTaGlwcygpO1xyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0R2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHthbGxTaGlwc30gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IGF4aXNWYXIgfSBmcm9tIFwiLi9heGlzXCI7XHJcbmltcG9ydCB7IGxpc3RPZlNxdWFyZUNsYXNzZXMgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBjdXJyZW50U2hpcCwgaW5zdHJ1Y3Rpb25EaXNwbGF5IH0gZnJvbSBcIi4vaW5zdHJ1Y3Rpb25zRGlzcGxheVwiO1xyXG5cclxuY29uc3QgbGV0dGVycyA9ICdBQkNERUZHSElKJztcclxuXHJcbmV4cG9ydCBsZXQgc2V0U2hpcHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGxldCBzaGlwc0hvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNxdWFyZXNfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldFNoaXBzR2FtZWJvYXJkIC5zcXVhcmUnKTtcclxuXHJcbiAgICAgICAgc3F1YXJlc19kaXYuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXNldENvbG9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdE9mU3F1YXJlQ2xhc3Nlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMGY4ZmYnO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsU2hpcHNbY3VycmVudFNoaXAudG9Mb3dlckNhc2UoKV07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRDb2xvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV1bMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzFdLnNsaWNlKDEsIDMpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0ran1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmODA4MCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzhiOGI4Yic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikral19JHtudW19YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjgwODAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4YjhiOGInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRDb2xvcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHNoaXBDbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNxdWFyZXNfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldFNoaXBzR2FtZWJvYXJkIC5zcXVhcmUnKTtcclxuXHJcbiAgICAgICAgc3F1YXJlc19kaXYuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsYXNoQXVkaW9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsU2hpcHNbY3VycmVudFNoaXAudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQgPT0gZmFsc2UgfHwgY3VycmVudFNoaXAgPT0gJ2ZpbmlzaCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFsxXS5zbGljZSgxLCAzKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXhpc1ZhciA9PSAnaG9yaXpvbnRhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStpfWApLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGF4aXNWYXIgPT0gJ3ZlcnRpY2FsJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbGlkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTaGlwT2JqLnNoaXBQbGFjZW1lbnQpLnB1c2goYCR7bGV0dGVyfSR7bnVtK2l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXBPYmouYXhpcyA9IGF4aXNWYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2NhcnJpZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2FycmllcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdiYXR0bGVzaGlwJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnZGVzdHJveWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdzdWJtYXJpbmUnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ3BhdHJvbCBib2F0JyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BhdHJvbC1ib2F0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLmF4aXMgPSBheGlzVmFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2Rlc3Ryb3llcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlKSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uRGlzcGxheShjdXJyZW50U2hpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2hpcFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxpc3RPZlNxdWFyZUNsYXNzZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YwZjhmZic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJyaWVyJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdiYXR0bGVzaGlwJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkZXN0cm95ZXInKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1hcmluZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgncGF0cm9sLWJvYXQnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBhbGxTaGlwcykge1xyXG4gICAgICAgICAgICAgICAgYWxsU2hpcHNbcHJvcF0uc2hpcFBsYWNlbWVudCA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2hpcFJlc2V0TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0Qm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgc2hpcFJlc2V0KCk7XHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uRGlzcGxheSgnc3RhcnQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcHNIb3ZlcixcclxuICAgICAgICBzaGlwQ2xpY2ssXHJcbiAgICAgICAgc2hpcFJlc2V0LFxyXG4gICAgICAgIHNoaXBSZXNldExpc3RlbmVyXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRmFjdG9yeShuYW1lLCBsZW5ndGgpIHtcclxuICAgIGxldCBwbGFjZXNIaXQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwbGFjZXNIaXQucHVzaChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGl0ID0gKGluZGV4LCBpbnN0YW5jZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcGxhY2VzSGl0ID0gaW5zdGFuY2VOYW1lLnBsYWNlc0hpdDtcclxuICAgICAgICBwbGFjZXNIaXRbaW5kZXhdID09IHVuZGVmaW5lZCA/IGNvbnNvbGUubG9nKCdIaXQgaXMgdW5kZWZpbmVkJykgOiBwbGFjZXNIaXRbaW5kZXhdID0gdHJ1ZTtcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgaXNTdW5rID0gKGFycikgPT4gYXJyLmV2ZXJ5KGVsID0+IGVsID09IHRydWUpO1xyXG5cclxuICAgIGxldCBzaGlwUGxhY2VtZW50ID0gW107XHJcblxyXG4gICAgbGV0IGF4aXMgPSAnJztcclxuXHJcbiAgICByZXR1cm4ge25hbWUsIGxlbmd0aCwgcGxhY2VzSGl0LCBoaXQsIGlzU3Vuaywgc2hpcFBsYWNlbWVudCwgYXhpc307XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCB9IGZyb20gXCIuL2NyZWF0ZUJvYXJkXCI7XHJcbmltcG9ydCB7IHBsYWNlSW1nIH0gZnJvbSBcIi4vZ2VuZXJhdGVPd25TaGlwc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcclxuICAgIGNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGdhbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBwbGFjZUltZygnY2FycmllcicpO1xyXG4gICAgICAgIHBsYWNlSW1nKCdiYXR0bGVzaGlwJyk7XHJcbiAgICAgICAgcGxhY2VJbWcoJ2Rlc3Ryb3llcicpO1xyXG4gICAgICAgIHBsYWNlSW1nKCdzdWJtYXJpbmUnKTtcclxuICAgICAgICBwbGFjZUltZygncGF0cm9sIGJvYXQnKTtcclxuICAgIH0pXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9