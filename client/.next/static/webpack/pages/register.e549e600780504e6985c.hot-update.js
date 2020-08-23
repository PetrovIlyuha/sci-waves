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
    }))), !Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() ? __jsx("div", {
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
    })))) : __jsx("div", {
      className: "login__menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().role === "admin" && __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/admin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Admin Zone"))), Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])() && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["isUserAuthenticated"])().role !== "admin" && __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/user",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "User Settings"))), __jsx("li", {
      className: "nav-item",
      onClick: onUserLogout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineLogout"], {
      size: 35,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    })))));
  };

  return __jsx("div", {
    className: "overall__layout-styles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, Head(), navBar(), __jsx("div", {
    className: "container customContainer pt-5 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiSGVhZCIsInVzZXJSb2xlIiwiaXNVc2VyQXV0aGVudGljYXRlZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwib25Vc2VyTG9nb3V0IiwibG9nT3V0VXNlciIsIlJvdXRlciIsInB1c2giLCJuYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUMvQixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1gsbUVBQ0U7QUFDRSxTQUFHLEVBQUMsWUFETjtBQUVFLFVBQUksRUFBQyx1RUFGUDtBQUdFLGVBQVMsRUFBQyx5RUFIWjtBQUlFLGlCQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEVztBQUFBLEdBQWI7O0FBV0EsTUFBTUMsUUFBUSxHQUFHQywwRUFBbUIsR0FBR0MsSUFBdkM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMscUVBQVU7QUFDVkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FDYjtBQUFJLGVBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsVUFBYjtBQUF3QixVQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FERixFQU1HLENBQUNSLDBFQUFtQixFQUFwQixHQUNDO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBSSxFQUFFLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREYsRUFNRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlEQUFEO0FBQVksVUFBSSxFQUFFLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBTkYsQ0FERCxHQWNDO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSwwRUFBbUIsTUFBTUEsMEVBQW1CLEdBQUdDLElBQXRCLEtBQStCLE9BQXhELElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLENBRkosRUFRR0QsMEVBQW1CLE1BQU1BLDBFQUFtQixHQUFHQyxJQUF0QixLQUErQixPQUF4RCxJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixDQVRKLEVBZUU7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUF5QixhQUFPLEVBQUVHLFlBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQWlCLFVBQUksRUFBRSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQWZGLENBcEJKLENBRGE7QUFBQSxHQUFmOztBQTZDQSxTQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sSUFBSSxFQURQLEVBRUdVLE1BQU0sRUFGVCxFQUdFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0RYLFFBQXRELENBSEYsQ0FERjtBQU9ELENBeEVEOztLQUFNRCxNO0FBMEVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5lNTQ5ZTYwMDc4MDUwNGU2OTg1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBIb21lTG9nbyBmcm9tIFwiLi9Ib21lTG9nb1wiXHJcbmltcG9ydCB7IEZpVXNlclBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxyXG5pbXBvcnQgeyBBaU91dGxpbmVMb2dpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXHJcbmltcG9ydCB7IGlzVXNlckF1dGhlbnRpY2F0ZWQsIGxvZ091dFVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiXHJcbmltcG9ydCB7IEFpT3V0bGluZUxvZ291dCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgSGVhZCA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuICAgICAgICBpbnRlZ3JpdHk9J3NoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtJ1xyXG4gICAgICAgIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnXHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApXHJcblxyXG4gIGNvbnN0IHVzZXJSb2xlID0gaXNVc2VyQXV0aGVudGljYXRlZCgpLnJvbGVcclxuICBjb25zb2xlLmxvZyh1c2VyUm9sZSlcclxuXHJcbiAgY29uc3Qgb25Vc2VyTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9nT3V0VXNlcigpXHJcbiAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbmF2QmFyID0gKCkgPT4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT0nbmF2IGN1c3RvbU5hdiBuYXYtdGFicyc+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J2hvbWVMaW5rJyBocmVmPScvJz5cclxuICAgICAgICAgIDxIb21lTG9nbyAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgeyFpc1VzZXJBdXRoZW50aWNhdGVkKCkgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL2xvZ2luJz5cclxuICAgICAgICAgICAgICA8QWlPdXRsaW5lTG9naW4gc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy9yZWdpc3Rlcic+XHJcbiAgICAgICAgICAgICAgPEZpVXNlclBsdXMgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luX19tZW51Jz5cclxuICAgICAgICAgIHtpc1VzZXJBdXRoZW50aWNhdGVkKCkgJiYgaXNVc2VyQXV0aGVudGljYXRlZCgpLnJvbGUgPT09IFwiYWRtaW5cIiAmJiAoXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvYWRtaW4nPlxyXG4gICAgICAgICAgICAgICAgPGE+QWRtaW4gWm9uZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2lzVXNlckF1dGhlbnRpY2F0ZWQoKSAmJiBpc1VzZXJBdXRoZW50aWNhdGVkKCkucm9sZSAhPT0gXCJhZG1pblwiICYmIChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy91c2VyJz5cclxuICAgICAgICAgICAgICAgIDxhPlVzZXIgU2V0dGluZ3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJyBvbkNsaWNrPXtvblVzZXJMb2dvdXR9PlxyXG4gICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICA8QWlPdXRsaW5lTG9nb3V0IHNpemU9ezM1fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC91bD5cclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyYWxsX19sYXlvdXQtc3R5bGVzJz5cclxuICAgICAge0hlYWQoKX1cclxuICAgICAge25hdkJhcigpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGN1c3RvbUNvbnRhaW5lciBwdC01IHBiLTUnPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=