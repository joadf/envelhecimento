"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/listagem";
exports.ids = ["pages/api/listagem"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/pages/api/listagem.ts":
/*!***********************************!*\
  !*** ./src/pages/api/listagem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    const leads = await prisma.lead.findMany();\n    if (req.method === \"GET\") {\n        return res.status(200).json({\n            data: leads\n        });\n    }\n    return res.status(500).json({\n        msg: \"This must be a GET request\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xpc3RhZ2VtLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU2QztBQUU3QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUVoQixlQUFlRSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBRUUsTUFBTUMsUUFBUSxNQUFNSixPQUFPSyxJQUFJLENBQUNDLFFBQVE7SUFFeEMsSUFBSUosSUFBSUssTUFBTSxLQUFLLE9BQU87UUFFdEIsT0FBT0osSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUN4QkMsTUFBTU47UUFDVjtJQUVKLENBQUM7SUFFRCxPQUFPRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3hCRSxLQUFLO0lBQ1Q7QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9hbmRyYWRlLmNvbS8uL3NyYy9wYWdlcy9hcGkvbGlzdGFnZW0udHM/ZDI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuXG4gICAgY29uc3QgbGVhZHMgPSBhd2FpdCBwcmlzbWEubGVhZC5maW5kTWFueSgpO1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIGRhdGE6IGxlYWRzXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgbXNnOiAnVGhpcyBtdXN0IGJlIGEgR0VUIHJlcXVlc3QnXG4gICAgfSlcblxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibGVhZHMiLCJsZWFkIiwiZmluZE1hbnkiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/listagem.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/listagem.ts"));
module.exports = __webpack_exports__;

})();