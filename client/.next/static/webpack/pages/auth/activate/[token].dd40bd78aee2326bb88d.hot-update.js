webpackHotUpdate_N_E("pages/auth/activate/[token]",{

/***/ "./pages/auth/activate/[token].js":
/*!****************************************!*\
  !*** ./pages/auth/activate/[token].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/backgrounds/activationBg */ "./components/backgrounds/activationBg.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activate.module.css */ "./pages/auth/activate/activate.module.css");
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_activate_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);




var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\auth\\activate\\[token].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ActivateAccount = function ActivateAccount(_ref) {
  _s();

  var _useState2;

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])((_useState2 = {
    name: "",
    token: "",
    success: "",
    buttonText: "Activate Account"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState2, "success", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState2, "error", ""), _useState2)),
      userState = _useState[0],
      setUserState = _useState[1];

  var name = userState.name,
      token = userState.token,
      buttonText = userState.buttonText,
      success = userState.success,
      error = userState.error;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var token = router.query.token;

    if (token) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.decode(token),
          _name = _jwt$decode.name;

      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        name: _name,
        token: token
      }));
    }
  }, [router]);

  var submitActivation = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(e);
              console.log(token);
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                buttonText: "Activation"
              }));
              _context.prev = 4;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_7__["API"], "/register/activate"), {
                token: token
              });

            case 7:
              response = _context.sent;
              console.log("token was sent");
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                name: "",
                token: "",
                success: response.data.message,
                buttonText: "Activated"
              }));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                buttonText: "Something is wrong...",
                // error: error.response.data.error,
                error: _context.t0
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12]]);
    }));

    return function submitActivation(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.activateBackground,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.activatePageLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 offset-md-2 ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.activationForm),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Hello, ", name, ". Activate Your Account:"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), success && react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].success("".concat(success), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }), error && react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].error("".concat(error), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  }), __jsx("button", {
    onClick: submitActivation,
    className: "btn btn-block ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.activationBtn),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, buttonText)))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_9__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }));
};

_s(ActivateAccount, "xqrmhdXcDH9hJjbPYrX6KxYLlAg=");

_c = ActivateAccount;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(ActivateAccount));

var _c, _c2;

$RefreshReg$(_c, "ActivateAccount");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInF1ZXJ5Iiwiand0IiwiZGVjb2RlIiwic3VibWl0QWN0aXZhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJBUEkiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwic3R5bGVzIiwiYWN0aXZhdGVCYWNrZ3JvdW5kIiwiYWN0aXZhdGVQYWdlTGF5b3V0IiwiYWN0aXZhdGlvbkZvcm0iLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJhY3RpdmF0aW9uQnRuIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNKQyxzREFBUTtBQUN4Q0MsUUFBSSxFQUFFLEVBRGtDO0FBRXhDQyxTQUFLLEVBQUUsRUFGaUM7QUFHeENDLFdBQU8sRUFBRSxFQUgrQjtBQUl4Q0MsY0FBVSxFQUFFO0FBSjRCLHNIQUsvQixFQUwrQixrSEFNakMsRUFOaUMsZUFESjtBQUFBLE1BQy9CQyxTQUQrQjtBQUFBLE1BQ3BCQyxZ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QUpZO0FBSzFCQyxnQkFBWSxFQUFFLElBTFk7QUFNMUJDLGFBQVMsRUFBRSxJQU5lO0FBTzFCQyxZQUFRLEVBQUVDO0FBUGdCLEdBQTVCLENBSkosRUFhRzVCLEtBQUssSUFDSm9CLG9EQUFLLENBQUNwQixLQUFOLFdBQWVBLEtBQWYsR0FBd0I7QUFDdEJxQixZQUFRLEVBQUUsV0FEWTtBQUV0QkMsYUFBUyxFQUFFLElBRlc7QUFHdEJDLG1CQUFlLEVBQUUsS0FISztBQUl0QkMsZ0JBQVksRUFBRSxJQUpRO0FBS3RCQyxnQkFBWSxFQUFFLElBTFE7QUFNdEJDLGFBQVMsRUFBRTtBQU5XLEdBQXhCLENBZEosRUFzQkU7QUFDRSxXQUFPLEVBQUVyQixnQkFEWDtBQUVFLGFBQVMsMEJBQW1CVywyREFBTSxDQUFDYSxhQUExQixDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR2hDLFVBSkgsQ0F0QkYsQ0FERixDQURGLENBRkYsRUFtQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNGLENBREY7QUF1Q0QsQ0FyRkQ7O0dBQU1OLGU7O0tBQUFBLGU7QUF1RlMscUVBQUF1QywrREFBVSxDQUFDdkMsZUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjdGl2YXRlL1t0b2tlbl0uZGQ0MGJkNzhhZWUyMzI2YmI4OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBBY3RpdmF0ZUJnIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2JhY2tncm91bmRzL2FjdGl2YXRpb25CZ1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWN0aXZhdGUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEFjdGl2YXRlQWNjb3VudCA9ICh7IHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB0b2tlbjogXCJcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0OiBcIkFjdGl2YXRlIEFjY291bnRcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IG5hbWUsIHRva2VuLCBidXR0b25UZXh0LCBzdWNjZXNzLCBlcnJvciB9ID0gdXNlclN0YXRlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gcm91dGVyLnF1ZXJ5LnRva2VuO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gand0LmRlY29kZSh0b2tlbik7XHJcbiAgICAgIHNldFVzZXJTdGF0ZSh7IC4uLnVzZXJTdGF0ZSwgbmFtZSwgdG9rZW4gfSk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICBjb25zdCBzdWJtaXRBY3RpdmF0aW9uID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBidXR0b25UZXh0OiBcIkFjdGl2YXRpb25cIiB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUEl9L3JlZ2lzdGVyL2FjdGl2YXRlYCwge1xyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiB3YXMgc2VudFwiKTtcclxuICAgICAgc2V0VXNlclN0YXRlKHtcclxuICAgICAgICAuLi51c2VyU3RhdGUsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICBzdWNjZXNzOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJBY3RpdmF0ZWRcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0VXNlclN0YXRlKHtcclxuICAgICAgICAuLi51c2VyU3RhdGUsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJTb21ldGhpbmcgaXMgd3JvbmcuLi5cIixcclxuICAgICAgICAvLyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcixcclxuICAgICAgICBlcnJvcjogZXJyLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEFjdGl2YXRlQmcgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZhdGVCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZhdGVQYWdlTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTggb2Zmc2V0LW1kLTIgJHtzdHlsZXMuYWN0aXZhdGlvbkZvcm19YH0+XHJcbiAgICAgICAgICAgIDxoMz5IZWxsbywge25hbWV9LiBBY3RpdmF0ZSBZb3VyIEFjY291bnQ6PC9oMz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzICYmXHJcbiAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtzdWNjZXNzfWAsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHtlcnJvciAmJlxyXG4gICAgICAgICAgICAgIHRvYXN0LmVycm9yKGAke2Vycm9yfWAsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEFjdGl2YXRpb259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1ibG9jayAke3N0eWxlcy5hY3RpdmF0aW9uQnRufWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZhdGVBY2NvdW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==