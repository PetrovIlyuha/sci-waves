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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");



var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\user\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var UserPage = function UserPage(_ref) {
  var user = _ref.user;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Customer Page"));
};

_c = UserPage;
UserPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var token, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["getCookie"])("token");
          _context.prev = 1;
          _context.next = 4;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/user"), {
            authorization: "Bearer ".concat(token),
            contentType: "application/json"
          });

        case 4:
          response = _context.sent;
          return _context.abrupt("return", {
            user: response.data
          });

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);

          if (!(_context.t0.response.status === 401)) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", {
            user: "No user found"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[1, 8]]);
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsInVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJ0b2tlbiIsImdldENvb2tpZSIsImF4aW9zIiwiZ2V0IiwiQVBJIiwiYXV0aG9yaXphdGlvbiIsImNvbnRlbnRUeXBlIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURGO0FBS0QsQ0FORDs7S0FBTUQsUTtBQVFOQSxRQUFRLENBQUNFLGVBQVQsaU1BQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMsZUFEbUIsR0FDWEMsZ0VBQVMsQ0FBQyxPQUFELENBREU7QUFBQTtBQUFBO0FBQUEsaUJBR0FDLDRDQUFLLENBQUNDLEdBQU4sV0FBYUMsMkNBQWIsWUFBeUI7QUFDOUNDLHlCQUFhLG1CQUFZTCxLQUFaLENBRGlDO0FBRTlDTSx1QkFBVyxFQUFFO0FBRmlDLFdBQXpCLENBSEE7O0FBQUE7QUFHakJDLGtCQUhpQjtBQUFBLDJDQU9oQjtBQUFFVCxnQkFBSSxFQUFFUyxRQUFRLENBQUNDO0FBQWpCLFdBUGdCOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFTbkIsWUFBSUQsUUFBSixDQUFhRSxNQUFiLEtBQXdCLEdBVEw7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMkNBVWQ7QUFBRVgsZ0JBQUksRUFBRTtBQUFSLFdBVmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFjZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci40MTA2YWZlYWM5Y2U2MjMwZjUwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiXHJcblxyXG5jb25zdCBVc2VyUGFnZSA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q3VzdG9tZXIgUGFnZTwvaDM+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcblVzZXJQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vdXNlcmAsIHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0pXHJcbiAgICByZXR1cm4geyB1c2VyOiByZXNwb25zZS5kYXRhIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgcmV0dXJuIHsgdXNlcjogXCJObyB1c2VyIGZvdW5kXCIgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9