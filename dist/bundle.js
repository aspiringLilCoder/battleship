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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Fredoka', sans-serif;\n  height: 100vh;\n  background: #f0f8ff;\n  color: #4e4e4e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nbutton {\n  border-radius: 25px;\n  font-family: 'Fredoka', sans-serif;\n  border: none;\n  cursor: pointer;\n}\n\n#title {\n  text-align: center;\n  margin: 20px;\n  font-size: 70px;\n  font-weight: 500;\n}\n\n#home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 120px;\n}\n\n#home #setShipsGameboard {\n  width: 500px;\n  height: 500px;\n  margin-right: 100px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#home #setShipsGameboard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#home #setShipsGameboard .carrier {\n  background-color: #a8e6cf   !important;\n}\n\n#home #setShipsGameboard .battleship {\n  background-color: #dcedc1   !important;\n}\n\n#home #setShipsGameboard .destroyer {\n  background-color: #ffd3b6   !important;\n}\n\n#home #setShipsGameboard .submarine {\n  background-color: #ffaaa5   !important;\n}\n\n#home #setShipsGameboard .patrol-boat {\n  background-color: #ff8b94 !important;\n}\n\n#home #sideOptions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#home #sideOptions #instructionsDisplay {\n  color: #f0f8ff;\n  width: 250px;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #4e4e4e;\n  border-radius: 25px;\n  font-size: 20px;\n  padding: 5px;\n  font-weight: 500;\n}\n\n#home #sideOptions .start {\n  background-color: #ffdddd !important;\n  color: #000000 !important;\n}\n\n#home #sideOptions .start:hover {\n  background-color: #ffc2c2 !important;\n  cursor: pointer;\n}\n\n#home #sideOptions .start:active {\n  background-color: #ffaaaa !important;\n}\n\n#home #sideOptions .changingDisplay {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@-webkit-keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#home #sideOptions button {\n  width: 200px;\n  height: 50px;\n  margin-top: 25px;\n  background-color: #d1d1d1;\n  font-size: 20px;\n}\n\n#home #sideOptions button:hover {\n  background-color: #bfbfbf;\n}\n\n#home #sideOptions button:active {\n  background-color: #5d5d5d;\n}\n\n#game {\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #turnDisplay {\n  font-size: 35px;\n  font-weight: 600;\n  margin: 20px;\n  padding-top: 16px;\n  background-color: #cacaca;\n  border-radius: 25px;\n  width: 500px;\n  height: 70px;\n  text-align: center;\n}\n\n#game .changingDisplay {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#game #gameBoards {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n\n#game #gameBoards #left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #left #myBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n  margin-right: 40px;\n}\n\n#game #gameBoards #left #myBoard .square {\n  border: 1px solid #4e4e4e;\n  position: relative;\n}\n\n#game #gameBoards #left #myBoard .square img {\n  position: absolute;\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .vertical {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  z-index: 1;\n}\n\n#game #gameBoards #left #myBoard .selected {\n  background-color: #c1c1c1 !important;\n}\n\n#game #gameBoards #left #myBoard .selectedHit {\n  background-color: pink !important;\n}\n\n#game #gameBoards #left #myBoard .sunk {\n  background-color: red !important;\n}\n\n#game #gameBoards #left #myBoardTitle {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n#game #gameBoards #right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#game #gameBoards #right #AIBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  margin-left: 40px;\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#game #gameBoards #right #AIBoard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#game #gameBoards #right #AIBoard .square:hover {\n  background: #adebff;\n}\n\n#game #gameBoards #right #AIBoardTitle {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n#game #restartGame {\n  font-size: 30px;\n  font-weight: 600;\n  margin: 20px;\n  background-color: #cacaca;\n  color: #4e4e4e;\n  border-radius: 25px;\n  width: 200px;\n  height: 70px;\n  text-align: center;\n}\n\n#game #restartGame:hover {\n  background-color: #bfbfbf;\n}\n\n#game #restartGame:active {\n  background-color: #5d5d5d;\n}\n\nfooter {\n  margin-top: auto;\n  height: 20px;\n  background-color: #4e4e4e;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a {\n  color: #f0f8ff;\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a:hover {\n  color: #cfcfcf;\n}\n\nfooter a:active {\n  color: #5d5d5d;\n}\n\n#gameResult {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n/* Modal Content/Box */\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 45px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #f0f8ff;\n  margin: 15% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n#restartGame2 {\n  font-size: 30px;\n  font-weight: 600;\n  margin: 20px;\n  background-color: #cacaca;\n  color: #4e4e4e;\n  border-radius: 25px;\n  width: 200px;\n  height: 70px;\n  text-align: center;\n}\n\n#restartGame2:hover {\n  background-color: #bfbfbf;\n}\n\n#restartGame2:active {\n  background-color: #5d5d5d;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
    _modules_setShips__WEBPACK_IMPORTED_MODULE_5__.setShips.shipResetListener();
    (0,_modules_restartGame__WEBPACK_IMPORTED_MODULE_7__.restartGame)();
    (0,_modules_placeAIships__WEBPACK_IMPORTED_MODULE_8__.placeAIShips)();
})();




/***/ }),

/***/ "./src/modules/autoAttack.js":
/*!***********************************!*\
  !*** ./src/modules/autoAttack.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autoAttack": () => (/* binding */ autoAttack)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _img_explode_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/explode.png */ "./img/explode.png");
/* harmony import */ var _img_water_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/water.png */ "./img/water.png");
/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameResult */ "./src/modules/gameResult.js");
/* harmony import */ var _turnDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./turnDisplay */ "./src/modules/turnDisplay.js");








function autoAttack() {
    function getRandomCoord() {
        return _createBoard__WEBPACK_IMPORTED_MODULE_3__.listOfSquareClasses[Math.floor(Math.random() * (99 - 0 + 1)) + 0];
    }

    function shoot() {
        let coord = getRandomCoord();
        console.log(coord);
        let element = document.querySelector(`#myBoard .${coord}`);
        let valid = true;

        if (element.classList.contains('hit') || _turnDisplay__WEBPACK_IMPORTED_MODULE_5__.currentTurn == 'player') {
            valid = false;
        } else if(element.classList.contains('selected')) {
            // element.style.backgroundColor = 'pink !important';
            element.classList.add('hit');
            element.classList.add('selectedHit');

            let audio = document.querySelector("#attackAudio");
            audio.currentTime= 0;
            audio.play();

            for (const prop in ___WEBPACK_IMPORTED_MODULE_0__.allShips) {
                const ship = ___WEBPACK_IMPORTED_MODULE_0__.allShips[prop];
                const shipPlacement = ship.shipPlacement;
                let placesHit = ship.placesHit;
                let letterNum = element.classList[1];

                if (shipPlacement.includes(letterNum)) {
                    placesHit[shipPlacement.indexOf(letterNum)] = true;
                }
            }

            let sunkShips = 0;
            for (const prop in ___WEBPACK_IMPORTED_MODULE_0__.allShips) {
                const ship = ___WEBPACK_IMPORTED_MODULE_0__.allShips[prop];
                const shipPlacement = ship.shipPlacement;
                let placesHit = ship.placesHit;

                if (placesHit.every(boo => boo == true)) {
                    shipPlacement.forEach(el => {
                        document.querySelector(`#myBoard .${el}`).classList.add('sunk');
                    });
                    sunkShips++;
                }
            }

            if (sunkShips == 5) {
                (0,_gameResult__WEBPACK_IMPORTED_MODULE_4__.gameResult)('AI');
            } else {
                (0,_turnDisplay__WEBPACK_IMPORTED_MODULE_5__.changeTurn)();
            }

        } else {
            let oceanImg = document.createElement('img');
            oceanImg.src = _img_water_png__WEBPACK_IMPORTED_MODULE_2__;
            
            let audio = document.querySelector("#splashAudio");
            audio.currentTime= 0;
            audio.play();

            element.appendChild(oceanImg);
            element.classList.add('hit');
            (0,_turnDisplay__WEBPACK_IMPORTED_MODULE_5__.changeTurn)();
        }

        if (valid == false) {
            shoot();
        }
    }

    setTimeout(() => {
        shoot();
    }, 2000);

}

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

let letters = 'ABCDEFGHIJ';

for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < 10; j++) {
        listOfSquareClasses.push(`${letters[i]}${j+1}`);
    }
}

function createBoard(containerElement) {
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < 10; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.classList.add(`${letters[i]}${j+1}`);
            containerElement.appendChild(div);
        }
    }
}

// createBoard(document.querySelector('#setShipsGameboard'));

/***/ }),

/***/ "./src/modules/gameResult.js":
/*!***********************************!*\
  !*** ./src/modules/gameResult.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameResult": () => (/* binding */ gameResult)
/* harmony export */ });

function gameResult(whoWon) {
    const resultText = document.querySelector('#resultText');
    const gameResultDisplay = document.querySelector('#gameResult');
    gameResultDisplay.style.display = 'flex';
    if (whoWon == 'player') {
        
    } else {
        resultText.textContent = 'You have Lost..';
    }
}

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
            let selectedSquare = document.querySelector(`#myBoard .${letter}${num+i}`);
            selectedSquare.classList.add('selected');
            ___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                        : false))))
        } else {
            let selectedSquare = document.querySelector(`#myBoard .${letters[letters.indexOf(letter)+i]}${num}`);
            selectedSquare.classList.add('selected');
            ___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                        : (___WEBPACK_IMPORTED_MODULE_0__.allShips[ship].name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                        : false))))
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

/***/ "./src/modules/myAttack.js":
/*!*********************************!*\
  !*** ./src/modules/myAttack.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myAttack": () => (/* binding */ myAttack)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _img_explode_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/explode.png */ "./img/explode.png");
/* harmony import */ var _img_water_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/water.png */ "./img/water.png");
/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameResult */ "./src/modules/gameResult.js");
/* harmony import */ var _turnDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./turnDisplay */ "./src/modules/turnDisplay.js");







function myAttack() {
    const allAISquares = document.querySelectorAll('#AIBoard .square');
    allAISquares.forEach(el => {
        el.addEventListener('click', e => {
            let element = e.target;
            if (element.tagName == 'IMG' || element.classList.contains('hit') || _turnDisplay__WEBPACK_IMPORTED_MODULE_4__.currentTurn == 'AI') {
    
            } else if(element.classList.contains('selected')) {
                let explosionImg = document.createElement('img');
                explosionImg.src = _img_explode_png__WEBPACK_IMPORTED_MODULE_1__;
                let audio = document.querySelector("#attackAudio");
                audio.currentTime= 0;
                audio.play();

                element.appendChild(explosionImg);
                element.classList.add('hit');

                for (const prop in ___WEBPACK_IMPORTED_MODULE_0__.allAIShips) {
                    const ship = ___WEBPACK_IMPORTED_MODULE_0__.allAIShips[prop];
                    const shipPlacement = ship.shipPlacement;
                    let placesHit = ship.placesHit;
                    let letterNum = element.classList[1];

                    if (shipPlacement.includes(letterNum)) {
                        placesHit[shipPlacement.indexOf(letterNum)] = true;
                    }
                }

                let sunkShips = 0;
                for (const prop in ___WEBPACK_IMPORTED_MODULE_0__.allAIShips) {
                    const ship = ___WEBPACK_IMPORTED_MODULE_0__.allAIShips[prop];
                    const shipPlacement = ship.shipPlacement;
                    let placesHit = ship.placesHit;

                    if (placesHit.every(boo => boo == true)) {
                        shipPlacement.forEach(el => {
                            document.querySelector(`#AIBoard .${el}`).style.backgroundColor = 'red';
                        });
                        sunkShips++;
                    }
                }
                
                if (sunkShips == 5) {
                    (0,_gameResult__WEBPACK_IMPORTED_MODULE_3__.gameResult)('player');
                } else {
                    (0,_turnDisplay__WEBPACK_IMPORTED_MODULE_4__.changeTurn)();
                }
            } else {
                let oceanImg = document.createElement('img');
                oceanImg.src = _img_water_png__WEBPACK_IMPORTED_MODULE_2__;

                let audio = document.querySelector("#splashAudio");
                audio.currentTime= 0;
                audio.play();

                element.appendChild(oceanImg);
                element.classList.add('hit');
                (0,_turnDisplay__WEBPACK_IMPORTED_MODULE_4__.changeTurn)();
            }
            
        });
    });
}

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
    document.querySelector('#restartGame2').addEventListener('click', () => {
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
/* harmony import */ var _generateOwnShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateOwnShips */ "./src/modules/generateOwnShips.js");
/* harmony import */ var _myAttack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myAttack */ "./src/modules/myAttack.js");
/* harmony import */ var _placeAIships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeAIships */ "./src/modules/placeAIships.js");
// import { Attack } from "./attack";




function startGame() {
    const startBtn = document.querySelector('.start');
    const homeDiv = document.querySelector('#home');
    const gameDiv = document.querySelector('#game');
    startBtn.addEventListener('click', () => {
        homeDiv.style.display = 'none';
        gameDiv.style.display = 'flex';
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_0__.placeImg)('carrier');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_0__.placeImg)('battleship');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_0__.placeImg)('destroyer');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_0__.placeImg)('submarine');
        (0,_generateOwnShips__WEBPACK_IMPORTED_MODULE_0__.placeImg)('patrol boat');
        (0,_myAttack__WEBPACK_IMPORTED_MODULE_1__.myAttack)();
    })
}

/***/ }),

/***/ "./src/modules/turnDisplay.js":
/*!************************************!*\
  !*** ./src/modules/turnDisplay.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTurn": () => (/* binding */ changeTurn),
/* harmony export */   "currentTurn": () => (/* binding */ currentTurn)
/* harmony export */ });
/* harmony import */ var _autoAttack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autoAttack */ "./src/modules/autoAttack.js");


let currentTurn = 'player'; //AI

function changeTurn() {
    const turnText = document.querySelector('#turnText');
    if (currentTurn == 'player') {
        turnText.textContent = "Awaiting Opponent's Attack..";
        currentTurn = 'AI';
        turnText.classList.add('changingDisplay');
        const removeAnimationCLass = () => {
        turnText.classList.remove('changingDisplay');
        }
        setTimeout(removeAnimationCLass, 3000);
        (0,_autoAttack__WEBPACK_IMPORTED_MODULE_0__.autoAttack)();
    } else {
        turnText.textContent = "It's your turn to attack!";
        currentTurn = 'player';
        turnText.classList.add('changingDisplay');
        const removeAnimationCLass = () => {
        turnText.classList.remove('changingDisplay');
        }
        setTimeout(removeAnimationCLass, 3000);
    }
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

/***/ "./img/explode.png":
/*!*************************!*\
  !*** ./img/explode.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c274848a5813cc02f883.png";

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

/***/ }),

/***/ "./img/water.png":
/*!***********************!*\
  !*** ./img/water.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f789070e5ec51b746e05.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEMsNkdBQTZHLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxZQUFZLGNBQWMsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLGNBQWMsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsVUFBVSxXQUFXLFlBQVksY0FBYyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksVUFBVSxVQUFVLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssYUFBYSxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxhQUFhLFlBQVksWUFBWSxlQUFlLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssYUFBYSxZQUFZLFlBQVksZUFBZSxZQUFZLFlBQVksV0FBVyxPQUFPLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLEtBQUssT0FBTyxLQUFLLFlBQVksWUFBWSxhQUFhLGNBQWMsWUFBWSxZQUFZLGNBQWMsWUFBWSxZQUFZLFlBQVksWUFBWSxRQUFRLE1BQU0sWUFBWSxhQUFhLFVBQVUsYUFBYSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsWUFBWSxhQUFhLGVBQWUsV0FBVyxRQUFRLEtBQUssY0FBYyxXQUFXLFFBQVEsS0FBSyxhQUFhLFlBQVksT0FBTyxLQUFLLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxjQUFjLFFBQVEsS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsUUFBUSxNQUFNLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLGFBQWEsUUFBUSxLQUFLLFdBQVcsYUFBYSxRQUFRLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxLQUFLLFlBQVksVUFBVSxZQUFZLFdBQVcsYUFBYSxjQUFjLFdBQVcsV0FBVyxhQUFhLGNBQWMsYUFBYSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEs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aUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2F1dG9BdHRhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2F4aXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lUmVzdWx0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nZW5lcmF0ZU93blNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9pbnN0cnVjdGlvbnNEaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9teUF0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxhY2VBSXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9yZXN0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2V0U2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3R1cm5EaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ZyZWRva2EnLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmMGY4ZmY7XFxuICBjb2xvcjogIzRlNGU0ZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZG9rYScsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jaG9tZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAtbXMtZ3JpZC1yb3dzOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuY2FycmllciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThlNmNmICAgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NldFNoaXBzR2FtZWJvYXJkIC5iYXR0bGVzaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2VkYzEgICAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2V0U2hpcHNHYW1lYm9hcmQgLmRlc3Ryb3llciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkM2I2ICAgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NldFNoaXBzR2FtZWJvYXJkIC5zdWJtYXJpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWFhNSAgICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAucGF0cm9sLWJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGI5NCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyAjaW5zdHJ1Y3Rpb25zRGlzcGxheSB7XFxuICBjb2xvcjogI2YwZjhmZjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLnN0YXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRkZGQgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyAuc3RhcnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzJjMiAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgLnN0YXJ0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYWFhICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyAuY2hhbmdpbmdEaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdHlwaW5nIDJzIHN0ZXBzKDI1LCBlbmQpO1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyNSwgZW5kKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB0eXBpbmcge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwJTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jaG9tZSAjc2lkZU9wdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDVkNWQ7XFxufVxcblxcbiNnYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lICN0dXJuRGlzcGxheSB7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUgLmNoYW5naW5nRGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyNSwgZW5kKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjUsIGVuZCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIC1tcy1ncmlkLXJvd3M6ICgxZnIpWzEwXTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI2xlZnQgI215Qm9hcmQgLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCAuc3F1YXJlIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZCAudmVydGljYWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkIC5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxICFpbXBvcnRhbnQ7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkIC5zZWxlY3RlZEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rICFpbXBvcnRhbnQ7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNsZWZ0ICNteUJvYXJkIC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jZ2FtZSAjZ2FtZUJvYXJkcyAjbGVmdCAjbXlCb2FyZFRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUgI2dhbWVCb2FyZHMgI3JpZ2h0ICNBSUJvYXJkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogKDFmcilbMTBdO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAtbXMtZ3JpZC1yb3dzOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCAjQUlCb2FyZCAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCAjQUlCb2FyZCAuc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNhZGViZmY7XFxufVxcblxcbiNnYW1lICNnYW1lQm9hcmRzICNyaWdodCAjQUlCb2FyZFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNnYW1lICNyZXN0YXJ0R2FtZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGNvbG9yOiAjNGU0ZTRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUgI3Jlc3RhcnRHYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XFxufVxcblxcbiNnYW1lICNyZXN0YXJ0R2FtZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNWQ1ZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiAjZjBmOGZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6ICNjZmNmY2Y7XFxufVxcblxcbmZvb3RlciBhOmFjdGl2ZSB7XFxuICBjb2xvcjogIzVkNWQ1ZDtcXG59XFxuXFxuI2dhbWVSZXN1bHQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7XFxuICAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4jcmVzdGFydEdhbWUyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgY29sb3I6ICM0ZTRlNGU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGFydEdhbWUyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XFxufVxcblxcbiNyZXN0YXJ0R2FtZTI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDVkNWQ7XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5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TUFDcEIscUJBQXFCO1VBQ2pCLHVCQUF1QjtFQUMvQix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtBQUM3Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtFQUMzQix3QkFBd0I7TUFDcEIscUJBQXFCO1VBQ2pCLHVCQUF1QjtFQUMvQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDZCQUE2QjtNQUN6QiwwQkFBMEI7VUFDdEIsc0JBQXNCO0VBQzlCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tICcuLy4uL2ltZy9naXRodWItbG9nby5wbmcnO1xyXG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vbW9kdWxlcy9zaGlwRmFjdG9yeVwiO1xyXG5pbXBvcnQge2NyZWF0ZUJvYXJkLCBsaXN0T2ZTcXVhcmVDbGFzc2VzfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlQm9hcmQnO1xyXG5pbXBvcnQge2F4aXNDaGFuZ2UsIGF4aXNWYXJ9IGZyb20gJy4vbW9kdWxlcy9heGlzJztcclxuaW1wb3J0IHsgc2V0U2hpcHMgfSBmcm9tICcuL21vZHVsZXMvc2V0U2hpcHMnO1xyXG5pbXBvcnQge2luc3RydWN0aW9uRGlzcGxheSwgY3VycmVudFNoaXAgfWZyb20gJy4vbW9kdWxlcy9pbnN0cnVjdGlvbnNEaXNwbGF5JztcclxuaW1wb3J0IHsgcmVzdGFydEdhbWUgfSBmcm9tICcuL21vZHVsZXMvcmVzdGFydEdhbWUnO1xyXG5pbXBvcnQgeyBwbGFjZUFJU2hpcHMgfSBmcm9tICcuL21vZHVsZXMvcGxhY2VBSXNoaXBzJztcclxuXHJcbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWxvZ28nKSkuc3JjID0gZ2l0aHViTG9nbztcclxuXHJcbmxldCBjYXJyaWVyID0gc2hpcEZhY3RvcnkoJ2NhcnJpZXInLCA1KTtcclxubGV0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsIDQpO1xyXG5sZXQgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDMpO1xyXG5sZXQgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpO1xyXG5sZXQgcGF0cm9sX2JvYXQgPSBzaGlwRmFjdG9yeSgncGF0cm9sIGJvYXQnLCAyKTtcclxuXHJcbmxldCBBSWNhcnJpZXIgPSBzaGlwRmFjdG9yeSgnY2FycmllcicsIDUpO1xyXG5sZXQgQUliYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoJ2JhdHRsZXNoaXAnLCA0KTtcclxubGV0IEFJZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDMpO1xyXG5sZXQgQUlzdWJtYXJpbmUgPSBzaGlwRmFjdG9yeSgnc3VibWFyaW5lJywgMyk7XHJcbmxldCBBSXBhdHJvbF9ib2F0ID0gc2hpcEZhY3RvcnkoJ3BhdHJvbCBib2F0JywgMik7XHJcblxyXG5sZXQgYWxsU2hpcHMgPSB7XHJcbiAgICBjYXJyaWVyOiBjYXJyaWVyLFxyXG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcCxcclxuICAgIGRlc3Ryb3llcjogZGVzdHJveWVyLFxyXG4gICAgc3VibWFyaW5lOiBzdWJtYXJpbmUsXHJcbiAgICAncGF0cm9sIGJvYXQnOiBwYXRyb2xfYm9hdFxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFsbEFJU2hpcHMgPSB7XHJcbiAgICBBSWNhcnJpZXI6IEFJY2FycmllcixcclxuICAgIEFJYmF0dGxlc2hpcDogQUliYXR0bGVzaGlwLFxyXG4gICAgQUlkZXN0cm95ZXI6IEFJZGVzdHJveWVyLFxyXG4gICAgQUlzdWJtYXJpbmU6IEFJc3VibWFyaW5lLFxyXG4gICAgJ0FJIHBhdHJvbCBib2F0JzogQUlwYXRyb2xfYm9hdFxyXG59XHJcblxyXG5jb25zdCBTdGFydCA9IChmdW5jdGlvbigpIHtcclxuICAgIGNyZWF0ZUJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXRTaGlwc0dhbWVib2FyZCcpKTtcclxuICAgIGNyZWF0ZUJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUJvYXJkJykpO1xyXG4gICAgY3JlYXRlQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0FJQm9hcmQnKSk7XHJcbiAgICBheGlzQ2hhbmdlKCk7XHJcbiAgICBpbnN0cnVjdGlvbkRpc3BsYXkoY3VycmVudFNoaXApO1xyXG4gICAgc2V0U2hpcHMuc2hpcHNIb3ZlcigpOyBcclxuICAgIHNldFNoaXBzLnNoaXBDbGljaygpOyBcclxuICAgIHNldFNoaXBzLnNoaXBSZXNldExpc3RlbmVyKCk7XHJcbiAgICByZXN0YXJ0R2FtZSgpO1xyXG4gICAgcGxhY2VBSVNoaXBzKCk7XHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IHthbGxTaGlwc307IiwiaW1wb3J0IHsgYWxsU2hpcHN9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgZXhwbG9kZUltZyBmcm9tICcuLi8uLi9pbWcvZXhwbG9kZS5wbmcnO1xyXG5pbXBvcnQgd2F0ZXJJbWcgZnJvbSAnLi4vLi4vaW1nL3dhdGVyLnBuZyc7XHJcbmltcG9ydCB7IGxpc3RPZlNxdWFyZUNsYXNzZXMgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBnYW1lUmVzdWx0IH0gZnJvbSBcIi4vZ2FtZVJlc3VsdFwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VUdXJuLCBjdXJyZW50VHVybiB9IGZyb20gXCIuL3R1cm5EaXNwbGF5XCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9BdHRhY2soKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Db29yZCgpIHtcclxuICAgICAgICByZXR1cm4gbGlzdE9mU3F1YXJlQ2xhc3Nlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOTkgLSAwICsgMSkpICsgMF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvb3QoKSB7XHJcbiAgICAgICAgbGV0IGNvb3JkID0gZ2V0UmFuZG9tQ29vcmQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbXlCb2FyZCAuJHtjb29yZH1gKTtcclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8IGN1cnJlbnRUdXJuID09ICdwbGF5ZXInKSB7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgIC8vIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3BpbmsgIWltcG9ydGFudCc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRIaXQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrQXVkaW9cIik7XHJcbiAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lPSAwO1xyXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gYWxsU2hpcHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBhbGxTaGlwc1twcm9wXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSBzaGlwLnNoaXBQbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VzSGl0ID0gc2hpcC5wbGFjZXNIaXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV0dGVyTnVtID0gZWxlbWVudC5jbGFzc0xpc3RbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBQbGFjZW1lbnQuaW5jbHVkZXMobGV0dGVyTnVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlc0hpdFtzaGlwUGxhY2VtZW50LmluZGV4T2YobGV0dGVyTnVtKV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc3Vua1NoaXBzID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGFsbFNoaXBzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gYWxsU2hpcHNbcHJvcF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gc2hpcC5zaGlwUGxhY2VtZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlc0hpdCA9IHNoaXAucGxhY2VzSGl0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwbGFjZXNIaXQuZXZlcnkoYm9vID0+IGJvbyA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNteUJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzdW5rU2hpcHMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN1bmtTaGlwcyA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lUmVzdWx0KCdBSScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlVHVybigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBvY2VhbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBvY2VhbkltZy5zcmMgPSB3YXRlckltZztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsYXNoQXVkaW9cIik7XHJcbiAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lPSAwO1xyXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9jZWFuSW1nKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICAgICAgY2hhbmdlVHVybigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNob290KCk7XHJcbiAgICB9LCAyMDAwKTtcclxuXHJcbn0iLCJleHBvcnQgbGV0IGF4aXNWYXIgPSAnaG9yaXpvbnRhbCc7XHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIGF4aXNDaGFuZ2UoKSB7XHJcbiAgICBsZXQgYXhpc19idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcycpO1xyXG4gICAgYXhpc19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICAgICAgICBpZiAoYXhpc19idXR0b24udGV4dENvbnRlbnQgPT0gJ0hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGF4aXNfYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcclxuICAgICAgICAgICAgYXhpc1ZhciA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXhpc19idXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIGF4aXNWYXIgPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgbGV0IGxpc3RPZlNxdWFyZUNsYXNzZXMgPSBbXTtcclxuXHJcbmxldCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICBsaXN0T2ZTcXVhcmVDbGFzc2VzLnB1c2goYCR7bGV0dGVyc1tpXX0ke2orMX1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGNvbnRhaW5lckVsZW1lbnQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7bGV0dGVyc1tpXX0ke2orMX1gKTtcclxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gY3JlYXRlQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldFNoaXBzR2FtZWJvYXJkJykpOyIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVJlc3VsdCh3aG9Xb24pIHtcclxuICAgIGNvbnN0IHJlc3VsdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0VGV4dCcpO1xyXG4gICAgY29uc3QgZ2FtZVJlc3VsdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZVJlc3VsdCcpO1xyXG4gICAgZ2FtZVJlc3VsdERpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGlmICh3aG9Xb24gPT0gJ3BsYXllcicpIHtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0VGV4dC50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZSBMb3N0Li4nO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHthbGxTaGlwc30gZnJvbSAnLi4nO1xyXG5pbXBvcnQgY2FycmllckltZyBmcm9tICcuLy4uLy4uL2ltZy9jYXJyaWVyLnBuZyc7XHJcbmltcG9ydCBiYXR0bGVzaGlwSW1nIGZyb20gJy4vLi4vLi4vaW1nL2JhdHRsZXNoaXAucG5nJztcclxuaW1wb3J0IGRlc3Ryb3llckltZyBmcm9tICcuLy4uLy4uL2ltZy9kZXN0cm95ZXIucG5nJztcclxuaW1wb3J0IHN1Ym1hcmluZUltZyBmcm9tICcuLy4uLy4uL2ltZy9zdWJtYXJpbmUucG5nJztcclxuaW1wb3J0IHBhdHJvbGJvYXRJbWcgZnJvbSAnLi8uLi8uLi9pbWcvcGF0cm9sX2JvYXQucG5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUltZyhzaGlwKSB7XHJcbiAgICBsZXQgaW1nID0gJyc7XHJcbiAgICBzaGlwID09ICdjYXJyaWVyJyA/IGltZyA9IGNhcnJpZXJJbWc6ZmFsc2U7XHJcbiAgICBzaGlwID09ICdiYXR0bGVzaGlwJyA/IGltZyA9IGJhdHRsZXNoaXBJbWc6ZmFsc2U7XHJcbiAgICBzaGlwID09ICdkZXN0cm95ZXInID8gaW1nID0gZGVzdHJveWVySW1nOmZhbHNlO1xyXG4gICAgc2hpcCA9PSAncGF0cm9sIGJvYXQnID8gaW1nID0gcGF0cm9sYm9hdEltZzpmYWxzZTtcclxuICAgIHNoaXAgPT0gJ3N1Ym1hcmluZScgPyBpbWcgPSBzdWJtYXJpbmVJbWc6ZmFsc2U7XHJcblxyXG4gICAgbGV0IGltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWdFbC5zcmMgPSBpbWc7XHJcbiAgICBpZiAoc2hpcCA9PSAncGF0cm9sIGJvYXQnKSB7XHJcbiAgICAgICAgaW1nRWwuY2xhc3NMaXN0LmFkZCgncGF0cm9sJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBzcXVhcmVOYW1lID0gYWxsU2hpcHNbc2hpcF0uc2hpcFBsYWNlbWVudFswXTtcclxuICAgIGxldCBteVNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNteUJvYXJkIC4ke3NxdWFyZU5hbWV9YCk7XHJcbiAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xyXG4gICAgbGV0IG51bSA9IHBhcnNlSW50KHNxdWFyZU5hbWUuc2xpY2UoMSwgMyksIDEwKTtcclxuICAgIGxldCBsZXR0ZXIgPSBzcXVhcmVOYW1lWzBdO1xyXG4gICAgYWxsU2hpcHNbc2hpcF0uYXhpcyA9PSAndmVydGljYWwnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI215Qm9hcmQgLiR7bGV0dGVyfSR7bnVtfWApLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbFwiKTogZmFsc2U7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHNbc2hpcF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihhbGxTaGlwc1tzaGlwXS5heGlzID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbXlCb2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgYWxsU2hpcHNbc2hpcF0ubmFtZSA9PSAnY2FycmllcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChhbGxTaGlwc1tzaGlwXS5uYW1lID09ICdiYXR0bGVzaGlwJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGFsbFNoaXBzW3NoaXBdLm5hbWUgPT0gJ2Rlc3Ryb3llcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGFsbFNoaXBzW3NoaXBdLm5hbWUgPT0gJ3N1Ym1hcmluZScgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGFsbFNoaXBzW3NoaXBdLm5hbWUgPT0gJ3BhdHJvbCBib2F0JyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BhdHJvbC1ib2F0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlKSkpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNteUJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGFsbFNoaXBzW3NoaXBdLm5hbWUgPT0gJ2NhcnJpZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2FycmllcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoYWxsU2hpcHNbc2hpcF0ubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChhbGxTaGlwc1tzaGlwXS5uYW1lID09ICdkZXN0cm95ZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChhbGxTaGlwc1tzaGlwXS5uYW1lID09ICdzdWJtYXJpbmUnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChhbGxTaGlwc1tzaGlwXS5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSkpKSlcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgbXlTcXVhcmUuYXBwZW5kQ2hpbGQoaW1nRWwpO1xyXG59XHJcbiIsImltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xyXG5cclxuY29uc3QgaW5zdHJ1Y3Rpb25zVGV4dF9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9uc1RleHQnKTtcclxuY29uc3QgaW5zdHJ1Y3Rpb25zRGlzcGxheV9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25zRGlzcGxheScpO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50U2hpcCA9ICdzdGFydCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdHJ1Y3Rpb25EaXNwbGF5KHNoaXApIHtcclxuICAgIGlmIChzaGlwID09ICdQYXRyb2wgQm9hdCcpIHtcclxuICAgICAgICBpbnN0cnVjdGlvbnNUZXh0X3AudGV4dENvbnRlbnQgPSAnUFJFU1MgVE8gU1RBUlQnO1xyXG4gICAgICAgIGluc3RydWN0aW9uc0Rpc3BsYXlfZGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0Jyk7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSAnZmluaXNoJztcclxuICAgICAgICBzdGFydEdhbWUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGlwT3JkZXIgPSBbJ3N0YXJ0JywgJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCBCb2F0J107XHJcbiAgICBpbnN0cnVjdGlvbnNUZXh0X3AudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3NoaXBPcmRlcltzaGlwT3JkZXIuaW5kZXhPZihzaGlwKSArIDFdfS4uLmA7XHJcbiAgICBpbnN0cnVjdGlvbnNUZXh0X3AuY2xhc3NMaXN0LmFkZCgnY2hhbmdpbmdEaXNwbGF5Jyk7XHJcbiAgICBjdXJyZW50U2hpcCA9IHNoaXBPcmRlcltzaGlwT3JkZXIuaW5kZXhPZihzaGlwKSArIDFdO1xyXG4gICAgY29uc3QgcmVtb3ZlQW5pbWF0aW9uQ0xhc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5naW5nRGlzcGxheScpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChyZW1vdmVBbmltYXRpb25DTGFzcywgMzAwMCk7XHJcbn1cclxuXHJcbi8vIGluc3RydWN0aW9uRGlzcGxheSgnU3VibWFyaW5lJyk7IiwiaW1wb3J0IHsgYWxsQUlTaGlwc30gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCBleHBsb2RlSW1nIGZyb20gJy4uLy4uL2ltZy9leHBsb2RlLnBuZyc7XHJcbmltcG9ydCB3YXRlckltZyBmcm9tICcuLi8uLi9pbWcvd2F0ZXIucG5nJztcclxuaW1wb3J0IHsgZ2FtZVJlc3VsdCB9IGZyb20gXCIuL2dhbWVSZXN1bHRcIjtcclxuaW1wb3J0IHsgY2hhbmdlVHVybiwgY3VycmVudFR1cm4gfSBmcm9tIFwiLi90dXJuRGlzcGxheVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBteUF0dGFjaygpIHtcclxuICAgIGNvbnN0IGFsbEFJU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNBSUJvYXJkIC5zcXVhcmUnKTtcclxuICAgIGFsbEFJU3F1YXJlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09ICdJTUcnIHx8IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCBjdXJyZW50VHVybiA9PSAnQUknKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwbG9zaW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBleHBsb3Npb25JbWcuc3JjID0gZXhwbG9kZUltZztcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrQXVkaW9cIik7XHJcbiAgICAgICAgICAgICAgICBhdWRpby5jdXJyZW50VGltZT0gMDtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGV4cGxvc2lvbkltZyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBhbGxBSVNoaXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGFsbEFJU2hpcHNbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IHNoaXAuc2hpcFBsYWNlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2VzSGl0ID0gc2hpcC5wbGFjZXNIaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxldHRlck51bSA9IGVsZW1lbnQuY2xhc3NMaXN0WzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFBsYWNlbWVudC5pbmNsdWRlcyhsZXR0ZXJOdW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlc0hpdFtzaGlwUGxhY2VtZW50LmluZGV4T2YobGV0dGVyTnVtKV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3Vua1NoaXBzID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBhbGxBSVNoaXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGFsbEFJU2hpcHNbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IHNoaXAuc2hpcFBsYWNlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2VzSGl0ID0gc2hpcC5wbGFjZXNIaXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZXNIaXQuZXZlcnkoYm9vID0+IGJvbyA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7ZWx9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW5rU2hpcHMrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzdW5rU2hpcHMgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVSZXN1bHQoJ3BsYXllcicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUdXJuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2NlYW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIG9jZWFuSW1nLnNyYyA9IHdhdGVySW1nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsYXNoQXVkaW9cIik7XHJcbiAgICAgICAgICAgICAgICBhdWRpby5jdXJyZW50VGltZT0gMDtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9jZWFuSW1nKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VUdXJuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IGxpc3RPZlNxdWFyZUNsYXNzZXMgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBhbGxBSVNoaXBzIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VBSVNoaXBzKCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RPZlNxdWFyZUNsYXNzZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQ5IC0gMCArIDEpKSArIDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUF4aXMoKSB7XHJcbiAgICAgICAgbGV0IGF4aXMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcclxuICAgICAgICByZXR1cm4gYXhpc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSAtIDAgKyAxKSkgKyAwXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2hpcHMgPSBbJ0FJY2FycmllcicsICdBSWJhdHRsZXNoaXAnLCAnQUlkZXN0cm95ZXInLCAnQUlzdWJtYXJpbmUnLCAnQUkgcGF0cm9sIGJvYXQnXTtcclxuICAgIGxldCBjdXJyZW50U2hpcCA9ICdBSWNhcnJpZXInO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVNoaXAoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwID09ICdBSSBwYXRyb2wgYm9hdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcHNbc2hpcHMuaW5kZXhPZihjdXJyZW50U2hpcCkgKyAxXTtcclxuICAgICAgICAgICAgc2V0QUlTaGlwcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBSVNoaXBzKCkge1xyXG4gICAgICAgIGxldCByYW5kb21Db29yZCA9IGdldFJhbmRvbUNvb3JkKCk7XHJcbiAgICAgICAgbGV0IGF4aXNWYXIgPSBnZXRSYW5kb21BeGlzKCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsQUlTaGlwc1tjdXJyZW50U2hpcF07XHJcbiAgICAgICAgbGV0IGxldHRlciA9IHJhbmRvbUNvb3JkWzBdO1xyXG4gICAgICAgIGxldCBudW0gPSBwYXJzZUludChyYW5kb21Db29yZC5zbGljZSgxLCAzKSwgMTApO1xyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNBSUJvYXJkIC4ke2xldHRlcn0ke251bStpfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsaWQgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoYXhpc1ZhciA9PSAnaG9yaXpvbnRhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihheGlzVmFyID09ICd2ZXJ0aWNhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKStpXX0ke251bX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYodmFsaWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcn0ke251bStpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5heGlzID0gYXhpc1ZhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0FJQm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2JhdHRsZXNoaXAnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnZGVzdHJveWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAncGF0cm9sIGJvYXQnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLmF4aXMgPSBheGlzVmFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNoaXBPYmouc2hpcFBsYWNlbWVudCkucHVzaChgJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjQUlCb2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2JhdHRsZXNoaXAnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnZGVzdHJveWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAncGF0cm9sIGJvYXQnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2UpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsaWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlU2hpcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0QUlTaGlwcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QUlTaGlwcygpOyBcclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGFydEdhbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0R2FtZTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7YWxsU2hpcHN9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBheGlzVmFyIH0gZnJvbSBcIi4vYXhpc1wiO1xyXG5pbXBvcnQgeyBsaXN0T2ZTcXVhcmVDbGFzc2VzIH0gZnJvbSBcIi4vY3JlYXRlQm9hcmRcIjtcclxuaW1wb3J0IHsgY3VycmVudFNoaXAsIGluc3RydWN0aW9uRGlzcGxheSB9IGZyb20gXCIuL2luc3RydWN0aW9uc0Rpc3BsYXlcIjtcclxuXHJcbmNvbnN0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XHJcblxyXG5leHBvcnQgbGV0IHNldFNoaXBzID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgc2hpcHNIb3ZlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzcXVhcmVzX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXRTaGlwc0dhbWVib2FyZCAuc3F1YXJlJyk7XHJcblxyXG4gICAgICAgIHNxdWFyZXNfZGl2LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzZXRDb2xvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpc3RPZlNxdWFyZUNsYXNzZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjBmOGZmJztcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcE9iaiA9IGFsbFNoaXBzW2N1cnJlbnRTaGlwLnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0Q29sb3IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGV0dGVyID0gZS50YXJnZXQuY2xhc3NMaXN0WzFdWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFsxXS5zbGljZSgxLCAzKSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStpfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyfSR7bnVtK2p9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjgwODAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4YjhiOGInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2pdfSR7bnVtfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY4MDgwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOGI4YjhiJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCBzaGlwQ2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzcXVhcmVzX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXRTaGlwc0dhbWVib2FyZCAuc3F1YXJlJyk7XHJcblxyXG4gICAgICAgIHNxdWFyZXNfZGl2LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwbGFzaEF1ZGlvXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcE9iaiA9IGFsbFNoaXBzW2N1cnJlbnRTaGlwLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkID09IGZhbHNlIHx8IGN1cnJlbnRTaGlwID09ICdmaW5pc2gnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVyID0gZS50YXJnZXQuY2xhc3NMaXN0WzFdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMV0uc2xpY2UoMSwgMyksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihheGlzVmFyID09ICd2ZXJ0aWNhbCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcE9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWxpZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcn0ke251bStpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwT2JqLmF4aXMgPSBheGlzVmFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJ9JHtudW0raX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5uYW1lID09ICdjYXJyaWVyJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnYmF0dGxlc2hpcCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2Rlc3Ryb3llcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAnc3VibWFyaW5lJyA/IHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdwYXRyb2wgYm9hdCcgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwYXRyb2wtYm9hdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlKSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2hpcE9iai5heGlzID0gYXhpc1ZhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNoaXBPYmouc2hpcFBsYWNlbWVudCkucHVzaChgJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXBPYmoubmFtZSA9PSAnY2FycmllcicgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ2JhdHRsZXNoaXAnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjdXJyZW50U2hpcE9iai5uYW1lID09ICdkZXN0cm95ZXInID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGN1cnJlbnRTaGlwT2JqLm5hbWUgPT0gJ3N1Ym1hcmluZScgPyBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY3VycmVudFNoaXBPYmoubmFtZSA9PSAncGF0cm9sIGJvYXQnID8gc2VsZWN0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSkpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbkRpc3BsYXkoY3VycmVudFNoaXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpby5jdXJyZW50VGltZT0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNoaXBSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBsaXN0T2ZTcXVhcmVDbGFzc2VzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMGY4ZmYnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnY2FycmllcicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnYmF0dGxlc2hpcCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7ZWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnZGVzdHJveWVyJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtYXJpbmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2VsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdHJvbC1ib2F0Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gYWxsU2hpcHMpIHtcclxuICAgICAgICAgICAgICAgIGFsbFNoaXBzW3Byb3BdLnNoaXBQbGFjZW1lbnQgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaXBSZXNldExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNoaXBSZXNldCgpO1xyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbkRpc3BsYXkoJ3N0YXJ0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXBzSG92ZXIsXHJcbiAgICAgICAgc2hpcENsaWNrLFxyXG4gICAgICAgIHNoaXBSZXNldCxcclxuICAgICAgICBzaGlwUmVzZXRMaXN0ZW5lclxyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobmFtZSwgbGVuZ3RoKSB7XHJcbiAgICBsZXQgcGxhY2VzSGl0ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGxhY2VzSGl0LnB1c2goZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpdCA9IChpbmRleCwgaW5zdGFuY2VOYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYWNlc0hpdCA9IGluc3RhbmNlTmFtZS5wbGFjZXNIaXQ7XHJcbiAgICAgICAgcGxhY2VzSGl0W2luZGV4XSA9PSB1bmRlZmluZWQgPyBjb25zb2xlLmxvZygnSGl0IGlzIHVuZGVmaW5lZCcpIDogcGxhY2VzSGl0W2luZGV4XSA9IHRydWU7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGlzU3VuayA9IChhcnIpID0+IGFyci5ldmVyeShlbCA9PiBlbCA9PSB0cnVlKTtcclxuXHJcbiAgICBsZXQgc2hpcFBsYWNlbWVudCA9IFtdO1xyXG5cclxuICAgIGxldCBheGlzID0gJyc7XHJcblxyXG4gICAgcmV0dXJuIHtuYW1lLCBsZW5ndGgsIHBsYWNlc0hpdCwgaGl0LCBpc1N1bmssIHNoaXBQbGFjZW1lbnQsIGF4aXN9O1xyXG59IiwiLy8gaW1wb3J0IHsgQXR0YWNrIH0gZnJvbSBcIi4vYXR0YWNrXCI7XHJcbmltcG9ydCB7IHBsYWNlSW1nIH0gZnJvbSBcIi4vZ2VuZXJhdGVPd25TaGlwc1wiO1xyXG5pbXBvcnQgeyBteUF0dGFjayB9IGZyb20gXCIuL215QXR0YWNrXCI7XHJcbmltcG9ydCB7IHBsYWNlQUlTaGlwcyB9IGZyb20gXCIuL3BsYWNlQUlzaGlwc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcclxuICAgIGNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaG9tZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGdhbWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBwbGFjZUltZygnY2FycmllcicpO1xyXG4gICAgICAgIHBsYWNlSW1nKCdiYXR0bGVzaGlwJyk7XHJcbiAgICAgICAgcGxhY2VJbWcoJ2Rlc3Ryb3llcicpO1xyXG4gICAgICAgIHBsYWNlSW1nKCdzdWJtYXJpbmUnKTtcclxuICAgICAgICBwbGFjZUltZygncGF0cm9sIGJvYXQnKTtcclxuICAgICAgICBteUF0dGFjaygpO1xyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGF1dG9BdHRhY2sgfSBmcm9tIFwiLi9hdXRvQXR0YWNrXCI7XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRUdXJuID0gJ3BsYXllcic7IC8vQUlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUdXJuKCkge1xyXG4gICAgY29uc3QgdHVyblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHVyblRleHQnKTtcclxuICAgIGlmIChjdXJyZW50VHVybiA9PSAncGxheWVyJykge1xyXG4gICAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gXCJBd2FpdGluZyBPcHBvbmVudCdzIEF0dGFjay4uXCI7XHJcbiAgICAgICAgY3VycmVudFR1cm4gPSAnQUknO1xyXG4gICAgICAgIHR1cm5UZXh0LmNsYXNzTGlzdC5hZGQoJ2NoYW5naW5nRGlzcGxheScpO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUFuaW1hdGlvbkNMYXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHR1cm5UZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5naW5nRGlzcGxheScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUFuaW1hdGlvbkNMYXNzLCAzMDAwKTtcclxuICAgICAgICBhdXRvQXR0YWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gXCJJdCdzIHlvdXIgdHVybiB0byBhdHRhY2shXCI7XHJcbiAgICAgICAgY3VycmVudFR1cm4gPSAncGxheWVyJztcclxuICAgICAgICB0dXJuVGV4dC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2luZ0Rpc3BsYXknKTtcclxuICAgICAgICBjb25zdCByZW1vdmVBbmltYXRpb25DTGFzcyA9ICgpID0+IHtcclxuICAgICAgICB0dXJuVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2luZ0Rpc3BsYXknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dChyZW1vdmVBbmltYXRpb25DTGFzcywgMzAwMCk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9