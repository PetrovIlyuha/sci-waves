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

  var userRole = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().role;
  console.log(userRole);

  var onUserLogout = function onUserLogout() {
    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["logOutUser"])();
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
  };

  console.log(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])());

  var navBar = function navBar() {
    return __jsx("ul", {
      className: "nav nav-tabs",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiSGVhZCIsInVzZXJSb2xlIiwiaXNVc2VyQXV0aGVudGljYXRlZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwib25Vc2VyTG9nb3V0IiwibG9nT3V0VXNlciIsIlJvdXRlciIsInB1c2giLCJuYXZCYXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDL0IsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUNYLG1FQUNFO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxVQUFJLEVBQUMsdUVBRlA7QUFHRSxlQUFTLEVBQUMseUVBSFo7QUFJRSxpQkFBVyxFQUFDLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFc7QUFBQSxHQUFiOztBQVdBLE1BQU1DLFFBQVEsR0FBR0MsMEVBQW1CLE1BQU1BLDBFQUFtQixHQUFHQyxJQUFoRTtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxxRUFBVTtBQUNWQyxzREFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNELEdBSEQ7O0FBSUFMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCwwRUFBbUIsRUFBL0I7O0FBQ0EsTUFBTVEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUNiO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLFVBQWQ7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QUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sSUFBSSxFQURQLEVBRUdVLE1BQU0sRUFGVCxFQUdFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0RYLFFBQXRELENBSEYsQ0FERjtBQU9ELENBOUVEOztLQUFNRCxNO0FBZ0ZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYzNhNmRhODk5NTAwZmQxNGQzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBIb21lTG9nbyBmcm9tIFwiLi9Ib21lTG9nb1wiXHJcbmltcG9ydCB7IEZpVXNlclBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxyXG5pbXBvcnQgeyBBaU91dGxpbmVMb2dpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXHJcbmltcG9ydCB7IGlzVXNlckF1dGhlbnRpY2F0ZWQsIGxvZ091dFVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiXHJcbmltcG9ydCB7IEFpT3V0bGluZUxvZ291dCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgSGVhZCA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuICAgICAgICBpbnRlZ3JpdHk9J3NoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtJ1xyXG4gICAgICAgIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnXHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApXHJcblxyXG4gIGNvbnN0IHVzZXJSb2xlID0gaXNVc2VyQXV0aGVudGljYXRlZCgpICYmIGlzVXNlckF1dGhlbnRpY2F0ZWQoKS5yb2xlXHJcbiAgY29uc29sZS5sb2codXNlclJvbGUpXHJcblxyXG4gIGNvbnN0IG9uVXNlckxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvZ091dFVzZXIoKVxyXG4gICAgUm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICB9XHJcbiAgY29uc29sZS5sb2coaXNVc2VyQXV0aGVudGljYXRlZCgpKVxyXG4gIGNvbnN0IG5hdkJhciA9ICgpID0+IChcclxuICAgIDx1bCBjbGFzc05hbWU9J25hdiBuYXYtdGFicyc+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J2hvbWVMaW5rJyBocmVmPScvJz5cclxuICAgICAgICAgIDxIb21lTG9nbyAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgeyFpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbl9fbWVudSc+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy9sb2dpbic+XHJcbiAgICAgICAgICAgICAgPEFpT3V0bGluZUxvZ2luIHNpemU9ezM1fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG4gICAgICAgICAgICA8YSBocmVmPScvcmVnaXN0ZXInPlxyXG4gICAgICAgICAgICAgIDxGaVVzZXJQbHVzIHNpemU9ezM1fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7aXNVc2VyQXV0aGVudGljYXRlZCgpICYmIHVzZXJSb2xlID09PSBcImFkbWluXCIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbl9fbWVudSc+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsb2dpbl9fbWVudS0tdXNlci1pbmZvJz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FkbWluJz5cclxuICAgICAgICAgICAgICA8YT57aXNVc2VyQXV0aGVudGljYXRlZCgpLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nIG9uQ2xpY2s9e29uVXNlckxvZ291dH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgIDxBaU91dGxpbmVMb2dvdXQgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgdXNlclJvbGUgPT09IFwiY3VzdG9tZXJcIiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xvZ2luX19tZW51LS11c2VyLWluZm8nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvdXNlcic+XHJcbiAgICAgICAgICAgICAgPGE+e2lzVXNlckF1dGhlbnRpY2F0ZWQoKS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJyBvbkNsaWNrPXtvblVzZXJMb2dvdXR9PlxyXG4gICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICA8QWlPdXRsaW5lTG9nb3V0IHNpemU9ezM1fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC91bD5cclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyYWxsX19sYXlvdXQtc3R5bGVzJz5cclxuICAgICAge0hlYWQoKX1cclxuICAgICAge25hdkJhcigpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGN1c3RvbUNvbnRhaW5lciBwdC01IHBiLTUnPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=