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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const leads = await prisma.lead.findMany();\n            return res.status(200).json({\n                data: leads\n            });\n        } catch (err) {\n            return res.status(500).json({\n                err\n            });\n        }\n    }\n    return res.status(500).json({\n        msg: \"This must be a GET request\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xpc3RhZ2VtLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU2QztBQUU3QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUVoQixlQUFlRSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBRUUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFFdEIsSUFBSTtZQUVBLE1BQU1DLFFBQVEsTUFBTUwsT0FBT00sSUFBSSxDQUFDQyxRQUFRO1lBRXhDLE9BQU9KLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ3hCQyxNQUFNTDtZQUNWO1FBRUosRUFBRSxPQUFPTSxLQUFLO1lBRVYsT0FBT1IsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDeEJFO1lBQ0o7UUFFSjtJQUVKLENBQUM7SUFFRCxPQUFPUixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3hCRyxLQUFLO0lBQ1Q7QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9hbmRyYWRlLmNvbS8uL3NyYy9wYWdlcy9hcGkvbGlzdGFnZW0udHM/ZDI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgbGVhZHMgPSBhd2FpdCBwcmlzbWEubGVhZC5maW5kTWFueSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgIGRhdGE6IGxlYWRzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIG1zZzogJ1RoaXMgbXVzdCBiZSBhIEdFVCByZXF1ZXN0J1xuICAgIH0pXG5cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImxlYWRzIiwibGVhZCIsImZpbmRNYW55Iiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnIiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/listagem.ts\n");

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