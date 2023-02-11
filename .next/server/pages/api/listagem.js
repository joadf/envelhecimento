"use strict";
(() => {
var exports = {};
exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 7192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ createLead),
  "o": () => (/* binding */ getAllLeads)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./src/lib/prisma.ts

const prisma = new client_namespaceObject.PrismaClient();

;// CONCATENATED MODULE: ./src/lib/db.ts

async function getAllLeads() {
    const data = await prisma.lead.findMany();
    return data;
}
async function createLead(name, phone, where) {
    const lead = await prisma.lead.create({
        data: {
            name,
            phone,
            where
        }
    });
    return lead;
}


/***/ }),

/***/ 9198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7192);

async function handler(req, res) {
    if (req.method === "GET") {
        console.log("listagem...");
        try {
            const leads = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .getAllLeads */ .o)();
            return res.status(200).json({
                data: leads
            });
        } catch (error) {
            console.error("Request error", error);
            res.status(500).json({
                error: "Error listing leads",
                success: false
            });
        }
    }
    return res.status(405).json({
        message: "Method not allowed",
        success: false
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9198));
module.exports = __webpack_exports__;

})();