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
        lineNumber: 30,
        columnNumber: 5
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "homeLink",
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx(_HomeLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }))), !Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && __jsx("div", {
      className: "login__menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "/login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogin"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }))), __jsx("li", {
      className: "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "/register",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiUserPlus"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    })))), Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && userRole === "admin" && __jsx("div", {
      className: "login__menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx("li", {
      className: "login__menu--user-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/admin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().name))), __jsx("li", {
      className: "nav-item",
      onClick: onUserLogout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogout"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    })))), Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && userRole === "customer" && __jsx("div", {
      className: "login__menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, __jsx("li", {
      className: "login__menu--user-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/user",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().name))), __jsx("li", {
      className: "nav-item",
      onClick: onUserLogout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogout"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    })))));
  };

  return __jsx("div", {
    className: "overall__layout-styles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, Head(), navBar(), __jsx("div", {
    className: "container customContainer pt-5 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiSGVhZCIsInVzZXJSb2xlIiwiaXNVc2VyQXV0aGVudGljYXRlZCIsInJvbGUiLCJvblVzZXJMb2dvdXQiLCJsb2dPdXRVc2VyIiwiUm91dGVyIiwicHVzaCIsIm5hdkJhciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUMvQixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1gsbUVBQ0U7QUFDRSxTQUFHLEVBQUMsWUFETjtBQUVFLFVBQUksRUFBQyx1RUFGUDtBQUdFLGVBQVMsRUFBQyx5RUFIWjtBQUlFLGlCQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEVztBQUFBLEdBQWI7O0FBV0EsTUFBTUMsUUFBUSxHQUFHQywwRUFBbUIsTUFBTUEsMEVBQW1CLEdBQUdDLElBQWhFOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLHFFQUFVO0FBQ1ZDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQ2I7QUFBSSxlQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLFVBQWI7QUFBd0IsVUFBSSxFQUFDLEdBQTdCO0FBQUE7QUFB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VCxFQUdFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0RULFFBQXRELENBSEYsQ0FERjtBQU9ELENBN0VEOztLQUFNRCxNO0FBK0VTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZjA1MjBjNDdkM2U2MWZlNjBkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBIb21lTG9nbyBmcm9tIFwiLi9Ib21lTG9nb1wiXHJcbmltcG9ydCB7IEZpVXNlclBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxyXG5pbXBvcnQgeyBBaU91dGxpbmVMb2dpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXHJcbmltcG9ydCB7IGlzVXNlckF1dGhlbnRpY2F0ZWQsIGxvZ091dFVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiXHJcbmltcG9ydCB7IEFpT3V0bGluZUxvZ291dCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgSGVhZCA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuICAgICAgICBpbnRlZ3JpdHk9J3NoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtJ1xyXG4gICAgICAgIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnXHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApXHJcblxyXG4gIGNvbnN0IHVzZXJSb2xlID0gaXNVc2VyQXV0aGVudGljYXRlZCgpICYmIGlzVXNlckF1dGhlbnRpY2F0ZWQoKS5yb2xlXHJcblxyXG4gIGNvbnN0IG9uVXNlckxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvZ091dFVzZXIoKVxyXG4gICAgUm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICB9XHJcblxyXG4gIGNvbnN0IG5hdkJhciA9ICgpID0+IChcclxuICAgIDx1bCBjbGFzc05hbWU9J25hdiBjdXN0b21OYXYgbmF2LXRhYnMnPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPSdob21lTGluaycgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8SG9tZUxvZ28gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIHshaXNVc2VyQXV0aGVudGljYXRlZCgpICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5fX21lbnUnPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG4gICAgICAgICAgICA8YSBocmVmPScvbG9naW4nPlxyXG4gICAgICAgICAgICAgIDxBaU91dGxpbmVMb2dpbiBzaXplPXszNX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL3JlZ2lzdGVyJz5cclxuICAgICAgICAgICAgICA8RmlVc2VyUGx1cyBzaXplPXszNX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2lzVXNlckF1dGhlbnRpY2F0ZWQoKSAmJiB1c2VyUm9sZSA9PT0gXCJhZG1pblwiICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5fX21lbnUnPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbG9naW5fX21lbnUtLXVzZXItaW5mbyc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcbiAgICAgICAgICAgICAgPGE+e2lzVXNlckF1dGhlbnRpY2F0ZWQoKS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJyBvbkNsaWNrPXtvblVzZXJMb2dvdXR9PlxyXG4gICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICA8QWlPdXRsaW5lTG9nb3V0IHNpemU9ezM1fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7aXNVc2VyQXV0aGVudGljYXRlZCgpICYmIHVzZXJSb2xlID09PSBcImN1c3RvbWVyXCIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbl9fbWVudSc+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsb2dpbl9fbWVudS0tdXNlci1pbmZvJz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3VzZXInPlxyXG4gICAgICAgICAgICAgIDxhPntpc1VzZXJBdXRoZW50aWNhdGVkKCkubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbScgb25DbGljaz17b25Vc2VyTG9nb3V0fT5cclxuICAgICAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgPEFpT3V0bGluZUxvZ291dCBzaXplPXszNX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmFsbF9fbGF5b3V0LXN0eWxlcyc+XHJcbiAgICAgIHtIZWFkKCl9XHJcbiAgICAgIHtuYXZCYXIoKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBjdXN0b21Db250YWluZXIgcHQtNSBwYi01Jz57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXSwic291cmNlUm9vdCI6IiJ9