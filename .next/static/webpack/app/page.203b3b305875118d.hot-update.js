"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/Form.tsx":
/*!*************************************!*\
  !*** ./src/app/components/Form.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"(app-client)/./node_modules/.pnpm/react-hook-form@7.43.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction Form() {\n    _s();\n    const { register , handleSubmit , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        defaultValues: {\n            name: \"\",\n            phone: \"\",\n            where: \"\"\n        }\n    });\n    const onSubmit = (data)=>console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"cta-form\",\n        name: \"sign-up\",\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Nome completo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        type: \"text\",\n                        placeholder: \"Maria da Silva\",\n                        name: \"full-name\",\n                        required: true,\n                        ...register(\"name\")\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Telefone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"phone\",\n                        type: \"phone\",\n                        placeholder: \"(41) 99999-9999\",\n                        name: \"email\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"select-where\",\n                        children: \"De onde voc\\xea me conhece?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"select-where\",\n                        name: \"select-where\",\n                        required: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Escolhe uma op\\xe7\\xe3o por favor:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"friends\",\n                                children: \"Cliente antiga\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"youtube\",\n                                children: \"Indica\\xe7\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"podcast\",\n                                children: \"Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"ad\",\n                                children: \"Instagram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"others\",\n                                children: \"Outros\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn btn--full margin-right-sm\",\n                children: \"Agendar avalia\\xe7\\xe3o!\"\n            }, void 0, false, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n        lineNumber: 24,\n        columnNumber: 7\n    }, this);\n}\n_s(Form, \"iAbW2kCivgDnd/X/TEQEI3kUDpM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0Zvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdEO0FBUWpELFNBQVNDLE9BQU87O0lBRW5CLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxhQUFZLEVBQUVDLE1BQUssRUFBRSxHQUFHSix3REFBT0EsQ0FBUztRQUN0REssZUFBZTtZQUNYQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTztRQUNYO0lBQ0o7SUFFQSxNQUFNQyxXQUFrQyxDQUFDQyxPQUFTQyxRQUFRQyxHQUFHLENBQUNGO0lBRTlELHFCQUNFLDhEQUFDRztRQUFLQyxXQUFVO1FBQVdSLE1BQUs7UUFBVUcsVUFBVU4sYUFBYU07OzBCQUMvRCw4REFBQ007O2tDQUNHLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBTzs7Ozs7O2tDQUN0Qiw4REFBQ0M7d0JBQ0dDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pmLE1BQUs7d0JBQ0xnQixRQUFRO3dCQUNOLEdBQUdwQixTQUFTLE9BQU87Ozs7Ozs7Ozs7OzswQkFJN0IsOERBQUNhOztrQ0FDRyw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUNHQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaZixNQUFLO3dCQUNMZ0IsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ1A7O2tDQUNHLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBZTs7Ozs7O2tDQUc5Qiw4REFBQ007d0JBQU9KLElBQUc7d0JBQWViLE1BQUs7d0JBQWVnQixRQUFROzswQ0FDbEQsOERBQUNFO2dDQUFPQyxPQUFNOzBDQUFHOzs7Ozs7MENBQ2pCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBVTs7Ozs7OzBDQUN4Qiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQVU7Ozs7OzswQ0FDeEIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFVOzs7Ozs7MENBQ3hCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBSzs7Ozs7OzBDQUNuQiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJL0IsOERBQUNDO2dCQUFPTixNQUFLO2dCQUFTTixXQUFVOzBCQUFnQzs7Ozs7Ozs7Ozs7O0FBS3hFLENBQUM7R0F4RGViOztRQUU4QkQsb0RBQU9BOzs7S0FGckNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb3JtLnRzeD83NjEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VGb3JtLCBTdWJtaXRIYW5kbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuXG50eXBlIElucHV0cyA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICB3aGVyZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2ggfSA9IHVzZUZvcm08SW5wdXRzPih7XG4gICAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgd2hlcmU6ICcnLFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPElucHV0cz4gPSAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY3RhLWZvcm1cIiBuYW1lPVwic2lnbi11cFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5vbWUgY29tcGxldG88L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXJpYSBkYSBTaWx2YVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZ1bGwtbmFtZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB7IC4uLnJlZ2lzdGVyKCduYW1lJykgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5UZWxlZm9uZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKDQxKSA5OTk5OS05OTk5XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3Qtd2hlcmVcIj5cbiAgICAgICAgICAgICAgICBEZSBvbmRlIHZvY8OqIG1lIGNvbmhlY2U/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC13aGVyZVwiIG5hbWU9XCJzZWxlY3Qtd2hlcmVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXNjb2xoZSB1bWEgb3DDp8OjbyBwb3IgZmF2b3I6PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZyaWVuZHNcIj5DbGllbnRlIGFudGlnYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5b3V0dWJlXCI+SW5kaWNhw6fDo288L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9kY2FzdFwiPkdvb2dsZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZFwiPkluc3RhZ3JhbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlcnNcIj5PdXRyb3M8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLS1mdWxsIG1hcmdpbi1yaWdodC1zbVwiPlxuICAgICAgICAgICAgQWdlbmRhciBhdmFsaWHDp8OjbyFcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRm9ybSIsIkZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJwaG9uZSIsIndoZXJlIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJzZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/Form.tsx\n"));

/***/ })

});