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
    href: "auth/password/forgot",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "text-danger float-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "Forgot Password?"))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsImlzVXNlckF1dGhlbnRpY2F0ZWQiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSSIsInJlc3BvbnNlIiwiYXV0aGVudGljYXRlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibG9naW5Gb3JtIiwiY2xhc3NlcyIsImxvZ2luTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDO0FBQ3pDQyxTQUFLLEVBQUUsRUFEa0M7QUFFekNDLFlBQVEsRUFBRSxFQUYrQjtBQUd6Q0MsU0FBSyxFQUFFLEVBSGtDO0FBSXpDQyxXQUFPLEVBQUUsRUFKZ0M7QUFLekNDLGNBQVUsRUFBRTtBQUw2QixHQUFELENBRHhCO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0FDLFlBREE7O0FBQUEsTUFTVk4sS0FUVSxHQVNzQ0ssU0FUdEMsQ0FTVkwsS0FUVTtBQUFB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QU1yQyxLOztLQUFBQSxLO0FBb0hTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi44YWFhMjJiYTExYWI0ODQzNDlhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vY29uZmlnLmpzXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciwgaXNVc2VyQXV0aGVudGljYXRlZCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiTG9naW5cIixcclxuICB9KVxyXG5cclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIHN1Y2Nlc3MsIGJ1dHRvblRleHQgfSA9IGZvcm1TdGF0ZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAge1xyXG4gICAgICBzdWNjZXNzICYmXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtzdWNjZXNzfWAsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHtcclxuICAgICAgZXJyb3IgJiZcclxuICAgICAgICB0b2FzdC5lcnJvcihgJHtlcnJvcn1gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW3N1Y2Nlc3MsIGVycm9yXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzVXNlckF1dGhlbnRpY2F0ZWQoKSAmJiBSb3V0ZXIucHVzaChcIi9cIilcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybUlucHV0Q2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgc2V0Rm9ybVN0YXRlKHsgLi4uZm9ybVN0YXRlLCBidXR0b25UZXh0OiBcIkxvZ2dpbmcgaW4hXCIgfSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSX0vbG9naW5gLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIGF1dGhlbnRpY2F0ZVVzZXIocmVzcG9uc2UsICgpID0+IFJvdXRlci5wdXNoKFwiL1wiKSlcclxuICAgICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgICAgc3VjY2VzczogXCJZb3UgQXJlIExvZ2dlZCBJblwiLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiV2VsY29tZSFcIixcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICBzZXRGb3JtU3RhdGUoe1xyXG4gICAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgICBidXR0b25UZXh0OiBcIkxvZ2luXCIsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5sb2dpbkZvcm19IGNvbC1tZC02IGNvbC1sZy0xMiBtdC01YH0+XHJcbiAgICAgICAgPGgyPkxvZ2luIEhlcmU8L2gyPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZShcImVtYWlsXCIpfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUlucHV0Q2hhbmdlKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIG14LWF1dG8gbXQtNCBidG4tb3V0bGluZS13YXJuaW5nJz5cclxuICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgey8qIDxMb2dpbkJhY2sgY2xhc3NOYW1lPXtjbGFzc2VzLnNoYXBlX2xvZ2lufSAvPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5MYXlvdXR9PlxyXG4gICAgICAgIHtsb2dpbkZvcm0oKX1cclxuICAgICAgICA8TGluayBocmVmPSdhdXRoL3Bhc3N3b3JkL2ZvcmdvdCc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtZGFuZ2VyIGZsb2F0LXJpZ2h0Jz5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9