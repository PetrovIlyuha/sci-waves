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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(router.query.token),
        name = _jwt$decode.name; // if (name) {
    //   setUserState({ ...userState, name: name })
    // }


    console.log(name);
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "Reset Password", __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
};

_s(ResetPassword, "ygnsOc0P75eIBY0RWKLHMsHeeko=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzeCJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJuZXdQYXNzd29yZCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJ1c2VFZmZlY3QiLCJqd3QiLCJkZWNvZGUiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxLQUF6Qjs7QUFEb0Msa0JBRUZDLHNEQUFRLENBQUM7QUFDekNDLFFBQUksRUFBRSxFQURtQztBQUV6Q0YsU0FBSyxFQUFFLEVBRmtDO0FBR3pDRyxlQUFXLEVBQUUsRUFINEI7QUFJekNDLGNBQVUsRUFBRSxnQkFKNkI7QUFLekNDLFdBQU8sRUFBRSxFQUxnQztBQU16Q0MsU0FBSyxFQUFFO0FBTmtDLEdBQUQsQ0FGTjtBQUFBLE1BRTdCQyxTQUY2QjtBQUFBLE1BRWxCQyxZQUZrQjs7QUFBQSxNQVU1Qk4sSUFWNEIsR0FVNkJLLFNBVjdCLENBVTVCTCxJQVY0QjtBQUFBLE1BVXRCRixLQVZzQixHQVU2Qk8sU0FWN0IsQ0FVdEJQLEtBVnNCO0FBQUEsTUFVZkcsV0FWZSxHQVU2QkksU0FWN0IsQ0FVZkosV0FWZTtBQUFBLE1BVUZDLFVBVkUsR0FVNkJHLFNBVjdCLENBVUZILFVBVkU7QUFBQSxNQVVVQyxPQVZWLEdBVTZCRSxTQVY3QixDQVVVRixPQVZWO0FBQUEsTUFVbUJDLEtBVm5CLEdBVTZCQyxTQVY3QixDQVVtQkQsS0FWbkI7QUFZcENHLHlEQUFTLENBQUMsWUFBTTtBQUFBLHNCQUNHQyxtREFBRyxDQUFDQyxNQUFKLENBQVdmLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxLQUF4QixDQURIO0FBQUEsUUFDTkUsSUFETSxlQUNOQSxJQURNLEVBRWQ7QUFDQTtBQUNBOzs7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLElBQVo7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBMUJEOztHQUFNUCxhOztLQUFBQSxhO0FBNEJTLHFFQUFBaUIsOERBQVUsQ0FBQ2pCLGFBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmQyZTg0N2IzNzhmM2IzNDMwYWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnLmpzXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5cclxuY29uc3QgUmVzZXRQYXNzd29yZCA9ICh7IHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LnRva2VuKVxyXG4gIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgICBuZXdQYXNzd29yZDogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiUmVzZXQgUGFzc3dvcmRcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICB9KVxyXG4gIGNvbnN0IHsgbmFtZSwgdG9rZW4sIG5ld1Bhc3N3b3JkLCBidXR0b25UZXh0LCBzdWNjZXNzLCBlcnJvciB9ID0gdXNlclN0YXRlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IGp3dC5kZWNvZGUocm91dGVyLnF1ZXJ5LnRva2VuKVxyXG4gICAgLy8gaWYgKG5hbWUpIHtcclxuICAgIC8vICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBuYW1lOiBuYW1lIH0pXHJcbiAgICAvLyB9XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgUmVzZXQgUGFzc3dvcmRcclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUmVzZXRQYXNzd29yZClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==