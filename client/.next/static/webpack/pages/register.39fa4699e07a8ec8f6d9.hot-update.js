webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");




var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\register.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
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

      setFormState(_objectSpread(_objectSpread({}, formState), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "success", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "buttonText", "Register"), _objectSpread2)));
    };
  };

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:4000/api/register", {
                name: name,
                email: email,
                password: password
              });

            case 3:
              response = _context.sent;
              console.log(response);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFormSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var registerForm = function registerForm() {
    return __jsx("form", {
      onSubmit: handleFormSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, "Register"), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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
        lineNumber: 42,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
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
        lineNumber: 53,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 64,
        columnNumber: 9
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx("button", {
      className: "btn mx-auto btn-outline-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, buttonText)));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "register__page_layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shapes__register",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "cloud__register",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "register-overlay col-md-6 offset-3 mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJoYW5kbGVGb3JtSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlckZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQztBQUN6Q0MsUUFBSSxFQUFFLEVBRG1DO0FBRXpDQyxTQUFLLEVBQUUsRUFGa0M7QUFHekNDLFlBQVEsRUFBRSxFQUgrQjtBQUl6Q0MsU0FBSyxFQUFFLEVBSmtDO0FBS3pDQyxXQUFPLEVBQUUsRUFMZ0M7QUFNekNDLGNBQVUsRUFBRTtBQU42QixHQUFELENBRHJCO0FBQUEsTUFDZEMsU0FEYztBQUFBLE1BQ0hDLFlBREc7O0FBQUEsTUFVYlAsSUFWYSxHQVV5Q00sU0FWekMsQ0FVYk4sSUFWYTtBQUFBLE1BVVBDLEtBVk8sR0FVeUNLLFNBVnpDLENBVVBMLEtBVk87QUFBQSxNQVVBQyxRQVZBLEdBVXlDSSxTQVZ6QyxDQVVBSixRQVZBO0FBQUEsTUFVVUMsS0FWVixHQVV5Q0csU0FWekMsQ0FVVUgsS0FWVjtBQUFBLE1BVWlCQyxPQVZqQixHQVV5Q0UsU0FWekMsQ0FVaUJGLE9BVmpCO0FBQUEsTUFVMEJDLFVBVjFCLEdBVXlDQyxTQVZ6QyxDQVUwQkQsVUFWMUI7O0FBWXJCLE1BQU1HLHFCQUFxQixHQUFH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TUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2MsWUFBWSxFQURmLENBSEYsQ0FERixDQURGO0FBV0QsQ0F0RkQ7O0dBQU1yQixROztLQUFBQSxRO0FBd0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4zOWZhNDY5OWUwN2E4ZWM4ZjZkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgYnV0dG9uVGV4dDogXCJSZWdpc3RlclwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIHN1Y2Nlc3MsIGJ1dHRvblRleHQgfSA9IGZvcm1TdGF0ZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybUlucHV0Q2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcbiAgICBzZXRGb3JtU3RhdGUoe1xyXG4gICAgICAuLi5mb3JtU3RhdGUsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICBzdWNjZXNzOiBcIlwiLFxyXG4gICAgICBidXR0b25UZXh0OiBcIlJlZ2lzdGVyXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9yZWdpc3RlcmAsIHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxyXG4gICAgICA8aDI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUlucHV0Q2hhbmdlKFwibmFtZVwiKX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIklyb25tYW4uLi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1JbnB1dENoYW5nZShcImVtYWlsXCIpfVxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwid2FycmlvckBnYWxheHkuY29tXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUlucHV0Q2hhbmdlKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG14LWF1dG8gYnRuLW91dGxpbmUtd2FybmluZ1wiPlxyXG4gICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyX19wYWdlX2xheW91dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGVzX19yZWdpc3RlclwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvdWRfX3JlZ2lzdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1vdmVybGF5IGNvbC1tZC02IG9mZnNldC0zIG10LTVcIj5cclxuICAgICAgICAgIHtyZWdpc3RlckZvcm0oKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=