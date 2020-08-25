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
                _context.next = 20;
                break;
              }

              context.req.writeHead(302, {
                Location: "/"
              });
              context.res.end();
              _context.next = 35;
              break;

            case 20:
              _context.t1 = _objectSpread;
              _context.t2 = _objectSpread;
              _context.t3 = {};

              if (!Page.getInitialProps) {
                _context.next = 29;
                break;
              }

              _context.next = 26;
              return Page.getInitialProps(context);

            case 26:
              _context.t4 = _context.sent;
              _context.next = 30;
              break;

            case 29:
              _context.t4 = {};

            case 30:
              _context.t5 = _context.t4;
              _context.t6 = (0, _context.t2)(_context.t3, _context.t5);
              _context.t7 = {};
              _context.t8 = {
                user: user,
                token: token
              };
              return _context.abrupt("return", (0, _context.t1)(_context.t6, _context.t7, _context.t8));

            case 35:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2l0aFVzZXIuanN4Il0sIm5hbWVzIjpbIndpdGhVc2VyIiwiUGFnZSIsIldpdGhBdXRoVXNlciIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImdldENvb2tpZSIsInJlcSIsInRva2VuIiwidXNlciIsImF4aW9zIiwiZ2V0IiwiQVBJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsInJlcyIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLE1BQUMsSUFBRCx5RkFBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVg7QUFBQSxHQUFyQjs7QUFDQUQsY0FBWSxDQUFDRSxlQUFiO0FBQUEsZ01BQStCLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1RDLGdFQUFTLENBQUMsT0FBRCxFQUFVRCxPQUFPLENBQUNFLEdBQWxCLENBREE7O0FBQUE7QUFDdkJDLG1CQUR1QjtBQUV6QkMsa0JBRnlCLEdBRWxCLElBRmtCOztBQUFBLG1CQUd6QkQsS0FIeUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQUtGRSw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFDLDJDQUFiLFlBQXlCO0FBQzlDQyx1QkFBTyxFQUFFO0FBQ1BDLCtCQUFhLG1CQUFZTixLQUFaLENBRE47QUFFUCxrQ0FBZ0I7QUFGVDtBQURxQyxlQUF6QixDQUxFOztBQUFBO0FBS25CTyxzQkFMbUI7QUFXekJOLGtCQUFJLEdBQUdNLFFBQVEsQ0FBQ0MsSUFBaEI7QUFYeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBYXpCLGtCQUFJLFlBQUlELFFBQUosQ0FBYUUsTUFBYixLQUF3QixHQUE1QixFQUFpQztBQUMvQlIsb0JBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBZndCO0FBQUEsb0JBa0J6QkEsSUFBSSxLQUFLLElBbEJnQjtBQUFBO0FBQUE7QUFBQTs7QUFtQjNCSixxQkFBTyxDQUFDRSxHQUFSLENBQVlXLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkI7QUFDekJDLHdCQUFRLEVBQUU7QUFEZSxlQUEzQjtBQUdBZCxxQkFBTyxDQUFDZSxHQUFSLENBQVlDLEdBQVo7QUF0QjJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUJBeUJyQnBCLElBQUksQ0FBQ0csZUF6QmdCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBeUJRSCxJQUFJLENBQUNHLGVBQUwsQ0FBcUJDLE9BQXJCLENBekJSOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNEJBeUJ3QyxFQXpCeEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCekJJLG9CQUFJLEVBQUpBLElBMUJ5QjtBQTJCekJELHFCQUFLLEVBQUxBO0FBM0J5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQS9COztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQStCQSxTQUFPTixZQUFQO0FBQ0QsQ0FsQ0Q7O0FBb0NlRix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyLjAwYjYzNzUwZjQyZDY5MzgyOWVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCJcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmNvbnN0IHdpdGhVc2VyID0gKFBhZ2UpID0+IHtcclxuICBjb25zdCBXaXRoQXV0aFVzZXIgPSAocHJvcHMpID0+IDxQYWdlIHsuLi5wcm9wc30gLz5cclxuICBXaXRoQXV0aFVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0Q29va2llKFwidG9rZW5cIiwgY29udGV4dC5yZXEpXHJcbiAgICBsZXQgdXNlciA9IG51bGxcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vdXNlcmAsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHVzZXIgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgIHVzZXIgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodXNlciA9PT0gbnVsbCkge1xyXG4gICAgICBjb250ZXh0LnJlcS53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgTG9jYXRpb246IFwiL1wiLFxyXG4gICAgICB9KVxyXG4gICAgICBjb250ZXh0LnJlcy5lbmQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi4oUGFnZS5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBQYWdlLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KSA6IHt9KSxcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBXaXRoQXV0aFVzZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVzZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==