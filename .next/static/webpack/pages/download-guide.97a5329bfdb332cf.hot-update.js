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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DownloadGuidePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TriStateToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TriStateToggle */ \"./components/TriStateToggle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import path from \"path\";\nconst osToMarkdownFile = {\n    MacOS: \"/content/Julia-installation-guide/MacOS.md\",\n    Windows: \"/content/Julia-installation-guide/Windows.md\",\n    Linux: \"/content/Julia-installation-guide/Linux.md\"\n};\nfunction DownloadGuidePage(props) {\n    _s();\n    const [currentOS, setCurrentOS] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"MacOS\");\n    function toggleSwitch(event) {\n        const clickedOS = event.target.id;\n        setCurrentOS(clickedOS);\n    }\n    //   const markdownFilePath = osToMarkdownFile[currentOS];\n    //   console.log(markdownFilePath);\n    //   const postsDirectory = path.join(\n    //     process.cwd(),\n    //     \"content\",\n    //     \"julia-download-guide\",\n    //     markdownFilePath\n    //   );\n    //   const file = await getPostData(currentOS);\n    const markdownFilePath = osToMarkdownFile[currentOS];\n    console.log(markdownFilePath);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid list-none grid-cols-1 gap-10 place-items-center bg-blue-100 mx-auto z-1 w-5/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-gray-500 text-4xl font-semibold\",\n                        children: \"Julia programming\"\n                    }, void 0, false, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-gray-800 text-5xl font-extrabold\",\n                        children: [\n                            \"A fresh approach to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                                lineNumber: 37,\n                                columnNumber: 31\n                            }, this),\n                            \"scientific computing\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-2xl font-semibold\",\n                        children: \"The days of having julia pre-installed in your machine are not here (yet!)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TriStateToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onClick: toggleSwitch\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            currentOS === \"Mac\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Maccc\"\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 46,\n                columnNumber: 31\n            }, this),\n            currentOS === \"Windows\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Windows\"\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 47,\n                columnNumber: 35\n            }, this),\n            currentOS === \"Linux\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Linux\"\n            }, void 0, false, {\n                fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n                lineNumber: 48,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/giannistsagaropoulos/Documents/Web_Development/Julia-NKUA-Webpage/pages/download-guide.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(DownloadGuidePage, \"GdoGIHUQK+kMjNaCncut2hpKms0=\");\n_c = DownloadGuidePage;\nvar _c;\n$RefreshReg$(_c, \"DownloadGuidePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb3dubG9hZC1ndWlkZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNVO0FBQ1A7QUFDbEQsMkJBQTJCO0FBRTNCLE1BQU1LLG1CQUFtQjtJQUN2QkMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLE9BQU87QUFDVDtBQUNlLFNBQVNDLGtCQUFrQkMsS0FBSzs7SUFDN0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDLFNBQVNTLGFBQWFDLEtBQUs7UUFDekIsTUFBTUMsWUFBWUQsTUFBTUUsTUFBTSxDQUFDQyxFQUFFO1FBQ2pDTCxhQUFhRztJQUNmO0lBQ0EsMERBQTBEO0lBQzFELG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCwrQ0FBK0M7SUFDL0MsTUFBTUcsbUJBQW1CYixnQkFBZ0IsQ0FBQ00sVUFBVTtJQUNwRFEsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDZiwyQ0FBUUE7OzBCQUNQLDhEQUFDa0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBdUM7Ozs7OztrQ0FHckQsOERBQUNFO3dCQUFHRixXQUFVOzs0QkFBd0M7MENBQ2hDLDhEQUFDRzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBRzVCLDhEQUFDQzt3QkFBRUosV0FBVTtrQ0FBdUM7Ozs7Ozs7Ozs7OzswQkFLdEQsOERBQUNyQixrRUFBY0E7Z0JBQUMwQixTQUFTZDs7Ozs7O1lBQ3hCRixjQUFjLHVCQUFTLDhEQUFDZTswQkFBRTs7Ozs7O1lBQzFCZixjQUFjLDJCQUFhLDhEQUFDZTswQkFBRTs7Ozs7O1lBQzlCZixjQUFjLHlCQUFXLDhEQUFDZTswQkFBRTs7Ozs7Ozs7Ozs7O0FBR25DO0dBeEN3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rvd25sb2FkLWd1aWRlLmpzPzEyYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3RNYXJrZG93biB9IGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IFRyaVN0YXRlVG9nZ2xlIGZyb20gXCJAL2NvbXBvbmVudHMvVHJpU3RhdGVUb2dnbGVcIjtcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IG9zVG9NYXJrZG93bkZpbGUgPSB7XG4gIE1hY09TOiBcIi9jb250ZW50L0p1bGlhLWluc3RhbGxhdGlvbi1ndWlkZS9NYWNPUy5tZFwiLFxuICBXaW5kb3dzOiBcIi9jb250ZW50L0p1bGlhLWluc3RhbGxhdGlvbi1ndWlkZS9XaW5kb3dzLm1kXCIsXG4gIExpbnV4OiBcIi9jb250ZW50L0p1bGlhLWluc3RhbGxhdGlvbi1ndWlkZS9MaW51eC5tZFwiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvd25sb2FkR3VpZGVQYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtjdXJyZW50T1MsIHNldEN1cnJlbnRPU10gPSB1c2VTdGF0ZShcIk1hY09TXCIpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVN3aXRjaChldmVudCkge1xuICAgIGNvbnN0IGNsaWNrZWRPUyA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBzZXRDdXJyZW50T1MoY2xpY2tlZE9TKTtcbiAgfVxuICAvLyAgIGNvbnN0IG1hcmtkb3duRmlsZVBhdGggPSBvc1RvTWFya2Rvd25GaWxlW2N1cnJlbnRPU107XG4gIC8vICAgY29uc29sZS5sb2cobWFya2Rvd25GaWxlUGF0aCk7XG4gIC8vICAgY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4oXG4gIC8vICAgICBwcm9jZXNzLmN3ZCgpLFxuICAvLyAgICAgXCJjb250ZW50XCIsXG4gIC8vICAgICBcImp1bGlhLWRvd25sb2FkLWd1aWRlXCIsXG4gIC8vICAgICBtYXJrZG93bkZpbGVQYXRoXG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0UG9zdERhdGEoY3VycmVudE9TKTtcbiAgY29uc3QgbWFya2Rvd25GaWxlUGF0aCA9IG9zVG9NYXJrZG93bkZpbGVbY3VycmVudE9TXTtcbiAgY29uc29sZS5sb2cobWFya2Rvd25GaWxlUGF0aCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGlzdC1ub25lIGdyaWQtY29scy0xIGdhcC0xMCBwbGFjZS1pdGVtcy1jZW50ZXIgYmctYmx1ZS0xMDAgbXgtYXV0byB6LTEgdy01LzZcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC00eGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIEp1bGlhIHByb2dyYW1taW5nXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIHRleHQtNXhsIGZvbnQtZXh0cmFib2xkXCI+XG4gICAgICAgICAgQSBmcmVzaCBhcHByb2FjaCB0byA8YnIgLz5cbiAgICAgICAgICBzY2llbnRpZmljIGNvbXB1dGluZ1xuICAgICAgICA8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBUaGUgZGF5cyBvZiBoYXZpbmcganVsaWEgcHJlLWluc3RhbGxlZCBpbiB5b3VyIG1hY2hpbmUgYXJlIG5vdCBoZXJlXG4gICAgICAgICAgKHlldCEpXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRyaVN0YXRlVG9nZ2xlIG9uQ2xpY2s9e3RvZ2dsZVN3aXRjaH0gLz5cbiAgICAgIHtjdXJyZW50T1MgPT09IFwiTWFjXCIgJiYgPHA+TWFjY2M8L3A+fVxuICAgICAge2N1cnJlbnRPUyA9PT0gXCJXaW5kb3dzXCIgJiYgPHA+V2luZG93czwvcD59XG4gICAgICB7Y3VycmVudE9TID09PSBcIkxpbnV4XCIgJiYgPHA+TGludXg8L3A+fVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3RNYXJrZG93biIsIlRyaVN0YXRlVG9nZ2xlIiwiUmVhY3QiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwib3NUb01hcmtkb3duRmlsZSIsIk1hY09TIiwiV2luZG93cyIsIkxpbnV4IiwiRG93bmxvYWRHdWlkZVBhZ2UiLCJwcm9wcyIsImN1cnJlbnRPUyIsInNldEN1cnJlbnRPUyIsInRvZ2dsZVN3aXRjaCIsImV2ZW50IiwiY2xpY2tlZE9TIiwidGFyZ2V0IiwiaWQiLCJtYXJrZG93bkZpbGVQYXRoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaDMiLCJiciIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/download-guide.js\n"));

/***/ })

});