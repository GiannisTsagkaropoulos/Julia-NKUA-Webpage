/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/download-guide",{

/***/ "./lib/contentUtil.js":
/*!****************************!*\
  !*** ./lib/contentUtil.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/download-guide.js":
/*!*********************************!*\
  !*** ./pages/download-guide.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DownloadGuidePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _components_TriStateToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TriStateToggle */ \"./components/TriStateToggle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_contentUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/contentUtil */ \"./lib/contentUtil.js\");\n/* harmony import */ var _lib_contentUtil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_contentUtil__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import path from \"path\";\n\nconst osToMarkdownFile = {\n    MacOS: \"MacOS.md\",\n    Windows: \"Windows.md\",\n    Linux: \"Linux.md\"\n};\nfunction DownloadGuidePage(props) {\n    _s();\n    const [currentOS, setCurrentOS] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"MacOS\");\n    function toggleSwitch(event) {\n        const clickedOS1 = event.target.id;\n        console.log(clickedOS1);\n        setCurrentOS(clickedOS1);\n    }\n    //   const markdownFilePath = osToMarkdownFile[currentOS];\n    //   console.log(markdownFilePath);\n    //   const postsDirectory = path.join(\n    //     process.cwd(),\n    //     \"content\",\n    //     \"julia-download-guide\",\n    //     markdownFilePath\n    //   );\n    const file = (0,_lib_contentUtil__WEBPACK_IMPORTED_MODULE_3__.getPostData)(clickedOS);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid list-none grid-cols-1 gap-10 place-items-center bg-blue-100 mx-auto z-1 w-5/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-gray-500 text-4xl font-semibold\",\n                        children: \"Julia programming\"\n                    }, void 0, false, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-gray-800 text-5xl font-extrabold\",\n                        children: [\n                            \"A fresh approach to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                                lineNumber: 39,\n                                columnNumber: 31\n                            }, this),\n                            \"scientific computing\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-2xl font-semibold\",\n                        children: \"The days of having julia pre-installed in your machine are not here (yet!)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TriStateToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onClick: toggleSwitch\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            currentOS === \"Mac\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Maccc\"\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 48,\n                columnNumber: 31\n            }, this),\n            currentOS === \"Windows\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Windows\"\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 49,\n                columnNumber: 35\n            }, this),\n            currentOS === \"Linux\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Linux\"\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 50,\n                columnNumber: 33\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, {\n                source: postsDirectory\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(DownloadGuidePage, \"GdoGIHUQK+kMjNaCncut2hpKms0=\");\n_c = DownloadGuidePage;\nvar _c;\n$RefreshReg$(_c, \"DownloadGuidePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb3dubG9hZC1ndWlkZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQztBQUNVO0FBQ1A7QUFDbEQsMkJBQTJCO0FBRXFCO0FBRWhELE1BQU1NLG1CQUFtQjtJQUN2QkMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLE9BQU87QUFDVDtBQUVlLFNBQVNDLGtCQUFrQkMsS0FBSzs7SUFDN0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDLFNBQVNVLGFBQWFDLEtBQUs7UUFDekIsTUFBTUMsYUFBWUQsTUFBTUUsTUFBTSxDQUFDQyxFQUFFO1FBQ2pDQyxRQUFRQyxHQUFHLENBQUNKO1FBQ1pILGFBQWFHO0lBQ2Y7SUFDQSwwREFBMEQ7SUFDMUQsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLE1BQU1LLE9BQU9oQiw2REFBV0EsQ0FBQ1c7SUFFekIscUJBQ0UsOERBQUNiLDJDQUFRQTs7MEJBQ1AsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF1Qzs7Ozs7O2tDQUdyRCw4REFBQ0U7d0JBQUdGLFdBQVU7OzRCQUF3QzswQ0FDaEMsOERBQUNHOzs7Ozs0QkFBSzs7Ozs7OztrQ0FHNUIsOERBQUNDO3dCQUFFSixXQUFVO2tDQUF1Qzs7Ozs7Ozs7Ozs7OzBCQUt0RCw4REFBQ3RCLGtFQUFjQTtnQkFBQzJCLFNBQVNkOzs7Ozs7WUFDeEJGLGNBQWMsdUJBQVMsOERBQUNlOzBCQUFFOzs7Ozs7WUFDMUJmLGNBQWMsMkJBQWEsOERBQUNlOzBCQUFFOzs7Ozs7WUFDOUJmLGNBQWMseUJBQVcsOERBQUNlOzBCQUFFOzs7Ozs7MEJBQzdCLDhEQUFDM0IseURBQWFBO2dCQUFDNkIsUUFBUUM7Ozs7Ozs7Ozs7OztBQUc3QjtHQXhDd0JwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kb3dubG9hZC1ndWlkZS5qcz8xMmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0TWFya2Rvd24gfSBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCBUcmlTdGF0ZVRvZ2dsZSBmcm9tIFwiQC9jb21wb25lbnRzL1RyaVN0YXRlVG9nZ2xlXCI7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBnZXRQb3N0RGF0YSB9IGZyb20gXCJAL2xpYi9jb250ZW50VXRpbFwiO1xuXG5jb25zdCBvc1RvTWFya2Rvd25GaWxlID0ge1xuICBNYWNPUzogXCJNYWNPUy5tZFwiLFxuICBXaW5kb3dzOiBcIldpbmRvd3MubWRcIixcbiAgTGludXg6IFwiTGludXgubWRcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvd25sb2FkR3VpZGVQYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtjdXJyZW50T1MsIHNldEN1cnJlbnRPU10gPSB1c2VTdGF0ZShcIk1hY09TXCIpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVN3aXRjaChldmVudCkge1xuICAgIGNvbnN0IGNsaWNrZWRPUyA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zb2xlLmxvZyhjbGlja2VkT1MpO1xuICAgIHNldEN1cnJlbnRPUyhjbGlja2VkT1MpO1xuICB9XG4gIC8vICAgY29uc3QgbWFya2Rvd25GaWxlUGF0aCA9IG9zVG9NYXJrZG93bkZpbGVbY3VycmVudE9TXTtcbiAgLy8gICBjb25zb2xlLmxvZyhtYXJrZG93bkZpbGVQYXRoKTtcbiAgLy8gICBjb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihcbiAgLy8gICAgIHByb2Nlc3MuY3dkKCksXG4gIC8vICAgICBcImNvbnRlbnRcIixcbiAgLy8gICAgIFwianVsaWEtZG93bmxvYWQtZ3VpZGVcIixcbiAgLy8gICAgIG1hcmtkb3duRmlsZVBhdGhcbiAgLy8gICApO1xuICBjb25zdCBmaWxlID0gZ2V0UG9zdERhdGEoY2xpY2tlZE9TKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsaXN0LW5vbmUgZ3JpZC1jb2xzLTEgZ2FwLTEwIHBsYWNlLWl0ZW1zLWNlbnRlciBiZy1ibHVlLTEwMCBteC1hdXRvIHotMSB3LTUvNlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LTR4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgSnVsaWEgcHJvZ3JhbW1pbmdcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC01eGwgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgICBBIGZyZXNoIGFwcHJvYWNoIHRvIDxiciAvPlxuICAgICAgICAgIHNjaWVudGlmaWMgY29tcHV0aW5nXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFRoZSBkYXlzIG9mIGhhdmluZyBqdWxpYSBwcmUtaW5zdGFsbGVkIGluIHlvdXIgbWFjaGluZSBhcmUgbm90IGhlcmVcbiAgICAgICAgICAoeWV0ISlcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8VHJpU3RhdGVUb2dnbGUgb25DbGljaz17dG9nZ2xlU3dpdGNofSAvPlxuICAgICAge2N1cnJlbnRPUyA9PT0gXCJNYWNcIiAmJiA8cD5NYWNjYzwvcD59XG4gICAgICB7Y3VycmVudE9TID09PSBcIldpbmRvd3NcIiAmJiA8cD5XaW5kb3dzPC9wPn1cbiAgICAgIHtjdXJyZW50T1MgPT09IFwiTGludXhcIiAmJiA8cD5MaW51eDwvcD59XG4gICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3RzRGlyZWN0b3J5fSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3RNYXJrZG93biIsIlRyaVN0YXRlVG9nZ2xlIiwiUmVhY3QiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwiZ2V0UG9zdERhdGEiLCJvc1RvTWFya2Rvd25GaWxlIiwiTWFjT1MiLCJXaW5kb3dzIiwiTGludXgiLCJEb3dubG9hZEd1aWRlUGFnZSIsInByb3BzIiwiY3VycmVudE9TIiwic2V0Q3VycmVudE9TIiwidG9nZ2xlU3dpdGNoIiwiZXZlbnQiLCJjbGlja2VkT1MiLCJ0YXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoMyIsImJyIiwicCIsIm9uQ2xpY2siLCJzb3VyY2UiLCJwb3N0c0RpcmVjdG9yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/download-guide.js\n"));

/***/ })

});