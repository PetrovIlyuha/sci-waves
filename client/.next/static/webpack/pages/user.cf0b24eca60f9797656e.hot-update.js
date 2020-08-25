webpackHotUpdate_N_E("pages/user",{

/***/ "./pages/user/index.js":
/*!*****************************!*\
  !*** ./pages/user/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");



var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\user\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var UserPage = function UserPage(_ref) {
  var user = _ref.user;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Customer Page"));
};

_c = UserPage;
UserPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var token, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["getCookie"])("token");

        case 2:
          token = _context.sent;
          console.log(token);
          _context.prev = 4;
          _context.next = 7;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/user"), {
            headers: {
              Authorization: "Bearer ".concat(token),
              "Content-Type": "application/json"
            }
          });

        case 7:
          response = _context.sent;
          return _context.abrupt("return", {
            user: response.data
          });

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);

          if (!(_context.t0.response.status === 401)) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", {
            user: "No user found"
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[4, 11]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (UserPage);

var _c;

$RefreshReg$(_c, "UserPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsInVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRDb29raWUiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsIkFQSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURGO0FBS0QsQ0FORDs7S0FBTUQsUTtBQVFOQSxRQUFRLENBQUNFLGVBQVQsaU1BQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0xDLGdFQUFTLENBQUMsT0FBRCxDQURKOztBQUFBO0FBQ25CQyxlQURtQjtBQUV6QkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRnlCO0FBQUE7QUFBQSxpQkFJQUcsNENBQUssQ0FBQ0MsR0FBTixXQUFhQywyQ0FBYixZQUF5QjtBQUM5Q0MsbUJBQU8sRUFBRTtBQUNQQywyQkFBYSxtQkFBWVAsS0FBWixDQUROO0FBRVAsOEJBQWdCO0FBRlQ7QUFEcUMsV0FBekIsQ0FKQTs7QUFBQTtBQUlqQlEsa0JBSmlCO0FBQUEsMkNBVWhCO0FBQUVYLGdCQUFJLEVBQUVXLFFBQVEsQ0FBQ0M7QUFBakIsV0FWZ0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBLGdCQVluQixZQUFJRCxRQUFKLENBQWFFLE1BQWIsS0FBd0IsR0FaTDtBQUFBO0FBQUE7QUFBQTs7QUFBQSwyQ0FhZDtBQUFFYixnQkFBSSxFQUFFO0FBQVIsV0FiYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQWlCZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci5jZjBiMjRlY2E2MGY5Nzk3NjU2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiXHJcblxyXG5jb25zdCBVc2VyUGFnZSA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q3VzdG9tZXIgUGFnZTwvaDM+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcblVzZXJQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldENvb2tpZShcInRva2VuXCIpXHJcbiAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vdXNlcmAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7IHVzZXI6IHJlc3BvbnNlLmRhdGEgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICByZXR1cm4geyB1c2VyOiBcIk5vIHVzZXIgZm91bmRcIiB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=