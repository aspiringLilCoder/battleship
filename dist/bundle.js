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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Fredoka', sans-serif;\n  height: 100vh;\n  background: #f0f8ff;\n  color: #4e4e4e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nbutton {\n  border-radius: 25px;\n  font-family: 'Fredoka', sans-serif;\n  border: none;\n  cursor: pointer;\n}\n\n#title {\n  text-align: center;\n  margin: 20px;\n  font-size: 70px;\n  font-weight: 500;\n}\n\n#home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 120px;\n}\n\n#home #setShipsGameboard {\n  width: 500px;\n  height: 500px;\n  margin-right: 100px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#home #setShipsGameboard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#home #setShipsGameboard .carrier {\n  background-color: #a8e6cf   !important;\n}\n\n#home #setShipsGameboard .battleship {\n  background-color: #dcedc1   !important;\n}\n\n#home #setShipsGameboard .destroyer {\n  background-color: #ffd3b6   !important;\n}\n\n#home #setShipsGameboard .submarine {\n  background-color: #ffaaa5   !important;\n}\n\n#home #setShipsGameboard .patrol-boat {\n  background-color: #ff8b94 !important;\n}\n\n#home #sideOptions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#home #sideOptions #instructionsDisplay {\n  color: #f0f8ff;\n  width: 250px;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #4e4e4e;\n  border-radius: 25px;\n  font-size: 20px;\n  padding: 5px;\n  font-weight: 500;\n}\n\n#home #sideOptions .start {\n  background-color: #ffdddd !important;\n  color: #000000 !important;\n}\n\n#home #sideOptions .start:hover {\n  background-color: #ffc2c2 !important;\n  cursor: pointer;\n}\n\n#home #sideOptions .start:active {\n  background-color: #ffaaaa !important;\n}\n\n#home #sideOptions .changingDisplay {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@-webkit-keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#home #sideOptions button {\n  width: 200px;\n  height: 50px;\n  margin-top: 25px;\n  background-color: #d1d1d1;\n  font-size: 20px;\n}\n\n#home #sideOptions button:hover {\n  background-color: #bfbfbf;\n}\n\n#home #sideOptions button:active {\n  background-color: #5d5d5d;\n}\n\n#game {\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #turnDisplay {\n  font-size: 35px;\n  font-weight: 600;\n  margin: 20px;\n  padding-top: 16px;\n  background-color: #cacaca;\n  border-radius: 25px;\n  width: 500px;\n  height: 70px;\n  text-align: center;\n}\n\n#game #turnText {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#game #gameBoards {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n\n#game #gameBoards #left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #left #myBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n  margin-right: 40px;\n}\n\n#game #gameBoards #left #myBoard .square {\n  border: 1px solid #4e4e4e;\n  position: relative;\n}\n\n#game #gameBoards #left #myBoard .square img {\n  position: absolute;\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .vertical {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .selected {\n  background-color: #c1c1c1 !important;\n}\n\n#game #gameBoards #left #myBoardTitle {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n#game #gameBoards #right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #right #AIBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  margin-left: 40px;\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#game #gameBoards #right #AIBoard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#game #gameBoards #right #AIBoard .square:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#game #gameBoards #right #AIBoardTitle {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n#game #restartGame {\n  font-size: 30px;\n  font-weight: 600;\n  margin: 20px;\n  background-color: #cacaca;\n  color: #4e4e4e;\n  border-radius: 25px;\n  width: 200px;\n  height: 70px;\n  text-align: center;\n}\n\n#game #restartGame:hover {\n  background-color: #bfbfbf;\n}\n\n#game #restartGame:active {\n  background-color: #5d5d5d;\n}\n\nfooter {\n  margin-top: auto;\n  height: 20px;\n  background-color: #4e4e4e;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a {\n  color: #f0f8ff;\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a:hover {\n  color: #cfcfcf;\n}\n\nfooter a:active {\n  color: #5d5d5d;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
    _modules_setShips__WEBPACK_IMPORTED_MODULE_5__.setShips.shipReset();
    (0,_modules_placeAIships__WEBPACK_IMPORTED_MODULE_8__.placeAIShips)();
    (0,_modules_restartGame__WEBPACK_IMPORTED_MODULE_7__.restartGame)();
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

    const changeDisplay = () => {
        const turnText_p = document.querySelector('#turnText');
        if (turn == 'player') {
            turn = 'AI';
            turnText_p.textContent = "Awaiting Opponent's Attack";
        } else {
            turn = 'player';
            turnText_p.textContent = "It's your turn to attack!";
        }
    }
    // const allAISquares = document.querySelectorAll('#AIBoard .square');

    // const playerHover = () => {
    //     const resetHover = () => {
    //         listOfSquareClasses.forEach(el => {
    //             document.querySelector(`#AIBoard .${el}`).classList.remove('hovered');
    //         })
    //     }

    //     allAISquares.forEach(el => {
    //         el.addEventListener('mouseover', e => {
    //             resetHover();
    //             el.classList.add('hovered');
    //         })
    //         el.addEventListener('mouseout', e => {
    //             resetHover();
    //         })
    //     })
    // }

    // const playerAttack = () => {
    //     allAISquares.forEach(el => {
    //         el.addEventListener('click', e => {
                
    //             const img = document.createElement('img');
    //             img.src = explodeImg;
    //             el.appendChild(img);
    //         })
    //     })
    // }

    // const AIAttack = () => {

    // }


    return { };
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
        document.querySelector('#resetBoard').addEventListener('click', () => {
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
            ;(0,_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.instructionDisplay)('start');
        })
    }

    return {
        shipsHover,
        shipClick,
        shipReset
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFlBQVksWUFBWSxjQUFjLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFVBQVUsV0FBVyxZQUFZLGNBQWMsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLGFBQWEsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sYUFBYSxZQUFZLFlBQVksZUFBZSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsWUFBWSxZQUFZLGVBQWUsWUFBWSxZQUFZLFdBQVcsT0FBTyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxLQUFLLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFlBQVksWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLGFBQWEsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxjQUFjLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLE1BQU0sYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLFFBQVEsTUFBTSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxh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QTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2F0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY3JlYXRlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlT3duU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luc3RydWN0aW9uc0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYWNlQUlzaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcmVzdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NldFNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYm9tYi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdGcmVkb2thJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmOGZmO1xcbiAgY29sb3I6ICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmb250LWZhbWlseTogJ0ZyZWRva2EnLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2hvbWUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgLW1zLWdyaWQtcm93czogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLmNhcnJpZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZTZjZiAgICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuYmF0dGxlc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlZGMxICAgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NldFNoaXBzR2FtZWJvYXJkIC5kZXN0cm95ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDNiNiAgICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuc3VibWFyaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhYTUgICAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLnBhdHJvbC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiOTQgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgI2luc3RydWN0aW9uc0Rpc3BsYXkge1xcbiAgY29sb3I6ICNmMGY4ZmY7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5zdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLnN0YXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMyYzIgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5zdGFydDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWFhYSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLmNoYW5naW5nRGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyNSwgZW5kKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjUsIGVuZCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIGJ1dHRvbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ1ZDVkO1xcbn1cXG5cXG4jZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjdHVybkRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lICN0dXJuVGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyNSwgZW5kKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjUsIGVuZCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIC1tcy1ncmlkLXJvd3M6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI2xlZnQgI215Qm9hcmQgLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCAuc3F1YXJlIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCAudmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkIC5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxICFpbXBvcnRhbnQ7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkVGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjcmlnaHQgI0FJQm9hcmQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIC1tcy1ncmlkLXJvd3M6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0ICNBSUJvYXJkIC5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0ICNBSUJvYXJkIC5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0ICNBSUJvYXJkVGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2dhbWUgI3Jlc3RhcnRHYW1lIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgY29sb3I6ICM0ZTRlNGU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjcmVzdGFydEdhbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcXG59XFxuXFxuI2dhbWUgI3Jlc3RhcnRHYW1lOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ1ZDVkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6ICNmMGY4ZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogI2NmY2ZjZjtcXG59XFxuXFxuZm9vdGVyIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjNWQ1ZDVkO1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFVO0VBQ1YsU0FBUztBQ0NiOztBRFdBO0VBQ0ksa0NBQWtDO0VBQ2xDLGFBQVk7RUFDWixtQkFYeUI7RUFZekIsY0Fid0I7RUFjeEIsb0JBQVk7RUFDWixvQkFBZTtFQUNsQixhQUFBO0VDUkMsNEJBQTRCO0VEVTlCLDZCQUFPO01BQ0gsMEJBQW1CO1VBQ25CLHNCQUFhO0FDUmpCOztBQUVBO0VBQ0UsbUJBQW1CO0VEVXJCLGtDQUFPO0VBQ0gsWUFBWTtFQUNaLGVBQVk7QUNSaEI7O0FBRUE7RUFDRSxrQkFBa0I7RURVcEIsWUFBTTtFQUNGLGVBQWE7RUFDYixnQkFBZTtBQ1JuQjs7QUFFQTtFRElBLG9CQUtJO0VBQ0ksb0JBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQW1CO01BQ25CLHFCQXpDb0I7VUEwQ2IsdUJBQU07RUFDYixpQkFBQTtBQ1BSOztBQUVBO0VETkEsWUFLSTtFQVNRLGFBQVk7RUFDZixtQkFBQTtFQ0xQLHlCQUF5QjtFRFYzQixpQkFLSTtFQVlRLGFBQUE7RUFDSCwyQkFBQTtNQ0pILHNDQUFzQztFRGQ1Qyx3QkFtQlE7TUFDSSxtQ0FBc0M7QUNIbEQ7O0FEakJBO0VBdUJZLHlCQUFrQjtBQ0Y5Qjs7QURyQkE7RUEwQlksc0NBQXNDO0FDRGxEOztBRHpCQTtFQTZCWSxzQ0FBb0M7QUNBaEQ7O0FEN0JBO0VBa0NRLHNDQUFhO0FDRHJCOztBQUVBO0VBQ0Usc0NBQXNDO0FEcEN4Qzs7QUN1Q0E7RURFWSxvQ0FBYTtBQ0F6Qjs7QUFFQTtFREFZLG9CQTNFUztFQTRF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QkMsc0JBQXNCO1VEaEJ2QixtQkFBUTtBQ2tCYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsMkJBQTJCO01BQ3ZCLHNDQUFzQztFQUMxQyxpQkFBaUI7RUFDakIsd0JBQXdCO01BQ3BCLG1DQUFtQztBQUN6Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlEQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtFQUMzQix3QkFBd0I7TUFDcEIscUJBQXFCO1VBQ2pCLHVCQUF1QjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IseUJBQXlCO01BQ3JCLHNCQUFzQjtVQUNsQixtQkFBbUI7RUFDM0Isd0JBQXdCO01BQ3BCLHFCQUFxQjtVQUNqQix1QkFBdUI7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tICcuLy4uL2ltZy9naXRodWItbG9nby5wbmcnO1xyXG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vbW9kdWxlcy9zaGlwRmFjdG9yeVwiO1xyXG5pbXBvcnQge2NyZWF0ZUJvYXJkLCBsaXN0T2ZTcXVhcmVDbGFzc2VzfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlQm9hcmQnO1xyXG5pbXBvcnQge2F4aXNDaGFuZ2UsIGF4aXNWYXJ9IGZyb20gJy4vbW9kdWxlcy9heGlzJztcclxuaW1wb3J0IHsgc2V0U2hpcHMgfSBmcm9tICcuL21vZHVsZXMvc2V0U2hpcHMnO1xyXG5pbXBvcnQge2luc3RydWN0aW9uRGlzcGxheSwgY3VycmVudFNoaXAgfWZyb20gJy4vbW9kdWxlcy9pbnN0cnVjdGlvbnNEaXNwbGF5JztcclxuaW1wb3J0IHsgcmVzdGFydEdhbWUgfSBmcm9tICcuL21vZHVsZXMvcmVzdGFydEdhbWUnO1xyXG5pbXBvcnQgeyBwbGFjZUFJU2hpcHMgfSBmcm9tICcuL21vZHVsZXMvcGxhY2VBSXNoaXBzJztcclxuaW1wb3J0IHsgQXR0YWNrIH0gZnJvbSAnLi9tb2R1bGVzL2F0dGFjayc7XHJcblxyXG4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGh1Yi1sb2dvJykpLnNyYyA9IGdpdGh1YkxvZ287XHJcblxyXG5sZXQgY2FycmllciA9IHNoaXBGYWN0b3J5KCdjYXJyaWVyJywgNSk7XHJcbmxldCBiYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoJ2JhdHRsZXNoaXAnLCA0KTtcclxubGV0IGRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KCdkZXN0cm95ZXInLCAzKTtcclxubGV0IHN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KCdzdWJtYXJpbmUnLCAzKTtcclxubGV0IHBhdHJvbF9ib2F0ID0gc2hpcEZhY3RvcnkoJ3BhdHJvbCBib2F0JywgMik7XHJcblxyXG5sZXQgQUljYXJyaWVyID0gc2hpcEZhY3RvcnkoJ2NhcnJpZXInLCA1KTtcclxubGV0IEFJYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJywgNCk7XHJcbmxldCBBSWRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KCdkZXN0cm95ZXInLCAzKTtcclxubGV0IEFJc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpO1xyXG5sZXQgQUlwYXRyb2xfYm9hdCA9IHNoaXBGYWN0b3J5KCdwYXRyb2wgYm9hdCcsIDIpO1xyXG5cclxubGV0IGFsbFNoaXBzID0ge1xyXG4gICAgY2FycmllcjogY2FycmllcixcclxuICAgIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXAsXHJcbiAgICBkZXN0cm95ZXI6IGRlc3Ryb3llcixcclxuICAgIHN1Ym1hcmluZTogc3VibWFyaW5lLFxyXG4gICAgJ3BhdHJvbCBib2F0JzogcGF0cm9sX2JvYXRcclxufVxyXG5cclxuZXhwb3J0IGxldCBhbGxBSVNoaXBzID0ge1xyXG4gICAgQUljYXJyaWVyOiBBSWNhcnJpZXIsXHJcbiAgICBBSWJhdHRsZXNoaXA6IEFJYmF0dGxlc2hpcCxcclxuICAgIEFJZGVzdHJveWVyOiBBSWRlc3Ryb3llcixcclxuICAgIEFJc3VibWFyaW5lOiBBSXN1Ym1hcmluZSxcclxuICAgICdBSSBwYXRyb2wgYm9hdCc6IEFJcGF0cm9sX2JvYXRcclxufVxyXG5cclxuY29uc3QgU3RhcnQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjcmVhdGVCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0U2hpcHNHYW1lYm9hcmQnKSk7XHJcbiAgICBjcmVhdGVCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlCb2FyZCcpKTtcclxuICAgIGNyZWF0ZUJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNBSUJvYXJkJykpO1xyXG4gICAgYXhpc0NoYW5nZSgpO1xyXG4gICAgaW5zdHJ1Y3Rpb25EaXNwbGF5KGN1cnJlbnRTaGlwKTtcclxuICAgIHNldFNoaXBzLnNoaXBzSG92ZXIoKTsgXHJcbiAgICBzZXRTaGlwcy5zaGlwQ2xpY2soKTsgXHJcbiAgICBzZXRTaGlwcy5zaGlwUmVzZXQoKTtcclxuICAgIHBsYWNlQUlTaGlwcygpO1xyXG4gICAgcmVzdGFydEdhbWUoKTtcclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQge2FsbFNoaXBzfTsiLCJpbXBvcnQge2FsbFNoaXBzfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IGV4cGxvZGVJbWcgZnJvbSAnLi4vLi4vaW1nL2V4cGxvZGUucG5nJztcclxuaW1wb3J0IHsgbGlzdE9mU3F1YXJlQ2xhc3NlcyB9IGZyb20gXCIuL2NyZWF0ZUJvYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXR0YWNrID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0dXJuID0gJ3BsYXllcic7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGlzcGxheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0dXJuVGV4dF9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R1cm5UZXh0Jyk7XHJcbiAgICAgICAgaWYgKHR1cm4gPT0gJ3BsYXllcicpIHtcclxuICAgICAgICAgICAgdHVybiA9ICdBSSc7XHJcbiAgICAgICAgICAgIHR1cm5UZXh0X3AudGV4dENvbnRlbnQgPSBcIkF3YWl0aW5nIE9wcG9uZW50J3MgQXR0YWNrXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHVybiA9ICdwbGF5ZXInO1xyXG4gICAgICAgICAgICB0dXJuVGV4dF9wLnRleHRDb250ZW50ID0gXCJJdCdzIHlvdXIgdHVybiB0byBhdHRhY2shXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgYWxsQUlTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI0FJQm9hcmQgLnNxdWFyZScpO1xyXG5cclxuICAgIC8vIGNvbnN0IHBsYXllckhvdmVyID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc2V0SG92ZXIgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxpc3RPZlNxdWFyZUNsYXNzZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQUlCb2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBhbGxBSVNxdWFyZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzZXRIb3ZlcigpO1xyXG4gICAgLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGUgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzZXRIb3ZlcigpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgcGxheWVyQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGFsbEFJU3F1YXJlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgIC8vICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAvLyAgICAgICAgICAgICBpbWcuc3JjID0gZXhwbG9kZUltZztcclxuICAgIC8vICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBBSUF0dGFjayA9ICgpID0+IHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJldHVybiB7IH07XHJcbn0pKCk7IiwiZXhwb3J0IGxldCBheGlzVmFyID0gJ2hvcml6b250YWwnO1xyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBheGlzQ2hhbmdlKCkge1xyXG4gICAgbGV0IGF4aXNfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMnKTtcclxuICAgIGF4aXNfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgICAgICAgaWYgKGF4aXNfYnV0dG9uLnRleHRDb250ZW50ID09ICdIb3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBheGlzX2J1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XHJcbiAgICAgICAgICAgIGF4aXNWYXIgPSAndmVydGljYWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF4aXNfYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xyXG4gICAgICAgICAgICBheGlzVmFyID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGxldCBsaXN0T2ZTcXVhcmVDbGFzc2VzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoY29udGFpbmVyRWxlbWVudCkge1xyXG4gICAgbGV0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2xldHRlcnNbaV19JHtqKzF9YCk7XHJcbiAgICAgICAgICAgIGxpc3RPZlNxdWFyZUNsYXNzZXMucHVzaChgJHtsZXR0ZXJzW2ldfSR7aisxfWApO1xyXG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjcmVhdGVCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0U2hpcHNHYW1lYm9hcmQnKSk7IiwiaW1wb3J0IHthbGxTaGlwc30gZnJvbSAnLi4nO1xyXG5pbXBvcnQgY2FycmllckltZyBmcm9tICcuLy4uLy4uL2ltZy9jYXJyaWVyLnBuZyc7XHJcbmltcG9ydCBiYXR0bGVzaGlwSW1nIGZyb20gJy4vLi4vLi4vaW1nL2JhdHRsZXNoaXAucG5nJztcclxuaW1wb3J0IGRlc3Ryb3llckltZyBmcm9tICcuLy4uLy4uL2ltZy9kZXN0cm95ZXIucG5nJztcclxuaW1wb3J0IHN1Ym1hcmluZUltZyBmcm9tICcuLy4uLy4uL2ltZy9zdWJtYXJpbmUucG5nJztcclxuaW1wb3J0IHBhdHJvbGJvYXRJbWcgZnJvbSAnLi8uLi8uLi9pbWcvcGF0cm9sX2JvYXQucG5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUltZyhzaGlwKSB7XHJcbiAgICBsZXQgaW1nID0gJyc7XHJcbiAgICBzaGlwID09ICdjYXJyaWVyJyA/IGltZyA9IGNhcnJpZXJJbWc6ZmFsc2U7XHJcbiAgICBzaGlwID09ICdiYXR0bGVzaGlwJyA/IGltZyA9IGJhdHRsZXNoaXBJbWc6ZmFsc2U7XHJcbiAgICBzaGlwID09ICdkZXN0cm95ZXInID8gaW1nID0gZGVzdHJveWVySW1nOmZhbHNlO1xyXG4gICAgc2hpcCA9PSAncGF0cm9sIGJvYXQnID8gaW1nID0gcGF0cm9sYm9hdEltZzpmYWxzZTtcclxuICAgIHNoaXAgPT0gJ3N1Ym1hcmluZScgPyBpbWcgPSBzdWJtYXJpbmVJbWc6ZmFsc2U7XHJcblxyXG4gICAgbGV0IGltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWdFbC5zcmMgPSBpbWc7XHJcbiAgICBpZiAoc2hpcCA9PSAncGF0cm9sIGJvYXQnKSB7XHJcbiAgICAgICAgaW1nRWwuY2xhc3NMaXN0LmFkZCgncGF0cm9sJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBzcXVhcmVOYW1lID0gYWxsU2hpcHNbc2hpcF0uc2hpcFBsYWNlbWVudFswXTtcclxuICAgIGxldCBteVNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNteUJvYXJkIC4ke3NxdWFyZU5hbWV9YCk7XHJcbiAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG4gICAgbGV0IG51bSA9IHBhcnNlSW50KHNxdWFyZU5hbWUuc2xpY2UoMSwgMyksIDEwKTtcclxuICAgIGxldCBsZXR0ZXIgPSBzcXVhcmVOYW1lWzBdO1xyXG4gICAgYWxsU2hpcHNbc2hpcF0uYXhpcyA9PSAndmVydGljYWwnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI215Qm9hcmQgLiR7bGV0dGVyfSR7bnVtfWApLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbFwiKTogZmFsc2U7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHNbc2hpcF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihhbGxTaGlwc1tzaGlwXS5heGlzID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbXlCb2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNteUJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgbXlTcXVhcmUuYXBwZW5kQ2hpbGQoaW1nRWwpO1xyXG59XHJcbiIsImltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xyXG5cclxuY29uc3QgaW5zdHJ1Y3Rpb25zVGV4dF9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9uc1RleHQnKTtcclxuY29uc3QgaW5zdHJ1Y3Rpb25zRGlzcGxheV9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25zRGlzcGxheScpO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50U2hpcCA9ICdzdGFydCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdHJ1Y3Rpb25EaXNwbGF5KHNoaXApIHtcclxuICAgIGlmIChzaGlwID09ICdQYXRyb2wgQm9hdCcpIHtcclxuICAgICAgICBpbnN0cnVjdGlvbnNUZXh0X3AudGV4dENvbnRlbnQgPSAnUFJFU1MgVE8gU1RBUlQnO1xyXG4gICAgICAgIGluc3RydWN0aW9uc0Rpc3BsYXlfZGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0Jyk7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSAnZmluaXNoJztcclxuICAgICAgICBzdGFydEdhbWUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGlwT3JkZXIgPSBbJ3N0YXJ0JywgJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCBCb2F0J107XHJcbiAgICBpbnN0cnVjdGlvbnNUZXh0X3AudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3NoaXBPcmRlcltzaGlwT3JkZXIuaW5kZXhPZihzaGlwKSArIDFdfS4uLmA7XHJcbiAgICBpbnN0cnVjdGlvbnNUZXh0X3AuY2xhc3NMaXN0LmFkZCgnY2hhbmdpbmdEaXNwbGF5Jyk7XHJcbiAgICBjdXJyZW50U2hpcCA9IHNoaXBPcmRlcltzaGlwT3JkZXIuaW5kZXhPZihzaGlwKSArIDFdO1xyXG4gICAgY29uc3QgcmVtb3ZlQW5pbWF0aW9uQ0xhc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5naW5nRGlzcGxheScpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChyZW1vdmVBbmltYXRpb25DTGFzcywgMzAwMCk7XHJcbn1cclxuXHJcbi8vIGluc3RydWN0aW9uRGlzcGxheSgnU3VibWFyaW5lJyk7IiwiaW1wb3J0IHsgbGlzdE9mU3F1YXJlQ2xhc3NlcyB9IGZyb20gXCIuL2NyZWF0ZUJvYXJkXCI7XHJcbmltcG9ydCB7IGFsbEFJU2hpcHMgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUFJU2hpcHMoKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Db29yZCgpIHtcclxuICAgICAgICByZXR1cm4gbGlzdE9mU3F1YXJlQ2xhc3Nlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDkgLSAwICsgMSkpICsgMF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQXhpcygpIHtcclxuICAgICAgICBsZXQgYXhpcyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xyXG4gICAgICAgIHJldHVybiBheGlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxIC0gMCArIDEpKSArIDBdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzaGlwcyA9IFsnQUljYXJyaWVyJywgJ0FJYmF0dGxlc2hpcCcsICdBSWRlc3Ryb3llcicsICdBSXN1Ym1hcmluZScsICdBSSBwYXRyb2wgYm9hdCddO1xyXG4gICAgbGV0IGN1cnJlbnRTaGlwID0gJ0FJY2Fycmllcic7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlU2hpcCgpIHtcclxuICAgICAgICBpZiAoY3VycmVudFNoaXAgPT0gJ0FJIHBhdHJvbCBib2F0Jykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwc1tzaGlwcy5pbmRleE9mKGN1cnJlbnRTaGlwKSArIDFdO1xyXG4gICAgICAgICAgICBzZXRBSVNoaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFJU2hpcHMoKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbUNvb3JkID0gZ2V0UmFuZG9tQ29vcmQoKTtcclxuICAgICAgICBsZXQgYXhpc1ZhciA9IGdldFJhbmRvbUF4aXMoKTtcclxuICAgICAgICBsZXQgY3VycmVudFNoaXBPYmogPSBhbGxBSVNoaXBzW2N1cnJlbnRTaGlwXTtcclxuICAgICAgICBsZXQgbGV0dGVyID0gcmFuZG9tQ29vcmRbMF07XHJcbiAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KHJhbmRvbUNvb3JkLnNsaWNlKDEsIDMpLCAxMCk7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbGV0dGVycyA9ICdBQkNERUZHSElKJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQUlCb2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWxpZCA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQUlCb2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGF4aXNWYXIgPT0gJ3ZlcnRpY2FsJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQUlCb2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZih2YWxpZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXhpc1ZhciA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTaGlwT2JqLnNoaXBQbGFjZW1lbnQpLnB1c2goYCR7bGV0dGVyfSR7bnVtK2l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLmF4aXMgPSBheGlzVmFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQUlCb2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2NhcnJpZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2FycmllcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdkZXN0cm95ZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdzdWJtYXJpbmUnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSkpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXBPYmouYXhpcyA9IGF4aXNWYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNBSUJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2NhcnJpZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2FycmllcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdkZXN0cm95ZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdzdWJtYXJpbmUnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSkpKSlcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2YWxpZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTaGlwKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBSVNoaXBzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIH1cclxuXHJcbiAgICBzZXRBSVNoaXBzKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgXHJcblxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0R2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHthbGxTaGlwc30gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IGF4aXNWYXIgfSBmcm9tIFwiLi9heGlzXCI7XHJcbmltcG9ydCB7IGxpc3RPZlNxdWFyZUNsYXNzZXMgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBjdXJyZW50U2hpcCwgaW5zdHJ1Y3Rpb25EaXNwbGF5IH0gZnJvbSBcIi4vaW5zdHJ1Y3Rpb25zRGlzcGxheVwiO1xyXG5cclxuY29uc3QgbGV0dGVycyA9ICdBQkNERUZHSElKJztcclxuXHJcbmV4cG9ydCBsZXQgc2V0U2hpcHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGxldCBzaGlwc0hvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNxdWFyZXNfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldFNoaXBzR2FtZWJvYXJkIC5zcXVhcmUnKTtcclxuXHJcbiAgICAgICAgc3F1YXJlc19kaXYuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXNldENvbG9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdE9mU3F1YXJlQ2xhc3Nlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMGY4ZmYnO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsU2hpcHNbY3VycmVudFNoaXAudG9Mb3dlckNhc2UoKV07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRDb2xvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV1bMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzFdLnNsaWNlKDEsIDMpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0ran1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmODA4MCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzhiOGI4Yic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikral19JHtudW19YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjgwODAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4YjhiOGInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRDb2xvcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHNoaXBDbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNxdWFyZXNfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldFNoaXBzR2FtZWJvYXJkIC5zcXVhcmUnKTtcclxuXHJcbiAgICAgICAgc3F1YXJlc19kaXYuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsYXNoQXVkaW9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsU2hpcHNbY3VycmVudFNoaXAudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQgPT0gZmFsc2UgfHwgY3VycmVudFNoaXAgPT0gJ2ZpbmlzaCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFsxXS5zbGljZSgxLCAzKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXhpc1ZhciA9PSAnaG9yaXpvbnRhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStpfWApLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGF4aXNWYXIgPT0gJ3ZlcnRpY2FsJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbGlkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTaGlwT2JqLnNoaXBQbGFjZW1lbnQpLnB1c2goYCR7bGV0dGVyfSR7bnVtK2l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXBPYmouYXhpcyA9IGF4aXNWYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2NhcnJpZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2FycmllcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdiYXR0bGVzaGlwJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnZGVzdHJveWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdzdWJtYXJpbmUnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ3BhdHJvbCBib2F0JyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BhdHJvbC1ib2F0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLmF4aXMgPSBheGlzVmFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2Rlc3Ryb3llcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlKSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uRGlzcGxheShjdXJyZW50U2hpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2hpcFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3RPZlNxdWFyZUNsYXNzZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMGY4ZmYnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnJpZXInKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdiYXR0bGVzaGlwJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnZGVzdHJveWVyJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnc3VibWFyaW5lJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgncGF0cm9sLWJvYXQnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGFsbFNoaXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2hpcHNbcHJvcF0uc2hpcFBsYWNlbWVudCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbkRpc3BsYXkoJ3N0YXJ0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXBzSG92ZXIsXHJcbiAgICAgICAgc2hpcENsaWNrLFxyXG4gICAgICAgIHNoaXBSZXNldFxyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobmFtZSwgbGVuZ3RoKSB7XHJcbiAgICBsZXQgcGxhY2VzSGl0ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGxhY2VzSGl0LnB1c2goZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpdCA9IChpbmRleCwgaW5zdGFuY2VOYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYWNlc0hpdCA9IGluc3RhbmNlTmFtZS5wbGFjZXNIaXQ7XHJcbiAgICAgICAgcGxhY2VzSGl0W2luZGV4XSA9PSB1bmRlZmluZWQgPyBjb25zb2xlLmxvZygnSGl0IGlzIHVuZGVmaW5lZCcpIDogcGxhY2VzSGl0W2luZGV4XSA9IHRydWU7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGlzU3VuayA9IChhcnIpID0+IGFyci5ldmVyeShlbCA9PiBlbCA9PSB0cnVlKTtcclxuXHJcbiAgICBsZXQgc2hpcFBsYWNlbWVudCA9IFtdO1xyXG5cclxuICAgIGxldCBheGlzID0gJyc7XHJcblxyXG4gICAgcmV0dXJuIHtuYW1lLCBsZW5ndGgsIHBsYWNlc0hpdCwgaGl0LCBpc1N1bmssIHNoaXBQbGFjZW1lbnQsIGF4aXN9O1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBwbGFjZUltZyB9IGZyb20gXCIuL2dlbmVyYXRlT3duU2hpcHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XHJcbiAgICBjb25zdCBnYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcclxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGhvbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBnYW1lRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgcGxhY2VJbWcoJ2NhcnJpZXInKTtcclxuICAgICAgICBwbGFjZUltZygnYmF0dGxlc2hpcCcpO1xyXG4gICAgICAgIHBsYWNlSW1nKCdkZXN0cm95ZXInKTtcclxuICAgICAgICBwbGFjZUltZygnc3VibWFyaW5lJyk7XHJcbiAgICAgICAgcGxhY2VJbWcoJ3BhdHJvbCBib2F0Jyk7XHJcbiAgICB9KVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==