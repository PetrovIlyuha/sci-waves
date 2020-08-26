webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login.module.css */ "./pages/login.module.css");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);




var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\login.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Login"
  }),
      formState = _useState[0],
      setFormState = _useState[1];

  var email = formState.email,
      password = formState.password,
      error = formState.error,
      success = formState.success,
      buttonText = formState.buttonText;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    {
      success && react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("".concat(success), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
    {
      error && react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error("".concat(error), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  }, [success, error]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_10__["isUserAuthenticated"])() && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/");
  }, []);

  var handleFormInputChange = function handleFormInputChange(name) {
    return function (e) {
      var _objectSpread2;

      setFormState(_objectSpread(_objectSpread({}, formState), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "success", ""), _objectSpread2)));
    };
  };

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                buttonText: "Logging in!"
              }));
              e.preventDefault();
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(_config_js__WEBPACK_IMPORTED_MODULE_7__["API"], "/login"), {
                email: email,
                password: password
              });

            case 5:
              response = _context.sent;
              Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_10__["authenticateUser"])(response, function () {
                return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/");
              });
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                success: "You Are Logged In",
                buttonText: "Welcome!"
              }));
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                buttonText: "Login",
                error: _context.t0.response.data.error
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function handleFormSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loginForm = function loginForm() {
    return __jsx("form", {
      onSubmit: handleFormSubmit,
      className: "".concat(_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.loginForm, " col-md-6 col-lg-12 mt-5"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, "Login Here"), __jsx("input", {
      value: email,
      onChange: handleFormInputChange("email"),
      type: "email",
      className: "form-control",
      name: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }), __jsx("input", {
      value: password,
      onChange: handleFormInputChange("password"),
      type: "password",
      className: "form-control",
      name: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }), __jsx("button", {
      className: "btn mx-auto mt-4 btn-outline-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }, buttonText));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.loginLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, loginForm(), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    to: "auth/password/forgot",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, " ", __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Forgot Password?"))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }));
};

_s(Login, "ouluF0i9YGwcpgxS0wqORPTUB0Y=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsImlzVXNlckF1dGhlbnRpY2F0ZWQiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSSIsInJlc3BvbnNlIiwiYXV0aGVudGljYXRlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibG9naW5Gb3JtIiwiY2xhc3NlcyIsImxvZ2luTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDO0FBQ3pDQyxTQUFLLEVBQUUsRUFEa0M7QUFFekNDLFlBQVEsRUFBRSxFQUYrQjtBQUd6Q0MsU0FBSyxFQUFFLEVBSGtDO0FBSXpDQyxXQUFPLEVBQUUsRUFKZ0M7QUFLekNDLGNBQVUsRUFBRTtBQUw2QixHQUFELENBRHhCO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0FDLFlBREE7O0FBQUEsTUFTVk4sS0FUVSxHQVNzQ0ssU0FUdEMsQ0FTVkwsS0FUVTtBQUFB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QUEsSztBQXFIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNTM5NzJkMGY1OTNiOGRiOThlNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCJcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZy5qc1wiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbG9naW4ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIsIGlzVXNlckF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0OiBcIkxvZ2luXCIsXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0IH0gPSBmb3JtU3RhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHtcclxuICAgICAgc3VjY2VzcyAmJlxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7c3VjY2Vzc31gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB7XHJcbiAgICAgIGVycm9yICYmXHJcbiAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZXJyb3J9YCwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtzdWNjZXNzLCBlcnJvcl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICBzZXRGb3JtU3RhdGUoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIHNldEZvcm1TdGF0ZSh7IC4uLmZvcm1TdGF0ZSwgYnV0dG9uVGV4dDogXCJMb2dnaW5nIGluIVwiIH0pXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUEl9L2xvZ2luYCwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICBhdXRoZW50aWNhdGVVc2VyKHJlc3BvbnNlLCAoKSA9PiBSb3V0ZXIucHVzaChcIi9cIikpXHJcbiAgICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IFwiWW91IEFyZSBMb2dnZWQgSW5cIixcclxuICAgICAgICBidXR0b25UZXh0OiBcIldlbGNvbWUhXCIsXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJMb2dpblwiLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMubG9naW5Gb3JtfSBjb2wtbWQtNiBjb2wtbGctMTIgbXQtNWB9PlxyXG4gICAgICAgIDxoMj5Mb2dpbiBIZXJlPC9oMj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoXCJlbWFpbFwiKX1cclxuICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZShcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBteC1hdXRvIG10LTQgYnRuLW91dGxpbmUtd2FybmluZyc+XHJcbiAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHsvKiA8TG9naW5CYWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGFwZV9sb2dpbn0gLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luTGF5b3V0fT5cclxuICAgICAgICB7bG9naW5Gb3JtKCl9XHJcbiAgICAgICAgPExpbmsgdG89J2F1dGgvcGFzc3dvcmQvZm9yZ290Jz5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=