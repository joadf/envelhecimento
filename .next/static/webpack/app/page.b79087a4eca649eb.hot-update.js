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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"(app-client)/./node_modules/.pnpm/react-hook-form@7.43.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction Form() {\n    _s();\n    const { register , handleSubmit , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        defaultValues: {\n            name: \"\",\n            phone: \"\",\n            where: \"\"\n        }\n    });\n    const onSubmit = (data)=>console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"cta-form\",\n        name: \"sign-up\",\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Nome completo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        type: \"text\",\n                        placeholder: \"Maria da Silva\",\n                        required: true,\n                        ...register(\"name\")\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"phone\",\n                        children: \"Telefone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"phone\",\n                        type: \"phone\",\n                        placeholder: \"(41) 99999-9999\",\n                        required: true,\n                        ...register(\"phone\")\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"where\",\n                        children: \"De onde voc\\xea me conhece?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"where\",\n                        required: true,\n                        ...register(\"where\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Escolhe uma op\\xe7\\xe3o por favor:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"friends\",\n                                children: \"Cliente antiga\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"youtube\",\n                                children: \"Indica\\xe7\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"podcast\",\n                                children: \"Google\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"ad\",\n                                children: \"Instagram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"others\",\n                                children: \"Outros\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn btn--full margin-right-sm\",\n                children: \"Agendar avalia\\xe7\\xe3o!\"\n            }, void 0, false, {\n                fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ronszcka/Estética/next/envelhecimento/src/app/components/Form.tsx\",\n        lineNumber: 24,\n        columnNumber: 7\n    }, this);\n}\n_s(Form, \"iAbW2kCivgDnd/X/TEQEI3kUDpM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0Zvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdEO0FBUWpELFNBQVNDLE9BQU87O0lBRW5CLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxhQUFZLEVBQUVDLE1BQUssRUFBRSxHQUFHSix3REFBT0EsQ0FBUztRQUN0REssZUFBZTtZQUNYQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTztRQUNYO0lBQ0o7SUFFQSxNQUFNQyxXQUFrQyxDQUFDQyxPQUFTQyxRQUFRQyxHQUFHLENBQUNGO0lBRTlELHFCQUNFLDhEQUFDRztRQUFLQyxXQUFVO1FBQVdSLE1BQUs7UUFBVUcsVUFBVU4sYUFBYU07OzBCQUMvRCw4REFBQ007O2tDQUNHLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBTzs7Ozs7O2tDQUN0Qiw4REFBQ0M7d0JBQ0dDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ04sR0FBR3BCLFNBQVMsT0FBTzs7Ozs7Ozs7Ozs7OzBCQUk3Qiw4REFBQ2E7O2tDQUNHLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQ0dDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ04sR0FBR3BCLFNBQVMsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUk5Qiw4REFBQ2E7O2tDQUNHLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUd2Qiw4REFBQ007d0JBQU9KLElBQUc7d0JBQVFHLFFBQVE7d0JBQUcsR0FBR3BCLFNBQVMsUUFBUTs7MENBQzlDLDhEQUFDc0I7Z0NBQU9DLE9BQU07MENBQUc7Ozs7OzswQ0FDakIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFVOzs7Ozs7MENBQ3hCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBVTs7Ozs7OzBDQUN4Qiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQVU7Ozs7OzswQ0FDeEIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFLOzs7Ozs7MENBQ25CLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkvQiw4REFBQ0M7Z0JBQU9OLE1BQUs7Z0JBQVNOLFdBQVU7MEJBQWdDOzs7Ozs7Ozs7Ozs7QUFLeEUsQ0FBQztHQXZEZWI7O1FBRThCRCxvREFBT0E7OztLQUZyQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Zvcm0udHN4Pzc2MTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbnR5cGUgSW5wdXRzID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwaG9uZTogc3RyaW5nO1xuICAgIHdoZXJlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKCkge1xuXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCB9ID0gdXNlRm9ybTxJbnB1dHM+KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICB3aGVyZTogJycsXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8SW5wdXRzPiA9IChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjdGEtZm9ybVwiIG5hbWU9XCJzaWduLXVwXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tZSBjb21wbGV0bzwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1hcmlhIGRhIFNpbHZhXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHsgLi4ucmVnaXN0ZXIoJ25hbWUnKSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlRlbGVmb25lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIoNDEpIDk5OTk5LTk5OTlcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgeyAuLi5yZWdpc3RlcigncGhvbmUnKSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGVyZVwiPlxuICAgICAgICAgICAgICAgIERlIG9uZGUgdm9jw6ogbWUgY29uaGVjZT9cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwid2hlcmVcIiByZXF1aXJlZCB7IC4uLnJlZ2lzdGVyKCd3aGVyZScpIH0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzY29saGUgdW1hIG9ww6fDo28gcG9yIGZhdm9yOjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmcmllbmRzXCI+Q2xpZW50ZSBhbnRpZ2E8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieW91dHViZVwiPkluZGljYcOnw6NvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvZGNhc3RcIj5Hb29nbGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRcIj5JbnN0YWdyYW08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJzXCI+T3V0cm9zPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZnVsbCBtYXJnaW4tcmlnaHQtc21cIj5cbiAgICAgICAgICAgIEFnZW5kYXIgYXZhbGlhw6fDo28hXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwicGhvbmUiLCJ3aGVyZSIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/Form.tsx\n"));

/***/ })

});