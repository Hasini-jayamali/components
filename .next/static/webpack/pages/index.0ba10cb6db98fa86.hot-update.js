"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/checkbox.tsx":
/*!*********************************!*\
  !*** ./components/checkbox.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar CheckBox = function(param) {\n    var lable = param.lable, value = param.value, name = param.name, cBoxId = param.cBoxId, placeholder = param.placeholder, inputStyle = param.inputStyle, id = param.id, styleClass = param.styleClass;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"\".concat(styleClass, \" block font-medium text-gray-700\"),\n                children: lable\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\components\\\\checkbox.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: cBoxId,\n                        name: name,\n                        value: value\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\components\\\\checkbox.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \" \",\n                            lable\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\components\\\\checkbox.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, id, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\components\\\\checkbox.tsx\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\components\\\\checkbox.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_c = CheckBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckBox);\nvar _c;\n$RefreshReg$(_c, \"CheckBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoZWNrYm94LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQWN6QixJQUFNQyxRQUFRLEdBQUcsZ0JBVUw7UUFUWEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxJQUFJLFNBQUpBLElBQUksRUFDSkMsTUFBTSxTQUFOQSxNQUFNLEVBRU5DLFdBQVcsU0FBWEEsV0FBVyxFQUNYQyxVQUFVLFNBQVZBLFVBQVUsRUFDVkMsRUFBRSxTQUFGQSxFQUFFLEVBQ0ZDLFVBQVUsU0FBVkEsVUFBVTtJQUdWLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsT0FBSztnQkFDSkMsU0FBUyxFQUFFLEVBQUMsQ0FBYSxNQUFnQyxDQUEzQ0gsVUFBVSxFQUFDLGtDQUFnQyxDQUFDOzBCQUV6RFAsS0FBSzs7Ozs7cUJBQ0E7MEJBRUosOERBQUNRLEtBQUc7O2tDQUNGLDhEQUFDRyxPQUFLO3dCQUNKQyxJQUFJLEVBQUMsVUFBVTt3QkFDZk4sRUFBRSxFQUFFSCxNQUFNO3dCQUNWRCxJQUFJLEVBQUVBLElBQUk7d0JBQ1ZELEtBQUssRUFBRUEsS0FBSzs7Ozs7NkJBQ1o7a0NBQ0YsOERBQUNRLE9BQUs7OzRCQUFDLEdBQUM7NEJBQUNULEtBQUs7Ozs7Ozs2QkFBUzs7ZUFQZk0sRUFBRTs7OztxQkFTTjs7Ozs7O2FBRU4sQ0FDTjtDQUNIO0FBakNNUCxLQUFBQSxRQUFRO0FBa0NmLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hlY2tib3gudHN4P2I1NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpdGVtOiBbXTtcclxuICBsYWJsZT86IHN0cmluZztcclxuICBzdHlsZUNsYXNzPzogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIGlucHV0U3R5bGU/OiBzdHJpbmc7XHJcbiAgbmFtZT86c3RyaW5nXHJcbiAgaWQ6IHN0cmluZztcclxuICB2YWx1ZT86c3RyaW5nO1xyXG4gIGNCb3hJZD86c3RyaW5nXHJcbn07XHJcblxyXG4gY29uc3QgQ2hlY2tCb3ggPSAoe1xyXG4gIGxhYmxlLFxyXG4gIHZhbHVlLFxyXG4gIG5hbWUsXHJcbiAgY0JveElkLFxyXG4gIFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIGlucHV0U3R5bGUsXHJcbiAgaWQsXHJcbiAgc3R5bGVDbGFzcyxcclxufTogUHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbFxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVDbGFzc30gYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMGB9XHJcbiAgICAgID5cclxuICAgICAgICB7bGFibGV9XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBpZD17Y0JveElkfVxyXG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+IHtsYWJsZX08L2xhYmVsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hlY2tCb3giLCJsYWJsZSIsInZhbHVlIiwibmFtZSIsImNCb3hJZCIsInBsYWNlaG9sZGVyIiwiaW5wdXRTdHlsZSIsImlkIiwic3R5bGVDbGFzcyIsImRpdiIsImxhYmVsIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/checkbox.tsx\n");

/***/ })

});