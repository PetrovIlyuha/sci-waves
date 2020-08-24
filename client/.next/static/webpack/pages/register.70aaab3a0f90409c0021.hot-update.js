webpackHotUpdate_N_E("pages/register",{

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

  var userRole = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().role;
  console.log(userRole);

  var onUserLogout = function onUserLogout() {
    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["logOutUser"])();
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
  };

  console.log(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])());

  var navBar = function navBar() {
    return __jsx("ul", {
      className: " customNav nav-tabs",
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
      className: "login__menu--user-info",
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
    }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().name))), __jsx("li", {
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
      className: "login__menu--user-info",
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
    }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().name))), __jsx("li", {
      className: "nav-item",
      onClick: onUserLogout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogout"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    })))));
  };

  return __jsx("div", {
    className: "overall__layout-styles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, Head(), navBar(), __jsx("div", {
    className: "container customContainer pt-5 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiSGVhZCIsInVzZXJSb2xlIiwiaXNVc2VyQXV0aGVudGljYXRlZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwib25Vc2VyTG9nb3V0IiwibG9nT3V0VXNlciIsIlJvdXRlciIsInB1c2giLCJuYXZCYXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDL0IsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUNYLG1FQUNFO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxVQUFJLEVBQUMsdUVBRlA7QUFHRSxlQUFTLEVBQUMseUVBSFo7QUFJRSxpQkFBVyxFQUFDLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFc7QUFBQSxHQUFiOztBQVdBLE1BQU1DLFFBQVEsR0FBR0MsMEVBQW1CLE1BQU1BLDBFQUFtQixHQUFHQyxJQUFoRTtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxxRUFBVTtBQUNWQyxzREFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNELEdBSEQ7O0FBSUFMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCwwRUFBbUIsRUFBL0I7O0FBQ0EsTUFBTVEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUNiO0FBQUksZUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxVQUFk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U0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLElBQUksRUFEUCxFQUVHVSxNQUFNLEVBRlQsRUFHRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNEWCxRQUF0RCxDQUhGLENBREY7QUFPRCxDQTlFRDs7S0FBTUQsTTtBQWdGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNzBhYWFiM2EwZjkwNDA5YzAwMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgSG9tZUxvZ28gZnJvbSBcIi4vSG9tZUxvZ29cIlxyXG5pbXBvcnQgeyBGaVVzZXJQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCJcclxuaW1wb3J0IHsgQWlPdXRsaW5lTG9naW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIlxyXG5pbXBvcnQgeyBpc1VzZXJBdXRoZW50aWNhdGVkLCBsb2dPdXRVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIlxyXG5pbXBvcnQgeyBBaU91dGxpbmVMb2dvdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIlxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IEhlYWQgPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbiAgICAgICAgaW50ZWdyaXR5PSdzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbSdcclxuICAgICAgICBjcm9zc09yaWdpbj0nYW5vbnltb3VzJ1xyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG5cclxuICBjb25zdCB1c2VyUm9sZSA9IGlzVXNlckF1dGhlbnRpY2F0ZWQoKSAmJiBpc1VzZXJBdXRoZW50aWNhdGVkKCkucm9sZVxyXG4gIGNvbnNvbGUubG9nKHVzZXJSb2xlKVxyXG5cclxuICBjb25zdCBvblVzZXJMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2dPdXRVc2VyKClcclxuICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGlzVXNlckF1dGhlbnRpY2F0ZWQoKSlcclxuICBjb25zdCBuYXZCYXIgPSAoKSA9PiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPScgY3VzdG9tTmF2IG5hdi10YWJzJz5cclxuICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZUxpbmsnIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPEhvbWVMb2dvIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICB7IWlzVXNlckF1dGhlbnRpY2F0ZWQoKSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL2xvZ2luJz5cclxuICAgICAgICAgICAgICA8QWlPdXRsaW5lTG9naW4gc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy9yZWdpc3Rlcic+XHJcbiAgICAgICAgICAgICAgPEZpVXNlclBsdXMgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgdXNlclJvbGUgPT09IFwiYWRtaW5cIiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xvZ2luX19tZW51LS11c2VyLWluZm8nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvYWRtaW4nPlxyXG4gICAgICAgICAgICAgIDxhPntpc1VzZXJBdXRoZW50aWNhdGVkKCkubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbScgb25DbGljaz17b25Vc2VyTG9nb3V0fT5cclxuICAgICAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgPEFpT3V0bGluZUxvZ291dCBzaXplPXszNX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2lzVXNlckF1dGhlbnRpY2F0ZWQoKSAmJiB1c2VyUm9sZSA9PT0gXCJjdXN0b21lclwiICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5fX21lbnUnPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbG9naW5fX21lbnUtLXVzZXItaW5mbyc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy91c2VyJz5cclxuICAgICAgICAgICAgICA8YT57aXNVc2VyQXV0aGVudGljYXRlZCgpLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nIG9uQ2xpY2s9e29uVXNlckxvZ291dH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxBaU91dGxpbmVMb2dvdXQgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gIClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J292ZXJhbGxfX2xheW91dC1zdHlsZXMnPlxyXG4gICAgICB7SGVhZCgpfVxyXG4gICAgICB7bmF2QmFyKCl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgY3VzdG9tQ29udGFpbmVyIHB0LTUgcGItNSc+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==