webpackHotUpdate_N_E("pages/user",{

/***/ "./pages/withUser.jsx":
/*!****************************!*\
  !*** ./pages/withUser.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);





var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\pages\\withUser.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var withUser = function withUser(Page) {
  var WithAuthUser = function WithAuthUser(props) {
    return __jsx(Page, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 35
      }
    }));
  };

  WithAuthUser.getInitialProps = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
      var token, user, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["getCookie"])("token", context.req);

            case 2:
              token = _context.sent;
              user = null;

              if (!token) {
                _context.next = 15;
                break;
              }

              _context.prev = 5;
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_6__["API"], "/user"), {
                headers: {
                  Authorization: "Bearer ".concat(token),
                  "Content-Type": "application/json"
                }
              });

            case 8:
              response = _context.sent;
              user = response.data;
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);

              if (_context.t0.response.status === 401) {
                user = null;
              }

            case 15:
              if (!(user === null)) {
                _context.next = 19;
                break;
              }

              context.req.writeHead(302, {
                Location: "/"
              });
              _context.next = 34;
              break;

            case 19:
              _context.t1 = _objectSpread;
              _context.t2 = _objectSpread;
              _context.t3 = {};

              if (!Page.getInitialProps) {
                _context.next = 28;
                break;
              }

              _context.next = 25;
              return Page.getInitialProps(context);

            case 25:
              _context.t4 = _context.sent;
              _context.next = 29;
              break;

            case 28:
              _context.t4 = {};

            case 29:
              _context.t5 = _context.t4;
              _context.t6 = (0, _context.t2)(_context.t3, _context.t5);
              _context.t7 = {};
              _context.t8 = {
                user: user,
                token: token
              };
              return _context.abrupt("return", (0, _context.t1)(_context.t6, _context.t7, _context.t8));

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return WithAuthUser;
};

/* harmony default export */ __webpack_exports__["default"] = (withUser);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2l0aFVzZXIuanN4Il0sIm5hbWVzIjpbIndpdGhVc2VyIiwiUGFnZSIsIldpdGhBdXRoVXNlciIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImdldENvb2tpZSIsInJlcSIsInRva2VuIiwidXNlciIsImF4aW9zIiwiZ2V0IiwiQVBJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLE1BQUMsSUFBRCx5RkFBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVg7QUFBQSxHQUFyQjs7QUFDQUQsY0FBWSxDQUFDRSxlQUFiO0FBQUEsZ01BQStCLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1RDLGdFQUFTLENBQUMsT0FBRCxFQUFVRCxPQUFPLENBQUNFLEdBQWxCLENBREE7O0FBQUE7QUFDdkJDLG1CQUR1QjtBQUV6QkMsa0JBRnlCLEdBRWxCLElBRmtCOztBQUFBLG1CQUd6QkQsS0FIeUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQUtGRSw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFDLDJDQUFiLFlBQXlCO0FBQzlDQyx1QkFBTyxFQUFFO0FBQ1BDLCtCQUFhLG1CQUFZTixLQUFaLENBRE47QUFFUCxrQ0FBZ0I7QUFGVDtBQURxQyxlQUF6QixDQUxFOztBQUFBO0FBS25CTyxzQkFMbUI7QUFXekJOLGtCQUFJLEdBQUdNLFFBQVEsQ0FBQ0MsSUFBaEI7QUFYeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBYXpCLGtCQUFJLFlBQUlELFFBQUosQ0FBYUUsTUFBYixLQUF3QixHQUE1QixFQUFpQztBQUMvQlIsb0JBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBZndCO0FBQUEsb0JBa0J6QkEsSUFBSSxLQUFLLElBbEJnQjtBQUFBO0FBQUE7QUFBQTs7QUFtQjNCSixxQkFBTyxDQUFDRSxHQUFSLENBQVlXLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkI7QUFDekJDLHdCQUFRLEVBQUU7QUFEZSxlQUEzQjtBQW5CMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQkF3QnJCbEIsSUFBSSxDQUFDRyxlQXhCZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkF3QlFILElBQUksQ0FBQ0csZUFBTCxDQUFxQkMsT0FBckIsQ0F4QlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0QkF3QndDLEVBeEJ4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJ6Qkksb0JBQUksRUFBSkEsSUF6QnlCO0FBMEJ6QkQscUJBQUssRUFBTEE7QUExQnlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBOEJBLFNBQU9OLFlBQVA7QUFDRCxDQWpDRDs7QUFtQ2VGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIuYWM4OTEwMTExNjU3OTYzYzM1MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIlxyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuY29uc3Qgd2l0aFVzZXIgPSAoUGFnZSkgPT4ge1xyXG4gIGNvbnN0IFdpdGhBdXRoVXNlciA9IChwcm9wcykgPT4gPFBhZ2Ugey4uLnByb3BzfSAvPlxyXG4gIFdpdGhBdXRoVXNlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRDb29raWUoXCJ0b2tlblwiLCBjb250ZXh0LnJlcSlcclxuICAgIGxldCB1c2VyID0gbnVsbFxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS91c2VyYCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgdXNlciA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh1c2VyID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnRleHQucmVxLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICBMb2NhdGlvbjogXCIvXCIsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLihQYWdlLmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IFBhZ2UuZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIDoge30pLFxyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFdpdGhBdXRoVXNlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9