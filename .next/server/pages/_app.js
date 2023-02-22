(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 655:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Poppins_fcdeec', '__Poppins_Fallback_fcdeec'","fontStyle":"normal"},
	"className": "__className_fcdeec"
};


/***/ }),

/***/ 6372:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 9370:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "header_title__BaTLR",
	"link": "header_link__JrKa3",
	"active": "header_active__oB_NV"
};


/***/ }),

/***/ 4850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/components/Layout.tsx","import":"Poppins","arguments":[{"weight":["400","500","600","700"],"subsets":["latin"]}],"variableName":"roboto"}
var Layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variableName_roboto_ = __webpack_require__(655);
var Layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(Layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variableName_roboto_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/header.module.css
var header_module = __webpack_require__(9370);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/components/Header.tsx





const Header = ({ title  })=>{
    const [actif, setActif] = (0,external_react_.useState)("");
    const [open, setOpen] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const url = window.location.href.split("/");
        setActif(url.length > 0 ? `/${url.pop()}` : "/");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Bonjour, Je suis Lo\xefck LEPR\xc9VOST, Freelance Fullstack D\xe9veloppeur. Contactez-moi pour d\xe9velopper votre projetContact me to develop your website."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `grid grid-cols-10 gap-4 text-center ${open ? "pt-6" : "py-6"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: `col-start-2 ${(header_module_default()).title}`,
                                children: "Lo\xefck"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-start-8 col-span-2 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hidden md:flex justify-evenly",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: `${(header_module_default()).link} ${actif == "/" || actif == "" ? (header_module_default()).active : ""}`,
                                                children: "Accueil"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#contact",
                                                scroll: false,
                                                className: `${(header_module_default()).link} ${actif == "/#contact" ? (header_module_default()).active : ""}`,
                                                children: "Contact"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "md:hidden",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: ()=>setOpen(!open),
                                            type: "button",
                                            className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                                            "aria-controls": "navbar-hamburger",
                                            "aria-expanded": "false",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Open main menu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "w-6 h-6",
                                                    "aria-hidden": "true",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        "fill-rule": "evenodd",
                                                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                                        "clip-rule": "evenodd"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${open ? "visible" : "hidden"}  w-full text-left ml-10`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: `flex flex-col bg-gray-50 dark:bg-gray-800 dark:border-gray-700`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "py-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: `${(header_module_default()).link} ${actif == "/" || actif == "" ? (header_module_default()).active : ""}`,
                                        children: "Accueil"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "py-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#contact",
                                        scroll: false,
                                        className: `${(header_module_default()).link} ${actif == "/#contact" ? (header_module_default()).active : ""}`,
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./src/styles/footer.module.css
var footer_module = __webpack_require__(6372);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/components/Footer.tsx



const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: ``,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "text-subtitle"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `grid grid-rows-2 md:grid-rows-none md:grid-cols-4 gap-4 items-center py-10`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:col-start-2 md:col-span-2 text-center font-medium",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "flex items-center justify-center",
                            children: [
                                "Made with",
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-suit-heart-fill pl-1 text-red-600",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-subtitle",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex items-center justify-center md:justify-start",
                                href: "mailto:loick.leprevost@gmail.com",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "currentColor",
                                        className: `bi bi-envelope ${(footer_module_default()).icon}`,
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "pl-2",
                                        children: "loick.leprevost@gmail.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex items-center justify-center md:justify-start",
                                href: "https://www.linkedin.com/in/lo%C3%AFck-leprevost-46a627181/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "currentColor",
                                        className: `bi bi-linkedin ${(footer_module_default()).icon}`,
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "pl-2",
                                        children: "Lo\xefck LEPREVOST"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex items-center justify-center md:justify-start",
                                href: "https://github.com/Zeikk",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "currentColor",
                                        className: `bi bi-github ${(footer_module_default()).icon}`,
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "pl-2",
                                        children: "Zeikk"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Layout.tsx





const Layout = ({ children , title ="Portfolio"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (Layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variableName_roboto_default()).className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                title: title
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(1759);
;// CONCATENATED MODULE: ./src/pages/_app.tsx






function App({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        title: "Portfolio - Lo\xefck LEPREVOST",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 1759:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,505,664], () => (__webpack_exec__(4850)));
module.exports = __webpack_exports__;

})();