webpackHotUpdate_N_E("pages/auth/activate/[token]",{

/***/ "./pages/auth/activate/[token].js":
/*!****************************************!*\
  !*** ./pages/auth/activate/[token].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/backgrounds/activationBg */ "./components/backgrounds/activationBg.jsx");
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activate.module.css */ "./pages/auth/activate/activate.module.css");
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_activate_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\auth\\activate\\[token].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ActivateAccount = function ActivateAccount(_ref) {
  _s();

  var _useState2;

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_useState2 = {
    name: "",
    token: "",
    success: "",
    buttonText: "Activate Account"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, "success", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState2, "error", ""), _useState2)),
      userState = _useState[0],
      setUserState = _useState[1];

  var name = userState.name,
      token = userState.token,
      buttonText = userState.buttonText,
      success = userState.success,
      error = userState.error;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = router.query.token;

    if (token) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token),
          _name = _jwt$decode.name;

      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        name: _name,
        token: token
      }));
      console.log(token);
    }
  }, []);
  console.log(userState);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activateBackground,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activatePageLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 offset-md-2 ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activationForm),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Hello, ", name, ". Activate Your Account:"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), success && react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("".concat(success), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }), error && react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error("".concat(error), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }), __jsx("button", {
    className: "btn btn-block ".concat(_activate_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activationBtn),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, buttonText)))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }));
};

_s(ActivateAccount, "xqrmhdXcDH9hJjbPYrX6KxYLlAg=");

_c = ActivateAccount;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(ActivateAccount));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInF1ZXJ5Iiwiand0IiwiZGVjb2RlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImFjdGl2YXRlQmFja2dyb3VuZCIsImFjdGl2YXRlUGFnZUxheW91dCIsImFjdGl2YXRpb25Gb3JtIiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiYWN0aXZhdGlvbkJ0biIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ0pDLHNEQUFRO0FBQ3hDQyxRQUFJLEVBQUUsRUFEa0M7QUFFeENDLFNBQUssRUFBRSxFQUZpQztBQUd4Q0MsV0FBTyxFQUFFLEVBSCtCO0FBSXhDQyxjQUFVLEVBQUU7QUFKNEIsc0hBSy9CLEVBTCtCLGtIQU1qQyxFQU5pQyxlQURKO0FBQUEsTUFDL0JDLFNBRCtCO0FBQUEsTUFDcEJDLFlBRG9COztBQUFBLE1BUzlCTCxJQVQ4QixHQVNjSSxTQVRkLENBUzlCSixJQVQ4QjtBQUFBLE1BU3hCQyxLQVR3QixHQVNjRyxTQVRkLENBU3hCSCxLQVR3QjtBQUFBLE1BU2pCRSxVQVRpQixHQVNjQyxTQVRkLENBU2pCRCxVQVRpQjtBQUFBLE1BU0xELE9BVEssR0FTY0UsU0FUZCxDQVNMRixPQVRLO0FBQUEsTUFTSUksS0FUSixHQVNjRixTQVRkLENBU0lFLEtBVEo7QUFXdENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlOLEtBQUssR0FBR0gsTUFBTSxDQUFDVSxLQUFQLENBQWFQLEtBQXpCOztBQUNBLFFBQUlBLEtBQUosRUFBVztBQUFBLHdCQUNRUSxtREFBRyxDQUFDQyxNQUFKLENBQVdULEtBQVgsQ0FEUjtBQUFBLFVBQ0RELEtBREMsZUFDREEsSUFEQzs7QUFFVEssa0JBQVksaUNBQU1ELFNBQU47QUFBaUJKLFlBQUksRUFBSkEsS0FBakI7QUFBdUJDLGFBQUssRUFBTEE7QUFBdkIsU0FBWjtBQUNBVSxhQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNEO0FBQ0YsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsU0FBWjtBQUVBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0RUFBRDtBQUFZLGFBQVMsRUFBRVMsMkRBQU0sQ0FBQ0Msa0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwyREFBTSxDQUFDRSxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxpQ0FBMEJGLDJEQUFNLENBQUNHLGNBQWpDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVloQixJQUFaLDZCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dFLE9BQU8sSUFDTmUsb0RBQUssQ0FBQ2YsT0FBTixXQUFpQkEsT0FBakIsR0FBNEI7QUFDMUJnQixZQUFRLEVBQUUsV0FEZ0I7QUFFMUJDLGFBQVMsRUFBRSxJQUZlO0FBRzFCQyxtQkFBZSxFQUFFLEtBSFM7QUFJMUJDLGdCQUFZLEVBQUUsSUFKWTtBQUsxQkMsZ0JBQVksRUFBRSxJQUxZO0FBTTFCQyxhQUFTLEVBQUUsSUFOZTtBQU8xQkMsWUFBUSxFQUFFQztBQVBnQixHQUE1QixDQUpKLEVBYUduQixLQUFLLElBQ0pXLG9EQUFLLENBQUNYLEtBQU4sV0FBZUEsS0FBZixHQUF3QjtBQUN0QlksWUFBUSxFQUFFLFdBRFk7QUFFdEJDLGFBQVMsRUFBRSxJQUZXO0FBR3RCQyxtQkFBZSxFQUFFLEtBSEs7QUFJdEJDLGdCQUFZLEVBQUUsSUFKUTtBQUt0QkMsZ0JBQVksRUFBRSxJQUxRO0FBTXRCQyxhQUFTLEVBQUUsSUFOVztBQU90QkMsWUFBUSxFQUFFQztBQVBZLEdBQXhCLENBZEosRUF1QkU7QUFBUSxhQUFTLDBCQUFtQlosMkRBQU0sQ0FBQ2EsYUFBMUIsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdkIsVUFESCxDQXZCRixDQURGLENBREYsQ0FGRixFQWlDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0YsQ0FERjtBQXFDRCxDQTNERDs7R0FBTU4sZTs7S0FBQUEsZTtBQTZEUyxxRUFBQThCLDhEQUFVLENBQUM5QixlQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWN0aXZhdGUvW3Rva2VuXS41MjI1OTZlNjlkMDQ3YjYxNjRiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEFjdGl2YXRlQmcgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYmFja2dyb3VuZHMvYWN0aXZhdGlvbkJnXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWN0aXZhdGUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEFjdGl2YXRlQWNjb3VudCA9ICh7IHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB0b2tlbjogXCJcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBidXR0b25UZXh0OiBcIkFjdGl2YXRlIEFjY291bnRcIixcclxuICAgIHN1Y2Nlc3M6IFwiXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IG5hbWUsIHRva2VuLCBidXR0b25UZXh0LCBzdWNjZXNzLCBlcnJvciB9ID0gdXNlclN0YXRlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gcm91dGVyLnF1ZXJ5LnRva2VuO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gand0LmRlY29kZSh0b2tlbik7XHJcbiAgICAgIHNldFVzZXJTdGF0ZSh7IC4uLnVzZXJTdGF0ZSwgbmFtZSwgdG9rZW4gfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVzZXJTdGF0ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8QWN0aXZhdGVCZyBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmF0ZUJhY2tncm91bmR9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmF0ZVBhZ2VMYXlvdXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbWQtOCBvZmZzZXQtbWQtMiAke3N0eWxlcy5hY3RpdmF0aW9uRm9ybX1gfT5cclxuICAgICAgICAgICAgPGgzPkhlbGxvLCB7bmFtZX0uIEFjdGl2YXRlIFlvdXIgQWNjb3VudDo8L2gzPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge3N1Y2Nlc3MgJiZcclxuICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGAke3N1Y2Nlc3N9YCwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAge2Vycm9yICYmXHJcbiAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZXJyb3J9YCwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gYnRuLWJsb2NrICR7c3R5bGVzLmFjdGl2YXRpb25CdG59YH0+XHJcbiAgICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2YXRlQWNjb3VudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=