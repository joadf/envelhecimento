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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"(app-client)/./node_modules/.pnpm/react-hook-form@7.43.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction Form() {\n    _s();\n    const { register , handleSubmit , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        defaultValues: {\n            name: \"\",\n            phone: \"\",\n            where: \"\"\n        }\n    });\n    const onSubit = (data)=>console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"cta-form\",\n        name: \"sign-up\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"full-name\",\n                        children: \"Nome completo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"full-name\",\n                        type: \"text\",\n                        placeholder: \"Maria da Silva\",\n                        name: \"full-name\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Telefone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"phone\",\n                        type: \"phone\",\n                        placeholder: \"(41) 99999-9999\",\n                        name: \"email\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"select-where\",\n                        children: \"De onde voc\\xea me conhece?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"select-where\",\n                        name: \"select-where\",\n                        required: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Escolhe uma op\\xe7\\xe3o por favor:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"friends\",\n                                children: \"Cliente antiga\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"youtube\",\n                                children: \"Indica\\xe7\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"podcast\",\n                                children: \"Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"ad\",\n                                children: \"Instagram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"others\",\n                                children: \"Outros\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#cta\",\n                className: \"btn btn--full margin-right-sm\",\n                children: \"Agendar minha avalia\\xe7\\xe3o!\"\n            }, void 0, false, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n        lineNumber: 24,\n        columnNumber: 7\n    }, this);\n}\n_s(Form, \"iAbW2kCivgDnd/X/TEQEI3kUDpM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0Zvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdEO0FBUWpELFNBQVNDLE9BQU87O0lBRW5CLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxhQUFZLEVBQUVDLE1BQUssRUFBRSxHQUFHSix3REFBT0EsQ0FBUztRQUN0REssZUFBZTtZQUNYQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTztRQUNYO0lBQ0o7SUFFQSxNQUFNQyxVQUFpQyxDQUFDQyxPQUFTQyxRQUFRQyxHQUFHLENBQUNGO0lBRS9ELHFCQUNJLDhEQUFDRztRQUFLQyxXQUFVO1FBQVdSLE1BQUs7OzBCQUM5Qiw4REFBQ1M7O2tDQUNELDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBWTs7Ozs7O2tDQUMzQiw4REFBQ0M7d0JBQ0dDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pmLE1BQUs7d0JBQ0xnQixRQUFROzs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNQOztrQ0FDRCw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUNHQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaZixNQUFLO3dCQUNMZ0IsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDUDs7a0NBQ0QsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFlOzs7Ozs7a0NBRzlCLDhEQUFDTTt3QkFBT0osSUFBRzt3QkFBZWIsTUFBSzt3QkFBZWdCLFFBQVE7OzBDQUNsRCw4REFBQ0U7Z0NBQU9DLE9BQU07MENBQUc7Ozs7OzswQ0FDakIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFVOzs7Ozs7MENBQ3hCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBVTs7Ozs7OzBDQUN4Qiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQVU7Ozs7OzswQ0FDeEIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFLOzs7Ozs7MENBQ25CLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQ0M7Z0JBQUVDLE1BQUs7Z0JBQU9iLFdBQVU7MEJBQWdDOzs7Ozs7Ozs7Ozs7QUFLakUsQ0FBQztHQXZEZWI7O1FBRThCRCxvREFBT0E7OztLQUZyQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Zvcm0udHN4Pzc2MTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbnR5cGUgSW5wdXRzID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwaG9uZTogc3RyaW5nO1xuICAgIHdoZXJlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKCkge1xuXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCB9ID0gdXNlRm9ybTxJbnB1dHM+KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICB3aGVyZTogJycsXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgb25TdWJpdDogU3VibWl0SGFuZGxlcjxJbnB1dHM+ID0gKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjdGEtZm9ybVwiIG5hbWU9XCJzaWduLXVwXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbC1uYW1lXCI+Tm9tZSBjb21wbGV0bzwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJmdWxsLW5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXJpYSBkYSBTaWx2YVwiXG4gICAgICAgICAgICBuYW1lPVwiZnVsbC1uYW1lXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5UZWxlZm9uZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIoNDEpIDk5OTk5LTk5OTlcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LXdoZXJlXCI+XG4gICAgICAgICAgICBEZSBvbmRlIHZvY8OqIG1lIGNvbmhlY2U/XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3Qtd2hlcmVcIiBuYW1lPVwic2VsZWN0LXdoZXJlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXNjb2xoZSB1bWEgb3DDp8OjbyBwb3IgZmF2b3I6PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZnJpZW5kc1wiPkNsaWVudGUgYW50aWdhPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieW91dHViZVwiPkluZGljYcOnw6NvPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9kY2FzdFwiPkdvb2dsZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFkXCI+SW5zdGFncmFtPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJzXCI+T3V0cm9zPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YSBocmVmPVwiI2N0YVwiIGNsYXNzTmFtZT1cImJ0biBidG4tLWZ1bGwgbWFyZ2luLXJpZ2h0LXNtXCI+XG4gICAgICAgIEFnZW5kYXIgbWluaGEgYXZhbGlhw6fDo28hXG4gICAgICAgIDwvYT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsInBob25lIiwid2hlcmUiLCJvblN1Yml0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/Form.tsx\n"));

/***/ })

});