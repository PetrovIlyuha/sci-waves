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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var decodedUserData = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default.a.decode(router.query.token);

    if (decodedUserData) {
      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        name: decodedUserData.name
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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("".concat(_config_js__WEBPACK_IMPORTED_MODULE_8__["API"], "/forgot-password"), {
                email: email
              });

            case 5:
              response = _context.sent;
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                email: "",
                buttonText: "Check Email",
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
                email: "",
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
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-center",
    style: {
      color: "blue"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Reset Your Password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-success",
    htmlFor: "newPassword",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 96,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "btn btn-outline-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, buttonText))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }));
};

_s(ResetPassword, "6kuoyL87Uo5Cw7Kl+/BTLhR0ulg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzeCJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJuZXdQYXNzd29yZCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZWNvZGVkVXNlckRhdGEiLCJqd3QiLCJkZWNvZGUiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHV0IiwiQVBJIiwiZW1haWwiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiY29sb3IiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsS0FBekI7O0FBRG9DLGtCQUVGQyxzREFBUSxDQUFDO0FBQ3pDQyxRQUFJLEVBQUUsRUFEbUM7QUFFekNGLFNBQUssRUFBRSxFQUZrQztBQUd6Q0csZUFBVyxFQUFFLEVBSDRCO0FBSXpDQyxjQUFVLEVBQUUsZ0JBSjZCO0FBS3pDQyxXQUFPLEVBQUUsRUFM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LHdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDQyxVQUE1QyxDQURGLENBZkYsQ0FMRixDQURGLENBREYsRUE0QkUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBREY7QUFnQ0QsQ0F6R0Q7O0dBQU1ULGE7O0tBQUFBLGE7QUEyR1MscUVBQUF5Qyw4REFBVSxDQUFDekMsYUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3Bhc3N3b3JkL3Jlc2V0L1t0b2tlbl0uYzJjY2M5OTcxY2U3YTIxODIxZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCJcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWcuanNcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiXHJcblxyXG5jb25zdCBSZXNldFBhc3N3b3JkID0gKHsgcm91dGVyIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkudG9rZW4pXHJcbiAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB0b2tlbjogXCJcIixcclxuICAgIG5ld1Bhc3N3b3JkOiBcIlwiLFxyXG4gICAgYnV0dG9uVGV4dDogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pXHJcbiAgY29uc3QgeyBuYW1lLCB0b2tlbiwgbmV3UGFzc3dvcmQsIGJ1dHRvblRleHQsIHN1Y2Nlc3MsIGVycm9yIH0gPSB1c2VyU3RhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRlY29kZWRVc2VyRGF0YSA9IGp3dC5kZWNvZGUocm91dGVyLnF1ZXJ5LnRva2VuKVxyXG4gICAgaWYgKGRlY29kZWRVc2VyRGF0YSkge1xyXG4gICAgICBzZXRVc2VyU3RhdGUoeyAuLi51c2VyU3RhdGUsIG5hbWU6IGRlY29kZWRVc2VyRGF0YS5uYW1lIH0pXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB7XHJcbiAgICAgIHN1Y2Nlc3MgJiZcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKGAke3N1Y2Nlc3N9YCwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAge1xyXG4gICAgICBlcnJvciAmJlxyXG4gICAgICAgIHRvYXN0LmVycm9yKGAke2Vycm9yfWAsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbc3VjY2VzcywgZXJyb3JdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFVzZXJTdGF0ZSh7IC4uLnVzZXJTdGF0ZSwgbmV3UGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBidXR0b25UZXh0OiBcIlNlbmRpbmcuLi5cIiB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYCR7QVBJfS9mb3Jnb3QtcGFzc3dvcmRgLCB7IGVtYWlsIH0pXHJcbiAgICAgIHNldFVzZXJTdGF0ZSh7XHJcbiAgICAgICAgLi4udXNlclN0YXRlLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiQ2hlY2sgRW1haWxcIixcclxuICAgICAgICBzdWNjZXNzOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgc2V0VXNlclN0YXRlKHtcclxuICAgICAgICAuLi51c2VyU3RhdGUsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJUcnkgQWdhaW5cIixcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG9mZnNldC1tZC0zJz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX0+XHJcbiAgICAgICAgICAgIFJlc2V0IFlvdXIgUGFzc3dvcmRcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJyBodG1sRm9yPSduZXdQYXNzd29yZCc+XHJcbiAgICAgICAgICAgICAgICBZb3VyIG5ldyBwYXNzd29yZFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J25ld1Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQmV0dGVyIGJlIGhhcmQtdG8tcHJlZGljdCBudW1iZXJzLCBsZXR0ZXJzIGFuZCBzeW1ib2xzIGNvbWJvJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1kYW5nZXInPntidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFJlc2V0UGFzc3dvcmQpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=