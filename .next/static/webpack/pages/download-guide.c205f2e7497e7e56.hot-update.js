"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/download-guide",{

/***/ "./pages/download-guide.js":
/*!*********************************!*\
  !*** ./pages/download-guide.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DownloadGuidePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TriStateToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TriStateToggle */ \"./components/TriStateToggle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import path from \"path\";\nconst osToMarkdownFile = {\n    MacOS: \"MacOS.md\",\n    Windows: \"Windows.md\",\n    Linux: \"Linux.md\"\n};\nfunction DownloadGuidePage(props) {\n    _s();\n    const [currentOS, setCurrentOS] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"MacOS\");\n    function toggleSwitch(event) {\n        const clickedOS = event.target.id;\n        setCurrentOS(clickedOS);\n    }\n    //   const markdownFilePath = osToMarkdownFile[currentOS];\n    //   console.log(markdownFilePath);\n    //   const postsDirectory = path.join(\n    //     process.cwd(),\n    //     \"content\",\n    //     \"julia-download-guide\",\n    //     markdownFilePath\n    //   );\n    //   const file = await getPostData(currentOS);\n    const markdownFilePath = osToMarkdownFile[currentOS];\n    console.log(markdownFilePath);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid list-none grid-cols-1 gap-10 place-items-center bg-blue-100 mx-auto z-1 w-5/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-gray-500 text-4xl font-semibold\",\n                        children: \"Julia programming\"\n                    }, void 0, false, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-gray-800 text-5xl font-extrabold\",\n                        children: [\n                            \"A fresh approach to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                                lineNumber: 38,\n                                columnNumber: 31\n                            }, this),\n                            \"scientific computing\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-2xl font-semibold\",\n                        children: \"The days of having julia pre-installed in your machine are not here (yet!)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TriStateToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onClick: toggleSwitch\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(DownloadGuidePage, \"GdoGIHUQK+kMjNaCncut2hpKms0=\");\n_c = DownloadGuidePage;\nvar _c;\n$RefreshReg$(_c, \"DownloadGuidePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb3dubG9hZC1ndWlkZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNVO0FBQ1A7QUFDbEQsMkJBQTJCO0FBRTNCLE1BQU1LLG1CQUFtQjtJQUN2QkMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLE9BQU87QUFDVDtBQUVlLFNBQVNDLGtCQUFrQkMsS0FBSzs7SUFDN0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDLFNBQVNTLGFBQWFDLEtBQUs7UUFDekIsTUFBTUMsWUFBWUQsTUFBTUUsTUFBTSxDQUFDQyxFQUFFO1FBQ2pDTCxhQUFhRztJQUNmO0lBQ0EsMERBQTBEO0lBQzFELG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCwrQ0FBK0M7SUFDL0MsTUFBTUcsbUJBQW1CYixnQkFBZ0IsQ0FBQ00sVUFBVTtJQUNwRFEsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDZiwyQ0FBUUE7OzBCQUNQLDhEQUFDa0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBdUM7Ozs7OztrQ0FHckQsOERBQUNFO3dCQUFHRixXQUFVOzs0QkFBd0M7MENBQ2hDLDhEQUFDRzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBRzVCLDhEQUFDQzt3QkFBRUosV0FBVTtrQ0FBdUM7Ozs7Ozs7Ozs7OzswQkFLdEQsOERBQUNyQixrRUFBY0E7Z0JBQUMwQixTQUFTZDs7Ozs7Ozs7Ozs7O0FBTy9CO0dBekN3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG93bmxvYWQtZ3VpZGUuanM/MTJjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE1hcmtkb3duIH0gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgVHJpU3RhdGVUb2dnbGUgZnJvbSBcIkAvY29tcG9uZW50cy9UcmlTdGF0ZVRvZ2dsZVwiO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuY29uc3Qgb3NUb01hcmtkb3duRmlsZSA9IHtcbiAgTWFjT1M6IFwiTWFjT1MubWRcIixcbiAgV2luZG93czogXCJXaW5kb3dzLm1kXCIsXG4gIExpbnV4OiBcIkxpbnV4Lm1kXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb3dubG9hZEd1aWRlUGFnZShwcm9wcykge1xuICBjb25zdCBbY3VycmVudE9TLCBzZXRDdXJyZW50T1NdID0gdXNlU3RhdGUoXCJNYWNPU1wiKTtcblxuICBmdW5jdGlvbiB0b2dnbGVTd2l0Y2goZXZlbnQpIHtcbiAgICBjb25zdCBjbGlja2VkT1MgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgc2V0Q3VycmVudE9TKGNsaWNrZWRPUyk7XG4gIH1cbiAgLy8gICBjb25zdCBtYXJrZG93bkZpbGVQYXRoID0gb3NUb01hcmtkb3duRmlsZVtjdXJyZW50T1NdO1xuICAvLyAgIGNvbnNvbGUubG9nKG1hcmtkb3duRmlsZVBhdGgpO1xuICAvLyAgIGNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKFxuICAvLyAgICAgcHJvY2Vzcy5jd2QoKSxcbiAgLy8gICAgIFwiY29udGVudFwiLFxuICAvLyAgICAgXCJqdWxpYS1kb3dubG9hZC1ndWlkZVwiLFxuICAvLyAgICAgbWFya2Rvd25GaWxlUGF0aFxuICAvLyAgICk7XG4gIC8vICAgY29uc3QgZmlsZSA9IGF3YWl0IGdldFBvc3REYXRhKGN1cnJlbnRPUyk7XG4gIGNvbnN0IG1hcmtkb3duRmlsZVBhdGggPSBvc1RvTWFya2Rvd25GaWxlW2N1cnJlbnRPU107XG4gIGNvbnNvbGUubG9nKG1hcmtkb3duRmlsZVBhdGgpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxpc3Qtbm9uZSBncmlkLWNvbHMtMSBnYXAtMTAgcGxhY2UtaXRlbXMtY2VudGVyIGJnLWJsdWUtMTAwIG14LWF1dG8gei0xIHctNS82XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBKdWxpYSBwcm9ncmFtbWluZ1xuICAgICAgICA8L2gyPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCB0ZXh0LTV4bCBmb250LWV4dHJhYm9sZFwiPlxuICAgICAgICAgIEEgZnJlc2ggYXBwcm9hY2ggdG8gPGJyIC8+XG4gICAgICAgICAgc2NpZW50aWZpYyBjb21wdXRpbmdcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgVGhlIGRheXMgb2YgaGF2aW5nIGp1bGlhIHByZS1pbnN0YWxsZWQgaW4geW91ciBtYWNoaW5lIGFyZSBub3QgaGVyZVxuICAgICAgICAgICh5ZXQhKVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUcmlTdGF0ZVRvZ2dsZSBvbkNsaWNrPXt0b2dnbGVTd2l0Y2h9IC8+XG4gICAgICB7Lyoge2N1cnJlbnRPUyA9PT0gXCJNYWNcIiAmJiA8cD5NYWNjYzwvcD59XG4gICAgICB7Y3VycmVudE9TID09PSBcIldpbmRvd3NcIiAmJiA8cD5XaW5kb3dzPC9wPn1cbiAgICAgIHtjdXJyZW50T1MgPT09IFwiTGludXhcIiAmJiA8cD5MaW51eDwvcD59ICovfVxuICAgICAgey8qIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdHNEaXJlY3Rvcnl9IC8+ICovfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3RNYXJrZG93biIsIlRyaVN0YXRlVG9nZ2xlIiwiUmVhY3QiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwib3NUb01hcmtkb3duRmlsZSIsIk1hY09TIiwiV2luZG93cyIsIkxpbnV4IiwiRG93bmxvYWRHdWlkZVBhZ2UiLCJwcm9wcyIsImN1cnJlbnRPUyIsInNldEN1cnJlbnRPUyIsInRvZ2dsZVN3aXRjaCIsImV2ZW50IiwiY2xpY2tlZE9TIiwidGFyZ2V0IiwiaWQiLCJtYXJrZG93bkZpbGVQYXRoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaDMiLCJiciIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/download-guide.js\n"));

/***/ })

});