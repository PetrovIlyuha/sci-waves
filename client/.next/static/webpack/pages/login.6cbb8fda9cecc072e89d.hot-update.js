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

var getCookie = function getCookie(key, req) {
  return true ? getCookieClientSide(key) : undefined;
};
var getCookieClientSide = function getCookieClientSide(key) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};
var getCookieServerSide = function getCookieServerSide(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  console.log("req.headers.cookie", req.headers.cookie);
  var token = req.headers.cookie.split(";").find(function (cookie) {
    return cookie.trim().startsWith("".concat(key, "="));
  });
  if (!token) return undefined;
  var tokenValue = token.split("=")[1];
  console.log("Get cookie from server", tokenValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJyZW1vdmVDb29raWUiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJyZXEiLCJnZXRDb29raWVDbGllbnRTaWRlIiwiZ2V0Q29va2llU2VydmVyU2lkZSIsImdldCIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJzcGxpdCIsImZpbmQiLCJ0cmltIiwic3RhcnRzV2l0aCIsInRva2VuVmFsdWUiLCJzZXRMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsZWFyTG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImF1dGhlbnRpY2F0ZVVzZXIiLCJyZXNwb25zZSIsIm5leHQiLCJkYXRhIiwidXNlciIsImlzVXNlckF1dGhlbnRpY2F0ZWQiLCJjb29raWVQcmVzZW50IiwiZ2V0SXRlbSIsInBhcnNlIiwibG9nT3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZDLFlBQXFCO0FBQ25CQyxvREFBTSxDQUFDQyxHQUFQLENBQVdILEdBQVgsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ3JCRyxhQUFPLEVBQUU7QUFEWSxLQUF2QjtBQUdEO0FBQ0YsQ0FOTSxDLENBUVA7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0wsR0FBRCxFQUFTO0FBQ25DLFlBQXFCO0FBQ25CRSxvREFBTSxDQUFDSSxNQUFQLENBQWNOLEdBQWQ7QUFDRDtBQUNGLENB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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuLy8gc2V0dGluZyBjb29raWVcclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgIGV4cGlyZXM6IDcsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVtb3ZpbmcgY29va2llXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29va2llLnJlbW92ZShrZXkpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBnZXQgY29va2llIGZyb20gc3RvcmFnZVxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgcmV0dXJuIHByb2Nlc3MuYnJvd3NlclxyXG4gICAgPyBnZXRDb29raWVDbGllbnRTaWRlKGtleSlcclxuICAgIDogZ2V0Q29va2llU2VydmVyU2lkZShrZXksIHJlcSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZUNsaWVudFNpZGUgPSAoa2V5KSA9PiB7XHJcbiAgcmV0dXJuIGNvb2tpZS5nZXQoa2V5KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llU2VydmVyU2lkZSA9IChrZXksIHJlcSkgPT4ge1xyXG4gIGlmICghcmVxLmhlYWRlcnMuY29va2llKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwicmVxLmhlYWRlcnMuY29va2llXCIsIHJlcS5oZWFkZXJzLmNvb2tpZSlcclxuICBsZXQgdG9rZW4gPSByZXEuaGVhZGVycy5jb29raWVcclxuICAgIC5zcGxpdChcIjtcIilcclxuICAgIC5maW5kKChjb29raWUpID0+IGNvb2tpZS50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKVxyXG4gIGlmICghdG9rZW4pIHJldHVybiB1bmRlZmluZWRcclxuICBsZXQgdG9rZW5WYWx1ZSA9IHRva2VuLnNwbGl0KFwiPVwiKVsxXVxyXG4gIGNvbnNvbGUubG9nKFwiR2V0IGNvb2tpZSBmcm9tIHNlcnZlclwiLCB0b2tlblZhbHVlKVxyXG59XHJcblxyXG4vLyBzYXZlIHRvIGxvY2FsIHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjbGVhciBsb2NhbCBzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBjbGVhckxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXHJcbiAgfVxyXG59XHJcblxyXG4vLyB1c2VyIGF1dGhlbnRpY2F0aW9uXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVVc2VyID0gKHJlc3BvbnNlLCBuZXh0KSA9PiB7XHJcbiAgc2V0Q29va2llKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbilcclxuICBzZXRMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIsIHJlc3BvbnNlLmRhdGEudXNlcilcclxuICBuZXh0KClcclxufVxyXG5cclxuLy8gZ2V0IHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IGlzVXNlckF1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29uc3QgY29va2llUHJlc2VudCA9IGdldENvb2tpZShcInRva2VuXCIpXHJcbiAgICBpZiAoY29va2llUHJlc2VudCkge1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBsb2cgb3V0IHVzZXJcclxuZXhwb3J0IGNvbnN0IGxvZ091dFVzZXIgPSAoKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY2xlYXJMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIpXHJcbiAgICByZW1vdmVDb29raWUoXCJ0b2tlblwiKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9