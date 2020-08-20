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
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activate.module.css */ "./pages/auth/activate/activate.module.css");
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_activate_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);




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
      var _response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                buttonText: "Activation"
              }));
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(API, "/register/activate"), {
                token: token
              });

            case 5:
              _response = _context.sent;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                error: response.message
              }));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8]]);
    }));

    return function submitActivation(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  console.log(userState);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activateBackground,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activatePageLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 offset-md-2 ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activationForm),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Hello, ", name, ". Activate Your Account:"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), success && react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].success("".concat(success), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }), error && react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error("".concat(error), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }), __jsx("button", {
    onClick: submitActivation,
    className: "btn btn-block ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activationBtn),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, buttonText)))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }));
};

_s(ActivateAccount, "xqrmhdXcDH9hJjbPYrX6KxYLlAg=");

_c = ActivateAccount;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(ActivateAccount));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInF1ZXJ5Iiwiand0IiwiZGVjb2RlIiwic3VibWl0QWN0aXZhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkFQSSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJhY3RpdmF0ZUJhY2tncm91bmQiLCJhY3RpdmF0ZVBhZ2VMYXlvdXQiLCJhY3RpdmF0aW9uRm9ybSIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsImFjdGl2YXRpb25CdG4iLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ0pDLHNEQUFRO0FBQ3hDQyxRQUFJLEVBQUUsRUFEa0M7QUFFeENDLFNBQUssRUFBRSxFQUZpQztBQUd4Q0MsV0FBTyxFQUFFLEVBSCtCO0FBSXhDQyxjQUFVLEVBQUU7QUFKNEIsc0hBSy9CLEVBTCtCLGtIQU1qQyxFQU5pQyxlQURKO0FBQUEsTUFDL0JDLFNBRCtCO0FBQUEsTUFDcEJDLFlBRG9COztBQUFBLE1B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QUFZLEVBQUUsSUFMUTtBQU10QkMsYUFBUyxFQUFFLElBTlc7QUFPdEJDLFlBQVEsRUFBRUM7QUFQWSxHQUF4QixDQWRKLEVBdUJFO0FBQ0UsV0FBTyxFQUFFdEIsZ0JBRFg7QUFFRSxhQUFTLDBCQUFtQlUsMkRBQU0sQ0FBQ2EsYUFBMUIsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUcvQixVQUpILENBdkJGLENBREYsQ0FERixDQUZGLEVBb0NFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDRixDQURGO0FBd0NELENBeEVEOztHQUFNTixlOztLQUFBQSxlO0FBMEVTLHFFQUFBc0MsK0RBQVUsQ0FBQ3RDLGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLjllYTQ5Y2E1OTdmYzZiYTQ0NWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQWN0aXZhdGVCZyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9iYWNrZ3JvdW5kcy9hY3RpdmF0aW9uQmdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hY3RpdmF0ZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQWN0aXZhdGVBY2NvdW50ID0gKHsgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiQWN0aXZhdGUgQWNjb3VudFwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgbmFtZSwgdG9rZW4sIGJ1dHRvblRleHQsIHN1Y2Nlc3MsIGVycm9yIH0gPSB1c2VyU3RhdGU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSByb3V0ZXIucXVlcnkudG9rZW47XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSBqd3QuZGVjb2RlKHRva2VuKTtcclxuICAgICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBuYW1lLCB0b2tlbiB9KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEFjdGl2YXRpb24gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBidXR0b25UZXh0OiBcIkFjdGl2YXRpb25cIiB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUEl9L3JlZ2lzdGVyL2FjdGl2YXRlYCwge1xyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRVc2VyU3RhdGUoeyAuLi51c2VyU3RhdGUsIGVycm9yOiByZXNwb25zZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2codXNlclN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxBY3RpdmF0ZUJnIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2YXRlQmFja2dyb3VuZH0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2YXRlUGFnZUxheW91dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC04IG9mZnNldC1tZC0yICR7c3R5bGVzLmFjdGl2YXRpb25Gb3JtfWB9PlxyXG4gICAgICAgICAgICA8aDM+SGVsbG8sIHtuYW1lfS4gQWN0aXZhdGUgWW91ciBBY2NvdW50OjwvaDM+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7c3VjY2VzcyAmJlxyXG4gICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7c3VjY2Vzc31gLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7ZXJyb3IgJiZcclxuICAgICAgICAgICAgICB0b2FzdC5lcnJvcihgJHtlcnJvcn1gLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0QWN0aXZhdGlvbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLWJsb2NrICR7c3R5bGVzLmFjdGl2YXRpb25CdG59YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmF0ZUFjY291bnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9