webpackHotUpdate_N_E("pages/auth/password/reset/[token]",{

/***/ "./pages/auth/password/reset/[token].jsx":
/*!***********************************************!*\
  !*** ./pages/auth/password/reset/[token].jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config.js */ "./config.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.jsx");
var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\auth\\password\\reset\\[token].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var ResetPassword = function ResetPassword(_ref) {
  _s();

  var router = _ref.router;
  console.log(router.query.token);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset Password",
    success: "",
    error: ""
  }),
      userState = _useState[0],
      setUserState = _useState[1];

  var name = userState.name,
      token = userState.token,
      newPassword = userState.newPassword,
      buttonText = userState.buttonText,
      success = userState.success,
      error = userState.error;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "Reset Password", __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

_s(ResetPassword, "sp8MqF4TsNv7YbxupjLO6n8CfBQ=");

_c = ResetPassword;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ResetPassword));

var _c, _c2;

$RefreshReg$(_c, "ResetPassword");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzeCJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJuZXdQYXNzd29yZCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxLQUF6Qjs7QUFEb0Msa0JBRUZDLHNEQUFRLENBQUM7QUFDekNDLFFBQUksRUFBRSxFQURtQztBQUV6Q0YsU0FBSyxFQUFFLEVBRmtDO0FBR3pDRyxlQUFXLEVBQUUsRUFINEI7QUFJekNDLGNBQVUsRUFBRSxnQkFKNkI7QUFLekNDLFdBQU8sRUFBRSxFQUxnQztBQU16Q0MsU0FBSyxFQUFFO0FBTmtDLEdBQUQsQ0FGTjtBQUFBLE1BRTdCQyxTQUY2QjtBQUFBLE1BRWxCQyxZQUZrQjs7QUFBQSxNQVU1Qk4sSUFWNEIsR0FVNkJLLFNBVjdCLENBVTVCTCxJQVY0QjtBQUFBLE1BVXRCRixLQVZzQixHQVU2Qk8sU0FWN0IsQ0FVdEJQLEtBVnNCO0FBQUEsTUFVZkcsV0FWZSxHQVU2QkksU0FWN0IsQ0FVZkosV0FWZTtBQUFBLE1BVUZDLFVBVkUsR0FVNkJHLFNBVjdCLENBVUZILFVBVkU7QUFBQSxNQVVVQyxPQVZWLEdBVTZCRSxTQVY3QixDQVVVRixPQVZWO0FBQUEsTUFVbUJDLEtBVm5CLEdBVTZCQyxTQVY3QixDQVVtQkQsS0FWbkI7QUFXcEMsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBakJEOztHQUFNWCxhOztLQUFBQSxhO0FBbUJTLHFFQUFBYyw4REFBVSxDQUFDZCxhQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvcGFzc3dvcmQvcmVzZXQvW3Rva2VuXS4wODM5ZGQ0NDY5OTY2NzRiMmNhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIlxyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCJcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZy5qc1wiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuXHJcbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS50b2tlbilcclxuICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gICAgbmV3UGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0OiBcIlJlc2V0IFBhc3N3b3JkXCIsXHJcbiAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgfSlcclxuICBjb25zdCB7IG5hbWUsIHRva2VuLCBuZXdQYXNzd29yZCwgYnV0dG9uVGV4dCwgc3VjY2VzcywgZXJyb3IgfSA9IHVzZXJTdGF0ZVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICBSZXNldCBQYXNzd29yZFxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihSZXNldFBhc3N3b3JkKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9