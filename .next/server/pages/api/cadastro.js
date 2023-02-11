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
exports.id = "pages/api/cadastro";
exports.ids = ["pages/api/cadastro"];
exports.modules = {

/***/ "(api)/./src/pages/api/cadastro.ts":
/*!***********************************!*\
  !*** ./src/pages/api/cadastro.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// type Data = {\n//   name: string\n// }\n// export default function handler(\n//   req: NextApiRequest,\n//   res: NextApiResponse<Data>,\n// ) {\n//   res.status(200).json({ name: 'John Doe' })\n// }\nconst { log  } = console;\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const reqPayload = req?.body;\n        log(\"Req Payload: \", reqPayload);\n        return res.json(reqPayload);\n    }\n    return res.status(500).json({\n        msg: \"This must be a POST request\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NhZGFzdHJvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFHN0UsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixJQUFJO0FBRUosbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUN6QixnQ0FBZ0M7QUFDaEMsTUFBTTtBQUNOLCtDQUErQztBQUMvQyxJQUFJO0FBRUosTUFBTSxFQUFFQSxJQUFHLEVBQUUsR0FBR0M7QUFFRCxTQUFTQyxRQUN0QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBRUEsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFFekIsTUFBTUMsYUFBYUgsS0FBS0k7UUFFeEJQLElBQUksaUJBQWlCTTtRQUVyQixPQUFPRixJQUFJSSxJQUFJLENBQUNGO0lBRWxCLENBQUM7SUFFRCxPQUFPRixJQUFJSyxNQUFNLENBQUMsS0FBS0QsSUFBSSxDQUFDO1FBQzFCRSxLQUFLO0lBQ1A7QUFFRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9hbmRyYWRlLmNvbS8uL3NyYy9wYWdlcy9hcGkvY2FkYXN0cm8udHM/YWI0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuLy8gdHlwZSBEYXRhID0ge1xuLy8gICBuYW1lOiBzdHJpbmdcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcbi8vICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbi8vICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT4sXG4vLyApIHtcbi8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXG4vLyB9XG5cbmNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcblxuICAgIGNvbnN0IHJlcVBheWxvYWQgPSByZXE/LmJvZHk7XG5cbiAgICBsb2coXCJSZXEgUGF5bG9hZDogXCIsIHJlcVBheWxvYWQpO1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKHJlcVBheWxvYWQpO1xuXG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgIG1zZzogJ1RoaXMgbXVzdCBiZSBhIFBPU1QgcmVxdWVzdCdcbiAgfSlcblxufSJdLCJuYW1lcyI6WyJsb2ciLCJjb25zb2xlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlcVBheWxvYWQiLCJib2R5IiwianNvbiIsInN0YXR1cyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/cadastro.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/cadastro.ts"));
module.exports = __webpack_exports__;

})();