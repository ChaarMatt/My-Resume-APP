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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Load saved theme from localStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const savedTheme = localStorage.getItem(\"theme\");\n            if (savedTheme === \"dark\") {\n                document.documentElement.classList.add(\"dark\");\n                setDarkMode(true);\n            }\n        }\n    }[\"MyApp.useEffect\"], []);\n    // Toggle dark mode\n    const toggleDarkMode = ()=>{\n        if (darkMode) {\n            document.documentElement.classList.remove(\"dark\");\n            localStorage.setItem(\"theme\", \"light\");\n        } else {\n            document.documentElement.classList.add(\"dark\");\n            localStorage.setItem(\"theme\", \"dark\");\n        }\n        setDarkMode(!darkMode);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-container relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleDarkMode,\n                className: \"fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md    hover:scale-105 transition duration-300\",\n                children: darkMode ? \"☀️ Light Mode\" : \"🌙 Dark Mode\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CHAAR\\\\Projects\\\\my-resume-app\\\\pages\\\\_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CHAAR\\\\Projects\\\\my-resume-app\\\\pages\\\\_app.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CHAAR\\\\Projects\\\\my-resume-app\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3BCO0FBRS9CLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXpDLHFDQUFxQztJQUNyQ0MsZ0RBQVNBOzJCQUFDO1lBQ1IsTUFBTU0sYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1lBQ3hDLElBQUlGLGVBQWUsUUFBUTtnQkFDekJHLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7Z0JBQ3ZDUCxZQUFZO1lBQ2Q7UUFDRjswQkFBRyxFQUFFO0lBRUwsbUJBQW1CO0lBQ25CLE1BQU1RLGlCQUFpQjtRQUNyQixJQUFJVCxVQUFVO1lBQ1pLLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUM7WUFDMUNQLGFBQWFRLE9BQU8sQ0FBQyxTQUFTO1FBQ2hDLE9BQU87WUFDTE4sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUN2Q0wsYUFBYVEsT0FBTyxDQUFDLFNBQVM7UUFDaEM7UUFDQVYsWUFBWSxDQUFDRDtJQUNmO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFDQ0MsU0FBU047Z0JBQ1RJLFdBQVU7MEJBR1RiLFdBQVcsa0JBQWtCOzs7Ozs7MEJBR2hDLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxDSEFBUlxcUHJvamVjdHNcXG15LXJlc3VtZS1hcHBcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIExvYWQgc2F2ZWQgdGhlbWUgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XHJcbiAgICBpZiAoc2F2ZWRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xyXG4gICAgICBzZXREYXJrTW9kZSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFRvZ2dsZSBkYXJrIG1vZGVcclxuICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgIGlmIChkYXJrTW9kZSkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XHJcbiAgICB9XHJcbiAgICBzZXREYXJrTW9kZSghZGFya01vZGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXIgcmVsYXRpdmVcIj5cclxuICAgICAgey8qIPCflKUgRGFyayBNb2RlIFRvZ2dsZSBCdXR0b24gLSBGaXhlZCAmIEhpZ2hlciBaLUluZGV4ICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTQgcmlnaHQtNCB6LTUwIHAtMyByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgZGFyazpiZy1ncmF5LTcwMCBzaGFkb3ctbWQgXHJcbiAgICAgICAgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtkYXJrTW9kZSA/IFwi4piA77iPIExpZ2h0IE1vZGVcIiA6IFwi8J+MmSBEYXJrIE1vZGVcIn1cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJzYXZlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlRGFya01vZGUiLCJyZW1vdmUiLCJzZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();