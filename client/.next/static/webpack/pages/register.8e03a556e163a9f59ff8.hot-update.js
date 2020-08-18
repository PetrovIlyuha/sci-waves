webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");


var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\register.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register"
  }),
      formState = _useState[0],
      setFormState = _useState[1];

  var name = formState.name,
      email = formState.email,
      password = formState.password,
      error = formState.error,
      success = formState.success,
      buttonText = formState.buttonText;

  var handleFormInputChange = function handleFormInputChange(name) {
    return function (e) {
      var _objectSpread2;

      setFormState(_objectSpread(_objectSpread({}, formState), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "error", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "success", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "buttonText", "Register"), _objectSpread2)));
    };
  };

  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/api/register", {
      name: name,
      email: email,
      password: password
    });
  };

  console.log(formState);

  var registerForm = function registerForm() {
    return __jsx("form", {
      onSubmit: handleFormSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, "Username"), __jsx("input", {
      onChange: handleFormInputChange("name"),
      type: "text",
      value: name,
      id: "name",
      className: "form-control",
      placeholder: "Ironman...",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, "Email"), __jsx("input", {
      onChange: handleFormInputChange("email"),
      type: "email",
      value: email,
      id: "email",
      className: "form-control",
      placeholder: "warrior@galaxy.com",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, "Password"), __jsx("input", {
      type: "password",
      value: password,
      id: "password",
      className: "form-control",
      onChange: handleFormInputChange("password"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }
    }, __jsx("button", {
      className: "btn mx-auto btn-outline-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, buttonText)));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "register__page_layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shapes__register",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "cloud__register",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "register-overlay col-md-6 offset-3 mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, registerForm())));
};

_s(Register, "nydvKjC3cftYzFbZTu8+hOYhk3A=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJoYW5kbGVGb3JtSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUM7QUFDekNDLFFBQUksRUFBRSxFQURtQztBQUV6Q0MsU0FBSyxFQUFFLEVBRmtDO0FBR3pDQyxZQUFRLEVBQUUsRUFIK0I7QUFJekNDLFNBQUssRUFBRSxFQUprQztBQUt6Q0MsV0FBTyxFQUFFLEVBTGdDO0FBTXpDQyxjQUFVLEVBQUU7QUFONkIsR0FBRCxDQURyQjtBQUFBLE1BQ2RDLFNBRGM7QUFBQSxNQUNIQyxZQURHOztBQUFBLE1BVWJQLElBVmEsR0FVeUNNLFNBVnpDLENBVWJOLElBVmE7QUFBQSxNQVVQQyxLQVZPLEdBVXlDSyxTQVZ6QyxDQVVQTCxLQVZPO0FBQUEsTUFVQUMsUUFWQSxHQVV5Q0ksU0FWekMsQ0FVQUosUUFWQTtBQUFBLE1BVVVDLEtBVlYsR0FVeUNHLFNBVnpDLENBVVVILEtBVlY7QUFBQSxNQVVpQkMsT0FWakIsR0FVeUNFLFNBVnpDLENBVWlCRixPQVZqQjtBQUFBLE1BVTBCQyxVQVYxQixHQVV5Q0MsU0FWekMsQ0FVMEJELFVBVjFCOztBQVlyQixNQUFNRyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNSLElB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2EsWUFBWSxFQURmLENBSEYsQ0FERixDQURGO0FBV0QsQ0FyRkQ7O0dBQU1wQixROztLQUFBQSxRO0FBdUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci44ZTAzYTU1NmUxNjNhOWY1OWZmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gICAgc3VjY2VzczogXCJcIixcclxuICAgIGJ1dHRvblRleHQ6IFwiUmVnaXN0ZXJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0IH0gPSBmb3JtU3RhdGU7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1JbnB1dENoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybVN0YXRlKHtcclxuICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBlcnJvcjogXCJcIixcclxuICAgICAgc3VjY2VzczogXCJcIixcclxuICAgICAgYnV0dG9uVGV4dDogXCJSZWdpc3RlclwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3JlZ2lzdGVyYCwge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmb3JtU3RhdGUpO1xyXG4gIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZShcIm5hbWVcIil9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJcm9ubWFuLi4uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtSW5wdXRDaGFuZ2UoXCJlbWFpbFwiKX1cclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIndhcnJpb3JAZ2FsYXh5LmNvbVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZShcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBteC1hdXRvIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj5cclxuICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9fcGFnZV9sYXlvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlc19fcmVnaXN0ZXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3VkX19yZWdpc3RlclwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItb3ZlcmxheSBjb2wtbWQtNiBvZmZzZXQtMyBtdC01XCI+XHJcbiAgICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9