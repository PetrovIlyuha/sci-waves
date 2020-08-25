webpackHotUpdate_N_E("pages/user",{

/***/ "./pages/user/index.js":
/*!*****************************!*\
  !*** ./pages/user/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");



var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\user\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var UserPage = function UserPage(_ref) {
  var data = _ref.data;
  console.log(data);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Customer Page"), data.map(function (post, idx) {
    return __jsx("h4", {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, "Post #", idx, ": ", post.title);
  }));
};

_c = UserPage;

UserPage.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://jsonplaceholder.typicode.com/todos");

          case 2:
            response = _context.sent;
            return _context.abrupt("return", {
              data: response.data.slice(0, 10)
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (UserPage);

var _c;

$RefreshReg$(_c, "UserPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicG9zdCIsImlkeCIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHQSxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxXQUNSO0FBQUksU0FBRyxFQUFFQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1NBLEdBRFQsUUFDZ0JELElBQUksQ0FBQ0UsS0FEckIsQ0FEUTtBQUFBLEdBQVQsQ0FGSCxDQURGO0FBVUQsQ0FaRDs7S0FBTVAsUTs7QUFjTkEsUUFBUSxDQUFDUSxlQUFUO0FBQUEsK0xBQTJCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0ZDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSwyQ0FBVixDQURFOztBQUFBO0FBQ25CQyxvQkFEbUI7QUFBQSw2Q0FFbEI7QUFBRVgsa0JBQUksRUFBRVcsUUFBUSxDQUFDWCxJQUFULENBQWNZLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkI7QUFBUixhQUZrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZWIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci4xZmIwOTJkNjc3NDkxMDNmNTA5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiXHJcblxyXG5jb25zdCBVc2VyUGFnZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5DdXN0b21lciBQYWdlPC9oMz5cclxuICAgICAge2RhdGEubWFwKChwb3N0LCBpZHgpID0+IChcclxuICAgICAgICA8aDQga2V5PXtpZHh9PlxyXG4gICAgICAgICAgUG9zdCAje2lkeH06IHtwb3N0LnRpdGxlfVxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5Vc2VyUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKVxyXG4gIHJldHVybiB7IGRhdGE6IHJlc3BvbnNlLmRhdGEuc2xpY2UoMCwgMTApIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9