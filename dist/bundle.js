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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Fredoka', sans-serif;\n  height: 100vh;\n  background: #f0f8ff;\n  color: #4e4e4e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nbutton {\n  border-radius: 25px;\n  font-family: 'Fredoka', sans-serif;\n  border: none;\n  cursor: pointer;\n}\n\n#title {\n  text-align: center;\n  margin: 20px;\n  font-size: 70px;\n  font-weight: 500;\n}\n\n#home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 120px;\n}\n\n#home #setShipsGameboard {\n  width: 500px;\n  height: 500px;\n  margin-right: 100px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#home #setShipsGameboard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#home #setShipsGameboard .carrier {\n  background-color: #a8e6cf   !important;\n}\n\n#home #setShipsGameboard .battleship {\n  background-color: #dcedc1   !important;\n}\n\n#home #setShipsGameboard .destroyer {\n  background-color: #ffd3b6   !important;\n}\n\n#home #setShipsGameboard .submarine {\n  background-color: #ffaaa5   !important;\n}\n\n#home #setShipsGameboard .patrol-boat {\n  background-color: #ff8b94 !important;\n}\n\n#home #sideOptions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#home #sideOptions #instructionsDisplay {\n  color: #f0f8ff;\n  width: 250px;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #4e4e4e;\n  border-radius: 25px;\n  font-size: 20px;\n  padding: 5px;\n  font-weight: 500;\n}\n\n#home #sideOptions .start {\n  background-color: #ffdddd !important;\n  color: #000000 !important;\n}\n\n#home #sideOptions .start:hover {\n  background-color: #ffc2c2 !important;\n  cursor: pointer;\n}\n\n#home #sideOptions .start:active {\n  background-color: #ffaaaa !important;\n}\n\n#home #sideOptions .changingDisplay {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@-webkit-keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#home #sideOptions button {\n  width: 200px;\n  height: 50px;\n  margin-top: 25px;\n  background-color: #d1d1d1;\n  font-size: 20px;\n}\n\n#home #sideOptions button:hover {\n  background-color: #bfbfbf;\n}\n\n#home #sideOptions button:active {\n  background-color: #5d5d5d;\n}\n\n#game {\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #turnDisplay {\n  font-size: 35px;\n  font-weight: 600;\n  margin: 20px;\n  padding-top: 16px;\n  background-color: #cacaca;\n  border-radius: 25px;\n  width: 500px;\n  height: 70px;\n  text-align: center;\n}\n\n#game #gameBoards {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n\n#game #gameBoards #left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #left #myBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n  margin-right: 40px;\n}\n\n#game #gameBoards #left #myBoard .square {\n  border: 1px solid #4e4e4e;\n  position: relative;\n}\n\n#game #gameBoards #left #myBoard .square img {\n  position: absolute;\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .vertical {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .selected {\n  background-color: #c1c1c1 !important;\n}\n\n#game #gameBoards #left #myBoardTitle {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n#game #gameBoards #right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #right #AIBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  margin-left: 40px;\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#game #gameBoards #right #AIBoard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#game #gameBoards #right #AIBoardTitle {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n#game #restartGame {\n  font-size: 30px;\n  font-weight: 600;\n  margin: 20px;\n  background-color: #cacaca;\n  color: #4e4e4e;\n  border-radius: 25px;\n  width: 200px;\n  height: 70px;\n  text-align: center;\n}\n\n#game #restartGame:hover {\n  background-color: #bfbfbf;\n}\n\n#game #restartGame:active {\n  background-color: #5d5d5d;\n}\n\nfooter {\n  margin-top: auto;\n  height: 20px;\n  background-color: #4e4e4e;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a {\n  color: #f0f8ff;\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a:hover {\n  color: #cfcfcf;\n}\n\nfooter a:active {\n  color: #5d5d5d;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
                        console.log(selectedSquare);
                        
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
                        console.log(selectedSquare);
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
                audio.currentTime= 0;
                audio.play();

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsT0FBTyxNQUFNLGFBQWEsWUFBWSxZQUFZLGVBQWUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxZQUFZLGNBQWMsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLGFBQWEsYUFBYSxZQUFZLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksUUFBUSxNQUFNLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGVBQWUsVUFBVSxZQUFZLFlBQVksWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxRQUFRLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxRQUFRLEtBQUssWUFBWSxZQUFZLFFBQVEsS0FBSyxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFh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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2F4aXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nZW5lcmF0ZU93blNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9pbnN0cnVjdGlvbnNEaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGFjZUFJc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3Jlc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zZXRTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdGcmVkb2thJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmOGZmO1xcbiAgY29sb3I6ICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmb250LWZhbWlseTogJ0ZyZWRva2EnLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2hvbWUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgLW1zLWdyaWQtcm93czogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLmNhcnJpZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZTZjZiAgICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuYmF0dGxlc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlZGMxICAgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NldFNoaXBzR2FtZWJvYXJkIC5kZXN0cm95ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDNiNiAgICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuc3VibWFyaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhYTUgICAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLnBhdHJvbC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhiOTQgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgI2luc3RydWN0aW9uc0Rpc3BsYXkge1xcbiAgY29sb3I6ICNmMGY4ZmY7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5zdGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLnN0YXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMyYzIgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5zdGFydDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWFhYSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLmNoYW5naW5nRGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyNSwgZW5kKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjUsIGVuZCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIGJ1dHRvbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ1ZDVkO1xcbn1cXG5cXG4jZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjdHVybkRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI2xlZnQgI215Qm9hcmQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAtbXMtZ3JpZC1yb3dzOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkIC5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI2xlZnQgI215Qm9hcmQgLnNxdWFyZSBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI2xlZnQgI215Qm9hcmQgLnZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCAuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZFRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0ICNBSUJvYXJkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAtbXMtZ3JpZC1yb3dzOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCAjQUlCb2FyZCAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCAjQUlCb2FyZFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNnYW1lICNyZXN0YXJ0R2FtZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGNvbG9yOiAjNGU0ZTRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUgI3Jlc3RhcnRHYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XFxufVxcblxcbiNnYW1lICNyZXN0YXJ0R2FtZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNWQ1ZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiAjZjBmOGZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6ICNjZmNmY2Y7XFxufVxcblxcbmZvb3RlciBhOmFjdGl2ZSB7XFxuICBjb2xvcjogIzVkNWQ1ZDtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBVTtFQUNWLFNBQVM7QUNDYjs7QURXQTtFQUNJLGtDQUFrQztFQUNsQyxhQUFZO0VBQ1osbUJBWHlCO0VBWXpCLGNBYndCO0VBY3hCLG9CQUFZO0VBQ1osb0JBQWU7RUFDbEIsYUFBQTtFQ1JDLDRCQUE0QjtFRFU5Qiw2QkFBTztNQUNILDBCQUFtQjtVQUNuQixzQkFBYTtBQ1JqQjs7QUFFQTtFQUNFLG1CQUFtQjtFRFVyQixrQ0FBTztFQUNILFlBQVk7RUFDWixlQUFZO0FDUmhCOztBQUVBO0VBQ0Usa0JBQWtCO0VEVXBCLFlBQU07RUFDRixlQUFhO0VBQ2IsZ0JBQWU7QUNSbkI7O0FBRUE7RURJQSxvQkFLSTtFQUNJLG9CQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUFtQjtNQUNuQixxQkF6Q29CO1VBMENiLHVCQUFNO0VBQ2IsaUJBQUE7QUNQUjs7QUFFQTtFRE5BLFlBS0k7RUFTUSxhQUFZO0VBQ2YsbUJBQUE7RUNMUCx5QkFBeUI7RURWM0IsaUJBS0k7RUFZUSxhQUFBO0VBQ0gsMkJBQUE7TUNKSCxzQ0FBc0M7RURkNUMsd0JBbUJRO01BQ0ksbUNBQXNDO0FDSGxEOztBRGpCQTtFQXVCWSx5QkFBa0I7QUNGOUI7O0FEckJBO0VBMEJZLHNDQUFzQztBQ0RsRDs7QUR6QkE7RUE2Qlksc0NBQW9DO0FDQWhEOztBRDdCQTtFQWtDUSxzQ0FBYTtBQ0RyQjs7QUFFQTtFQUNFLHNDQUFzQztBRHBDeEM7O0FDdUNBO0VERVksb0NBQWE7QUNBekI7O0FBRUE7RURBWSxvQkEzRVM7RUE0RVQsb0JBQW1CO0VBQ25CLGFBQVc7RUFDWCx5QkFBWTtNQUNaLHNCQUFnQjtVQUNu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QzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsbUJBQW1CO0VBQzNCLHdCQUF3QjtNQUNwQixxQkFBcUI7VUFDakIsdUJBQXVCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtFQUMzQix3QkFBd0I7TUFDcEIscUJBQXFCO1VBQ2pCLHVCQUF1QjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tICcuLy4uL2ltZy9naXRodWItbG9nby5wbmcnO1xyXG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vbW9kdWxlcy9zaGlwRmFjdG9yeVwiO1xyXG5pbXBvcnQge2NyZWF0ZUJvYXJkLCBsaXN0T2ZTcXVhcmVDbGFzc2VzfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlQm9hcmQnO1xyXG5pbXBvcnQge2F4aXNDaGFuZ2UsIGF4aXNWYXJ9IGZyb20gJy4vbW9kdWxlcy9heGlzJztcclxuaW1wb3J0IHsgc2V0U2hpcHMgfSBmcm9tICcuL21vZHVsZXMvc2V0U2hpcHMnO1xyXG5pbXBvcnQge2luc3RydWN0aW9uRGlzcGxheSwgY3VycmVudFNoaXAgfWZyb20gJy4vbW9kdWxlcy9pbnN0cnVjdGlvbnNEaXNwbGF5JztcclxuaW1wb3J0IHsgcmVzdGFydEdhbWUgfSBmcm9tICcuL21vZHVsZXMvcmVzdGFydEdhbWUnO1xyXG5pbXBvcnQgeyBwbGFjZUFJU2hpcHMgfSBmcm9tICcuL21vZHVsZXMvcGxhY2VBSXNoaXBzJztcclxuXHJcbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWxvZ28nKSkuc3JjID0gZ2l0aHViTG9nbztcclxuXHJcbmxldCBjYXJyaWVyID0gc2hpcEZhY3RvcnkoJ2NhcnJpZXInLCA1KTtcclxubGV0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsIDQpO1xyXG5sZXQgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDMpO1xyXG5sZXQgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpO1xyXG5sZXQgcGF0cm9sX2JvYXQgPSBzaGlwRmFjdG9yeSgncGF0cm9sIGJvYXQnLCAyKTtcclxuXHJcbmxldCBBSWNhcnJpZXIgPSBzaGlwRmFjdG9yeSgnY2FycmllcicsIDUpO1xyXG5sZXQgQUliYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoJ2JhdHRsZXNoaXAnLCA0KTtcclxubGV0IEFJZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDMpO1xyXG5sZXQgQUlzdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgnc3VibWFyaW5lJywgMyk7XHJcbmxldCBBSXBhdHJvbF9ib2F0ID0gc2hpcEZhY3RvcnkoJ3BhdHJvbCBib2F0JywgMik7XHJcblxyXG5sZXQgYWxsU2hpcHMgPSB7XHJcbiAgICBjYXJyaWVyOiBjYXJyaWVyLFxyXG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcCxcclxuICAgIGRlc3Ryb3llcjogZGVzdHJveWVyLFxyXG4gICAgc3VibWFyaW5lOiBzdWJtYXJpbmUsXHJcbiAgICAncGF0cm9sIGJvYXQnOiBwYXRyb2xfYm9hdFxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFsbEFJU2hpcHMgPSB7XHJcbiAgICBBSWNhcnJpZXI6IEFJY2FycmllcixcclxuICAgIEFJYmF0dGxlc2hpcDogQUliYXR0bGVzaGlwLFxyXG4gICAgQUlkZXN0cm95ZXI6IEFJZGVzdHJveWVyLFxyXG4gICAgQUlzdWJtYXJpbmU6IEFJc3VibWFyaW5lLFxyXG4gICAgJ0FJIHBhdHJvbCBib2F0JzogQUlwYXRyb2xfYm9hdFxyXG59XHJcblxyXG5jb25zdCBTdGFydCA9IChmdW5jdGlvbigpIHtcclxuICAgIGNyZWF0ZUJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXRTaGlwc0dhbWVib2FyZCcpKTtcclxuICAgIGNyZWF0ZUJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUJvYXJkJykpO1xyXG4gICAgY3JlYXRlQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0FJQm9hcmQnKSk7XHJcbiAgICBheGlzQ2hhbmdlKCk7XHJcbiAgICBpbnN0cnVjdGlvbkRpc3BsYXkoY3VycmVudFNoaXApO1xyXG4gICAgc2V0U2hpcHMuc2hpcHNIb3ZlcigpOyBcclxuICAgIHNldFNoaXBzLnNoaXBDbGljaygpOyBcclxuICAgIHNldFNoaXBzLnNoaXBSZXNldCgpO1xyXG4gICAgcGxhY2VBSVNoaXBzKCk7XHJcbiAgICByZXN0YXJ0R2FtZSgpO1xyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7YWxsU2hpcHN9OyIsImV4cG9ydCBsZXQgYXhpc1ZhciA9ICdob3Jpem9udGFsJztcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gYXhpc0NoYW5nZSgpIHtcclxuICAgIGxldCBheGlzX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzJyk7XHJcbiAgICBheGlzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gICAgICAgIGlmIChheGlzX2J1dHRvbi50ZXh0Q29udGVudCA9PSAnSG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgYXhpc19idXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xyXG4gICAgICAgICAgICBheGlzVmFyID0gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBheGlzX2J1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcclxuICAgICAgICAgICAgYXhpc1ZhciA9ICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBsZXQgbGlzdE9mU3F1YXJlQ2xhc3NlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGNvbnRhaW5lckVsZW1lbnQpIHtcclxuICAgIGxldCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtsZXR0ZXJzW2ldfSR7aisxfWApO1xyXG4gICAgICAgICAgICBsaXN0T2ZTcXVhcmVDbGFzc2VzLnB1c2goYCR7bGV0dGVyc1tpXX0ke2orMX1gKTtcclxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gY3JlYXRlQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldFNoaXBzR2FtZWJvYXJkJykpOyIsImltcG9ydCB7YWxsU2hpcHN9IGZyb20gJy4uJztcclxuaW1wb3J0IGNhcnJpZXJJbWcgZnJvbSAnLi8uLi8uLi9pbWcvY2Fycmllci5wbmcnO1xyXG5pbXBvcnQgYmF0dGxlc2hpcEltZyBmcm9tICcuLy4uLy4uL2ltZy9iYXR0bGVzaGlwLnBuZyc7XHJcbmltcG9ydCBkZXN0cm95ZXJJbWcgZnJvbSAnLi8uLi8uLi9pbWcvZGVzdHJveWVyLnBuZyc7XHJcbmltcG9ydCBzdWJtYXJpbmVJbWcgZnJvbSAnLi8uLi8uLi9pbWcvc3VibWFyaW5lLnBuZyc7XHJcbmltcG9ydCBwYXRyb2xib2F0SW1nIGZyb20gJy4vLi4vLi4vaW1nL3BhdHJvbF9ib2F0LnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VJbWcoc2hpcCkge1xyXG4gICAgbGV0IGltZyA9ICcnO1xyXG4gICAgc2hpcCA9PSAnY2FycmllcicgPyBpbWcgPSBjYXJyaWVySW1nOmZhbHNlO1xyXG4gICAgc2hpcCA9PSAnYmF0dGxlc2hpcCcgPyBpbWcgPSBiYXR0bGVzaGlwSW1nOmZhbHNlO1xyXG4gICAgc2hpcCA9PSAnZGVzdHJveWVyJyA/IGltZyA9IGRlc3Ryb3llckltZzpmYWxzZTtcclxuICAgIHNoaXAgPT0gJ3BhdHJvbCBib2F0JyA/IGltZyA9IHBhdHJvbGJvYXRJbWc6ZmFsc2U7XHJcbiAgICBzaGlwID09ICdzdWJtYXJpbmUnID8gaW1nID0gc3VibWFyaW5lSW1nOmZhbHNlO1xyXG5cclxuICAgIGxldCBpbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nRWwuc3JjID0gaW1nO1xyXG4gICAgaWYgKHNoaXAgPT0gJ3BhdHJvbCBib2F0Jykge1xyXG4gICAgICAgIGltZ0VsLmNsYXNzTGlzdC5hZGQoJ3BhdHJvbCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgc3F1YXJlTmFtZSA9IGFsbFNoaXBzW3NoaXBdLnNoaXBQbGFjZW1lbnRbMF07XHJcbiAgICBsZXQgbXlTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbXlCb2FyZCAuJHtzcXVhcmVOYW1lfWApO1xyXG4gICAgY29uc3QgbGV0dGVycyA9ICdBQkNERUZHSElKJztcclxuICAgIGxldCBudW0gPSBwYXJzZUludChzcXVhcmVOYW1lLnNsaWNlKDEsIDMpLCAxMCk7XHJcbiAgICBsZXQgbGV0dGVyID0gc3F1YXJlTmFtZVswXTtcclxuICAgIGFsbFNoaXBzW3NoaXBdLmF4aXMgPT0gJ3ZlcnRpY2FsJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNteUJvYXJkIC4ke2xldHRlcn0ke251bX1gKS5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik6IGZhbHNlO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzW3NoaXBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoYWxsU2hpcHNbc2hpcF0uYXhpcyA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI215Qm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbXlCb2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIG15U3F1YXJlLmFwcGVuZENoaWxkKGltZ0VsKTtcclxufVxyXG4iLCJpbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcclxuXHJcbmNvbnN0IGluc3RydWN0aW9uc1RleHRfcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbnNUZXh0Jyk7XHJcbmNvbnN0IGluc3RydWN0aW9uc0Rpc3BsYXlfZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9uc0Rpc3BsYXknKTtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFNoaXAgPSAnc3RhcnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RydWN0aW9uRGlzcGxheShzaGlwKSB7XHJcbiAgICBpZiAoc2hpcCA9PSAnUGF0cm9sIEJvYXQnKSB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLnRleHRDb250ZW50ID0gJ1BSRVNTIFRPIFNUQVJUJztcclxuICAgICAgICBpbnN0cnVjdGlvbnNEaXNwbGF5X2Rpdi5jbGFzc0xpc3QuYWRkKCdzdGFydCcpO1xyXG4gICAgICAgIGN1cnJlbnRTaGlwID0gJ2ZpbmlzaCc7XHJcbiAgICAgICAgc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hpcE9yZGVyID0gWydzdGFydCcsICdDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wgQm9hdCddO1xyXG4gICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtzaGlwT3JkZXJbc2hpcE9yZGVyLmluZGV4T2Yoc2hpcCkgKyAxXX0uLi5gO1xyXG4gICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLmNsYXNzTGlzdC5hZGQoJ2NoYW5naW5nRGlzcGxheScpO1xyXG4gICAgY3VycmVudFNoaXAgPSBzaGlwT3JkZXJbc2hpcE9yZGVyLmluZGV4T2Yoc2hpcCkgKyAxXTtcclxuICAgIGNvbnN0IHJlbW92ZUFuaW1hdGlvbkNMYXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGluc3RydWN0aW9uc1RleHRfcC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2luZ0Rpc3BsYXknKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQocmVtb3ZlQW5pbWF0aW9uQ0xhc3MsIDMwMDApO1xyXG59XHJcblxyXG4vLyBpbnN0cnVjdGlvbkRpc3BsYXkoJ1N1Ym1hcmluZScpOyIsImltcG9ydCB7IGxpc3RPZlNxdWFyZUNsYXNzZXMgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBhbGxBSVNoaXBzIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VBSVNoaXBzKCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RPZlNxdWFyZUNsYXNzZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQ5IC0gMCArIDEpKSArIDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUF4aXMoKSB7XHJcbiAgICAgICAgbGV0IGF4aXMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcclxuICAgICAgICByZXR1cm4gYXhpc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSAtIDAgKyAxKSkgKyAwXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2hpcHMgPSBbJ0FJY2FycmllcicsICdBSWJhdHRsZXNoaXAnLCAnQUlkZXN0cm95ZXInLCAnQUlzdWJtYXJpbmUnLCAnQUkgcGF0cm9sIGJvYXQnXTtcclxuICAgIGxldCBjdXJyZW50U2hpcCA9ICdBSWNhcnJpZXInO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVNoaXAoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwID09ICdBSSBwYXRyb2wgYm9hdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcHNbc2hpcHMuaW5kZXhPZihjdXJyZW50U2hpcCkgKyAxXTtcclxuICAgICAgICAgICAgc2V0QUlTaGlwcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBSVNoaXBzKCkge1xyXG4gICAgICAgIGxldCByYW5kb21Db29yZCA9IGdldFJhbmRvbUNvb3JkKCk7XHJcbiAgICAgICAgbGV0IGF4aXNWYXIgPSBnZXRSYW5kb21BeGlzKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsQUlTaGlwc1tjdXJyZW50U2hpcF07XHJcbiAgICAgICAgbGV0IGxldHRlciA9IHJhbmRvbUNvb3JkWzBdO1xyXG4gICAgICAgIGxldCBudW0gPSBwYXJzZUludChyYW5kb21Db29yZC5zbGljZSgxLCAzKSwgMTApO1xyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNBSUJvYXJkIC4ke2xldHRlcn0ke251bStpfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsaWQgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoYXhpc1ZhciA9PSAnaG9yaXpvbnRhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihheGlzVmFyID09ICd2ZXJ0aWNhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYodmFsaWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcn0ke251bStpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5heGlzID0gYXhpc1ZhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2JhdHRsZXNoaXAnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnZGVzdHJveWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAncGF0cm9sIGJvYXQnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU3F1YXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXBPYmouYXhpcyA9IGF4aXNWYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNBSUJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2NhcnJpZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2FycmllcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdkZXN0cm95ZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdzdWJtYXJpbmUnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSkpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTcXVhcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZhbGlkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVNoaXAoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEFJU2hpcHMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFJU2hpcHMoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICBcclxuXHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnRHYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQge2FsbFNoaXBzfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgYXhpc1ZhciB9IGZyb20gXCIuL2F4aXNcIjtcclxuaW1wb3J0IHsgbGlzdE9mU3F1YXJlQ2xhc3NlcyB9IGZyb20gXCIuL2NyZWF0ZUJvYXJkXCI7XHJcbmltcG9ydCB7IGN1cnJlbnRTaGlwLCBpbnN0cnVjdGlvbkRpc3BsYXkgfSBmcm9tIFwiLi9pbnN0cnVjdGlvbnNEaXNwbGF5XCI7XHJcblxyXG5jb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG5cclxuZXhwb3J0IGxldCBzZXRTaGlwcyA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgbGV0IHNoaXBzSG92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlc19kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0U2hpcHNHYW1lYm9hcmQgLnNxdWFyZScpO1xyXG5cclxuICAgICAgICBzcXVhcmVzX2Rpdi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc2V0Q29sb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0T2ZTcXVhcmVDbGFzc2VzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YwZjhmZic7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNoaXBPYmogPSBhbGxTaGlwc1tjdXJyZW50U2hpcC50b0xvd2VyQ2FzZSgpXTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldENvbG9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxldHRlciA9IGUudGFyZ2V0LmNsYXNzTGlzdFsxXVswXTtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMV0uc2xpY2UoMSwgMyksIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXhpc1ZhciA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStqfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY4MDgwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStpfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOGI4YjhiJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStqXX0ke251bX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmODA4MCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzhiOGI4Yic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldENvbG9yKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgc2hpcENsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlc19kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0U2hpcHNHYW1lYm9hcmQgLnNxdWFyZScpO1xyXG5cclxuICAgICAgICBzcXVhcmVzX2Rpdi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hBdWRpb1wiKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lPSAwO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcE9iaiA9IGFsbFNoaXBzW2N1cnJlbnRTaGlwLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkID09IGZhbHNlIHx8IGN1cnJlbnRTaGlwID09ICdmaW5pc2gnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVyID0gZS50YXJnZXQuY2xhc3NMaXN0WzFdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMV0uc2xpY2UoMSwgMyksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihheGlzVmFyID09ICd2ZXJ0aWNhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWxpZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcn0ke251bStpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLmF4aXMgPSBheGlzVmFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2Rlc3Ryb3llcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlKSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5heGlzID0gYXhpc1ZhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNoaXBPYmouc2hpcFBsYWNlbWVudCkucHVzaChgJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXBPYmoubmFtZSA9PSAnY2FycmllcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2JhdHRsZXNoaXAnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdkZXN0cm95ZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ3N1Ym1hcmluZScgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAncGF0cm9sIGJvYXQnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSkpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbkRpc3BsYXkoY3VycmVudFNoaXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNoaXBSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXRCb2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0T2ZTcXVhcmVDbGFzc2VzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjBmOGZmJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJyaWVyJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnYmF0dGxlc2hpcCcpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc3Ryb3llcicpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1hcmluZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdHJvbC1ib2F0Jyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBhbGxTaGlwcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNoaXBzW3Byb3BdLnNoaXBQbGFjZW1lbnQgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25EaXNwbGF5KCdzdGFydCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaGlwc0hvdmVyLFxyXG4gICAgICAgIHNoaXBDbGljayxcclxuICAgICAgICBzaGlwUmVzZXRcclxuICAgIH1cclxufSkoKTtcclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXBGYWN0b3J5KG5hbWUsIGxlbmd0aCkge1xyXG4gICAgbGV0IHBsYWNlc0hpdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBsYWNlc0hpdC5wdXNoKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaXQgPSAoaW5kZXgsIGluc3RhbmNlTmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCBwbGFjZXNIaXQgPSBpbnN0YW5jZU5hbWUucGxhY2VzSGl0O1xyXG4gICAgICAgIHBsYWNlc0hpdFtpbmRleF0gPT0gdW5kZWZpbmVkID8gY29uc29sZS5sb2coJ0hpdCBpcyB1bmRlZmluZWQnKSA6IHBsYWNlc0hpdFtpbmRleF0gPSB0cnVlO1xyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBpc1N1bmsgPSAoYXJyKSA9PiBhcnIuZXZlcnkoZWwgPT4gZWwgPT0gdHJ1ZSk7XHJcblxyXG4gICAgbGV0IHNoaXBQbGFjZW1lbnQgPSBbXTtcclxuXHJcbiAgICBsZXQgYXhpcyA9ICcnO1xyXG5cclxuICAgIHJldHVybiB7bmFtZSwgbGVuZ3RoLCBwbGFjZXNIaXQsIGhpdCwgaXNTdW5rLCBzaGlwUGxhY2VtZW50LCBheGlzfTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSBcIi4vY3JlYXRlQm9hcmRcIjtcclxuaW1wb3J0IHsgcGxhY2VJbWcgfSBmcm9tIFwiLi9nZW5lcmF0ZU93blNoaXBzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xyXG4gICAgY29uc3QgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XHJcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBob21lRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZ2FtZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHBsYWNlSW1nKCdjYXJyaWVyJyk7XHJcbiAgICAgICAgcGxhY2VJbWcoJ2JhdHRsZXNoaXAnKTtcclxuICAgICAgICBwbGFjZUltZygnZGVzdHJveWVyJyk7XHJcbiAgICAgICAgcGxhY2VJbWcoJ3N1Ym1hcmluZScpO1xyXG4gICAgICAgIHBsYWNlSW1nKCdwYXRyb2wgYm9hdCcpO1xyXG4gICAgfSlcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=