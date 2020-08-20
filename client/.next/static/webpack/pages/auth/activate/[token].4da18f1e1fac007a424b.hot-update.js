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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activate.module.css */ "./pages/auth/activate/activate.module.css");
/* harmony import */ var _activate_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_activate_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


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
      console.log(_name);
    }
  }, []);
  console.log(userState);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.activateBackground,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.activatePageLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Hello, ", name, ". Activate Your Account:"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), success && react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success("".concat(success), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }), error && react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("".concat(error), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }), __jsx("button", {
    className: "btn btn-block activationBtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, buttonText)))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }));
};

_s(ActivateAccount, "xqrmhdXcDH9hJjbPYrX6KxYLlAg=");

_c = ActivateAccount;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(ActivateAccount));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbIkFjdGl2YXRlQWNjb3VudCIsInJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInRva2VuIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJ1c2VyU3RhdGUiLCJzZXRVc2VyU3RhdGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInF1ZXJ5Iiwiand0IiwiZGVjb2RlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImFjdGl2YXRlQmFja2dyb3VuZCIsImFjdGl2YXRlUGFnZUxheW91dCIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWdCO0FBQUE7O0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNKQyxzREFBUTtBQUN4Q0MsUUFBSSxFQUFFLEVBRGtDO0FBRXhDQyxTQUFLLEVBQUUsRUFGaUM7QUFHeENDLFdBQU8sRUFBRSxFQUgrQjtBQUl4Q0MsY0FBVSxFQUFFO0FBSjRCLHNIQUsvQixFQUwrQixrSEFNakMsRUFOaUMsZUFESjtBQUFBLE1BQy9CQyxTQUQrQjtBQUFBLE1BQ3BCQyxZQURvQjs7QUFBQSxNQVM5QkwsSUFUOEIsR0FTY0ksU0FUZCxDQVM5QkosSUFUOEI7QUFBQSxNQVN4QkMsS0FUd0IsR0FTY0csU0FUZCxDQVN4QkgsS0FUd0I7QUFBQSxNQVNqQkUsVUFUaUIsR0FTY0MsU0FUZCxDQVNqQkQsVUFUaUI7QUFBQSxNQVNMRCxPQVRLLEdBU2NFLFNBVGQsQ0FTTEYsT0FUSztBQUFBLE1BU0lJLEtBVEosR0FTY0YsU0FUZCxDQVNJRSxLQVRKO0FBV3RDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixLQUFLLEdBQUdILE1BQU0sQ0FBQ1UsS0FBUCxDQUFhUCxLQUF6Qjs7QUFDQSxRQUFJQSxLQUFKLEVBQVc7QUFBQSx3QkFDUVEsbURBQUcsQ0FBQ0MsTUFBSixDQUFXVCxLQUFYLENBRFI7QUFBQSxVQUNERCxLQURDLGVBQ0RBLElBREM7O0FBRVRLLGtCQUFZLGlDQUFNRCxTQUFOO0FBQWlCSixZQUFJLEVBQUpBLEtBQWpCO0FBQXVCQyxhQUFLLEVBQUxBO0FBQXZCLFNBQVo7QUFDQVUsYUFBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFDRDtBQUNGLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFRQVcsU0FBTyxDQUFDQyxHQUFSLENBQVlSLFNBQVo7QUFDQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNEVBQUQ7QUFBWSxhQUFTLEVBQUVTLDJEQUFNLENBQUNDLGtCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsMkRBQU0sQ0FBQ0Usa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWWYsSUFBWiw2QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdHRSxPQUFPLElBQ05jLG9EQUFLLENBQUNkLE9BQU4sV0FBaUJBLE9BQWpCLEdBQTRCO0FBQzFCZSxZQUFRLEVBQUUsV0FEZ0I7QUFFMUJDLGFBQVMsRUFBRSxJQUZlO0FBRzFCQyxtQkFBZSxFQUFFLEtBSFM7QUFJMUJDLGdCQUFZLEVBQUUsSUFKWTtBQUsxQkMsZ0JBQVksRUFBRSxJQUxZO0FBTTFCQyxhQUFTLEVBQUUsSUFOZTtBQU8xQkMsWUFBUSxFQUFFQztBQVBnQixHQUE1QixDQUpKLEVBYUdsQixLQUFLLElBQ0pVLG9EQUFLLENBQUNWLEtBQU4sV0FBZUEsS0FBZixHQUF3QjtBQUN0QlcsWUFBUSxFQUFFLFdBRFk7QUFFdEJDLGFBQVMsRUFBRSxJQUZXO0FBR3RCQyxtQkFBZSxFQUFFLEtBSEs7QUFJdEJDLGdCQUFZLEVBQUUsSUFKUTtBQUt0QkMsZ0JBQVksRUFBRSxJQUxRO0FBTXRCQyxhQUFTLEVBQUUsSUFOVztBQU90QkMsWUFBUSxFQUFFQztBQVBZLEdBQXhCLENBZEosRUF1QkU7QUFBUSxhQUFTLEVBQUMsNkJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JCLFVBREgsQ0F2QkYsQ0FERixDQURGLENBRkYsRUFpQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLENBREY7QUFxQ0QsQ0F6REQ7O0dBQU1OLGU7O0tBQUFBLGU7QUEyRFMscUVBQUE0Qiw4REFBVSxDQUFDNUIsZUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjdGl2YXRlL1t0b2tlbl0uNGRhMThmMWUxZmFjMDA3YTQyNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBBY3RpdmF0ZUJnIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2JhY2tncm91bmRzL2FjdGl2YXRpb25CZ1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FjdGl2YXRlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBBY3RpdmF0ZUFjY291bnQgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgdG9rZW46IFwiXCIsXHJcbiAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgYnV0dG9uVGV4dDogXCJBY3RpdmF0ZSBBY2NvdW50XCIsXHJcbiAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBuYW1lLCB0b2tlbiwgYnV0dG9uVGV4dCwgc3VjY2VzcywgZXJyb3IgfSA9IHVzZXJTdGF0ZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0b2tlbiA9IHJvdXRlci5xdWVyeS50b2tlbjtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGp3dC5kZWNvZGUodG9rZW4pO1xyXG4gICAgICBzZXRVc2VyU3RhdGUoeyAuLi51c2VyU3RhdGUsIG5hbWUsIHRva2VuIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc29sZS5sb2codXNlclN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEFjdGl2YXRlQmcgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZhdGVCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZhdGVQYWdlTGF5b3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggb2Zmc2V0LW1kLTJcIj5cclxuICAgICAgICAgICAgPGgzPkhlbGxvLCB7bmFtZX0uIEFjdGl2YXRlIFlvdXIgQWNjb3VudDo8L2gzPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge3N1Y2Nlc3MgJiZcclxuICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGAke3N1Y2Nlc3N9YCwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAge2Vycm9yICYmXHJcbiAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoYCR7ZXJyb3J9YCwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGFjdGl2YXRpb25CdG5cIj5cclxuICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZhdGVBY2NvdW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==