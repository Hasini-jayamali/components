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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_imageCarousel_imgComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/imageCarousel/imgComp */ \"./components/imageCarousel/imgComp.tsx\");\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/popup */ \"./components/popup.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var state = {\n        acceptance: false,\n        message: \"\",\n        text: \"\"\n    };\n    var inputTextRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), setState = ref[0];\n    //checkbox\n    var handleCheckbox = function(acceptance) {\n        setState({\n            acceptance: acceptance\n        });\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selected = ref1[0], setSelected = ref1[1];\n    var options = [\n        \"aaa\",\n        \"bbb\",\n        \"ccc\"\n    ];\n    // eslint-disable-next-line react/jsx-key\n    var sliderArr = [\n        // eslint-disable-next-line react/jsx-key\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_imageCarousel_imgComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            src: \"./pics/first.png\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\pages\\\\index.tsx\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, this),\n        // eslint-disable-next-line react/jsx-key\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_imageCarousel_imgComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            src: \"./pics/second.png\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\pages\\\\index.tsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, this),\n        // eslint-disable-next-line react/jsx-key\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_imageCarousel_imgComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            src: \"./pics/third.png\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\pages\\\\index.tsx\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, this), \n    ];\n    var Users = [\n        {\n            name: \"aaa\",\n            age: 20\n        },\n        {\n            name: \"bbb\",\n            age: 20\n        },\n        {\n            name: \"ccc\",\n            age: 20\n        }, \n    ];\n    var handleChange = function(key) {\n        return function(value) {\n            setState(_defineProperty({}, key, value));\n        };\n    };\n    var acceptance1 = state.acceptance, message = state.message, text = state.text;\n    // const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub Category']);\n    var pages = [\n        {\n            name: \"Projects\",\n            href: \"#\",\n            current: false\n        },\n        {\n            name: \"Project one\",\n            href: \"#\",\n            current: true\n        }, \n    ];\n    // const selected = (crumb: any) => {\n    //   console.log(crumb);\n    // }\n    var ListBoxitems = [\n        {\n            id: 1,\n            name: \"AAAaaaaa\"\n        },\n        {\n            id: 2,\n            name: \"BBBaaaa\"\n        },\n        {\n            id: 3,\n            name: \"CCCaaaa\"\n        },\n        {\n            id: 4,\n            name: \"AAAaaa\"\n        },\n        {\n            id: 5,\n            name: \"BBBaaa\"\n        },\n        {\n            id: 6,\n            name: \"CCCaaaaa\"\n        },\n        {\n            id: 7,\n            name: \"AAAaaaaa\"\n        },\n        {\n            id: 8,\n            name: \"BBBaaa\"\n        },\n        {\n            id: 9,\n            name: \"CCCaaaa\"\n        }, \n    ];\n    var items = [\n        {\n            able: \"qqq\",\n            id: 1,\n            cBoxId: \"qqq1\",\n            value: \"qqq2\",\n            name: \"qqq3\"\n        }, \n    ];\n    return(// <Checkbox label=\"hello\" selected={selected} styleClass={style}></Checkbox>\n    //  <Dropdown selected={selected} setSelected={setSelected} options = {options}/>\n    //  <Button text=\"END\"></Button>\n    //    <Button> Choose</Button>\n    // <Checkbox label=\"I Accept\" onchange={this.handleCheckbox} selected={}/>\n    // <ImageCarousel sliderArr={sliderArr}></ImageCarousel>\n    // <Search list={Users} userList={undefined}></Search>\n    // <RadioButton type=\"radio\" name=\"react-radio-btn\" value=\"radio1\"></RadioButton>\n    // <Button text=\"submit\"></Button>\n    // <Checkbox  id='name' lable=\"I Agree\" styleClass=\"block text-sm font-medium text-gray-700\"></Checkbox>\n    // <TextField\n    //   type=\"textarea\"\n    //   placeholder=\"h.j.\"\n    // ></TextField>\n    // <Breadcrumb items={pages} ></Breadcrumb>\n    // <DropdownButton items={['aaa','bbb']}></DropdownButton>\n    // <Notifications text1=\"Successfully saved!\" text2=\"Anyone with a link can now view this file.\"></Notifications>\n    // <ModalWindow></ModalWindow>\n    // <Pagination Previous=\"Previous\" Next=\"Next\"></Pagination>\n    // <Toggle ></Toggle>\n    // <ToolTip text=\"My Button\" content=\"Coloured\" placement='right' arrow={true}></ToolTip>\n    // <DatePicker></DatePicker>\n    // <ListBox lable=\"List \" items={ListBoxitems} />\n    // <CheckBox\n    //       items={items}\n    //       id=\"Name\"\n    //       lable=\"CheckBox\"\n    //       lableStyle=\"block text-sm font-medium text-gray-700\"\n    //     />\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: \"Popup\",\n        title: \"Pop up Window\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\FLI\\\\component\\\\my-app\\\\pages\\\\index.tsx\",\n        lineNumber: 142,\n        columnNumber: 1\n    }, this));\n};\n_s(App, \"4eLOaIE0Yl15ohhrrvSgicSmGzk=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQVNrQjtBQVdsQjs7QUFFekIsU0FBU0ksR0FBRyxHQUFHOztJQUM1QixJQUFNQyxLQUFLLEdBQUc7UUFDWkMsVUFBVSxFQUFFLEtBQUs7UUFDakJDLE9BQU8sRUFBRSxFQUFFO1FBQ1hDLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRCxJQUFNQyxZQUFZLGlCQUFHVCxzREFBZSxFQUFFO0lBQ3RDLElBQW1CQyxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUE3Qi9CLFFBNkJpQixHQUFJQSxHQUFVLEdBQWQ7SUFHakIsVUFBVTtJQUNSLElBQU1XLGNBQWMsR0FBRyxTQUFDTixVQUFlLEVBQUs7UUFDMUNLLFFBQVEsQ0FBQztZQUFFTCxVQUFVLEVBQVZBLFVBQVU7U0FBRSxDQUFDLENBQUM7S0FDMUI7SUFDRCxJQUFnQ0wsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBcEM1QyxRQW9DaUIsR0FBaUJBLElBQVUsR0FBM0IsRUFwQ2pCLFdBb0M4QixHQUFJQSxJQUFVLEdBQWQ7SUFFNUIsSUFBTWMsT0FBTyxHQUFHO1FBQUMsS0FBSztRQUFFLEtBQUs7UUFBRSxLQUFLO0tBQUM7SUFFckMseUNBQXlDO0lBQ3pDLElBQUlDLFNBQVMsR0FBRztRQUNkLHlDQUF5QztzQkFDekMsOERBQUNkLHlFQUFPO1lBQUNlLEdBQUcsRUFBQyxrQkFBa0I7Ozs7O2dCQUFHO1FBQ2xDLHlDQUF5QztzQkFDekMsOERBQUNmLHlFQUFPO1lBQUNlLEdBQUcsRUFBQyxtQkFBbUI7Ozs7O2dCQUFHO1FBQ25DLHlDQUF5QztzQkFDekMsOERBQUNmLHlFQUFPO1lBQUNlLEdBQUcsRUFBQyxrQkFBa0I7Ozs7O2dCQUFHO0tBQ25DO0lBRUQsSUFBTUMsS0FBSyxHQUFHO1FBQ1o7WUFDRUMsSUFBSSxFQUFFLEtBQUs7WUFDWEMsR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNEO1lBQ0VELElBQUksRUFBRSxLQUFLO1lBQ1hDLEdBQUcsRUFBRSxFQUFFO1NBQ1I7UUFDRDtZQUNFRCxJQUFJLEVBQUUsS0FBSztZQUNYQyxHQUFHLEVBQUUsRUFBRTtTQUNSO0tBQ0Y7SUFDRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0MsR0FBRztlQUFLLFNBQUNDLEtBQUssRUFBSztZQUN2Q1osUUFBUSxDQUFHLG9CQUFDVyxHQUFHLEVBQUdDLEtBQUssRUFBRyxDQUFDO1NBQzVCO0tBQUE7SUFFRCxJQUFRakIsV0FBVSxHQUFvQkQsS0FBSyxDQUFuQ0MsVUFBVSxFQUFFQyxPQUFPLEdBQVdGLEtBQUssQ0FBdkJFLE9BQU8sRUFBRUMsSUFBSSxHQUFLSCxLQUFLLENBQWRHLElBQUk7SUFFakMsOEVBQThFO0lBQzlFLElBQU1nQixLQUFLLEdBQUc7UUFDWjtZQUFFTCxJQUFJLEVBQUUsVUFBVTtZQUFFTSxJQUFJLEVBQUUsR0FBRztZQUFFQyxPQUFPLEVBQUUsS0FBSztTQUFFO1FBQy9DO1lBQUVQLElBQUksRUFBRSxhQUFhO1lBQUVNLElBQUksRUFBRSxHQUFHO1lBQUVDLE9BQU8sRUFBRSxJQUFJO1NBQUU7S0FDbEQ7SUFFRCxxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLElBQUk7SUFFSixJQUFNQyxZQUFZLEdBQUc7UUFDbkI7WUFBRUMsRUFBRSxFQUFFLENBQUM7WUFBRVQsSUFBSSxFQUFFLFVBQVU7U0FBRTtRQUMzQjtZQUFFUyxFQUFFLEVBQUUsQ0FBQztZQUFFVCxJQUFJLEVBQUUsU0FBUztTQUFFO1FBQzFCO1lBQUVTLEVBQUUsRUFBRSxDQUFDO1lBQUVULElBQUksRUFBRSxTQUFTO1NBQUU7UUFDMUI7WUFBRVMsRUFBRSxFQUFFLENBQUM7WUFBRVQsSUFBSSxFQUFFLFFBQVE7U0FBRTtRQUN6QjtZQUFFUyxFQUFFLEVBQUUsQ0FBQztZQUFFVCxJQUFJLEVBQUUsUUFBUTtTQUFFO1FBQ3pCO1lBQUVTLEVBQUUsRUFBRSxDQUFDO1lBQUVULElBQUksRUFBRSxVQUFVO1NBQUU7UUFDM0I7WUFBRVMsRUFBRSxFQUFFLENBQUM7WUFBRVQsSUFBSSxFQUFFLFVBQVU7U0FBRTtRQUMzQjtZQUFFUyxFQUFFLEVBQUUsQ0FBQztZQUFFVCxJQUFJLEVBQUUsUUFBUTtTQUFFO1FBQ3pCO1lBQUVTLEVBQUUsRUFBRSxDQUFDO1lBQUVULElBQUksRUFBRSxTQUFTO1NBQUU7S0FFM0I7SUFFRCxJQUFNVSxLQUFLLEdBQUc7UUFDWjtZQUNFQyxJQUFJLEVBQUUsS0FBSztZQUNYRixFQUFFLEVBQUUsQ0FBQztZQUNMRyxNQUFNLEVBQUUsTUFBTTtZQUNkUixLQUFLLEVBQUUsTUFBTTtZQUNiSixJQUFJLEVBQUUsTUFBTTtTQUNiO0tBR0Y7SUFDRCxPQUVFLDZFQUE2RTtJQUMzRSxpRkFBaUY7SUFDbkYsZ0NBQWdDO0lBRWhDLDhCQUE4QjtJQUM5QiwwRUFBMEU7SUFDMUUsd0RBQXdEO0lBRXhELHNEQUFzRDtJQUN0RCxpRkFBaUY7SUFDakYsa0NBQWtDO0lBQ2xDLHdHQUF3RztJQUV4RyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLDBEQUEwRDtJQUMxRCxpSEFBaUg7SUFDakgsOEJBQThCO0lBRTlCLDREQUE0RDtJQUM1RCxxQkFBcUI7SUFFckIseUZBQXlGO0lBRXpGLDRCQUE0QjtJQUM1QixpREFBaUQ7SUFDakQsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDZEQUE2RDtJQUM3RCxTQUFTO2tCQUNiLDhEQUFDaEIseURBQUs7UUFBQ2dCLElBQUksRUFBRSxPQUFPO1FBQUVhLEtBQUssRUFBQyxlQUFlOzs7OztZQUFTLEVBRWhEO0NBQ0g7R0ExSHVCNUIsR0FBRztBQUFIQSxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYnJlYWRDcnVtYlwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBDaGVja2JveCwgeyBDaGVja0JveCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NoZWNrYm94XCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlUGlja2VyXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZHJvcGRvd25cIjtcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kcm9wZG93bkJ1dHRvblwiO1xuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VDYXJvdXNlbC9pbWFnZUNhcm91c2VsXCI7XG5pbXBvcnQgSW1nQ29tcCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZUNhcm91c2VsL2ltZ0NvbXBcIjtcbmltcG9ydCB7IExpc3RCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0Qm94XCI7XG5pbXBvcnQgTW9kYWxXaW5kb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCIuLi9jb21wb25lbnRzL25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFBhZ2luYXRpb25Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3JhZGlvQnV0dG9uXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiLi4vY29tcG9uZW50cy90ZXh0RmllbGRcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9nZ2xlXCI7XG5pbXBvcnQgVG9vbFRpcCBmcm9tIFwiLi4vY29tcG9uZW50cy90b29sdGlwXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBhY2NlcHRhbmNlOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBcIlwiLFxuICAgIHRleHQ6IFwiXCIsXG4gIH07XG4gIGNvbnN0IGlucHV0VGV4dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBjb25zdCBbc2V0U3RhdGVdID0gdXNlU3RhdGUoKVxuXG5cbi8vY2hlY2tib3hcbiAgY29uc3QgaGFuZGxlQ2hlY2tib3ggPSAoYWNjZXB0YW5jZTogYW55KSA9PiB7XG4gICAgc2V0U3RhdGUoeyBhY2NlcHRhbmNlIH0pO1xuICB9O1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IFtcImFhYVwiLCBcImJiYlwiLCBcImNjY1wiXTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LWtleVxuICBsZXQgc2xpZGVyQXJyID0gW1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gta2V5XG4gICAgPEltZ0NvbXAgc3JjPVwiLi9waWNzL2ZpcnN0LnBuZ1wiIC8+LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gta2V5XG4gICAgPEltZ0NvbXAgc3JjPVwiLi9waWNzL3NlY29uZC5wbmdcIiAvPixcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LWtleVxuICAgIDxJbWdDb21wIHNyYz1cIi4vcGljcy90aGlyZC5wbmdcIiAvPixcbiAgXTtcblxuICBjb25zdCBVc2VycyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImFhYVwiLFxuICAgICAgYWdlOiAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiYmJiXCIsXG4gICAgICBhZ2U6IDIwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjY2NcIixcbiAgICAgIGFnZTogMjAsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGtleSkgPT4gKHZhbHVlKSA9PiB7XG4gICAgc2V0U3RhdGUoeyBba2V5XTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgeyBhY2NlcHRhbmNlLCBtZXNzYWdlLCB0ZXh0IH0gPSBzdGF0ZTtcblxuICAvLyBjb25zdCBbY3J1bWJzLCBzZXRDcnVtYnNdID0gdXNlU3RhdGUoWydIb21lJywgJ0NhdGVnb3J5JywgJ1N1YiBDYXRlZ29yeSddKTtcbiAgY29uc3QgcGFnZXMgPSBbXG4gICAgeyBuYW1lOiAnUHJvamVjdHMnLCBocmVmOiAnIycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiAnUHJvamVjdCBvbmUnLCBocmVmOiAnIycsIGN1cnJlbnQ6IHRydWUgfSxcbiAgXVxuXG4gIC8vIGNvbnN0IHNlbGVjdGVkID0gKGNydW1iOiBhbnkpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhjcnVtYik7XG4gIC8vIH1cblxuICBjb25zdCBMaXN0Qm94aXRlbXMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogXCJBQUFhYWFhYVwiIH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCJCQkJhYWFhXCIgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiBcIkNDQ2FhYWFcIiB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiQUFBYWFhXCIgfSxcbiAgICB7IGlkOiA1LCBuYW1lOiBcIkJCQmFhYVwiIH0sXG4gICAgeyBpZDogNiwgbmFtZTogXCJDQ0NhYWFhYVwiIH0sXG4gICAgeyBpZDogNywgbmFtZTogXCJBQUFhYWFhYVwiIH0sXG4gICAgeyBpZDogOCwgbmFtZTogXCJCQkJhYWFcIiB9LFxuICAgIHsgaWQ6IDksIG5hbWU6IFwiQ0NDYWFhYVwiIH0sXG4gICAgXG4gIF07XG5cbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgYWJsZTogXCJxcXFcIixcbiAgICAgIGlkOiAxLFxuICAgICAgY0JveElkOiBcInFxcTFcIixcbiAgICAgIHZhbHVlOiBcInFxcTJcIixcbiAgICAgIG5hbWU6IFwicXFxM1wiLFxuICAgIH0sXG4gICBcbiAgIFxuICBdO1xuICByZXR1cm4gKFxuXG4gICAgLy8gPENoZWNrYm94IGxhYmVsPVwiaGVsbG9cIiBzZWxlY3RlZD17c2VsZWN0ZWR9IHN0eWxlQ2xhc3M9e3N0eWxlfT48L0NoZWNrYm94PlxuICAgICAgLy8gIDxEcm9wZG93biBzZWxlY3RlZD17c2VsZWN0ZWR9IHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH0gb3B0aW9ucyA9IHtvcHRpb25zfS8+XG4gICAgLy8gIDxCdXR0b24gdGV4dD1cIkVORFwiPjwvQnV0dG9uPlxuXG4gICAgLy8gICAgPEJ1dHRvbj4gQ2hvb3NlPC9CdXR0b24+XG4gICAgLy8gPENoZWNrYm94IGxhYmVsPVwiSSBBY2NlcHRcIiBvbmNoYW5nZT17dGhpcy5oYW5kbGVDaGVja2JveH0gc2VsZWN0ZWQ9e30vPlxuICAgIC8vIDxJbWFnZUNhcm91c2VsIHNsaWRlckFycj17c2xpZGVyQXJyfT48L0ltYWdlQ2Fyb3VzZWw+XG5cbiAgICAvLyA8U2VhcmNoIGxpc3Q9e1VzZXJzfSB1c2VyTGlzdD17dW5kZWZpbmVkfT48L1NlYXJjaD5cbiAgICAvLyA8UmFkaW9CdXR0b24gdHlwZT1cInJhZGlvXCIgbmFtZT1cInJlYWN0LXJhZGlvLWJ0blwiIHZhbHVlPVwicmFkaW8xXCI+PC9SYWRpb0J1dHRvbj5cbiAgICAvLyA8QnV0dG9uIHRleHQ9XCJzdWJtaXRcIj48L0J1dHRvbj5cbiAgICAvLyA8Q2hlY2tib3ggIGlkPSduYW1lJyBsYWJsZT1cIkkgQWdyZWVcIiBzdHlsZUNsYXNzPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+PC9DaGVja2JveD5cblxuICAgIC8vIDxUZXh0RmllbGRcbiAgICAvLyAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgLy8gICBwbGFjZWhvbGRlcj1cImguai5cIlxuICAgIC8vID48L1RleHRGaWVsZD5cbiAgICAvLyA8QnJlYWRjcnVtYiBpdGVtcz17cGFnZXN9ID48L0JyZWFkY3J1bWI+XG4gICAgLy8gPERyb3Bkb3duQnV0dG9uIGl0ZW1zPXtbJ2FhYScsJ2JiYiddfT48L0Ryb3Bkb3duQnV0dG9uPlxuICAgIC8vIDxOb3RpZmljYXRpb25zIHRleHQxPVwiU3VjY2Vzc2Z1bGx5IHNhdmVkIVwiIHRleHQyPVwiQW55b25lIHdpdGggYSBsaW5rIGNhbiBub3cgdmlldyB0aGlzIGZpbGUuXCI+PC9Ob3RpZmljYXRpb25zPlxuICAgIC8vIDxNb2RhbFdpbmRvdz48L01vZGFsV2luZG93PlxuXG4gICAgLy8gPFBhZ2luYXRpb24gUHJldmlvdXM9XCJQcmV2aW91c1wiIE5leHQ9XCJOZXh0XCI+PC9QYWdpbmF0aW9uPlxuICAgIC8vIDxUb2dnbGUgPjwvVG9nZ2xlPlxuXG4gICAgLy8gPFRvb2xUaXAgdGV4dD1cIk15IEJ1dHRvblwiIGNvbnRlbnQ9XCJDb2xvdXJlZFwiIHBsYWNlbWVudD0ncmlnaHQnIGFycm93PXt0cnVlfT48L1Rvb2xUaXA+XG5cbiAgICAvLyA8RGF0ZVBpY2tlcj48L0RhdGVQaWNrZXI+XG4gICAgLy8gPExpc3RCb3ggbGFibGU9XCJMaXN0IFwiIGl0ZW1zPXtMaXN0Qm94aXRlbXN9IC8+XG4gICAgLy8gPENoZWNrQm94XG4gICAgLy8gICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgIC8vICAgICAgIGlkPVwiTmFtZVwiXG4gICAgLy8gICAgICAgbGFibGU9XCJDaGVja0JveFwiXG4gICAgLy8gICAgICAgbGFibGVTdHlsZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgLy8gICAgIC8+XG48UG9wdXAgbmFtZT17XCJQb3B1cFwifSB0aXRsZT1cIlBvcCB1cCBXaW5kb3dcIj48L1BvcHVwPiBcblxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWdDb21wIiwiUG9wdXAiLCJBcHAiLCJzdGF0ZSIsImFjY2VwdGFuY2UiLCJtZXNzYWdlIiwidGV4dCIsImlucHV0VGV4dFJlZiIsImNyZWF0ZVJlZiIsInNldFN0YXRlIiwiaGFuZGxlQ2hlY2tib3giLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib3B0aW9ucyIsInNsaWRlckFyciIsInNyYyIsIlVzZXJzIiwibmFtZSIsImFnZSIsImhhbmRsZUNoYW5nZSIsImtleSIsInZhbHVlIiwicGFnZXMiLCJocmVmIiwiY3VycmVudCIsIkxpc3RCb3hpdGVtcyIsImlkIiwiaXRlbXMiLCJhYmxlIiwiY0JveElkIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});