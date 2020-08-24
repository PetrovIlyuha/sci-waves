webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);




var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\register.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register"
  }),
      formState = _useState[0],
      setFormState = _useState[1];

  var name = formState.name,
      email = formState.email,
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
    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["isUserAuthenticated"])() && next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/");
  }, []);

  var handleFormInputChange = function handleFormInputChange(name) {
    return function (e) {
      var _objectSpread2;

      setFormState(_objectSpread(_objectSpread({}, formState), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "success", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "buttonText", "Register"), _objectSpread2)));
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
                buttonText: "Sending!"
              }));
              e.preventDefault();
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(_config_js__WEBPACK_IMPORTED_MODULE_7__["API"], "/register"), {
                name: name,
                email: email,
                password: password
              });

            case 5:
              response = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                name: "",
                email: "",
                password: "",
                buttonText: "Submitted",
                success: response.data.message
              }));
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                error: _context.t0.response.data.error
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    return function handleFormSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var registerForm = function registerForm() {
    return __jsx("form", {
      onSubmit: handleFormSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, "Register"), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, "Username"), __jsx("input", {
      onChange: handleFormInputChange("name"),
      type: "text",
      value: name,
      id: "name",
      className: "form-control",
      placeholder: "Ironman...",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, "Email"), __jsx("input", {
      onChange: handleFormInputChange("email"),
      type: "email",
      value: email,
      id: "email",
      className: "form-control",
      placeholder: "warrior@galaxy.com",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, "Password"), __jsx("input", {
      type: "password",
      value: password,
      id: "password",
      className: "form-control",
      onChange: handleFormInputChange("password"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    }, __jsx("button", {
      className: "btn mx-auto",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, buttonText)));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "register-overlay col-md-6 col-xs-6 offset-xs-6 mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, registerForm()), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }));
};

_s(Register, "e7dpWEPzBclvZKDpW6iv7iMKI6Q=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJpc1VzZXJBdXRoZW50aWNhdGVkIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUZvcm1JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSSIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDO0FBQ3pDQyxRQUFJLEVBQUUsRUFEbUM7QUFFekNDLFNBQUssRUFBRSxFQUZrQztBQUd6Q0MsWUFBUSxFQUFFLEVBSCtCO0FBSXpDQyxTQUFLLEVBQUUsRUFKa0M7QUFLekNDLFdBQU8sRUFBRSxFQUxnQztBQU16Q0MsY0FBVSxFQUFFO0FBTjZCLEdBQUQsQ0FEckI7QUFBQSxNQUNkQyxTQURjO0FBQUEsTUFDSEMsWUFERzs7QUFBQSxNQVViUCxJQVZhLEdBVXlDTSxTQVZ6QyxDQVViTixJQVZhO0FBQUEsTUFVUEMsS0FWTyxHQVV5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QyxRQUZUO0FBR0UsUUFBRSxFQUFDLFVBSEw7QUFJRSxlQUFTLEVBQUMsY0FKWjtBQUtFLGNBQVEsRUFBRW1CLHFCQUFxQixDQUFDLFVBQUQsQ0FMakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBeEJGLEVBa0NFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsZUFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNoQixVQUFqQyxDQURGLENBbENGLENBRG1CO0FBQUEsR0FBckI7O0FBeUNBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHOEIsWUFBWSxFQURmLENBREYsRUFJRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQsQ0E1SEQ7O0dBQU1yQyxROztLQUFBQSxRO0FBOEhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4yNDhlYWM0MjA4MDJhZDY5OGIxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9jb25maWcuanNcIlxyXG5pbXBvcnQgeyBpc1VzZXJBdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0OiBcIlJlZ2lzdGVyXCIsXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0IH0gPSBmb3JtU3RhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHtcclxuICAgICAgc3VjY2VzcyAmJlxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7c3VjY2Vzc31gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB7XHJcbiAgICAgIGVycm9yICYmXHJcbiAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZXJyb3J9YCwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtzdWNjZXNzLCBlcnJvcl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBlcnJvcjogXCJcIixcclxuICAgICAgc3VjY2VzczogXCJcIixcclxuICAgICAgYnV0dG9uVGV4dDogXCJSZWdpc3RlclwiLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybVN0YXRlKHsgLi4uZm9ybVN0YXRlLCBidXR0b25UZXh0OiBcIlNlbmRpbmchXCIgfSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSX0vcmVnaXN0ZXJgLCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBidXR0b25UZXh0OiBcIlN1Ym1pdHRlZFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICBzZXRGb3JtU3RhdGUoeyAuLi5mb3JtU3RhdGUsIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cclxuICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUlucHV0Q2hhbmdlKFwibmFtZVwiKX1cclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nSXJvbm1hbi4uLidcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZShcImVtYWlsXCIpfVxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBpZD0nZW1haWwnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSd3YXJyaW9yQGdhbGF4eS5jb20nXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUlucHV0Q2hhbmdlKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIG14LWF1dG8nPntidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVnaXN0ZXItb3ZlcmxheSBjb2wtbWQtNiBjb2wteHMtNiBvZmZzZXQteHMtNiBtdC01Jz5cclxuICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==