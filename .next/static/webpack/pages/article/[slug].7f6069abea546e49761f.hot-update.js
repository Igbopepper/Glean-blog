webpackHotUpdate_N_E("pages/article/[slug]",{

/***/ "./pages/article/[slug].jsx":
/*!**********************************!*\
  !*** ./pages/article/[slug].jsx ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GlobalLayout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GlobalLayout/layout */ \"./components/GlobalLayout/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! disqus-react */ \"./node_modules/disqus-react/lib/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ndonna/Documents/Next JS/glean/pages/article/[slug].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  _s();\n\n  var _article$category;\n\n  var article = _ref.article,\n      categories = _ref.categories;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      location = _useState[0],\n      setLocation = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setLocation(window.location.href);\n  }, []);\n  var disqusConfig = {\n    url: location,\n    identifier: article.id,\n    title: article.title\n  };\n  var seo = {\n    metaTitle: article.title,\n    metaDescription: article.description,\n    shareImage: article === null || article === void 0 ? void 0 : article.image,\n    article: true\n  };\n  return __jsx(_components_GlobalLayout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    categories: categories,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    seo: seo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"w-full mt-5 lg:mt-10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"inner-container flex gap-9\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    className: \"lg:w-8/12 leading-relaxed text-3xl font-semibold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, article === null || article === void 0 ? void 0 : article.title), __jsx(\"div\", {\n    className: \"my-3 flex items-center justify-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-gl-green uppercase font-semibold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, (_article$category = article.category) === null || _article$category === void 0 ? void 0 : _article$category.name), __jsx(\"p\", {\n    className: \"text-gray-400 flex items-center ml-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_5__[\"GoPrimitiveDot\"], {\n    className: \"mr-1 h-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }), __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    format: \"MMM Do YYYY\",\n    className: \"ml-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, article.published_at))), __jsx(\"div\", {\n    className: \"flex items-center space-x-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, \"SHARE\"), __jsx(\"a\", {\n    href: \"https://twitter.com/share?text=\".concat(location),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__[\"AiOutlineTwitter\"], {\n    className: \"text-2xl text-gl-green\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 19\n    }\n  })), __jsx(\"a\", {\n    href: \"https://www.facebook.com/sharer.php?u=\".concat(location, \"&quote=\").concat(article.title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__[\"AiFillFacebook\"], {\n    className: \"text-2xl text-gl-green\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 19\n    }\n  })), __jsx(\"a\", {\n    href: \"https://wa.me/?text=\".concat(location),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__[\"AiOutlineWhatsApp\"], {\n    className: \"text-2xl text-gl-green\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  })))), __jsx(\"div\", {\n    className: \"w-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: article.image,\n    className: \"w-full h-auto object-cover my-3\",\n    style: {\n      maxHeight: 600\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: \"w-80 h-20vh rounded-lg border-4 mx-auto border-dashed  border-gray-300 px-5 items-center justify-center flex lg:hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }, __jsx(\"p\", {\n    className: \"text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, \"Contact for advert bookings and placement\")), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: article.content,\n    escapeHtml: false,\n    className: \"text-lg text-justify mb-10 space-y-3 font-serif \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_7__[\"DiscussionEmbed\"], {\n    config: disqusConfig,\n    shortname: \"glean-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    className: \"w-80 h-40vh rounded-lg border-4 border-dashed  border-gray-300 px-5 items-center justify-center hidden lg:flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"Contact for advert bookings and placement\")))));\n};\n\n_s(Article, \"uYjSqoyfw2FApiWGOS7tBpGU5mQ=\");\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanN4P2YyZTIiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJjYXRlZ29yaWVzIiwidXNlU3RhdGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaHJlZiIsImRpc3F1c0NvbmZpZyIsInVybCIsImlkZW50aWZpZXIiLCJpZCIsInRpdGxlIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwiaW1hZ2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJwdWJsaXNoZWRfYXQiLCJtYXhIZWlnaHQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUNwQ0MsUUFEb0M7QUFBQSxNQUMxQkMsV0FEMEI7O0FBRTNDQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsZUFBVyxDQUFDRSxNQUFNLENBQUNILFFBQVAsQ0FBZ0JJLElBQWpCLENBQVg7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFHLEVBQUVOLFFBRGM7QUFFbkJPLGNBQVUsRUFBRVYsT0FBTyxDQUFDVyxFQUZEO0FBR25CQyxTQUFLLEVBQUVaLE9BQU8sQ0FBQ1k7QUFISSxHQUFyQjtBQU1BLE1BQU1DLEdBQUcsR0FBRztBQUNWQyxhQUFTLEVBQUVkLE9BQU8sQ0FBQ1ksS0FEVDtBQUVWRyxtQkFBZSxFQUFFZixP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QUFFO0FBQWIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyx3SEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGLENBUEYsRUFhRSxNQUFDLHFEQUFEO0FBQ0UsVUFBTSxFQUFFdEIsT0FBTyxDQUFDdUIsT0FEbEI7QUFFRSxjQUFVLEVBQUUsS0FGZDtBQUdFLGFBQVMsRUFBQyxrREFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFtQkUsTUFBQyw0REFBRDtBQUFpQixVQUFNLEVBQUVmLFlBQXpCO0FBQXVDLGFBQVMsRUFBQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLENBbkNGLENBREYsRUEwREU7QUFBSyxhQUFTLEVBQUMsZ0hBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFERixDQTFERixDQURGLENBRkYsQ0FERjtBQXVFRCxDQTFGRDs7R0FBTVQsTzs7S0FBQUEsTzs7QUFtSFNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR2xvYmFsTGF5b3V0L2xheW91dFwiXG5pbXBvcnQgU2VvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nlb1wiXG5pbXBvcnQgeyBHb1ByaW1pdGl2ZURvdCB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiXG5pbXBvcnQge1xuICBBaU91dGxpbmVXaGF0c0FwcCxcbiAgQWlGaWxsRmFjZWJvb2ssXG4gIEFpT3V0bGluZVR3aXR0ZXJcbn0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcbmltcG9ydCB7IERpc2N1c3Npb25FbWJlZCB9IGZyb20gXCJkaXNxdXMtcmVhY3RcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IEFydGljbGUgPSAoeyBhcnRpY2xlLCBjYXRlZ29yaWVzIH0pID0+IHtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICB9LCBbXSlcblxuICBjb25zdCBkaXNxdXNDb25maWcgPSB7XG4gICAgdXJsOiBsb2NhdGlvbixcbiAgICBpZGVudGlmaWVyOiBhcnRpY2xlLmlkLFxuICAgIHRpdGxlOiBhcnRpY2xlLnRpdGxlXG4gIH1cblxuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBhcnRpY2xlLnRpdGxlLFxuICAgIG1ldGFEZXNjcmlwdGlvbjogYXJ0aWNsZS5kZXNjcmlwdGlvbixcbiAgICBzaGFyZUltYWdlOiBhcnRpY2xlPy5pbWFnZSxcbiAgICBhcnRpY2xlOiB0cnVlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNSBsZzptdC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRhaW5lciBmbGV4IGdhcC05XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp3LTgvMTIgbGVhZGluZy1yZWxheGVkIHRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAge2FydGljbGU/LnRpdGxlfVxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ2wtZ3JlZW4gdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmNhdGVnb3J5Py5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZsZXggaXRlbXMtY2VudGVyIG1sLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxHb1ByaW1pdGl2ZURvdCBjbGFzc05hbWU9XCJtci0xIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIk1NTSBEbyBZWVlZXCIgY2xhc3NOYW1lPVwibWwtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5wdWJsaXNoZWRfYXR9XG4gICAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgPHA+U0hBUkU8L3A+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dGV4dD0ke2xvY2F0aW9ufWB9PlxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVR3aXR0ZXIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1nbC1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0ke2xvY2F0aW9ufSZxdW90ZT0ke2FydGljbGUudGl0bGV9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWlGaWxsRmFjZWJvb2sgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1nbC1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3dhLm1lLz90ZXh0PSR7bG9jYXRpb259YH0+XG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lV2hhdHNBcHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1nbC1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLmltYWdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gb2JqZWN0LWNvdmVyIG15LTNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAwIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgwIGgtMjB2aCByb3VuZGVkLWxnIGJvcmRlci00IG14LWF1dG8gYm9yZGVyLWRhc2hlZCAgYm9yZGVyLWdyYXktMzAwIHB4LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXggbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3QgZm9yIGFkdmVydCBib29raW5ncyBhbmQgcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgIHNvdXJjZT17YXJ0aWNsZS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1qdXN0aWZ5IG1iLTEwIHNwYWNlLXktMyBmb250LXNlcmlmIFwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPERpc2N1c3Npb25FbWJlZCBjb25maWc9e2Rpc3F1c0NvbmZpZ30gc2hvcnRuYW1lPVwiZ2xlYW4tMlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctODAgaC00MHZoIHJvdW5kZWQtbGcgYm9yZGVyLTQgYm9yZGVyLWRhc2hlZCAgYm9yZGVyLWdyYXktMzAwIHB4LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhpZGRlbiBsZzpmbGV4XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBDb250YWN0IGZvciBhZHZlcnQgYm9va2luZ3MgYW5kIHBsYWNlbWVudFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFydGljbGVzLm1hcChhcnRpY2xlID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogYXJ0aWNsZS5zbHVnXG4gICAgICB9XG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZmV0Y2hBUEkoYC9hcnRpY2xlcz9zbHVnPSR7cGFyYW1zLnNsdWd9YClcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzWzBdLCBjYXRlZ29yaWVzIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[slug].jsx\n");

/***/ })

})