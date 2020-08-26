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
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
      columnNumber: 11
    }
  }, "Hey, ", name, ", make it formidable!"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-success",
    htmlFor: "newPassword",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 103,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "btn btn-outline-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, buttonText))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzeCJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJuZXdQYXNzd29yZCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZWNvZGVkVXNlckRhdGEiLCJqd3QiLCJkZWNvZGUiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHV0IiwiQVBJIiwicmVzZXRQYXNzd29yZExpbmsiLCJyZXNwb25zZSIsImVtYWlsIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb2xvciIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxLQUF6Qjs7QUFEb0Msa0JBRUZDLHNEQUFRLENBQUM7QUFDekNDLFFBQUksRUFBRSxFQURtQztBQUV6Q0YsU0FBSyxFQUFFLEVBRmtDO0FBR3pDRyxlQUFXLEVBQUUsRUFINEI7QUFJekNDLGNBQVUsRUFBRSxlQUo2QjtB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VjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyx3QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Q0MsVUFBNUMsQ0FERixDQWZGLENBTEYsQ0FERixDQURGLEVBNEJFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixDQURGO0FBZ0NELENBaEhEOztHQUFNVCxhOztLQUFBQSxhO0FBa0hTLHFFQUFBMEMsOERBQVUsQ0FBQzFDLGFBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmVhMDQzYjkwNjFhOWU1ZDliYWNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnLmpzXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5cclxuY29uc3QgUmVzZXRQYXNzd29yZCA9ICh7IHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LnRva2VuKVxyXG4gIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgICBuZXdQYXNzd29yZDogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiU2F2ZSBQYXNzd29yZFwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pXHJcbiAgY29uc3QgeyBuYW1lLCB0b2tlbiwgbmV3UGFzc3dvcmQsIGJ1dHRvblRleHQsIHN1Y2Nlc3MsIGVycm9yIH0gPSB1c2VyU3RhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRlY29kZWRVc2VyRGF0YSA9IGp3dC5kZWNvZGUocm91dGVyLnF1ZXJ5LnRva2VuKVxyXG4gICAgaWYgKGRlY29kZWRVc2VyRGF0YSkge1xyXG4gICAgICBzZXRVc2VyU3RhdGUoe1xyXG4gICAgICAgIC4uLnVzZXJTdGF0ZSxcclxuICAgICAgICBuYW1lOiBkZWNvZGVkVXNlckRhdGEubmFtZSxcclxuICAgICAgICB0b2tlbjogcm91dGVyLnF1ZXJ5LnRva2VuLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAge1xyXG4gICAgICBzdWNjZXNzICYmXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtzdWNjZXNzfWAsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHtcclxuICAgICAgZXJyb3IgJiZcclxuICAgICAgICB0b2FzdC5lcnJvcihgJHtlcnJvcn1gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW3N1Y2Nlc3MsIGVycm9yXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRVc2VyU3RhdGUoeyAuLi51c2VyU3RhdGUsIG5ld1Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldFVzZXJTdGF0ZSh7IC4uLnVzZXJTdGF0ZSwgYnV0dG9uVGV4dDogXCJTZW5kaW5nLi4uXCIgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke0FQSX0vcmVzZXQtcGFzc3dvcmRgLCB7XHJcbiAgICAgICAgcmVzZXRQYXNzd29yZExpbms6IHRva2VuLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICBzZXRVc2VyU3RhdGUoe1xyXG4gICAgICAgIC4uLnVzZXJTdGF0ZSxcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBidXR0b25UZXh0OiBcIkNoZWNrIEVtYWlsXCIsXHJcbiAgICAgICAgc3VjY2VzczogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIHNldFVzZXJTdGF0ZSh7XHJcbiAgICAgICAgLi4udXNlclN0YXRlLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiVHJ5IEFnYWluXCIsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLmVycm9yLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19PlxyXG4gICAgICAgICAgICBIZXksIHtuYW1lfSwgbWFrZSBpdCBmb3JtaWRhYmxlIVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LXN1Y2Nlc3MnIGh0bWxGb3I9J25ld1Bhc3N3b3JkJz5cclxuICAgICAgICAgICAgICAgIFlvdXIgbmV3IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmV3UGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdCZXR0ZXIgYmUgaGFyZC10by1wcmVkaWN0IG51bWJlcnMsIGxldHRlcnMgYW5kIHN5bWJvbHMgY29tYm8nXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWRhbmdlcic+e2J1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUmVzZXRQYXNzd29yZClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==