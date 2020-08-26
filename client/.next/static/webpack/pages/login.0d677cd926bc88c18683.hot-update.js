webpackHotUpdate_N_E("pages/login",{

/***/ "./components/backgrounds/LoginBack.jsx":
false,

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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.loginLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("form", {
    onSubmit: handleFormSubmit,
    className: "".concat(_login_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.loginForm, " col-md-6 col-lg-12 mt-5"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
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
      lineNumber: 94,
      columnNumber: 11
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
      lineNumber: 101,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: "btn mx-auto mt-4 btn-outline-warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, buttonText))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsImlzVXNlckF1dGhlbnRpY2F0ZWQiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlRm9ybUlucHV0Q2hhbmdlIiwibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSSIsInJlc3BvbnNlIiwiYXV0aGVudGljYXRlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2xhc3NlcyIsImxvZ2luTGF5b3V0IiwibG9naW5Gb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsWUFBUSxFQUFFLEVBRitCO0FBR3pDQyxTQUFLLEVBQUUsRUFIa0M7QUFJekNDLFdBQU8sRUFBRSxFQUpnQztBQUt6Q0MsY0FBVSxFQUFFO0FBTDZCLEdBQUQsQ0FEeEI7QUFBQSxNQUNYQyxTQURXO0FBQUEsTUFDQUMsWUFEQTs7QUFBQSxNQVNWTixLQVRVLEdBU3NDSyxTQVR0QyxDQVNWTCxLQVRVO0FBQUEsTUFTSEMsUUFURyxHQVNzQ0ksU0FUdEMsQ0FTSEosUUFURztBQUFBLE1BU09DLEtBVFAsR0FTc0NHLFNBVHRDLENBU09ILEtBVFA7QUFBQSxNQVNjQyxPQVRkLEdBU3NDRSxTQVR0QyxDQVNjRixPQVRkO0FBQUEsTUFTdUJDLFVBVHZCLEdBU3NDQyxTQVR0QyxDQVN1QkQsVUFUdkI7QUFXbEJHLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0VKLGFBQU8sSUFDTEssb0RBQUssQ0FBQ0wsT0FBTixXQUFpQkEsT0FBakIsR0FBNEI7QUFDMUJNLGdCQUFRLEVBQUUsV0FEZ0I7QUFFMUJDLGlCQUFTLEVBQUUsSUFGZTtBQUcxQkMsdUJBQWUsRUFBRSxLQUhTO0FBSTFCQyxvQkFBWSxFQUFFLElBSlk7QUFLMUJDLG9CQUFZLEVBQUUsSUFMWTtBQU0xQkMsaUJBQVMsRUFBRSxJQU5lO0FBTzFCQyxnQkFBUSxFQUFFQztBQVBnQixPQUE1QixDQURGO0FBVUQ7QUFDRDtBQUNFZCxXQUFLLElBQ0hNLG9EQUFLLENBQUNOLEtBQU4sV0FBZUEsS0FBZixHQUF3QjtBQUN0Qk8sZ0JBQVEsRUFBRSxXQURZO0FBRXRCQyxpQkFBUyxFQUFFLElBRlc7QUFHdEJDLHVCQUFlLEVBQUUsS0FISztBQUl0QkMsb0JBQVksRUFBRSxJQUpRO0FBS3RCQyxvQkFBWSxFQUFFLElBTFE7QUFNdEJDLGlCQUFTLEVBQUUsSUFOVztBQU90QkMsZ0JBQVEsRUFBRUM7QUFQWSxPQUF4QixDQURGO0FBVUQ7QUFDRixHQXpCUSxFQXlCTixDQUFDYixPQUFELEVBQVVELEtBQVYsQ0F6Qk0sQ0FBVDtBQTJCQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RVLCtFQUFtQixNQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUF6QjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBQyxJQUFJO0FBQUEsV0FBSSxVQUFBQyxDQUFDLEVBQUk7QUFBQTs7QUFDekNoQixrQkFBWSxpQ0FDUEQsU0FETyx1SUFFVGdCLElBRlMsRUFFRkMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBRlAsc0hBR0gsRUFIRyx3SEFJRCxFQUpDLG9CQUFaO0FBTUQsS0FQaUM7QUFBQSxHQUFsQzs7QUFTQSxNQUFNQyxnQkFBZ0I7QUFBQSxnTUFBRyxpQkFBTUgsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJoQiwwQkFBWSxpQ0FBTUQsU0FBTjtBQUFpQkQsMEJBQVUsRUFBRTtBQUE3QixpQkFBWjtBQUNBa0IsZUFBQyxDQUFDSSxjQUFGO0FBRnVCO0FBQUE7QUFBQSxxQkFJRUMsNENBQUssQ0FBQ0MsSUFBTixXQUFjQyw4Q0FBZCxhQUEyQjtBQUNoRDdCLHFCQUFLLEVBQUxBLEtBRGdEO0FBRWhEQyx3QkFBUSxFQUFSQTtBQUZnRCxlQUEzQixDQUpGOztBQUFBO0FBSWY2QixzQkFKZTtBQVFyQkMsc0ZBQWdCLENBQUNELFFBQUQsRUFBVztBQUFBLHVCQUFNWixrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsZUFBWCxDQUFoQjtBQUNBYiwwQkFBWSxpQ0FDUEQsU0FETztBQUVWRix1QkFBTyxFQUFFLG1CQUZDO0FBR1ZDLDBCQUFVLEVBQUU7QUFIRixpQkFBWjtBQVRxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVyQjRCLHFCQUFPLENBQUNDLEdBQVI7QUFDQTNCLDBCQUFZLGlDQUNQRCxTQURPO0FBRVZELDBCQUFVLEVBQUUsT0FGRjtBQUdWRixxQkFBSyxFQUFFLFlBQU00QixRQUFOLENBQWVJLElBQWYsQ0FBb0JoQztBQUhqQixpQkFBWjs7QUFoQnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCdUIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQXdCQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFFVSx3REFBTyxDQUFDQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZQUFRLEVBQUVYLGdCQURaO0FBRUUsYUFBUyxZQUFLVSx3REFBTyxDQUFDRSxTQUFiLDZCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLEVBSUU7QUFDRSxTQUFLLEVBQUVyQyxLQURUO0FBRUUsWUFBUSxFQUFFb0IscUJBQXFCLENBQUMsT0FBRCxDQUZqQztBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsYUFBUyxFQUFDLGNBSlo7QUFLRSxRQUFJLEVBQUMsT0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFXRTtBQUNFLFNBQUssRUFBRW5CLFFBRFQ7QUFFRSxZQUFRLEVBQUVtQixxQkFBcUIsQ0FBQyxVQUFELENBRmpDO0FBR0UsUUFBSSxFQUFDLFVBSFA7QUFJRSxhQUFTLEVBQUMsY0FKWjtBQUtFLFFBQUksRUFBQyxVQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWtCRTtBQUFRLGFBQVMsRUFBQyxzQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaEIsVUFESCxDQWxCRixDQURGLENBRkYsRUEwQkUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLENBREY7QUE4QkQsQ0F6R0Q7O0dBQU1OLEs7O0tBQUFBLEs7QUEyR1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjBkNjc3Y2Q5MjZiYzg4YzE4NjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9jb25maWcuanNcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvZ2luLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVVc2VyLCBpc1VzZXJBdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIlxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0OiBcIkxvZ2luXCIsXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0IH0gPSBmb3JtU3RhdGVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHtcclxuICAgICAgc3VjY2VzcyAmJlxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7c3VjY2Vzc31gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB7XHJcbiAgICAgIGVycm9yICYmXHJcbiAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZXJyb3J9YCwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtzdWNjZXNzLCBlcnJvcl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICBzZXRGb3JtU3RhdGUoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIHNldEZvcm1TdGF0ZSh7IC4uLmZvcm1TdGF0ZSwgYnV0dG9uVGV4dDogXCJMb2dnaW5nIGluIVwiIH0pXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUEl9L2xvZ2luYCwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICBhdXRoZW50aWNhdGVVc2VyKHJlc3BvbnNlLCAoKSA9PiBSb3V0ZXIucHVzaChcIi9cIikpXHJcbiAgICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IFwiWW91IEFyZSBMb2dnZWQgSW5cIixcclxuICAgICAgICBidXR0b25UZXh0OiBcIldlbGNvbWUhXCIsXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogXCJMb2dpblwiLFxyXG4gICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHsvKiA8TG9naW5CYWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGFwZV9sb2dpbn0gLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luTGF5b3V0fT5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMubG9naW5Gb3JtfSBjb2wtbWQtNiBjb2wtbGctMTIgbXQtNWB9PlxyXG4gICAgICAgICAgPGgyPkxvZ2luIEhlcmU8L2gyPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZShcImVtYWlsXCIpfVxyXG4gICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIG14LWF1dG8gbXQtNCBidG4tb3V0bGluZS13YXJuaW5nJz5cclxuICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==