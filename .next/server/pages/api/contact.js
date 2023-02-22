"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 2139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 4374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    (__webpack_require__(5142).config)();
    console.info("Sending mail...");
    const sgMail = __webpack_require__(2139);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: "loick.leprevost@gmail.com",
        from: process.env.EMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    };
    return sgMail.send(msg).then(()=>{
        console.info("Email sent");
        res.status(200).end();
    }).catch((error)=>{
        console.error(error);
        if (error.response) {
            const { response  } = error;
            // Extract response msg
            const { body  } = response;
            console.error(body);
        }
        res.status(400).end();
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4374));
module.exports = __webpack_exports__;

})();