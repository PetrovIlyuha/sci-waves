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










var cx = classnames__WEBPACK_IMPORTED_MODULE_5___default.a.bind(_activate_module_css__WEBPACK_IMPORTED_MODULE_6___default.a);

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
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_components_backgrounds_activationBg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.activateBackground,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _activate_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.activatePageLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Hello, ", name, ". Activate Your Account:"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
    className: activateBtnClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, buttonText)))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY3RpdmF0ZS9bdG9rZW5dLmpzIl0sIm5hbWVzIjpbImN4IiwiY2xhc3NOYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJBY3RpdmF0ZUFjY291bnQiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJ0b2tlbiIsInN1Y2Nlc3MiLCJidXR0b25UZXh0IiwidXNlclN0YXRlIiwic2V0VXNlclN0YXRlIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImp3dCIsImRlY29kZSIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmF0ZUJhY2tncm91bmQiLCJhY3RpdmF0ZVBhZ2VMYXlvdXQiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJhY3RpdmF0ZUJ0bkNsYXNzZXMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxFQUFFLEdBQUdDLGlEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDJEQUFoQixDQUFUOztBQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ0pDLHNEQUFRO0FBQ3hDQyxRQUFJLEVBQUUsRUFEa0M7QUFFeENDLFNBQUssRUFBRSxFQUZpQztBQUd4Q0MsV0FBTyxFQUFFLEVBSCtCO0FBSXhDQyxjQUFVLEVBQUU7QUFKNEIsc0hBSy9CLEVBTCtCLGtIQU1qQyxFQU5pQyxlQURKO0FBQUEsTUFDL0JDLFNBRCtCO0FBQUEsTUFDcEJDLFlBRG9COztBQUFBLE1BUzlCTCxJQVQ4QixHQVNjSSxTQVRkLENBUzlCSixJQVQ4QjtBQUFBLE1BU3hCQyxLQVR3QixHQVNjRyxTQVRkLENBU3hCSCxLQVR3QjtBQUFBLE1BU2pCRSxVQVRpQixHQVNjQyxTQVRkLENBU2pCRCxVQVRpQjtBQUFBLE1BU0xELE9BVEssR0FTY0UsU0FUZCxDQVNMRixPQVRLO0FBQUEsTUFTSUksS0FUSixHQVNjRixTQVRkLENBU0lFLEtBVEo7QUFXdENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlOLEtBQUssR0FBR0gsTUFBTSxDQUFDVSxLQUFQLENBQWFQLEtBQXpCOztBQUNBLFFBQUlBLEtBQUosRUFBVztBQUFBLHdCQUNRUSxtREFBRyxDQUFDQyxNQUFKLENBQVdULEtBQVgsQ0FEUjtBQUFBLFVBQ0RELEtBREMsZUFDREEsSUFEQzs7QUFFVEssa0JBQVksaUNBQU1ELFNBQU47QUFBaUJKLFlBQUksRUFBSkEsS0FBakI7QUFBdUJDLGFBQUssRUFBTEE7QUFBdkIsU0FBWjtBQUNBVSxhQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUNEO0FBQ0YsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVFBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsU0FBWjtBQUVBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0RUFBRDtBQUFZLGFBQVMsRUFBRVIsMkRBQU0sQ0FBQ2lCLGtCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWpCLDJEQUFNLENBQUNrQixrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFZZCxJQUFaLDZCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dFLE9BQU8sSUFDTmEsb0RBQUssQ0FBQ2IsT0FBTixXQUFpQkEsT0FBakIsR0FBNEI7QUFDMUJjLFlBQVEsRUFBRSxXQURnQjtBQUUxQkMsYUFBUyxFQUFFLElBRmU7QUFHMUJDLG1CQUFlLEVBQUUsS0FIUztBQUkxQkMsZ0JBQVksRUFBRSxJQUpZO0FBSzFCQyxnQkFBWSxFQUFFLElBTFk7QUFNMUJDLGFBQVMsRUFBRSxJQU5lO0FBTzFCQyxZQUFRLEVBQUVDO0FBUGdCLEdBQTVCLENBSkosRUFhR2pCLEtBQUssSUFDSlMsb0RBQUssQ0FBQ1QsS0FBTixXQUFlQSxLQUFmLEdBQXdCO0FBQ3RCVSxZQUFRLEVBQUUsV0FEWTtBQUV0QkMsYUFBUyxFQUFFLElBRlc7QUFHdEJDLG1CQUFlLEVBQUUsS0FISztBQUl0QkMsZ0JBQVksRUFBRSxJQUpRO0FBS3RCQyxnQkFBWSxFQUFFLElBTFE7QUFNdEJDLGFBQVMsRUFBRSxJQU5XO0FBT3RCQyxZQUFRLEVBQUVDO0FBUFksR0FBeEIsQ0FkSixFQXVCRTtBQUFRLGFBQVMsRUFBRUMsa0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NyQixVQUF4QyxDQXZCRixDQURGLENBREYsQ0FGRixFQStCRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkYsQ0FERjtBQW1DRCxDQXhERDs7R0FBTU4sZTs7S0FBQUEsZTtBQTBEUyxxRUFBQTRCLDhEQUFVLENBQUM1QixlQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWN0aXZhdGUvW3Rva2VuXS5mOGNkOWFiMDY3OWFlMGI5MjNiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEFjdGl2YXRlQmcgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYmFja2dyb3VuZHMvYWN0aXZhdGlvbkJnXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWN0aXZhdGUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmxldCBjeCA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgQWN0aXZhdGVBY2NvdW50ID0gKHsgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBbdXNlclN0YXRlLCBzZXRVc2VyU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiQWN0aXZhdGUgQWNjb3VudFwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgbmFtZSwgdG9rZW4sIGJ1dHRvblRleHQsIHN1Y2Nlc3MsIGVycm9yIH0gPSB1c2VyU3RhdGU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSByb3V0ZXIucXVlcnkudG9rZW47XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSBqd3QuZGVjb2RlKHRva2VuKTtcclxuICAgICAgc2V0VXNlclN0YXRlKHsgLi4udXNlclN0YXRlLCBuYW1lLCB0b2tlbiB9KTtcclxuICAgICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKHVzZXJTdGF0ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8QWN0aXZhdGVCZyBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmF0ZUJhY2tncm91bmR9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmF0ZVBhZ2VMYXlvdXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBvZmZzZXQtbWQtMlwiPlxyXG4gICAgICAgICAgICA8aDM+SGVsbG8sIHtuYW1lfS4gQWN0aXZhdGUgWW91ciBBY2NvdW50OjwvaDM+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7c3VjY2VzcyAmJlxyXG4gICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7c3VjY2Vzc31gLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7ZXJyb3IgJiZcclxuICAgICAgICAgICAgICB0b2FzdC5lcnJvcihgJHtlcnJvcn1gLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZhdGVCdG5DbGFzc2VzfT57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmF0ZUFjY291bnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9