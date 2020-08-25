webpackHotUpdate_N_E("pages/login",{

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: setCookie, removeCookie, getCookie, setLocalStorage, clearLocalStorage, authenticateUser, isUserAuthenticated, logOutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJyZW1vdmVDb29raWUiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJnZXRDb29raWVDbGllbnRTaWRlIiwiZ2V0Q29va2llU2VydmVyU2lkZSIsInNldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYXV0aGVudGljYXRlVXNlciIsInJlc3BvbnNlIiwibmV4dCIsImRhdGEiLCJ0b2tlbiIsInVzZXIiLCJpc1VzZXJBdXRoZW50aWNhdGVkIiwiY29va2llUHJlc2VudCIsImdldEl0ZW0iLCJwYXJzZSIsImxvZ091dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZDLFlBQXFCO0FBQ25CQyxvREFBTSxDQUFDQyxHQUFQLENBQVdILEdBQVgsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ3JCRyxhQUFPLEVBQUU7QUFEWSxLQUF2QjtBQUdEO0FBQ0YsQ0FOTSxDLENBUVA7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0wsR0FBRCxFQUFTO0FBQ25DLFlBQXFCO0FBQ25CRSxvREFBTSxDQUFDSSxNQUFQLENBQWNOLEdBQWQ7QUFDRDtBQUNGLENBSk0sQyxDQU1QOztBQUNPLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNQLEdBQUQsRUFBUztBQUNoQyxTQUFPLE9BQ0hRLG1CQUFtQixDQUFDUixHQUFELENBRGhCLEdBRUhTLFNBRko7QUFHRCxDQUpNLEMsQ0FNUDs7QUFDTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNWLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUM3QyxZQUFxQjtBQUNuQlUsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQlosR0FBckIsRUFBMEJhLElBQUksQ0FBQ0MsU0FBTCxDQUFlYixLQUFmLENBQTFCO0FBQ0Q7QUFDRixDQUpNLEMsQ0FNUDs7QUFDTyxJQUFNYyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNmLEdBQUQsRUFBUztBQUN4QyxZQUFxQjtBQUNuQlcsZ0JBQVksQ0FBQ0ssVUFBYixDQUF3QmhCLEdBQXhCO0FBQ0Q7QUFDRixDQUpNLEMsQ0FNUDs7QUFDTyxJQUFNaUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFDbERwQixXQUFTLENBQUMsT0FBRCxFQUFVbUIsUUFBUSxDQUFDRSxJQUFULENBQWNDLEtBQXhCLENBQVQ7QUFDQVgsaUJBQWUsQ0FBQyxNQUFELEVBQVNRLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjRSxJQUF2QixDQUFmO0FBQ0FILE1BQUk7QUFDTCxDQUpNLEMsQ0FNUDs7QUFDTyxJQUFNSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsWUFBcUI7QUFDbkIsUUFBTUMsYUFBYSxHQUFHakIsU0FBUyxDQUFDLE9BQUQsQ0FBL0I7O0FBQ0EsUUFBSWlCLGFBQUosRUFBbUI7QUFDakIsVUFBSWIsWUFBWSxDQUFDYyxPQUFiLENBQXFCLE1BQXJCLENBQUosRUFBa0M7QUFDaEMsZUFBT1osSUFBSSxDQUFDYSxLQUFMLENBQVdmLFlBQVksQ0FBQ2MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRixDQVhNLEMsQ0FhUDs7QUFDTyxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQzlCLFlBQXFCO0FBQ25CWixxQkFBaUIsQ0FBQyxNQUFELENBQWpCO0FBQ0FWLGdCQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0Q7QUFDRixDQUxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjQzNWYwMDZkZjllZjcxYWEyZDIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuLy8gc2V0dGluZyBjb29raWVcclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgIGV4cGlyZXM6IDcsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVtb3ZpbmcgY29va2llXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnJlbW92ZShrZXkpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBnZXQgY29va2llIGZyb20gc3RvcmFnZVxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSkgPT4ge1xyXG4gIHJldHVybiBwcm9jZXNzLmJyb3dzZXJcclxuICAgID8gZ2V0Q29va2llQ2xpZW50U2lkZShrZXkpXHJcbiAgICA6IGdldENvb2tpZVNlcnZlclNpZGUoa2V5LCByZXEpXHJcbn1cclxuXHJcbi8vIHNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGtleSwgdmFsdWUpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcclxuICB9XHJcbn1cclxuXHJcbi8vIGNsZWFyIGxvY2FsIHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcclxuICB9XHJcbn1cclxuXHJcbi8vIHVzZXIgYXV0aGVudGljYXRpb25cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZVVzZXIgPSAocmVzcG9uc2UsIG5leHQpID0+IHtcclxuICBzZXRDb29raWUoXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLnRva2VuKVxyXG4gIHNldExvY2FsU3RvcmFnZShcInVzZXJcIiwgcmVzcG9uc2UuZGF0YS51c2VyKVxyXG4gIG5leHQoKVxyXG59XHJcblxyXG4vLyBnZXQgdXNlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5leHBvcnQgY29uc3QgaXNVc2VyQXV0aGVudGljYXRlZCA9ICgpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBjb25zdCBjb29raWVQcmVzZW50ID0gZ2V0Q29va2llKFwidG9rZW5cIilcclxuICAgIGlmIChjb29raWVQcmVzZW50KSB7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGxvZyBvdXQgdXNlclxyXG5leHBvcnQgY29uc3QgbG9nT3V0VXNlciA9ICgpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBjbGVhckxvY2FsU3RvcmFnZShcInVzZXJcIilcclxuICAgIHJlbW92ZUNvb2tpZShcInRva2VuXCIpXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=