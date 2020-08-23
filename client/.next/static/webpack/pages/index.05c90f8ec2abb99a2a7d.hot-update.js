webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HomeLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeLogo */ "./components/HomeLogo.jsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
var _this = undefined,
    _jsxFileName = "D:\\Courses Projects In Work\\Portfolio\\sci-waves\\client\\components\\Layout.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Layout = function Layout(_ref) {
  var children = _ref.children;

  var Head = function Head() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
      crossOrigin: "anonymous",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }));
  };

  var userRole = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().role;
  console.log(userRole);

  var onUserLogout = function onUserLogout() {
    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["logOutUser"])();
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
  };

  var navBar = function navBar() {
    return __jsx("ul", {
      className: "nav customNav nav-tabs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "homeLink",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx(_HomeLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }))), !Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && __jsx("div", {
      className: "login__menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "/login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogin"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }))), __jsx("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "/register",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiUserPlus"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    })))), Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && userRole === "admin" && __jsx("div", {
      className: "login__menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/admin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, "Admin Zone"))), __jsx("li", {
      className: "nav-item",
      onClick: onUserLogout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogout"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    })))), Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && userRole === "customer" && __jsx("div", {
      className: "login__menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/user",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, "User Settings"))), __jsx("li", {
      className: "nav-item",
      onClick: onUserLogout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogout"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    })))));
  };

  return __jsx("div", {
    className: "overall__layout-styles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, Head(), navBar(), __jsx("div", {
    className: "container customContainer pt-5 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, children));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiSGVhZCIsInVzZXJSb2xlIiwiaXNVc2VyQXV0aGVudGljYXRlZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwib25Vc2VyTG9nb3V0IiwibG9nT3V0VXNlciIsIlJvdXRlciIsInB1c2giLCJuYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUMvQixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1gsbUVBQ0U7QUFDRSxTQUFHLEVBQUMsWUFETjtBQUVFLFVBQUksRUFBQyx1RUFGUDtBQUdFLGVBQVMsRUFBQyx5RUFIWjtBQUlFLGlCQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEVztBQUFBLEdBQWI7O0FBV0EsTUFBTUMsUUFBUSxHQUFHQywwRUFBbUIsR0FBR0MsSUFBdkM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMscUVBQVU7QUFDVkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FDYjtBQUFJLGVBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsVUFBYjtB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QSxLQUFzRFgsUUFBdEQsQ0FIRixDQURGO0FBT0QsQ0EvRUQ7O0tBQU1ELE07QUFpRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA1YzkwZjhlYzJhYmI5OWEyYTdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IEhvbWVMb2dvIGZyb20gXCIuL0hvbWVMb2dvXCJcclxuaW1wb3J0IHsgRmlVc2VyUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXHJcbmltcG9ydCB7IEFpT3V0bGluZUxvZ2luIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcclxuaW1wb3J0IHsgaXNVc2VyQXV0aGVudGljYXRlZCwgbG9nT3V0VXNlciB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCJcclxuaW1wb3J0IHsgQWlPdXRsaW5lTG9nb3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBIZWFkID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgaHJlZj0naHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG4gICAgICAgIGludGVncml0eT0nc2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG0nXHJcbiAgICAgICAgY3Jvc3NPcmlnaW49J2Fub255bW91cydcclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gIClcclxuXHJcbiAgY29uc3QgdXNlclJvbGUgPSBpc1VzZXJBdXRoZW50aWNhdGVkKCkucm9sZVxyXG4gIGNvbnNvbGUubG9nKHVzZXJSb2xlKVxyXG5cclxuICBjb25zdCBvblVzZXJMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2dPdXRVc2VyKClcclxuICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgfVxyXG5cclxuICBjb25zdCBuYXZCYXIgPSAoKSA9PiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPSduYXYgY3VzdG9tTmF2IG5hdi10YWJzJz5cclxuICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZUxpbmsnIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPEhvbWVMb2dvIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICB7IWlzVXNlckF1dGhlbnRpY2F0ZWQoKSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL2xvZ2luJz5cclxuICAgICAgICAgICAgICA8QWlPdXRsaW5lTG9naW4gc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy9yZWdpc3Rlcic+XHJcbiAgICAgICAgICAgICAgPEZpVXNlclBsdXMgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgdXNlclJvbGUgPT09IFwiYWRtaW5cIiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FkbWluJz5cclxuICAgICAgICAgICAgICA8YT5BZG1pbiBab25lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nIG9uQ2xpY2s9e29uVXNlckxvZ291dH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxBaU91dGxpbmVMb2dvdXQgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgdXNlclJvbGUgPT09IFwiY3VzdG9tZXJcIiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3VzZXInPlxyXG4gICAgICAgICAgICAgIDxhPlVzZXIgU2V0dGluZ3M8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nIG9uQ2xpY2s9e29uVXNlckxvZ291dH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxBaU91dGxpbmVMb2dvdXQgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gIClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J292ZXJhbGxfX2xheW91dC1zdHlsZXMnPlxyXG4gICAgICB7SGVhZCgpfVxyXG4gICAgICB7bmF2QmFyKCl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgY3VzdG9tQ29udGFpbmVyIHB0LTUgcGItNSc+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==