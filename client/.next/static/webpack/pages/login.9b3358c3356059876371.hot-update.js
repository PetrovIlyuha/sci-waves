webpackHotUpdate_N_E("pages/login",{

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: setCookie, removeCookie, getCookie, getCookieClientSide, getCookieServerSide, setLocalStorage, clearLocalStorage, authenticateUser, isUserAuthenticated, logOutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieClientSide", function() { return getCookieClientSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieServerSide", function() { return getCookieServerSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLocalStorage", function() { return clearLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticateUser", function() { return authenticateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUserAuthenticated", function() { return isUserAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutUser", function() { return logOutUser; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
 // setting cookie

var setCookie = function setCookie(key, value) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value, {
      expires: 7
    });
  }
}; // removing cookie

var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);
  }
}; // get cookie from storage

var getCookie = function getCookie(key) {
  return true ? getCookieClientSide(key) : undefined;
};
var getCookieClientSide = function getCookieClientSide(key) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};
var getCookieServerSide = function getCookieServerSide(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  var token = req.headers.cookie.split(";").find(function (cookie) {
    return cookie.trim().startsWith("".concat(key, "="));
  });
  if (!token) return undefined;
  var tokenValue = token.split("=")[1];
}; // save to local storage

var setLocalStorage = function setLocalStorage(key, value) {
  if (true) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}; // clear local storage

var clearLocalStorage = function clearLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
}; // user authentication

var authenticateUser = function authenticateUser(response, next) {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
}; // get user data from local storage

var isUserAuthenticated = function isUserAuthenticated() {
  if (true) {
    var cookiePresent = getCookie("token");

    if (cookiePresent) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
}; // log out user

var logOutUser = function logOutUser() {
  if (true) {
    clearLocalStorage("user");
    removeCookie("token");
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJyZW1vdmVDb29raWUiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJnZXRDb29raWVDbGllbnRTaWRlIiwiZ2V0Q29va2llU2VydmVyU2lkZSIsImdldCIsInJlcSIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJ0b2tlbiIsInNwbGl0IiwiZmluZCIsInRyaW0iLCJzdGFydHNXaXRoIiwidG9rZW5WYWx1ZSIsInNldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYXV0aGVudGljYXRlVXNlciIsInJlc3BvbnNlIiwibmV4dCIsImRhdGEiLCJ1c2VyIiwiaXNVc2VyQXV0aGVudGljYXRlZCIsImNvb2tpZVByZXNlbnQiLCJnZXRJdGVtIiwicGFyc2UiLCJsb2dPdXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDdkMsWUFBcUI7QUFDbkJDLG9EQUFNLENBQUNDLEdBQVAsQ0FBV0gsR0FBWCxFQUFnQkMsS0FBaEIsRUFBdUI7QUFDckJHLGFBQU8sRUFBRTtBQURZLEtBQXZCO0FBR0Q7QUFDRixDQU5NLEMsQ0FRUDs7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxHQUFELEVBQVM7QUFDbkMsWUFBcUI7QUFDbkJFLG9EQUFNLENBQUNJLE1BQVAsQ0FBY04sR0FBZDtBQUNEO0FBQ0YsQ0FKTSxDLENBTVA7O0FBQ08sSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1AsR0FBRCxFQUFTO0FBQ2hDLFNBQU8sT0FDSFEsbUJBQW1CLENBQUNSLEdBQUQsQ0FEaEIsR0FFSFMsU0FGSjtBQUdELENBSk07QUFNQSxJQUFNRCxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNSLEdBQUQsRUFBUztBQUMxQyxTQUFPRSxnREFBTSxDQUFDUSxHQUFQLENBQVdWLEdBQVgsQ0FBUDtBQUNELENBRk07QUFJQSxJQUFNUyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNULEdBQUQsRUFBTVcsR0FBTixFQUFjO0FBQy9DLE1BQUksQ0FBQ0EsR0FBRyxDQUFDQyxPQUFKLENBQVlWLE1BQWpCLEVBQXlCO0FBQ3ZCLFdBQU9XLFNBQVA7QUFDRDs7QUFDRCxNQUFJQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0MsT0FBSixDQUFZVixNQUFaLENBQ1RhLEtBRFMsQ0FDSCxHQURHLEVBRVRDLElBRlMsQ0FFSixVQUFDZCxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDZSxJQUFQLEdBQWNDLFVBQWQsV0FBNEJsQixHQUE1QixPQUFaO0FBQUEsR0FGSSxDQUFaO0FBR0EsTUFBSSxDQUFDYyxLQUFMLEVBQVksT0FBT0QsU0FBUDtBQUNaLE1BQUlNLFVBQVUsR0FBR0wsS0FBSyxDQUFDQyxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUFqQjtBQUNELENBVE0sQyxDQVdQOztBQUNPLElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUM3QyxZQUFxQjtBQUNuQm9CLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUJ0QixHQUFyQixFQUEwQnVCLElBQUksQ0FBQ0MsU0FBTCxDQUFldkIsS0FBZixDQUExQjtBQUNEO0FBQ0YsQ0FKTSxDLENBTVA7O0FBQ08sSUFBTXdCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3pCLEdBQUQsRUFBUztBQUN4QyxZQUFxQjtBQUNuQnFCLGdCQUFZLENBQUNLLFVBQWIsQ0FBd0IxQixHQUF4QjtBQUNEO0FBQ0YsQ0FKTSxDLENBTVA7O0FBQ08sSUFBTTJCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLEVBQW9CO0FBQ2xEOUIsV0FBUyxDQUFDLE9BQUQsRUFBVTZCLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjaEIsS0FBeEIsQ0FBVDtBQUNBTSxpQkFBZSxDQUFDLE1BQUQsRUFBU1EsUUFBUSxDQUFDRSxJQUFULENBQWNDLElBQXZCLENBQWY7QUFDQUYsTUFBSTtBQUNMLENBSk0sQyxDQU1QOztBQUNPLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUN2QyxZQUFxQjtBQUNuQixRQUFNQyxhQUFhLEdBQUcxQixTQUFTLENBQUMsT0FBRCxDQUEvQjs7QUFDQSxRQUFJMEIsYUFBSixFQUFtQjtBQUNqQixVQUFJWixZQUFZLENBQUNhLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUNoQyxlQUFPWCxJQUFJLENBQUNZLEtBQUwsQ0FBV2QsWUFBWSxDQUFDYSxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLENBWE0sQyxDQWFQOztBQUNPLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDOUIsWUFBcUI7QUFDbkJYLHFCQUFpQixDQUFDLE1BQUQsQ0FBakI7QUFDQXBCLGdCQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0Q7QUFDRixDQUxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjliMzM1OGMzMzU2MDU5ODc2MzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuLy8gc2V0dGluZyBjb29raWVcclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgIGV4cGlyZXM6IDcsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVtb3ZpbmcgY29va2llXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnJlbW92ZShrZXkpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBnZXQgY29va2llIGZyb20gc3RvcmFnZVxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSkgPT4ge1xyXG4gIHJldHVybiBwcm9jZXNzLmJyb3dzZXJcclxuICAgID8gZ2V0Q29va2llQ2xpZW50U2lkZShrZXkpXHJcbiAgICA6IGdldENvb2tpZVNlcnZlclNpZGUoa2V5LCByZXEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWVDbGllbnRTaWRlID0gKGtleSkgPT4ge1xyXG4gIHJldHVybiBjb29raWUuZ2V0KGtleSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZVNlcnZlclNpZGUgPSAoa2V5LCByZXEpID0+IHtcclxuICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxuICBsZXQgdG9rZW4gPSByZXEuaGVhZGVycy5jb29raWVcclxuICAgIC5zcGxpdChcIjtcIilcclxuICAgIC5maW5kKChjb29raWUpID0+IGNvb2tpZS50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKVxyXG4gIGlmICghdG9rZW4pIHJldHVybiB1bmRlZmluZWRcclxuICBsZXQgdG9rZW5WYWx1ZSA9IHRva2VuLnNwbGl0KFwiPVwiKVsxXVxyXG59XHJcblxyXG4vLyBzYXZlIHRvIGxvY2FsIHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjbGVhciBsb2NhbCBzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBjbGVhckxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXHJcbiAgfVxyXG59XHJcblxyXG4vLyB1c2VyIGF1dGhlbnRpY2F0aW9uXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVVc2VyID0gKHJlc3BvbnNlLCBuZXh0KSA9PiB7XHJcbiAgc2V0Q29va2llKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbilcclxuICBzZXRMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIsIHJlc3BvbnNlLmRhdGEudXNlcilcclxuICBuZXh0KClcclxufVxyXG5cclxuLy8gZ2V0IHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IGlzVXNlckF1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29uc3QgY29va2llUHJlc2VudCA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbiAgICBpZiAoY29va2llUHJlc2VudCkge1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBsb2cgb3V0IHVzZXJcclxuZXhwb3J0IGNvbnN0IGxvZ091dFVzZXIgPSAoKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY2xlYXJMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIpXHJcbiAgICByZW1vdmVDb29raWUoXCJ0b2tlblwiKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9