webpackHotUpdate_N_E("pages/auth/password/reset/[token]",{

/***/ "./pages/auth/password/reset/[token].jsx":
/*!***********************************************!*\
  !*** ./pages/auth/password/reset/[token].jsx ***!
  \***********************************************/
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
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config.js */ "./config.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.jsx");




var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\auth\\password\\reset\\[token].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ResetPassword = function ResetPassword(_ref) {
  _s();

  var router = _ref.router;
  console.log(router.query.token);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Save Password",
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var decodedUserData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default.a.decode(router.query.token);

    if (decodedUserData) {
      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        name: decodedUserData.name,
        token: router.query.token
      }));
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    {
      success && react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success("".concat(success), {
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
      error && react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("".concat(error), {
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

  var handleChange = function handleChange(e) {
    setUserState(_objectSpread(_objectSpread({}, userState), {}, {
      newPassword: e.target.value
    }));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                buttonText: "Sending..."
              }));
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("".concat(_config_js__WEBPACK_IMPORTED_MODULE_8__["API"], "/reset-password"), {
                resetPasswordLink: token,
                newPassword: newPassword
              });

            case 5:
              response = _context.sent;
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                buttonText: "Password Saved",
                success: response.data.message
              }));
              console.log(response);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                buttonText: "Try Again",
                error: _context.t0.response.data.error
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-center",
    style: {
      color: "blue"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "Hey, ", name, ", make it formidable!"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-success",
    htmlFor: "newPassword",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "Your new password"), __jsx("input", {
    type: "password",
    name: "newPassword",
    className: "form-control",
    placeholder: "Better be hard-to-predict numbers, letters and symbols combo",
    onChange: handleChange,
    value: newPassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "btn btn-outline-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, buttonText))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }));
};

_s(ResetPassword, "4FAPCgY5LZt5k6mA624Y7V6ULFI=");

_c = ResetPassword;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ResetPassword));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzeCJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJuZXdQYXNzd29yZCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZWNvZGVkVXNlckRhdGEiLCJqd3QiLCJkZWNvZGUiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHV0IiwiQVBJIiwicmVzZXRQYXNzd29yZExpbmsiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiY29sb3IiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsS0FBekI7O0FBRG9DLGtCQUVGQyxzREFBUSxDQUFDO0FBQ3pDQyxRQUFJLEVBQUUsRUFEbUM7QUFFekNGLFNBQUssRUFBRSxFQUZrQztBQUd6Q0csZUFBVyxFQUFFLEVBSDRCO0FBSXpDQyxjQUFVLEVBQUUsZUFKNkI7QUFLekNDLFdB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsd0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENDLFVBQTVDLENBREYsQ0FmRixDQUxGLENBREYsQ0FERixFQTRCRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsQ0FERjtBQWdDRCxDQTlHRDs7R0FBTVQsYTs7S0FBQUEsYTtBQWdIUyxxRUFBQXlDLDhEQUFVLENBQUN6QyxhQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvcGFzc3dvcmQvcmVzZXQvW3Rva2VuXS5kMTI3N2JhMTI2NTFkYjFiMDNmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIlxyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCJcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZy5qc1wiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuXHJcbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS50b2tlbilcclxuICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gICAgbmV3UGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0OiBcIlNhdmUgUGFzc3dvcmRcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICB9KVxyXG4gIGNvbnN0IHsgbmFtZSwgdG9rZW4sIG5ld1Bhc3N3b3JkLCBidXR0b25UZXh0LCBzdWNjZXNzLCBlcnJvciB9ID0gdXNlclN0YXRlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkZWNvZGVkVXNlckRhdGEgPSBqd3QuZGVjb2RlKHJvdXRlci5xdWVyeS50b2tlbilcclxuICAgIGlmIChkZWNvZGVkVXNlckRhdGEpIHtcclxuICAgICAgc2V0VXNlclN0YXRlKHtcclxuICAgICAgICAuLi51c2VyU3RhdGUsXHJcbiAgICAgICAgbmFtZTogZGVjb2RlZFVzZXJEYXRhLm5hbWUsXHJcbiAgICAgICAgdG9rZW46IHJvdXRlci5xdWVyeS50b2tlbixcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHtcclxuICAgICAgc3VjY2VzcyAmJlxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7c3VjY2Vzc31gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB7XHJcbiAgICAgIGVycm9yICYmXHJcbiAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZXJyb3J9YCwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtzdWNjZXNzLCBlcnJvcl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBuZXdQYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRVc2VyU3RhdGUoeyAuLi51c2VyU3RhdGUsIGJ1dHRvblRleHQ6IFwiU2VuZGluZy4uLlwiIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChgJHtBUEl9L3Jlc2V0LXBhc3N3b3JkYCwge1xyXG4gICAgICAgIHJlc2V0UGFzc3dvcmRMaW5rOiB0b2tlbixcclxuICAgICAgICBuZXdQYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICAgc2V0VXNlclN0YXRlKHtcclxuICAgICAgICAuLi51c2VyU3RhdGUsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJQYXNzd29yZCBTYXZlZFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICBzZXRVc2VyU3RhdGUoe1xyXG4gICAgICAgIC4uLnVzZXJTdGF0ZSxcclxuICAgICAgICBidXR0b25UZXh0OiBcIlRyeSBBZ2FpblwiLFxyXG4gICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcixcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgb2Zmc2V0LW1kLTMnPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5cclxuICAgICAgICAgICAgSGV5LCB7bmFtZX0sIG1ha2UgaXQgZm9ybWlkYWJsZSFcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJyBodG1sRm9yPSduZXdQYXNzd29yZCc+XHJcbiAgICAgICAgICAgICAgICBZb3VyIG5ldyBwYXNzd29yZFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J25ld1Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQmV0dGVyIGJlIGhhcmQtdG8tcHJlZGljdCBudW1iZXJzLCBsZXR0ZXJzIGFuZCBzeW1ib2xzIGNvbWJvJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1kYW5nZXInPntidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFJlc2V0UGFzc3dvcmQpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=