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

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLead\": () => (/* binding */ createLead),\n/* harmony export */   \"getAllLeads\": () => (/* binding */ getAllLeads)\n/* harmony export */ });\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisma */ \"(api)/./src/lib/prisma.ts\");\n\nasync function getAllLeads() {\n    const data = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.lead.findMany();\n    return data;\n}\nasync function createLead(name, phone, where) {\n    const lead = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.lead.create({\n        data: {\n            name,\n            phone,\n            where\n        }\n    });\n    return lead;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQVMzQixlQUFlQyxjQUFjO0lBRWhDLE1BQU1DLE9BQU8sTUFBTUYseURBQW9CO0lBRXZDLE9BQU9FO0FBRVgsQ0FBQztBQUVNLGVBQWVHLFdBQVdDLElBQVksRUFBRUMsS0FBYSxFQUFFQyxLQUFhLEVBQUU7SUFFekUsTUFBTUwsT0FBTyxNQUFNSCx1REFBa0IsQ0FBQztRQUNsQ0UsTUFBTTtZQUNGSTtZQUNBQztZQUNBQztRQUNKO0lBQ0o7SUFFQSxPQUFPTDtBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2FuZHJhZGUuY29tLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuL3ByaXNtYVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExlYWQge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBob25lOiBzdHJpbmc7XG4gICAgd2hlcmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbExlYWRzKCkge1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5sZWFkLmZpbmRNYW55KCk7XG5cbiAgICByZXR1cm4gZGF0YTtcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhZChuYW1lOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcblxuICAgIGNvbnN0IGxlYWQgPSBhd2FpdCBwcmlzbWEubGVhZC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICB3aGVyZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVhZDtcbiAgICBcbn1cblxuXG4iXSwibmFtZXMiOlsicHJpc21hIiwiZ2V0QWxsTGVhZHMiLCJkYXRhIiwibGVhZCIsImZpbmRNYW55IiwiY3JlYXRlTGVhZCIsIm5hbWUiLCJwaG9uZSIsIndoZXJlIiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3ByaXNtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFdEMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYW5kcmFkZS5jb20vLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/listagem.ts":
/*!***********************************!*\
  !*** ./src/pages/api/listagem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        console.log(\"listagem...\");\n        try {\n            const leads = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.getAllLeads)();\n            return res.status(200).json({\n                data: leads\n            });\n        } catch (error) {\n            console.error(\"Request error\", error);\n            res.status(500).json({\n                error: \"Error listing leads\",\n                success: false\n            });\n        }\n    }\n    return res.status(405).json({\n        message: \"Method not allowed\",\n        success: false\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xpc3RhZ2VtLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVDO0FBRXhCLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFFRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUV0QkMsUUFBUUMsR0FBRyxDQUFDO1FBRVosSUFBSTtZQUVBLE1BQU1DLFFBQVEsTUFBTVAsb0RBQVdBO1lBRS9CLE9BQU9HLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ3hCQyxNQUFNSDtZQUNWO1FBRUosRUFBRSxPQUFPSSxPQUFPO1lBRVpOLFFBQVFNLEtBQUssQ0FBQyxpQkFBaUJBO1lBQy9CUixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxPQUFPO2dCQUF1QkMsU0FBUyxLQUFLO1lBQUM7UUFFdEU7SUFFTixDQUFDO0lBRUQsT0FBT1QsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN4QkksU0FBUztRQUFzQkQsU0FBUyxLQUFLO0lBQ2pEO0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYW5kcmFkZS5jb20vLi9zcmMvcGFnZXMvYXBpL2xpc3RhZ2VtLnRzP2QyNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuaW1wb3J0IHsgZ2V0QWxsTGVhZHMgfSBmcm9tICdAL2xpYi9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuKSB7XG5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RhZ2VtLi4uXCIpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxlYWRzID0gYXdhaXQgZ2V0QWxsTGVhZHMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBsZWFkc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVxdWVzdCBlcnJvcicsIGVycm9yKVxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGxpc3RpbmcgbGVhZHMnLCBzdWNjZXNzOiBmYWxzZSB9KVxuICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcsIHN1Y2Nlc3M6IGZhbHNlXG4gICAgfSk7XG5cbn0iXSwibmFtZXMiOlsiZ2V0QWxsTGVhZHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImxlYWRzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/listagem.ts\n");

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