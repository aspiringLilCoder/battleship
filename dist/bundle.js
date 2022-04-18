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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Fredoka', sans-serif;\n  height: 100vh;\n  background: #f0f8ff;\n  color: #4e4e4e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nbutton {\n  border-radius: 25px;\n  font-family: 'Fredoka', sans-serif;\n  border: none;\n  cursor: pointer;\n}\n\n#title {\n  text-align: center;\n  margin: 20px;\n  font-size: 70px;\n  font-weight: 500;\n}\n\n#home {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 120px;\n}\n\n#home #setShipsGameboard {\n  width: 500px;\n  height: 500px;\n  margin-right: 100px;\n  border: 1px solid #4e4e4e;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[10];\n      grid-template-columns: repeat(10, 1fr);\n  -ms-grid-rows: (1fr)[10];\n      grid-template-rows: repeat(10, 1fr);\n}\n\n#home #setShipsGameboard .square {\n  border: 1px solid #4e4e4e;\n}\n\n#home #sideOptions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#home #sideOptions #instructionsDisplay {\n  color: #f0f8ff;\n  width: 250px;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #4e4e4e;\n  border-radius: 25px;\n  font-size: 20px;\n  padding: 5px;\n  font-weight: 500;\n}\n\n#home #sideOptions .start {\n  background-color: #ffdddd !important;\n  color: #000000 !important;\n}\n\n#home #sideOptions .start:hover {\n  background-color: #ffc2c2 !important;\n  cursor: pointer;\n}\n\n#home #sideOptions .start:active {\n  background-color: #ffaaaa !important;\n}\n\n#home #sideOptions .changingDisplay {\n  display: inline-block;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(25, end);\n          animation: typing 2s steps(25, end);\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@-webkit-keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n#home #sideOptions button {\n  width: 200px;\n  height: 50px;\n  margin-top: 25px;\n  background-color: #d1d1d1;\n  font-size: 20px;\n}\n\n#home #sideOptions button:hover {\n  background-color: #bfbfbf;\n}\n\n#home #sideOptions button:active {\n  background-color: #5d5d5d;\n}\n\n#game {\n  display: none;\n}\n\nfooter {\n  margin-top: auto;\n  height: 20px;\n  background-color: #4e4e4e;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a {\n  color: #f0f8ff;\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nfooter a:hover {\n  color: #cfcfcf;\n}\n\nfooter a:active {\n  color: #5d5d5d;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACI,UAAU;EACV,SAAS;ACCb;;ADWA;EACI,kCAAkC;EAClC,aAAY;EACZ,mBAXyB;EAYzB,cAbwB;EAcxB,oBAAY;EACZ,oBAAe;EAClB,aAAA;ECRC,4BAA4B;EDU9B,6BAAO;MACH,0BAAmB;UACnB,sBAAa;ACRjB;;AAEA;EACE,mBAAmB;EDUrB,kCAAO;EACH,YAAY;EACZ,eAAY;ACRhB;;AAEA;EACE,kBAAkB;EDUpB,YAAM;EACF,eAAa;EACb,gBAAe;ACRnB;;AAEA;EDIA,oBAKI;EACI,oBAAY;EACZ,aAAa;EACb,wBAAmB;MACnB,qBAzCoB;UA0Cb,uBAAM;EACb,iBAAA;ACPR;;AAEA;EDNA,YAKI;EASQ,aAAY;EACf,mBAAA;ECLP,yBAAyB;EDV3B,iBAkBiB;EACT,aAAa;EACb,2BAAmB;MACnB,sCAAsB;EA4DzB,wBAAA;MCjEC,mCAAmC;ADhBzC;;ACmBA;EDOY,yBAAa;ACLzB;;AAEA;EDKY,oBA5DS;EA6DT,oBAAmB;EACnB,aAAW;EACX,yBAAY;MACZ,sBAAgB;UACnB,mBAAA;ECHP,4BAA4B;ED9B9B,6BAmCe;MACH,0BAAkB;UACX,sBAAkB;ACHrC;;ADlCA;EAyCY,cAAA;EACA,YAAQ;EACX,aAAA;ECHP,oBAAoB;EDxCtB,oBA6CQ;EACI,aAAA;EACH,yBAAA;MCHH,sBAAsB;UD1BxB,mBA+BI;EACI,wBAAqB;MACrB,qBAAgB;UAChB,uBAAqB;EACrB,yBAAmB;EACnB,mBAAY;EACf,eAAA;ECHP,YAAY;EDKN,gBAAU;ACHlB;;AAEA;EDKY,oCAAE;ECHZ,yBDKU;ACJZ;;AAEA;ED7DA,oCAkEe;EACH,eAAY;ACHxB;;AAEA;EDKY,oCAAe;ACH3B;;ADpEA;EA2EY,qBAAkB;EACrB,gBAAA;ECHP,2CAA2C;UDvDzC,mCA4DkB;EACV,mBAAkB;EACrB,8BAAA;UCHC,sBAAsB;ADOhC;;ACJA;EACE;IDQF,SAAO;EACH;EACA;IACA,WAAA;EACA;ACNJ;;AAEA;EDoBC;IClBG,SAAS;EDFb;EAQQ;IACA,WAAA;EA9HJ;AC4HJ;;AAEA;EACE,YAAY;EDVd,YAaW;EACH,gBAAc;EACjB,yBAAA;ECDH,eAAe;ADdjB;;ACiBA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;EAC3B,wBAAwB;MACpB,qBAAqB;UACjB,uBAAuB;AACjC;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;EAC3B,wBAAwB;MACpB,qBAAqB;UACjB,uBAAuB;AACjC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;AACA,oCAAoC","sourceRoot":""}]);
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
/* harmony export */   "allShips": () => (/* binding */ allShips)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_github_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/github-logo.png */ "./img/github-logo.png");
/* harmony import */ var _modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shipFactory */ "./src/modules/shipFactory.js");
/* harmony import */ var _modules_createBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var _modules_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/axis */ "./src/modules/axis.js");
/* harmony import */ var _modules_setShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setShips */ "./src/modules/setShips.js");
/* harmony import */ var _modules_instructionsDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/instructionsDisplay */ "./src/modules/instructionsDisplay.js");








(document.getElementById('github-logo')).src = _img_github_logo_png__WEBPACK_IMPORTED_MODULE_1__;

let carrier = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('carrier', 5);
let battleship = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('battleship', 4);
let destroyer = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('destroyer', 3);
let submarine = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('submarine', 3);
let patrol_boat = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])('patrol boat', 2);

let allShips = {
    carrier: carrier,
    battleship: battleship,
    destroyer: destroyer,
    submarine: submarine,
    'patrol boat': patrol_boat
}

const Start = (function() {
    
    ;(0,_modules_createBoard__WEBPACK_IMPORTED_MODULE_3__.createBoard)(document.querySelector('#setShipsGameboard'));
    (0,_modules_axis__WEBPACK_IMPORTED_MODULE_4__.axisChange)();
    (0,_modules_instructionsDisplay__WEBPACK_IMPORTED_MODULE_6__.instructionDisplay)();
    _modules_setShips__WEBPACK_IMPORTED_MODULE_5__.setShips.shipsHover(); 
    _modules_setShips__WEBPACK_IMPORTED_MODULE_5__.setShips.shipClick(); 
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
const instructionsText_p = document.getElementById('instructionsText');
const instructionsDisplay_div = document.getElementById('instructionsDisplay');

let currentShip = 'start';

function instructionDisplay() {
    if (currentShip == 'Patrol Boat') {
        instructionsText_p.textContent = 'PRESS TO START';
        instructionsDisplay_div.classList.add('start');
        return;
    }
    const shipOrder = ['start', 'Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    instructionsText_p.textContent = `Place your ${shipOrder[shipOrder.indexOf(currentShip) + 1]}...`;
    instructionsText_p.classList.add('changingDisplay');
    currentShip = shipOrder[shipOrder.indexOf(currentShip) + 1];
    const removeAnimationCLass = () => {
        instructionsText_p.classList.remove('changingDisplay');
    }
    setTimeout(removeAnimationCLass, 3000);
}

// instructionDisplay('Submarine');

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

        let currentShipObj = ___WEBPACK_IMPORTED_MODULE_0__.allShips[_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.currentShip.toLowerCase()];

        squares_div.forEach(el => {
            let resetColor = () => {
                _createBoard__WEBPACK_IMPORTED_MODULE_2__.listOfSquareClasses.forEach(el => {
                    document.querySelector(`#setShipsGameboard .${el}`).style.backgroundColor = '#f0f8ff';
                })
            };

            el.addEventListener('mouseover', (e) => {
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
        let currentShipObj = ___WEBPACK_IMPORTED_MODULE_0__.allShips[_instructionsDisplay__WEBPACK_IMPORTED_MODULE_3__.currentShip.toLowerCase()];

        squares_div.forEach(el => {
            el.addEventListener('click', (e) => {
                if (valid == false) {

                } else {
                    let letter = e.target.classList[1][0];
                    let num = parseInt(e.target.classList[1].slice(1, 3), 10);

                    for (let i = 0; i < currentShipObj.length; i++) {
                        if(_axis__WEBPACK_IMPORTED_MODULE_1__.axisVar == 'horizontal') {
                            (currentShipObj.shipPlacement).push(`${letter}${num+i}`);
                        } else {
                            (currentShipObj.shipPlacement).push(`${letters[letters.indexOf(letter)+i]}${num}`);
                        }
                    }
                }
            })
        })
    };

    return {
        shipsHover,
        shipClick
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

    return {name, length, placesHit, hit, isSunk, shipPlacement};
}

/***/ }),

/***/ "./img/github-logo.png":
/*!*****************************!*\
  !*** ./img/github-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9heGlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jcmVhdGVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW5zdHJ1Y3Rpb25zRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2V0U2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ZyZWRva2EnLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmMGY4ZmY7XFxuICBjb2xvcjogIzRlNGU0ZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZG9rYScsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jaG9tZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAtbXMtZ3JpZC1yb3dzOiAoMWZyKVsxMF07XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbiNob21lICNzZXRTaGlwc0dhbWVib2FyZCAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZTRlNGU7XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zICNpbnN0cnVjdGlvbnNEaXNwbGF5IHtcXG4gIGNvbG9yOiAjZjBmOGZmO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyAuc3RhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRkZCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5zdGFydDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMmMyICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyAuc3RhcnQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhYWEgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIC5jaGFuZ2luZ0Rpc3BsYXkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjUsIGVuZCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwaW5nIDJzIHN0ZXBzKDI1LCBlbmQpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0eXBpbmcge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwJTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQxZDE7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNob21lICNzaWRlT3B0aW9ucyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcXG59XFxuXFxuI2hvbWUgI3NpZGVPcHRpb25zIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNWQ1ZDtcXG59XFxuXFxuI2dhbWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiAjZjBmOGZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6ICNjZmNmY2Y7XFxufVxcblxcbmZvb3RlciBhOmFjdGl2ZSB7XFxuICBjb2xvcjogIzVkNWQ1ZDtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBVTtFQUNWLFNBQVM7QUNDYjs7QURXQTtFQUNJLGtDQUFrQztFQUNsQyxhQUFZO0VBQ1osbUJBWHlCO0VBWXpCLGNBYndCO0VBY3hCLG9CQUFZO0VBQ1osb0JBQWU7RUFDbEIsYUFBQTtFQ1JDLDRCQUE0QjtFRFU5Qiw2QkFBTztNQUNILDBCQUFtQjtVQUNuQixzQkFBYTtBQ1JqQjs7QUFFQTtFQUNFLG1CQUFtQjtFRFVyQixrQ0FBTztFQUNILFlBQVk7RUFDWixlQUFZO0FDUmhCOztBQUVBO0VBQ0Usa0JBQWtCO0VEVXBCLFlBQU07RUFDRixlQUFhO0VBQ2IsZ0JBQWU7QUNSbkI7O0FBRUE7RURJQSxvQkFLSTtFQUNJLG9CQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUFtQjtNQUNuQixxQkF6Q29CO1VBMENiLHVCQUFNO0VBQ2IsaUJBQUE7QUNQUjs7QUFFQTtFRE5BLFlBS0k7RUFTUSxhQUFZO0VBQ2YsbUJBQUE7RUNMUCx5QkFBeUI7RURWM0IsaUJBa0JpQjtFQUNULGFBQWE7RUFDYiwyQkFBbUI7TUFDbkIsc0NBQXNCO0VBNER6Qix3QkFBQTtNQ2pFQyxtQ0FBbUM7QURoQnpDOztBQ21CQTtFRE9ZLHlCQUFhO0FDTHpCOztBQUVBO0VES1ksb0JBNURTO0VBNkRULG9CQUFtQjtFQUNuQixhQUFXO0VBQ1gseUJBQVk7TUFDWixzQkFBZ0I7VUFDbkIsbUJBQUE7RUNIUCw0QkFBNEI7RUQ5QjlCLDZCQW1DZTtNQUNILDBCQUFrQjtVQUNYLHNCQUFrQjtBQ0hyQzs7QURsQ0E7RUF5Q1ksY0FBQTtFQUNBLFlBQVE7RUFDWCxhQUFBO0VDSFAsb0JBQW9CO0VEeEN0QixvQkE2Q1E7RUFDSSxhQUFBO0VBQ0gseUJBQUE7TUNISCxzQkFBc0I7VUQxQnhCLG1CQStCSTtFQUNJLHdCQUFxQjtNQUNyQixxQkFBZ0I7VUFDaEIsdUJBQXFCO0VBQ3JCLHlCQUFtQjtFQUNuQixtQkFBWTtFQUNmLGVBQUE7RUNIUCxZQUFZO0VES04sZ0JBQVU7QUNIbEI7O0FBRUE7RURLWSxvQ0FBRTtFQ0haLHlCREtVO0FDSlo7O0FBRUE7RUQ3REEsb0NBa0VlO0VBQ0gsZUFBWTtBQ0h4Qjs7QUFFQTtFREtZLG9DQUFlO0FDSDNCOztBRHBFQTtFQTJFWSxxQkFBa0I7RUFDckIsZ0JBQUE7RUNIUCwyQ0FBMkM7VUR2RHpDLG1DQTREa0I7RUFDVixtQkFBa0I7RUFDckIsOEJBQUE7VUNIQyxzQkFBc0I7QURPaEM7O0FDSkE7RUFDRTtJRFFGLFNBQU87RUFDSDtFQUNBO0lBQ0EsV0FBQTtFQUNBO0FDTko7O0FBRUE7RURvQkM7SUNsQkcsU0FBUztFREZiO0VBUVE7SUFDQSxXQUFBO0VBOUhKO0FDNEhKOztBQUVBO0VBQ0UsWUFBWTtFRFZkLFlBYVc7RUFDSCxnQkFBYztFQUNqQix5QkFBQTtFQ0RILGVBQWU7QURkakI7O0FDaUJBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsbUJBQW1CO0VBQzNCLHdCQUF3QjtNQUNwQixxQkFBcUI7VUFDakIsdUJBQXVCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtFQUMzQix3QkFBd0I7TUFDcEIscUJBQXFCO1VBQ2pCLHVCQUF1QjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tICcuLy4uL2ltZy9naXRodWItbG9nby5wbmcnO1xyXG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vbW9kdWxlcy9zaGlwRmFjdG9yeVwiO1xyXG5pbXBvcnQge2NyZWF0ZUJvYXJkLCBsaXN0T2ZTcXVhcmVDbGFzc2VzfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlQm9hcmQnO1xyXG5pbXBvcnQge2F4aXNDaGFuZ2UsIGF4aXNWYXJ9IGZyb20gJy4vbW9kdWxlcy9heGlzJztcclxuaW1wb3J0IHsgc2V0U2hpcHMgfSBmcm9tICcuL21vZHVsZXMvc2V0U2hpcHMnO1xyXG5pbXBvcnQge2luc3RydWN0aW9uRGlzcGxheSwgY3VycmVudFNoaXAgfWZyb20gJy4vbW9kdWxlcy9pbnN0cnVjdGlvbnNEaXNwbGF5JztcclxuXHJcbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWxvZ28nKSkuc3JjID0gZ2l0aHViTG9nbztcclxuXHJcbmxldCBjYXJyaWVyID0gc2hpcEZhY3RvcnkoJ2NhcnJpZXInLCA1KTtcclxubGV0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsIDQpO1xyXG5sZXQgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDMpO1xyXG5sZXQgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpO1xyXG5sZXQgcGF0cm9sX2JvYXQgPSBzaGlwRmFjdG9yeSgncGF0cm9sIGJvYXQnLCAyKTtcclxuXHJcbmxldCBhbGxTaGlwcyA9IHtcclxuICAgIGNhcnJpZXI6IGNhcnJpZXIsXHJcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwLFxyXG4gICAgZGVzdHJveWVyOiBkZXN0cm95ZXIsXHJcbiAgICBzdWJtYXJpbmU6IHN1Ym1hcmluZSxcclxuICAgICdwYXRyb2wgYm9hdCc6IHBhdHJvbF9ib2F0XHJcbn1cclxuXHJcbmNvbnN0IFN0YXJ0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICBjcmVhdGVCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0U2hpcHNHYW1lYm9hcmQnKSk7XHJcbiAgICBheGlzQ2hhbmdlKCk7XHJcbiAgICBpbnN0cnVjdGlvbkRpc3BsYXkoKTtcclxuICAgIHNldFNoaXBzLnNoaXBzSG92ZXIoKTsgXHJcbiAgICBzZXRTaGlwcy5zaGlwQ2xpY2soKTsgXHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IHthbGxTaGlwc307IiwiZXhwb3J0IGxldCBheGlzVmFyID0gJ2hvcml6b250YWwnO1xyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBheGlzQ2hhbmdlKCkge1xyXG4gICAgbGV0IGF4aXNfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMnKTtcclxuICAgIGF4aXNfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgICAgICAgaWYgKGF4aXNfYnV0dG9uLnRleHRDb250ZW50ID09ICdIb3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICBheGlzX2J1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XHJcbiAgICAgICAgICAgIGF4aXNWYXIgPSAndmVydGljYWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF4aXNfYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xyXG4gICAgICAgICAgICBheGlzVmFyID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGxldCBsaXN0T2ZTcXVhcmVDbGFzc2VzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoY29udGFpbmVyRWxlbWVudCkge1xyXG4gICAgbGV0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2xldHRlcnNbaV19JHtqKzF9YCk7XHJcbiAgICAgICAgICAgIGxpc3RPZlNxdWFyZUNsYXNzZXMucHVzaChgJHtsZXR0ZXJzW2ldfSR7aisxfWApO1xyXG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjcmVhdGVCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0U2hpcHNHYW1lYm9hcmQnKSk7IiwiY29uc3QgaW5zdHJ1Y3Rpb25zVGV4dF9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9uc1RleHQnKTtcclxuY29uc3QgaW5zdHJ1Y3Rpb25zRGlzcGxheV9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb25zRGlzcGxheScpO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50U2hpcCA9ICdzdGFydCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdHJ1Y3Rpb25EaXNwbGF5KCkge1xyXG4gICAgaWYgKGN1cnJlbnRTaGlwID09ICdQYXRyb2wgQm9hdCcpIHtcclxuICAgICAgICBpbnN0cnVjdGlvbnNUZXh0X3AudGV4dENvbnRlbnQgPSAnUFJFU1MgVE8gU1RBUlQnO1xyXG4gICAgICAgIGluc3RydWN0aW9uc0Rpc3BsYXlfZGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hpcE9yZGVyID0gWydzdGFydCcsICdDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wgQm9hdCddO1xyXG4gICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtzaGlwT3JkZXJbc2hpcE9yZGVyLmluZGV4T2YoY3VycmVudFNoaXApICsgMV19Li4uYDtcclxuICAgIGluc3RydWN0aW9uc1RleHRfcC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2luZ0Rpc3BsYXknKTtcclxuICAgIGN1cnJlbnRTaGlwID0gc2hpcE9yZGVyW3NoaXBPcmRlci5pbmRleE9mKGN1cnJlbnRTaGlwKSArIDFdO1xyXG4gICAgY29uc3QgcmVtb3ZlQW5pbWF0aW9uQ0xhc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zVGV4dF9wLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5naW5nRGlzcGxheScpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChyZW1vdmVBbmltYXRpb25DTGFzcywgMzAwMCk7XHJcbn1cclxuXHJcbi8vIGluc3RydWN0aW9uRGlzcGxheSgnU3VibWFyaW5lJyk7IiwiaW1wb3J0IHthbGxTaGlwc30gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IGF4aXNWYXIgfSBmcm9tIFwiLi9heGlzXCI7XHJcbmltcG9ydCB7IGxpc3RPZlNxdWFyZUNsYXNzZXMgfSBmcm9tIFwiLi9jcmVhdGVCb2FyZFwiO1xyXG5pbXBvcnQgeyBjdXJyZW50U2hpcCB9IGZyb20gXCIuL2luc3RydWN0aW9uc0Rpc3BsYXlcIjtcclxuXHJcbmNvbnN0IGxldHRlcnMgPSAnQUJDREVGR0hJSic7XHJcblxyXG5leHBvcnQgbGV0IHNldFNoaXBzID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgc2hpcHNIb3ZlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzcXVhcmVzX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXRTaGlwc0dhbWVib2FyZCAuc3F1YXJlJyk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50U2hpcE9iaiA9IGFsbFNoaXBzW2N1cnJlbnRTaGlwLnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICAgICAgICBzcXVhcmVzX2Rpdi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc2V0Q29sb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0T2ZTcXVhcmVDbGFzc2VzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtlbH1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YwZjhmZic7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q29sb3IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGV0dGVyID0gZS50YXJnZXQuY2xhc3NMaXN0WzFdWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFsxXS5zbGljZSgxLCAzKSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihheGlzVmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NldFNoaXBzR2FtZWJvYXJkIC4ke2xldHRlcn0ke251bStpfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyfSR7bnVtK2p9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjgwODAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2V0U2hpcHNHYW1lYm9hcmQgLiR7bGV0dGVyfSR7bnVtK2l9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4YjhiOGInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXBPYmoubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2pdfSR7bnVtfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY4MDgwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZXRTaGlwc0dhbWVib2FyZCAuJHtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpK2ldfSR7bnVtfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOGI4YjhiJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCBzaGlwQ2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzcXVhcmVzX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXRTaGlwc0dhbWVib2FyZCAuc3F1YXJlJyk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwT2JqID0gYWxsU2hpcHNbY3VycmVudFNoaXAudG9Mb3dlckNhc2UoKV07XHJcblxyXG4gICAgICAgIHNxdWFyZXNfZGl2LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFsxXS5zbGljZSgxLCAzKSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF4aXNWYXIgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNoaXBPYmouc2hpcFBsYWNlbWVudCkucHVzaChgJHtsZXR0ZXJ9JHtudW0raX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2hpcE9iai5zaGlwUGxhY2VtZW50KS5wdXNoKGAke2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikraV19JHtudW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaGlwc0hvdmVyLFxyXG4gICAgICAgIHNoaXBDbGlja1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobmFtZSwgbGVuZ3RoKSB7XHJcbiAgICBsZXQgcGxhY2VzSGl0ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGxhY2VzSGl0LnB1c2goZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpdCA9IChpbmRleCwgaW5zdGFuY2VOYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYWNlc0hpdCA9IGluc3RhbmNlTmFtZS5wbGFjZXNIaXQ7XHJcbiAgICAgICAgcGxhY2VzSGl0W2luZGV4XSA9PSB1bmRlZmluZWQgPyBjb25zb2xlLmxvZygnSGl0IGlzIHVuZGVmaW5lZCcpIDogcGxhY2VzSGl0W2luZGV4XSA9IHRydWU7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGlzU3VuayA9IChhcnIpID0+IGFyci5ldmVyeShlbCA9PiBlbCA9PSB0cnVlKTtcclxuXHJcbiAgICBsZXQgc2hpcFBsYWNlbWVudCA9IFtdO1xyXG5cclxuICAgIHJldHVybiB7bmFtZSwgbGVuZ3RoLCBwbGFjZXNIaXQsIGhpdCwgaXNTdW5rLCBzaGlwUGxhY2VtZW50fTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=