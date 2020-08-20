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
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(API, "/register/activate"), {
                token: token
              });

            case 7:
              response = _context.sent;
              console.log("token was sent");
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                name: "",
                token: "",
                // success: response.data.message,
                buttonText: "Activated"
              }));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                buttonText: "Something is wrong..." // error: error.response.data.error,

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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activateBackground,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activatePageLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 offset-md-2 ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activationForm),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Hello, ", name, ". Activate Your Account:"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
    draggable: true
  }), __jsx("button", {
    onClick: submitActivation,
    className: "btn btn-block ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.activationBtn),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, buttonText)))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInF1ZXJ5Iiwiand0IiwiZGVjb2RlIiwic3VibWl0QWN0aXZhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJBUEkiLCJyZXNwb25zZSIsInN0eWxlcyIsImFjdGl2YXRlQmFja2dyb3VuZCIsImFjdGl2YXRlUGFnZUxheW91dCIsImFjdGl2YXRpb25Gb3JtIiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiYWN0aXZhdGlvbkJ0biIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFnQjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDSkMsc0RBQVE7QUFDeENDLFFBQUksRUFBRSxFQURrQztBQUV4Q0MsU0FBSyxFQUFFLEVBRmlDO0FBR3hDQyxXQUFPLEVBQUUsRUFIK0I7QUFJeENDLGNBQVUsRUFBRTtBQUo0QixzSEFLL0IsRUFMK0Isa0hBTWpDLEVBTmlDLGVBREo7QUFBQSxNQUMvQkMsU0FEK0I7QUFBQSxNQUNwQkMsWUFEb0I7O0FBQUEsTUFTOUJMLElBVDhC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QixDQUpKLEVBYUcxQixLQUFLLElBQ0prQixvREFBSyxDQUFDbEIsS0FBTixXQUFlQSxLQUFmLEdBQXdCO0FBQ3RCbUIsWUFBUSxFQUFFLFdBRFk7QUFFdEJDLGFBQVMsRUFBRSxJQUZXO0FBR3RCQyxtQkFBZSxFQUFFLEtBSEs7QUFJdEJDLGdCQUFZLEVBQUUsSUFKUTtBQUt0QkMsZ0JBQVksRUFBRSxJQUxRO0FBTXRCQyxhQUFTLEVBQUU7QUFOVyxHQUF4QixDQWRKLEVBc0JFO0FBQ0UsV0FBTyxFQUFFbkIsZ0JBRFg7QUFFRSxhQUFTLDBCQUFtQlMsMkRBQU0sQ0FBQ2EsYUFBMUIsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUc5QixVQUpILENBdEJGLENBREYsQ0FERixDQUZGLEVBbUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DRixDQURGO0FBdUNELENBcEZEOztHQUFNTixlOztLQUFBQSxlO0FBc0ZTLHFFQUFBcUMsK0RBQVUsQ0FBQ3JDLGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLmEzMGIxNmI4NzNhMDhlOGZkMWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQWN0aXZhdGVCZyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9iYWNrZ3JvdW5kcy9hY3RpdmF0aW9uQmdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hY3RpdmF0ZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQWN0aXZhdGVBY2NvdW50ID0gKHsgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiQWN0aXZhdGUgQWNjb3VudFwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgbmFtZSwgdG9rZW4sIGJ1dHRvblRleHQsIHN1Y2Nlc3MsIGVycm9yIH0gPSB1c2VyU3RhdGU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSByb3V0ZXIucXVlcnkudG9rZW47XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSBqd3QuZGVjb2RlKHRva2VuKTtcclxuICAgICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBuYW1lLCB0b2tlbiB9KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEFjdGl2YXRpb24gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBzZXRVc2VyU3RhdGUoeyAuLi51c2VyU3RhdGUsIGJ1dHRvblRleHQ6IFwiQWN0aXZhdGlvblwiIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSX0vcmVnaXN0ZXIvYWN0aXZhdGVgLCB7XHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRva2VuIHdhcyBzZW50XCIpO1xyXG4gICAgICBzZXRVc2VyU3RhdGUoe1xyXG4gICAgICAgIC4uLnVzZXJTdGF0ZSxcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHRva2VuOiBcIlwiLFxyXG4gICAgICAgIC8vIHN1Y2Nlc3M6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICBidXR0b25UZXh0OiBcIkFjdGl2YXRlZFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRVc2VyU3RhdGUoe1xyXG4gICAgICAgIC4uLnVzZXJTdGF0ZSxcclxuICAgICAgICBidXR0b25UZXh0OiBcIlNvbWV0aGluZyBpcyB3cm9uZy4uLlwiLFxyXG4gICAgICAgIC8vIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEFjdGl2YXRlQmcgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZhdGVCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZhdGVQYWdlTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTggb2Zmc2V0LW1kLTIgJHtzdHlsZXMuYWN0aXZhdGlvbkZvcm19YH0+XHJcbiAgICAgICAgICAgIDxoMz5IZWxsbywge25hbWV9LiBBY3RpdmF0ZSBZb3VyIEFjY291bnQ6PC9oMz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzICYmXHJcbiAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtzdWNjZXNzfWAsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHtlcnJvciAmJlxyXG4gICAgICAgICAgICAgIHRvYXN0LmVycm9yKGAke2Vycm9yfWAsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEFjdGl2YXRpb259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1ibG9jayAke3N0eWxlcy5hY3RpdmF0aW9uQnRufWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZhdGVBY2NvdW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==