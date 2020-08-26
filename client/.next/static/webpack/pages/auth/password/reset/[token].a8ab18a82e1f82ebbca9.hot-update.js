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
  console.log(token);
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
                buttonText: "Go to Login",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC9bdG9rZW5dLmpzeCJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkIiwicm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwidG9rZW4iLCJuZXdQYXNzd29yZCIsImJ1dHRvblRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZWNvZGVkVXNlckRhdGEiLCJqd3QiLCJkZWNvZGUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHV0IiwiQVBJIiwicmVzZXRQYXNzd29yZExpbmsiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiY29sb3IiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUM7QUFDekNDLFFBQUksRUFBRSxFQURtQztBQUV6Q0MsU0FBSyxFQUFFLEVBRmtDO0FBR3pDQyxlQUFXLEVBQUUsRUFINEI7QUFJekNDLGNBQVUsRUFBRSxlQUo2QjtBQUt6Q0MsV0FBTyxFQUFFLEVBTGdDO0FBTXpDQyxTQUFLLEVBQUU7QUFOa0MsR0FBRCxDQUROO0FBQUEsTUFDN0JD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QTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsd0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENDLFVBQTVDLENBREYsQ0FmRixDQUxGLENBREYsQ0FERixFQTRCRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsQ0FERjtBQWdDRCxDQTlHRDs7R0FBTU4sYTs7S0FBQUEsYTtBQWdIUyxxRUFBQXlDLDhEQUFVLENBQUN6QyxhQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvcGFzc3dvcmQvcmVzZXQvW3Rva2VuXS5hOGFiMThhODJlMWY4MmViYmNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIlxyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCJcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZy5qc1wiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuXHJcbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgICBuZXdQYXNzd29yZDogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiU2F2ZSBQYXNzd29yZFwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pXHJcbiAgY29uc3QgeyBuYW1lLCB0b2tlbiwgbmV3UGFzc3dvcmQsIGJ1dHRvblRleHQsIHN1Y2Nlc3MsIGVycm9yIH0gPSB1c2VyU3RhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRlY29kZWRVc2VyRGF0YSA9IGp3dC5kZWNvZGUocm91dGVyLnF1ZXJ5LnRva2VuKVxyXG4gICAgaWYgKGRlY29kZWRVc2VyRGF0YSkge1xyXG4gICAgICBzZXRVc2VyU3RhdGUoe1xyXG4gICAgICAgIC4uLnVzZXJTdGF0ZSxcclxuICAgICAgICBuYW1lOiBkZWNvZGVkVXNlckRhdGEubmFtZSxcclxuICAgICAgICB0b2tlbjogcm91dGVyLnF1ZXJ5LnRva2VuLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnNvbGUubG9nKHRva2VuKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAge1xyXG4gICAgICBzdWNjZXNzICYmXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtzdWNjZXNzfWAsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHtcclxuICAgICAgZXJyb3IgJiZcclxuICAgICAgICB0b2FzdC5lcnJvcihgJHtlcnJvcn1gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW3N1Y2Nlc3MsIGVycm9yXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRVc2VyU3RhdGUoeyAuLi51c2VyU3RhdGUsIG5ld1Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldFVzZXJTdGF0ZSh7IC4uLnVzZXJTdGF0ZSwgYnV0dG9uVGV4dDogXCJTZW5kaW5nLi4uXCIgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke0FQSX0vcmVzZXQtcGFzc3dvcmRgLCB7XHJcbiAgICAgICAgcmVzZXRQYXNzd29yZExpbms6IHRva2VuLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICBzZXRVc2VyU3RhdGUoe1xyXG4gICAgICAgIC4uLnVzZXJTdGF0ZSxcclxuICAgICAgICBidXR0b25UZXh0OiBcIlBhc3N3b3JkIFNhdmVkXCIsXHJcbiAgICAgICAgc3VjY2VzczogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIHNldFVzZXJTdGF0ZSh7XHJcbiAgICAgICAgLi4udXNlclN0YXRlLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiR28gdG8gTG9naW5cIixcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG9mZnNldC1tZC0zJz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX0+XHJcbiAgICAgICAgICAgIEhleSwge25hbWV9LCBtYWtlIGl0IGZvcm1pZGFibGUhXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RleHQtc3VjY2VzcycgaHRtbEZvcj0nbmV3UGFzc3dvcmQnPlxyXG4gICAgICAgICAgICAgICAgWW91ciBuZXcgcGFzc3dvcmRcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSduZXdQYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0JldHRlciBiZSBoYXJkLXRvLXByZWRpY3QgbnVtYmVycywgbGV0dGVycyBhbmQgc3ltYm9scyBjb21ibydcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtZGFuZ2VyJz57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihSZXNldFBhc3N3b3JkKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9