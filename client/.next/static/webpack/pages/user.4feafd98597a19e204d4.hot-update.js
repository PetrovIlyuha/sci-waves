webpackHotUpdate_N_E("pages/user",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJyZW1vdmVDb29raWUiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJnZXRDb29raWVDbGllbnRTaWRlIiwiZ2V0Q29va2llU2VydmVyU2lkZSIsImdldCIsInJlcSIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJ0b2tlbiIsInNwbGl0IiwiZmluZCIsInRyaW0iLCJzdGFydHNXaXRoIiwidG9rZW5WYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsZWFyTG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImF1dGhlbnRpY2F0ZVVzZXIiLCJyZXNwb25zZSIsIm5leHQiLCJkYXRhIiwidXNlciIsImlzVXNlckF1dGhlbnRpY2F0ZWQiLCJjb29raWVQcmVzZW50IiwiZ2V0SXRlbSIsInBhcnNlIiwibG9nT3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZDLFlBQXFCO0FBQ25CQyxvREFBTSxDQUFDQyxHQUFQLENBQVdILEdBQVgsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ3JCRyxhQUFPLEVBQUU7QUFEWSxLQUF2QjtBQUdEO0FBQ0YsQ0FOTSxDLENBUVA7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0wsR0FBRCxFQUFTO0FBQ25DLFlBQXFCO0FBQ25CRSxvREFBTSxDQUFDSSxNQUFQLENBQWNOLEdBQWQ7QUFDRDtBQUNGLENBSk0sQyxDQU1QOztBQUNPLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNQLEdBQUQsRUFBUztBQUNoQyxTQUFPLE9BQ0hRLG1CQUFtQixDQUFDUixHQUFELENBRGhCLEdBRUhTLFNBRko7QUFHRCxDQUpNO0FBTUEsSUFBTUQsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDUixHQUFELEVBQVM7QUFDMUMsU0FBT0UsZ0RBQU0sQ0FBQ1EsR0FBUCxDQUFXVixHQUFYLENBQVA7QUFDRCxDQUZNO0FBSUEsSUFBTVMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDVCxHQUFELEVBQU1XLEdBQU4sRUFBYztBQUMvQyxNQUFJLENBQUNBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZVixNQUFqQixFQUF5QjtBQUN2QixXQUFPVyxTQUFQO0FBQ0Q7O0FBQ0QsTUFBSUMsS0FBSyxHQUFHSCxHQUFHLENBQUNDLE9BQUosQ0FBWVYsTUFBWixDQUNUYSxLQURTLENBQ0gsR0FERyxFQUVUQyxJQUZTLENBRUosVUFBQ2QsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ2UsSUFBUCxHQUFjQyxVQUFkLFdBQTRCbEIsR0FBNUIsT0FBWjtBQUFBLEdBRkksQ0FBWjtBQUdBLE1BQUksQ0FBQ2MsS0FBTCxFQUFZLE9BQU9ELFNBQVA7QUFDWixNQUFJTSxVQUFVLEdBQUdMLEtBQUssQ0FBQ0MsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBakI7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0NGLFVBQXRDO0FBQ0QsQ0FWTSxDLENBWVA7O0FBQ08sSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdEIsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzdDLFlBQXFCO0FBQ25Cc0IsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQnhCLEdBQXJCLEVBQTBCeUIsSUFBSSxDQUFDQyxTQUFMLENBQWV6QixLQUFmLENBQTFCO0FBQ0Q7QUFDRixDQUpNLEMsQ0FNUDs7QUFDTyxJQUFNMEIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDM0IsR0FBRCxFQUFTO0FBQ3hDLFlBQXFCO0FBQ25CdUIsZ0JBQVksQ0FBQ0ssVUFBYixDQUF3QjVCLEdBQXhCO0FBQ0Q7QUFDRixDQUpNLEMsQ0FNUDs7QUFDTyxJQUFNNkIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFDbERoQyxXQUFTLENBQUMsT0FBRCxFQUFVK0IsUUFBUSxDQUFDRSxJQUFULENBQWNsQixLQUF4QixDQUFUO0FBQ0FRLGlCQUFlLENBQUMsTUFBRCxFQUFTUSxRQUFRLENBQUNFLElBQVQsQ0FBY0MsSUFBdkIsQ0FBZjtBQUNBRixNQUFJO0FBQ0wsQ0FKTSxDLENBTVA7O0FBQ08sSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3ZDLFlBQXFCO0FBQ25CLFFBQU1DLGFBQWEsR0FBRzVCLFNBQVMsQ0FBQyxPQUFELENBQS9COztBQUNBLFFBQUk0QixhQUFKLEVBQW1CO0FBQ2pCLFVBQUlaLFlBQVksQ0FBQ2EsT0FBYixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2hDLGVBQU9YLElBQUksQ0FBQ1ksS0FBTCxDQUFXZCxZQUFZLENBQUNhLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQ0FYTSxDLENBYVA7O0FBQ08sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixZQUFxQjtBQUNuQlgscUJBQWlCLENBQUMsTUFBRCxDQUFqQjtBQUNBdEIsZ0JBQVksQ0FBQyxPQUFELENBQVo7QUFDRDtBQUNGLENBTE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci40ZmVhZmQ5ODU5N2ExOWUyMDRkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuXHJcbi8vIHNldHRpbmcgY29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG4gICAgICBleHBpcmVzOiA3LFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbi8vIHJlbW92aW5nIGNvb2tpZVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvb2tpZS5yZW1vdmUoa2V5KVxyXG4gIH1cclxufVxyXG5cclxuLy8gZ2V0IGNvb2tpZSBmcm9tIHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuICByZXR1cm4gcHJvY2Vzcy5icm93c2VyXHJcbiAgICA/IGdldENvb2tpZUNsaWVudFNpZGUoa2V5KVxyXG4gICAgOiBnZXRDb29raWVTZXJ2ZXJTaWRlKGtleSwgcmVxKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llQ2xpZW50U2lkZSA9IChrZXkpID0+IHtcclxuICByZXR1cm4gY29va2llLmdldChrZXkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWVTZXJ2ZXJTaWRlID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbiAgbGV0IHRva2VuID0gcmVxLmhlYWRlcnMuY29va2llXHJcbiAgICAuc3BsaXQoXCI7XCIpXHJcbiAgICAuZmluZCgoY29va2llKSA9PiBjb29raWUudHJpbSgpLnN0YXJ0c1dpdGgoYCR7a2V5fT1gKSlcclxuICBpZiAoIXRva2VuKSByZXR1cm4gdW5kZWZpbmVkXHJcbiAgbGV0IHRva2VuVmFsdWUgPSB0b2tlbi5zcGxpdChcIj1cIilbMV1cclxuICBjb25zb2xlLmxvZyhcIkdldCBjb29raWUgZnJvbSBzZXJ2ZXJcIiwgdG9rZW5WYWx1ZSlcclxufVxyXG5cclxuLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxyXG4gIH1cclxufVxyXG5cclxuLy8gY2xlYXIgbG9jYWwgc3RvcmFnZVxyXG5leHBvcnQgY29uc3QgY2xlYXJMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxyXG4gIH1cclxufVxyXG5cclxuLy8gdXNlciBhdXRoZW50aWNhdGlvblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVXNlciA9IChyZXNwb25zZSwgbmV4dCkgPT4ge1xyXG4gIHNldENvb2tpZShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pXHJcbiAgc2V0TG9jYWxTdG9yYWdlKFwidXNlclwiLCByZXNwb25zZS5kYXRhLnVzZXIpXHJcbiAgbmV4dCgpXHJcbn1cclxuXHJcbi8vIGdldCB1c2VyIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBpc1VzZXJBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvbnN0IGNvb2tpZVByZXNlbnQgPSBnZXRDb29raWUoXCJ0b2tlblwiKVxyXG4gICAgaWYgKGNvb2tpZVByZXNlbnQpIHtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gbG9nIG91dCB1c2VyXHJcbmV4cG9ydCBjb25zdCBsb2dPdXRVc2VyID0gKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNsZWFyTG9jYWxTdG9yYWdlKFwidXNlclwiKVxyXG4gICAgcmVtb3ZlQ29va2llKFwidG9rZW5cIilcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==